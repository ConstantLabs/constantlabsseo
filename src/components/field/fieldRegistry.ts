import type { DitherType, PatternSource, PerformanceMode } from "@/components/DitherShader";

/*
  The site's fields, keyed by the section that hosts them.

  Before this file, each `FieldBand` call site hardcoded its own numbers
  inline (see HeroSection.tsx, ServicesGrid.tsx, CaseStudiesSection.tsx,
  CTASection.tsx as they stood before). That is fine for a page with one
  field, and it is exactly the drift risk fieldProfiles.ts already warns
  about once there is more than one: tuning "the services card" meant
  editing a literal buried in JSX, with no relationship to the same
  numbers on any other section.

  This registry is the single source of truth for every section's field,
  split into a `desktop` and a `mobile` variant so the two CAN diverge --
  but as of now none of them do: every mobile variant is a straight copy of
  its desktop twin, so a phone sees the same source, dither, cell and
  motion as a laptop. The earlier state (non-hero bands suppressed on
  mobile, and a hero running `ridges` instead of the tuned `nebulaVeil`)
  was suppression left over from the seed, not a decision -- see the
  WebGL2-context note in useNarrowViewport.ts for the cost that suppression
  was buying. The split stays in the shape so a section can go cheaper on a
  phone later without touching desktop; retune the mobile variant, do not
  re-derive it.

  Every value below was TRANSCRIBED from the four call sites as they
  rendered before this file existed -- this is a seed, not a redesign.
  Changing what ships means editing the numbers here (or tuning them live
  with the dev-only FieldTuner and pasting its "Copy as code" output back
  in), never re-deriving them.

  Same discipline as fieldProfiles.ts: nothing here may cycle, randomise
  per refresh, or auto-scale resolution, and none of this reaches
  production users -- see FieldTuner.tsx for the dev-only gate.
*/

export type SectionKey = "hero" | "services" | "caseStudies" | "cta";

export const SECTION_KEYS: SectionKey[] = ["hero", "services", "caseStudies", "cta"];

/** The twelve sources actually compiled into DitherShader. Nothing else is offerable. */
export const REGISTRY_SOURCES: PatternSource[] = [
  "warp",
  "nebulaVeil",
  "ridges",
  "lava",
  "sunCorona",
  "smokeDiag",
  "smoke",
  "aurora",
  "fluid",
  "plasma",
  "marble",
  "flame",
];
export const REGISTRY_DITHERS: DitherType[] = ["random", "2x2", "4x4", "8x8"];
export const REGISTRY_MODES: PerformanceMode[] = ["high", "balanced", "low"];

/**
 * Percentage insets that box a field inside its band.
 *
 * This is the better of the two ways to keep type readable, and the one the
 * reference hero uses: instead of darkening a full-bleed field until the words
 * survive it, stop the field before it ever reaches them. The copy then sits on
 * flat ground at full contrast and the field keeps its own.
 *
 * Logical, not physical — `start`/`end` flip under RTL.
 */
export type FieldBounds = {
  top?: string;
  bottom?: string;
  start?: string;
  end?: string;
  /**
   * Fixed field height, replacing `bottom`.
   *
   * Needed whenever the band is taller than the screen: a percentage `bottom` is a
   * percentage of the BAND, so on a tall stacked layout "bottom: 58%" is far below
   * the fold and the field runs straight over the copy. A viewport unit (`34svh`)
   * says what was actually meant.
   */
  height?: string;
  /** Raw CSS gradient. A long, gradual fade dissolves better than a short steep one. */
  mask?: string;
};

export type SectionFieldVariant = {
  /** `false` means this variant is not mounted at all -- not mounted and hidden. */
  enabled: boolean;
  source: PatternSource;
  dither: DitherType;
  /** DitherShader calls this `size`; it is the dither cell edge in device pixels. */
  cellSize: number;
  scale: number;
  speed: number;
  contrast: number;
  balance: number;
  rotation: number;
  /** 0 = bare field, 1 = flat ground. See FieldBandProps.scrim for the readability floor. */
  scrim: number;
  ink: string;
  /**
   * Render resolution, via DitherShader's resolutionScale():
   *   high     -> min(devicePixelRatio, 2)
   *   balanced -> min(devicePixelRatio, 1.25)   <- what the showcase pins to
   *   low      -> min(devicePixelRatio, 0.75)   <- below native, upscaled
   *
   * This is the single setting that decides how sharp the dither looks, and it
   * interacts with `cellSize`: a cellSize of 1 is the finest possible cell, and
   * rendering it below native throws that detail away again. Fine cells and a
   * low mode is the one combination never worth paying for.
   */
  performanceMode: PerformanceMode;
  /**
   * Frame cap. 30 is visibly steppy on slow-drifting texture; 60 is smooth.
   * Cheaper than it sounds — the shader is fill-rate bound, not frame bound.
   */
  targetFps: number;
  /**
   * Let the shader walk the resolution down on its own when it misses its frame
   * budget.
   *
   * **Keep this false.** It is seeded false on every variant, and the exposure in
   * the panel is for diagnosing a slow device, not for shipping.
   *
   * It was briefly turned on as a graceful-degradation net and immediately produced
   * a visible horizontal seam across the hero: it resizes the canvas mid-flight, so
   * the backing store stops matching the CSS box (measured 2030x1692 for a 1080x900
   * box at dpr 2 — a scale of 1.88 rather than the pinned 2.0) and the dither cell
   * grid shifts against the already-drawn content. A fixed dither grid cannot
   * survive a moving resolution.
   *
   * This is the same rule fieldProfiles.ts states for its own presets: nothing
   * cycles, randomises per refresh, or auto-scales resolution.
   */
  autoScaleResolution: boolean;
  /** Box the field instead of scrimming it full-bleed. Not edited by the panel. */
  bounds?: FieldBounds;
};

