import { useEffect, useRef, useState } from 'react';
import { X, Send, Sparkles, MessageCircle, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SITE_INFO } from '../data/idmContent';

interface AIAvatarConciergeProps {
  onOpenConsultation?: (topic?: string) => void;
}

const PRESET_QUERIES = [
  'Local SEO & Google Maps',
  'Google & Meta Ads ROI',
  'Web & Mobile App Development',
  'WhatsApp AI Automation',
];

export function AIAvatarConcierge({ onOpenConsultation }: AIAvatarConciergeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 3D Procedural Avatar Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let baseAngleX = 0.2;
    let baseAngleY = 0.3;
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let currentRotX = 0.2;
    let currentRotY = 0.3;

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseTargetX = ny * 0.45;
      mouseTargetY = nx * 0.55;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Orbital particles
    const particles = Array.from({ length: 18 }, (_, idx) => ({
      angle: (idx / 18) * Math.PI * 2,
      speed: 0.02 + (idx % 3) * 0.008,
      radius: 26 + (idx % 4) * 4,
      tilt: ((idx % 5) - 2) * 0.35,
    }));

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Smooth tracking interpolation
      const rotSpeed = isHovered ? 0.035 : 0.015;
      baseAngleY += rotSpeed;
      baseAngleX += rotSpeed * 0.4;

      currentRotX += (baseAngleX + mouseTargetX - currentRotX) * 0.08;
      currentRotY += (baseAngleY + mouseTargetY - currentRotY) * 0.08;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      // 3D Point Projection Helper
      const project = (x: number, y: number, z: number) => {
        // Rotate Y
        const x1 = x * cosY + z * sinY;
        const y1 = y;
        const z1 = -x * sinY + z * cosY;

        // Rotate X
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        const fov = 120;
        const scale = fov / (fov + z2);
        return {
          px: cx + x2 * scale,
          py: cy + y2 * scale,
          z: z2,
          scale,
        };
      };

      // 1. Draw Central Glowing Core Sphere
      const coreGrad = ctx.createRadialGradient(cx - 3, cy - 4, 2, cx, cy, 18);
      coreGrad.addColorStop(0, '#FFFFFF');
      coreGrad.addColorStop(0.25, '#60A5FA');
      coreGrad.addColorStop(0.65, '#2563EB');
      coreGrad.addColorStop(1, '#0F172A');

      // Outer ambient core glow
      ctx.beginPath();
      ctx.arc(cx, cy, 22, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.fill();

      // Core sphere
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.shadowColor = '#60A5FA';
      ctx.shadowBlur = isHovered ? 14 : 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Specular shine on core
      ctx.beginPath();
      ctx.arc(cx - 4, cy - 5, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();

      // 2. Draw 3D Gyroscope Rings
      const numSegments = 32;
      const rings = [
        { radius: 24, plane: 'xy', color: 'rgba(96, 165, 250, ' },
        { radius: 27, plane: 'xz', color: 'rgba(147, 197, 253, ' },
        { radius: 22, plane: 'yz', color: 'rgba(56, 189, 248, ' },
      ];

      rings.forEach((ring) => {
        ctx.beginPath();
        let first = true;
        for (let i = 0; i <= numSegments; i++) {
          const theta = (i / numSegments) * Math.PI * 2;
          let rx = 0, ry = 0, rz = 0;
          if (ring.plane === 'xy') {
            rx = ring.radius * Math.cos(theta);
            ry = ring.radius * Math.sin(theta);
          } else if (ring.plane === 'xz') {
            rx = ring.radius * Math.cos(theta);
            rz = ring.radius * Math.sin(theta);
          } else {
            ry = ring.radius * Math.cos(theta);
            rz = ring.radius * Math.sin(theta);
          }

          const pt = project(rx, ry, rz);
          if (first) {
            ctx.moveTo(pt.px, pt.py);
            first = false;
          } else {
            ctx.lineTo(pt.px, pt.py);
          }
        }
        ctx.strokeStyle = ring.color + (isHovered ? '0.85)' : '0.55)');
        ctx.lineWidth = isHovered ? 1.6 : 1.2;
        ctx.stroke();
      });

      // 3. Draw Orbiting Particles
      particles.forEach((p) => {
        p.angle += p.speed * (isHovered ? 1.8 : 1.0);
        const ox = p.radius * Math.cos(p.angle);
        const oz = p.radius * Math.sin(p.angle);
        const oy = Math.sin(p.angle + p.tilt) * 6;

        const pt = project(ox, oy, oz);
        const alpha = Math.max(0.2, (pt.z + 40) / 80);

        ctx.beginPath();
        ctx.arc(pt.px, pt.py, 1.6 * pt.scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [isHovered]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() && !contact.trim()) return;
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      query.trim()
        ? `Hi IDM Smart Tech, I am interested in: ${query}. (Contact: ${contact || 'Direct inquiry'})`
        : 'Hi IDM Smart Tech, I would like to consult with your senior growth team.'
    );
    window.open(`https://wa.me/918519837818?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Query & Consultation Card */}
      {isOpen && (
        <div
          className="mb-2 sm:mb-3 w-[calc(100vw-32px)] sm:w-[370px] max-h-[84dvh] overflow-y-auto border border-[#DCE1E8] bg-white/95 backdrop-blur-2xl shadow-2xl p-4 sm:p-5 text-[#141C27] animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-label="AI Growth Concierge"
        >
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div>
                <h4 className="font-serif text-[15px] font-medium leading-none text-[#141C27]">
                  Growth Concierge
                </h4>
                <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#64748B]">
                  IDM SMART TECH · LIVE DESK
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#64748B] hover:text-[#141C27] transition-colors"
              aria-label="Close query box"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {submitted ? (
            <div className="py-7 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="font-serif text-[17px] text-[#141C27]">Inquiry Dispatched</p>
              <p className="mt-1.5 text-[12.5px] text-[#64748B]">
                Raghavendra &amp; team will respond within 4 business hours.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center justify-center gap-2 border border-emerald-600 bg-emerald-600 text-white px-4 py-2 text-[12px] font-mono tracking-wider uppercase hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Open WhatsApp Direct</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setQuery('');
                    setContact('');
                  }}
                  className="text-[11.5px] text-[#64748B] hover:text-[#141C27] underline py-1"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-3.5 space-y-3.5">
              {/* Preset Intent Chips */}
              <div>
                <span className="block font-mono text-[9px] tracking-[0.16em] uppercase text-[#64748B] mb-2">
                  QUICK FOCUS AREAS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_QUERIES.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setQuery(preset)}
                      className="border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-[11px] text-[#475569] hover:border-[#141C27] hover:text-[#141C27] hover:bg-white transition-all text-left"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inquiry Input Form */}
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div>
                  <textarea
                    rows={2}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Describe your revenue targets, current challenges, or timeline..."
                    className="w-full border border-[#DCE1E8] bg-white p-2.5 text-[12.5px] text-[#141C27] placeholder:text-[#94A3B8] focus:border-[#141C27] focus:outline-none resize-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Phone or WhatsApp number (+91...)"
                    className="w-full border border-[#DCE1E8] bg-white px-3 py-2 text-[12px] text-[#141C27] placeholder:text-[#94A3B8] focus:border-[#141C27] focus:outline-none"
                    required
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#141C27] text-white px-3.5 py-2.5 text-[11px] font-mono tracking-wider uppercase hover:bg-[#1E293B] transition-colors"
                  >
                    <span>Send Query</span>
                    <Send className="h-3 w-3" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    title="Direct WhatsApp"
                    className="inline-flex items-center justify-center border border-emerald-600 bg-emerald-50 text-emerald-700 px-3 py-2.5 hover:bg-emerald-600 hover:text-white transition-colors"
                    aria-label="Direct WhatsApp chat"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {/* Direct Call / Office Strip */}
              <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
                <a
                  href={`tel:${SITE_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                  className="hover:text-[#141C27] inline-flex items-center gap-1"
                >
                  <Phone className="h-3 w-3" />
                  <span>{SITE_INFO.phoneDisplay}</span>
                </a>
                <span className="font-mono text-[9px] uppercase text-emerald-600 font-medium">
                  Direct Line
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating 3D Avatar Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/60 bg-[#0E1521]/90 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-108 hover:border-[#60A5FA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141C27]"
        aria-label="Toggle AI Growth Concierge"
        aria-expanded={isOpen}
      >
        {/* Real-time 3D Canvas Gyroscope Avatar */}
        <canvas
          ref={canvasRef}
          width={64}
          height={64}
          className="pointer-events-none rounded-full"
        />

        {/* Online Status Indicator */}
        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-[#0E1521] bg-emerald-500" />
        </span>

        {/* Micro Tooltip */}
        {!isOpen && (
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap border border-[#DCE1E8] bg-white/95 px-2.5 py-1 text-[10.5px] font-mono tracking-wider uppercase text-[#141C27] opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
            Ask IDM Concierge
          </span>
        )}
      </button>
    </div>
  );
}
