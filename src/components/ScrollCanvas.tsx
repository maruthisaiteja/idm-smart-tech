import { useCallback, useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';

const TOTAL_FRAMES = 300;

export function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const loadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const currentFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);

  const renderFrame = useCallback((frameIndex: number, force = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
    currentFrameRef.current = clampedIndex;

    // Pick requested frame or closest preloaded neighbor so progressive loading never flashes blank
    let img: HTMLImageElement | null = null;
    if (loadedRef.current[clampedIndex] && imagesRef.current[clampedIndex]) {
      img = imagesRef.current[clampedIndex];
    } else {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = clampedIndex - offset;
        if (prev >= 0 && loadedRef.current[prev] && imagesRef.current[prev]) {
          img = imagesRef.current[prev];
          break;
        }
        const next = clampedIndex + offset;
        if (next < TOTAL_FRAMES && loadedRef.current[next] && imagesRef.current[next]) {
          img = imagesRef.current[next];
          break;
        }
      }
    }

    if (!img) return;
    if (!force && lastDrawnFrameRef.current === clampedIndex && loadedRef.current[clampedIndex]) {
      return;
    }

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (!iw || !ih) return;

    const canvasRatio = cw / ch;
    const imgRatio = iw / ih;

    let renderW: number, renderH: number, offsetX: number, offsetY: number;

    if (canvasRatio > imgRatio) {
      renderW = cw;
      renderH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - renderH) / 2;
    } else {
      renderH = ch;
      renderW = ch * imgRatio;
      const isMobilePortrait = canvasRatio < 0.75;
      const focalXRatio = isMobilePortrait ? 0.65 : 0.50;
      const focalPointX = renderW * focalXRatio;
      offsetX = Math.max(cw - renderW, Math.min(0, cw * 0.5 - focalPointX));
      offsetY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    lastDrawnFrameRef.current = clampedIndex;
  }, []);

  // Lock 300-frame canvas scrub 1:1 with Lenis smooth scroll progress
  useLenis(
    (lenis) => {
      const progress = Number.isFinite(lenis.progress) ? lenis.progress : 0;
      const clampedProgress = Math.max(0, Math.min(1, progress));
      renderFrame(Math.round(clampedProgress * (TOTAL_FRAMES - 1)));
    },
    [renderFrame]
  );

  useEffect(() => {
    const getFrameUrl = (index: number) => {
      const frameNumber = String(index + 1).padStart(6, '0');
      return `/growth-frames/frame_${frameNumber}.jpg?v=growth30fps_v2`;
    };

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const isMobile = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
      const newWidth = Math.round(window.innerWidth * dpr);
      const newHeight = Math.round(window.innerHeight * dpr);

      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        lastDrawnFrameRef.current = -1;
        renderFrame(currentFrameRef.current, true);
      }
    };

    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const initialProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    currentFrameRef.current = Math.round(initialProgress * (TOTAL_FRAMES - 1));

    resizeCanvas();

    // Progressive preload starting with frame 0 for instant Hero clarity
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (imagesRef.current[i]) continue;
      const img = new Image();
      imagesRef.current[i] = img;
      img.onload = () => {
        loadedRef.current[i] = true;
        if (currentFrameRef.current === i || lastDrawnFrameRef.current === -1) {
          renderFrame(currentFrameRef.current, true);
        }
      };
      img.src = getFrameUrl(i);
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [renderFrame]);

  return (
    <div className="fixed inset-0 w-full h-[100dvh] pointer-events-none z-0 overflow-hidden bg-[#EAEFF7]">
      <canvas
        ref={canvasRef}
        id="animation-canvas"
        className="w-full h-full block"
        style={{
          backgroundColor: '#EAEFF7',
          filter: 'contrast(1.07) brightness(1.02) saturate(0.86) hue-rotate(-10deg)',
        }}
      />
      {/* Subtle Brand Color-Grading Atmosphere matching IDM Royal Navy & Gold */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 20%, rgba(11, 27, 66, 0.07) 0%, transparent 48%), radial-gradient(circle at 86% 18%, rgba(248, 213, 1, 0.09) 0%, transparent 45%), linear-gradient(180deg, rgba(244, 247, 252, 0.35) 0%, rgba(244, 247, 252, 0.05) 35%, rgba(11, 27, 66, 0.05) 100%)',
        }}
      />
    </div>
  );
}
