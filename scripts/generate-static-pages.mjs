/**
 * Post-build script: generates per-route HTML files with baked-in meta tags.
 * This lets crawlers and social media scrapers see correct title/description/OG
 * tags without executing JavaScript.
 *
 * Run after `vite build`: node scripts/generate-static-pages.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const BASE_URL = "https://seo.constantlabs.ai";

const routes = [
  // ── Core Pages ──────────────────────────────────────────────
  {
    path: "/services",
    title: "SEO Services - AI-Powered SEO for GCC Businesses | ConstantSEO",
    description: "Full-service AI-powered SEO: technical SEO, Arabic content strategy, local SEO, link building, GEO/AEO optimization. Built for UAE, Saudi Arabia, and Oman.",
  },
  {
    path: "/case-studies",
    title: "SEO Case Studies - Proven Results in the GCC | ConstantSEO",
    description: "Real SEO results for Gulf businesses. See how we deploy 50+ optimized pages in hours, rank for Google + AI search, and deliver bilingual Arabic-English SEO.",
  },
  {
    path: "/case-studies/rapid-seo-deployment",
    title: "50+ Optimized Pages in 4 Hours - SEO Case Study | ConstantSEO",
    description: "See how ConstantSEO uses agentic AI to deploy 50+ optimized SEO pages in hours, including location content, schema markup, internal links, and technical optimization.",
  },
  {
    path: "/case-studies/ai-search-visibility",
    title: "Google + AI Search Visibility - SEO Case Study | ConstantSEO",
    description: "See how ConstantSEO optimizes for Google, ChatGPT, Gemini, and Perplexity with structured data, topical authority, and clean technical SEO foundations.",
  },
  {
    path: "/case-studies/bilingual-gcc-seo",
    title: "Bilingual GCC SEO - Arabic + English Case Study | ConstantSEO",
    description: "See how ConstantSEO builds native Arabic and English SEO for GCC businesses with RTL optimization, Arabic keyword research, and culturally relevant content.",
  },
  {
    path: "/pricing",
    title: "SEO Pricing - Transparent Plans from AED 1,500/mo | ConstantSEO",
    description: "Transparent SEO pricing for GCC businesses. Starter, Growth, and Enterprise plans from AED 1,500/mo. AI-powered SEO with bilingual Arabic-English support.",
  },
  {
    path: "/about",
    title: "About ConstantSEO - AI-Native SEO Agency in Dubai | Constant Labs",
    description: "ConstantSEO by Constant Labs is Dubai's AI-native SEO agency. We combine agentic AI with deep GCC market expertise to deliver results faster than traditional agencies.",
  },
  {
    path: "/blog",
    title: "SEO Blog - Tips, Guides & AI Search Insights | ConstantSEO",
    description: "Expert SEO insights for GCC businesses. Guides on Dubai SEO, Arabic content strategy, AI search optimization (GEO/AEO), and local SEO for UAE, Saudi Arabia, and Oman.",
  },
  {
    path: "/contact",
    title: "Contact ConstantSEO - Get Your Free AI SEO Audit",
    description: "Get a free AI SEO audit for your business. Contact ConstantSEO in Dubai for expert SEO services across the UAE, Saudi Arabia, and Oman.",
  },
  {
    path: "/audit",
    title: "Free SEO Audit - Instant AI-Powered Website Check | ConstantSEO",
    description: "Run a free SEO audit for your website. Check SEO and performance signals instantly, then request a deeper AI-powered audit from ConstantSEO.",
  },
  {
    path: "/tools",
    title: "Free SEO Tools for GCC Marketers | ConstantSEO",
    description: "Use ConstantSEO's free SEO tools to check meta tags, headings, sitemaps, FAQ schema, robots.txt, Open Graph previews, website bandwidth, cost, and YouTube SEO.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | ConstantSEO",
    description: "Privacy Policy for ConstantSEO by Constant Labs.",
  },
  {
    path: "/terms",
    title: "Terms of Service | ConstantSEO",
    description: "Terms of Service for ConstantSEO by Constant Labs.",
  },

  // ── Service Detail Pages ────────────────────────────────────
  {
    path: "/services/ai-search-optimization",
    title: "AI Search Optimization (GEO/AEO) - Get Recommended by AI | ConstantSEO",
    description: "Dominate AI search results across ChatGPT, Gemini, Perplexity, and Claude. We optimize your digital presence so AI assistants recommend your business.",
  },
  {
    path: "/services/technical-seo",
    title: "Technical SEO Mastery - Core Web Vitals & Schema | ConstantSEO",
    description: "Lightning-fast, technically flawless websites that search engines love. From Core Web Vitals to schema markup, we handle every technical detail.",
  },
  {
    path: "/services/arabic-content",
    title: "Arabic Content Strategy - Native GCC Content | ConstantSEO",
    description: "Native Arabic content that resonates with GCC audiences. Culturally authentic, SEO-optimized content by native speakers for UAE, Saudi Arabia, and Oman.",
  },
  {
    path: "/services/local-seo",
    title: "Local SEO Dominance - Google Maps & Geo-targeting | ConstantSEO",
    description: "Own your local market. Google Maps optimization, local citations, and geo-targeted content for UAE, Saudi Arabia, and Oman.",
  },
  {
    path: "/services/ai-link-building",
    title: "AI-Powered Link Building - Build Real Authority | ConstantSEO",
    description: "Strategic backlink acquisition using AI to identify high-value opportunities. Build authority that search engines and LLMs trust.",
  },
  {
    path: "/services/seo-audits",
    title: "SEO Audits & Analytics - AI-Driven Insights | ConstantSEO",
    description: "Comprehensive AI-driven SEO audits that find and fix every issue. Real-time dashboards tracking performance across Google and AI platforms.",
  },
  {
    path: "/services/website-development",
    title: "SEO-First Website Development - 50+ Pages in Hours | ConstantSEO",
    description: "SEO-first websites built with agentic AI in days, not months. 50+ optimized pages deployed before your competitors finish their first draft.",
  },
  {
    path: "/services/cro",
    title: "Conversion Rate Optimization - Turn Traffic Into Revenue | ConstantSEO",
    description: "Data-driven CRO that maximizes every visitor from both traditional and AI search channels. A/B testing, UX optimization, and funnel analysis.",
  },

  // ── Free SEO Tools ─────────────────────────────────────────
  {
    path: "/tools/bulk-meta-title-description-checker",
    title: "Bulk Meta Title & Description Checker Free | ConstantSEO",
    description: "Free bulk meta title and description checker for SEO audits. Paste URLs, titles, and descriptions to find missing, short, long, and duplicate metadata.",
  },
  {
    path: "/tools/meta-tag-analyzer",
    title: "Meta Tag Analyzer Tool Free | ConstantSEO",
    description: "Analyze meta tags from pasted HTML. Check title, meta description, canonical, robots, viewport, hreflang signals, Open Graph, and Twitter tags.",
  },
  {
    path: "/tools/heading-tag-checker",
    title: "Heading Tag Checker Free | ConstantSEO",
    description: "Free heading tag checker for SEO. Paste HTML to review H1-H6 structure, heading hierarchy, duplicate H1s, skipped heading levels, and empty headings.",
  },
  {
    path: "/tools/sitemap-url-extractor",
    title: "Sitemap URL Extractor Free | ConstantSEO",
    description: "Extract URLs from XML sitemaps and sitemap indexes. Paste sitemap XML to get a clean URL list, hostname summary, duplicate count, and export-ready output.",
  },
  {
    path: "/tools/faq-schema-generator",
    title: "FAQ Schema Markup Generator Free | ConstantSEO",
    description: "Generate FAQPage JSON-LD schema for SEO. Add questions and answers, copy clean markup, and use it on pages where the FAQ content is visible.",
  },
  {
    path: "/tools/robots-txt-generator",
    title: "Robots.txt Generator Free | ConstantSEO",
    description: "Free robots.txt generator for SEO. Create crawler directives, add sitemap URLs, block private paths, and optionally allow reputable AI crawlers.",
  },
  {
    path: "/tools/open-graph-checker",
    title: "Open Graph Checker Free | ConstantSEO",
    description: "Check Open Graph and Twitter card tags from pasted HTML. Preview social title, description, image, URL, and missing sharing metadata.",
  },
  {
    path: "/tools/website-bandwidth-calculator",
    title: "Website Bandwidth Calculator Free | ConstantSEO",
    description: "Free website bandwidth calculator. Estimate monthly GB usage from visitors, page views per visit, average page size, and cache hit rate.",
  },
  {
    path: "/tools/website-cost-calculator",
    title: "Website Cost Calculator UAE Free | ConstantSEO",
    description: "Estimate website cost in AED for UAE and GCC projects. Calculate a planning range based on pages, bilingual content, SEO pages, ecommerce, and booking features.",
  },
  {
    path: "/tools/youtube-video-seo-checker",
    title: "YouTube Video SEO Checker Free | ConstantSEO",
    description: "Free YouTube video SEO checker. Audit title length, keyword usage, description depth, tags, chapters, hashtags, and call-to-action signals.",
  },

  // ── City Landing Pages ──────────────────────────────────────
  {
    path: "/seo-agency-dubai",
    title: "SEO Agency Dubai - AI-Powered SEO by ConstantSEO",
    description: "Dubai's leading AI-powered SEO agency. ConstantSEO helps Dubai businesses dominate Google, ChatGPT, and Perplexity rankings. Free audit available.",
  },
  {
    path: "/seo-agency-abu-dhabi",
    title: "SEO Agency Abu Dhabi - AI-Powered SEO by ConstantSEO",
    description: "Top-rated AI SEO agency in Abu Dhabi. ConstantSEO helps government suppliers, healthcare providers, and tourism businesses dominate Google rankings.",
  },
  {
    path: "/seo-agency-riyadh",
    title: "SEO Agency Riyadh - AI-Powered SEO by ConstantSEO",
    description: "Leading SEO agency in Riyadh, Saudi Arabia. ConstantSEO drives organic growth for Vision 2030 businesses, e-commerce brands, and GIGA project suppliers.",
  },
  {
    path: "/seo-agency-jeddah",
    title: "SEO Agency Jeddah - AI-Powered SEO by ConstantSEO",
    description: "Premier SEO agency in Jeddah, Saudi Arabia. ConstantSEO drives organic search growth for Jeddah's trade, hospitality, F&B, and retail businesses.",
  },
  {
    path: "/seo-agency-muscat",
    title: "SEO Agency Muscat - AI-Powered SEO by ConstantSEO",
    description: "Top SEO agency in Muscat, Oman. ConstantSEO helps Omani businesses in tourism, logistics, and hospitality dominate Google rankings.",
  },

  // ── Industry Landing Pages ──────────────────────────────────
  {
    path: "/real-estate-seo-dubai",
    title: "Real Estate SEO Dubai - Rank for Property Searches in UAE",
    description: "ConstantSEO helps Dubai real estate agencies, developers, and brokers rank on Google for high-intent property searches.",
  },
  {
    path: "/restaurant-seo-dubai",
    title: "Restaurant SEO Dubai - Rank for Brunch, Cuisine & Location Searches",
    description: "ConstantSEO helps Dubai restaurants, cafes, and F&B groups rank on Google for high-intent dining searches.",
  },
  {
    path: "/legal-seo-uae",
    title: "Legal SEO UAE - SEO for Law Firms & Lawyers in Dubai & Abu Dhabi",
    description: "ConstantSEO helps UAE law firms and lawyers rank on Google for specific legal queries. Bilingual EN+AR legal content.",
  },
  {
    path: "/healthcare-seo-uae",
    title: "Healthcare SEO UAE - SEO for Medical Clinics & Specialists in Dubai",
    description: "ConstantSEO helps UAE medical clinics and specialist doctors rank on Google for patient searches.",
  },

  // ── Blog Posts ──────────────────────────────────────────────
  {
    path: "/blog/riyadh-seo-strategy-vision-2030",
    title: "Riyadh SEO Strategy for Vision 2030 Suppliers | ConstantSEO Blog",
    description: "Practical Riyadh SEO strategy for B2B suppliers, developers, consultants, and operators competing for Vision 2030, Expo 2030, New Murabba, Qiddiya, and RHQ demand.",
  },
  {
    path: "/blog/google-business-profile-riyadh",
    title: "Google Business Profile Optimization Riyadh | ConstantSEO Blog",
    description: "Improve local SEO in Riyadh with Google Business Profile categories, reviews, services, district relevance, Arabic-English details, and mobile-first local search signals.",
  },
  {
    path: "/blog/saudi-ecommerce-seo-riyadh",
    title: "Saudi Ecommerce SEO for Riyadh Brands | ConstantSEO Blog",
    description: "Saudi ecommerce SEO guide for Riyadh brands: Arabic category pages, mobile Core Web Vitals, product schema, payment trust signals, and Saudi buyer intent.",
  },
  {
    path: "/blog/arabic-seo-riyadh-saudi-search",
    title: "Arabic SEO in Riyadh: Saudi Search Intent Guide | ConstantSEO Blog",
    description: "Practical Arabic SEO guide for Riyadh businesses covering Saudi search intent, MSA vs Gulf Arabic, bilingual URLs, Arabic metadata, FAQ schema, and RTL SEO.",
  },
  {
    path: "/blog/seo-cost-riyadh",
    title: "How Much Does SEO Cost in Riyadh? | ConstantSEO Blog",
    description: "Riyadh SEO pricing guide covering monthly retainers, local SEO, ecommerce SEO, Arabic content, technical SEO, audits, and competitive Saudi markets.",
  },
  {
    path: "/blog/seo-dubai-guide-2025",
    title: "Complete Guide to SEO in Dubai 2025 | ConstantSEO Blog",
    description: "Everything you need to know about SEO in Dubai: competitive landscape, bilingual search, local SEO, AI search, pricing, and timelines for 2025.",
  },
  {
    path: "/blog/what-is-geo-ai-search",
    title: "What is GEO? How AI Search is Changing SEO | ConstantSEO Blog",
    description: "Generative Engine Optimization explained. How ChatGPT, Gemini, and Perplexity rank content, and what Gulf businesses should do about it.",
  },
  {
    path: "/blog/arabic-seo-guide-gcc",
    title: "Arabic SEO: The Complete Guide for GCC Businesses | ConstantSEO Blog",
    description: "Master Arabic SEO for the GCC market. Dialect differences, Arabic keyword research, RTL optimization, and hreflang implementation guide.",
  },
  {
    path: "/blog/local-seo-checklist-uae",
    title: "Local SEO Checklist for UAE Businesses | ConstantSEO Blog",
    description: "Step-by-step local SEO checklist for UAE businesses. Google Business Profile, citations, reviews, local schema, and geo-targeted content.",
  },
];

// Read the built index.html as template
const template = readFileSync(join(DIST, "index.html"), "utf-8");

let generated = 0;

for (const route of routes) {
  const url = `${BASE_URL}${route.path}`;

  let html = template;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description"\s+content="[^"]*">/,
    `<meta name="description" content="${route.description}">`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${route.description}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${url}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // Write to dist/<route>/index.html
  const dir = join(DIST, route.path);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(join(dir, "index.html"), html);
  generated++;
}

console.log(`Generated ${generated} static HTML files for SEO.`);
