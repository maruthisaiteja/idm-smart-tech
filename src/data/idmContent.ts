export type EmblemKey =
  | 'aureon'
  | 'nordlys'
  | 'meridian'
  | 'solstice'
  | 'kintaro'
  | 'halcyon'
  | 'kamakshi'
  | 'vasundhana'
  | 'montra';

export interface StatItem {
  value: string;
  label: string;
}

export interface MissionPillar {
  index: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  emblem: EmblemKey;
  name: string;
  subtitle: string;
  metricBadge: string;
  category: string;
  industry: string;
  stack: string;
  summary: string;
  outcomes: { value: string; label: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ApproachStep {
  kicker: string;
  title: string;
  description: string;
}

export interface GmbServiceItem {
  id: string;
  title: string;
  priceInr: string;
  numericPrice: number;
  tat: string;
  badge: string;
  description: string;
  deliverables: string[];
  whatsappMessage: string;
}

export interface GrowthPackageItem {
  id: string;
  name: string;
  priceInr: string;
  billingPeriod: string;
  isPopular?: boolean;
  summary: string;
  idealFor: string;
  features: string[];
  whatsappMessage: string;
}

export interface AgencyComparisonItem {
  dimension: string;
  idmAdvantage: string;
  traditionalLimitation: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LeaderItem {
  name: string;
  role: string;
  bio: string;
}

export const SITE_INFO = {
  brand: 'IDM Smart Tech',
  kicker: 'IDM SMART TECH — DIGITAL MARKETING & TECHNOLOGY AGENCY',
  heroLead:
    'IDM Smart Tech is a full-service digital marketing and technology agency. We partner with ambitious businesses to generate qualified leads, build conversion-focused websites and apps, and scale measurable growth with AI automation.',
  email: 'info@idmsmarttech.com',
  phoneDisplay: '+91 85198 37818',
  phoneHref: 'tel:+918519837818',
  whatsappHref: 'https://wa.me/918519837818?text=Hi%20IDM%20Smart%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project',
  addressShortLine1: 'Shamshabad, Hyderabad',
  addressShortLine2: 'Madhura Nagar · Telangana 501218',
  addressFull:
    'First Floor, 23-98/A, beside Sri Sai Jyothsna Mess, Madhura Nagar, Shamshabad, Hyderabad, Telangana 501218',
  googleMapsUrl:
    'https://maps.google.com/maps?q=IDM%20Smart%20Tech%20-%20Google%20My%20Business%20Expert%20,%20Local%20SEO%20Expert%20in%20Hyderabad',
  businessHours: 'Mon – Sat: 9:00 AM – 7:00 PM IST',
  responseSla: 'We reply within 4 business hours.',
  founderName: 'Raghavendra Goud',
  founderTitle: 'Founder & Lead Strategist, IDM Smart Tech',
  coFounderName: 'Bantaram Sanvika',
  coFounderTitle: 'Co-Founder & Operations Lead, IDM Smart Tech',
  ratingScore: '4.9★',
  reviewCount: '200+ Verified Reviews',
  founderQuote:
    '“We combine strategy, design, engineering, and AI to move business metrics — never vanity ones.”',
};

export const HERO_STATS: StatItem[] = [
  { value: '500+', label: 'PROJECTS DELIVERED' },
  { value: '320%', label: 'AVG. ROI UPLIFT' },
  { value: '180+', label: 'HAPPY CLIENTS' },
  { value: '12+', label: 'YEARS OF CRAFT' },
];

export const CLIENT_STRIP_ROW_1: { id: string; name: string; emblem: EmblemKey }[] = [
  { id: 'aureon-health', name: 'Aureon Health', emblem: 'aureon' },
  { id: 'nordlys-retail', name: 'Nordlys Retail', emblem: 'nordlys' },
  { id: 'meridian-realty', name: 'Meridian Realty', emblem: 'meridian' },
  { id: 'solstice-erp', name: 'Solstice ERP', emblem: 'solstice' },
  { id: 'kintaro-foods', name: 'Kintaro Foods', emblem: 'kintaro' },
];

export const CLIENT_STRIP_ROW_2: { id: string; name: string; emblem: EmblemKey }[] = [
  { id: 'halcyon-app', name: 'Halcyon App', emblem: 'halcyon' },
  { id: 'kamakshi-ev', name: 'Kamakshi EV Motors', emblem: 'kamakshi' },
  { id: 'montra-electric', name: 'Montra Electric', emblem: 'montra' },
];

export const MISSION_INTRO =
  'We started IDM Smart Tech because too many businesses were paying for activity instead of outcomes. Based in Hyderabad and serving ambitious teams worldwide, we combine seasoned strategists with in-house design, engineering, and AI to turn technology and marketing into predictable growth.';

export const MISSION_PILLARS: MissionPillar[] = [
  {
    index: '01',
    title: 'ROI before vanity',
    description:
      'Every deliverable is tied to a revenue metric — not a vanity chart. We begin with your acquisition funnel and let every creative and engineering decision answer to it.',
  },
  {
    index: '02',
    title: 'Senior operators only',
    description:
      'You work directly with experienced strategists, designers, and engineers — never juniors on autopilot. Built on ownership, craft, transparency, and momentum.',
  },
  {
    index: '03',
    title: 'Full stack under one roof',
    description:
      'SEO & Local SEO, Google and Meta Ads, high-converting websites, Flutter apps, custom CRM/ERP software, and AI workflow automation delivered by one cohesive team.',
  },
  {
    index: '04',
    title: 'Transparent reporting',
    description:
      'Live KPI dashboards plus weekly executive summaries — no jargon, no black boxes. Google and Meta certified, backed by 200+ five-star reviews and 98% client retention.',
  },
];

export const SELECTED_WORK: ProjectItem[] = [
  {
    id: 'aureon-health',
    emblem: 'aureon',
    name: 'Aureon Health',
    subtitle: 'Healthcare · Next.js & Content SEO',
    metricBadge: '+240% LEADS',
    category: 'WEBSITE & SEO',
    industry: 'Healthcare',
    stack: 'Next.js · CMS · Technical SEO',
    summary:
      'Rebuilt the digital platform from the ground up, launched a 90-day commercial content engine, and captured first-page rankings across 34 high-intent clinical search terms.',
    outcomes: [
      { value: '+412%', label: 'Organic Traffic' },
      { value: '+240%', label: 'Qualified Leads' },
      { value: '6.8x', label: 'Return on Investment' },
    ],
    testimonial: {
      quote:
        'We went from invisible to page one on our commercial terms. Traffic and, more importantly, qualified leads followed.',
      author: 'Rahul Menon',
      role: 'Founder, Aureon Health',
    },
  },
  {
    id: 'nordlys-retail',
    emblem: 'nordlys',
    name: 'Nordlys Retail',
    subtitle: 'Omnichannel Retail · Google & Meta',
    metricBadge: '5.2X ROAS',
    category: 'PAID MEDIA',
    industry: 'Retail',
    stack: 'Google Ads · Meta Ads · GA4',
    summary:
      'Rebuilt server-side conversion tracking, restructured Google and Meta acquisition funnels, and launched weekly creative sprints — scaling spend from ₹4L/mo to ₹22L/mo profitably.',
    outcomes: [
      { value: '5.2x', label: 'Blended ROAS' },
      { value: '-38%', label: 'Customer Acquisition Cost' },
      { value: '+3.1x', label: 'Revenue Growth' },
    ],
    testimonial: {
      quote:
        "In 90 days IDM 3x'd our revenue. The team behaves like an in-house growth squad — sharp, fast, and always accountable.",
      author: 'Ananya Rao',
      role: 'CMO, Nordlys Retail',
    },
  },
  {
    id: 'meridian-realty',
    emblem: 'meridian',
    name: 'Meridian Realty',
    subtitle: 'Real Estate · Local Pack & GBP',
    metricBadge: '#1 IN 12 AREAS',
    category: 'LOCAL SEO',
    industry: 'Real Estate',
    stack: 'Local SEO · Google Business Profile · Review Automation',
    summary:
      'Engineered 12 dedicated neighbourhood landing pages, complete Google Business Profile optimization, and automated review workflows to own the local 3-pack across 12 key zones.',
    outcomes: [
      { value: '+287%', label: 'Google Maps Calls' },
      { value: '+412', label: 'Verified Reviews' },
      { value: '+3.4x', label: 'Closed Deals' },
    ],
    testimonial: {
      quote:
        "Local SEO used to feel mysterious. Now it feels like a predictable pipeline. Best growth partner we've worked with.",
      author: 'Vikram Iyer',
      role: 'CEO, Meridian Realty',
    },
  },
  {
    id: 'solstice-erp',
    emblem: 'solstice',
    name: 'Solstice ERP',
    subtitle: 'Manufacturing · React & Node',
    metricBadge: '40% SAVED',
    category: 'CRM & ERP',
    industry: 'Manufacturing',
    stack: 'React · Node.js · Custom ERP',
    summary:
      'Architected and deployed a tailored ERP platform replacing five disconnected spreadsheets and two legacy tools across six factory units — rolled out in 90 days with rapid team adoption.',
    outcomes: [
      { value: '-40%', label: 'Operations Time' },
      { value: '94%', label: 'Team Adoption in 6 Weeks' },
      { value: '+31', label: 'Internal NPS' },
    ],
    testimonial: {
      quote:
        'Live operational visibility replaced hours of manual reporting every morning.',
      author: 'Sana Kapoor',
      role: 'COO, Solstice',
    },
  },
  {
    id: 'kintaro-foods',
    emblem: 'kintaro',
    name: 'Kintaro Foods',
    subtitle: 'Hospitality · Identity & Video',
    metricBadge: '3X RECALL',
    category: 'BRANDING',
    industry: 'Restaurants & Hospitality',
    stack: 'Brand System · Video Production · Social Creative',
    summary:
      'Crafted a cohesive visual identity, packaging guidelines, and short-form motion video library built to elevate brand recall and drive repeat dining and delivery orders.',
    outcomes: [
      { value: '3x', label: 'Brand Recall' },
      { value: '100%', label: 'Unified Brand System' },
      { value: '24/7', label: 'Creative Operations' },
    ],
  },
  {
    id: 'halcyon-app',
    emblem: 'halcyon',
    name: 'Halcyon App',
    subtitle: 'Wellness · Flutter Mobile App',
    metricBadge: '120K INSTALLS',
    category: 'MOBILE APPS',
    industry: 'Wellness',
    stack: 'Flutter · iOS · Android · Firebase',
    summary:
      'Designed and engineered a cross-platform iOS and Android wellness application with smooth onboarding, push engagement loops, and analytics instrumentation.',
    outcomes: [
      { value: '120k+', label: 'App Installs' },
      { value: '4.8★', label: 'Store Rating' },
      { value: '99.9%', label: 'Crash-Free Sessions' },
    ],
  },
  {
    id: 'kamakshi-ev',
    emblem: 'kamakshi',
    name: 'Kamakshi EV Motors',
    subtitle: 'EV Mobility · Showroom Lead Engine',
    metricBadge: 'HYDERABAD',
    category: 'PERFORMANCE',
    industry: 'Electric Vehicles',
    stack: 'Google Ads · Meta Lead Forms · Local SEO',
    summary:
      'Built a hyper-local performance marketing and Google Business Profile acquisition engine turning regional EV search intent into qualified test-ride bookings and showroom walk-ins.',
    outcomes: [
      { value: 'Local #1', label: 'Maps Pack Visibility' },
      { value: 'Full-Funnel', label: 'Lead Attribution' },
      { value: '24/7', label: 'WhatsApp Follow-up' },
    ],
  },
  {
    id: 'vasundhana-hospital',
    emblem: 'vasundhana',
    name: 'Vasundhana Hospital',
    subtitle: 'Fertility & Speciality Healthcare',
    metricBadge: 'HEALTHCARE',
    category: 'GBP & LOCAL SEO',
    industry: 'Healthcare',
    stack: 'Google Business Profile · Technical SEO · Reputation',
    summary:
      'Elevated clinical search visibility and Google Maps authority for speciality care departments through structured medical content, local citations, and patient review workflows.',
    outcomes: [
      { value: 'Top 3', label: 'Regional Map Pack' },
      { value: 'Organic', label: 'Patient Appointment Growth' },
      { value: 'Weekly', label: 'KPI Dashboards' },
    ],
  },
  {
    id: 'montra-electric',
    emblem: 'montra',
    name: 'Montra Electric',
    subtitle: 'Electric Mobility · Digital Growth',
    metricBadge: 'AUTOMOTIVE',
    category: 'CAMPAIGN',
    industry: 'Automotive & EV',
    stack: 'Paid Media · Landing Pages · AI Automation',
    summary:
      'Paired high-converting campaign landing experiences with targeted regional paid media and WhatsApp inquiry automation to accelerate commercial EV dealer inquiries.',
    outcomes: [
      { value: 'Multi-Channel', label: 'Paid Acquisition' },
      { value: 'Automated', label: 'WhatsApp Lead Qualification' },
      { value: 'Live', label: 'Funnel Analytics' },
    ],
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    kicker: 'STRATEGY',
    title: 'Research & roadmaps',
    description:
      'Every engagement begins with a deep-dive workshop and funnel audit — mapping high-intent SEO, paid media, software architecture, and AI automation to concrete revenue milestones.',
  },
  {
    kicker: 'EXECUTE',
    title: 'Design & engineering',
    description:
      'Conversion-focused websites, Flutter and React Native apps, custom CRM and ERP platforms, brand systems, and WhatsApp AI workflows built cleanly by our senior in-house team.',
  },
  {
    kicker: 'LAUNCH & OPTIMIZE',
    title: 'Scale & compound',
    description:
      'Coordinated deployment with QA, GA4, and live KPI dashboards baked in — followed by weekly experimentation across creative, bids, and search to compound measurable growth.',
  },
];

export const POPULAR_GMB_SERVICES: GmbServiceItem[] = [
  {
    id: 'video-verification',
    title: 'GMB Video Verification',
    priceInr: '₹2,999',
    numericPrice: 2999,
    tat: '24–48 Hours',
    badge: 'RAPID APPROVAL',
    description:
      'End-to-end guidance and live preparation adhering to Google’s stringent 2026 video verification guidelines.',
    deliverables: [
      'Live recording rehearsal & pre-audit',
      'Signage, equipment & registration proof check',
      '100% compliant video capture & submission',
      'Fast-track resolution or re-attempt guarantee',
    ],
    whatsappMessage:
      'Hi IDM Smart Tech, I need urgent assistance with GMB Video Verification (₹2,999).',
  },
  {
    id: 'profile-reinstatement',
    title: 'GMB Profile Reinstatement',
    priceInr: '₹2,999',
    numericPrice: 2999,
    tat: '3–5 Business Days',
    badge: 'SUSPENSION RECOVERY',
    description:
      'Root-cause forensic audit and official appeal filing for suspended, disabled, or soft-banned listings.',
    deliverables: [
      'Google Policy violation diagnostic audit',
      'Government proof & business license dossier assembly',
      'Direct specialist appeal filing & case escalation',
      'Listing restoration & rank protection safeguard',
    ],
    whatsappMessage:
      'Hi IDM Smart Tech, my Google Business Profile is suspended. I need Reinstatement support (₹2,999).',
  },
  {
    id: 'profile-creation',
    title: 'New GMB Profile Setup',
    priceInr: '₹4,000',
    numericPrice: 4000,
    tat: '3–7 Business Days',
    badge: 'FOUNDATION SETUP',
    description:
      'Complete, search-optimized Google Business Profile creation engineered for immediate regional visibility.',
    deliverables: [
      'Primary & secondary category precision mapping',
      'Geo-tagged high-res photography suite upload',
      'NAP consistency across essential business indexes',
      'Guided verification pathway until live status',
    ],
    whatsappMessage:
      'Hi IDM Smart Tech, I want to create and optimize a New Google Business Profile (₹4,000).',
  },
  {
    id: 'number-update',
    title: 'GMB Phone Number Update',
    priceInr: '₹2,999',
    numericPrice: 2999,
    tat: '24–72 Hours',
    badge: 'ALGORITHM FIX',
    description:
      'Fix phone numbers stuck in indefinite "Under Review" or rejected by Google’s automated verification algorithms.',
    deliverables: [
      'Rejection cause analysis & web schema synchronization',
      'Telecom proof & regional directory cross-referencing',
      'Google merchant support manual ticket escalation',
      'Live calling capability verified on Google Maps',
    ],
    whatsappMessage:
      'Hi IDM Smart Tech, my phone number is stuck under review on GMB. I need the Number Update fix (₹2,999).',
  },
];

export const GROWTH_PACKAGES: GrowthPackageItem[] = [
  {
    id: 'starter',
    name: 'Starter Local Plan',
    priceInr: '₹4,999',
    billingPeriod: '/ month',
    summary:
      'Essential local optimization for single-location businesses entering the Google Maps ecosystem.',
    idealFor: 'Clinics, retail shops, standalone salons & local trade professionals.',
    features: [
      '1 Google Business Profile full audit & weekly maintenance',
      '15 High-DA Local Citations & Directory Listings / mo',
      '2 Geo-tagged photo updates & promotional posts / wk',
      'Review response templates & review velocity playbook',
      'Monthly Maps ranking movement report',
      'WhatsApp & Email support (24-hour SLA)',
    ],
    whatsappMessage:
      'Hi IDM Smart Tech, I want to start with the Starter Local Plan (₹4,999/mo).',
  },
  {
    id: 'growth',
    name: 'Growth Accelerator',
    priceInr: '₹6,999',
    billingPeriod: '/ month',
    summary:
      'Aggressive geo-expansion designed to break through the Top 3 Map Pack in competitive local zones.',
    idealFor: 'Growing dental clinics, institutes, multi-unit practices & diagnostic labs.',
    features: [
      'Everything in Starter Plan',
      '30 Verified Citations & Regional Submissions / mo',
      '4 Custom Geo-optimized Posts & Updates / wk',
      'Automated Google Review Generation Engine integration',
      'Geo-grid 13x13 keyword rank tracking & visibility maps',
      'Competitor duplicate spam audit & suppression reporting',
      'Dedicated local growth strategist assigned',
    ],
    whatsappMessage:
      'Hi IDM Smart Tech, I am interested in the Growth Accelerator Plan (₹6,999/mo).',
  },
  {
    id: 'ultimate',
    name: 'Ultimate Domination',
    priceInr: '₹9,999',
    billingPeriod: '/ month',
    summary:
      'Heavyweight local authority system engineered to capture and protect #1 Map Pack dominance.',
    idealFor: 'High-ticket practices, luxury realty, multi-speciality hospitals & flagship brands.',
    features: [
      'Everything in Growth Accelerator Plan',
      '50+ High DA/PA Niche Citations & Press Releases',
      'Local landing page schema markup & technical on-page SEO',
      'Google Maps 3-Pack Authority Link Velocity engine',
      'Continuous competitor listing spam monitoring & active defense',
      'Bi-weekly strategic review calls + 24/7 live KPI dashboard',
      'Priority 4-hour support SLA',
    ],
    whatsappMessage:
      'Hi IDM Smart Tech, I want to book the Ultimate Domination Plan (₹9,999/mo).',
  },
  {
    id: 'pro-growth-leads',
    name: 'Pro Plan — Growth & Leads',
    priceInr: '₹16,999',
    billingPeriod: '/ month',
    isPopular: true,
    summary:
      'Complete end-to-end agency engine: Local Maps Dominance + Paid Acquisition + Automated Lead Funnels.',
    idealFor: 'Companies demanding rapid, qualified inbound commercial leads and maximum regional authority.',
    features: [
      'Everything in Ultimate Domination (Full Map Pack Domination)',
      'Google Ads & Meta Ads Full Management (Search, Performance Max & Meta Lead Ads)',
      'High-converting landing page optimization & conversion rate tuning',
      'Automated WhatsApp lead capture & instant notification routing',
      'Weekly live KPI sprint reviews & direct Founder strategy access',
      'Dedicated Senior Growth Engineer + 2-Hour priority SLA',
    ],
    whatsappMessage:
      'Hi IDM Smart Tech, I want to book the Pro Plan — Growth & Leads (₹16,999/mo).',
  },
];

export const IDM_VS_TRADITIONAL: AgencyComparisonItem[] = [
  {
    dimension: 'Contract Terms',
    idmAdvantage: 'Month-to-month contracts. We earn your partnership every 30 days on merit.',
    traditionalLimitation: 'Rigid 6 to 12-month lock-in contracts with hefty cancellation penalties.',
  },
  {
    dimension: 'Seniority & Talent',
    idmAdvantage: 'Direct access to senior growth engineers & founders. Zero junior handoffs.',
    traditionalLimitation: 'Pawned off to overworked junior account reps running generic playbooks.',
  },
  {
    dimension: 'Local Maps Methodology',
    idmAdvantage: 'Proprietary geo-grid optimization, localized schema, and 100% white-hat citation stacking.',
    traditionalLimitation: 'Outdated automated directory blasts and generic copy-paste templates.',
  },
  {
    dimension: 'Conversion Ownership',
    idmAdvantage: 'Full-funnel ownership: high-converting landing pages & automated WhatsApp lead routing.',
    traditionalLimitation: 'Delivers raw traffic or clicks and blames your sales team when leads do not convert.',
  },
  {
    dimension: 'KPI Reporting',
    idmAdvantage: '24/7 live KPI dashboards plus concise weekly executive summaries in plain English.',
    traditionalLimitation: 'Static 30-day PDF reports filled with vanity impressions and obscure jargon.',
  },
  {
    dimension: 'Support & SLA',
    idmAdvantage: 'Direct WhatsApp & Slack communication with rapid response under 4 business hours.',
    traditionalLimitation: '24–72 hour turnaround routed through slow, impersonal ticketing queues.',
  },
  {
    dimension: 'Policy & Safety',
    idmAdvantage: 'Specialist-level Google compliance team preventing and solving profile suspensions.',
    traditionalLimitation: 'Risky automated black-hat tactics that trigger permanent Google suspensions.',
  },
  {
    dimension: 'Full-Stack Execution',
    idmAdvantage: 'In-house SEO, paid media, Next.js web, Flutter mobile, CRM/ERP & AI under one roof.',
    traditionalLimitation: 'Siloed agency outsourcing code, creative, and tech to disconnected third parties.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'TIMELINES & RESULTS',
    question: 'How long does it take to see results from Local SEO and Google Business Profile optimization?',
    answer:
      'Most businesses begin seeing measurable upward movement in their Google Map Pack rankings within 30 to 60 days. Because local search authority compounds over time, the most substantial surge in customer phone calls, direction requests, and qualified inquiries accelerates from month 3 onwards as local citations index and customer review velocity builds.',
  },
  {
    id: 'faq-2',
    category: 'RANKINGS & GUARANTEES',
    question: 'Do you guarantee #1 rankings on Google Maps?',
    answer:
      'No ethical agency can guarantee an absolute #1 position, as Google’s ranking algorithm dynamically calculates user proximity, keyword relevance, and local business prominence in real-time. However, we guarantee proven, 100% white-hat methodologies, aggressive geo-optimization, and transparent tracking. Over 92% of our active clients achieve top 3 Map Pack rankings for their target commercial keywords within 90 days.',
  },
  {
    id: 'faq-3',
    category: 'LOCAL SEO VS GBP',
    question: 'What is the key difference between Local SEO and Google Business Profile (GBP)?',
    answer:
      'Your Google Business Profile is your verified map listing and primary local customer touchpoint. Local SEO is the comprehensive organic engine that powers and sustains it — including local landing page optimization, technical geo-schema, high-authority citations across business directories, localized backlinks, and reputation management that signals to Google your business is the most trusted choice in the region.',
  },
  {
    id: 'faq-4',
    category: 'CONTRACTS & COMMITMENTS',
    question: 'Are there any long-term lock-in contracts?',
    answer:
      'Never. We believe in earning your business every single month. All our growth packages operate on flexible month-to-month terms with complete client data ownership and zero lock-in penalties. You stay with IDM Smart Tech because of measurable ROI and revenue growth, not because of a legal contract.',
  },
  {
    id: 'faq-5',
    category: 'CUSTOM SERVICES',
    question: 'How do you calculate pricing for custom software, web development, and advertising?',
    answer:
      'For custom web platforms, mobile applications, CRM/ERP engineering, and paid ad management, pricing is calibrated transparently to the project’s technical scope, target market competitiveness, and ad spend scale. We provide detailed, itemized proposals with fixed milestone pricing before any work begins — no unexpected fees, ever.',
  },
  {
    id: 'faq-6',
    category: 'GEOGRAPHY & CLIENTS',
    question: 'Do you work with businesses outside Hyderabad and international clients?',
    answer:
      'Yes. While our headquarters and primary operations hub are based in Shamshabad, Hyderabad, we actively manage local SEO, performance ad funnels, and enterprise digital engineering for clients across India, the United Arab Emirates, the United Kingdom, the United States, and Australia.',
  },
];

export const LEADERSHIP: LeaderItem[] = [
  {
    name: 'Raghavendra Goud',
    role: 'Founder & Lead Strategist',
    bio: 'Oversees cross-functional growth strategies, Google Maps authority engineering, and enterprise AI automation architectures with over a decade of hands-on digital leadership.',
  },
  {
    name: 'Bantaram Sanvika',
    role: 'Co-Founder & Operations Lead',
    bio: 'Directs operational delivery, client success workflows, quality assurance, and seamless service execution across all technology and marketing client engagements.',
  },
];

