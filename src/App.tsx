import { useState } from 'react';
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
import { AIAvatarConcierge } from './components/AIAvatarConcierge';
import { QuickGmbServices } from './components/QuickGmbServices';
import { AgencyComparison } from './components/AgencyComparison';
import { GrowthPackages } from './components/GrowthPackages';
import { FaqAccordion } from './components/FaqAccordion';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('');
  const [legalTab, setLegalTab] = useState<LegalTab>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
    <div className="relative min-h-screen bg-transparent text-[#141C27] flex flex-col selection:bg-[#4F759B]/20 selection:text-[#141C27]">
      {/* Scroll-driven 300-Frame Animation Canvas */}
      <ScrollCanvas />

      {/* Floating 3D AI Concierge Avatar */}
      <AIAvatarConcierge onOpenConsultation={openConsultation} />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#F6F7F9]/92 backdrop-blur-md border-b border-[#DCE1E8]/80 transition-colors">
        <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-8 px-6 md:px-10">
          {/* Zone 1: Brand Wordmark + Status */}
          <a
            href="#top"
            className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141C27]"
          >
            <svg
              viewBox="0 0 12 12"
              className="h-2.5 w-2.5 text-[#141C27] shrink-0"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="6" y="0.5" width="7.7" height="7.7" transform="rotate(45 6 0.5)" />
            </svg>
            <span className="font-serif text-[17.5px] font-medium tracking-[-0.01em] text-[#141C27]">
              {SITE_INFO.brand}
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-[13px] font-normal text-[#5A6577]"
          >
            <a
              href="#gmb-services"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#141C27]"
            >
              Services
            </a>
            <a
              href="#comparison"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#141C27]"
            >
              Why IDM
            </a>
            <a
              href="#work"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#141C27]"
            >
              Work
            </a>
            <a
              href="#packages"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#141C27]"
            >
              Packages
            </a>
            <a
              href="#faq"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#141C27]"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#141C27]"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Direct Actions (WhatsApp & Start Project) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SITE_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 border border-[#DCE1E8] bg-white/70 px-3.5 py-2 text-[11px] font-mono tracking-wider text-[#141C27] hover:border-emerald-600 hover:text-emerald-700 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
              <span>WHATSAPP</span>
            </a>

            <button
              type="button"
              onClick={() => openConsultation()}
              className="hidden sm:inline-flex items-center justify-center border border-[#141C27] bg-white/80 px-5 py-2.5 font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#141C27] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#141C27] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141C27]"
            >
              START A PROJECT
            </button>

            <button
              type="button"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileNavOpen}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-[#D8DEE6] bg-white text-[#141C27]"
            >
              {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileNavOpen && (
          <div className="md:hidden border-b border-[#DCE1E8] bg-[#F6F7F9]/98 backdrop-blur-xl px-6 py-5">
            <nav className="flex flex-col gap-3.5 text-[14px] text-[#475569]">
              <a
                href="#gmb-services"
                onClick={() => setMobileNavOpen(false)}
                className="py-1 hover:text-[#141C27] flex items-center justify-between"
              >
                <span>GMB Services</span>
                <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">₹2,999+</span>
              </a>
              <a
                href="#comparison"
                onClick={() => setMobileNavOpen(false)}
                className="py-1 hover:text-[#141C27]"
              >
                Why IDM vs Others
              </a>
              <a
                href="#work"
                onClick={() => setMobileNavOpen(false)}
                className="py-1 hover:text-[#141C27]"
              >
                Selected Work
              </a>
              <a
                href="#packages"
                onClick={() => setMobileNavOpen(false)}
                className="py-1 hover:text-[#141C27] flex items-center justify-between"
              >
                <span>Growth Packages</span>
                <span className="font-mono text-[10px] text-[#4F759B] bg-slate-100 px-2 py-0.5">INR Plans</span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileNavOpen(false)}
                className="py-1 hover:text-[#141C27]"
              >
                FAQs
              </a>
              <a
                href="#contact"
                onClick={() => setMobileNavOpen(false)}
                className="py-1 hover:text-[#141C27]"
              >
                Contact &amp; Office
              </a>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={SITE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-emerald-600 bg-emerald-50 text-emerald-800 px-4 py-2.5 font-mono text-[11px] tracking-wider uppercase"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp (+91 85198 37818)</span>
                </a>

                <button
                  type="button"
                  onClick={() => openConsultation()}
                  className="w-full border border-[#141C27] bg-[#141C27] text-white px-5 py-3 font-mono text-[10.5px] tracking-[0.16em] uppercase hover:bg-[#1E293B] transition-colors"
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
            <div className="lg:col-span-7 flex flex-col justify-center z-10">
              <div className="inline-flex items-center gap-2.5 border border-[#DCE1E8] bg-white/75 backdrop-blur-md px-3.5 py-1.5 w-fit">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#64748B]">
                  HYDERABAD &amp; GLOBAL · GOOGLE &amp; META PARTNER
                </span>
              </div>

              <h1 className="mt-6 sm:mt-7 font-serif text-[34px] sm:text-[52px] lg:text-[68px] font-normal leading-[1.1] sm:leading-[1.07] tracking-[-0.025em] text-[#141C27] text-balance">
                We turn technology into{' '}
                <span className="block sm:inline">
                  <span className="italic text-[#4F759B]">growth</span>.
                </span>
              </h1>

              <p className="mt-5 sm:mt-6 max-w-[530px] text-[14.5px] sm:text-[15.5px] leading-[1.7] sm:leading-[1.78] text-[#5A6577]">
                {SITE_INFO.heroLead}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <button
                  type="button"
                  onClick={() => openConsultation()}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#141C27] px-7 py-3.5 font-mono text-[10.5px] tracking-[0.16em] uppercase text-white whitespace-nowrap shadow-sm hover:bg-[#1E293B] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141C27]"
                >
                  START A PROJECT
                </button>

                <a
                  href={SITE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-emerald-600/40 bg-white/80 backdrop-blur-sm px-5 py-3.5 font-mono text-[10.5px] tracking-[0.16em] uppercase text-emerald-800 hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>WHATSAPP DIRECT</span>
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-1.5 py-2 font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#5A6577] hover:text-[#141C27] transition-colors"
                >
                  <span>OUR WORK</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>

              {/* Quick Trust Credentials Strip on Left */}
              <div className="mt-9 pt-5 border-t border-[#DCE1E8]/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-[#64748B]">
                <div className="flex items-center gap-1.5 font-medium text-[#141C27]">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
                  <span>4.9 / 5 Rating</span>
                  <span className="text-[#64748B] font-normal">(200+ Verified Reviews)</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#64748B]" />
                  <span>Replies within 4 business hours</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: OPEN CLEAR VIEWPORT FOR 3D ANIMATION */}
            {/* Kept unobstructed so the floating 3D growth interface frames shine with 100% clarity */}
            <div className="hidden lg:flex lg:col-span-5 h-full min-h-[460px] pointer-events-none items-end justify-end pb-4">
              <div className="border border-[#DCE1E8]/70 bg-white/50 backdrop-blur-xs px-3.5 py-1.5 font-mono text-[9px] tracking-[0.18em] uppercase text-[#748094]">
                IDM 3D GROWTH ENGINE · SCROLL TO SCRUB
              </div>
            </div>
          </div>

          {/* 4-Column Performance Metrics Bar */}
          <div className="mt-14 border border-[#DCE1E8] bg-white/75 backdrop-blur-md shadow-xs grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#DCE1E8]">
            {HERO_STATS.map((stat, idx) => (
              <div key={stat.label} className="p-6 sm:p-7">
                <div className="font-serif text-[32px] sm:text-[36px] leading-none text-[#141C27] tabular-nums font-normal">
                  {stat.value}
                </div>
                <div className="mt-2.5 font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#64748B]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Logo Strip Band */}
        <section
          aria-label="Client partners"
          className="w-full border-y border-[#DCE1E8] bg-[#EEF1F5]/85 backdrop-blur-md py-8 md:py-9"
        >
          <div className="mx-auto max-w-[1240px] px-6 md:px-10 space-y-5">
            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
              {CLIENT_STRIP_ROW_1.map((client) => (
                <button
                  key={client.id}
                  type="button"
                  onClick={() => openProjectById(client.id)}
                  className="inline-flex items-center gap-2 text-[#5A6577] transition-colors duration-150 hover:text-[#141C27] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141C27]"
                >
                  <GeometricEmblem emblem={client.emblem} className="h-4 w-4 text-[#64748B]" />
                  <span className="font-serif text-[14.5px] whitespace-nowrap">
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
                  onClick={() => openProjectById(client.id)}
                  className="inline-flex items-center gap-2 text-[#5A6577] transition-colors duration-150 hover:text-[#141C27] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141C27]"
                >
                  <GeometricEmblem emblem={client.emblem} className="h-4 w-4 text-[#64748B]" />
                  <span className="font-serif text-[14.5px] whitespace-nowrap">
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
            {/* Left Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3.5">
                <span className="h-[1px] w-7 bg-[#94A3B8] shrink-0" aria-hidden="true" />
                <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#64748B]">
                  OUR MISSION
                </span>
              </div>

              <h2 className="mt-6 font-serif text-[38px] sm:text-[44px] font-normal leading-[1.12] tracking-[-0.015em] text-[#141C27]">
                Strategy first.
                <br />
                Ship fast.
                <br />
                Real growth.
              </h2>
            </div>

            {/* Right Editorial Narrative + 4 Numbered Pillars in Frosted Cards */}
            <div className="lg:col-span-8 bg-white/75 backdrop-blur-md p-8 sm:p-10 border border-[#DCE1E8] shadow-xs">
              <p className="text-[15.5px] leading-[1.8] text-[#475569] mb-12">
                {MISSION_INTRO}
              </p>

              <div className="border-t border-[#DCE1E8] divide-y divide-[#DCE1E8] border-b">
                {MISSION_PILLARS.map((pillar) => (
                  <div
                    key={pillar.index}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 py-7 items-start"
                  >
                    <div className="sm:col-span-1 pt-1 font-mono text-[11px] tracking-[0.1em] text-[#4F759B] tabular-nums">
                      {pillar.index}
                    </div>
                    <h3 className="sm:col-span-4 font-serif text-[21px] font-normal leading-[1.28] text-[#141C27]">
                      {pillar.title}
                    </h3>
                    <p className="sm:col-span-7 text-[13.5px] leading-[1.72] text-[#5A6577]">
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
          className="w-full border-y border-[#DCE1E8] bg-[#EEF1F5]/85 backdrop-blur-md py-24 md:py-28"
        >
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3.5">
                  <span className="h-[1px] w-7 bg-[#94A3B8] shrink-0" aria-hidden="true" />
                  <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#64748B]">
                    SELECTED WORK
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-[38px] sm:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#141C27]">
                  Proud to partner with
                </h2>
              </div>

              <p className="max-w-[320px] text-[13px] leading-[1.68] text-[#5A6577]">
                A selection of active partnerships across healthcare, retail, real estate, EV mobility, and enterprise software.
              </p>
            </div>

            {/* 3x3 Crisp Bordered Grid with Translucent Elevation */}
            <div className="border border-[#D5DCE4] bg-[#F7F8FA]/90 backdrop-blur-sm shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {SELECTED_WORK.map((project, index) => {
                  const isLastRowDesktop = index >= 6;
                  const isLastItemMobile = index === SELECTED_WORK.length - 1;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className={`group text-left p-8 md:p-9 min-h-[220px] flex flex-col justify-between transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#141C27] ${
                        !isLastItemMobile ? 'border-b border-[#DDE2E8]' : ''
                      } ${isLastRowDesktop ? 'md:border-b-0' : ''} ${
                        index % 3 !== 2 ? 'md:border-r md:border-[#DDE2E8]' : ''
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <GeometricEmblem
                            emblem={project.emblem}
                            className="h-6 w-6 text-[#334155] transition-transform duration-200 group-hover:scale-105"
                          />
                          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#748094] tabular-nums">
                            {project.metricBadge}
                          </span>
                        </div>

                        <h3 className="mt-7 font-serif text-[20px] font-normal leading-[1.25] text-[#141C27]">
                          {project.name}
                        </h3>
                        <p className="mt-1.5 text-[12.5px] text-[#64748B]">{project.subtitle}</p>
                      </div>

                      <div className="mt-8 pt-4 border-t border-[#E2E7EE]">
                        <span className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#5A6577]">
                          {project.category}
                        </span>
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
                className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#64748B] transition-colors duration-150 hover:text-[#141C27] py-2"
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
          <div className="flex items-center gap-3.5 mb-12">
            <span className="h-[1px] w-7 bg-[#94A3B8] shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#64748B]">
              APPROACH
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPROACH_STEPS.map((step) => (
              <div
                key={step.kicker}
                className="border-t border-[#141C27] bg-white/80 backdrop-blur-sm p-8 border-x border-b border-[#DCE1E8] shadow-xs"
              >
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#748094]">
                  {step.kicker}
                </div>
                <h3 className="mt-3.5 font-serif text-[24px] font-normal leading-[1.25] text-[#141C27]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[13.5px] leading-[1.74] text-[#5A6577]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Authoritative FAQs Accordion */}
        <FaqAccordion />

        {/* Senior Leadership & Editorial Quote Section */}
        <section className="mx-auto max-w-[1240px] px-6 md:px-10 pb-24 md:pb-28">
          <div className="border border-[#DCE1E8] bg-white/75 backdrop-blur-md py-14 md:py-18 px-8 sm:px-12 shadow-xs">
            <blockquote className="mx-auto max-w-[760px] text-center">
              <p className="font-serif text-[26px] sm:text-[34px] font-normal leading-[1.32] text-[#141C27] text-balance">
                {SITE_INFO.founderQuote}
              </p>
            </blockquote>

            {/* Senior Leadership Duo Grid */}
            <div className="mt-12 pt-10 border-t border-[#DCE1E8] grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[880px] mx-auto">
              {LEADERSHIP.map((leader) => (
                <div
                  key={leader.name}
                  className="border border-[#E2E8F0] bg-white/80 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-serif text-[19px] font-medium text-[#141C27]">
                        {leader.name}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                        LEADERSHIP
                      </span>
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-[#4F759B]">
                      {leader.role}
                    </div>
                    <p className="mt-3 text-[12.5px] leading-[1.65] text-[#5A6577]">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                    <span>IDM SMART TECH</span>
                    <a
                      href="https://wa.me/918519837818?text=Hi%20IDM%2C%20I%20would%20like%20to%20speak%20with%20leadership"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1"
                    >
                      <span>CONNECT →</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive Dark Navy CTA & Footer with Real Contact & Location Data */}
      <footer id="contact" className="relative z-10 w-full bg-[#0E1521] text-white">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          {/* Upper Conversion Block */}
          <div className="pt-24 pb-20 md:pt-28 md:pb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#64748B]">
                FOR AMBITIOUS BRANDS
              </div>
              <h2 className="mt-5 font-serif text-[40px] sm:text-[54px] font-normal leading-[1.12] tracking-[-0.015em] text-white text-balance max-w-[640px]">
                Let&apos;s build your{' '}
                <span className="italic text-[#5B84B1]">success</span> story.
              </h2>
              <p className="mt-4 text-[14.5px] text-[#94A3B8] max-w-[500px]">
                Direct consultation with senior practitioners. No junior handoffs, no fluff.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openConsultation()}
                className="inline-flex items-center justify-center border border-white/75 bg-white text-[#0E1521] px-7 py-3.5 font-mono text-[10.5px] tracking-[0.16em] uppercase whitespace-nowrap font-medium hover:bg-slate-200 transition-colors"
              >
                REQUEST CONSULTATION
              </button>

              <a
                href={SITE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-emerald-500 bg-emerald-600/20 text-emerald-300 px-6 py-3.5 font-mono text-[10.5px] tracking-[0.16em] uppercase hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* 4-Column Footer Directory with Full Contact, Maps, and Verified Badges */}
          <div className="border-t border-white/10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: Brand & Credentials */}
            <div>
              <span className="font-serif text-[19px] text-white font-medium">
                {SITE_INFO.brand}
              </span>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#94A3B8]">
                AI-powered digital marketing &amp; full-stack technology agency headquartered in Shamshabad, Hyderabad. Led by Raghavendra Goud &amp; Bantaram Sanvika.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[12px] text-emerald-400 font-mono">
                <ShieldCheck className="h-4 w-4" />
                <span>Google &amp; Meta Partner</span>
              </div>
            </div>

            {/* Col 2: Physical Office & Google Maps Link */}
            <div>
              <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#64748B]">
                OFFICE &amp; LOCATION
              </div>
              <div className="mt-3.5 space-y-2 text-[13px] text-[#CBD5E1]">
                <p className="leading-[1.6]">{SITE_INFO.addressFull}</p>
                <div className="pt-1">
                  <a
                    href={SITE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-white transition-colors text-[12px] font-mono tracking-wider"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    <span>VIEW ON GOOGLE MAPS →</span>
                  </a>
                </div>
                <div className="pt-2 text-[11.5px] text-[#94A3B8] flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{SITE_INFO.businessHours}</span>
                </div>
              </div>
            </div>

            {/* Col 3: Direct Inquiries & WhatsApp */}
            <div>
              <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#64748B]">
                DIRECT CHANNELS
              </div>
              <div className="mt-3.5 space-y-2.5 text-[13px] text-[#CBD5E1]">
                <div>
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#64748B]" />
                    <span>{SITE_INFO.email}</span>
                  </a>
                </div>
                <div>
                  <a
                    href={SITE_INFO.phoneHref}
                    className="inline-flex items-center gap-2 tabular-nums transition-colors hover:text-white"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#64748B]" />
                    <span>{SITE_INFO.phoneDisplay}</span>
                  </a>
                </div>
                <div>
                  <a
                    href={SITE_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 transition-colors hover:text-white font-medium"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>WhatsApp Direct (+91 85198 37818)</span>
                  </a>
                </div>
                <p className="text-[11.5px] text-[#64748B] pt-1">
                  Response SLA: {SITE_INFO.responseSla}
                </p>
              </div>
            </div>

            {/* Col 4: Full Capabilities Stack */}
            <div>
              <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[#64748B]">
                CAPABILITIES
              </div>
              <div className="mt-3.5 space-y-1.5 text-[13px] text-[#CBD5E1]">
                <p>SEO &amp; Local 3-Pack Maps</p>
                <p>Google &amp; Meta ROI Ads</p>
                <p>Websites &amp; Headless E-Comm</p>
                <p>Flutter &amp; React Native Apps</p>
                <p>Custom ERP &amp; CRM Architecture</p>
                <p className="text-[#94A3B8]">WhatsApp AI Lead Pipelines</p>
              </div>
            </div>
          </div>

          {/* Bottom Legal Row */}
          <div className="border-t border-white/10 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-[0.18em] uppercase text-[#64748B]">
            <div>© 2026 IDM SMART TECH. ALL RIGHTS RESERVED.</div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span>GOOGLE &amp; META PARTNER</span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setLegalTab('privacy')}
                className="transition-colors hover:text-white uppercase"
              >
                PRIVACY POLICY
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setLegalTab('terms')}
                className="transition-colors hover:text-white uppercase"
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
