import {
  Search, Settings, Globe, MapPin, Link, BarChart3, Code, TrendingUp,
  Star, Users, HelpCircle
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Service Types ───────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  icon: LucideIcon;
  description: string;
  descriptionAr: string;
  tags: string[];
  tagsAr: string[];
  oneLiner: string;
  oneLinerAr: string;
  link?: string;
}

export const SERVICES: Service[] = [
  {
    id: "AI_SEARCH_OPTIMIZATION",
    title: "AI Search Optimization (GEO/AEO)",
    titleAr: "تحسين البحث بالذكاء الاصطناعي (GEO/AEO)",
    icon: Search,
    description: "Structure useful, attributable information so AI-assisted discovery systems can understand your business, services, and expertise.",
    descriptionAr: "ننظم معلومات مفيدة وقابلة للإسناد لتتمكن أنظمة الاكتشاف المدعومة بالذكاء الاصطناعي من فهم نشاطك وخدماتك وخبرتك.",
    tags: ["GEO", "AEO", "ChatGPT", "Gemini", "Perplexity"],
    tagsAr: ["GEO", "AEO", "ChatGPT", "Gemini", "Perplexity"],
    oneLiner: "Make your expertise easier to understand",
    oneLinerAr: "اجعل خبرتك أسهل للفهم",
  },
  {
    id: "TECHNICAL_SEO",
    title: "Technical SEO Mastery",
    titleAr: "أسس SEO التقنية",
    icon: Settings,
    description: "Audit crawlability, indexation, Core Web Vitals, structured data, and site architecture to build a dependable search foundation.",
    descriptionAr: "ندقق قابلية الزحف والفهرسة ومؤشرات الويب الأساسية والبيانات المنظمة وبنية الموقع لبناء أساس بحث موثوق.",
    tags: ["Core Web Vitals", "Schema Markup", "Site Speed", "Crawlability"],
    tagsAr: ["مؤشرات الويب الأساسية", "Schema", "سرعة الموقع", "قابلية الزحف"],
    oneLiner: "A dependable technical foundation",
    oneLinerAr: "أساس تقني موثوق",
  },
  {
    id: "ARABIC_CONTENT",
    title: "Arabic Content Strategy",
    titleAr: "استراتيجية المحتوى العربي",
    icon: Globe,
    description: "Native Arabic content that resonates with GCC audiences. Culturally authentic, SEO-optimized content by native speakers.",
    descriptionAr: "محتوى عربي أصيل يراعي سياق جمهور الخليج ونيّة البحث وتجربة القراءة من اليمين إلى اليسار.",
    tags: ["Arabic SEO", "GCC Content", "Native Writers", "Cultural Localization"],
    tagsAr: ["SEO عربي", "محتوى خليجي", "كتابة عربية", "توطين ثقافي"],
    oneLiner: "Content that speaks to the Gulf",
    oneLinerAr: "محتوى يخاطب جمهور الخليج",
  },
  {
    id: "LOCAL_SEO",
    title: "Local Search Foundations",
    titleAr: "أسس البحث المحلي",
    icon: MapPin,
    description: "Connect Google Business Profile work, local citations, and location-focused content for UAE, Saudi Arabia, and Oman.",
    descriptionAr: "نربط تحسين ملف النشاط التجاري على جوجل والاستشهادات المحلية ومحتوى المواقع للإمارات والسعودية وعُمان.",
    tags: ["Google Maps", "Local Citations", "Geo-targeting", "GCC Markets"],
    tagsAr: ["خرائط جوجل", "استشهادات محلية", "استهداف جغرافي", "أسواق الخليج"],
    oneLiner: "Build trustworthy local signals",
    oneLinerAr: "ابنِ إشارات محلية موثوقة",
  },
  {
    id: "AI_LINK_BUILDING",
    title: "AI-Powered Link Building",
    titleAr: "بناء الروابط بمساعدة الذكاء الاصطناعي",
    icon: Link,
    description: "Research relevant reference opportunities and strengthen the internal connections that clarify subject expertise.",
    descriptionAr: "نبحث فرص مراجع ذات صلة ونعزز الروابط الداخلية التي توضح الخبرة الموضوعية.",
    tags: ["Backlinks", "Domain Authority", "AI Prospecting", "Digital PR"],
    tagsAr: ["روابط خلفية", "سلطة النطاق", "بحث بالذكاء الاصطناعي", "علاقات عامة رقمية"],
    oneLiner: "Authority search engines trust",
    oneLinerAr: "إشارات سلطة واضحة لمحركات البحث",
  },
  {
    id: "SEO_AUDITS",
    title: "SEO Audits & Analytics",
    titleAr: "تدقيق SEO والتحليلات",
    icon: BarChart3,
    description: "Review technical, content, local, and measurement signals, then turn findings into a prioritized action plan.",
    descriptionAr: "نراجع الإشارات التقنية والمحتوى والبحث المحلي والقياس، ثم نحول النتائج إلى خطة عمل مرتبة حسب الأولوية.",
    tags: ["AI Audits", "Real-time Dashboards", "Google Analytics", "AI Tracking"],
    tagsAr: ["تدقيق SEO", "لوحات قياس", "Google Analytics", "متابعة البحث الذكي"],
    oneLiner: "Turn findings into priorities",
    oneLinerAr: "حوّل النتائج إلى أولويات",
  },
  {
    id: "WEBSITE_DEVELOPMENT",
    title: "Website Development",
    titleAr: "تطوير المواقع",
    icon: Code,
    description: "SEO-first websites with clear information architecture, reusable page systems, structured data, and accessible bilingual foundations.",
    descriptionAr: "مواقع تبدأ من SEO ببنية معلومات واضحة وأنظمة صفحات قابلة لإعادة الاستخدام وبيانات منظمة وأساس ثنائي اللغة سهل الوصول.",
    tags: ["SEO-First", "Information Architecture", "Structured Data", "Bilingual UX"],
    tagsAr: ["SEO أولاً", "بنية المعلومات", "بيانات منظمة", "تجربة ثنائية اللغة"],
    oneLiner: "Search-aware sites from the start",
    oneLinerAr: "مواقع تراعي البحث منذ البداية",
  },
  {
    id: "CRO",
    title: "Conversion Rate Optimization",
    titleAr: "تحسين معدل التحويل",
    icon: TrendingUp,
    description: "Review search landing journeys, calls to action, and measurement so visitors can take a clear next step.",
    descriptionAr: "نراجع رحلات صفحات الهبوط وعبارات الحث على الإجراء والقياس ليتمكن الزائر من اتخاذ خطوة تالية واضحة.",
    tags: ["A/B Testing", "UX Review", "Journey Analysis", "Measurement"],
    tagsAr: ["اختبار A/B", "مراجعة التجربة", "تحليل الرحلة", "القياس"],
    oneLiner: "Clarify the path to action",
    oneLinerAr: "وضّح المسار إلى الإجراء",
  },
];

