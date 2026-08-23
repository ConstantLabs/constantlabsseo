import { afterEach, describe, expect, it } from "vitest";
import {
  getRegistrySnapshot,
  hydrateRegistry,
  resetAllSections,
  setSectionVariant,
} from "@/components/field/fieldRegistryStore";

describe("fieldRegistryStore", () => {
  afterEach(() => resetAllSections());

  it("allows the hero dither resolution to be tuned", () => {
    setSectionVariant("hero", "desktop", { autoScaleResolution: true });
    expect(getRegistrySnapshot().hero.desktop.autoScaleResolution).toBe(true);

    hydrateRegistry({
      hero: {
        desktop: { autoScaleResolution: true },
        mobile: { autoScaleResolution: true },
      },
    });

    expect(getRegistrySnapshot().hero.desktop.autoScaleResolution).toBe(true);
    expect(getRegistrySnapshot().hero.mobile.autoScaleResolution).toBe(true);
  });

  it("keeps the AI search presence dither enabled on narrow screens", () => {
    expect(getRegistrySnapshot().services.mobile.enabled).toBe(true);
  });
});
