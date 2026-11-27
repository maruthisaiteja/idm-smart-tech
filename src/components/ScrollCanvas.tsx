import { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 300;

export function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Cache-busted URL targeting the 300-frame growth sequence
    const getFrameUrl = (index: number) => {
      const frameNumber = String(index + 1).padStart(6, '0');
      return `/growth-frames/frame_${frameNumber}.jpg?v=growth30fps_v2`;
    };

    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
    const loadedStatus: boolean[] = new Array(TOTAL_FRAMES).fill(false);

    let currentFrame = 0;
    let targetFrame = 0;
    let lastDrawnFrame = -1;
    let animId: number;
    const LERP_FACTOR = 0.12;

    const resizeCanvas = () => {
      // Dynamic DPR capping: 1.5 on mobile to conserve GPU memory, 2.0 on desktop for crispness
      const isMobile = window.innerWidth < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      const newWidth = Math.round(displayWidth * dpr);
      const newHeight = Math.round(displayHeight * dpr);

      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        lastDrawnFrame = -1;
        render(Math.round(currentFrame));
      }
    };

    const drawCover = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;
      if (!iw || !ih) return;

      const canvasRatio = cw / ch;
      const imgRatio = iw / ih;

      let renderW: number, renderH: number, offsetX: number, offsetY: number;

      if (canvasRatio > imgRatio) {
        // Landscape / ultrawide desktop screens
        renderW = cw;
        renderH = cw / imgRatio;
        offsetX = 0;
        offsetY = (ch - renderH) / 2;
      } else {
        // Portrait mobile & tablet screens
        renderH = ch;
        renderW = ch * imgRatio;

        // The 3D animation's focal subject is at ~65% of the frame width.
        // On mobile portrait, we center this focal point so it is never cropped off.
        const isMobilePortrait = canvasRatio < 0.75;
        const focalXRatio = isMobilePortrait ? 0.65 : 0.50;

        const focalPointX = renderW * focalXRatio;
        offsetX = cw * 0.5 - focalPointX;

        // Ensure canvas bounds are respected with zero edge gaps
        offsetX = Math.max(cw - renderW, Math.min(0, offsetX));
        offsetY = 0;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    };

    const getClosestLoadedFrame = (targetIdx: number) => {
      if (loadedStatus[targetIdx] && images[targetIdx]) {
        return images[targetIdx];
      }
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = targetIdx - offset;
        if (prev >= 0 && loadedStatus[prev] && images[prev]) return images[prev];
        const next = targetIdx + offset;
        if (next < TOTAL_FRAMES && loadedStatus[next] && images[next]) return images[next];
      }
      return null;
    };

    const render = (frameIndex: number) => {
      const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
      const img = getClosestLoadedFrame(clampedIndex);
      if (img && (lastDrawnFrame !== clampedIndex || !loadedStatus[lastDrawnFrame])) {
        drawCover(img);
        lastDrawnFrame = clampedIndex;
      }
    };

    const updateTargetFromScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        targetFrame = 0;
        return;
      }
      const scrollFraction = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      targetFrame = scrollFraction * (TOTAL_FRAMES - 1);
    };

    const animate = () => {
      const diff = targetFrame - currentFrame;
      if (Math.abs(diff) > 0.001) {
        currentFrame += diff * LERP_FACTOR;
        render(Math.round(currentFrame));
      } else if (currentFrame !== targetFrame) {
        currentFrame = targetFrame;
        render(Math.round(currentFrame));
      }
      animId = requestAnimationFrame(animate);
    };

    const preloadImages = () => {
      // 1. Load initial frame immediately
      const firstImg = new Image();
      images[0] = firstImg;
      firstImg.onload = () => {
        loadedStatus[0] = true;
        render(0);
      };
      firstImg.src = getFrameUrl(0);

      // 2. Load all remaining frames progressively
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        images[i] = img;
        img.onload = () => {
          loadedStatus[i] = true;
          if (Math.round(currentFrame) === i) {
            render(i);
          }
        };
        img.src = getFrameUrl(i);
      }
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', updateTargetFromScroll, { passive: true });

    resizeCanvas();
    updateTargetFromScroll();
    currentFrame = targetFrame;
    preloadImages();
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateTargetFromScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

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
