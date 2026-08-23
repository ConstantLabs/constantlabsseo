import { type ReactNode, useEffect, useRef, useState } from "react";
import { DitherShader } from "@/components/DitherShader";
import { cancelBoot, requestBoot } from "@/components/field/bootQueue";
import { fieldProfiles, type FieldProfileName } from "@/components/field/fieldProfiles";
import type { FieldBounds, SectionKey } from "@/components/field/fieldRegistry";
import { useSectionField } from "@/components/field/fieldRegistryStore";
import { useNarrowViewport } from "@/components/field/useNarrowViewport";
import { cn } from "@/lib/utils";

/*
  A dithered field with content sitting on top of it, and the only supported way
  those two things meet.

  Three layers, in order: the field, an opaque ground scrim, then the content.
  There is deliberately no API for putting text on a bare field — darkening the
  field beats outlining the letters, because the words stay clean shapes.

  `scrim` is the dial. Lower it where the field is the point, raise it where the
  words are. Below about 0.45 it starts to fight the type, so SCRIM_FLOOR clamps
  it rather than trusting the call site.
*/
const SCRIM_FLOOR = 0.45;

/*
  How much more scrim a phone gets.

  A scrim tuned on a 1440px screen is tuned against a headline. On a phone the
  same band is mostly SMALL type — the 10px uppercase interval line, the label
  above a chip list — and small dim type in the field's own hue is the one thing
  a scrim at 0.84 does not save. Raising it here rather than at the call sites
  means every band gets the fix.
*/
const NARROW_SCRIM_BOOST = 0.1;

/** Boot a field slightly before it scrolls in, so it is already textured on arrival. */
const REVEAL_MARGIN = "220px";

export type FieldBandProps = {
  /**
   * A pinned preset from `fieldProfiles`. Mutually exclusive with `section` in
   * practice — pass one or the other. Kept required-shaped-as-optional so any
   * call site that has not opted into the per-section registry keeps working
   * unchanged.
   */
  profile?: FieldProfileName;
  /**
   * A section key into `fieldRegistry` (src/components/field/fieldRegistry.ts).
   * Resolves `source`/`dither`/`cellSize`/`scale`/`speed`/`contrast`/`balance`/
   * `rotation`/`scrim`/`ink`/`bounds`/`enabled` from that section's `desktop` or
   * `mobile` variant, picked by the same `useNarrowViewport(639)` check this
   * component already runs. Any of `scrim`/`ink`/`bounds` passed explicitly
   * below still wins over the registry's value for that field.
   *
   * In dev, `FieldTuner.tsx` (lazy-loaded, stripped from production) can edit
   * a section's values live. `enabled: false` on the resolved variant means it
   * is not mounted at all — not mounted and hidden, same discipline as the old
   * `mobile` prop this supersedes for any call site using `section`.
   */
  section?: SectionKey;
  children?: ReactNode;
  /**
   * 0 = bare field, 1 = flat ground.
   *
   * Clamped to [0.45, 1] for a full-bleed field, because below that it fights the
   * type. A bounded field is spatially separated from the content instead, so the
   * floor is lifted and the scrim becomes a pure brightness dial.
   */
  scrim?: number;
  /** Box the field instead of scrimming it. See `FieldBounds`. */
  bounds?: FieldBounds;
  ink?: string;
  ground?: string;
  /** Pointer ripples. Only worth it on a field a visitor is likely to hover. */
  interactive?: boolean;
  /** Mount the field on phones too. Off by default: each field is its own WebGL2 context. */
  mobile?: boolean;
  /** Fade the field out toward one edge, so a band can bleed into the section below it. */
  fade?: "none" | "top" | "bottom";
  className?: string;
  /** Wrapper around `children`. The field itself is always absolutely positioned. */
  contentClassName?: string;
};

const FADE_MASKS: Record<NonNullable<FieldBandProps["fade"]>, string | undefined> = {
  none: undefined,
  top: "linear-gradient(to bottom, transparent 0%, #000 55%)",
  bottom: "linear-gradient(to top, transparent 0%, #000 55%)",
};

