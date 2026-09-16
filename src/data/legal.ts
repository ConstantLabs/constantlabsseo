/**
 * The registered entity behind seo.constantlabs.ai.
 *
 * ConstantSEO is a product name, not a company. The licensed entity is the same
 * one that trades as Constant Labs on constantlabs.ai, and this file is the only
 * place in this repo that states its licence number, register number or issuing
 * authority. Footer, legal pages and JSON-LD all read from here.
 *
 * City only, deliberately. The DET register lists a residential address against
 * this licence, so no surface in this repo publishes a street, an area or a
 * P.O. box. The licence number is what anyone verifies against, through DET.
 *
 * Renewal: the licence runs a year. Update `licence.expiresOn` here, nowhere else.
 */

export const legal = {
  legalName: "ConstantLabs For Web-Design",
  tradeName: "Constant Labs",
  productName: "ConstantSEO",

  licence: {
    number: "1653465",
    registerNumber: "2927695",
    legalForm: "Sole Establishment",
    type: "Professional License",
    authority: "Dubai Department of Economy and Tourism",
    authorityShort: "Dubai DET",
    issuedOn: "2026-09-16",
    expiresOn: "2027-09-15",
  },

  address: {
    locality: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  phone: "+971 56 149 5656",
  phoneE164: "+971561495656",
  email: "akhmad@constantlabs.ai",

  /** The activities the licence actually permits, verbatim from the DET record. */
  activities: [
    "Portal",
    "Web-Design",
    "Social Media Applications Development & Management",
    "Computer Systems & Communication Equipment Software Design",
    "Database Systems Design",
    "IT Infrastructure",
  ],
} as const;

/** "ConstantLabs For Web-Design · Dubai DET Licence No. 1653465" */
export const licenceLine = `${legal.legalName} · ${legal.licence.authorityShort} Licence No. ${legal.licence.number}`;
