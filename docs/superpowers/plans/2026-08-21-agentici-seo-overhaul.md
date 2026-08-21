# ConstantSEO Search Signal Field Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing generic AI-agency presentation with the approved Search Signal Field identity across the complete ConstantSEO site while preserving bilingual content, routes, and verifiable SEO output.

**Architecture:** Establish a shared editorial design foundation and testable signal model first, then rebuild the homepage around attributed evidence, converge inner pages on shared page-shell primitives, and repair the homepage prerender contract. New behavior gets Vitest coverage before implementation; CSS, font loading, asset copying, and configuration use build and browser verification because they are configuration or presentation artifacts rather than independently testable business logic.

**Tech Stack:** React 18, TypeScript 5, Vite 5, Tailwind CSS 3, Framer Motion 12, React Router 6, React Helmet Async, Vitest, Testing Library, Puppeteer.

**Spec:** `docs/superpowers/specs/2026-08-21-agentici-seo-overhaul-design.md`

## Global Constraints

- Preserve every existing route and keep the catch-all route last.
- Every new user-facing string must have both English and Arabic translations.
- Use Anton for display, Inter Tight for body/UI, Instrument Serif for restrained emphasis, and a legible Arabic family for Arabic content.
- Use ground `#030500`, raised `#0A0F04`, ink `#EDF2E4`, muted `#8C9880`, line `#2B3720`, signal `#C7FF38`, evidence blue `#4285F4`, and evidence violet `#673AB7`.
- Signal lime is reserved for actions, focus, active state, and one-off emphasis.
- Use square corners, one-pixel rules, and ruled grids; do not add rounded marketing cards, glass effects, or generic gradient blobs.
- Treat the Mufakkir screenshot as attributed project evidence, not a testimonial or agency-wide promise.
- Do not claim revenue, leads, guaranteed rankings, monthly traffic, or universal outcomes.
- Respect `prefers-reduced-motion`, keyboard focus, English/Arabic layouts, and mobile composition.
- Remove the global overflow clipping rule and clip only intentional visual containers.
- Preserve the untracked `AGENTS.md` and unrelated user work.
- Add `mcp.json` to `.gitignore`.
- Do not edit shadcn files under `src/components/ui/` directly.
- Do not push or deploy.

---

### Task 1: Design Foundation, Test Harness, and Search Signal Engine

**Files:**
- Modify: `.gitignore`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `index.html`
- Modify: `vite.config.ts`
- Modify: `tailwind.config.ts`
- Modify: `src/index.css`
- Modify: `src/App.css`
- Create: `src/components/marketing/primitives.tsx`
- Create: `src/components/marketing/searchSignalModel.ts`
- Create: `src/components/marketing/searchSignalModel.test.ts`
- Create: `src/components/marketing/SearchSignalField.tsx`
- Create: `src/test/setup.ts`

**Interfaces:**
- Produces: `SectionShell`, `Eyebrow`, `DisplayTitle`, `Lede`, `RuledGrid`, `SignalPanel`, `CornerTicks`, `PrimaryCTA`, and `SecondaryCTA` application primitives.
- Produces: `buildSignalSeries(seed?: number, count?: number): SignalPoint[]`, where `SignalPoint` is `{ x: number; clicks: number; impressions: number }` and every value is normalized to `0..1`.
- Produces: `<SearchSignalField className?: string />`, which uses the deterministic model, renders an SVG fallback-first chart, and disables animated drawing under reduced motion.
- Consumers: Tasks 2 and 3 use the primitives and `SearchSignalField` without modifying their files.

- [ ] **Step 1: Add the failing signal-model tests and test setup**

Add Vitest and Testing Library configuration through `vite.config.ts` or a dedicated `vitest.config.ts`, plus this behavioral coverage:

```ts
import { describe, expect, it } from "vitest";
import { buildSignalSeries } from "./searchSignalModel";

describe("buildSignalSeries", () => {
  it("returns a deterministic normalized compound-growth series", () => {
    const first = buildSignalSeries(17, 24);
    const second = buildSignalSeries(17, 24);

    expect(first).toEqual(second);
    expect(first).toHaveLength(24);
    expect(first.every((point) =>
      point.x >= 0 && point.x <= 1 &&
      point.clicks >= 0 && point.clicks <= 1 &&
      point.impressions >= 0 && point.impressions <= 1
    )).toBe(true);
    expect(first.at(-1)!.clicks).toBeGreaterThan(first[0].clicks);
    expect(first.at(-1)!.impressions).toBeGreaterThan(first[0].impressions);
  });

  it("keeps impressions at or above clicks for every point", () => {
    expect(buildSignalSeries(4, 32).every((point) => point.impressions >= point.clicks)).toBe(true);
  });
});
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm run test -- src/components/marketing/searchSignalModel.test.ts`

