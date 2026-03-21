# Homepage Enhancements Design Spec

## Overview

Four enhancements to the Constant Labs homepage (Index.tsx):
1. Calendly inline booking section (free consultation CTA)
2. Featured projects carousel with swipeable cards
3. Phone mockup frames for Android app screenshots
4. Collapsible full vault with "See More Projects" button

## 1. Calendly Booking Section

**Placement:** Immediately after the Services section, before the Mission section.

**Layout:**
- Full-width section matching existing cyberpunk styling
- Heading: "BOOK A FREE CONSULTATION" (or bilingual equivalent)
- Subtitle emphasizing the consultation is completely free, no strings attached
- Calendly inline embed widget centered, max-width ~700px
- Styled container with existing corner decorations and border treatment

**Implementation:**
- Add `react-calendly` npm package for the `InlineWidget` component
- Calendly URL: `https://calendly.com/akhmad6093/30min`
- Embed height ~650px, responsive width
- Style the embed container with `border border-foreground/20`, corner decorations
- Add bilingual translations for heading/subtitle to `translations.ts`

**Mobile:** Full-width embed, slightly reduced height. Same styling.

## 2. Featured Projects Carousel

**Placement:** Top of the Vault section, replacing the immediate grid display.

**Data source:** Filter `softwareProjects` and `clientProjects` from `projectsData.ts` where `status === "live"` and project has an external link (not internal route, not GitHub repo page).

**Layout:**
- Section heading: "FEATURED WORK" or similar
- Horizontal Embla carousel (using existing `src/components/ui/carousel.tsx`)
- Each slide is a larger project card (~350px wide on desktop, ~280px on mobile)
- Card contents: project image (full color, no grayscale), title, one-line description, tech tags, status badge, link button
- Navigation: left/right arrows on desktop, swipe on mobile
- Dot indicators below carousel

**Behavior:**
- Auto-advance every 5 seconds, pause on hover/touch
- Loop enabled
- Drag/swipe enabled
- Responsive: 3 visible on desktop, 2 on tablet, 1 on mobile

## 3. Phone Mockup Component

**Purpose:** Display Android app screenshots (Ramadan Tracker, Trip Bill Splitter) inside a realistic phone frame.

**Component: `PhoneMockup.tsx`**
- Pure CSS phone frame: rounded rectangle with subtle bezel, notch at top, home indicator at bottom
- Dark frame color matching the cyberpunk theme
- Inner area displays screenshot images
- If multiple screenshots provided, inner Embla carousel for swiping through them
- Aspect ratio: standard mobile ~9:19.5

**Usage:**
- Used within the Featured Projects carousel and/or the Vault section for projects tagged as Android/mobile apps
- Initially each Android app has its single existing screenshot; structure supports adding more images later

**Data model change:** Add optional `screenshots: string[]` array to the project interface in `projectsData.ts`. When present, the phone mockup carousel uses this array. Falls back to the single `image` field.

## 4. Collapsible Vault with "See More" Button

**Current behavior:** All projects displayed in categorized grids, always visible.

**New behavior:**
- Featured carousel shows top projects prominently
- Below the carousel: a "VIEW ALL PROJECTS" button (styled as cyberpunk button with border, tracking-wider, tech font)
- Clicking the button reveals the full existing vault grid with smooth expand animation (Framer Motion `AnimatePresence` + height animation)
- Button text toggles to "HIDE PROJECTS" when expanded
- Default state: collapsed (only featured carousel visible)

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/CalendlySection.tsx` | Booking section with inline Calendly embed |
| `src/components/FeaturedCarousel.tsx` | Featured projects horizontal carousel |
| `src/components/PhoneMockup.tsx` | CSS phone frame with optional inner carousel |

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Add CalendlySection after services, replace vault top with FeaturedCarousel, add collapse toggle for full vault |
| `src/data/projectsData.ts` | Add `screenshots?: string[]` to Project interface, add field to Android projects |
| `src/i18n/translations.ts` | Add translations for new section headings and CTAs |
| `package.json` | Add `react-calendly` dependency |

## Dependencies to Add

- `react-calendly` — React wrapper for Calendly embed widgets

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
- Lazy load Calendly embed for performance
