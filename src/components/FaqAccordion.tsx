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
            <span className="h-[1px] w-7 bg-[#94A3B8] shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#64748B]">
              CLARITY &amp; TRUST
            </span>
          </div>

          <h2 className="mt-4 font-serif text-[36px] sm:text-[44px] font-normal leading-[1.12] tracking-[-0.015em] text-[#141C27]">
            Frequently Asked{' '}
            <span className="italic text-[#4F759B]">Questions</span>
          </h2>

          <p className="mt-4 text-[13.5px] leading-[1.7] text-[#5A6577]">
            Straightforward answers regarding our local SEO methodology, rankings, contracts, and execution timelines.
          </p>

          <div className="mt-8 border border-[#DCE1E8] bg-white/70 backdrop-blur-sm p-6 space-y-3">
            <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#141C27] font-semibold">
              <HelpCircle className="h-4 w-4 text-[#4F759B]" />
              <span>Have a specific query?</span>
            </div>
            <p className="text-[12.5px] text-[#64748B] leading-[1.6]">
              Ask directly to our lead strategists without going through sales reps.
            </p>
            <a
              href="https://wa.me/918519837818?text=Hi%20IDM%2C%20I%20have%20a%20question%20regarding%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-mono text-[11px] font-semibold tracking-wider pt-1 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>CHAT ON WHATSAPP →</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div className="lg:col-span-8 border border-[#DCE1E8] bg-white/80 backdrop-blur-md shadow-xs divide-y divide-[#DCE1E8]">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#141C27] hover:bg-[#F8FAFC]/80 transition-colors"
                >
                  <div className="space-y-1.5 pr-2">
                    {faq.category && (
                      <span className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#64748B]">
                        0{index + 1} · {faq.category}
                      </span>
                    )}
                    <h3 className="font-serif text-[18px] sm:text-[20px] font-normal leading-[1.3] text-[#141C27]">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`shrink-0 mt-1 inline-flex h-7 w-7 items-center justify-center border border-[#DCE1E8] bg-white text-[#141C27] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#141C27] text-white border-[#141C27]' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-1 text-[13.5px] sm:text-[14px] leading-[1.78] text-[#475569] border-t border-[#F1F5F9]">
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