Expected: FAIL because `searchSignalModel.ts` and `buildSignalSeries` do not exist.

- [ ] **Step 3: Implement the deterministic model and SVG field**

Implement a small seeded pseudo-random generator, a rising nonlinear base curve, and bounded noise. The SVG consumes the normalized points to draw impressions and clicks polylines, a ruled grid, query markers, source labels, and a static accessible title. Animation may reveal line length but must not change the data.

`SearchSignalField` must render meaningful SVG without JavaScript animation and use `useReducedMotion()` to skip animated path transitions.

- [ ] **Step 4: Build the shared design foundation**

Load Anton, Instrument Serif, Inter Tight, and Noto Kufi Arabic in `index.html`. Map the exact palette and font roles in Tailwind and CSS variables. Replace legacy body colors, radii, glow utilities, scanline defaults, and the global `* { overflow: hidden }` rule. Add visible focus, selection, narrow scrollbar, and global reduced-motion rules.

Add `mcp.json` to `.gitignore`. Do not stage `AGENTS.md`.

- [ ] **Step 5: Run focused tests and build validation**

Run:

```powershell
npm run test -- src/components/marketing/searchSignalModel.test.ts
npm run build:dev
```

Expected: signal tests PASS; development build exits 0.

- [ ] **Step 6: Commit Task 1**

Stage only the files listed in this task and commit as `feat: establish ConstantSEO search signal system`.

---

### Task 2: Homepage, Navigation, and Attributed Mufakkir Evidence

**Files:**
- Modify: `src/pages/Index.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/HeroSection.tsx`
- Modify: `src/components/ClientLogos.tsx`
- Modify: `src/components/ProblemSolution.tsx`
- Modify: `src/components/ServicesGrid.tsx`
- Modify: `src/components/HowItWorks.tsx`
- Modify: `src/components/CaseStudiesSection.tsx`
- Modify: `src/components/PricingSection.tsx`
- Modify: `src/components/FAQSection.tsx`
- Modify: `src/components/ZCalBookingSection.tsx`
- Modify: `src/components/CTASection.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/WhatsAppButton.tsx`
- Modify: `src/i18n/translations.ts`
- Create: `src/components/marketing/MufakkirEvidence.tsx`
- Create: `src/components/marketing/MufakkirEvidence.test.tsx`
- Create: `public/proof/mufakkir-search-console-12-months.png`

**Interfaces:**
- Consumes: all primitives and `SearchSignalField` from Task 1.
- Produces: `<MufakkirEvidence />`, reading the existing language context and rendering the exact four source metrics plus screenshot access.
- Produces: a homepage section order of navigation, hero, capability coverage, visibility system, services, Mufakkir evidence, methodology/work, pricing, FAQ, booking, final CTA, and footer.
- Consumers: Task 5 exercises these elements using their visible labels and semantic roles.

- [ ] **Step 1: Add the failing evidence test**

Render `MufakkirEvidence` inside `LanguageProvider` and assert observable evidence behavior:

```tsx
expect(screen.getByRole("region", { name: /mufakkir organic search performance/i })).toBeVisible();
expect(screen.getByText("1.74K")).toBeVisible();
expect(screen.getByText("29K")).toBeVisible();
expect(screen.getByText("6%")).toBeVisible();
expect(screen.getByText("8.4")).toBeVisible();
expect(screen.getByText(/Google Search Console/i)).toBeVisible();
expect(screen.getByRole("link", { name: /view source screenshot/i })).toHaveAttribute(
  "href",
  "/proof/mufakkir-search-console-12-months.png",
);
```

The test catches removal or misattribution of the supplied evidence, not incidental markup.

- [ ] **Step 2: Run the evidence test and verify RED**

Run: `npm run test -- src/components/marketing/MufakkirEvidence.test.tsx`

Expected: FAIL because `MufakkirEvidence.tsx` does not exist.

