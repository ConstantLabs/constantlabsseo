# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for **ConstantSEO** (seo.constantlabs.ai), an AI-powered SEO agency by Constant Labs targeting the GCC market (UAE, Saudi Arabia, Oman). Bilingual (English + Arabic with full RTL support), pricing in AED, WhatsApp as primary CTA channel.

## Commands

```bash
npm run dev        # Dev server on http://localhost:8080
npm run build      # Vite build + generate-static-pages post-build script
npm run build:dev  # Dev-mode build (no static page generation)
npm run lint       # ESLint
npm run preview    # Preview production build
```

No test framework is configured.

## Architecture

**Stack**: React 18 + TypeScript + Vite (SWC) + Tailwind CSS 3 + shadcn/ui + Framer Motion

**Path alias**: `@/` maps to `src/`

### Routing (src/App.tsx)

All pages are lazy-loaded via `React.lazy()` and wrapped in `<PageTransition>` (Framer Motion AnimatePresence). Routes fall into four categories:

1. **Static pages**: `/`, `/services`, `/pricing`, `/about`, `/blog`, `/contact`, `/audit`, `/privacy`, `/terms`
2. **Dynamic detail pages**: `/services/:slug`, `/case-studies/:slug`, `/blog/:slug`
3. **City landing pages**: Generated from `src/data/cityData.ts` — each city object produces a route like `/seo-agency-dubai`
4. **Industry landing pages**: Generated from `src/data/industryData.ts` — routes like `/real-estate-seo-dubai`

The catch-all `*` route must remain last. New custom routes go above it.

### i18n System (src/i18n/)

- `LanguageContext.tsx`: Provides `useLanguage()` hook with `t(key)`, `lang`, `isAr`, `toggleLang`
- `translations.ts`: Flat key-value map — each key has `{ en: string, ar: string }`
- Language persisted in `localStorage` key `cl-lang`
- `document.dir` and `document.lang` are set automatically on language change
- **Every user-facing string must have both EN and AR translations**

### SEO / Static Page Generation

- `react-helmet-async` for per-page meta tags (wrapped at both `main.tsx` and `App.tsx` level)
- `src/components/SEO.tsx`: Reusable SEO component for setting title/description/OG tags
- `scripts/generate-static-pages.mjs`: Post-build script that generates per-route HTML files with baked-in meta tags for crawlers. Route list is hardcoded in this script — **new pages must be added here manually**.

### Data-Driven Pages

- `src/data/cityData.ts` — `CityData` interface with city-specific SEO content, market stats, FAQs
- `src/data/industryData.ts` — Industry-specific landing page data
- `src/data/blogData.ts` — Blog post content
- `src/data/projectsData.ts` — Case study/project data

### Build Optimization

Vite config splits vendor chunks: `vendor-react`, `vendor-motion`, `vendor-ui` (Radix primitives).

## Key Design Decisions

- Dark hero section with electric teal/cyan accents, gold/amber CTAs (Gulf luxury market)
- White content sections for readability
- WhatsApp floating button on all pages (`WhatsAppButton` component)
- Cookie consent banner (`CookieConsent` component)
- Page transitions via Framer Motion `AnimatePresence`

## Business Context

- Brand: ConstantSEO by Constant Labs, based in Dubai
- Markets: Dubai, Abu Dhabi (primary) → Riyadh, Jeddah (secondary) → Muscat (tertiary)
- Business model: Agentic AI for rapid SEO site deployment (50+ pages in hours), local operator partnerships
- "Good SEO = Good GEO" — no separate AI search strategy needed

## The licence

`src/data/legal.ts` is the single source of truth for the trade licence.
**Nothing else may hardcode the licence number, the register number, the legal
name or the issuing authority.** `Footer.tsx`, `LegalEntityPanel` (About, Privacy,
Terms), the JSON-LD in `index.html` and `public/llms.txt` all state it, and they
have to agree.

- **ConstantSEO is a product name, not a company.** The licence is held by
  Constant Labs — `ConstantLabs For Web-Design` — which is the same entity behind
  `constantlabs.ai` and `websites.constantlabs.ai`. Never write copy or schema
  that presents ConstantSEO as a separate legal entity.
- **The registered address is never published.** DET lists a residential villa
  against this licence. City and country only — no street, no area, no P.O. box.
  The area name used to appear in `footer.location`, the contact page and the
  JSON-LD; it was removed on purpose. Don't put it back.
- On renewal, change `licence.issuedOn` / `licence.expiresOn` in `legal.ts`.
  `index.html` is static and carries a hand-written copy of the number and
  `foundingDate`; update that by hand at the same time.
- The same block is mirrored in `constant-labs-showcase/src/data/legal.ts` and
  `constantlabs-websites/src/content/site.ts`. A change here needs the same
  change there.
