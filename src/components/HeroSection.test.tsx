import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { HeroSection } from "@/components/HeroSection";

const fieldState = vi.hoisted(() => ({ renderer: "" }));

vi.mock("@/components/field", () => ({
  useNarrowViewport: () => true,
  FieldBand: () => {
    fieldState.renderer = "field-band";
    return null;
  },
  ShowcaseDitherField: () => {
    fieldState.renderer = "showcase-dither-field";
    return null;
  },
}));

vi.mock("@/components/Navbar", () => ({ Navbar: () => null }));

vi.mock("@/i18n/LanguageContext", () => ({
  useLanguage: () => ({
    t: (key: string) => {
      if (key === "home.hero.title") return "Become the *answer* your customers find first.";
      if (key === "home.hero.support") return "We build authority across Google and AI search.";
      if (key === "home.hero.parentBrand") return "by Constant Labs";
      return key;
    },
    isAr: false,
  }),
}));

describe("HeroSection", () => {
  beforeEach(() => {
    fieldState.renderer = "";
  });

  it("uses the showcase renderer instead of the shared field stack", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    expect(fieldState.renderer).toBe("showcase-dither-field");
    expect(screen.getByLabelText("Google")).toBeVisible();
    expect(screen.getByText("AI").tagName).toBe("STRONG");
    expect(screen.getByRole("link", { name: "by Constant Labs" })).toHaveAttribute("href", "https://constantlabs.ai");
  });
});
