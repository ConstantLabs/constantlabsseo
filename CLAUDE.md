# ConstantSEO - AI-Powered SEO by Constant Labs

## Project Overview
This is the website for **ConstantSEO** (seo.constantlabs.ai), an AI-powered SEO agency by Constant Labs, based in Dubai, UAE. We target the GCC market: UAE, Saudi Arabia, and Oman.

## Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3 + shadcn/ui components
- **Animations**: Framer Motion
- **i18n**: Custom context-based translation (Arabic + English, RTL/LTR)
- **SEO**: React Helmet Async
- **Routing**: React Router DOM v6

## Business Model (from Greg Isenberg / Boring Marketer video)
- Use agentic AI to build SEO-optimized websites rapidly (50+ pages in hours)
- Partner with local operators who handle business operations
- Focus on local search dominance for businesses in UAE/Saudi/Oman
- AI-powered keyword research, content creation, technical SEO audits
- Sub-agent parallel optimization workflows
- Good SEO = Good GEO (LLM optimization) - no separate strategy needed

## Key Design Decisions
- **Dark hero section** with electric teal/cyan accents (AI feel)
- **Gold/amber CTAs** (resonates with Gulf luxury market)
- **White content sections** for readability
- **Bilingual**: Full Arabic and English with proper RTL support
- **Pricing in AED** for regional appeal
- **WhatsApp integration** (primary business channel in GCC)
- **SEO-first design**: Every page optimized for search

## Page Structure
1. Announcement bar (latest AI feature/offer)
2. Navigation (Services, Case Studies, Pricing, About, Blog, EN/AR toggle, CTA)
3. Hero (dark bg, AI platform icons strip, domain input CTA, stats bar)
4. Client logos marquee
5. Problem/Solution (why traditional SEO isn't enough in AI era)
6. Services grid (3 columns)
7. How It Works (numbered 3-5 step process)
8. Case Studies (cards with hero metrics)
9. AI Dashboard preview
10. Testimonials carousel
11. Pricing tiers (3-4 tiers in AED)
12. Team section
13. FAQ accordion
14. Final CTA (full-width)
15. Footer (services, locations, resources, social, WhatsApp)

## Service Categories
1. **AI-Powered SEO** (GEO, AEO, LLM optimization across ChatGPT/Gemini/Perplexity)
2. **Traditional SEO Excellence** (Technical, Content, Links, Local SEO)
3. **Regional Specialization** (Arabic SEO, GCC market expertise)

## Markets
- **Primary**: Dubai, Abu Dhabi, UAE
- **Secondary**: Riyadh, Jeddah, Saudi Arabia
- **Tertiary**: Muscat, Oman

## Languages
- English (default)
- Arabic (full RTL support)

## Always Read
- **memory.md** in this directory for business context, decisions, and session notes
- Follow bilingual conventions: every user-facing string must have AR + EN translations

## Development Notes
- Cloned from constant-labs-showcase, transformed for SEO agency
- Keep existing i18n infrastructure (LanguageContext.tsx)
- Keep shadcn/ui component library
- Keep Framer Motion animations (but update to match new brand)
- Brand is ConstantSEO by Constant Labs
- SEO meta tags on every page
- hreflang tags for Arabic/English versions
