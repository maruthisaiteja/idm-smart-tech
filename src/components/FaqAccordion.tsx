import { useRef, useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/idmContent';
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsapSetup';

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('[data-faq-left]', {
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

      gsap.from('[data-faq-item]', {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '[data-faq-list]',
          start: 'top 90%',
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-label="Frequently Asked Questions"
      className="mx-auto max-w-[1240px] px-6 md:px-10 py-24 md:py-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Left Column: Title & Context */}
        <div data-faq-left className="lg:col-span-4">
          <div className="flex items-center gap-3.5">
            <span className="h-[3px] w-8 bg-[#F8D501] shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#F8D501] font-bold bg-[#0B1B42] px-3 py-1">
              CLARITY &amp; TRUST
            </span>
          </div>

          <h2 className="mt-4 font-serif text-[36px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0B1B42]">
            Frequently Asked{' '}
            <span className="italic font-semibold underline decoration-[#F8D501] decoration-[5px] underline-offset-4">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-[14px] leading-[1.7] text-[#0F2352] font-medium">
            Straightforward answers regarding our local SEO methodology, rankings, contracts, and execution timelines.
          </p>

          <div className="mt-8 border-t-4 border-t-[#F8D501] border-x-2 border-b-2 border-[#0B1B42]/20 bg-white/95 backdrop-blur-sm p-6 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#0B1B42] font-bold">
              <HelpCircle className="h-4 w-4 text-[#0B1B42]" />
              <span>Have an unlisted query?</span>
            </div>
            <p className="text-[13px] text-[#0F2352] leading-[1.6] font-medium">
              Ask directly to our co-founder without going through sales representatives.
            </p>
            <a
              href="https://wa.me/918519837818?text=Hi%20Sanvika%2C%20I%20have%20a%20question%20regarding%20IDM%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B1B42] hover:bg-[#162E68] text-[#F8D501] px-4 py-2.5 font-mono text-[11px] font-extrabold tracking-wider transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>CHAT WITH FOUNDER →</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div
          data-faq-list
          className="lg:col-span-8 border-2 border-[#0B1B42]/20 bg-white/95 backdrop-blur-md shadow-md divide-y divide-[#0B1B42]/15"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} data-faq-item className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0B1B42] hover:bg-[#FFFDF2] transition-colors"
                >
                  <div className="space-y-2 pr-2">
                    {faq.category && (
                      <span className="inline-block font-mono text-[10px] tracking-[0.16em] uppercase text-[#0B1B42] font-bold bg-[#F8D501]/70 px-2 py-0.5">
                        0{index + 1} · {faq.category}
                      </span>
                    )}
                    <h3 className="font-serif text-[19px] sm:text-[21px] font-bold leading-[1.3] text-[#0B1B42]">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`shrink-0 mt-1 inline-flex h-8 w-8 items-center justify-center border-2 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#0B1B42] text-[#F8D501] border-[#0B1B42]'
                        : 'bg-white text-[#0B1B42] border-[#0B1B42]/30'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-3 text-[14px] sm:text-[14.5px] leading-[1.78] text-[#0F2352] font-medium border-t border-[#0B1B42]/10 bg-[#F4F7FC]/60">
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
