# Homepage Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Calendly booking section, featured projects carousel, phone mockup component, and collapsible vault to the Constant Labs homepage.

**Architecture:** Three new components (CalendlySection, FeaturedCarousel, PhoneMockup) inserted into Index.tsx. Calendly uses react-calendly's InlineWidget with dark theming. Carousel uses the existing shadcn carousel component backed by embla-carousel-react. Phone mockup is pure CSS. The existing vault and client deployments sections are wrapped in a collapsible toggle.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Framer Motion, embla-carousel-react, embla-carousel-autoplay, react-calendly

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install npm packages**

```bash
cd D:/Apps/constant-labs-showcase && npm install react-calendly embla-carousel-react embla-carousel-autoplay
```

- [ ] **Step 2: Verify installation**

```bash
cd D:/Apps/constant-labs-showcase && node -e "require('react-calendly'); require('embla-carousel-react'); require('embla-carousel-autoplay'); console.log('All packages OK')"
```

Expected: "All packages OK"

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add react-calendly, embla-carousel-react, embla-carousel-autoplay"
```

---

### Task 2: Add Translation Keys

**Files:**
- Modify: `src/i18n/translations.ts:141-146` (vault section) and end of file

- [ ] **Step 1: Add new translation keys**

Add these entries to the `translations` object in `src/i18n/translations.ts`, after the existing vault keys (around line 145):

```typescript
  // ─── Calendly / Booking ────────────────────────────────────────
  "calendly.title": { en: "[BOOK_A_CALL]", ar: "[احجز مكالمة]" },
  "calendly.subtitle": {
    en: "// Schedule a free 30-minute consultation to discuss your project — no strings attached.",
    ar: "// احجز استشارة مجانية لمدة 30 دقيقة لمناقشة مشروعك — بدون أي التزامات."
  },
  "calendly.free": { en: "100% FREE — NO OBLIGATIONS", ar: "مجانية 100% — بدون التزامات" },

  // ─── Featured Work ─────────────────────────────────────────────
  "featured.title": { en: "[FEATURED_WORK]", ar: "[أعمال مميزة]" },
  "featured.subtitle": { en: "// Our best projects and client work", ar: "// أفضل مشاريعنا وأعمال عملائنا" },

  // ─── Vault Toggle ──────────────────────────────────────────────
  "vault.viewAll": { en: "[VIEW_ALL_PROJECTS]", ar: "[عرض جميع المشاريع]" },
  "vault.hide": { en: "[HIDE_PROJECTS]", ar: "[إخفاء المشاريع]" },
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
cd D:/Apps/constant-labs-showcase && npx tsc --noEmit --pretty 2>&1 | head -20
```

Expected: No errors (or only pre-existing ones)

- [ ] **Step 3: Commit**

```bash
git add src/i18n/translations.ts
git commit -m "feat: add translation keys for calendly, featured work, and vault toggle"
```

---

### Task 3: Update Project Data Model

**Files:**
- Modify: `src/data/projectsData.ts:150-163` (Project interface)

- [ ] **Step 1: Add screenshots field to Project interface**

In `src/data/projectsData.ts`, add `screenshots?: string[]` to the `Project` interface after the `imagePosition` field (line 161):

```typescript
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
```

- [ ] **Step 2: Add screenshots arrays to Android app projects**

For `ramadan-tracker` (around line 350), add after `imagePosition: "top"`:
```typescript
    screenshots: [ramadanTrackerImg],
```

For `trip-bill-splitter` (around line 368), add after `imagePosition: "top"`:
```typescript
    screenshots: [tripBillSplitterImg],
```

- [ ] **Step 3: Verify no TypeScript errors**

```bash
cd D:/Apps/constant-labs-showcase && npx tsc --noEmit --pretty 2>&1 | head -20
```

- [ ] **Step 4: Commit**

```bash
git add src/data/projectsData.ts
git commit -m "feat: add screenshots field to Project interface for phone mockup support"
```

---

### Task 4: Create PhoneMockup Component

**Files:**
- Create: `src/components/PhoneMockup.tsx`

- [ ] **Step 1: Create the PhoneMockup component**

Create `src/components/PhoneMockup.tsx`:

```tsx
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  screenshots: string[];
  alt: string;
  className?: string;
}

