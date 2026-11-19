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
