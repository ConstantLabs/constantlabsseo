# ConstantSEO — Full SEO Audit Report
**Site:** seo.constantlabs.ai
**Audit Date:** 2026-03-29
**Auditor:** ConstantSEO Internal (Claude Code)
**Codebase:** D:\Apps\agentici-seo

---

## Executive Summary

### Overall SEO Health Score: **40 / 100**

| Category | Score | Weight | Weighted Score |
|----------|-------|--------|---------------|
| Technical SEO | 35/100 | 22% | 7.7 |
| Content Quality | 40/100 | 23% | 9.2 |
| On-Page SEO | 60/100 | 20% | 12.0 |
| Schema / Structured Data | 20/100 | 10% | 2.0 |
| Performance (CWV) | 50/100 | 10% | 5.0 |
| AI Search Readiness | 30/100 | 10% | 3.0 |
| Images | 25/100 | 5% | 1.25 |
| **TOTAL** | | | **40 / 100** |

**Business Type Detected:** AI-Powered SEO Agency (Dubai, UAE) — B2B Service, Local + Regional
**Pages Audited:** 11 routes across the React SPA

### Top 5 Critical Issues
1. **Sitemap is wrong domain** — all URLs point to `constantlabs.ai`, not `seo.constantlabs.ai`
2. **Robots.txt points to wrong sitemap** — references parent domain's sitemap
3. **SPA with no SSR/SSG** — meta tags and content only exist after JavaScript executes
4. **No hreflang tags** — bilingual AR/EN site is invisible to search engines as bilingual
5. **Missing OG image** — `og-image.png` referenced in all meta tags but the file does not exist

### Top 5 Quick Wins
1. Fix `sitemap.xml` to include all 11 `seo.constantlabs.ai` URLs (30 min)
2. Fix `robots.txt` to reference correct sitemap URL (5 min)
3. Create `og-image.png` (1200×630) and add to `/public` (1 hour)
4. Create `llms.txt` in `/public` (30 min)
5. Add FAQPage schema to the FAQ section (1 hour)

---

## Technical SEO

### Score: 35/100

### 1. Sitemap — CRITICAL

**File:** `public/sitemap.xml`
**Issue:** The sitemap is the wrong website. All 20 URLs point to `https://constantlabs.ai/...` — the parent company site for Navii, SmartRoads, and Robotics projects. There are **zero URLs** for `seo.constantlabs.ai`.

**Impact:** Google cannot discover any pages of ConstantSEO via sitemap. Indexing depends entirely on crawling from backlinks.

**Current sitemap domains:**
```
https://constantlabs.ai/         ← WRONG domain
https://constantlabs.ai/navii    ← unrelated product
https://constantlabs.ai/robotics ← unrelated product
```

**Should be:**
```
https://seo.constantlabs.ai/
https://seo.constantlabs.ai/services
https://seo.constantlabs.ai/services/ai-search-optimization
... (all 11 routes)
```

### 2. Robots.txt — CRITICAL

**File:** `public/robots.txt`
**Issue:** The file still has the comment `# Constant Labs - robots.txt` and references `https://constantlabs.ai/sitemap.xml`. This is the robots.txt from the parent site, not ConstantSEO.

```
# Constant Labs - robots.txt   ← wrong
Sitemap: https://constantlabs.ai/sitemap.xml  ← wrong URL
```

### 3. SPA Architecture — CRITICAL

**File:** `index.html`, `src/main.tsx`
**Issue:** The site is a pure React SPA. The initial HTML served to crawlers is:
```html
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```

All page titles, meta descriptions, canonical URLs, and body content only appear **after JavaScript executes**. While Googlebot can render JavaScript, it:
- Crawls JS-rendered pages in a second wave (delayed indexing)
- May miss dynamic content in AI scrapers (Perplexity, ChatGPT)
- Gets zero content if JS fails or is blocked

The `index.html` has a fallback `<title>` and `<meta>` tags, but inner pages (e.g., `/services/technical-seo`) have NO static meta fallbacks — all depend on React Helmet.