// ─── Case Study Types ────────────────────────────────────────────

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  client: string;
  clientAr: string;
  industry: string;
  industryAr: string;
  market: string;
  marketAr: string;
  metric: string;
  metricAr: string;
  description: string;
  descriptionAr: string;
  tags: string[];
  tagsAr: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "rapid-deployment",
    slug: "rapid-seo-deployment",
    title: "Structured SEO Publishing",
    titleAr: "نشر SEO منظم",
    client: "Our Methodology",
    clientAr: "منهجيتنا",
    industry: "Publishing System",
    industryAr: "نظام نشر",
    market: "Adaptable Scope",
    marketAr: "نطاق قابل للتكييف",
    metric: "Pages · schema · internal links",
    metricAr: "صفحات · Schema · روابط داخلية",
    description: "Our publishing workflow connects service, location, and editorial page templates with structured data, internal links, and technical quality checks. Scope and timing are agreed for each engagement.",
    descriptionAr: "يربط سير النشر لدينا قوالب صفحات الخدمات والمواقع والمحتوى التحريري بالبيانات المنظمة والروابط الداخلية وفحوص الجودة التقنية. يُتفق على النطاق والتوقيت لكل مشروع.",
    tags: ["Agentic AI", "Publishing Workflow", "Technical SEO", "Quality Checks"],
    tagsAr: ["ذكاء اصطناعي وكيلي", "سير نشر", "SEO تقني", "فحوص جودة"],
  },
  {
    id: "ai-search-optimization",
    slug: "ai-search-visibility",
    title: "Google + AI Search Optimization",
    titleAr: "تحسين البحث عبر جوجل والذكاء الاصطناعي",
    client: "Our Methodology",
    clientAr: "منهجيتنا",
    industry: "GEO/AEO",
    industryAr: "GEO/AEO",
    market: "Global",
    marketAr: "عالمي",
    metric: "Google · ChatGPT · Gemini",
    metricAr: "Google · ChatGPT · Gemini",
    description: "Good foundational SEO supports AI discovery. We coordinate schema markup, structured data, topical coverage, and technical foundations so search and answer systems can interpret useful information consistently.",
    descriptionAr: "يدعم SEO الأساسي الجيد الاكتشاف عبر الذكاء الاصطناعي. ننسق Schema والبيانات المنظمة والتغطية الموضوعية والأسس التقنية لتتمكن أنظمة البحث والإجابة من تفسير المعلومات المفيدة باتساق.",
    tags: ["GEO", "AEO", "ChatGPT", "Gemini", "Perplexity"],
    tagsAr: ["GEO", "AEO", "ChatGPT", "Gemini", "Perplexity"],
  },
  {
    id: "bilingual-gcc",
    slug: "bilingual-gcc-seo",
    title: "True Bilingual Arabic + English SEO",
    titleAr: "SEO ثنائي اللغة بالعربية والإنجليزية",
    client: "GCC Specialization",
    clientAr: "تخصص خليجي",
    industry: "Arabic SEO",
    industryAr: "SEO عربي",
    market: "UAE · KSA · Oman",
    marketAr: "الإمارات · السعودية · عُمان",
    metric: "Arabic + English",
    metricAr: "العربية + الإنجليزية",
    description: "We plan Arabic and English search experiences together, including language-aware research, readable RTL layouts, culturally relevant content, and coordinated technical signals.",
    descriptionAr: "نخطط تجربتي البحث بالعربية والإنجليزية معاً، بما يشمل بحثاً يراعي اللغة وتخطيطات RTL مقروءة ومحتوى ملائماً ثقافياً وإشارات تقنية منسقة.",
    tags: ["Arabic SEO", "RTL", "GCC Markets", "Bilingual Content"],
    tagsAr: ["SEO عربي", "RTL", "أسواق الخليج", "محتوى ثنائي اللغة"],
  },
];
