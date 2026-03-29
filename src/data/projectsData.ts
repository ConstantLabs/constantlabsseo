import {
  Search, Settings, Globe, MapPin, Link, BarChart3, Code, TrendingUp,
  Star, Users, HelpCircle
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Service Types ───────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
  oneLiner: string;
  link?: string;
}

export const SERVICES: Service[] = [
  {
    id: "AI_SEARCH_OPTIMIZATION",
    title: "AI Search Optimization (GEO/AEO)",
    icon: Search,
    description: "Dominate AI search results across ChatGPT, Gemini, Perplexity, and Claude. We optimize your digital presence so AI assistants recommend YOUR business.",
    tags: ["GEO", "AEO", "ChatGPT", "Gemini", "Perplexity"],
    oneLiner: "Get recommended by AI",
  },
  {
    id: "TECHNICAL_SEO",
    title: "Technical SEO Mastery",
    icon: Settings,
    description: "Lightning-fast, technically flawless websites that search engines love. From Core Web Vitals to schema markup, we handle every technical detail.",
    tags: ["Core Web Vitals", "Schema Markup", "Site Speed", "Crawlability"],
    oneLiner: "Technically flawless foundations",
  },
  {
    id: "ARABIC_CONTENT",
    title: "Arabic Content Strategy",
    icon: Globe,
    description: "Native Arabic content that resonates with GCC audiences. Culturally authentic, SEO-optimized content by native speakers.",
    tags: ["Arabic SEO", "GCC Content", "Native Writers", "Cultural Localization"],
    oneLiner: "Content that speaks to the Gulf",
  },
  {
    id: "LOCAL_SEO",
    title: "Local SEO Dominance",
    icon: MapPin,
    description: "Own your local market. Google Maps optimization, local citations, and geo-targeted content for UAE, Saudi Arabia, and Oman.",
    tags: ["Google Maps", "Local Citations", "Geo-targeting", "GCC Markets"],
    oneLiner: "Own your local market",
  },
  {
    id: "AI_LINK_BUILDING",
    title: "AI-Powered Link Building",
    icon: Link,
    description: "Strategic backlink acquisition using AI to identify high-value opportunities. Build authority that search engines and LLMs trust.",
    tags: ["Backlinks", "Domain Authority", "AI Prospecting", "Digital PR"],
    oneLiner: "Authority search engines trust",
  },
  {
    id: "SEO_AUDITS",
    title: "SEO Audits & Analytics",
    icon: BarChart3,
    description: "Comprehensive AI-driven audits that find and fix every issue. Real-time dashboards tracking your performance across Google AND AI platforms.",
    tags: ["AI Audits", "Real-time Dashboards", "Google Analytics", "AI Tracking"],
    oneLiner: "Find and fix every issue",
  },
  {
    id: "WEBSITE_DEVELOPMENT",
    title: "Website Development",
    icon: Code,
    description: "SEO-first websites built with agentic AI in days, not months. 50+ optimized pages deployed before your competitors finish their first draft.",
    tags: ["SEO-First", "Agentic AI", "Rapid Deployment", "50+ Pages"],
    oneLiner: "SEO-first sites, built fast",
  },
  {
    id: "CRO",
    title: "Conversion Rate Optimization",
    icon: TrendingUp,
    description: "Turn traffic into revenue. Data-driven CRO that maximizes every visitor from both traditional and AI search channels.",
    tags: ["A/B Testing", "UX Optimization", "Funnel Analysis", "Revenue Growth"],
    oneLiner: "Turn traffic into revenue",
  },
];

// ─── Case Study Types ────────────────────────────────────────────

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  market: string;
  metric: string;
  description: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "rapid-deployment",
    slug: "rapid-seo-deployment",
    title: "50+ Optimized Pages in 4 Hours",
    client: "Our Technology",
    industry: "AI-Powered Build",
    market: "Any Market",
    metric: "50+ pages in 4 hours",
    description: "Using agentic AI, we deploy entire SEO-optimized websites with 50+ pages in hours - including service pages, location-specific content, schema markup, internal linking, and full technical optimization. What traditional agencies take months to deliver, our technology completes before lunch.",
    tags: ["Agentic AI", "Rapid Deployment", "Technical SEO", "Automation"],
  },
  {
    id: "ai-search-optimization",
    slug: "ai-search-visibility",
    title: "Google + AI Search Optimization",
    client: "Our Methodology",
    industry: "GEO/AEO",
    market: "Global",
    metric: "Google + ChatGPT + Gemini",
    description: "Good foundational SEO equals good GEO. We optimize your site for both traditional search and AI platforms simultaneously. Schema markup, structured data, topical authority, and clean technical foundations ensure AI assistants recommend your business when users ask for recommendations.",
    tags: ["GEO", "AEO", "ChatGPT", "Gemini", "Perplexity"],
  },
  {
    id: "bilingual-gcc",
    slug: "bilingual-gcc-seo",
    title: "True Bilingual Arabic + English SEO",
    client: "GCC Specialization",
    industry: "Arabic SEO",
    market: "UAE · KSA · Oman",
    metric: "Arabic + English",
    description: "Most agencies in the region only do English SEO. We deliver native Arabic content with proper RTL optimization, Arabic keyword research, and culturally relevant content - alongside English. Targeting UAE, Saudi Arabia, and Oman with content that actually resonates with local audiences.",
    tags: ["Arabic SEO", "RTL", "GCC Markets", "Bilingual Content"],
  },
];

