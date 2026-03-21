# Homepage Enhancements Design Spec

## Overview

Four enhancements to the Constant Labs homepage (Index.tsx):
1. Calendly inline booking section (free consultation CTA, themed dark)
2. Featured projects carousel with swipeable cards
3. Phone mockup frames for Android app screenshots
4. Collapsible full vault with "See More Projects" button

## 1. Calendly Booking Section

**Placement:** Immediately after the Services section, before the Mission section.

**Layout:**
- Full-width section matching existing cyberpunk styling
- Heading: "BOOK A FREE CONSULTATION"
- Subtitle emphasizing the consultation is completely free, no strings attached
- Calendly inline embed widget centered, max-width ~700px
- Styled container with existing corner decorations and border treatment

**Implementation:**
- Add `react-calendly` npm package for the `InlineWidget` component
- Calendly URL: `https://calendly.com/akhmad6093/30min`
- Embed height ~650px, responsive width
- Style the embed container with `border border-foreground/20`, corner decorations
- Add bilingual translations for heading/subtitle to `translations.ts`
- **Calendly iframe theming** via `pageSettings` prop to match dark aesthetic:
  ```tsx
  pageSettings={{
    backgroundColor: "0d0f14",    // match site background
    textColor: "e8eaf0",          // match site foreground
    primaryColor: "2e8b7a",       // cl-cyan approximate
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
  }}
  ```
- **Lazy loading:** Use Framer Motion's `useInView` hook to conditionally render the `InlineWidget` only when the section scrolls into viewport, avoiding loading Calendly's external script on initial page load.

**Mobile:** Full-width embed, slightly reduced height. Same styling.

## 2. Featured Projects Carousel

**Placement:** Top of the Vault section, replacing the immediate grid display.

**Data source:** Filter projects with explicit condition:
```
status === "live" && !internalRoute && !link.includes("github.com")
```

Expected featured projects: Mufakkir, Motargem, Sanaye, Paper to Product, Crescent Watch, Ramadan Tracker, Trip Bill Splitter, and all live client projects (FZN Dining, Cut in Half, Darwish Cafe, Variety Coffee, Delhi Darbar, TopWatches, Drive for Less, Parfum Central, GCC Dental, Be Healthy, First Way).

**Layout:**
- Section heading: "FEATURED WORK"
- Horizontal Embla carousel (using existing `src/components/ui/carousel.tsx`)
- Each slide is a larger project card (~350px wide on desktop, ~280px on mobile)
- Card contents: project image (full color, no grayscale), title, one-line description, tech tags, status badge, link button
- Navigation: left/right arrows on desktop, swipe on mobile
- Custom dot indicators built using Embla API's `scrollSnapList()` and `selectedScrollSnap()`
- Responsive slide sizing via CSS `flex-basis`: `basis-full md:basis-1/2 lg:basis-1/3` with Embla `align: "start"`

**Behavior:**
- Auto-advance every 5 seconds, pause on hover/touch (via `embla-carousel-autoplay` plugin)
- Loop enabled
- Drag/swipe enabled

## 3. Phone Mockup Component

**Purpose:** Display Android app screenshots (Ramadan Tracker, Trip Bill Splitter) inside a realistic phone frame.

**Component: `PhoneMockup.tsx`**
- Pure CSS phone frame: rounded rectangle with subtle bezel, notch at top, home indicator at bottom
- Dark frame color matching the cyberpunk theme
- Inner area displays screenshot images
- If multiple screenshots provided, inner carousel with dot navigation only (no drag) to avoid gesture conflicts with outer carousel
- Aspect ratio: standard mobile ~9:19.5

**Trigger condition:** The PhoneMockup renders when a project has a `screenshots` array present in its data. The presence of `screenshots` implies mobile app rendering — no separate `platform` field needed.

**Usage:**
- Used within the Featured Projects carousel for projects with `screenshots` array
- Initially each Android app has its single existing screenshot; structure supports adding more images later

**Data model change:** Add optional `screenshots: string[]` array to the project interface in `projectsData.ts`. When present, the phone mockup carousel uses this array. Falls back to the single `image` field wrapped in an array.

## 4. Collapsible Vault with "See More" Button

**Current behavior:** All projects displayed in categorized grids (vault + client deployments), always visible.

**New behavior:**
- Featured carousel shows top projects prominently
- Below the carousel: a "VIEW ALL PROJECTS" button (styled as cyberpunk button with border, tracking-wider, tech font)
- Clicking the button reveals **both** the full vault grid and client deployments section with smooth animation
- Animation approach: `AnimatePresence` with a wrapper `motion.div` animating `opacity` (0→1) and `clipPath` (inset from top→full). This is performant for large DOM subtrees — avoids height-based animation which would cause jank with 18+ project cards.
- Button text toggles to "HIDE PROJECTS" when expanded
- Default state: collapsed (only featured carousel visible)

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/CalendlySection.tsx` | Booking section with inline Calendly embed, lazy loaded |
| `src/components/FeaturedCarousel.tsx` | Featured projects horizontal carousel with dot indicators |
| `src/components/PhoneMockup.tsx` | CSS phone frame with optional inner dot-nav carousel |

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Add CalendlySection after services, replace vault top with FeaturedCarousel, wrap vault+deployments in collapsible toggle |
| `src/data/projectsData.ts` | Add `screenshots?: string[]` to Project interface, add field to Android projects |
| `src/i18n/translations.ts` | Add translations for new section headings and CTAs |
| `package.json` | Add dependencies (see below) |

## Dependencies to Add

- `react-calendly` — React wrapper for Calendly embed widgets
- `embla-carousel-react` — Required by existing carousel.tsx component (not currently installed)
- `embla-carousel-autoplay` — Auto-advance plugin for the featured carousel

## Translation Keys

```
calendly.title:    EN: "BOOK A FREE CONSULTATION"   AR: "احجز استشارة مجانية"
calendly.subtitle: EN: "Schedule a free 30-minute call to discuss your project — no strings attached."
                   AR: "احجز مكالمة مجانية لمدة 30 دقيقة لمناقشة مشروعك — بدون أي التزامات."
featured.title:    EN: "FEATURED WORK"               AR: "أعمال مميزة"
vault.viewAll:     EN: "VIEW ALL PROJECTS"            AR: "عرض جميع المشاريع"
vault.hide:        EN: "HIDE PROJECTS"                AR: "إخفاء المشاريع"
```

## Not In Scope

- White/light theme toggle (discussed, deferred to separate task)
- Additional screenshots beyond existing ones (user will provide later)
- Changes to the ProjectDetailModal
- Changes to routing or other pages

## Bilingual Support

All new user-facing text must have EN and AR translations added to `translations.ts`, following existing patterns. The Calendly embed itself is English-only (Calendly limitation).

## Design Constraints

- Maintain existing cyberpunk aesthetic: corner decorations, tech font, border treatments, dot grid backgrounds
- No border-radius (existing `--radius: 0rem` convention)
- Use existing color palette (cl-cyan, cl-purple, cl-amber, cl-green)
- Mobile-first responsive design
- Lazy load Calendly embed via `useInView` for performance
- Calendly iframe themed dark to match site aesthetic
