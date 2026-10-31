import { describe, expect, it } from "vitest";
import raw from "./facts.json";
import { CONTACT_EMAIL, facts, getOffer, openingDays, seoOffer } from "./facts";
import { siteSchema } from "./schema";

describe("public facts", () => {
  it("exposes descriptive SEO and contact metadata from the shared facts", () => {
    expect(seoOffer).toEqual(raw.offers.find((offer) => offer.id === "seo"));
    expect(getOffer("seo").url).toBe("https://seo.constantlabs.ai/");
    expect(CONTACT_EMAIL).toBe(raw.contact.email);
    expect(openingDays).toHaveLength(raw.contact.hours.days.length);
  });

  it("keeps commercial pricing and removed offers out of the public payload", () => {
    expect(facts).not.toHaveProperty("currency");
    expect(facts).not.toHaveProperty("free");
    for (const offer of facts.offers) {
      expect(offer).not.toHaveProperty("prices");
      expect(offer).not.toHaveProperty("conditions");
    }
  });

  it("publishes business discovery schema without commercial offers or prices", () => {
    expect(JSON.parse(siteSchema)["@graph"]).toHaveLength(3);
    expect(siteSchema).not.toMatch(/"(?:price|priceRange|priceSpecification|priceCurrency|hasOfferCatalog)"/);
  });
});
