import type { DitherType, PatternSource } from "@/components/DitherShader";

/*
  Pinned presets. Call sites name a profile; they never pass loose numbers.

  Retuning a field mid-scroll makes the dither visibly break apart and re-form,
  and a page whose texture is different every few seconds has no texture at all.
  Nothing here cycles, randomises per refresh, or auto-scales resolution.

  Three sources are compiled into DitherShader — `warp`, `nebulaVeil` and
  `ridges` — and every profile below picks one of those, separated by cell
  size, scale and speed.
*/
export type FieldProfileName = "hero" | "band" | "portal" | "quiet";

export type FieldProfile = {
  source: PatternSource;
  dither: DitherType;
  /** DitherShader calls this `size`; it is the dither cell edge in device pixels. */
  cellSize: number;
  scale: number;
  speed: number;
  contrast: number;
  balance: number;
  rotation: number;
};

export const fieldProfiles: Record<FieldProfileName, FieldProfile> = {
  /*
    Homepage hero, taken from the showcase HomeHero's own `ridges` preset rather
    than from its fieldProfiles — the hero component tunes its field separately.

    The high contrast paired with a strongly negative balance is the whole trick:
    it renders mostly BLACK with sparse bright filaments, instead of the dense
    even coverage a middling contrast gives. That is why this field needs no scrim
    and can run full-bleed straight under the message column — there is almost
    nothing there to compete with the type. Lowering the contrast or lifting the
    balance fills the gaps in and the hero turns into a wash.
  */
  hero: { source: "ridges", dither: "4x4", cellSize: 1, scale: 3.3, speed: 1, contrast: 1.88, balance: -0.48, rotation: 0 },

  // Offer bands. warp rotated ninety degrees turns its horizontal bands into
  // vertical tongues, which reads as a band rather than as wallpaper.
  band: { source: "warp", dither: "4x4", cellSize: 2, scale: 2.0, speed: 1.0, contrast: 1.15, balance: 0.06, rotation: 90 },

  // The loudest cards — the ones a visitor is meant to click. Faster and denser
  // than `band` so the panel reads as active rather than as background.
  portal: { source: "warp", dither: "4x4", cellSize: 2, scale: 2.6, speed: 1.47, contrast: 1.35, balance: -0.2, rotation: 0 },

  // Everything else. Deliberately near the floor of visible: this sits behind
  // body copy, and at higher contrast the cells win against small type, which is
  // the failure this system keeps relearning. Bigger cells read calmer than fine
  // ones at the same coverage.
  quiet: { source: "warp", dither: "4x4", cellSize: 3, scale: 3.6, speed: 0.18, contrast: 1.08, balance: -0.44, rotation: 0 },
};
