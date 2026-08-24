import { act, render, screen } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { ShowcaseDitherField } from "@/components/field/ShowcaseDitherField";
import { resetAllSections, setSectionVariant } from "@/components/field/fieldRegistryStore";

vi.mock("@/components/field/bootQueue", () => ({
  requestBoot: (boot: () => void) => boot(),
  cancelBoot: () => undefined,
}));

describe("ShowcaseDitherField", () => {
  const getContext = vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);

  beforeAll(() => {
    vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: false })));
  });

  afterAll(() => {
    getContext.mockRestore();
    vi.unstubAllGlobals();
  });
  afterEach(() => resetAllSections());

  it("reflects live hero tuner changes on the mounted renderer", () => {
    render(<ShowcaseDitherField section="hero" variant="mobile" />);

    const field = screen.getByTestId("showcase-dither-field");
    expect(field).toHaveAttribute("data-dither-scale", "1");
    expect(field).toHaveAttribute("data-dither-ink", "#A8702B");
    expect(field).toHaveAttribute("data-dither-resolution", "balanced");

    act(() => {
      setSectionVariant("hero", "mobile", {
        scale: 4.75,
        ink: "#F0A040",
        performanceMode: "low",
        autoScaleResolution: true,
      });
    });

    expect(field).toHaveAttribute("data-dither-scale", "4.75");
    expect(field).toHaveAttribute("data-dither-ink", "#F0A040");
    expect(field).toHaveAttribute("data-dither-resolution", "low");
    expect(field).toHaveAttribute("data-dither-auto-scale", "true");
    expect(getContext).toHaveBeenCalledTimes(1);
  });
});
