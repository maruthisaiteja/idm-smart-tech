import { useRef } from 'react';
import { Check, MessageCircle, ArrowUpRight, Zap, Star } from 'lucide-react';
import { GROWTH_PACKAGES, type GrowthPackageItem } from '../data/idmContent';
import { BrandLogo } from './BrandLogo';
import { gsap, useGSAP } from '../lib/gsapSetup';

interface GrowthPackagesProps {
  onOpenConsultation?: (packageName: string) => void;
}

export function GrowthPackages({ onOpenConsultation }: GrowthPackagesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };
          const yOffset = isDesktop ? 34 : 18;

          gsap.from('[data-packages-header]', {
            y: 22,
            opacity: 0,
            duration: 0.65,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              once: true,
            },
          });

          gsap.from('[data-package-card]', {
            y: yOffset,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '[data-packages-grid]',
              start: 'top 90%',
              once: true,
            },
          });

          gsap.to('[data-pro-badge]', {
            boxShadow: '0 0 18px rgba(248, 213, 1, 0.75)',
            duration: 1.4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });

          gsap.from('[data-enterprise-banner]', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '[data-enterprise-banner]',
              start: 'top 94%',
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const getWhatsAppHref = (pkg: GrowthPackageItem) => {
    return `https://wa.me/918519837818?text=${encodeURIComponent(pkg.whatsappMessage)}`;
  };

  return (
    <section
      ref={sectionRef}
      id="packages"
      aria-label="Growth Packages & Retainers"
      className="w-full border-y-2 border-[#0B1B42]/15 bg-[#F4F7FC]/88 backdrop-blur-md py-24 md:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* Section Header */}
        <div
          data-packages-header
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-[3px] w-8 bg-[#F8D501] shrink-0" aria-hidden="true" />
              <div className="inline-flex items-center gap-2 border border-[#0B1B42] bg-[#0B1B42] px-3 py-1 shadow-xs">
                <Zap className="h-3.5 w-3.5 text-[#F8D501]" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#F8D501] font-bold">
                  TRANSPARENT INR PRICING · ZERO LOCK-IN
                </span>
              </div>
            </div>

            <h2 className="mt-4 font-serif text-[36px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0B1B42]">
              Predictable Growth{' '}
              <span className="italic font-semibold underline decoration-[#F8D501] decoration-[5px] underline-offset-4">
                Packages
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[14px] leading-[1.7] text-[#0B1B42] font-medium bg-white/90 backdrop-blur-sm border-l-4 border-l-[#F8D501] border border-[#0B1B42]/15 px-4 py-3 shadow-xs">
            Flexible month-to-month retainers. All prices listed strictly in INR (₹). Complete data ownership, weekly KPI sprint reviews, and direct senior growth operator access.
          </p>
        </div>

        {/* 4-Tier Cards Layout */}
        <div
          data-packages-grid
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {GROWTH_PACKAGES.map((pkg) => {
            const isPopular = Boolean(pkg.isPopular);

            return (
              <div
                key={pkg.id}
                data-package-card
                className={`relative flex flex-col justify-between transition-all duration-300 p-7 ${
                  isPopular
                    ? 'border-2 border-[#F8D501] bg-[#0B1B42] text-white shadow-2xl -translate-y-1 lg:-translate-y-2 ring-2 ring-[#0B1B42]'
                    : 'border-t-4 border-t-[#0B1B42] border-x-2 border-b-2 border-[#0B1B42]/20 bg-white backdrop-blur-md shadow-sm hover:border-[#0B1B42] hover:shadow-xl text-[#0B1B42]'
                }`}
              >
                {/* Popularity Badge */}
                {isPopular && (
                  <div
                    data-pro-badge
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F8D501] text-[#0B1B42] px-4 py-1 font-mono text-[9.5px] tracking-[0.2em] uppercase font-extrabold flex items-center gap-1.5 shadow-md border-2 border-[#0B1B42] whitespace-nowrap"
                  >
                    <Star className="h-3 w-3 fill-[#0B1B42] text-[#0B1B42]" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Target */}
                  <div className="mb-2">
                    <span
                      className={`font-mono text-[10px] tracking-[0.16em] uppercase font-bold ${
                        isPopular ? 'text-[#F8D501]' : 'text-[#162E68]'
                      }`}
                    >
                      TIER · {pkg.id.toUpperCase()}
                    </span>
                    <h3
                      className={`mt-1 font-serif text-[23px] font-bold leading-[1.25] ${
                        isPopular ? 'text-white' : 'text-[#0B1B42]'
                      }`}
                    >
                      {pkg.name}
                    </h3>
                  </div>

                  {/* INR Price */}
                  <div
                    className={`mt-4 pb-4 border-b flex items-baseline gap-1.5 ${
                      isPopular ? 'border-white/20' : 'border-[#0B1B42]/15'
                    }`}
                  >
                    <span
                      className={`font-serif text-[36px] font-extrabold tracking-tight tabular-nums ${
                        isPopular ? 'text-[#F8D501]' : 'text-[#0B1B42]'
                      }`}
                    >
                      {pkg.priceInr}
                    </span>
                    <span
                      className={`font-mono text-[11.5px] uppercase tracking-wider font-semibold ${
                        isPopular ? 'text-slate-200' : 'text-[#162E68]'
                      }`}
                    >
                      {pkg.billingPeriod}
                    </span>
                  </div>

                  {/* Summary & Ideal For */}
                  <div className="mt-4 text-[13px] leading-[1.6]">
                    <p className={`font-medium ${isPopular ? 'text-slate-100' : 'text-[#0F2352]'}`}>
                      {pkg.summary}
                    </p>
                    <div
                      className={`mt-3 text-[11.5px] font-mono p-2.5 border leading-snug ${
                        isPopular
                          ? 'text-white bg-[#132B63] border-[#F8D501]/40'
                          : 'text-[#0B1B42] bg-[#FFFDF0] border-[#F8D501]'
                      }`}
                    >
                      <span
                        className={`font-bold ${
                          isPopular ? 'text-[#F8D501]' : 'text-[#0B1B42]'
                        }`}
                      >
                        IDEAL FOR:{' '}
                      </span>
                      {pkg.idealFor}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-2">
                    <div
                      className={`font-mono text-[9.5px] tracking-[0.16em] uppercase font-bold mb-3 ${
                        isPopular ? 'text-[#F8D501]' : 'text-[#0B1B42]'
                      }`}
                    >
                      INCLUDED DELIVERABLES
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2.5 text-[12.5px] leading-[1.5] font-medium ${
                            isPopular ? 'text-slate-100' : 'text-[#0B1B42]'
                          }`}
                        >
                          <Check
                            className={`h-4 w-4 shrink-0 mt-0.5 ${
                              isPopular ? 'text-[#F8D501]' : 'text-[#0B1B42]'
                            }`}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div
                  className={`mt-8 pt-5 border-t flex flex-col gap-2 ${
                    isPopular ? 'border-white/20' : 'border-[#0B1B42]/15'
                  }`}
                >
                  <a
                    href={getWhatsAppHref(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 font-mono text-[11px] tracking-[0.14em] uppercase font-extrabold transition-all shadow-sm ${
                      isPopular
                        ? 'bg-[#F8D501] hover:bg-white text-[#0B1B42]'
                        : 'border-2 border-[#0B1B42] bg-[#0B1B42] hover:bg-[#162E68] text-[#F8D501]'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>BOOK THIS PLAN</span>
                  </a>

                  {onOpenConsultation && (
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(pkg.name)}
                      className={`w-full inline-flex items-center justify-center gap-1.5 border px-3 py-2 font-mono text-[10px] tracking-[0.14em] uppercase font-bold transition-colors ${
                        isPopular
                          ? 'border-white/30 bg-[#132B63] hover:bg-white hover:text-[#0B1B42] text-white'
                          : 'border-[#0B1B42]/25 bg-[#F4F7FC] hover:bg-[#F8D501] text-[#0B1B42]'
                      }`}
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

        {/* Bottom Enterprise Banner with Official IDM Logo */}
        <div
          data-enterprise-banner
          className="mt-12 border-t-4 border-t-[#F8D501] border-x-2 border-b-2 border-[#0B1B42]/20 bg-white/95 backdrop-blur-sm p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-md"
        >
          <div className="flex items-center gap-4">
            <BrandLogo variant="light" size="md" className="hidden sm:inline-flex" />
            <div className="space-y-1">
              <div className="font-serif text-[19px] text-[#0B1B42] font-bold">
                Need custom enterprise engineering or multi-brand scaling?
              </div>
              <p className="text-[13.5px] text-[#0F2352] font-medium">
                We tailor dedicated growth squads for regional hospital chains, real estate developers, and national e-commerce brands.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/918519837818?text=Hi%20Sanvika%2C%20I%20need%20a%20custom%20enterprise%20quote%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 border-2 border-[#0B1B42] bg-[#F8D501] hover:bg-[#0B1B42] text-[#0B1B42] hover:text-[#F8D501] px-7 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase font-extrabold transition-colors shadow-sm"
          >
            <span>GET CUSTOM QUOTE →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
