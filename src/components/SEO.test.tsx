import { cleanup, render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { afterEach, describe, expect, it } from "vitest";
import { SEO } from "./SEO";
import { routeMeta } from "@/data/routeMeta";

afterEach(cleanup);

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
          path="/not-in-the-registry"
        />
      </HelmetProvider>,
    );

    await waitFor(() => {
      expect(document.title).toBe("SEO Services | ConstantSEO");
    });
  });

  it("uses the registry title on a registered path, so the hydrated head matches the prerendered one", async () => {
    render(
      <HelmetProvider>
        <SEO title="SEO Services" description="Search services" path="/services" />
      </HelmetProvider>,
    );

    const registered = routeMeta("/services")!;
    await waitFor(() => {
      expect(document.title).toBe(registered.title);
    });
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelector("link[hreflang]")).toBeNull();
    expect(document.head.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("index, follow");
  });

  it("marks a 404 noindex with no canonical", async () => {
    render(
      <HelmetProvider>
        <SEO title="404 - Page Not Found" path="/" noindex />
      </HelmetProvider>,
    );

    await waitFor(() => {
      expect(document.head.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, follow");
    });
    expect(document.head.querySelector('link[rel="canonical"]')).toBeNull();
  });
});
