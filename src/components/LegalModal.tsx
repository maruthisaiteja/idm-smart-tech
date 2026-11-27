import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SITE_INFO } from '../data/idmContent';
import { BrandLogo } from './BrandLogo';

export type LegalTab = 'privacy' | 'terms' | null;

interface LegalModalProps {
  tab: LegalTab;
  onClose: () => void;
}

export function LegalModal({ tab, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!tab) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [tab, onClose]);

  if (!tab) return null;

  const isPrivacy = tab === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071330]/70 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        data-lenis-prevent
        className="w-full max-w-[560px] max-h-[88dvh] overflow-y-auto border-2 border-[#0B1B42] border-t-4 border-t-[#F8D501] bg-white p-6 sm:p-8 text-[#0B1B42] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BrandLogo variant="light" size="xs" />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase bg-[#0B1B42] text-[#F8D501] px-2.5 py-0.5 font-bold">
              IDM SMART TECH · LEGAL
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal notice"
            className="flex h-10 w-10 items-center justify-center border-2 border-[#0B1B42]/20 text-[#0B1B42] hover:border-[#0B1B42] hover:bg-[#0B1B42] hover:text-[#F8D501] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h3 id="legal-modal-title" className="mt-5 font-serif text-[28px] font-bold text-[#0B1B42]">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </h3>

        <div className="mt-4 space-y-3.5 text-[14px] leading-[1.72] text-[#0F2352] font-medium">
          {isPrivacy ? (
            <>
              <p>
                IDM Smart Tech collects only the contact details you voluntarily submit when booking a consultation (name, company, work email, phone/WhatsApp number, and project scope) strictly to evaluate and respond to your inquiry.
              </p>
              <p>
                We never sell or share client inquiry records with third parties. For data deletion or privacy requests, contact{' '}
                <a href={`mailto:${SITE_INFO.email}`} className="text-[#0B1B42] font-bold underline decoration-[#F8D501] decoration-2">
                  {SITE_INFO.email}
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <p>
                All digital marketing, SEO, paid media, web/mobile engineering, CRM/ERP software, and AI automation engagements with IDM Smart Tech are governed by mutually signed statements of work outlining deliverables, reporting milestones, and SLAs.
              </p>
              <p>
                Office: {SITE_INFO.addressFull}. Direct inquiries:{' '}
                <a href={`mailto:${SITE_INFO.email}`} className="text-[#0B1B42] font-bold underline decoration-[#F8D501] decoration-2">
                  {SITE_INFO.email}
                </a>{' '}
                or {SITE_INFO.phoneDisplay}.
              </p>
            </>
          )}
        </div>

        <div className="mt-7 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="border-2 border-[#0B1B42] bg-[#0B1B42] px-6 py-2.5 font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#F8D501] font-extrabold hover:bg-[#F8D501] hover:text-[#0B1B42] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
