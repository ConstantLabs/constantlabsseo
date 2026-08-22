import { render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { describe, expect, it } from "vitest";
import { SEO } from "./SEO";

describe("SEO hydrated metadata", () => {
  it("honors the supplied localized homepage title", async () => {
    render(
      <HelmetProvider>
        <SEO
          title="ConstantSEO، أنظمة بحث لمنطقة الخليج"
          description="وصف عربي"
          path="/"
        />
      </HelmetProvider>,
    );

    await waitFor(() => {
      expect(document.title).toBe("ConstantSEO، أنظمة بحث لمنطقة الخليج");
    });
  });

  it("does not duplicate the ConstantSEO brand suffix", async () => {
    render(
      <HelmetProvider>
        <SEO
          title="SEO Services | ConstantSEO"
          description="Search services"
          path="/services"
        />
      </HelmetProvider>,
    );

    await waitFor(() => {
      expect(document.title).toBe("SEO Services | ConstantSEO");
    });
  });
});