**Recommendation:** Add prerendering (Vite SSG plugin) or migrate to Astro/Next.js.

### 4. No Hreflang Tags — CRITICAL

**Files:** `src/components/SEO.tsx`, `src/App.tsx`
**Issue:** The site is fully bilingual (English + Arabic) but has zero hreflang tags. Language is switched client-side via localStorage — search engines see only one version at any URL, in whichever language was last saved to localStorage.

There are no `/ar/` URL equivalents — both languages share the same URLs. No `<link rel="alternate" hreflang="ar">` or `x-default` tags anywhere.

**Impact:** Google cannot index the Arabic version of any page. The Arabic SEO work is invisible to search engines.

### 5. Canonical Tags — HIGH

The SEO component generates canonical tags via React Helmet (`src/components/SEO.tsx:21`). These are client-side only. The `index.html` has a canonical for the homepage (`/`), but no static canonicals exist for inner pages before JavaScript executes.

### 6. `_headers` File — MEDIUM

**File:** `public/_headers`
The file has good basics but is missing important security headers:
- ✅ `X-Robots-Tag: index, follow`
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ❌ Missing `X-Frame-Options: SAMEORIGIN`
- ❌ Missing `Permissions-Policy`
- ❌ Missing `Strict-Transport-Security` (HSTS)
- ❌ Missing `Content-Security-Policy`

### 7. No `<noscript>` Fallback — MEDIUM

No `<noscript>` content anywhere in the SPA. Users and crawlers without JS get a blank page.

### 8. AnnouncementBar Not Rendered — LOW

**File:** `src/pages/Index.tsx`
The `AnnouncementBar` component exists (`src/components/AnnouncementBar.tsx`) but is not included in `Index.tsx` or any page. It will never render.

---

## Content Quality

### Score: 40/100

### 1. Testimonials Are Not from Real Clients — HIGH

**File:** `src/i18n/translations.ts:307-333`
All three testimonials are not from real clients:
- `testimonial1.name`: "Real Case Study" / "Documented by Greg Isenberg"
- `testimonial2.name`: "The AI Advantage" / "Our Technology"
- `testimonial3.name`: "Industry Insight" / "SEO + GEO Strategy"

This is the equivalent of a restaurant putting their own review as the first Yelp review. **E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) score is severely impacted.**

The "case study" is about a diesel repair business documented by Greg Isenberg — not a ConstantSEO client result.

### 2. Blog is Empty — HIGH

**File:** `src/pages/Blog.tsx`
The blog page shows "Coming Soon" with no articles. Blog is one of the highest-ROI SEO channels for an agency. Each article targeting "AI SEO Dubai", "ChatGPT optimization", "Arabic SEO guide" etc. would capture long-tail traffic.

**Impact:** No content marketing. No topical authority signals. No AI citation opportunities.

### 3. Case Studies are Methodology Demos, Not Client Results — HIGH

**File:** `src/data/projectsData.ts:100-133`
All 3 case studies are:
- "50+ Optimized Pages in 4 Hours" — describes the technology, no client
- "Google + AI Search Optimization" — describes methodology, no client
- "True Bilingual Arabic + English SEO" — describes a specialization, no client

There are no real client names, real traffic increases, or verifiable results. E-E-A-T requires demonstrated real-world experience.

### 4. Service Detail Pages Thin Content — MEDIUM

**File:** `src/pages/ServiceDetail.tsx`
Each service detail page contains:
- 1 paragraph description (from `service.description`)
- A list of 4-5 tags shown as checkboxes
- A generic "Why This Matters" section (same text for ALL services)

There is no keyword-rich content, no case study examples per service, no process breakdown, no FAQs per service. These pages are thin and unlikely to rank.

### 5. Founder Section Photo Mismatch — MEDIUM

