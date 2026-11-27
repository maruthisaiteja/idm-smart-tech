import { useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';
import { gsap, ScrollTrigger, useGSAP } from './lib/gsapSetup';
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowUpRight,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import {
  APPROACH_STEPS,
  CLIENT_STRIP_ROW_1,
  CLIENT_STRIP_ROW_2,
  HERO_STATS,
  LEADERSHIP,
  MISSION_INTRO,
  MISSION_PILLARS,
  SELECTED_WORK,
  SITE_INFO,
  type ProjectItem,
} from './data/idmContent';
import { GeometricEmblem } from './components/GeometricEmblem';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal, type LegalTab } from './components/LegalModal';
import { ScrollCanvas } from './components/ScrollCanvas';
import { FounderAvatarWidget } from './components/FounderAvatarWidget';
import { QuickGmbServices } from './components/QuickGmbServices';
import { AgencyComparison } from './components/AgencyComparison';
import { GrowthPackages } from './components/GrowthPackages';
import { FaqAccordion } from './components/FaqAccordion';
import { BrandLogo } from './components/BrandLogo';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('');
  const [legalTab, setLegalTab] = useState<LegalTab>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // Pause Lenis smooth scrolling cleanly while any full-screen dialog is open
  useEffect(() => {
    const hasModal = Boolean(selectedProject || consultationOpen || legalTab);
    if (!lenis || !hasModal) return;
    lenis.stop();
    return () => {
      lenis.start();
    };
  }, [lenis, selectedProject, consultationOpen, legalTab]);

  // Scoped GSAP & ScrollTrigger choreography across main editorial sections
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Continuous Gold Scroll Progress Ribbon in Header
      gsap.fromTo(
        '[data-scroll-progress]',
        { scaleX: 0.05 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      );

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };
          const yOffset = isDesktop ? 28 : 16;

          // 1. Hero Above-the-Fold Staggered Sequence
          gsap.from('[data-hero-reveal]', {
            y: isDesktop ? 24 : 14,
            opacity: 0,
            duration: 0.72,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          });

          // 2. Hero Performance Counters (500+, 320%, 180+, 12+)
          const statNodes = gsap.utils.toArray<HTMLElement>('[data-stat-value]');
          if (statNodes.length > 0) {
            gsap.from('[data-hero-stat]', {
              y: 20,
              opacity: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: '[data-hero-stats]',
                start: 'top 92%',
                once: true,
              },
            });

            statNodes.forEach((node) => {
              const raw = node.dataset.target || '';
              const match = raw.match(/^(\d+)(.*)$/);
              if (!match) return;
              const endVal = parseInt(match[1], 10);
              const suffix = match[2] || '';
              const counter = { value: 0 };

              gsap.to(counter, {
                value: endVal,
                duration: 1.35,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: '[data-hero-stats]',
                  start: 'top 92%',
                  once: true,
                },
                onUpdate: () => {
                  node.textContent = `${Math.round(counter.value)}${suffix}`;
                },
                onComplete: () => {
                  node.textContent = raw;
                },
              });
            });
          }

          // 3. Client Partners Royal Navy Band
          gsap.from('[data-client-item]', {
            y: 16,
            opacity: 0,
            duration: 0.55,
            stagger: 0.045,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '[data-client-strip]',
              start: 'top 92%',
              once: true,
            },
          });

          // 4. Mission Pillars Progressive Reveal & Gold Index Detent
          const pillars = gsap.utils.toArray<HTMLElement>('[data-mission-pillar]');
          if (pillars.length > 0) {
            gsap.from(pillars, {
              y: yOffset,
              opacity: 0,
              duration: 0.65,
              stagger: 0.1,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: '[data-mission-card]',
                start: 'top 88%',
                once: true,
              },
            });

            pillars.forEach((pillar) => {
              const badge = pillar.querySelector('[data-pillar-badge]');
              if (!badge) return;
              gsap.from(badge, {
                scale: 0.85,
                duration: 0.45,
                ease: 'back.out(1.7)',
                clearProps: 'transform',
                scrollTrigger: {
                  trigger: pillar,
                  start: 'top 82%',
                  once: true,
                },
              });
            });
          }

          // 5. Selected Work 3x3 Wave Stagger
          gsap.from('[data-work-card]', {
            y: yOffset,
            opacity: 0,
            duration: 0.65,
            stagger: { amount: 0.4, from: 'start' },
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '[data-work-grid]',
              start: 'top 88%',
              once: true,
            },
          });

          // 6. Approach Section Gold Track + 3-Step Stagger
          gsap.from('[data-approach-line]', {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.85,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: '[data-approach-grid]',
              start: 'top 90%',
              once: true,
            },
          });

          gsap.from('[data-approach-card]', {
            y: yOffset,
            opacity: 0,
            duration: 0.68,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '[data-approach-grid]',
              start: 'top 88%',
              once: true,
            },
          });

          // 7. Senior Leadership Crest, Quote & Dual Cards
          gsap.from('[data-leader-header]', {
            y: 22,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '[data-leadership-section]',
              start: 'top 88%',
              once: true,
            },
          });

          gsap.from('[data-leader-card]', {
            y: yOffset,
            opacity: 0,
            duration: 0.68,
            stagger: 0.14,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: '[data-leader-grid]',
              start: 'top 88%',
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: pageRef }
  );

  const openConsultation = (topic = '') => {
    setSelectedProject(null);
    setMobileNavOpen(false);
    setConsultationTopic(topic);
    setConsultationOpen(true);
  };

  const openProjectById = (id: string) => {
    const match = SELECTED_WORK.find((p) => p.id === id);
    if (match) {
      setSelectedProject(match);
    }
  };

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen bg-transparent text-[#0B1B42] flex flex-col selection:bg-[#F8D501] selection:text-[#0B1B42]"
    >
      {/* Scroll-driven 300-Frame Animation Canvas with IDM Color Grading */}
      <ScrollCanvas />

      {/* Floating 3D Dynamic Founder Avatar & Captive Lead Widget (Bantaram Sanvika) */}
      <FounderAvatarWidget onOpenConsultation={openConsultation} />

      {/* Top Navigation Bar with Scroll Progress Track */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b-2 border-[#0B1B42]/15 transition-colors shadow-sm">
        <div className="h-[3px] w-full bg-[#0B1B42]/10 overflow-hidden">
          <div
            data-scroll-progress
            className="h-full w-full bg-[#F8D501] origin-left scale-x-[0.05] will-change-transform"
          />
        </div>
        <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-8 px-6 md:px-10">
          {/* Zone 1: Authentic Company Logo + Brand Wordmark */}
          <a
            href="#top"
            className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B1B42] group"
          >
            <BrandLogo variant="light" size="sm" showWordmark showTagline />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-[13.5px] font-bold text-[#0B1B42]"
          >
            <a
              href="#gmb-services"
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#F8D501] transition-all duration-150"
            >
              Services
            </a>
            <a
              href="#comparison"
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#F8D501] transition-all duration-150"
            >
              Why IDM
            </a>
            <a
              href="#work"
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#F8D501] transition-all duration-150"
            >
              Work
            </a>
            <a
              href="#packages"
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#F8D501] transition-all duration-150"
            >
              Packages
            </a>
            <a
              href="#faq"
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#F8D501] transition-all duration-150"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#F8D501] transition-all duration-150"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Direct Brand Actions (WhatsApp & Gold CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SITE_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 border-2 border-[#0B1B42] bg-white px-3.5 py-2 text-[11px] font-mono tracking-wider text-[#0B1B42] font-bold hover:bg-[#0B1B42] hover:text-[#F8D501] transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span>WHATSAPP</span>
            </a>

            <button
              type="button"
              onClick={() => openConsultation()}
              className="hidden sm:inline-flex items-center justify-center border-2 border-[#0B1B42] bg-[#F8D501] px-5 py-2.5 font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#0B1B42] font-extrabold whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#0B1B42] hover:text-[#F8D501] shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1B42]"
            >
              START A PROJECT
            </button>

            <button
              type="button"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileNavOpen}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center border-2 border-[#0B1B42] bg-white text-[#0B1B42]"
            >
              {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileNavOpen && (
          <div className="md:hidden border-b-2 border-[#0B1B42] bg-white/98 backdrop-blur-xl px-6 py-5">
            <nav className="flex flex-col gap-3.5 text-[14px] font-bold text-[#0B1B42]">
              <a
                href="#gmb-services"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-[#162E68] flex items-center justify-between border-b border-slate-100"
              >
                <span>GMB Services</span>
                <span className="font-mono text-[10px] text-[#0B1B42] bg-[#F8D501] px-2.5 py-0.5 font-bold border border-[#0B1B42]/20">
                  ₹2,999+
                </span>
              </a>
              <a
                href="#comparison"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-[#162E68] border-b border-slate-100"
              >
                Why IDM vs Others
              </a>
              <a
                href="#work"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-[#162E68] border-b border-slate-100"
              >
                Selected Work
              </a>
              <a
                href="#packages"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-[#162E68] flex items-center justify-between border-b border-slate-100"
              >
                <span>Growth Packages</span>
                <span className="font-mono text-[10px] text-[#F8D501] bg-[#0B1B42] px-2.5 py-0.5 font-bold">
                  INR Plans
                </span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-[#162E68] border-b border-slate-100"
              >
                FAQs
              </a>
              <a
                href="#contact"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-[#162E68]"
              >
                Contact &amp; Office
              </a>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={SITE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#0B1B42] bg-[#0B1B42] text-white px-4 py-3 font-mono text-[11px] tracking-wider uppercase font-bold"
                >
                  <MessageCircle className="h-4 w-4 text-[#F8D501]" />
                  <span>WhatsApp (+91 85198 37818)</span>
                </a>

                <button
                  type="button"
                  onClick={() => openConsultation()}
                  className="w-full border-2 border-[#0B1B42] bg-[#F8D501] text-[#0B1B42] px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase font-extrabold hover:bg-[#E5C300] transition-colors"
                >
                  START A PROJECT
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Website Flow */}
      <main id="top" className="relative z-10 flex-1">
        {/* Hero Section — Asymmetric Layout perfectly aligned with Right 3D Animation */}
        <section className="mx-auto max-w-[1240px] px-6 md:px-10 pt-16 md:pt-24 pb-14 md:pb-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[64vh]">
            {/* Left 7 Columns: Hero Editorial Content */}
            <div className="lg:col-span-7 flex flex-col justify-center z-10 bg-white/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-5 sm:p-6 lg:p-0 border border-[#0B1B42]/15 lg:border-0 shadow-xs lg:shadow-none">
              <div
                data-hero-reveal
                className="inline-flex items-center gap-2.5 border-2 border-[#F8D501]/80 bg-[#0B1B42] px-3.5 py-1.5 w-fit shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#F8D501] animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white font-bold">
                  HYDERABAD &amp; GLOBAL ·{' '}
                  <span className="text-[#F8D501]">GOOGLE &amp; META PARTNER</span>
                </span>
              </div>

              <h1
                data-hero-reveal
                className="mt-6 sm:mt-7 font-serif text-[36px] sm:text-[54px] lg:text-[70px] font-normal leading-[1.08] sm:leading-[1.05] tracking-[-0.025em] text-[#0B1B42] text-balance"
              >
                We turn technology into{' '}
                <span className="block sm:inline">
                  <span className="italic font-semibold text-[#0B1B42] underline decoration-[#F8D501] decoration-[6px] underline-offset-4">
                    growth
                  </span>
                  <span className="text-[#F8D501]">.</span>
                </span>
              </h1>

              <p
                data-hero-reveal
                className="mt-5 sm:mt-6 max-w-[540px] text-[15.5px] sm:text-[17px] leading-[1.74] text-[#0F2352] font-medium"
              >
                {SITE_INFO.heroLead}
              </p>

              <div
                data-hero-reveal
                className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
              >
                <button
                  type="button"
                  onClick={() => openConsultation()}
                  className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#0B1B42] bg-[#0B1B42] px-7 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase text-[#F8D501] font-extrabold whitespace-nowrap shadow-md hover:bg-[#162E68] active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1B42]"
                >
                  START A PROJECT →
                </button>

                <a
                  href={SITE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#0B1B42] bg-[#F8D501] px-6 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase text-[#0B1B42] font-extrabold hover:bg-[#E5C300] active:scale-[0.98] transition-all shadow-sm"
                >
                  <MessageCircle className="h-4 w-4 text-[#0B1B42]" />
                  <span>WHATSAPP DIRECT</span>
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-1.5 px-2 py-2 font-mono text-[11px] tracking-[0.16em] uppercase text-[#0B1B42] font-bold hover:underline hover:decoration-[#F8D501] hover:decoration-2 hover:underline-offset-4 transition-all"
                >
                  <span>OUR WORK</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>

              {/* Quick Trust Credentials Strip on Left */}
              <div
                data-hero-reveal
                className="mt-9 pt-5 border-t-2 border-[#0B1B42]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-[#0B1B42]"
              >
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B42]">
                  <Star className="h-4 w-4 fill-[#F8D501] text-[#0B1B42]" />
                  <span>4.9 / 5 Rating</span>
                  <span className="text-[#162E68] font-semibold">(200+ Verified Reviews)</span>
                </div>
                <span className="text-[#0B1B42]/40">·</span>
                <div className="flex items-center gap-1.5 font-semibold text-[#0B1B42]">
                  <Clock className="h-4 w-4 text-[#0B1B42]" />
                  <span>Replies within 4 business hours</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: OPEN CLEAR VIEWPORT FOR 3D ANIMATION */}
            {/* Kept unobstructed so the floating 3D growth interface frames shine with 100% clarity */}
            <div className="hidden lg:flex lg:col-span-5 h-full min-h-[460px] pointer-events-none items-end justify-end pb-4">
              <div className="inline-flex items-center gap-2.5 border-2 border-[#0B1B42]/25 bg-white/95 backdrop-blur-xs px-4 py-2 font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#0B1B42] font-bold shadow-sm">
                <img src="/idm-logo.png" alt="" className="h-4 w-4 object-contain" aria-hidden="true" />
                <span>IDM 3D GROWTH ENGINE · SCROLL TO SCRUB</span>
              </div>
            </div>
          </div>

          {/* 4-Column Performance Metrics Bar */}
          <div
            data-hero-stats
            className="mt-14 border-t-4 border-t-[#F8D501] border-x-2 border-b-2 border-[#0B1B42]/20 bg-white/95 backdrop-blur-md shadow-md grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#0B1B42]/15"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} data-hero-stat className="p-6 sm:p-7">
                <div
                  data-stat-value
                  data-target={stat.value}
                  className="font-serif text-[34px] sm:text-[40px] leading-none text-[#0B1B42] tabular-nums font-bold"
                >
                  {stat.value}
                </div>
                <div className="mt-2.5 font-mono text-[10px] tracking-[0.18em] uppercase text-[#162E68] font-bold flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#F8D501] inline-block shrink-0" />
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Logo Strip Band — Signature Deep Royal Navy & Gold */}
        <section
          aria-label="Client partners"
          data-client-strip
          className="w-full border-y-2 border-[#F8D501] bg-[#0B1B42] text-white py-8 md:py-10 shadow-md"
        >
          <div className="mx-auto max-w-[1240px] px-6 md:px-10 space-y-5">
            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
              {CLIENT_STRIP_ROW_1.map((client) => (
                <button
                  key={client.id}
                  type="button"
                  data-client-item
                  onClick={() => openProjectById(client.id)}
                  className="inline-flex items-center gap-2.5 text-white/90 transition-all duration-150 hover:text-[#F8D501] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F8D501]"
                >
                  <GeometricEmblem emblem={client.emblem} className="h-4 w-4 text-[#F8D501]" />
                  <span className="font-serif text-[15px] font-medium whitespace-nowrap">
                    {client.name}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
              {CLIENT_STRIP_ROW_2.map((client) => (
                <button
                  key={client.id}
                  type="button"
                  data-client-item
                  onClick={() => openProjectById(client.id)}
                  className="inline-flex items-center gap-2.5 text-white/90 transition-all duration-150 hover:text-[#F8D501] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F8D501]"
                >
                  <GeometricEmblem emblem={client.emblem} className="h-4 w-4 text-[#F8D501]" />
                  <span className="font-serif text-[15px] font-medium whitespace-nowrap">
                    {client.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quick GMB Services Strip — Direct commercial solutions placed immediately below Client Partners */}
        <QuickGmbServices onOpenConsultation={openConsultation} />

        {/* Mission Section */}
        <section
          id="mission"
          className="mx-auto max-w-[1240px] px-6 md:px-10 py-24 md:py-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column — Sticky under Navbar on Desktop */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3.5">
                <span className="h-[3px] w-8 bg-[#F8D501] shrink-0" aria-hidden="true" />
                <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#F8D501] font-bold bg-[#0B1B42] px-3 py-1">
                  OUR MISSION
                </span>
              </div>

              <h2 className="mt-6 font-serif text-[40px] sm:text-[48px] font-normal leading-[1.1] tracking-[-0.015em] text-[#0B1B42]">
                Strategy first.
                <br />
                Ship fast.
                <br />
                <span className="underline decoration-[#F8D501] decoration-[5px] underline-offset-4">
                  Real growth.
                </span>
              </h2>
            </div>

            {/* Right Editorial Narrative + 4 Numbered Pillars in Crisp White-Navy-Gold Cards */}
            <div
              data-mission-card
              className="lg:col-span-8 bg-white/95 backdrop-blur-md p-8 sm:p-10 border-t-4 border-t-[#F8D501] border-x-2 border-b-2 border-[#0B1B42]/20 shadow-md"
            >
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#0F2352] font-medium mb-12">
                {MISSION_INTRO}
              </p>

              <div className="border-t-2 border-[#0B1B42]/15 divide-y divide-[#0B1B42]/15 border-b-2">
                {MISSION_PILLARS.map((pillar) => (
                  <div
                    key={pillar.index}
                    data-mission-pillar
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 py-7 items-start hover:bg-[#F4F7FC] transition-colors px-2 -mx-2"
                  >
                    <div className="sm:col-span-1 pt-0.5">
                      <span
                        data-pillar-badge
                        className="inline-flex items-center justify-center bg-[#F8D501] text-[#0B1B42] font-mono text-[12px] font-extrabold px-2 py-0.5 border border-[#0B1B42]/25 tabular-nums"
                      >
                        {pillar.index}
                      </span>
                    </div>
                    <h3 className="sm:col-span-4 font-serif text-[22px] font-bold leading-[1.28] text-[#0B1B42]">
                      {pillar.title}
                    </h3>
                    <p className="sm:col-span-7 text-[14px] leading-[1.72] text-[#162E68] font-medium">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Agency Comparison Matrix — IDM Senior Operators vs Traditional Agencies */}
        <AgencyComparison />

        {/* Selected Work Section */}
        <section
          id="work"
          className="w-full border-y-2 border-[#0B1B42]/15 bg-[#EBF0F9]/90 backdrop-blur-md py-24 md:py-28"
        >
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3.5">
                  <span className="h-[3px] w-8 bg-[#F8D501] shrink-0" aria-hidden="true" />
                  <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#F8D501] font-bold bg-[#0B1B42] px-3 py-1">
                    SELECTED WORK
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-[38px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0B1B42]">
                  Proud to partner with
                </h2>
              </div>

              <p className="max-w-[380px] text-[14px] leading-[1.68] text-[#0B1B42] font-medium bg-white/90 border-l-4 border-l-[#F8D501] border border-[#0B1B42]/15 px-4 py-3 shadow-xs">
                A selection of active partnerships across healthcare, retail, real estate, EV mobility, and enterprise software.
              </p>
            </div>

            {/* 3x3 Crisp Bordered Grid */}
            <div
              data-work-grid
              className="border-t-4 border-t-[#0B1B42] border-x-2 border-b-2 border-[#0B1B42]/20 bg-white backdrop-blur-sm shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                {SELECTED_WORK.map((project, index) => {
                  const isLastRowDesktop = index >= 6;
                  const isLastItemMobile = index === SELECTED_WORK.length - 1;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      data-work-card
                      onClick={() => setSelectedProject(project)}
                      className={`group text-left p-8 md:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-200 hover:bg-[#FFFDF0] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0B1B42] ${
                        !isLastItemMobile ? 'border-b border-[#0B1B42]/15' : ''
                      } ${isLastRowDesktop ? 'md:border-b-0' : ''} ${
                        index % 3 !== 2 ? 'md:border-r md:border-[#0B1B42]/15' : ''
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <GeometricEmblem
                            emblem={project.emblem}
                            className="h-6 w-6 text-[#0B1B42] transition-transform duration-200 group-hover:scale-110"
                          />
                          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#0B1B42] font-extrabold bg-[#F8D501] border border-[#0B1B42]/25 px-2.5 py-0.5 tabular-nums">
                            {project.metricBadge}
                          </span>
                        </div>

                        <h3 className="mt-7 font-serif text-[21px] font-bold leading-[1.25] text-[#0B1B42] group-hover:text-[#162E68] transition-colors">
                          {project.name}
                        </h3>
                        <p className="mt-1.5 text-[13px] text-[#162E68] font-medium">{project.subtitle}</p>
                      </div>

                      <div className="mt-8 pt-4 border-t border-[#0B1B42]/10 flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#0B1B42] font-bold">
                          {project.category}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-[#0B1B42]/60 group-hover:text-[#0B1B42] transition-colors" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => openConsultation('Full Case Studies')}
                className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#0B1B42] font-bold transition-colors duration-150 hover:bg-[#F8D501] px-4 py-2 border border-transparent hover:border-[#0B1B42] underline underline-offset-4"
              >
                FULL CASE STUDIES SHARED ON REQUEST →
              </button>
            </div>
          </div>
        </section>

        {/* 4 Tiered Growth Packages & Retainers in INR */}
        <GrowthPackages onOpenConsultation={openConsultation} />

        {/* Approach Section */}
        <section
          id="approach"
          className="mx-auto max-w-[1240px] px-6 md:px-10 py-24 md:py-28"
        >
          <div className="flex items-center gap-3.5 mb-8">
            <span className="h-[3px] w-8 bg-[#F8D501] shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#F8D501] font-bold bg-[#0B1B42] px-3 py-1">
              APPROACH
            </span>
          </div>

          <div className="h-[3px] w-full bg-[#0B1B42]/10 mb-8 overflow-hidden">
            <div data-approach-line className="h-full w-full bg-[#F8D501]" />
          </div>

          <div data-approach-grid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPROACH_STEPS.map((step, idx) => (
              <div
                key={step.kicker}
                data-approach-card
                className="border-t-4 border-t-[#F8D501] bg-white/95 backdrop-blur-sm p-8 border-x-2 border-b-2 border-[#0B1B42]/20 shadow-sm hover:border-[#0B1B42] hover:-translate-y-1 transition-all"
              >
                <div className="inline-flex items-center gap-2 bg-[#0B1B42] text-[#F8D501] px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase font-bold">
                  <span>0{idx + 1} · {step.kicker}</span>
                </div>
                <h3 className="mt-4 font-serif text-[24px] font-bold leading-[1.25] text-[#0B1B42]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.74] text-[#162E68] font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Authoritative FAQs Accordion */}
        <FaqAccordion />

        {/* Senior Leadership & Editorial Quote Section with IDM Official Crest */}
        <section
          data-leadership-section
          className="mx-auto max-w-[1240px] px-6 md:px-10 pb-24 md:pb-28"
        >
          <div className="border-t-4 border-t-[#F8D501] border-x-2 border-b-2 border-[#0B1B42]/20 bg-white/95 backdrop-blur-md py-14 md:py-18 px-8 sm:px-12 shadow-md">
            <div data-leader-header>
              <div className="flex justify-center mb-6">
                <BrandLogo variant="light" size="lg" />
              </div>
              <blockquote className="mx-auto max-w-[760px] text-center">
                <p className="font-serif text-[26px] sm:text-[34px] font-normal leading-[1.32] text-[#0B1B42] text-balance">
                  {SITE_INFO.founderQuote}
                </p>
              </blockquote>
            </div>

            {/* Senior Leadership Duo Grid */}
            <div
              data-leader-grid
              className="mt-12 pt-10 border-t-2 border-[#0B1B42]/15 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto"
            >
              {LEADERSHIP.map((leader) => {
                const isSanvika = leader.name.toLowerCase().includes('sanvika');
                const photoSrc = isSanvika ? '/sanvika-avatar.png' : '/founder-raghavendra.jpg';

                return (
                  <div
                    key={leader.name}
                    data-leader-card
                    className="border-2 border-[#0B1B42]/20 bg-white p-6 flex flex-col justify-between shadow-sm hover:border-[#0B1B42] hover:shadow-lg transition-all text-left"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#0B1B42] ring-2 ring-[#F8D501] bg-[#F4F7FC] shrink-0 shadow-xs">
                          <img
                            src={photoSrc}
                            alt={leader.name}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-serif text-[20px] font-bold text-[#0B1B42]">
                              {leader.name}
                            </h4>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-[#0B1B42] bg-[#F8D501] px-2 py-0.5 border border-[#0B1B42]/25 font-bold">
                              LEADER
                            </span>
                          </div>
                          <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-[#162E68] font-bold mt-0.5">
                            {leader.role}
                          </div>
                        </div>
                      </div>

                      <p className="mt-2 text-[13.5px] leading-[1.65] text-[#0F2352] font-medium">
                        {leader.bio}
                      </p>
                    </div>

                    <div className="mt-6 pt-3.5 border-t border-[#0B1B42]/15 flex items-center justify-between text-[11px] font-mono text-[#0B1B42]">
                      <span className="font-bold">IDM SMART TECH</span>
                      <a
                        href={`https://wa.me/918519837818?text=${encodeURIComponent(
                          `Hi ${leader.name}, I would like to speak directly with leadership regarding my business growth.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0B1B42] bg-[#F8D501] hover:bg-[#0B1B42] hover:text-[#F8D501] px-3 py-1 border border-[#0B1B42]/30 font-bold inline-flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>CHAT ON WHATSAPP →</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive IDM Brand Navy CTA & Footer with Logo Seal */}
      <footer id="contact" className="relative z-10 w-full bg-[#071330] text-white border-t-4 border-t-[#F8D501]">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          {/* Upper Conversion Block */}
          <div className="pt-24 pb-20 md:pt-28 md:pb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div>
              <div className="inline-block bg-[#F8D501] text-[#0B1B42] font-mono text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1">
                FOR AMBITIOUS BRANDS
              </div>
              <h2 className="mt-5 font-serif text-[40px] sm:text-[54px] font-normal leading-[1.12] tracking-[-0.015em] text-white text-balance max-w-[640px]">
                Let&apos;s build your{' '}
                <span className="italic text-[#F8D501] font-medium">success</span> story.
              </h2>
              <p className="mt-4 text-[15px] text-slate-200 max-w-[500px]">
                Direct consultation with senior practitioners. No junior handoffs, no fluff.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openConsultation()}
                className="inline-flex items-center justify-center border-2 border-[#F8D501] bg-[#F8D501] text-[#0B1B42] px-7 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase whitespace-nowrap font-extrabold hover:bg-white hover:border-white transition-colors shadow-md"
              >
                REQUEST CONSULTATION →
              </button>

              <a
                href={SITE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#F8D501]/80 bg-[#0B1B42] text-[#F8D501] px-6 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase font-bold hover:bg-[#F8D501] hover:text-[#0B1B42] transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* 4-Column Footer Directory with Official IDM Logo Badge */}
          <div className="border-t border-white/15 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: Brand & Credentials */}
            <div>
              <BrandLogo variant="dark-badge" size="md" showWordmark showTagline />
              <p className="mt-4 text-[13px] leading-[1.7] text-slate-300">
                AI-powered digital marketing &amp; full-stack technology agency headquartered in Shamshabad, Hyderabad. Led by Raghavendra Goud &amp; Bantaram Sanvika.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[12px] text-[#F8D501] font-mono font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span>Google &amp; Meta Partner</span>
              </div>
            </div>

            {/* Col 2: Physical Office & Google Maps Link */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#F8D501] font-bold">
                OFFICE &amp; LOCATION
              </div>
              <div className="mt-3.5 space-y-2 text-[13px] text-slate-200">
                <p className="leading-[1.6]">{SITE_INFO.addressFull}</p>
                <div className="pt-1">
                  <a
                    href={SITE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#F8D501] hover:text-white transition-colors text-[12px] font-mono tracking-wider font-bold"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    <span>VIEW ON GOOGLE MAPS →</span>
                  </a>
                </div>
                <div className="pt-2 text-[12px] text-slate-300 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#F8D501]" />
                  <span>{SITE_INFO.businessHours}</span>
                </div>
              </div>
            </div>

            {/* Col 3: Direct Inquiries & WhatsApp */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#F8D501] font-bold">
                DIRECT CHANNELS
              </div>
              <div className="mt-3.5 space-y-2.5 text-[13px] text-slate-200">
                <div>
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-[#F8D501]"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#F8D501]" />
                    <span>{SITE_INFO.email}</span>
                  </a>
                </div>
                <div>
                  <a
                    href={SITE_INFO.phoneHref}
                    className="inline-flex items-center gap-2 tabular-nums transition-colors hover:text-[#F8D501]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#F8D501]" />
                    <span>{SITE_INFO.phoneDisplay}</span>
                  </a>
                </div>
                <div>
                  <a
                    href={SITE_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#F8D501] transition-colors hover:text-white font-bold"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>WhatsApp Direct (+91 85198 37818)</span>
                  </a>
                </div>
                <p className="text-[11.5px] text-slate-300 pt-1">
                  Response SLA: {SITE_INFO.responseSla}
                </p>
              </div>
            </div>

            {/* Col 4: Full Capabilities Stack */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#F8D501] font-bold">
                CAPABILITIES
              </div>
              <div className="mt-3.5 space-y-1.5 text-[13px] text-slate-200">
                <p>SEO &amp; Local 3-Pack Maps</p>
                <p>Google &amp; Meta ROI Ads</p>
                <p>Websites &amp; Headless E-Comm</p>
                <p>Flutter &amp; React Native Apps</p>
                <p>Custom ERP &amp; CRM Architecture</p>
                <p className="text-[#F8D501] font-medium">WhatsApp AI Lead Pipelines</p>
              </div>
            </div>
          </div>

          {/* Bottom Legal Row — Positioned clear of the bottom-right floating Founder Avatar */}
          <div className="border-t border-white/15 pt-7 pb-24 sm:pb-8 md:pr-[440px] flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-start gap-x-6 gap-y-3 font-mono text-[10px] tracking-[0.18em] uppercase text-slate-300">
            <div>© 2026 IDM SMART TECH. ALL RIGHTS RESERVED.</div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[#F8D501] font-bold">GOOGLE &amp; META PARTNER</span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setLegalTab('privacy')}
                className="transition-colors hover:text-[#F8D501] uppercase"
              >
                PRIVACY POLICY
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setLegalTab('terms')}
                className="transition-colors hover:text-[#F8D501] uppercase"
              >
                TERMS OF SERVICE
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Editorial Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestConsultation={(name) => openConsultation(name)}
      />
      <ConsultationModal
        isOpen={consultationOpen}
        initialTopic={consultationTopic}
        onClose={() => setConsultationOpen(false)}
      />
      <LegalModal tab={legalTab} onClose={() => setLegalTab(null)} />
    </div>
  );
}
