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
      className="w-full border-b border-[#DCE1E8] bg-transparent py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-7 bg-[#94A3B8] shrink-0" aria-hidden="true" />
              <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-50/80 px-2.5 py-1">
                <Zap className="h-3 w-3 text-emerald-600" />
                <span className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-emerald-800 font-semibold">
                  POPULAR GMB SERVICES · RAPID TAT
                </span>
              </div>
            </div>

            <h2 className="mt-4 font-serif text-[34px] sm:text-[42px] font-normal leading-[1.12] tracking-[-0.015em] text-[#141C27]">
              Google Business Profile{' '}
              <span className="italic text-[#4F759B]">Speed Fixes</span>
            </h2>
          </div>

          <p className="max-w-[380px] text-[13px] leading-[1.7] text-[#5A6577]">
            Direct intervention by certified GBP specialists. Guaranteed compliance, rapid turnaround, and fixed upfront INR pricing with zero hidden fees.
          </p>
        </div>

        {/* 4-Column Grid of High-Converting Frosted Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_GMB_SERVICES.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between border border-[#DCE1E8] bg-white/80 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:border-[#141C27] hover:shadow-xl hover:-translate-y-1"
            >
              {/* Card Header & Badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#64748B] border border-[#E2E8F0] bg-[#F8FAFC] px-2 py-0.5">
                    {item.badge}
                  </span>
                  <div className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-700 bg-emerald-50/90 px-2 py-0.5 border border-emerald-200/60">
                    <Clock className="h-3 w-3" />
                    <span>{item.tat}</span>
                  </div>
                </div>

                <h3 className="font-serif text-[21px] font-normal leading-[1.25] text-[#141C27] group-hover:text-[#4F759B] transition-colors">
                  {item.title}
                </h3>

                {/* Price Block in INR */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-[30px] font-normal tracking-tight text-[#141C27] tabular-nums">
                    {item.priceInr}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#64748B]">
                    / ONE-TIME
                  </span>
                </div>

                <p className="mt-3 text-[12.5px] leading-[1.65] text-[#5A6577]">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="mt-5 space-y-2 border-t border-[#EEF2F6] pt-4">
                  {item.deliverables.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11.5px] leading-[1.5] text-[#475569]">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 pt-4 border-t border-[#DCE1E8]/70 flex flex-col gap-2">
                <a
                  href={getWhatsAppHref(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-emerald-600 bg-emerald-600/90 hover:bg-emerald-700 text-white px-4 py-2.5 font-mono text-[10.5px] tracking-[0.14em] uppercase transition-all shadow-xs"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>BOOK VIA WHATSAPP</span>
                </a>

                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(item.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 border border-[#DCE1E8] bg-white hover:bg-[#F8FAFC] text-[#5A6577] hover:text-[#141C27] px-3 py-1.5 font-mono text-[9.5px] tracking-[0.14em] uppercase transition-colors"
                  >
                    <span>REQUEST DETAILS</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-8 border border-[#DCE1E8] bg-white/60 backdrop-blur-sm p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#64748B]">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#141C27] font-medium">
              100% White-Hat Google Compliance Guarantee
            </span>
            <span className="hidden md:inline text-[#94A3B8]">|</span>
            <span className="hidden md:inline">No account credentials shared without strict NDA &amp; multi-factor protocols.</span>
          </div>

          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#4F759B]">
            Need bulk locations? <a href="https://wa.me/918519837818?text=Hi%20IDM%2C%20I%20have%20multi-location%20GMB%20profiles" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-[#141C27]">Talk to Founder →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
