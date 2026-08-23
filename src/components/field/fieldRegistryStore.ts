import { useSyncExternalStore } from "react";
import { fieldRegistry, type SectionFieldEntry, type SectionKey } from "@/components/field/fieldRegistry";

/*
  The live, possibly-tuned registry.

  `FieldBand` reads a section's settings through `useSectionField` below rather
  than importing `fieldRegistry` directly, so a dev-only tuning session (see
  FieldTuner.tsx, lazy-loaded and stripped from production -- gated on
  `import.meta.env.DEV` in App.tsx) can edit a section's numbers and have every
  mounted field for that section re-render immediately, without threading a
  context provider through the whole route tree.

  Nothing in this file is dev-only. It has to ship, because production's own
  fields read through it too -- it is just that in production nothing ever
  calls `setSectionVariant`/`hydrateRegistry`, so `registry` never becomes
  anything other than the seeded `fieldRegistry`, and this is a permanent,
  zero-cost pass-through.
*/

type Registry = Record<SectionKey, SectionFieldEntry>;

let registry: Registry = fieldRegistry;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

export function subscribeRegistry(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getRegistrySnapshot(): Registry {
  return registry;
}

export function getDefaultRegistry(): Registry {
  return fieldRegistry;
}

/**
 * Merge a saved tuning session over the seeded registry, field by field.
 *
 * Deliberately NOT a wholesale replace, which is what this did first and which
 * silently broke the moment `SectionFieldVariant` grew three new fields
 * (`performanceMode`, `targetFps`, `autoScaleResolution`): a session saved before
 * they existed replaced whole variants, so those keys came back `undefined` and
 * the panel's "Copy as code" emitted `performanceMode: undefined` into otherwise
 * valid-looking output.
 *
 * Merging per field means saved data can only override settings it actually knows
 * about. Unknown sections and unknown keys are dropped rather than trusted — this
 * is parsed JSON from sessionStorage, so it is untyped input.
 */
export function hydrateRegistry(next: unknown) {
  if (!next || typeof next !== "object") return;
  const saved = next as Partial<Record<string, Partial<SectionFieldEntry>>>;

  const merged = { ...registry };
  for (const section of Object.keys(fieldRegistry) as SectionKey[]) {
    const savedEntry = saved[section];
    if (!savedEntry || typeof savedEntry !== "object") continue;

    merged[section] = {
      desktop: mergeVariant(fieldRegistry[section].desktop, savedEntry.desktop),
      mobile: mergeVariant(fieldRegistry[section].mobile, savedEntry.mobile),
    };
  }

  registry = merged;
  notify();
}

/** Keeps only keys the seeded variant declares, and only when the type matches. */
function mergeVariant(
  base: SectionFieldEntry["desktop"],
  saved: Partial<SectionFieldEntry["desktop"]> | undefined,
): SectionFieldEntry["desktop"] {
  if (!saved || typeof saved !== "object") return base;

  const out = { ...base };
  for (const key of Object.keys(base) as (keyof typeof base)[]) {
    const value = saved[key];
    if (value === undefined || value === null) continue;
    if (typeof value !== typeof base[key]) continue;
    (out as Record<string, unknown>)[key] = value;
  }
  return out;
}

export function setSectionVariant(
  section: SectionKey,
  variantKey: keyof SectionFieldEntry,
  patch: Partial<SectionFieldEntry["desktop"]>,
) {
  registry = {
    ...registry,
    [section]: {
      ...registry[section],
      [variantKey]: { ...registry[section][variantKey], ...patch },
    },
  };
  notify();
}

export function resetSection(section: SectionKey) {
  registry = { ...registry, [section]: fieldRegistry[section] };
  notify();
}

export function resetAllSections() {
  registry = fieldRegistry;
  notify();
}

/**
 * Resolves a section's live entry, or `undefined` when no section is given
 * (the `profile`-only path). Always calls `useSyncExternalStore` — the hook
 * cannot be conditional — so this is safe to call unconditionally from
 * `FieldBand` regardless of whether that instance uses `profile` or `section`.
 */
export function useSectionField(section: SectionKey | undefined) {
  const snapshot = useSyncExternalStore(subscribeRegistry, getRegistrySnapshot, getRegistrySnapshot);
  return section ? snapshot[section] : undefined;
}
