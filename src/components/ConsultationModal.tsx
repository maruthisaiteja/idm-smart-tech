import { useEffect, useState } from 'react';
import { X, Check, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { SITE_INFO } from '../data/idmContent';
import { BrandLogo } from './BrandLogo';

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
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071330]/70 p-4 backdrop-blur-[2px] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-[780px] border-2 border-[#0B1B42] border-t-4 border-t-[#F8D501] bg-white text-[#0B1B42] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-5 bg-[#0B1B42] p-8 text-white flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-[#F8D501]">
            <div>
              <div className="mb-6">
                <BrandLogo variant="dark-badge" size="sm" showWordmark />
              </div>
              <span className="inline-block bg-[#F8D501] text-[#0B1B42] px-2.5 py-0.5 font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
                FREE CONSULTATION
              </span>
              <h3
                id="consultation-modal-title"
                className="mt-4 font-serif text-[30px] leading-[1.15] text-white"
              >
                Let&apos;s talk about your{' '}
                <span className="italic text-[#F8D501] font-medium">growth</span>.
              </h3>
              <p className="mt-4 text-[13.5px] leading-[1.7] text-slate-200">
                A 30-minute call with a senior strategist. We review your funnel and share a concrete growth plan — no fluff, no pitch decks.
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-white/15 pt-6 text-[13px]">
              <a
                href={SITE_INFO.phoneHref}
                className="flex items-center gap-3 text-slate-100 transition-colors hover:text-[#F8D501]"
              >
                <Phone className="h-4 w-4 text-[#F8D501] shrink-0" />
                <span className="tabular-nums font-medium">{SITE_INFO.phoneDisplay}</span>
              </a>
              <a
                href={SITE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-100 transition-colors hover:text-[#F8D501]"
              >
                <MessageSquare className="h-4 w-4 text-[#F8D501] shrink-0" />
                <span className="font-medium">WhatsApp · {SITE_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-3 text-slate-100 transition-colors hover:text-[#F8D501]"
              >
                <Mail className="h-4 w-4 text-[#F8D501] shrink-0" />
                <span>{SITE_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="h-4 w-4 text-[#F8D501] shrink-0 mt-0.5" />
                <span className="leading-[1.6]">{SITE_INFO.addressFull}</span>
              </div>
              <p className="pt-2 font-mono text-[10px] tracking-[0.14em] uppercase text-[#F8D501] font-bold">
                {SITE_INFO.responseSla}
              </p>
            </div>
          </div>

          <div className="md:col-span-7 p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#0B1B42] font-bold bg-[#F8D501] px-2.5 py-1">
                PROJECT BRIEF
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close consultation modal"
                className="flex h-10 w-10 items-center justify-center border-2 border-[#0B1B42]/20 text-[#0B1B42] transition-colors hover:border-[#0B1B42] hover:bg-[#0B1B42] hover:text-[#F8D501]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-10">
                <div className="inline-flex h-12 w-12 items-center justify-center border-2 border-[#0B1B42] bg-[#F8D501] text-[#0B1B42]">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="mt-5 font-serif text-[26px] font-bold text-[#0B1B42]">
                  Consultation request received.
                </h4>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-[#0F2352] font-medium">
                  Thank you, {fullName}. A senior strategist at IDM Smart Tech will follow up at{' '}
                  <span className="text-[#0B1B42] font-bold underline decoration-[#F8D501] decoration-2">{phone}</span> within 4 business hours.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`${SITE_INFO.whatsappHref}?text=${encodeURIComponent(
                      `Hi IDM Smart Tech, I'm ${fullName}${company ? ` from ${company}` : ''}. ${message || 'I would like to book a free consultation.'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#0B1B42] px-6 py-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#F8D501] font-extrabold transition-colors hover:bg-[#162E68]"
                  >
                    Continue on WhatsApp →
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="border-2 border-[#0B1B42]/30 px-5 py-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#0B1B42] font-bold hover:border-[#0B1B42]"
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
                      className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#0B1B42] font-bold mb-1.5"
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
                      className="w-full border border-[#0B1B42]/25 bg-[#F4F7FC] px-3.5 py-2.5 text-[14px] text-[#0B1B42] placeholder:text-slate-400 focus:border-[#0B1B42] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="idm-company"
                      className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#0B1B42] font-bold mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="idm-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Brand or organization"
                      className="w-full border border-[#0B1B42]/25 bg-[#F4F7FC] px-3.5 py-2.5 text-[14px] text-[#0B1B42] placeholder:text-slate-400 focus:border-[#0B1B42] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="idm-email"
                      className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#0B1B42] font-bold mb-1.5"
                    >
                      Work email
                    </label>
                    <input
                      id="idm-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full border border-[#0B1B42]/25 bg-[#F4F7FC] px-3.5 py-2.5 text-[14px] text-[#0B1B42] placeholder:text-slate-400 focus:border-[#0B1B42] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="idm-phone"
                      className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#0B1B42] font-bold mb-1.5"
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
                      className="w-full border border-[#0B1B42]/25 bg-[#F4F7FC] px-3.5 py-2.5 text-[14px] text-[#0B1B42] placeholder:text-slate-400 focus:border-[#0B1B42] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="idm-project"
                    className="block font-mono text-[10px] tracking-[0.14em] uppercase text-[#0B1B42] font-bold mb-1.5"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="idm-project"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="SEO & Local SEO, Google/Meta Ads, Website, Mobile App, CRM/ERP, or AI Automation..."
                    className="w-full border border-[#0B1B42]/25 bg-[#F4F7FC] px-3.5 py-2.5 text-[14px] text-[#0B1B42] placeholder:text-slate-400 focus:border-[#0B1B42] focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-[13px] font-semibold text-[#B91C1C]">
                    {error}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full border-2 border-[#0B1B42] bg-[#F8D501] px-6 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase text-[#0B1B42] font-extrabold transition-colors hover:bg-[#0B1B42] hover:text-[#F8D501] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1B42]"
                  >
                    Book Free Consultation →
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
