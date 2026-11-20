import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { IDM_VS_TRADITIONAL } from '../data/idmContent';

export function AgencyComparison() {
  return (
    <section
      id="comparison"
      aria-label="IDM Smart Tech vs Traditional Agencies Comparison"
      className="mx-auto max-w-[1240px] px-6 md:px-10 py-24 md:py-28"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-3.5">
            <span className="h-[1px] w-7 bg-[#94A3B8] shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#64748B]">
              THE IDM ADVANTAGE
            </span>
          </div>

          <h2 className="mt-4 font-serif text-[36px] sm:text-[44px] font-normal leading-[1.12] tracking-[-0.015em] text-[#141C27]">
            Why ambitious brands switch to{' '}
            <span className="italic text-[#4F759B]">IDM Smart Tech</span>
          </h2>
        </div>

        <p className="max-w-[360px] text-[13px] leading-[1.7] text-[#5A6577]">
          We eliminated the inefficiencies, bloated retainers, and junior delegations that plague traditional agencies. Here is how we compare.
        </p>
      </div>

      {/* Comparison Matrix Card */}
      <div className="border border-[#DCE1E8] bg-white/80 backdrop-blur-md shadow-xs overflow-hidden">
        {/* Table Column Titles (Desktop) */}
        <div className="hidden md:grid md:grid-cols-12 border-b border-[#DCE1E8] bg-[#F7F9FB] px-8 py-4 text-[11px] font-mono tracking-[0.16em] uppercase">
          <div className="md:col-span-3 text-[#64748B]">CRITICAL FACTOR</div>
          <div className="md:col-span-5 text-[#141C27] flex items-center gap-2 font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>IDM SMART TECH</span>
            <span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 border border-emerald-300">
              SENIOR OPERATORS
            </span>
          </div>
          <div className="md:col-span-4 text-[#94A3B8]">TRADITIONAL AGENCIES</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#DCE1E8]/70">
          {IDM_VS_TRADITIONAL.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-6 sm:p-7 md:px-8 md:py-6 items-start hover:bg-[#FBFDFE]/80 transition-colors"
            >
              {/* Factor Dimension */}
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#748094] md:hidden block mb-1">
                  DIMENSION
                </span>
                <span className="font-serif text-[18px] md:text-[17px] font-medium text-[#141C27]">
                  {item.dimension}
                </span>
              </div>

              {/* IDM Advantage (Highlighted) */}
              <div className="md:col-span-5 flex items-start gap-3 bg-emerald-50/40 md:bg-transparent p-3 md:p-0 border md:border-0 border-emerald-200/50">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="md:hidden inline-block font-mono text-[9px] uppercase tracking-wider text-emerald-800 font-semibold mb-1">
                    IDM SMART TECH
                  </span>
                  <p className="text-[13.5px] leading-[1.65] text-[#1E293B] font-medium">
                    {item.idmAdvantage}
                  </p>
                </div>
              </div>

              {/* Traditional Agency Limitation (Muted) */}
              <div className="md:col-span-4 flex items-start gap-3 bg-rose-50/20 md:bg-transparent p-3 md:p-0 border md:border-0 border-rose-100/50">
                <XCircle className="h-4 w-4 text-[#94A3B8] shrink-0 mt-1" />
                <div>
                  <span className="md:hidden inline-block font-mono text-[9px] uppercase tracking-wider text-[#94A3B8] mb-1">
                    TRADITIONAL AGENCIES
                  </span>
                  <p className="text-[12.5px] leading-[1.6] text-[#64748B]">
                    {item.traditionalLimitation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Matrix Footer Banner */}
        <div className="border-t border-[#DCE1E8] bg-[#F7F9FB]/90 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[12.5px] text-[#475569]">
            Ready to experience an agency that prioritizes <span className="font-semibold text-[#141C27]">measurable ROI</span> over vanity metrics?
          </div>

          <a
            href="https://wa.me/918519837818?text=Hi%20IDM%2C%20I%20am%20looking%20to%20switch%20from%20my%20current%20agency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#141C27] bg-[#141C27] hover:bg-[#1E293B] text-white px-5 py-2.5 font-mono text-[10px] tracking-[0.16em] uppercase whitespace-nowrap transition-colors"
          >
            <span>SWITCH TO IDM →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
