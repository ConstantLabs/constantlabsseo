/**
 * Typed access to the Constant Labs business facts.
 *
 * src/data/facts.json is synced from https://constantlabs.ai/facts.json before
 * every build (scripts/sync-facts.mjs). Every price, email, phone, hour and
 * brand name on this site reads from here. Do not hardcode them elsewhere.
 */
import raw from "./facts.json";

export interface FactsPrice {
  id: string;
  label: string;
  aed: number;
  billing: "monthly" | "one-time" | string;
  includes?: string[];
  conditions?: string[];
  from?: boolean;
}

export interface FactsOffer {
  id: string;
  name: string;
  nameAr?: string;
  url: string;
  summary: string;
  prices: FactsPrice[];
  conditions?: string[];
}

export interface Facts {
  updated: string;
  brand: {
    name: string;
    nameAr?: string;
    url: string;
    description: string;
    legalName: string;
    licence: { number: string; authority: string; type: string; issued: string; expires: string };
    founded: string;
    logo: string;
    properties: Record<string, { name: string; url: string }>;
    sameAs: string[];
  };
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    booking: string;
    city: string;
    country: string;
    serviceArea: string[];
    hours: { days: string[]; opens: string; closes: string; label: string };
    languages: string[];
  };
  currency: { base: string; usdPerAed: number; usdRoundTo: number; sarSameNumber: boolean };
  offers: FactsOffer[];
  free: { id: string; label: string; detail: string; url: string }[];
  terms: { guarantees: string };
}

export const facts = raw as unknown as Facts;

export const MAIN_SITE_URL = "https://constantlabs.ai/";
export const ORGANIZATION_ID = "https://constantlabs.ai/#organization";

export function getOffer(id: string): FactsOffer {
  const offer = facts.offers.find((o) => o.id === id);
  if (!offer) throw new Error(`facts.json has no offer "${id}"`);
  return offer;
}

export function getPrice(offerId: string, priceId: string): FactsPrice {
  const price = getOffer(offerId).prices.find((p) => p.id === priceId);
  if (!price) throw new Error(`facts.json offer "${offerId}" has no price "${priceId}"`);
  return price;
}

export const seoOffer = getOffer("seo");

/** The four SEO tiers in display order, keyed by the translation key the UI uses. */
export const seoTiers = {
  starter: getPrice("seo", "seo-starter"),
  growth: getPrice("seo", "seo-growth"),
  enterprise: getPrice("seo", "seo-enterprise"),
  dominance: getPrice("seo", "seo-dominance"),
} as const;

export const freeSeoAudit = facts.free.find((f) => f.id === "free-seo-audit");

/* ── Currency ───────────────────────────────────────────────────────────────
   AED by default. Saudi visitors see the same number in SAR (not converted).
   Every other non-UAE visitor sees USD at the peg, rounded to usdRoundTo.
   Unknown country means AED, which is also what the prerendered HTML carries. */

export type DisplayCurrency = "AED" | "SAR" | "USD";

export function currencyForCountry(country?: string | null): DisplayCurrency {
  const cc = (country || "").trim().toUpperCase();
  if (!cc || cc === "AE") return "AED";
  if (cc === "SA") return facts.currency.sarSameNumber ? "SAR" : "AED";
  return "USD";
}

export function convertAed(aed: number, currency: DisplayCurrency): number {
  if (currency === "USD") {
    const step = facts.currency.usdRoundTo || 1;
    return Math.round((aed * facts.currency.usdPerAed) / step) * step;
  }
  return aed;
}

const CURRENCY_AR: Record<DisplayCurrency, string> = { AED: "درهم", SAR: "ريال", USD: "دولار" };

/** "1,400 AED", "1,400 SAR", "380 USD"; Arabic uses the Arabic unit name. */
export function formatPrice(aed: number, opts: { country?: string | null; lang?: "en" | "ar" } = {}): string {
  const currency = currencyForCountry(opts.country);
  const amount = convertAed(aed, currency).toLocaleString("en-US");
  return opts.lang === "ar" ? `${amount} ${CURRENCY_AR[currency]}` : `${amount} ${currency}`;
}

/** Opening hours as schema.org day names. */
const DAY_NAMES: Record<string, string> = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};
export const openingDays = facts.contact.hours.days.map((d) => DAY_NAMES[d] ?? d);
