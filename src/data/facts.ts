/**
 * Typed access to the Constant Labs business facts.
 *
 * src/data/facts.json is synced from https://constantlabs.ai/facts.json before
 * every build (scripts/sync-facts.mjs). Every email, phone, hour and
 * brand name on this site reads from here. Do not hardcode them elsewhere.
 */
import raw from "./facts.json";

export interface FactsOffer {
  id: string;
  name: string;
  nameAr?: string;
  url: string;
  summary: string;
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
  offers: FactsOffer[];
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

export const seoOffer = getOffer("seo");

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

/* ── Contact shortcuts ──────────────────────────────────────────────────────
   Components import these instead of typing an address, number or link. */
export const CONTACT_EMAIL = facts.contact.email;
export const CONTACT_PHONE_DISPLAY = facts.contact.phoneDisplay;
export const CONTACT_PHONE_TEL = `tel:${facts.contact.phone}`;
export const WHATSAPP_URL = facts.contact.whatsapp;
export const BOOKING_URL = facts.contact.booking;

/** "9:00 to 20:00" from facts.contact.hours, for prose that says it in words. */
export const HOURS_RANGE = `${facts.contact.hours.opens.replace(/^0/, "")} to ${facts.contact.hours.closes}`;
export const HOURS_EVERY_DAY = facts.contact.hours.days.length === 7;
