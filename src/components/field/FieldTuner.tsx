import { useEffect, useRef, useState, type ReactNode } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import {
  REGISTRY_DITHERS,
  REGISTRY_MODES,
  REGISTRY_SOURCES,
  SECTION_KEYS,
  type SectionFieldEntry,
  type SectionFieldVariant,
  type SectionKey,
} from "@/components/field/fieldRegistry";
import {
  getRegistrySnapshot,
  hydrateRegistry,
  resetSection,
  setSectionVariant,
  subscribeRegistry,
} from "@/components/field/fieldRegistryStore";

/*
  Dev-only dither tuner.

  This module only ever loads when `import.meta.env.DEV` is true — App.tsx
  gates the `import()` that reaches this file behind that check, so a
  production build never requests it and this component's code (and this
  comment, and every string in the panel below) is absent from `dist`.

  It reads and writes the SAME live registry every `FieldBand` on the page
  resolves through (fieldRegistryStore.ts), so dragging a slider here repaints
  the actual section immediately — there is no separate preview state to fall
  out of sync with what is on screen. "Copy as code" emits the literal that
  belongs in fieldRegistry.ts, because the registry file is what ships; this
  panel is only how a value gets found.

  Same discipline as fieldProfiles.ts and fieldRegistry.ts: nothing here
  cycles, randomises per refresh, or auto-scales resolution, and none of it
  is reachable by a production visitor.
*/

const STORAGE_KEY = "constantseo-dither-tuner-v1";