export type SectionFieldEntry = {
  desktop: SectionFieldVariant;
  mobile: SectionFieldVariant;
};

export const fieldRegistry: Record<SectionKey, SectionFieldEntry> = {
  /*
    Homepage hero (HeroSection.tsx). Field settings taken from fieldProfiles.hero;
    ink from the component's own FIELD_INK constant; scrim 0 both ways since the
    hero never scrims its field, it BOUNDS it instead.

    HeroSection selects desktop/mobile at its own 1023px layout breakpoint and
    feeds this live entry into the full-surface showcase renderer. Bounds remain
    in the registry for copy/export compatibility, but that renderer deliberately
    ignores them so a tuning session cannot reintroduce a cropped or masked seam.
  */
  hero: {
    /*
      Matches the seam-free showcase renderer on both viewport variants. Every
      visual value below remains live-editable through the development tuner.
    */
    desktop: {
      enabled: true,
      source: "nebulaVeil",
      dither: "4x4",
      cellSize: 1,
      scale: 1,
      speed: 0.84,
      contrast: 1.15,
      balance: 0.03,
      rotation: 51,
      scrim: 0.11,
      ink: "#A8702B",
      performanceMode: "high",
      targetFps: 60,
      autoScaleResolution: false,
      bounds: { start: "-5%", end: "30%", mask: "linear-gradient(to right, #000 60%, transparent 100%)" },
    },
    mobile: {
      enabled: true,
      source: "nebulaVeil",
      dither: "4x4",
      cellSize: 1,
      scale: 1,
      speed: 0.84,
      contrast: 1.15,
      balance: 0.03,
      rotation: 51,
      scrim: 0.11,
      ink: "#A8702B",
      performanceMode: "high",
      targetFps: 60,
      autoScaleResolution: false,
      bounds: { start: "-5%", end: "30%", mask: "linear-gradient(to right, #000 60%, transparent 100%)" },
    },
  },

  /*
    ServicesGrid.tsx, the featured "ai" card. Field settings from
    fieldProfiles.portal; ink left at FieldBand's own default (never overridden
    at the call site, so it is transcribed here rather than assumed). Mobile
    mirrors desktop exactly.
  */
  services: {
    /* Tuned in the panel. The 2x2 matrix is the notable one — a coarser Bayer cell
       than everything else on the page, which reads as a heavier weave inside a
       small card where a 4x4 went muddy. */
    desktop: {
      enabled: true,
      source: "flame",
      dither: "2x2",
      cellSize: 2,
      scale: 2.9,
      speed: 2.1,
      contrast: 1.05,
      balance: -0.14,
      rotation: 0,
      scrim: 0.51,
      ink: "#FFB35C",
      performanceMode: "high",
      targetFps: 60,
      autoScaleResolution: false,
    },
    mobile: {
      enabled: true,
      source: "flame",
      dither: "2x2",
      cellSize: 2,
      scale: 2.9,
      speed: 2.1,
      contrast: 1.05,
      balance: -0.14,
      rotation: 0,
      scrim: 0.51,
      ink: "#FFB35C",
      performanceMode: "high",
      targetFps: 60,
      autoScaleResolution: false,
    },
  },

  /*
    CaseStudiesSection.tsx, the methods band. Field settings from
    fieldProfiles.band. Mobile mirrors desktop exactly.
  */
  caseStudies: {
    /* Tuned in the panel: a bigger scale and a much higher contrast than the
       showcase's `band` preset, at balance 0 — denser vertical tongues behind a
       headline that has to stay the loudest thing in the frame. */
    desktop: {
      enabled: true,
      source: "warp",
      dither: "2x2",
      cellSize: 2,
      scale: 3.95,
      speed: 1.58,
      contrast: 1.79,
      balance: 0,
      rotation: 90,
      scrim: 0.68,
      ink: "#FFB35C",
      performanceMode: "high",
      targetFps: 60,
      autoScaleResolution: false,
    },
    mobile: {
      enabled: true,
      source: "warp",
      dither: "2x2",
      cellSize: 2,
      scale: 3.95,
      speed: 1.58,
      contrast: 1.79,
      balance: 0,
      rotation: 90,
      scrim: 0.68,
      ink: "#FFB35C",
      performanceMode: "high",
      targetFps: 60,
      autoScaleResolution: false,
    },
  },

  /*
    CTASection.tsx. Same `band` profile as `caseStudies`, at a heavier scrim
    (0.84) and its own `ground` override -- `ground` is not part of this
    registry (it is a ground-color override, not a "what field is this"
    setting), so CTASection keeps passing it directly.
  */
  cta: {
    desktop: {
      enabled: true,
      source: "warp",
      dither: "4x4",
      cellSize: 2,
      scale: 2.65,
      speed: 1.32,
      contrast: 2.12,
      balance: 0.11,
      rotation: 90,
      scrim: 0.84,
      ink: "#FFB35C",
      performanceMode: "high",
      targetFps: 60,
      autoScaleResolution: false,
    },
    mobile: {
      enabled: true,
      source: "warp",
      dither: "4x4",
      cellSize: 2,
      scale: 2.65,
      speed: 1.32,
      contrast: 2.12,
      balance: 0.11,
      rotation: 90,
      scrim: 0.84,
      ink: "#FFB35C",
      performanceMode: "high",
      targetFps: 60,
      autoScaleResolution: false,
    },
  },
};
