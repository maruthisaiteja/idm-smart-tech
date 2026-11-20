import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/idmContent';

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="mx-auto max-w-[1240px] px-6 md:px-10 py-24 md:py-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Left Column: Title & Context */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3.5">
            <span className="h-[2px] w-7 bg-[#0F172A] shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#0F172A] font-bold">
              CLARITY &amp; TRUST
            </span>
          </div>

          <h2 className="mt-4 font-serif text-[36px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0F172A]">
            Frequently Asked{' '}
            <span className="italic text-[#365679] font-medium">Questions</span>
          </h2>

          <p className="mt-4 text-[14px] leading-[1.7] text-[#1E293B] font-medium">
            Straightforward answers regarding our local SEO methodology, rankings, contracts, and execution timelines.
          </p>

          <div className="mt-8 border-2 border-slate-300 bg-white/95 backdrop-blur-sm p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#0F172A] font-bold">
              <HelpCircle className="h-4 w-4 text-[#365679]" />
              <span>Have an unlisted query?</span>
            </div>
            <p className="text-[13px] text-[#1E293B] leading-[1.6] font-medium">
              Ask directly to our co-founder without going through sales representatives.
            </p>
            <a
              href="https://wa.me/918519837818?text=Hi%20Sanvika%2C%20I%20have%20a%20question%20regarding%20IDM%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-900 hover:text-emerald-950 font-mono text-[11px] font-bold tracking-wider pt-1 transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-emerald-700" />
              <span>CHAT WITH FOUNDER ON WHATSAPP →</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div className="lg:col-span-8 border-2 border-slate-300 bg-white/95 backdrop-blur-md shadow-md divide-y divide-slate-200">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0F172A] hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-2 pr-2">
                    {faq.category && (
                      <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#0F172A] font-bold">
                        0{index + 1} · {faq.category}
                      </span>
                    )}
                    <h3 className="font-serif text-[19px] sm:text-[21px] font-semibold leading-[1.3] text-[#0F172A]">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`shrink-0 mt-1 inline-flex h-8 w-8 items-center justify-center border-2 border-slate-300 bg-white text-[#0F172A] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0F172A] text-white border-[#0F172A]' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-1 text-[14px] sm:text-[14.5px] leading-[1.78] text-[#1E293B] font-medium border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
