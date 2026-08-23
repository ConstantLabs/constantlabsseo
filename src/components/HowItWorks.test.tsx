import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HowItWorks } from "@/components/HowItWorks";
import { LanguageProvider } from "@/i18n/LanguageContext";

describe("HowItWorks", () => {
  it("presents the methodology as one ordered search deployment sequence", () => {
    render(
      <LanguageProvider>
        <HowItWorks />
      </LanguageProvider>,
    );

    const sequence = screen.getByRole("list", { name: "Search deployment sequence" });
    expect(sequence).toBeVisible();
    expect(screen.getAllByRole("listitem")).toHaveLength(5);
    expect(screen.getByRole("heading", { name: "Audit" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Learn" })).toBeVisible();
  });
});
