import { Check, MessageCircle, ArrowUpRight, Zap, Star } from 'lucide-react';
import { GROWTH_PACKAGES, type GrowthPackageItem } from '../data/idmContent';

interface GrowthPackagesProps {
  onOpenConsultation?: (packageName: string) => void;
}

export function GrowthPackages({ onOpenConsultation }: GrowthPackagesProps) {
  const getWhatsAppHref = (pkg: GrowthPackageItem) => {
    return `https://wa.me/918519837818?text=${encodeURIComponent(pkg.whatsappMessage)}`;
  };

  return (
    <section
      id="packages"
      aria-label="Growth Packages & Retainers"
      className="w-full border-y border-[#DCE1E8] bg-[#EEF1F5]/85 backdrop-blur-md py-24 md:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-[1px] w-7 bg-[#94A3B8] shrink-0" aria-hidden="true" />
              <div className="inline-flex items-center gap-2 border border-[#CBD5E1] bg-white/70 px-2.5 py-1">
                <Zap className="h-3 w-3 text-[#4F759B]" />
                <span className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#64748B] font-semibold">
                  TRANSPARENT INR PRICING · NO LOCK-IN
                </span>
              </div>
            </div>

            <h2 className="mt-4 font-serif text-[36px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#141C27]">
              Predictable Growth{' '}
              <span className="italic text-[#4F759B]">Packages</span>
            </h2>
          </div>

          <p className="max-w-[380px] text-[13px] leading-[1.7] text-[#5A6577]">
            Flexible month-to-month retainers. All prices listed in INR (₹). Complete data ownership, weekly KPI reporting, and direct senior growth operator access.
          </p>
        </div>

        {/* 4-Tier Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {GROWTH_PACKAGES.map((pkg) => {
            const isPopular = Boolean(pkg.isPopular);

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between transition-all duration-300 p-7 ${
                  isPopular
                    ? 'border-2 border-[#141C27] bg-white shadow-xl -translate-y-1 lg:-translate-y-2'
                    : 'border border-[#DCE1E8] bg-white/80 backdrop-blur-md shadow-xs hover:border-[#141C27]/60 hover:shadow-lg'
                }`}
              >
                {/* Popularity Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#141C27] text-white px-3 py-0.5 font-mono text-[9px] tracking-[0.2em] uppercase font-semibold flex items-center gap-1 shadow-sm">
                    <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Target */}
                  <div className="mb-2">
                    <span className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#64748B]">
                      TIER · {pkg.id.toUpperCase()}
                    </span>
                    <h3 className="mt-1 font-serif text-[22px] font-normal leading-[1.25] text-[#141C27]">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* INR Price */}
                  <div className="mt-4 pb-4 border-b border-[#EEF2F6] flex items-baseline gap-1.5">
                    <span className="font-serif text-[34px] font-normal text-[#141C27] tracking-tight tabular-nums">
                      {pkg.priceInr}
                    </span>
                    <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
                      {pkg.billingPeriod}
                    </span>
                  </div>

                  {/* Summary & Ideal For */}
                  <div className="mt-4 text-[12.5px] leading-[1.6] text-[#475569]">
                    <p>{pkg.summary}</p>
                    <div className="mt-2 text-[11px] font-mono text-[#64748B] bg-[#F8FAFC] p-2 border border-[#E2E8F0]/60">
                      <span className="font-semibold text-[#141C27]">IDEAL FOR: </span>
                      {pkg.idealFor}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-2">
                    <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#748094] mb-3">
                      INCLUDED DELIVERABLES
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-[#334155]">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${isPopular ? 'text-emerald-700' : 'text-emerald-600'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 pt-5 border-t border-[#EEF2F6] flex flex-col gap-2">
                  <a
                    href={getWhatsAppHref(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 font-mono text-[10.5px] tracking-[0.14em] uppercase transition-all shadow-xs ${
                      isPopular
                        ? 'bg-[#141C27] hover:bg-[#1E293B] text-white font-semibold'
                        : 'border border-emerald-600 bg-emerald-600/90 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>BOOK THIS PLAN</span>
                  </a>

                  {onOpenConsultation && (
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(pkg.name)}
                      className="w-full inline-flex items-center justify-center gap-1.5 border border-[#DCE1E8] bg-white hover:bg-[#F8FAFC] text-[#5A6577] hover:text-[#141C27] px-3 py-2 font-mono text-[9.5px] tracking-[0.14em] uppercase transition-colors"
                    >
                      <span>DISCUSS CUSTOM SCOPE</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-10 border border-[#DCE1E8] bg-white/70 backdrop-blur-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-serif text-[17px] text-[#141C27] font-medium">
              Need custom enterprise engineering or multi-brand management?
            </div>
            <p className="text-[12.5px] text-[#5A6577]">
              We tailor dedicated growth squads for regional hospital chains, real estate developers, and e-commerce brands.
            </p>
          </div>

          <a
            href="https://wa.me/918519837818?text=Hi%20IDM%2C%20I%20need%20a%20custom%20quote%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 border border-[#141C27] bg-[#141C27] hover:bg-[#1E293B] text-white px-6 py-3 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors"
          >
            <span>GET CUSTOM QUOTE →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
