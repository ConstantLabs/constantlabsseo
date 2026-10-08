/**
 * Writes dist/llms.txt and dist/llms-full.txt after the prerender.
 *
 * Contact, hours, pricing, brand and licence come from src/data/facts.json
 * (synced from https://constantlabs.ai/facts.json by scripts/sync-facts.mjs).
 * The register number is read from src/data/legal.ts, its one home. The page
 * index comes from the built pages, so a new page shows up with its real title
 * and description. Nothing here is typed by hand twice.
 *
 * llms-full.txt is the same file plus the visible text of every built page.
 * Both are plain text. The build fails if either is empty or contains HTML.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SITE = "https://seo.constantlabs.ai";

const facts = JSON.parse(readFileSync(join(ROOT, "src", "data", "facts.json"), "utf-8"));
const legalSource = readFileSync(join(ROOT, "src", "data", "legal.ts"), "utf-8");
const registerNumber = legalSource.match(/registerNumber:\s*"(\d+)"/)?.[1];
const sitemap = readFileSync(join(ROOT, "public", "sitemap.xml"), "utf-8");
const paths = [...sitemap.matchAll(/<loc>https:\/\/seo\.constantlabs\.ai(\/[^<]*)<\/loc>/g)].map((m) => m[1]);

const seo = facts.offers.find((o) => o.id === "seo");
if (!seo) throw new Error('facts.json has no offer "seo"');
const tiers = ["seo-starter", "seo-growth", "seo-enterprise", "seo-dominance"].map((id) => {
  const price = seo.prices.find((p) => p.id === id);
  if (!price) throw new Error(`facts.json offer "seo" has no price "${id}"`);
  return price;
});
const { contact, brand } = facts;
const hours = contact.hours;
const everyDay = hours.days.length === 7;
const aed = (n) => `AED ${n.toLocaleString("en-US")}`;

const pageFile = (path) => join(DIST, path === "/" ? "" : path, "index.html");
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, " ");

function pageInfo(path) {
  const file = pageFile(path);
  if (!existsSync(file)) throw new Error(`sitemap lists ${path} but ${file} was not built`);
  const html = readFileSync(file, "utf-8");
  const title = decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? path).trim();
  const description = decode(html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] ?? "").trim();
  return { path, html, title, description };
}

function visibleText(html) {
  let body = html.match(/<div id="root">([\s\S]*)<\/div>\s*(?:<script|<\/body>)/i)?.[1] ?? "";
  body = body
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<(header|nav|footer)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<\/(p|h[1-6]|li|div|section|tr)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ");
  return decode(body)
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

const pages = paths.map(pageInfo);
for (const p of pages) if (visibleText(p.html).split(/\s+/).length < 20) throw new Error(`${p.path}: under 20 words of visible text`);

const head = `# ConstantSEO

> ConstantSEO is the SEO product of ${brand.name}, a Dubai software and AI studio. We build technical, local, bilingual (Arabic and English) and AI-search (GEO/AEO) SEO systems for businesses in the UAE, Saudi Arabia and the wider GCC. ${seo.summary}

## Contact

- Email: ${contact.email}
- Phone: ${contact.phoneDisplay}
- WhatsApp: ${contact.whatsapp}
- Book a call: ${contact.booking}
- Location: ${contact.city}, ${contact.country === "AE" ? "UAE" : contact.country}
- Hours: ${hours.label}
- Languages: English and Arabic

## The company

- ConstantSEO is a product of ${brand.name}, not a separate company.
- Registered name: ${brand.legalName}
- Legal form: ${brand.licence.type}
- Licensed by: ${brand.licence.authority}
- Trade licence no.: ${brand.licence.number}${registerNumber ? `\n- Commercial register no.: ${registerNumber}` : ""}
- Licence valid: ${brand.licence.issued} to ${brand.licence.expires}. Verify with DET against the licence number.
- Main site: ${brand.properties.main.url}

## Pricing (${seo.name})

${tiers.map((t) => `- ${t.label}: ${aed(t.aed)} / month. ${(t.includes ?? []).join(", ")}`).join("\n")}

${(seo.conditions ?? []).map((c) => `- ${c}`).join("\n")}
- Prices are in AED. All Constant Labs prices: https://constantlabs.ai/pricing/

## Markets served

- ${contact.serviceArea.join(", ")}

## Part of Constant Labs

- AI agents: https://constantlabs.ai/ai-agents/
- Websites: https://websites.constantlabs.ai/
- Custom software: https://constantlabs.ai/custom-software-development-dubai/
- AI training: https://constantlabs.ai/ai-training/
- All prices: https://constantlabs.ai/pricing/

## Pages

${pages.map((p) => `- [${p.title}](${SITE}${p.path})${p.description ? `: ${p.description}` : ""}`).join("\n")}
`;

const full = `${head}
## Full text of each page

${pages.map((p) => `### ${p.title}\n${SITE}${p.path}\n\n${visibleText(p.html)}`).join("\n\n")}
`;

function assertPlain(name, text) {
  if (text.length < 500) throw new Error(`${name} is nearly empty`);
  // Tool pages quote markup as example text, so only a document skeleton counts as HTML.
  if (/^\s*</.test(text) || /<!doctype/i.test(text)) throw new Error(`${name} contains HTML`);
  if (/gmail\.com|Sunday to Thursday/.test(text)) throw new Error(`${name} contains a stale fact`);
}
assertPlain("llms.txt", head);
assertPlain("llms-full.txt", full);

writeFileSync(join(DIST, "llms.txt"), head);
writeFileSync(join(DIST, "llms-full.txt"), full);
console.log(`  ✓ llms.txt (${head.length} chars), llms-full.txt (${full.length} chars) from facts updated ${facts.updated}`);
