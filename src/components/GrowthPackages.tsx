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
      className="w-full border-y-2 border-slate-300 bg-slate-100/70 backdrop-blur-md py-24 md:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-[2px] w-7 bg-[#0F172A] shrink-0" aria-hidden="true" />
              <div className="inline-flex items-center gap-2 border border-slate-400 bg-white px-3 py-1 shadow-xs">
                <Zap className="h-3.5 w-3.5 text-emerald-800" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0F172A] font-bold">
                  TRANSPARENT INR PRICING · ZERO LOCK-IN
                </span>
              </div>
            </div>

            <h2 className="mt-4 font-serif text-[36px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0F172A]">
              Predictable Growth{' '}
              <span className="italic text-[#365679] font-medium">Packages</span>
            </h2>
          </div>

          <p className="max-w-[420px] text-[14px] leading-[1.7] text-[#1E293B] font-medium">
            Flexible month-to-month retainers. All prices listed strictly in INR (₹). Complete data ownership, weekly KPI sprint reviews, and direct senior growth operator access.
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
                    ? 'border-2 border-[#0F172A] bg-white shadow-2xl -translate-y-1 lg:-translate-y-2 ring-1 ring-[#0F172A]'
                    : 'border-2 border-slate-300 bg-white/95 backdrop-blur-md shadow-sm hover:border-[#0F172A] hover:shadow-xl'
                }`}
              >
                {/* Popularity Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white px-3.5 py-1 font-mono text-[9.5px] tracking-[0.2em] uppercase font-bold flex items-center gap-1.5 shadow-md">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Target */}
                  <div className="mb-2">
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#0F172A] font-bold">
                      TIER · {pkg.id.toUpperCase()}
                    </span>
                    <h3 className="mt-1 font-serif text-[23px] font-normal leading-[1.25] text-[#0F172A]">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* INR Price */}
                  <div className="mt-4 pb-4 border-b border-slate-200 flex items-baseline gap-1.5">
                    <span className="font-serif text-[36px] font-extrabold text-[#0F172A] tracking-tight tabular-nums">
                      {pkg.priceInr}
                    </span>
                    <span className="font-mono text-[11.5px] text-[#334155] uppercase tracking-wider font-semibold">
                      {pkg.billingPeriod}
                    </span>
                  </div>

                  {/* Summary & Ideal For */}
                  <div className="mt-4 text-[13px] leading-[1.6] text-[#1E293B]">
                    <p className="font-medium">{pkg.summary}</p>
                    <div className="mt-3 text-[11.5px] font-mono text-[#0F172A] bg-slate-100 p-2.5 border border-slate-300 leading-snug">
                      <span className="font-bold text-[#0F172A]">IDEAL FOR: </span>
                      {pkg.idealFor}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-2">
                    <div className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#0F172A] font-bold mb-3">
                      INCLUDED DELIVERABLES
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-[12.5px] leading-[1.5] text-[#0F172A] font-medium">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${isPopular ? 'text-emerald-800' : 'text-emerald-700'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col gap-2">
                  <a
                    href={getWhatsAppHref(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 font-mono text-[11px] tracking-[0.14em] uppercase font-bold transition-all shadow-sm ${
                      isPopular
                        ? 'bg-[#0F172A] hover:bg-[#1E293B] text-white'
                        : 'border border-emerald-700 bg-emerald-700 hover:bg-emerald-800 text-white'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>BOOK THIS PLAN</span>
                  </a>

                  {onOpenConsultation && (
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(pkg.name)}
                      className="w-full inline-flex items-center justify-center gap-1.5 border border-slate-300 bg-slate-50 hover:bg-slate-100 text-[#0F172A] px-3 py-2 font-mono text-[10px] tracking-[0.14em] uppercase font-bold transition-colors"
                    >
                      <span>DISCUSS CUSTOM SCOPE</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 border-2 border-slate-300 bg-white/95 backdrop-blur-sm p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="space-y-1">
            <div className="font-serif text-[18px] text-[#0F172A] font-semibold">
              Need custom enterprise engineering or multi-brand scaling?
            </div>
            <p className="text-[13.5px] text-[#1E293B] font-medium">
              We tailor dedicated growth squads for regional hospital chains, real estate developers, and national e-commerce brands.
            </p>
          </div>

          <a
            href="https://wa.me/918519837818?text=Hi%20Sanvika%2C%20I%20need%20a%20custom%20enterprise%20quote%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 border border-[#0F172A] bg-[#0F172A] hover:bg-[#1E293B] text-white px-7 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase font-bold transition-colors shadow-sm"
          >
            <span>GET CUSTOM QUOTE →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