- [ ] **Step 3: Copy and implement the attributed evidence**

Copy `C:\Users\Ahmad\AppData\Local\Temp\codex-clipboard-eb805485-1134-4ef0-a437-537abddff496.png` to `public/proof/mufakkir-search-console-12-months.png` without altering the source. Implement the exact English statement from the spec and an accurate Arabic translation. Present the four values as source-aware evidence metrics and provide a direct large-image link.

- [ ] **Step 4: Recompose the homepage and global controls**

Use the approved Search Signal Field hero and editorial section order. Replace the “client logos” marquee with capability coverage. Relabel methodologies as methods, not customers. Remove unverified `#1 in 24 hours` and similar proof claims from homepage presentation. Preserve audit form routing, WhatsApp behavior, pricing actions, FAQ semantics, language toggle, and booking functionality.

Navbar must be keyboard navigable, compact, square, responsive, and RTL aware. Floating WhatsApp must use the signal system without covering mobile controls.

- [ ] **Step 5: Run focused tests, lint, and development build**

Run:

```powershell
npm run test -- src/components/marketing/MufakkirEvidence.test.tsx
npm run lint
npm run build:dev
```

Expected: test PASS; lint and build exit 0.

- [ ] **Step 6: Commit Task 2**

Stage only Task 2 files and commit as `feat: rebuild ConstantSEO homepage around verified proof`.

---

### Task 3: Inner-Page Visual Convergence

**Files:**
- Create: `src/components/marketing/PageHero.tsx`
- Create: `src/components/marketing/PageHero.test.tsx`
- Modify: `src/pages/Services.tsx`
- Modify: `src/pages/ServiceDetail.tsx`
- Modify: `src/pages/CaseStudies.tsx`
- Modify: `src/pages/CaseStudyDetail.tsx`
- Modify: `src/pages/Pricing.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Contact.tsx`
- Modify: `src/pages/Audit.tsx`
- Modify: `src/pages/Blog.tsx`
- Modify: `src/pages/BlogPost.tsx`
- Modify: `src/pages/Tools.tsx`
- Modify: `src/pages/ToolDetail.tsx`
- Modify: `src/pages/CityLandingPage.tsx`
- Modify: `src/pages/IndustryLandingPage.tsx`
- Modify: `src/pages/PrivacyPolicy.tsx`
- Modify: `src/pages/TermsOfService.tsx`
- Modify: `src/pages/NotFound.tsx`

**Interfaces:**
- Consumes: Task 1 primitives and existing `SEO` component.
- Produces: `<PageHero eyebrow: string; title: ReactNode; lede?: string; actions?: ReactNode; meta?: ReactNode />` with semantic heading output, optional metadata, RTL-safe composition, and no embedded route knowledge.
- Produces: visually consistent inner-page templates without changing route data contracts.
- Consumers: city, industry, service, blog, tool, and legal pages all use the shared page language.

- [ ] **Step 1: Add the failing PageHero test**

```tsx
render(<PageHero eyebrow="Local search" title="SEO in Dubai" lede="Market coverage." />);
expect(screen.getByRole("heading", { level: 1, name: "SEO in Dubai" })).toBeVisible();
expect(screen.getByText("Local search")).toBeVisible();
expect(screen.getByText("Market coverage.")).toBeVisible();
```

Add a second test that passes Arabic strings inside a `dir="rtl"` wrapper and confirms the hero does not override direction.

- [ ] **Step 2: Run the PageHero test and verify RED**

Run: `npm run test -- src/components/marketing/PageHero.test.tsx`

Expected: FAIL because `PageHero.tsx` does not exist.

- [ ] **Step 3: Implement PageHero and converge route templates**

Implement the shared semantic header. Refactor each listed page to use the new typography, ruled panels, sharp controls, section rhythm, and evidence discipline while preserving its data lookup, SEO metadata, forms, dynamic slugs, and language behavior.

Do not rewrite all page copy. Remove or soften unsupported result claims encountered in the direct edit cluster. Maintain current market and pricing data unless the repository already supplies a more authoritative value.

- [ ] **Step 4: Run focused tests, lint, and development build**

Run:

```powershell
npm run test -- src/components/marketing/PageHero.test.tsx
npm run lint
npm run build:dev
```

Expected: test PASS; lint and build exit 0.

- [ ] **Step 5: Commit Task 3**