export function PhoneMockup({ screenshots, alt, className }: PhoneMockupProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      {/* Phone frame */}
      <div className="relative w-[180px] md:w-[220px] mx-auto">
        {/* Outer bezel */}
        <div className="relative border-[3px] border-foreground/30 rounded-[28px] bg-background overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-background rounded-b-xl z-20 border-b-[2px] border-x-[2px] border-foreground/20" />

          {/* Screen area with 9:19.5 aspect ratio */}
          <div className="relative w-full" style={{ aspectRatio: "9 / 19.5" }}>
            <img
              src={screenshots[current]}
              alt={`${alt} screenshot ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }}
            />
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-foreground/20 rounded-full z-20" />
        </div>
      </div>

      {/* Dot indicators (only if multiple screenshots) */}
      {screenshots.length > 1 && (
        <div className="flex items-center gap-2">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all",
                idx === current
                  ? "bg-cl-cyan w-4"
                  : "bg-foreground/20 hover:bg-foreground/40"
              )}
              aria-label={`Screenshot ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
cd D:/Apps/constant-labs-showcase && npx tsc --noEmit --pretty 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/components/PhoneMockup.tsx
git commit -m "feat: add PhoneMockup component with CSS phone frame and dot navigation"
```

---

### Task 5: Create FeaturedCarousel Component

**Files:**
- Create: `src/components/FeaturedCarousel.tsx`

- [ ] **Step 1: Create the FeaturedCarousel component**

Create `src/components/FeaturedCarousel.tsx`:

```tsx
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { softwareProjects, clientProjects } from "@/data/projectsData";
import type { Project } from "@/data/projectsData";
import { useLanguage } from "@/i18n/LanguageContext";
import { PhoneMockup } from "@/components/PhoneMockup";

const featuredProjects: Project[] = [
  ...softwareProjects,
  ...clientProjects,
].filter(
  (p) =>
    p.status === "live" &&
    !p.internalRoute &&
    !p.link.includes("github.com")
);

export function FeaturedCarousel() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", direction: isAr ? "rtl" : "ltr" },
    [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const handleCardClick = (project: Project) => {
    if (project.internalRoute) {
      navigate(project.internalRoute);
    } else {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="mb-16">
      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
          {t("featured.title")}
        </h2>
        <p className="text-muted-foreground font-tech text-sm tracking-wide uppercase">
          {t("featured.subtitle")}
        </p>
      </div>

      {/* Carousel */}
      <div className="relative group">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-4">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCardClick(project)}
                  className="relative border border-foreground/20 bg-foreground/[0.02] hover:bg-foreground/[0.05] backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] h-full flex flex-col"
                >
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-foreground/20 pointer-events-none z-10" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-foreground/20 pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-foreground/20 pointer-events-none z-10" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-foreground/20 pointer-events-none z-10" />

                  {/* Image or Phone Mockup */}
                  <div className="relative h-48 md:h-56 overflow-hidden flex items-center justify-center bg-background/50">
                    {project.screenshots ? (
                      <PhoneMockup
                        screenshots={project.screenshots}
                        alt={project.title}
                        className="py-2"
                      />
                    ) : (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: project.imagePosition || "center" }}
                          loading="lazy"
                        />
                        {/* Scanline overlay */}
                        <div
                          className="absolute inset-0 pointer-events-none opacity-[0.03]"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                          }}
                        />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm md:text-base font-bold font-tech uppercase tracking-wider">
                        {project.title}
                      </h3>
                      <span
                        className={cn(
                          "text-[8px] font-tech uppercase tracking-wider px-2 py-0.5 border",
                          project.status === "live"
                            ? "text-emerald-400 border-emerald-400/30"
                            : project.status === "beta"
                            ? "text-amber-400 border-amber-400/30"
                            : "text-blue-400 border-blue-400/30"
                        )}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-auto mb-3">
                      {project.tech.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] font-tech text-foreground/40 uppercase tracking-wider"
                        >
                          // {tag}
                        </span>
                      ))}
                    </div>

                    {/* Visit link */}
                    <div className="flex items-center gap-1 text-cl-cyan text-[10px] font-tech uppercase tracking-wider">
                      <ExternalLink className="w-3 h-3" />
                      <span>{isAr ? "زيارة" : "VISIT"}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all",
              idx === selectedIndex
                ? "bg-cl-cyan w-4"
                : "bg-foreground/20 hover:bg-foreground/40"
            )}
            aria-label={`Go to slide group ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
cd D:/Apps/constant-labs-showcase && npx tsc --noEmit --pretty 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/components/FeaturedCarousel.tsx
git commit -m "feat: add FeaturedCarousel component with Embla carousel and autoplay"
```

---

### Task 6: Create CalendlySection Component

**Files:**
- Create: `src/components/CalendlySection.tsx`

- [ ] **Step 1: Create the CalendlySection component**

Create `src/components/CalendlySection.tsx`:

```tsx
import { useRef } from "react";
import { useInView } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function CalendlySection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <section
      id="book"
      ref={ref}
      className="relative z-10 py-24 border-t-2 border-foreground/10 overflow-hidden"
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cl-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cl-green/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-cl-cyan" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
              {t("calendly.title")}
            </h2>
          </div>
          <p className="text-muted-foreground font-tech text-sm tracking-wide uppercase mb-4">
            {t("calendly.subtitle")}
          </p>
          <span className="inline-block text-[10px] font-tech text-cl-green uppercase tracking-widest border border-cl-green/30 px-3 py-1">
            {t("calendly.free")}
          </span>
        </div>

        {/* Calendly embed container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-foreground/20 pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/20 pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-foreground/20 pointer-events-none z-10" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-foreground/20 pointer-events-none z-10" />

          <div className="border border-foreground/20 bg-foreground/[0.02] backdrop-blur-sm overflow-hidden">
            {isInView ? (
              <InlineWidget
                url="https://calendly.com/akhmad6093/30min"
                styles={{ height: "650px", minWidth: "280px" }}
                pageSettings={{
                  backgroundColor: "0d0f14",
                  textColor: "e8eaf0",
                  primaryColor: "2e8b7a",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                }}
              />
            ) : (
              <div className="h-[650px] flex items-center justify-center">
                <div className="flex items-center gap-2 text-foreground/40">
                  <div className="w-2 h-2 bg-cl-cyan animate-pulse rounded-full" />
                  <span className="text-xs font-tech tracking-wider uppercase">
                    Loading scheduler...
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
cd D:/Apps/constant-labs-showcase && npx tsc --noEmit --pretty 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/components/CalendlySection.tsx
git commit -m "feat: add CalendlySection with dark-themed inline Calendly embed and lazy loading"
```

---

### Task 7: Integrate Components into Index.tsx

**Files:**
- Modify: `src/pages/Index.tsx`

This is the main integration task. Three changes to Index.tsx:

1. Add CalendlySection after Services section (after line 461)
2. Add FeaturedCarousel at top of Vault section and wrap vault+deployments in collapsible toggle
3. Add state for vault visibility

- [ ] **Step 1: Add imports at top of Index.tsx**

Add these imports after the existing imports (around line 14, after the `cn` import):

```typescript
import { CalendlySection } from "@/components/CalendlySection";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
```

- [ ] **Step 2: Add vault visibility state**

In the component body (around line 39, after the `selectedProject` state), add:

```typescript
const [showAllProjects, setShowAllProjects] = useState(false);
```

- [ ] **Step 3: Insert CalendlySection after Services section**

After the closing `</section>` of the Services section (line 461), before the Mission section comment on line 463, insert:

```tsx
      {/* BOOK A CALL */}
      <CalendlySection />
```

- [ ] **Step 4: Add FeaturedCarousel and collapsible vault**

Replace the Vault section (lines 580-764) and Client Deployments section (lines 766-881) with:

The vault `<section>` should now contain:
1. The existing background effects and container
2. The `<FeaturedCarousel />` component (replacing the vault heading)
3. A "VIEW ALL PROJECTS" toggle button
4. The existing vault grids and client deployments wrapped in an `AnimatePresence` + `motion.div` that shows/hides based on `showAllProjects`

Specifically, in the vault section (`<section id="vault">`):
- Replace the vault heading (lines 587-594) with `<FeaturedCarousel />`
- After FeaturedCarousel, add the toggle button:

```tsx
            {/* Toggle button */}
            <div className="flex justify-center mb-12">
              <button
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="border-2 border-foreground/30 text-foreground hover:border-cl-cyan hover:text-cl-cyan px-6 py-3 font-tech text-sm tracking-wider uppercase transition-all"
              >
                {showAllProjects ? t("vault.hide") : t("vault.viewAll")}
              </button>
            </div>
```

- Wrap ALL the existing vault content (SOFTWARE SECTION div through HARDWARE SECTION div, lines 597-762) AND the entire Client Deployments section content in:

```tsx
            <AnimatePresence>
              {showAllProjects && (
                <motion.div
                  initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                  exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* ... existing SOFTWARE + HARDWARE grids ... */}
                  {/* ... existing CLIENT DEPLOYMENTS section content ... */}
                </motion.div>
              )}
            </AnimatePresence>
```

- The Client Deployments section should be merged INTO the vault section (remove the separate `<section id="deployments">` wrapper — move only its inner content into the motion.div). Keep its heading and category grids.

- [ ] **Step 5: Verify no TypeScript errors**

```bash
cd D:/Apps/constant-labs-showcase && npx tsc --noEmit --pretty 2>&1 | head -20
```

- [ ] **Step 6: Run dev server and visually verify**

```bash
cd D:/Apps/constant-labs-showcase && npm run dev
```

Check in browser:
- CalendlySection appears after Services, before Mission
- Calendly embed loads with dark theme when scrolled into view
- FeaturedCarousel shows at top of vault with swipeable cards
- Phone mockups appear for Ramadan Tracker and Trip Bill Splitter
- "VIEW ALL PROJECTS" button toggles vault visibility
- All sections render correctly on mobile width

- [ ] **Step 7: Run production build**

```bash
cd D:/Apps/constant-labs-showcase && npm run build
```

Expected: Build succeeds with no errors

- [ ] **Step 8: Commit**

```bash
git add src/pages/Index.tsx
git commit -m "feat: integrate Calendly booking, featured carousel, and collapsible vault into homepage"
```
