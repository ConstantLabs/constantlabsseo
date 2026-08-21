# ConstantSEO Search Signal Field Overhaul

Date: 2026-08-21
Status: Approved direction, implementation pending

## Purpose

Redesign `D:\Apps\agentici-seo` as a distinctive Constant Labs SEO product site for GCC businesses. The site must feel related to the newest Constant Labs Showcase work and use the typography and editorial structure of `D:\Apps\constantlabs-websites`, while remaining recognizably about search visibility rather than a generic studio portfolio.

The primary job of the site is to turn a qualified visitor into an SEO audit or WhatsApp conversation. The secondary job is to explain the service with defensible project evidence and crawlable bilingual content.

## Design Thesis

The visual direction is **Search Signal Field**: an editorial search-performance instrument built from ruled grids, hard edges, oversized display type, compact data labels, and one dithered signal visualization.

The hero is the thesis. It should communicate that search visibility compounds through deliberate technical and content systems. Its visual field begins as scattered query signals and resolves into a legible upward search-performance trajectory. This borrows the material language of the recent Showcase field system without copying its hero composition, boot screen, mascot, or software imagery.

## Design System

### Color

| Token | Value | Role |
| --- | --- | --- |
| Ground | `#030500` | Page background |
| Raised | `#0A0F04` | Emphasized panels and form surfaces |
| Ink | `#EDF2E4` | Primary text |
| Muted | `#8C9880` | Supporting text and metadata |
| Line | `#2B3720` | Rules, borders, and grid structure |
| Signal | `#C7FF38` | Primary action, focus, and one-off emphasis |
| Evidence blue | `#4285F4` | Restricted to attributed Google Search Console evidence |
| Evidence violet | `#673AB7` | Restricted to impressions evidence in the same module |

Signal lime is semantic, not decorative. It marks actionable controls, active states, focus, and the most important pricing state. Blue and violet appear only where the Search Console source makes them meaningful.

### Typography

- **Anton**: uppercase display headings and large numerical statements.
- **Inter Tight**: body copy, controls, navigation, forms, and readable data descriptions.
- **Instrument Serif**: restrained italic emphasis within display or supporting copy.
- Arabic copy uses an Arabic family with comparable density and legibility. It must not be forced through Latin display fonts.

The hierarchy follows the Constant Labs editorial system: tracked 10 to 13 pixel labels, large fluid display headings, compact body copy, and intentional line breaks. Display typography must remain readable at native 1x rendering and on small screens.

### Shape and Structure

- Square corners and one-pixel borders.
- Full-width section rules with a centered content width near 78rem.
- Grid panels formed with `gap-px` and line-colored parent surfaces.
- No floating rounded-card system, glassmorphism, generic gradient blobs, or decorative shadows.
- Corner ticks may be used on evidence and pricing modules, but not on every panel.

### Motion

One orchestrated motion moment belongs in the hero signal field. Supporting motion is limited to short color transitions, slight arrow movement, controlled image scale, and in-view content reveals where they add hierarchy.

All motion must respect `prefers-reduced-motion`. Decorative canvas work must pause offscreen, cap device pixel ratio, avoid touch-only cursor effects, and provide a static fallback.

## Information Architecture

Existing routes, data-driven pages, and bilingual rendering remain intact. The visual overhaul covers:

- Homepage
- Navigation and footer
- Services and service details
- Case studies and case-study details
- Pricing
- About and contact
- Audit flow
- Blog and blog posts
- Tools and tool details
- City landing pages
- Industry landing pages
- Privacy, terms, and not-found states

No route is removed. The route catch-all remains last. New routes are not needed for this overhaul.

## Homepage Composition

### 1. Navigation

A compact, fixed control bar uses the wordmark, essential navigation, EN/AR toggle, and a clear audit action. It should feel like an instrument control rather than a conventional marketing navbar. Mobile navigation remains keyboard accessible and must not rely on globally clipped overflow.

### 2. Hero

Desktop uses an asymmetrical two-part plate:

```text
+--------------------------------------+-------------------------+
| SEARCH VISIBILITY                    | scattered query field   |
| THAT COMPOUNDS                       | resolves into a curve   |
|                                      | and ranked result marks |
| Focused explanation                  |                         |
| [Start free audit] [WhatsApp]        | compact source labels   |
+--------------------------------------+-------------------------+
```

On mobile, the visual field becomes a shorter top or middle band and the copy remains the first meaningful reading experience. The audit action is primary. WhatsApp is secondary.

### 3. Capability Coverage

A ruled strip names the surfaces the service actually handles: technical SEO, local search, content systems, structured data, Arabic and English visibility, and AI answer visibility. This replaces the misleading client-logo marquee.

### 4. Visibility System

A process section explains the service as a connected operating system:

1. Discover demand and technical constraints.
2. Build the search foundation.
3. Publish useful market coverage.
4. Measure, refine, and compound.

Numbering is appropriate here because the sequence is real. The section must distinguish methodology from customer proof.

### 5. Services

Services appear as dense ruled panels with useful scope statements and direct links. They should not behave like generic feature cards. Arabic content gets equivalent hierarchy and readable wrapping.

### 6. Mufakkir Performance Evidence

The supplied Search Console image is displayed as attributed project performance evidence, not a testimonial. The source image is copied into a stable project-owned asset path such as `public/proof/mufakkir-search-console-12-months.png`.

Required language:

