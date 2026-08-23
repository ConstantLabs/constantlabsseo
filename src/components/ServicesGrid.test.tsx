import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { ServicesGrid } from "@/components/ServicesGrid";

vi.mock("@/i18n/LanguageContext", () => ({
  useLanguage: () => ({ t: (key: string) => key }),
}));

vi.mock("@/components/field/bootQueue", () => ({
  requestBoot: () => undefined,
  cancelBoot: () => undefined,
}));

describe("ServicesGrid", () => {
  beforeAll(() => {
    vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
    vi.stubGlobal("IntersectionObserver", class {
      observe() {}
      disconnect() {}
    });
  });

  afterAll(() => vi.unstubAllGlobals());

  it("keeps the AI search presence dither above the card background", () => {
    render(
      <MemoryRouter>
        <ServicesGrid />
      </MemoryRouter>,
    );

    const card = screen.getByRole("heading", { name: "home.services.ai.title" }).closest("a");
    const field = card?.querySelector("[data-testid='showcase-dither-field']");

    expect(field).not.toHaveClass("-z-10");
  });
});
