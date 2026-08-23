import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { FieldTuner } from "@/components/field/FieldTuner";
import { resetAllSections } from "@/components/field/fieldRegistryStore";

describe("FieldTuner", () => {
  afterEach(() => {
    cleanup();
    resetAllSections();
    sessionStorage.clear();
  });

  it("opens on the live mobile hero variant at a narrow viewport", () => {
    Object.defineProperty(window, "innerWidth", { configurable: true, value: 393 });
    render(<FieldTuner />);

    fireEvent.click(screen.getByRole("button", { name: /dither tuner/i }));

    expect(screen.getByRole("button", { name: "mobile" })).toHaveAttribute("aria-pressed", "true");
  });

  it("allows the lightweight hero source to be changed", () => {
    Object.defineProperty(window, "innerWidth", { configurable: true, value: 393 });
    render(<FieldTuner />);

    fireEvent.click(screen.getByRole("button", { name: /dither tuner/i }));

    expect(screen.getByLabelText("Source")).toBeEnabled();
    expect(screen.getByRole("option", { name: "Nebula Veil" })).toHaveValue("nebulaVeil");

    fireEvent.change(screen.getByLabelText("Source"), { target: { value: "nebulaVeil" } });

    expect(screen.getByLabelText("Dither")).toHaveValue("random");
    expect(screen.getByRole("slider", { name: /Scale/ })).toHaveValue("1.7");
    expect(screen.getByRole("slider", { name: /Balance/ })).toHaveValue("-0.22");
  });

  it("allows hero resolution and automatic scaling to be changed", () => {
    render(<FieldTuner />);
    fireEvent.click(screen.getByRole("button", { name: /dither tuner/i }));

    const mode = screen.getByLabelText("Mode (resolution)");
    const autoScale = screen.getByLabelText("Auto-scale down if slow");
    expect(mode).toBeEnabled();
    expect(autoScale).toBeEnabled();

    fireEvent.change(mode, { target: { value: "low" } });
    fireEvent.click(autoScale);

    expect(mode).toHaveValue("low");
    expect(autoScale).toBeChecked();
  });
});
