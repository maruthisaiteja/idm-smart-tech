import { useRef, useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { SITE_INFO } from '../data/idmContent';

interface FounderAvatarWidgetProps {
  onOpenConsultation?: (topic?: string) => void;
}

const PRESET_GOALS = [
  'GMB Top 3 & Video Verification',
  'Google & Meta Ads Lead Funnel',
  'Full-Stack Web & App Development',
  'Growth Retainer / Dedicated Squad',
];

export function FounderAvatarWidget({ onOpenConsultation }: FounderAvatarWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [pillDismissed, setPillDismissed] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(PRESET_GOALS[0]);
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const avatarRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 14,
      y: (x / (rect.width / 2)) * 14,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const text = `Hi Sanvika, I am ${encodeURIComponent(name.trim())} (${encodeURIComponent(
      phone.trim()
    )}). I want 3x more qualified leads for: ${encodeURIComponent(selectedGoal)}. Let's discuss a growth plan!`;
    const waUrl = `https://wa.me/918519837818?text=${text}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Layer: Bottom-Right */}
      <aside
        aria-label="Contact Founder & Operations Lead"
        className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3 select-none"
      >
        {/* Captive Floating Message Pill (Option 1) */}
        {!isOpen && !pillDismissed && (
          <div
            onClick={() => setIsOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsOpen(true);
            }}
            className="group relative cursor-pointer border-2 border-[#F8D501] bg-[#0B1B42]/95 backdrop-blur-md px-4 py-2.5 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-[#F8D501] focus-visible:outline-2 focus-visible:outline-[#0B1B42] hidden sm:flex items-center gap-2.5 rounded-full"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8D501] group-hover:bg-[#0B1B42] opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F8D501] group-hover:bg-[#0B1B42]" />
            </span>
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-white group-hover:text-[#0B1B42]">
              Want 3x More Leads? Enquire With Founder →
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPillDismissed(true);
              }}
              aria-label="Dismiss prompt"
              className="ml-1 text-slate-300 hover:text-white group-hover:text-[#0B1B42] transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* 3D Dynamic Avatar Disc — Bantaram Sanvika */}
        <div
          ref={avatarRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsOpen((prev) => !prev)}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close Founder Concierge' : 'Chat with Bantaram Sanvika'}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsOpen((prev) => !prev);
          }}
          style={{
            perspective: 800,
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.08 : 1})`,
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          className="relative cursor-pointer h-16 w-16 sm:h-[74px] sm:w-[74px] rounded-full border-2 border-[#0B1B42] ring-2 ring-[#F8D501] bg-gradient-to-b from-[#FFFDF0] via-white to-[#E6ECF7] shadow-2xl p-1 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#0B1B42]"
        >
          {/* Outer Glowing Brand Halo */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#F8D501]/45 to-[#0B1B42]/35 blur-[7px] -z-10 animate-pulse" />

          {/* Avatar Image Frame */}
          <div className="h-full w-full rounded-full overflow-hidden bg-gradient-to-b from-[#FFFDF2] to-[#E9EFFA] border border-[#0B1B42]/20 relative">
            <img
              src="/sanvika-avatar.png"
              alt="Bantaram Sanvika — Co-Founder & Operations Lead"
              className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Active Status Beacon in Logo Gold */}
          <div
            title="Online Now"
            className="absolute -bottom-0.5 -right-0.5 h-4.5 w-4.5 rounded-full bg-[#F8D501] border-2 border-[#0B1B42] shadow-sm flex items-center justify-center"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0B1B42]" />
          </div>
        </div>
      </aside>

      {/* Slide-in Lead Concierge Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:pr-8 bg-[#071330]/55 backdrop-blur-xs p-3 sm:p-0"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:w-[420px] max-h-[90vh] overflow-y-auto border-2 border-[#0B1B42] border-t-4 border-t-[#F8D501] bg-white shadow-2xl text-[#0B1B42] animate-in fade-in slide-in-from-bottom-5 duration-300"
          >
            {/* Drawer Header with Sanvika's Verified Identity & IDM Badge */}
            <div className="bg-[#0B1B42] text-white p-5 border-b-2 border-[#F8D501] flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[#F8D501] bg-white shrink-0">
                  <img
                    src="/sanvika-avatar.png"
                    alt="Bantaram Sanvika"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-[18px] font-bold text-white">
                      Bantaram Sanvika
                    </span>
                    <ShieldCheck className="h-4 w-4 text-[#F8D501] shrink-0" />
                  </div>
                  <div className="font-mono text-[10px] tracking-wider uppercase text-[#F8D501] font-bold">
                    Co-Founder &amp; Operations Lead
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-[#F8D501] animate-pulse" />
                    <span>Active Now · Replies in under 4h</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close concierge"
                className="text-slate-300 hover:text-[#F8D501] transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-5">
              {/* Quick WhatsApp 1-Tap Trigger */}
              <div>
                <a
                  href="https://wa.me/918519837818?text=Hi%20Sanvika%2C%20I%20want%203x%20more%20qualified%20leads%20for%20my%20business.%20Let%27s%20discuss%20a%20growth%20plan!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 border-2 border-[#0B1B42] bg-[#F8D501] hover:bg-[#E5C300] text-[#0B1B42] py-3.5 px-4 font-mono text-[11px] tracking-wider uppercase font-extrabold transition-all shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>CHAT WITH SANVIKA ON WHATSAPP →</span>
                </a>
                <p className="mt-1.5 text-center font-mono text-[9.5px] uppercase tracking-wider text-[#162E68] font-semibold">
                  Direct Founder Chat · No junior account managers
                </p>
              </div>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-[#0B1B42]/15" />
                <span className="flex-shrink mx-3 font-mono text-[10px] uppercase tracking-widest text-[#162E68] font-semibold">
                  OR LEAVE DETAILS FOR 4H AUDIT
                </span>
                <div className="flex-grow border-t border-[#0B1B42]/15" />
              </div>

              {/* 20-Second Direct Lead Capture Form */}
              {submitted ? (
                <div className="border-2 border-[#F8D501] bg-[#FFFDF0] p-5 text-center space-y-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1B42] text-[#F8D501]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h4 className="font-serif text-[18px] font-bold text-[#0B1B42]">
                    Enquiry Connected!
                  </h4>
                  <p className="text-[12.5px] text-[#0F2352] leading-relaxed font-medium">
                    Opening WhatsApp to connect you directly with Bantaram Sanvika. You will receive your audit review shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="font-mono text-[10px] uppercase tracking-wider text-[#0B1B42] underline font-bold pt-1"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitLead} className="space-y-3.5">
                  <div>
                    <label className="block font-mono text-[10px] tracking-wider uppercase text-[#0B1B42] font-bold mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Sharma / Ananya Rao"
                      className="w-full border border-[#0B1B42]/25 bg-[#F4F7FC] px-3 py-2 text-[13px] text-[#0B1B42] focus:border-[#0B1B42] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-wider uppercase text-[#0B1B42] font-bold mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full border border-[#0B1B42]/25 bg-[#F4F7FC] px-3 py-2 text-[13px] text-[#0B1B42] focus:border-[#0B1B42] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-wider uppercase text-[#0B1B42] font-bold mb-1">
                      Primary Growth Goal
                    </label>
                    <select
                      value={selectedGoal}
                      onChange={(e) => setSelectedGoal(e.target.value)}
                      className="w-full border border-[#0B1B42]/25 bg-[#F4F7FC] px-3 py-2 text-[12.5px] text-[#0B1B42] font-medium focus:border-[#0B1B42] focus:bg-white focus:outline-none"
                    >
                      {PRESET_GOALS.map((goal) => (
                        <option key={goal} value={goal}>
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#0B1B42] bg-[#0B1B42] hover:bg-[#162E68] text-[#F8D501] py-3 font-mono text-[10.5px] tracking-[0.16em] uppercase font-extrabold transition-colors shadow-sm"
                  >
                    <span>ENQUIRE WITH FOUNDER NOW</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}

              {/* Direct Inquiries Row */}
              <div className="pt-3 border-t border-[#0B1B42]/15 flex items-center justify-between text-[11.5px] text-[#0B1B42]">
                <a
                  href={SITE_INFO.phoneHref}
                  className="flex items-center gap-1.5 font-bold hover:text-[#162E68]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#0B1B42]" />
                  <span>{SITE_INFO.phoneDisplay}</span>
                </a>

                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenConsultation('Comprehensive Strategy Call');
                    }}
                    className="font-mono text-[10px] uppercase tracking-wider text-[#0B1B42] bg-[#F8D501]/60 hover:bg-[#F8D501] px-2.5 py-1 font-bold transition-colors"
                  >
                    Full 30-Min Call →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
