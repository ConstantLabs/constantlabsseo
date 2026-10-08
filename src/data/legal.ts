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
 * Since 2026-10 the facts that facts.json also carries (legal name, licence number,
 * form, authority, dates, phone, email) are read from it (src/data/facts.json,
 * synced from https://constantlabs.ai/facts.json). Renew the licence there.
 * The register number, licence type and permitted activities are not in
 * facts.json yet, so they stay here.
 */
import { facts } from "./facts";

const factsLicence = facts.brand.licence;

export const legal = {
  legalName: facts.brand.legalName,
  tradeName: facts.brand.name,
  productName: "ConstantSEO",

  licence: {
    number: factsLicence.number,
    registerNumber: "2927695",
    legalForm: factsLicence.type,
    type: "Professional License",
    authority: factsLicence.authority.replace(/\s*\(DET\)\s*$/, ""),
    authorityShort: "Dubai DET",
    issuedOn: factsLicence.issued,
    expiresOn: factsLicence.expires,
  },

  address: {
    locality: facts.contact.city,
    region: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  phone: facts.contact.phoneDisplay,
  phoneE164: facts.contact.phone,
  email: facts.contact.email,

  /** The activities the licence actually permits, verbatim from the DET record. */
  activities: [
    "Portal",
    "Web-Design",
    "Social Media Applications Development & Management",
    "Computer Systems & Communication Equipment Software Design",
    "Database Systems Design",
    "IT Infrastructure",
  ],
};

/** "ConstantLabs For Web-Design · Dubai DET Licence No. 1653465" */
export const licenceLine = `${legal.legalName} · ${legal.licence.authorityShort} Licence No. ${legal.licence.number}`;
