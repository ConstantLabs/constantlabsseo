import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { MufakkirEvidence } from "./MufakkirEvidence";

describe("MufakkirEvidence", () => {
  it("keeps the attributed organic search evidence available to visitors", () => {
    render(
      <LanguageProvider>
        <MufakkirEvidence />
      </LanguageProvider>,
    );

    expect(screen.getByRole("region", { name: /mufakkir organic search performance/i })).toBeVisible();
    expect(screen.getByText("1.74K")).toBeVisible();
    expect(screen.getByText("29K")).toBeVisible();
    expect(screen.getByText("6%")).toBeVisible();
    expect(screen.getByText("8.4")).toBeVisible();
    expect(screen.getByText(/Google Search Console/i)).toBeVisible();
    expect(screen.getByRole("link", { name: /view source screenshot/i })).toHaveAttribute(
      "href",
      "/proof/mufakkir-search-console-12-months.png",
    );
  });
});
