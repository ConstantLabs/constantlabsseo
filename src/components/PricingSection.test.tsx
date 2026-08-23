import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PricingSection } from "@/components/PricingSection";
import { LanguageProvider } from "@/i18n/LanguageContext";

describe("PricingSection", () => {
  it("sets the fast-growth recommendation and paid three-month expectation", () => {
    render(
      <LanguageProvider>
        <PricingSection />
      </LanguageProvider>,
    );

    expect(screen.getByText("Recommended for fast growth")).toBeVisible();
    expect(screen.getByRole("note", { name: "SEO timeline" })).toHaveTextContent(
      "commit to and pay for a minimum three-month campaign",
    );
  });
});
