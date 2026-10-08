import { describe, expect, it } from "vitest";
import raw from "./facts.json";
import { convertAed, currencyForCountry, facts, formatPrice, seoOffer, seoTiers } from "./facts";

describe("facts", () => {
  it("exposes the four SEO tiers from facts offer seo", () => {
    const byId = Object.fromEntries(raw.offers.find((o) => o.id === "seo")!.prices.map((p) => [p.id, p.aed]));
    expect(seoTiers.starter.aed).toBe(byId["seo-starter"]);
    expect(seoTiers.growth.aed).toBe(byId["seo-growth"]);
    expect(seoTiers.enterprise.aed).toBe(byId["seo-enterprise"]);
    expect(seoTiers.dominance.aed).toBe(byId["seo-dominance"]);
    expect(seoOffer.conditions).toContain("3-month minimum, then month to month");
  });

  it("shows AED by default and to UAE visitors", () => {
    expect(currencyForCountry(undefined)).toBe("AED");
    expect(currencyForCountry("AE")).toBe("AED");
    expect(formatPrice(1400)).toBe("1,400 AED");
    expect(formatPrice(1400, { lang: "ar" })).toBe("1,400 درهم");
  });

  it("shows Saudi visitors the same number in SAR", () => {
    expect(formatPrice(1400, { country: "SA" })).toBe("1,400 SAR");
  });

  it("shows other visitors USD at the peg, rounded to usdRoundTo", () => {
    const expected = Math.round((700 * facts.currency.usdPerAed) / facts.currency.usdRoundTo) * facts.currency.usdRoundTo;
    expect(convertAed(700, "USD")).toBe(expected);
    expect(convertAed(700, "USD") % facts.currency.usdRoundTo).toBe(0);
    expect(formatPrice(700, { country: "GB" })).toBe(`${expected.toLocaleString("en-US")} USD`);
  });
});
