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
