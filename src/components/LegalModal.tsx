import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SITE_INFO } from '../data/idmContent';

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E1521]/60 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px] max-h-[88dvh] overflow-y-auto border border-[#D8DEE6] bg-[#F7F8FA] p-6 sm:p-8 text-[#141C27] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#64748B]">
            IDM SMART TECH · LEGAL
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal notice"
            className="flex h-10 w-10 items-center justify-center border border-[#DCE1E8] text-[#5A6577] hover:border-[#141C27] hover:text-[#141C27]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h3 id="legal-modal-title" className="mt-5 font-serif text-[28px] text-[#141C27]">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </h3>

        <div className="mt-4 space-y-3.5 text-[14px] leading-[1.72] text-[#475569]">
          {isPrivacy ? (
            <>
              <p>
                IDM Smart Tech collects only the contact details you voluntarily submit when booking a consultation (name, company, work email, phone/WhatsApp number, and project scope) strictly to evaluate and respond to your inquiry.
              </p>
              <p>
                We never sell or share client inquiry records with third parties. For data deletion or privacy requests, contact{' '}
                <a href={`mailto:${SITE_INFO.email}`} className="text-[#141C27] underline">
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
                <a href={`mailto:${SITE_INFO.email}`} className="text-[#141C27] underline">
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
            className="bg-[#141C27] px-5 py-2.5 font-mono text-[10.5px] tracking-[0.16em] uppercase text-white hover:bg-[#1E293B]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
