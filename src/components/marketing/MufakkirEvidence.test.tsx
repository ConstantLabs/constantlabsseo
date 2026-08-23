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
    expect(screen.getByText("1.73K")).toBeVisible();
    expect(screen.getByText("29.4K")).toBeVisible();
    expect(screen.getByText("5.9%")).toBeVisible();
    expect(screen.getByText("8.4")).toBeVisible();
    expect(screen.getAllByText(/Google Search Console/i).length).toBeGreaterThan(0);

    // The separate "view source screenshot" link is gone — it pointed at the image
    // rendered directly beneath it. The screenshot itself still has to stay linked.
    expect(screen.getByRole("link", { name: /search console/i })).toHaveAttribute(
      "href",
      "/proof/mufakkir-search-console-6-months.png",
    );

    // Search Console terms explain themselves rather than assuming the visitor has
    // ever opened Search Console. Tied to each number with aria-describedby, so the
    // wording is not hover-only information.
    expect(screen.getByText(/average rank of the listing/i)).toBeInTheDocument();
    expect(screen.getByText(/clicks divided by impressions/i)).toBeInTheDocument();
  });
});