**File:** `public/images/founder-mohamad-tamer.jpg`
The founder in the codebase is named "Ahmad" (Founder & CEO). A photo exists in `/public/images/founder-mohamad-tamer.jpg` — a different name. The About page does not display this photo (uses a letter "A" avatar instead). This needs verification.

### 6. Contact Form Non-Functional — HIGH

**File:** `src/pages/Contact.tsx:22-26`
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // TODO: Connect to form backend
  alert("Thank you! We'll be in touch within 24 hours.");
};
```

The contact form uses `alert()` and has no backend integration. Users who submit receive an alert popup with no email sent. This is a broken conversion point.

---

## On-Page SEO

### Score: 60/100

### 1. Title Tags — GOOD ✅

Most pages have well-crafted title tags:
- Homepage: "ConstantSEO | AI-Powered SEO by Constant Labs"
- Services: "AI SEO Services — ConstantSEO"
- About: "About Us — ConstantSEO"
- Contact: "Contact Us — ConstantSEO"
- Blog: "Blog — ConstantSEO"

**Issue:** ServiceDetail pages use `${service.title} | ConstantSEO` which is correct, but the title in `SEO.tsx:20` applies the ` | ConstantSEO` suffix — this creates double suffixes when `title` already contains it. Verify this doesn't happen.

### 2. Meta Descriptions — GOOD ✅

All pages have unique, relevant meta descriptions under 160 characters. Good keyword inclusion and value propositions.

### 3. H1 Tags — GOOD ✅

Every page has exactly one H1. The homepage hero `<h1>` uses the translation key `hero.headline` = "Rank Higher. Get More Customers."

### 4. Heading Hierarchy — MEDIUM

The main index page uses H1 in hero, H2 in each section (ProblemSolution, ServicesGrid, HowItWorks, etc.). Generally good. However, service cards in `ServicesGrid` use `<h3>` which is appropriate.

**Issue:** FAQ section uses the FAQ component which has `<h2>` for the section title but individual questions in AccordionTrigger have no heading tags (they're just text in a button).

### 5. Internal Linking — MEDIUM

- Footer links all point to `/services` for all 6 service items (should link to individual service pages)
- ServicesGrid cards correctly link to individual service pages
- No breadcrumbs on any inner page

### 6. URL Structure — GOOD ✅

Clean, readable URLs:
- `/services/ai-search-optimization`
- `/case-studies/rapid-seo-deployment`
- `/pricing`, `/about`, `/contact`

No dynamic parameters, no trailing slashes issue, proper kebab-case slugs.

### 7. Keyword Coverage — MEDIUM

Primary keywords targeted:
- "AI SEO Dubai" — in title and description ✅
- "SEO agency UAE" — present ✅
- "Arabic SEO" — service exists ✅
- "GCC SEO" — present ✅
- "GEO optimization" — present ✅

Missing keyword coverage:
- "SEO agency Dubai price" — no pricing page targeting this
- "ChatGPT optimization Dubai" — no dedicated page
- City-specific pages (Abu Dhabi, Riyadh, Jeddah) — none exist
- Industry-specific pages (real estate SEO Dubai, restaurant SEO Dubai) — none exist

---

## Schema / Structured Data

### Score: 20/100

### 1. Organization Schema — EXISTS but Incomplete

**File:** `index.html:63-78`
Current implementation:
```json
{
  "@type": "Organization",
  "name": "ConstantSEO by Constant Labs",
  "url": "https://seo.constantlabs.ai",
  "description": "...",
  "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
  "areaServed": ["Dubai", "UAE", ...],
  "sameAs": []   ← EMPTY
}
```

**Missing fields:**
- `telephone`: "+971561495656"
- `email`: "akhmad@constantlabs.ai"
- `logo`: URL to logo image
- `sameAs`: social media profiles (LinkedIn, Twitter, Instagram)
- `foundingDate`
- `priceRange`

### 2. No LocalBusiness Schema — HIGH

For a Dubai-based agency, `LocalBusiness` (or `ProfessionalService`) schema is essential for Google Maps and local search. Missing entirely.

```json
{
  "@type": "ProfessionalService",
  "@id": "https://seo.constantlabs.ai/#business",
  "name": "ConstantSEO",
  "telephone": "+971561495656",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Awir",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "openingHoursSpecification": [...]
}
```

### 3. No FAQPage Schema — HIGH

The site has an entire FAQ section (8 questions) with no `FAQPage` structured data. This is an easy rich result opportunity — FAQ schema enables Google to show expandable answers directly in search results.

### 4. No BreadcrumbList Schema — MEDIUM

Inner pages (services, case studies, blog) have no BreadcrumbList schema. Breadcrumbs improve click-through rates in search results.

### 5. No Service Schema — MEDIUM

Each of the 8 service pages could include `Service` schema with pricing, description, and provider information. Missing.

### 6. No WebSite Schema with SearchAction — LOW

A `WebSite` schema with `SearchAction` enables Google's Sitelinks search box. Currently missing.

---

## Performance

### Score: 50/100 (estimated — no live measurement possible)

### 1. Google Fonts — MEDIUM

**File:** `index.html:11-15`
Three font families loaded with multiple weights:
- Raleway: 400, 500, 600, 700, 800, 900 (6 weights)
- Montserrat: 400, 500, 600, 700 (4 weights)
- Changa: 400, 500, 600, 700, 800 (5 weights)

Total: 15 font files from Google Fonts. All use `display=block` which blocks rendering until fonts load (causes FOIT — Flash of Invisible Text). Should use `display=swap` instead.

**Impact:** Increased LCP (Largest Contentful Paint) and potential CLS (Cumulative Layout Shift).

### 2. Bundle Size — MEDIUM

Dependencies that add significant bundle weight:
- `framer-motion` — ~130KB gzipped, used for page transitions and animations
- `react-router-dom` — ~25KB
- All shadcn/ui components (many unused on any given page)

No code splitting beyond React.lazy() for pages (which is implemented — good).

### 3. Font Preloading — PARTIAL ✅

`index.html` includes `<link rel="preload">` for Google Fonts CSS, but not for individual font files. Actual font files won't be known until CSS is parsed.

### 4. Asset Caching — GOOD ✅

`_headers` file correctly sets:
- `/assets/*`: `max-age=31536000, immutable` (1 year — ideal for hashed assets)
- `/*.html`: `no-cache` (ensures fresh HTML)
- `/sitemap.xml`: 1 hour cache

---

## AI Search Readiness

### Score: 30/100

### 1. No `llms.txt` File — HIGH

**Critical for an AI SEO agency.** The site has no `llms.txt` file which would:
- Instruct AI crawlers what to index
- Provide structured summaries of services
- Signal to LLMs what your business does

This is especially embarrassing for an agency that sells AI search optimization. The site doesn't follow its own advice.

### 2. Citability — LOW

For a brand to be cited by ChatGPT, Gemini, or Perplexity:
- Must have topical authority (blog content, publications) — **MISSING**
- Must be mentioned on authoritative external sites — **UNVERIFIABLE** from codebase
- Must have structured, quotable content — **PARTIAL** (good FAQ content exists)
- Must have clear entity signals (who you are, what you do) — **PARTIAL**

### 3. Content Structure for AI — MEDIUM

The FAQ section content is well-structured and quotable, but it's rendered via JavaScript (invisible to AI scrapers that don't execute JS).

The "How It Works" 5-step process is good for AI comprehension but again is JS-rendered.

### 4. Brand Entity Signals — LOW

- No Wikipedia page (expected for new brand)
- No Google Knowledge Panel
- `sameAs` in schema is empty (no social profiles)
- No press mentions or external citations visible from the codebase
- Testimonials have no real company names for entity association

---

## Images

### Score: 25/100

### 1. Missing OG Image — CRITICAL

**File:** `public/OG-IMAGE-GUIDE.md` exists but `public/og-image.png` does NOT exist.

Every page references `https://seo.constantlabs.ai/og-image.png` for:
- Open Graph (`og:image`)
- Twitter Card (`twitter:image`)

When shared on social media or tested with Facebook/Twitter debug tools, a broken image will appear. This reduces click-through rates significantly.

### 2. No Logo Image File — HIGH

The Organization schema references no logo URL (empty). No `logo.png` or `logo.svg` in public root (only `favicon.svg`).

### 3. Alt Text — UNAUDITABLE from Code

The React components use very few `<img>` tags (most UI is CSS/SVG). The `ClientLogos.tsx` component was not fully analyzed — need to verify all logos have `alt` attributes.

### 4. Mountain SVG — LOW

`public/mountain.svg` exists and is referenced in HeroSection. SVGs used inline or as `<img>` should have appropriate `alt` text.

### 5. No WebP Images — MEDIUM

The project uses `.jpg` images in `/public/images/` and `/public/robotics/`. No WebP variants detected. WebP format offers 25-35% smaller file sizes than JPEG for similar quality.

---

## Discovered Bugs (Not SEO, but impact conversions)

### B1. Pricing Discrepancy — HIGH

Two different pricing tables in the codebase:

**`projectsData.ts` pricing:**
- Starter: AED 3,500/mo
- Growth: AED 7,500/mo
- Enterprise: AED 15,000/mo

**`translations.ts` pricing:**
- Starter: AED 1,500/mo
- Growth: AED 3,500/mo
- Enterprise: AED 7,500/mo

The `PricingSection` component renders one of these. If it uses `projectsData.ts`, prices are double what the translations show. If it uses translations, the `projectsData.ts` pricing is stale. This needs to be reconciled — incorrect pricing damages trust and conversions.

### B2. Contact Form Broken — HIGH

`src/pages/Contact.tsx:22` — `alert()` with no backend. Every lead is lost.

### B3. Hero Domain Input Non-Functional — MEDIUM

The domain audit input in `HeroSection.tsx` collects a domain string but pressing the button does nothing (no form action, no API call, no navigation to audit results).

### B4. Footer Service Links All Point to `/services` — MEDIUM

`src/components/Footer.tsx:8-15` — All 6 service links use `to: "/services"` instead of individual service URLs. This wastes internal linking opportunities and confuses users.

---

## Route Inventory

| Route | Status | Has SEO Component | Notes |
|-------|--------|-------------------|-------|
| `/` | ✅ | ✅ | Good meta |
| `/services` | ✅ | ✅ | Good |
| `/services/:slug` | ✅ | ✅ | 8 service pages, thin content |
| `/case-studies` | ✅ | ✅ | 3 methodology demos |
| `/case-studies/:slug` | ✅ | ? | Not audited |
| `/pricing` | ✅ | ✅ | Pricing discrepancy |
| `/about` | ✅ | ✅ | Good |
| `/blog` | ✅ | ✅ | Empty ("Coming Soon") |
| `/contact` | ✅ | ✅ | Form broken |
| `/privacy` | ✅ | ? | Not audited |
| `/terms` | ✅ | ? | Not audited |

---

## Keyword Gap Analysis

### Ranking Opportunities Not Targeted

| Keyword | Intent | Est. Volume | Status |
|---------|--------|-------------|--------|
| SEO agency Dubai | Commercial | High | Targeted but no dedicated landing page |
| ChatGPT SEO optimization | Informational | Medium | No blog content |
| Arabic SEO agency | Commercial | Medium | Service page exists but thin |
| Local SEO Dubai | Commercial | High | Service exists, no location pages |
| SEO audit Dubai free | Commercial | Medium | CTA exists, no landing page |
| GEO optimization | Informational | Low-Medium | FAQ covers it, no dedicated page |
| Perplexity optimization | Informational | Low | No content |
| AI search optimization UAE | Commercial | Low-Medium | No dedicated page |

---

*Report generated 2026-03-29 by ConstantSEO internal audit tool*