> For mufakkir.app, Google Search Console reported 1.74K clicks, 29K impressions, 6% CTR, and an average position of 8.4 over the displayed 12-month period.

The evidence module includes:

- Project/property name: `mufakkir.app`
- Reporting source: Google Search Console
- Period: the displayed 12-month view
- Four exact metrics
- Screenshot preview with an accessible expanded view or direct image link
- A short explanation of the work, only where existing project facts support it

It must not claim revenue, leads, guaranteed rankings, monthly traffic, or results for every customer. It must not be labeled as a quote or testimonial.

### 7. Selected Work and Methodology

Existing unverified customer narratives are removed or relabeled. Technology and methodology entries become “How we work” or “What the system includes.” Only attributable project results appear as case-study proof.

### 8. Pricing

Pricing uses a ruled comparison grid. One recommended offer receives the one-off lime emphasis and inverted price block. Currency remains AED. Scope boundaries and next actions remain explicit.

### 9. FAQ and Booking

FAQ remains crawlable text. Booking is visually simplified and isolated from decorative fields so the embed remains usable. WhatsApp stays available as a direct path.

### 10. Footer

The footer is deliberately quiet: brand, markets served, important links, legal links, language state, and a final clear contact action.

## Shared Component Architecture

The implementation should introduce or consolidate focused primitives rather than put the whole redesign into page files:

- `SectionShell`: width, border, and section rhythm.
- `Eyebrow`, `DisplayTitle`, `Lede`: semantic type hierarchy.
- `RuledGrid` and `SignalPanel`: structural panel systems.
- `CornerTicks`: optional evidence or pricing chrome.
- `PrimaryCTA` and `SecondaryCTA`: consistent audit and WhatsApp actions.
- `SearchSignalField`: responsive animated hero field with static fallback.
- `EvidenceMetric`: source-aware performance metric.
- `MufakkirEvidence`: complete, attributed proof module.

Existing shadcn primitives are not edited directly. Shared behavior remains in application-level components.

## Copy and Internationalization

Every new user-facing string receives English and Arabic translations in the existing translation system. Copy is written from the visitor’s perspective and avoids implementation jargon.

The overhaul preserves the current client-side language toggle and RTL behavior. It does not claim that the current same-URL hreflang architecture is a complete multilingual SEO implementation. Correct crawlable locale URLs are outside this visual-overhaul scope unless separately approved.

## SEO and Static Output

The homepage must be added to the static/prerender route registry. After build, `dist/index.html` must contain meaningful rendered homepage content rather than an empty root container.

Existing metadata and route generation stay functional. Visual changes must not remove headings, body content, canonical tags, structured data, or FAQ content from generated output.

## Error and Empty States

- Audit failures explain what failed and provide a retry or direct-contact action.
- Booking embed failure offers WhatsApp and direct contact alternatives.
- Missing dynamic content routes keep a legible not-found state.
- Canvas or animation failure shows the static signal field without blocking content.
- No failure state uses vague apology text or leaves an empty panel.

## Accessibility and Responsive Requirements

- Visible keyboard focus using the signal color.
- Semantic heading order and controls.
- Mobile navigation usable without clipped focus or scroll lock bugs.
- No global `overflow: hidden`; clipping is limited to intentional visual containers.
- Reduced-motion behavior for field animation and transitions.
- Evidence image has descriptive alternative text and a usable large view.
- Contrast remains sufficient across ground, raised, muted, and signal states.
- English and Arabic layouts are inspected at desktop and mobile widths.

## Repository Hygiene

- Preserve the untracked `AGENTS.md` and all unrelated user work.
- Add `mcp.json` to `.gitignore`.
- Do not copy unrelated media or whole component directories from either reference repository.
- Reimplement or selectively adapt only the patterns needed for this site.

## Agent Ownership

Implementation is orchestrated through focused agents with non-overlapping ownership:

1. **Foundation and homepage agent**: design tokens, application primitives, navigation, hero, homepage composition, and proof asset/module.
2. **Inner-page convergence agent**: shared inner-page shells and the named static/dynamic templates, working around files already owned by the foundation agent.
3. **Content and verification agent**: bilingual copy audit, claim verification, build/lint/static-output checks, and browser review. This agent reviews rather than rewrites shared implementation files unless explicitly assigned a fix round.

The primary orchestrator reviews all diffs, resolves overlaps, runs fresh full verification, and performs the final rendered critique.

## Verification

Completion requires fresh evidence from all applicable checks:

1. `npm run lint`
2. `npm run build`
3. Inspect the build output for prerender warnings because the prerender script can continue after snapshot failures.
4. Confirm `dist/index.html` contains meaningful homepage copy.
5. Confirm representative generated routes contain their page content and metadata.
6. Inspect English and Arabic at desktop and mobile widths.
7. Exercise navigation, language switching, audit CTA, WhatsApp CTA, evidence image expansion, pricing action, FAQ, and booking fallback.
8. Inspect at native 1x rendering for small-type legibility and clipping.
9. Confirm reduced-motion behavior and visible keyboard focus.
10. Review `git diff` and `git status` to ensure only intended files changed and the user’s untracked `AGENTS.md` remains preserved.

## Out of Scope

- Fabricating or rewriting customer testimonials without attributable source material.
- Adding revenue, lead, or ranking guarantees.
- Rebuilding the backend lead pipeline.
- Migrating to locale-specific URLs.
- Changing the deployment provider.
- Copying Showcase boot screens, mascot/audio, or unrelated portfolio assets.
