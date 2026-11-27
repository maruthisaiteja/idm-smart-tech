import { MessageCircle, Clock, ShieldCheck, ArrowUpRight, Zap } from 'lucide-react';
import { POPULAR_GMB_SERVICES, type GmbServiceItem } from '../data/idmContent';

interface QuickGmbServicesProps {
  onOpenConsultation?: (serviceName: string) => void;
}

export function QuickGmbServices({ onOpenConsultation }: QuickGmbServicesProps) {
  const getWhatsAppHref = (item: GmbServiceItem) => {
    return `https://wa.me/918519837818?text=${encodeURIComponent(item.whatsappMessage)}`;
  };

  return (
    <section
      id="gmb-services"
      aria-label="Google Business Profile Quick Services"
      className="w-full border-b-2 border-[#0B1B42]/15 bg-transparent py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#F8D501] shrink-0" aria-hidden="true" />
              <div className="inline-flex items-center gap-2 border border-[#0B1B42] bg-[#0B1B42] px-3 py-1 shadow-xs">
                <Zap className="h-3.5 w-3.5 text-[#F8D501]" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#F8D501] font-bold">
                  POPULAR GMB SERVICES · RAPID TURNAROUND
                </span>
              </div>
            </div>

            <h2 className="mt-4 font-serif text-[34px] sm:text-[44px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0B1B42]">
              Google Business Profile{' '}
              <span className="italic font-semibold underline decoration-[#F8D501] decoration-[5px] underline-offset-4">
                Speed Fixes
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#0B1B42] font-medium bg-white/90 backdrop-blur-sm border-l-4 border-l-[#F8D501] border border-[#0B1B42]/15 px-4 py-3 shadow-xs">
            Direct intervention by certified Google My Business specialists. 100% compliant, fast-track turnaround, and fixed upfront INR pricing with zero hidden retainers.
          </p>
        </div>

        {/* 4-Column Grid of High-Converting Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_GMB_SERVICES.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between border-t-4 border-t-[#F8D501] border-x-2 border-b-2 border-[#0B1B42]/20 bg-white/95 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:border-[#0B1B42] hover:border-t-[#F8D501] hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Card Header & Badge */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-4 min-h-[28px] lg:min-h-[52px] content-start">
                  <span className="font-mono text-[8.5px] tracking-[0.12em] uppercase text-white font-bold bg-[#0B1B42] px-2 py-1 whitespace-nowrap">
                    {item.badge}
                  </span>
                  <div className="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-[#0B1B42] bg-[#F8D501] px-2 py-1 border border-[#0B1B42]/25 whitespace-nowrap">
                    <Clock className="h-3 w-3 text-[#0B1B42] shrink-0" />
                    <span>{item.tat}</span>
                  </div>
                </div>

                <h3 className="font-serif text-[22px] font-bold leading-[1.25] text-[#0B1B42] group-hover:text-[#162E68] transition-colors">
                  {item.title}
                </h3>

                {/* Price Block in INR */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-[32px] font-bold tracking-tight text-[#0B1B42] tabular-nums">
                    {item.priceInr}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#162E68] font-bold">
                    / ONE-TIME
                  </span>
                </div>

                <p className="mt-3 text-[13px] leading-[1.65] text-[#0F2352] font-medium">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="mt-5 space-y-2.5 border-t border-[#0B1B42]/15 pt-4">
                  {item.deliverables.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[12.5px] leading-[1.5] text-[#0B1B42] font-medium"
                    >
                      <ShieldCheck className="h-4 w-4 text-[#0B1B42] fill-[#F8D501] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-[#0B1B42]/15 flex flex-col gap-2">
                <a
                  href={getWhatsAppHref(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#0B1B42] bg-[#0B1B42] hover:bg-[#162E68] text-[#F8D501] px-4 py-3 font-mono text-[11px] tracking-[0.14em] uppercase font-extrabold transition-all shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>BOOK VIA WHATSAPP</span>
                </a>

                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(item.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 border border-[#0B1B42]/30 bg-[#F4F7FC] hover:bg-[#F8D501] text-[#0B1B42] px-3 py-2 font-mono text-[10px] tracking-[0.14em] uppercase font-bold transition-colors"
                  >
                    <span>REQUEST DETAILS</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip with Official IDM Seal */}
        <div className="mt-10 border-2 border-[#0B1B42]/20 bg-white/95 backdrop-blur-md p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#0B1B42] shadow-sm">
          <div className="flex items-center gap-3">
            <img
              src="/idm-logo.png"
              alt="IDM Verified Compliance"
              className="h-7 w-7 object-contain shrink-0"
            />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#0B1B42] font-extrabold">
              100% White-Hat Google Compliance Guarantee
            </span>
            <span className="hidden md:inline text-[#0B1B42]/30">|</span>
            <span className="hidden md:inline font-medium text-[#0F2352]">
              Strict NDA &amp; multi-factor verification protocols protected by IDM Smart Tech.
            </span>
          </div>

          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#0B1B42] font-semibold">
            Need bulk locations?{' '}
            <a
              href="https://wa.me/918519837818?text=Hi%20IDM%2C%20I%20have%20multi-location%20GMB%20profiles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F8D501] text-[#0B1B42] px-2.5 py-1 border border-[#0B1B42]/25 font-extrabold hover:bg-[#0B1B42] hover:text-[#F8D501] transition-colors ml-1"
            >
              Talk to Founder →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