function sourceLabel(source: string) {
  const spaced = source.replace(/([a-z])([A-Z])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function sourcePatch(source: SectionFieldVariant["source"]): Partial<SectionFieldVariant> {
  if (source === "nebulaVeil") {
    return {
      source,
      dither: "random",
      cellSize: 1,
      speed: 0.34,
      scale: 1.7,
      contrast: 1.48,
      balance: -0.22,
    };
  }
  return { source };
}

type VariantKey = "desktop" | "mobile";
const VARIANT_KEYS: VariantKey[] = ["desktop", "mobile"];

export function FieldTuner() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<SectionKey>("hero");
  const [variantKey, setVariantKey] = useState<VariantKey>(() =>
    window.innerWidth < 1024 ? "mobile" : "desktop",
  );
  const [registry, setRegistry] = useState(() => getRegistrySnapshot());
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const dragRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => subscribeRegistry(() => setRegistry(getRegistrySnapshot())), []);

  // Hydrate a saved tuning session once, on mount, so a hot reload does not
  // lose it. Anything wrong with the saved JSON just falls back to the seeded
  // registry rather than throwing.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) hydrateRegistry(JSON.parse(saved));
    } catch {
      // Corrupt or foreign session data. Ignore it and keep the seeded registry.
    }
  }, []);

  const persist = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(getRegistrySnapshot()));
    } catch {
      // sessionStorage can be unavailable (private mode, quota). Tuning still
      // works for the rest of the tab's life, it just will not survive reload.
    }
  };

  const entry = registry[section];
  const variant = entry[variantKey];

  const patch = (next: Partial<SectionFieldVariant>) => {
    setSectionVariant(section, variantKey, next);
    persist();
  };

  const reset = () => {
    resetSection(section);
    persist();
  };

  const copyAsCode = () => {
    void navigator.clipboard?.writeText(serializeEntry(section, entry));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="tv-label fixed bottom-4 start-4 z-[80] inline-flex min-h-9 items-center gap-2 border border-line bg-void px-3 text-[10px] tracking-[0.14em] text-paper/70 transition-colors hover:border-signal hover:text-signal"
      >
        <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
        Dither tuner
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-4 start-4 z-[80] w-[22rem] max-h-[80vh] overflow-y-auto border border-line bg-void text-paper shadow-2xl"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      {/* Drag by the header, so the panel can be moved off whatever section it
          is currently tuning. Pointer capture keeps the drag alive when the
          cursor leaves the bar. */}
      <div
        className="flex cursor-grab items-start justify-between gap-3 border-b border-line px-3 py-2.5 active:cursor-grabbing"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          dragRef.current = { x: event.clientX - pos.x, y: event.clientY - pos.y };
          (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!dragRef.current) return;
          setPos({ x: event.clientX - dragRef.current.x, y: event.clientY - dragRef.current.y });
        }}
        onPointerUp={() => {
          dragRef.current = null;
        }}
      >
        <div>
          <p className="tv-label text-[10px] tracking-[0.16em] text-signal">Dither tuner</p>
          <p className="tv-label mt-1 text-[9px] tracking-[0.1em] text-paper/45">Dev only — drag to move</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close dither tuner"
          className="p-1 text-paper/60 hover:text-paper"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="space-y-4 p-3">
        <div>
          <p className="tv-label mb-1.5 text-[9px] tracking-[0.12em] text-paper/45">Section</p>
          <div className="grid grid-cols-2 gap-1.5">
            {SECTION_KEYS.map((key) => (
              <Chip key={key} active={key === section} onClick={() => setSection(key)}>
                {key}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          {/* Desktop/mobile is independent of the window's real width on purpose
              — that is the whole point of editing both variants from one seat. */}
          <p className="tv-label mb-1.5 text-[9px] tracking-[0.12em] text-paper/45">Variant</p>
          <div className="grid grid-cols-2 gap-1.5">
            {VARIANT_KEYS.map((key) => (
              <Chip key={key} active={key === variantKey} onClick={() => setVariantKey(key)}>
                {key}
              </Chip>
            ))}
          </div>
        </div>

        <label className="tv-label flex items-center gap-2 text-[9px] tracking-[0.12em] text-paper/70">
          <input
            type="checkbox"
            checked={variant.enabled}
            onChange={(event) => patch({ enabled: event.target.checked })}
            className="h-3.5 w-3.5 accent-signal"
          />
          Enabled ({variantKey})
        </label>

        <Field label="Source">
          <select
            value={variant.source}
            onChange={(event) => patch(sourcePatch(event.target.value as SectionFieldVariant["source"]))}
            className="tv-label w-full border border-line bg-void px-2 py-1.5 text-[10px] text-paper"
          >
            {REGISTRY_SOURCES.map((source) => (
              <option key={source} value={source}>
                {sourceLabel(source)}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Dither">
          <select
            value={variant.dither}
            onChange={(event) => patch({ dither: event.target.value as SectionFieldVariant["dither"] })}
            className="tv-label w-full border border-line bg-void px-2 py-1.5 text-[10px] text-paper"
          >
            {REGISTRY_DITHERS.map((dither) => (
              <option key={dither} value={dither}>
                {dither}
              </option>
            ))}
          </select>
        </Field>

        <Range label="Cell size (px)" value={variant.cellSize} min={1} max={8} step={1} onChange={(cellSize) => patch({ cellSize })} />
        <Range label="Scale" value={variant.scale} min={0.4} max={8} step={0.05} onChange={(scale) => patch({ scale })} />
        <Range label="Speed" value={variant.speed} min={0} max={3} step={0.02} onChange={(speed) => patch({ speed })} />
        <Range label="Contrast" value={variant.contrast} min={0.4} max={3} step={0.01} onChange={(contrast) => patch({ contrast })} />
        <Range label="Balance" value={variant.balance} min={-0.9} max={0.9} step={0.01} onChange={(balance) => patch({ balance })} />
        <Range label="Rotation (deg)" value={variant.rotation} min={0} max={360} step={1} onChange={(rotation) => patch({ rotation })} />
        <Range label="Scrim" value={variant.scrim} min={0} max={1} step={0.01} onChange={(scrim) => patch({ scrim })} />

        <Field label="Ink (hex)">
          <input
            type="text"
            value={variant.ink}
            onChange={(event) => patch({ ink: event.target.value })}
            className="tv-label w-full border border-line bg-void px-2 py-1.5 text-[10px] text-paper"
          />
        </Field>

        {/* Quality. Separated by a rule because these are cost dials, not look
            dials — everything above changes what the field IS, these three change
            what it costs to draw. `Mode` is the one that decides how sharp it
            looks: high = min(dpr, 2), balanced = min(dpr, 1.25), low = min(dpr,
            0.75), i.e. below native and upscaled. */}
        <div className="mt-1 border-t border-line pt-3">
          <p className="tv-label mb-2 text-[9px] tracking-[0.18em] text-muted">Quality / cost</p>

          <Field label="Mode (resolution)">
            <select
              value={variant.performanceMode}
              onChange={(event) =>
                patch({ performanceMode: event.target.value as SectionFieldVariant["performanceMode"] })
              }
              className="tv-label w-full border border-line bg-void px-2 py-1.5 text-[10px] text-paper"
            >
              {REGISTRY_MODES.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </Field>

          <Range
            label="Target FPS"
            value={variant.targetFps}
            min={15}
            max={60}
            step={1}
            onChange={(targetFps) => patch({ targetFps })}
          />

          <label className="tv-label mt-2 flex cursor-pointer items-center gap-2 text-[10px] text-paper">
            <input
              type="checkbox"
              checked={variant.autoScaleResolution}
              onChange={(event) => patch({ autoScaleResolution: event.target.checked })}
              className="h-3 w-3 accent-signal"
            />
            Auto-scale down if slow
          </label>
        </div>

        <div className="flex gap-2 border-t border-line pt-3">
          <button
            type="button"
            onClick={copyAsCode}
            className="tv-label min-h-9 flex-1 border border-signal bg-signal px-3 text-[9px] tracking-[0.12em] text-void transition-colors hover:border-paper hover:bg-paper"
          >
            {copied ? "Copied" : "Copy as code"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="tv-label min-h-9 border border-line px-3 text-[9px] tracking-[0.12em] text-paper/70 transition-colors hover:border-signal hover:text-signal"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`tv-label border px-2 py-1.5 text-[9px] tracking-[0.08em] transition-colors ${
        active ? "border-signal bg-signal text-void" : "border-line text-paper/60 hover:border-signal hover:text-signal"
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="tv-label mb-1.5 block text-[9px] tracking-[0.12em] text-paper/45">{label}</span>
      {children}
    </label>
  );
}

function Range({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="tv-label mb-1.5 flex justify-between text-[9px] tracking-[0.12em] text-paper/45">
        {label}
        <span className="text-paper">{value}</span>
      </span>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-signal"
      />
    </label>
  );
}

/** Emits the section's entry as a TypeScript object literal, pasteable straight into fieldRegistry.ts. */
function serializeEntry(section: SectionKey, entry: SectionFieldEntry): string {
  const serializeVariant = (v: SectionFieldVariant) => {
    const fields = [
      `enabled: ${v.enabled}`,
      `source: ${JSON.stringify(v.source)}`,
      `dither: ${JSON.stringify(v.dither)}`,
      `cellSize: ${v.cellSize}`,
      `scale: ${v.scale}`,
      `speed: ${v.speed}`,
      `contrast: ${v.contrast}`,
      `balance: ${v.balance}`,
      `rotation: ${v.rotation}`,
      `scrim: ${v.scrim}`,
      `ink: ${JSON.stringify(v.ink)}`,
      `performanceMode: ${JSON.stringify(v.performanceMode)}`,
      `targetFps: ${v.targetFps}`,
      `autoScaleResolution: ${v.autoScaleResolution}`,
    ];
    if (v.bounds) {
      const boundsFields = Object.entries(v.bounds).map(([key, value]) => `${key}: ${JSON.stringify(value)}`);
      fields.push(`bounds: { ${boundsFields.join(", ")} }`);
    }
    return `{ ${fields.join(", ")} }`;
  };

  return [
    `${section}: {`,
    `  desktop: ${serializeVariant(entry.desktop)},`,
    `  mobile: ${serializeVariant(entry.mobile)},`,
    `},`,
  ].join("\n");
}