export function FieldBand({
  profile,
  section,
  children,
  scrim,
  bounds,
  ink,
  ground = "#020101",
  interactive = false,
  mobile = false,
  fade = "none",
  className,
  contentClassName,
}: FieldBandProps) {
  /*
    Two ways in: a pinned `profile`, or a `section` resolved through the live
    registry (see fieldRegistryStore.ts). `useSectionField` is always called —
    it is a cheap useSyncExternalStore read that is a permanent no-op
    pass-through to the seeded defaults whenever no dev tuning session has
    touched the store, which is always true in production.
  */
  const registryEntry = useSectionField(section);
  const narrow = useNarrowViewport(639);
  const variant = registryEntry ? (narrow ? registryEntry.mobile : registryEntry.desktop) : undefined;

  if (!variant && !profile) {
    throw new Error("FieldBand requires either a `profile` or a `section` prop.");
  }

  const preset = variant ?? fieldProfiles[profile as FieldProfileName];
  // Explicit props still win — a call site can override one field of a
  // section's registry entry (HeroSection does this for `bounds`, since the
  // RTL mask flip and the hero's own 1023px layout switch are not registry
  // concerns) without losing the rest of the resolution.
  const resolvedInk = ink ?? variant?.ink ?? "#FFB35C";
  const resolvedBounds = bounds ?? variant?.bounds;
  const baseScrim = scrim ?? variant?.scrim ?? 0.6;

  /*
    Render quality, resolved per section and per viewport rather than pinned here.

    This used to be a hardcoded `performanceMode="low"` for every field on the
    page — which renders at min(dpr, 0.75), i.e. BELOW native and upscaled. It was
    a defensive choice made when the worry was four live WebGL2 contexts at once,
    but the boot queue, the intersection gate and `pauseOffscreen` already solve
    that: only fields near the viewport ever run. What `low` actually bought was a
    softer dither, and on the hero — cellSize 1, the finest cell there is — it was
    throwing away exactly the detail that cell size pays for.

    A `profile` call site with no registry entry keeps a conservative default,
    since it has no per-section data to say otherwise.
  */
  const performanceMode = variant?.performanceMode ?? "balanced";
  const targetFps = variant?.targetFps ?? 30;
  const autoScaleResolution = variant?.autoScaleResolution ?? false;

  const raw = baseScrim + (narrow ? NARROW_SCRIM_BOOST : 0);
  // A bounded field never sits under the words, so the readability floor does not apply.
  const opacity = Math.min(1, resolvedBounds ? Math.max(0, raw) : Math.max(SCRIM_FLOOR, raw));

  const hostRef = useRef<HTMLDivElement>(null);
  const [booted, setBooted] = useState(false);
  const [failed, setFailed] = useState(false);

  /*
    A resolved section variant's `enabled` is authoritative when present — it
    replaces the `mobile` prop for that call site entirely, and unlike the old
    boolean-and-narrow check it can differ per variant instead of only ever
    suppressing under one fixed width.
  */
  const suppressed = failed || (variant ? !variant.enabled : (narrow && !mobile));

  /*
    Two gates before a context exists: the band has to be near the viewport, and
    the boot queue has to hand out a slot. Without the first, a page with five
    bands creates five contexts on load and some browsers drop the oldest.
  */
  useEffect(() => {
    if (suppressed || booted) return;
    const host = hostRef.current;
    if (!host) return;

    let boot: (() => void) | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        boot = () => setBooted(true);
        requestBoot(boot);
      },
      { rootMargin: REVEAL_MARGIN },
    );
    observer.observe(host);

    return () => {
      observer.disconnect();
      if (boot) cancelBoot(boot);
    };
  }, [suppressed, booted]);

  const mask = resolvedBounds?.mask ?? FADE_MASKS[fade];

  /*
    The field layer is positioned on the band itself, not inside a padded content
    cell — inside the cell it starts below the top padding, which leaves a dead strip
    across the top and makes anything floating up there read as a solid bar laid over
    the artwork rather than as sitting on it.
  */
  // Every unspecified side defaults to the band's own edge, so a call site can box
  // one axis and leave the other alone.
  const fieldStyle = {
    top: resolvedBounds?.top ?? "0%",
    ...(resolvedBounds?.height ? { height: resolvedBounds.height } : { bottom: resolvedBounds?.bottom ?? "0%" }),
    insetInlineStart: resolvedBounds?.start ?? "0%",
    insetInlineEnd: resolvedBounds?.end ?? "0%",
    ...(mask ? { maskImage: mask, WebkitMaskImage: mask } : null),
  };

  return (
    <div
      ref={hostRef}
      className={cn("relative isolate overflow-hidden", className)}
      style={{ backgroundColor: ground }}
    >
      {!suppressed && booted && (
        <div className="absolute" style={fieldStyle}>
          <DitherShader
            className="absolute inset-0"
            ariaLabel=""
            source={preset.source}
            dither={preset.dither}
            foregroundColor={resolvedInk}
            backgroundColor={ground}
            size={preset.cellSize}
            scale={preset.scale}
            speed={preset.speed}
            contrast={preset.contrast}
            balance={preset.balance}
            rotation={preset.rotation}
            enablePointerRipples={interactive}
            pointerRippleStrength={0.8}
            performanceMode={performanceMode}
            autoScaleResolution={autoScaleResolution}
            pauseOffscreen
            targetFps={targetFps}
            onError={() => setFailed(true)}
          />

          {/* A bounded field scrims inside its own box, so the flat ground the copy
              sits on stays at full contrast. */}
          {resolvedBounds ? (
            <span aria-hidden="true" className="absolute inset-0" style={{ backgroundColor: ground, opacity }} />
          ) : null}
        </div>
      )}

      {resolvedBounds ? null : (
        <span aria-hidden="true" className="absolute inset-0" style={{ backgroundColor: ground, opacity }} />
      )}

      {/*
        w-full matters. When a consumer makes this band a flex container this
        wrapper becomes a flex item and shrinks to its content, which leaves any
        inner mx-auto with no free space to distribute.
      */}
      {children ? <div className={cn("relative z-10 w-full", contentClassName)}>{children}</div> : null}
    </div>
  );
}
