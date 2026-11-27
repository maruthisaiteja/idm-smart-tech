import { useRef } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { IDM_VS_TRADITIONAL } from '../data/idmContent';
import { BrandLogo } from './BrandLogo';
import { gsap, useGSAP } from '../lib/gsapSetup';

export function AgencyComparison() {
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

          gsap.from('[data-comp-header]', {
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

          gsap.from('[data-comp-row]', {
            x: isDesktop ? -18 : 0,
            y: isDesktop ? 0 : 14,
            opacity: 0,
            duration: 0.55,
            stagger: 0.06,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '[data-comp-matrix]',
              start: 'top 88%',
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="comparison"
      aria-label="IDM Smart Tech vs Traditional Agencies Comparison"
      className="mx-auto max-w-[1240px] px-6 md:px-10 py-24 md:py-28"
    >
      {/* Section Header */}
      <div
        data-comp-header
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
      >
        <div>
          <div className="flex items-center gap-3.5">
            <span className="h-[3px] w-8 bg-[#F8D501] shrink-0" aria-hidden="true" />
            <div className="inline-flex items-center gap-2 border border-[#0B1B42] bg-[#0B1B42] px-3 py-1">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#F8D501] font-bold">
                THE IDM ADVANTAGE · ZERO FLUFF
              </span>
            </div>
          </div>

          <h2 className="mt-4 font-serif text-[36px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0B1B42]">
            Why ambitious brands switch to{' '}
            <span className="italic font-semibold underline decoration-[#F8D501] decoration-[5px] underline-offset-4">
              IDM Smart Tech
            </span>
          </h2>
        </div>

        <p className="max-w-[420px] text-[14px] leading-[1.7] text-[#0B1B42] font-medium bg-white/90 backdrop-blur-sm border-l-4 border-l-[#F8D501] border border-[#0B1B42]/15 px-4 py-3 shadow-xs">
          We eliminated the inefficiencies, bloated retainers, and junior delegations that plague traditional agencies. Here is how we directly compare on client outcomes.
        </p>
      </div>

      {/* Comparison Matrix Card */}
      <div
        data-comp-matrix
        className="border-2 border-[#0B1B42]/25 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
      >
        {/* Table Column Titles (Desktop) — Royal Navy Banner with Official IDM Logo */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 border-b-2 border-[#F8D501] bg-[#0B1B42] px-8 py-4.5 text-[11.5px] font-mono tracking-[0.14em] uppercase items-center">
          <div className="md:col-span-3 text-slate-200 font-bold whitespace-nowrap">CRITICAL METRIC</div>
          <div className="md:col-span-5 text-white flex items-center gap-2.5 font-extrabold whitespace-nowrap">
            <BrandLogo variant="dark-badge" size="xs" />
            <span>IDM SMART TECH</span>
            <span className="hidden lg:inline-block text-[9.5px] bg-[#F8D501] text-[#0B1B42] px-2.5 py-0.5 font-extrabold whitespace-nowrap">
              SENIOR OPERATORS
            </span>
          </div>
          <div className="md:col-span-4 text-slate-300 font-bold whitespace-nowrap">TRADITIONAL AGENCIES</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#0B1B42]/15">
          {IDM_VS_TRADITIONAL.map((item, idx) => (
            <div
              key={idx}
              data-comp-row
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-6 sm:p-7 md:px-8 md:py-6 items-start hover:bg-[#FFFDF2] transition-colors"
            >
              {/* Factor Dimension */}
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#0B1B42] font-bold md:hidden block mb-1">
                  METRIC
                </span>
                <span className="font-serif text-[18px] md:text-[17.5px] font-bold text-[#0B1B42]">
                  {item.dimension}
                </span>
              </div>

              {/* IDM Advantage (Highlighted Navy & Gold) */}
              <div className="md:col-span-5 flex items-start gap-3 bg-[#FFF8CC]/55 md:bg-transparent p-3 md:p-0 border md:border-0 border-[#F8D501]">
                <CheckCircle2 className="h-5 w-5 text-[#0B1B42] fill-[#F8D501] shrink-0 mt-0.5" />
                <div>
                  <span className="md:hidden inline-block font-mono text-[9.5px] uppercase tracking-wider bg-[#0B1B42] text-[#F8D501] px-2 py-0.5 font-bold mb-1.5">
                    IDM SMART TECH
                  </span>
                  <p className="text-[14px] leading-[1.65] text-[#0B1B42] font-semibold">
                    {item.idmAdvantage}
                  </p>
                </div>
              </div>

              {/* Traditional Agency Limitation */}
              <div className="md:col-span-4 flex items-start gap-3 bg-[#F4F7FC] md:bg-transparent p-3 md:p-0 border md:border-0 border-[#0B1B42]/15">
                <XCircle className="h-4 w-4 text-slate-500 shrink-0 mt-1" />
                <div>
                  <span className="md:hidden inline-block font-mono text-[9.5px] uppercase tracking-wider text-[#162E68] font-bold mb-1">
                    TRADITIONAL AGENCIES
                  </span>
                  <p className="text-[13px] leading-[1.6] text-[#162E68] font-medium">
                    {item.traditionalLimitation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Matrix Footer Banner */}
        <div className="border-t-2 border-[#0B1B42]/20 bg-[#F4F7FC] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[13.5px] text-[#0B1B42] font-medium">
            Ready to experience an agency that prioritizes{' '}
            <span className="font-bold underline decoration-[#F8D501] decoration-2 underline-offset-4">
              measurable revenue growth
            </span>{' '}
            over vanity charts?
          </div>

          <a
            href="https://wa.me/918519837818?text=Hi%20Sanvika%2C%20I%20am%20looking%20to%20switch%20to%20IDM%20Smart%20Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#0B1B42] bg-[#F8D501] hover:bg-[#0B1B42] text-[#0B1B42] hover:text-[#F8D501] px-6 py-3 font-mono text-[10.5px] tracking-[0.16em] uppercase whitespace-nowrap font-extrabold transition-colors shadow-sm"
          >
            <span>SWITCH TO IDM →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
