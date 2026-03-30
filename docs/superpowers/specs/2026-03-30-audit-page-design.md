# SEO Audit Page Design

## Overview

Single `/audit` page for ConstantSEO with two features:
1. **Quick Scan** — instant SEO analysis via Google PageSpeed Insights API
2. **Deep Audit Request** — email form for full manual audit by the team

## Architecture

**Approach: All Client-Side (Approach A)**
- PageSpeed Insights API called directly from React via `fetch()`
- Deep audit form mocked for now (`console.log` payload)
- Later: Cloudflare Pages Function sends emails via Resend
- No database, no external services beyond PSI API

## Page Structure

### Route
- Path: `/audit`
- Lazy-loaded in App.tsx like other pages
- Wrapped in `PageTransition` for Framer Motion animations

### Section 1: Hero + Quick Scan (dark bg)
- Headline: "Free SEO Audit" (translated EN/AR)
- Subtext: "Get your SEO score in seconds"
- URL input field + "Analyze" button
- URL pre-filled from `?url=` query param (linked from hero domain input)
- Validation: add `https://` if missing, basic URL format check

### Quick Scan Results (appears after scan)
- **SEO Score**: circular gauge, 0-100, color-coded (red <50, orange 50-89, green 90+)
- **Performance Score**: smaller gauge beside it
- **Audit findings**: pass/fail list from `lighthouseResult.audits`
  - Each item: pass/fail icon, title, brief description
  - Show top findings from SEO category

### Loading State
- Animated progress with rotating messages: "Checking meta tags...", "Analyzing performance...", "Reviewing accessibility...", etc.
- Duration: 10-20 seconds typical

### Error State
- "Couldn't analyze this URL. Make sure it's publicly accessible."
- Allow retry

### Section 2: Deep Audit CTA (light bg)
- Headline: "Want the Full Picture?"
- Subtext: "Our AI-powered deep audit covers 200+ checkpoints. Technical SEO, content quality, competitor analysis, and actionable recommendations."
- Form fields:
  - Name (required)
  - Email (required)
  - Website URL (required, pre-filled if quick scan was run)
- Submit button: "Request Free Deep Audit"

### Form Submission (Mocked)
- On submit: `console.log({ name, email, website, timestamp })`
- Show success toast/message
- Success text: "We've received your request! Check your email for confirmation. Our team will deliver your full audit within 24-48 hours."

### Future Email Flow (when Resend is wired up)
- Cloudflare Pages Function at `/api/audit-request`
- Sends confirmation email to user
- Sends lead notification to team (akhmad@constantlabs.ai)
- Stores contact in Resend Audience

## Integration Points

### Navigation
- "Get Free Audit" nav link (`nav.audit`) → `/audit` (currently points to `/contact?website=`)
- Hero domain input CTA → `/audit?url={domain}`

### i18n
- All user-facing strings in `translations.ts` with EN + AR
- Translation key prefix: `audit.*`
- RTL support for Arabic

### PageSpeed Insights API
- Endpoint: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed`
- Params: `url`, `category=seo`, `category=performance`
- No API key required for basic usage
- Response: `lighthouseResult.categories.seo.score`, `lighthouseResult.audits.*`

## Design Language
- Dark hero section matches existing site hero (dark purple bg, teal/cyan accents)
- Light content section for deep audit form (white bg)
- Gold/amber CTA buttons
- Framer Motion animations consistent with other pages
- Responsive: mobile-first, works on all breakpoints
- shadcn/ui components for form inputs, buttons, toasts

## Files to Create/Modify

### New
- `src/pages/Audit.tsx` — main audit page component

### Modify
- `src/App.tsx` — add `/audit` route
- `src/i18n/translations.ts` — add `audit.*` translation keys
- `src/components/Navbar.tsx` — update "Get Free Audit" link to `/audit`
- `src/components/HeroSection.tsx` — update domain input to navigate to `/audit?url={domain}`
