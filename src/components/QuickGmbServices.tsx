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
      className="w-full border-b border-[#CBD5E1] bg-transparent py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#0F172A] shrink-0" aria-hidden="true" />
              <div className="inline-flex items-center gap-2 border border-emerald-400 bg-emerald-100 px-3 py-1 shadow-xs">
                <Zap className="h-3.5 w-3.5 text-emerald-800" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-emerald-950 font-bold">
                  POPULAR GMB SERVICES · RAPID TURNAROUND
                </span>
              </div>
            </div>

            <h2 className="mt-4 font-serif text-[34px] sm:text-[44px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0F172A]">
              Google Business Profile{' '}
              <span className="italic text-[#365679] font-medium">Speed Fixes</span>
            </h2>
          </div>

          <p className="max-w-[420px] text-[14px] sm:text-[14.5px] leading-[1.7] text-[#1E293B] font-medium">
            Direct intervention by certified Google My Business specialists. 100% compliant, fast-track turnaround, and fixed upfront INR pricing with zero hidden retainers.
          </p>
        </div>

        {/* 4-Column Grid of High-Converting Frosted Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_GMB_SERVICES.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between border-2 border-slate-300 bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#0F172A] hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Card Header & Badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#0F172A] font-bold border border-slate-300 bg-slate-100 px-2.5 py-1">
                    {item.badge}
                  </span>
                  <div className="inline-flex items-center gap-1 font-mono text-[10.5px] font-bold text-emerald-950 bg-emerald-100 px-2.5 py-1 border border-emerald-300">
                    <Clock className="h-3.5 w-3.5 text-emerald-800" />
                    <span>{item.tat}</span>
                  </div>
                </div>

                <h3 className="font-serif text-[22px] font-normal leading-[1.25] text-[#0F172A] group-hover:text-[#365679] transition-colors">
                  {item.title}
                </h3>

                {/* Price Block in INR */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-[32px] font-bold tracking-tight text-[#0F172A] tabular-nums">
                    {item.priceInr}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#334155] font-semibold">
                    / ONE-TIME
                  </span>
                </div>

                <p className="mt-3 text-[13px] leading-[1.65] text-[#1E293B] font-medium">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="mt-5 space-y-2.5 border-t border-slate-200 pt-4">
                  {item.deliverables.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[12.5px] leading-[1.5] text-[#0F172A] font-medium">
                      <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href={getWhatsAppHref(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-emerald-700 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-3 font-mono text-[11px] tracking-[0.14em] uppercase font-bold transition-all shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>BOOK VIA WHATSAPP</span>
                </a>

                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(item.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 border border-slate-300 bg-slate-50 hover:bg-slate-100 text-[#0F172A] px-3 py-2 font-mono text-[10px] tracking-[0.14em] uppercase font-bold transition-colors"
                  >
                    <span>REQUEST DETAILS</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-10 border-2 border-slate-300 bg-white/95 backdrop-blur-md p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#0F172A] shadow-sm">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#0F172A] font-bold">
              100% White-Hat Google Compliance Guarantee
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline font-medium text-[#1E293B]">
              No account credentials shared without strict NDA &amp; multi-factor verification protocols.
            </span>
          </div>

          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#0F172A] font-semibold">
            Need bulk locations? <a href="https://wa.me/918519837818?text=Hi%20IDM%2C%20I%20have%20multi-location%20GMB%20profiles" target="_blank" rel="noopener noreferrer" className="underline font-bold text-emerald-800 hover:text-emerald-950">Talk to Founder →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