Stage only Task 3 files and commit as `feat: converge ConstantSEO inner pages`.

---

### Task 4: Homepage Prerender Contract and Static SEO Verification

**Files:**
- Modify: `scripts/routes.mjs`
- Modify: `scripts/generate-static-pages.mjs`
- Modify: `scripts/prerender.mjs`
- Create: `scripts/routes.test.mjs`
- Create: `scripts/verify-static-output.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: a route registry that includes `/` exactly once and continues to expose every existing route.
- Produces: `npm run verify:static`, which exits nonzero when `dist/index.html` lacks the real homepage heading or when representative generated pages lack rendered content and metadata.
- Consumers: Task 5 uses `npm run build` followed by `npm run verify:static` as completion evidence.

- [ ] **Step 1: Add the failing route-registry test**

Use Node’s built-in test runner against the real exported route registry:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { routes } from "./routes.mjs";

test("the prerender registry includes the homepage exactly once", () => {
  assert.equal(routes.filter((route) => route.path === "/").length, 1);
});
```

Adapt the property access only if the existing route export uses strings rather than objects; keep the assertion on the real exported registry.

- [ ] **Step 2: Run the route test and verify RED**

Run: `node --test scripts/routes.test.mjs`

Expected: FAIL because `/` is absent from the route registry.

- [ ] **Step 3: Repair the route registry and static verification**

Add `/` exactly once. Ensure both generation stages treat the root path correctly and do not accidentally create a nested root file. Create `verify-static-output.mjs` to parse completed build files and assert consumer-visible results: nonempty rendered root content, expected homepage heading text, canonical/meta presence, and representative service/city/tool content.

- [ ] **Step 4: Run registry, production build, and output verification**

Run:

```powershell
node --test scripts/routes.test.mjs
npm run build
npm run verify:static
```

Expected: route test PASS; production build exits 0; verification exits 0. Inspect the build log and treat any prerender snapshot failure as a failure even if the script continues.

- [ ] **Step 5: Commit Task 4**

Stage only Task 4 files and commit as `fix: prerender the ConstantSEO homepage`.

---

### Task 5: Browser Verification, Accessibility Review, and Visual Fix Round

**Files:**
- Modify only files directly responsible for verified defects found in this task.
- Create: `artifacts/` screenshots only if the directory is already ignored; otherwise store screenshots outside the repository.

**Interfaces:**
- Consumes: the completed site from Tasks 1 through 4.
- Produces: verified English and Arabic desktop/mobile behavior and a concise defect log tied to fixes.

- [ ] **Step 1: Start the production preview and inspect the homepage**

Run `npm run preview -- --host 127.0.0.1 --port 4173`. Inspect at approximately 1440x1000 and 390x844 in English and Arabic.

Verify:

- Hero composition and legibility
- Exact Mufakkir metrics and source link
- Navigation and mobile menu
- Language toggle and RTL reflow
- Audit and WhatsApp actions
- Services, pricing, FAQ, booking fallback, and footer
- No horizontal overflow, clipped focus, or covered controls
- Native 1x small-label rendering

- [ ] **Step 2: Inspect representative inner routes**

Inspect at minimum `/services`, one `/services/:slug`, `/case-studies`, `/pricing`, `/audit`, `/tools`, one `/tools/:slug`, one city page, one industry page, one blog post, and `/contact`.

- [ ] **Step 3: Verify keyboard and reduced-motion behavior**

Navigate the header, language control, primary CTA, evidence link, pricing action, FAQ, and footer using the keyboard. Emulate reduced motion and confirm the signal field remains legible without animated drawing.

- [ ] **Step 4: Fix verified defects with regression-first discipline**

For behavioral defects, add a failing focused test before the fix. For pure CSS layout defects, capture the failing viewport and document the exact overflow or clipping symptom before applying the smallest responsible style change. Re-run the affected test or viewport after each fix.

- [ ] **Step 5: Run the complete verification gate**

Run fresh:

```powershell
npm run test
npm run lint
npm run build
npm run verify:static
git diff --check
git status --short
```

Expected: all tests PASS; lint, build, static verification, and diff check exit 0; only intended files and the preserved untracked `AGENTS.md` appear in status.

- [ ] **Step 6: Commit verified fixes**

If Task 5 changed source files, commit them as `fix: polish responsive ConstantSEO experience`. Do not commit transient screenshots or `AGENTS.md`.
