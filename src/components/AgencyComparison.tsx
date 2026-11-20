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
            <span className="h-[2px] w-7 bg-[#0F172A] shrink-0" aria-hidden="true" />
            <div className="inline-flex items-center gap-2 border border-slate-400 bg-slate-100 px-3 py-1">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0F172A] font-bold">
                THE IDM ADVANTAGE · ZERO FLUFF
              </span>
            </div>
          </div>

          <h2 className="mt-4 font-serif text-[36px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0F172A]">
            Why ambitious brands switch to{' '}
            <span className="italic text-[#365679] font-medium">IDM Smart Tech</span>
          </h2>
        </div>

        <p className="max-w-[400px] text-[14px] leading-[1.7] text-[#1E293B] font-medium">
          We eliminated the inefficiencies, bloated retainers, and junior delegations that plague traditional agencies. Here is how we directly compare on client outcomes.
        </p>
      </div>

      {/* Comparison Matrix Card */}
      <div className="border-2 border-slate-300 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden">
        {/* Table Column Titles (Desktop) */}
        <div className="hidden md:grid md:grid-cols-12 border-b-2 border-slate-300 bg-slate-100 px-8 py-4.5 text-[11.5px] font-mono tracking-[0.16em] uppercase">
          <div className="md:col-span-3 text-[#0F172A] font-bold">CRITICAL METRIC</div>
          <div className="md:col-span-5 text-[#0F172A] flex items-center gap-2 font-extrabold">
            <Sparkles className="h-4 w-4 text-emerald-700" />
            <span>IDM SMART TECH</span>
            <span className="text-[9.5px] bg-emerald-200 text-emerald-950 px-2 py-0.5 border border-emerald-400 font-bold">
              SENIOR OPERATORS ONLY
            </span>
          </div>
          <div className="md:col-span-4 text-[#334155] font-bold">TRADITIONAL AGENCIES</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-200">
          {IDM_VS_TRADITIONAL.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-6 sm:p-7 md:px-8 md:py-6 items-start hover:bg-slate-50/90 transition-colors"
            >
              {/* Factor Dimension */}
              <div className="md:col-span-3">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#0F172A] font-bold md:hidden block mb-1">
                  METRIC
                </span>
                <span className="font-serif text-[18px] md:text-[17px] font-bold text-[#0F172A]">
                  {item.dimension}
                </span>
              </div>

              {/* IDM Advantage (Highlighted) */}
              <div className="md:col-span-5 flex items-start gap-3 bg-emerald-50/70 md:bg-transparent p-3 md:p-0 border md:border-0 border-emerald-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="md:hidden inline-block font-mono text-[9.5px] uppercase tracking-wider text-emerald-950 font-bold mb-1">
                    IDM SMART TECH
                  </span>
                  <p className="text-[14px] leading-[1.65] text-[#0F172A] font-semibold">
                    {item.idmAdvantage}
                  </p>
                </div>
              </div>

              {/* Traditional Agency Limitation (Muted but Clear) */}
              <div className="md:col-span-4 flex items-start gap-3 bg-rose-50/40 md:bg-transparent p-3 md:p-0 border md:border-0 border-rose-200">
                <XCircle className="h-4 w-4 text-slate-500 shrink-0 mt-1" />
                <div>
                  <span className="md:hidden inline-block font-mono text-[9.5px] uppercase tracking-wider text-[#334155] font-bold mb-1">
                    TRADITIONAL AGENCIES
                  </span>
                  <p className="text-[13px] leading-[1.6] text-[#334155] font-medium">
                    {item.traditionalLimitation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Matrix Footer Banner */}
        <div className="border-t-2 border-slate-300 bg-slate-100/90 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[13.5px] text-[#0F172A] font-medium">
            Ready to experience an agency that prioritizes <span className="font-bold text-[#0F172A]">measurable revenue growth</span> over vanity charts?
          </div>

          <a
            href="https://wa.me/918519837818?text=Hi%20Sanvika%2C%20I%20am%20looking%20to%20switch%20to%20IDM%20Smart%20Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#0F172A] bg-[#0F172A] hover:bg-[#1E293B] text-white px-6 py-3 font-mono text-[10.5px] tracking-[0.16em] uppercase whitespace-nowrap font-bold transition-colors shadow-sm"
          >
            <span>SWITCH TO IDM →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
