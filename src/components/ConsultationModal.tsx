import { useEffect, useState } from 'react';
import { X, Check, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { SITE_INFO } from '../data/idmContent';

interface ConsultationModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

export function ConsultationModal({
  isOpen,
  initialTopic = '',
  onClose,
}: ConsultationModalProps) {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError('');
      if (initialTopic) {
        setMessage(`Interested in discussing a project similar to ${initialTopic}.`);
      }
    }
  }, [isOpen, initialTopic]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      setError('Please enter a valid phone or WhatsApp number.');
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid work email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E1521]/65 p-4 backdrop-blur-[2px] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-[780px] border border-[#D8DEE6] bg-[#F7F8FA] text-[#141C27]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-5 bg-[#0E1521] p-8 text-white flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7C8BA1]">
                FREE CONSULTATION
              </span>
              <h3
                id="consultation-modal-title"
                className="mt-4 font-serif text-[30px] leading-[1.15] text-white"
              >
                Let&apos;s talk about your{' '}
                <span className="italic text-[#5B84B1]">growth</span>.
              </h3>
              <p className="mt-4 text-[13.5px] leading-[1.7] text-[#94A3B8]">
                A 30-minute call with a senior strategist. We review your funnel and share a concrete growth plan — no fluff, no pitch decks.
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-[13px]">
              <a
                href={SITE_INFO.phoneHref}
                className="flex items-center gap-3 text-[#CBD5E1] transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#5B84B1] shrink-0" />
                <span className="tabular-nums">{SITE_INFO.phoneDisplay}</span>
              </a>
              <a
                href={SITE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#CBD5E1] transition-colors hover:text-white"
              >
                <MessageSquare className="h-4 w-4 text-[#5B84B1] shrink-0" />
                <span>WhatsApp · {SITE_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-3 text-[#CBD5E1] transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#5B84B1] shrink-0" />
                <span>{SITE_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3 text-[#94A3B8]">
                <MapPin className="h-4 w-4 text-[#5B84B1] shrink-0 mt-0.5" />
                <span className="leading-[1.6]">{SITE_INFO.addressFull}</span>
              </div>
              <p className="pt-2 font-mono text-[10px] tracking-[0.14em] uppercase text-[#64748B]">
                {SITE_INFO.responseSla}
              </p>
            </div>
          </div>

          <div className="md:col-span-7 p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#64748B]">
                PROJECT BRIEF
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close consultation modal"
                className="flex h-10 w-10 items-center justify-center border border-[#DCE1E8] text-[#5A6577] transition-colors hover:border-[#141C27] hover:text-[#141C27]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-10">
                <div className="inline-flex h-11 w-11 items-center justify-center border border-[#141C27] text-[#141C27]">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="mt-5 font-serif text-[26px] text-[#141C27]">
                  Consultation request received.
                </h4>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-[#5A6577]">
                  Thank you, {fullName}. A senior strategist at IDM Smart Tech will follow up at{' '}
                  <span className="text-[#141C27] font-medium">{phone}</span> within 4 business hours.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`${SITE_INFO.whatsappHref}?text=${encodeURIComponent(
                      `Hi IDM Smart Tech, I'm ${fullName}${company ? ` from ${company}` : ''}. ${message || 'I would like to book a free consultation.'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#141C27] px-6 py-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-white transition-colors hover:bg-[#1E293B]"
                  >
                    Continue on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="border border-[#DCE1E8] px-5 py-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#5A6577] hover:border-[#141C27] hover:text-[#141C27]"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="idm-name"
                      className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#5A6577] mb-1.5"
                    >
                      Full name *
                    </label>
                    <input
                      id="idm-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your name"
                      className="w-full border border-[#D4DBE4] bg-white px-3.5 py-2.5 text-[14px] text-[#141C27] placeholder:text-[#94A3B8] focus:border-[#141C27] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="idm-company"
                      className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#5A6577] mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="idm-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Brand or organization"
                      className="w-full border border-[#D4DBE4] bg-white px-3.5 py-2.5 text-[14px] text-[#141C27] placeholder:text-[#94A3B8] focus:border-[#141C27] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="idm-email"
                      className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#5A6577] mb-1.5"
                    >
                      Work email
                    </label>
                    <input
                      id="idm-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full border border-[#D4DBE4] bg-white px-3.5 py-2.5 text-[14px] text-[#141C27] placeholder:text-[#94A3B8] focus:border-[#141C27] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="idm-phone"
                      className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#5A6577] mb-1.5"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="idm-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full border border-[#D4DBE4] bg-white px-3.5 py-2.5 text-[14px] text-[#141C27] placeholder:text-[#94A3B8] focus:border-[#141C27] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="idm-project"
                    className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#5A6577] mb-1.5"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="idm-project"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="SEO & Local SEO, Google/Meta Ads, Website, Mobile App, CRM/ERP, or AI Automation..."
                    className="w-full border border-[#D4DBE4] bg-white px-3.5 py-2.5 text-[14px] text-[#141C27] placeholder:text-[#94A3B8] focus:border-[#141C27] focus:outline-none resize-none"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-[13px] text-[#B91C1C]">
                    {error}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#141C27] px-6 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase text-white transition-colors hover:bg-[#1E293B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141C27]"
                  >
                    Book Free Consultation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
