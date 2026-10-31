/**
 * Site-wide JSON-LD, built from facts.json (business facts) and legal.ts (licence).
 *
 * The entity is Constant Labs (https://constantlabs.ai/#organization). ConstantSEO
 * is its SEO product, so the ConstantSEO node points at Constant Labs as its
 * parentOrganization and never carries a legal name of its own.
 * City-level location only: no street, no coordinates (see CLAUDE.md, "The licence").
 */
import { facts, openingDays, ORGANIZATION_ID, seoOffer } from "./facts";
import { legal } from "./legal";

export const SITE_URL = "https://seo.constantlabs.ai";
export const SEO_SERVICE_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const seoProperty = facts.brand.properties.seo;
const constantLabs = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: facts.brand.name,
  legalName: facts.brand.legalName,
  url: facts.brand.properties.main.url,
  logo: facts.brand.logo,
  identifier: [
    { "@type": "PropertyValue", name: `${legal.licence.authorityShort} Trade Licence`, value: legal.licence.number },
    { "@type": "PropertyValue", name: "Commercial Register Number", value: legal.licence.registerNumber },
  ],
};

const constantSeo = {
  "@type": "ProfessionalService",
  "@id": SEO_SERVICE_ID,
  name: seoProperty.name,
  alternateName: legal.productName,
  url: seoProperty.url,
  logo: `${SITE_URL}/favicon-192x192.png`,
  image: `${SITE_URL}/og-image-20261030.png`,
  description: seoOffer.summary,
  parentOrganization: { "@id": ORGANIZATION_ID },
  telephone: facts.contact.phone,
  email: facts.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: facts.contact.city,
    addressCountry: facts.contact.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: openingDays,
      opens: facts.contact.hours.opens,
      closes: facts.contact.hours.closes,
    },
  ],
  areaServed: facts.contact.serviceArea,
  knowsLanguage: facts.contact.languages,
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: seoProperty.url,
  name: legal.productName,
  inLanguage: ["en", "ar"],
  publisher: { "@id": SEO_SERVICE_ID },
};

export const siteSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [constantLabs, constantSeo, website],
});