// ─── Pricing Types ───────────────────────────────────────────────

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  popular: boolean;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "AED 1,500",
    period: "/mo",
    tagline: "For growing businesses",
    popular: false,
    features: [
      "15 target keywords",
      "Monthly SEO audit",
      "Basic performance reporting",
      "Google Search Console setup",
      "Technical SEO fixes",
      "1 blog post per month",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "AED 3,500",
    period: "/mo",
    tagline: "Most Popular",
    popular: true,
    features: [
      "50 target keywords",
      "Weekly optimization cycles",
      "AI search tracking (GEO/AEO)",
      "Arabic content creation (4 articles/mo)",
      "Local SEO for up to 3 locations",
      "Backlink building (10/month)",
      "Competitor analysis reports",
      "Bi-weekly strategy calls",
      "Priority email & WhatsApp support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "AED 7,500",
    period: "/mo",
    tagline: "Full dominance",
    popular: false,
    features: [
      "Unlimited target keywords",
      "Dedicated SEO strategist",
      "Custom AI search dashboard",
      "Unlimited Arabic & English content",
      "Full GCC local SEO coverage",
      "Aggressive link building (30+/month)",
      "Weekly strategy calls",
      "Custom reporting & analytics",
      "Priority support (same-day response)",
      "Conversion rate optimization",
      "Website development & maintenance",
    ],
  },
];

// ─── Team Types ──────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ahmad",
    name: "Ahmad",
    role: "Founder & CEO",
    specialty: "AI & Technology",
    bio: "AI engineer and serial builder behind Constant Labs. Founded ConstantSEO to bring agentic AI into the SEO industry. Building the future of search for the GCC market with a team that understands both AI and the region.",
  },
];

// ─── FAQ Types ───────────────────────────────────────────────────

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is AI Search Optimization (GEO/AEO)?",
    answer: "GEO (Generative Engine Optimization) and AEO (AI Engine Optimization) are the next evolution of SEO. While traditional SEO focuses on ranking in Google, GEO/AEO ensures your business gets recommended by AI assistants like ChatGPT, Gemini, Perplexity, and Claude. As more users turn to AI for recommendations, being optimized for these platforms is critical.",
  },
  {
    id: "faq-2",
    question: "How is AI SEO different from traditional SEO?",
    answer: "Traditional SEO focuses on keyword rankings and backlinks for Google. AI SEO goes further - it optimizes your content for how large language models (LLMs) read, understand, and recommend businesses. This includes structured data optimization, authority building across trusted sources, and ensuring your brand appears in AI-generated answers.",
  },
  {
    id: "faq-3",
    question: "Do you work with Arabic content?",
    answer: "Absolutely. Arabic content strategy is one of our core strengths. We have native Arabic speakers who create culturally authentic, SEO-optimized content for GCC audiences. This is not machine-translated content - it is written by people who understand Gulf culture, dialects, and consumer behavior.",
  },
  {
    id: "faq-4",
    question: "How long does it take to see SEO results?",
    answer: "Most clients see measurable improvements within 60-90 days, with significant results by month 4-6. SEO is a compounding investment - the longer you invest, the stronger the returns. AI search optimization can show faster results since the AI recommendation landscape is less competitive than traditional Google rankings.",
  },
  {
    id: "faq-5",
    question: "Which markets do you cover?",
    answer: "We specialize in the GCC market, with deep expertise in UAE, Saudi Arabia, and Oman. We handle both English and Arabic SEO, local SEO across all GCC countries, and understand the regional business landscape, consumer behavior, and regulatory environment.",
  },
  {
    id: "faq-6",
    question: "What is included in the free AI audit?",
    answer: "Our free AI audit analyzes your website's performance across both traditional search engines and AI platforms. You will receive a report covering technical SEO health, content gaps, AI search visibility (how often AI recommends your brand vs competitors), local SEO status, and a prioritized action plan. No commitment required.",
  },
  {
    id: "faq-7",
    question: "Can you build our website too?",
    answer: "Yes. We build SEO-first websites using agentic AI, delivering 50+ optimized pages in days rather than months. Every site we build is designed for search performance from the ground up - fast load times, clean architecture, proper schema markup, and conversion-optimized design.",
  },
  {
    id: "faq-8",
    question: "How do you report on progress?",
    answer: "Every client gets access to a real-time dashboard tracking keyword rankings, organic traffic, AI search mentions, backlink growth, and conversion metrics. Depending on your plan, you also receive weekly or monthly strategy reports with clear insights and next steps. No vanity metrics - only data that matters to your revenue.",
  },
  {
    id: "faq-9",
    question: "Do you require long-term contracts?",
    answer: "We offer month-to-month agreements with a recommended minimum of 6 months for meaningful SEO results. SEO is a long-term strategy, and we are transparent about that. However, you are never locked in - our 98% client retention rate speaks for itself.",
  },
  {
    id: "faq-10",
    question: "What makes ConstantSEO different from other SEO agencies?",
    answer: "Three things: First, we are AI-native - we do not just do SEO, we optimize for the AI search revolution happening right now. Second, we are built for the GCC - native Arabic speakers, regional expertise, and an office in Dubai. Third, we use agentic AI internally to move faster and deliver more than agencies ten times our size.",
  },
];

// ─── Legacy Exports for Compatibility ────────────────────────────

export type ProjectStatus = "live" | "beta" | "development" | "repository";
export type ProjectCategory = "software" | "client" | "hardware";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  tech: string[];
  status: ProjectStatus;
  link: string;
  image: string;
  imagePosition?: "top" | "center" | "bottom";
  screenshots?: string[];
  features: string[];
  internalRoute?: string;
}

export const softwareProjects: Project[] = [];
export const clientProjects: Project[] = [];
export const hardwareProjects: Project[] = [];

export const ALL_PROJECTS: Project[] = [
  ...softwareProjects,
  ...clientProjects,
  ...hardwareProjects,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}
