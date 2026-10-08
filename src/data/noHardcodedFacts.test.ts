import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/* Prices, the email address, the phone number, the WhatsApp link and the opening
   hours live in src/data/facts.json (synced from constantlabs.ai/facts.json).
   This fails when one is typed into a component, a page or a translation. */

const SRC = join(__dirname, "..");
const ALLOWED = new Set([join(SRC, "data", "facts.json")]);
const BANNED: [string, RegExp][] = [
  ["the old Gmail address", /akhmad6093/i],
  ["a hard-coded email address", /akhmad@constantlabs\.ai/i],
  ["a hard-coded phone number", /971\s?56\s?149\s?5656|971561495656/],
  ["a hard-coded SEO price", /\b(700|1,400|3,000|6,500)\s?(AED|SAR|USD|درهم)/],
  ["the old working hours", /Sunday to Thursday|9AM to 6PM|18:00 GST/i],
  ["coordinates", /\bGeoCoordinates\b|\bgeo\.position\b|\bICBM\b/],
];

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return files(path);
    return /\.(ts|tsx)$/.test(name) && !/\.test\.tsx?$/.test(name) ? [path] : [];
  });
}

describe("business facts come from facts.json", () => {
  for (const [label, pattern] of BANNED) {
    it(`src has no ${label}`, () => {
      const hits = files(SRC)
        .filter((file) => !ALLOWED.has(file))
        .filter((file) => pattern.test(readFileSync(file, "utf-8")))
        .map((file) => file.replace(SRC, "src"));
      expect(hits).toEqual([]);
    });
  }
});
