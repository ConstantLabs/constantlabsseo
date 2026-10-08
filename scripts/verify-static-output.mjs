/**
 * Validate the consumer-visible HTML produced by the static build pipeline.
 * This intentionally reads dist files rather than source code so it catches
 * a broken generator or prerender snapshot that source checks would miss.
 */

import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");

function outputPath(path) {
  return path === "/" ? join(DIST, "index.html") : join(DIST, path, "index.html");
}

function readOutput(path) {
  const file = outputPath(path);
  assert.ok(existsSync(file), `Missing built page: ${file}`);
  return readFileSync(file, "utf-8");
}

function renderedText(html) {
  const root = html.match(/<div id=["']root["'][^>]*>([\s\S]*)<\/div>\s*<\/body>/i);
  assert.ok(root, "Built page is missing the rendered #root container");
  return root[1]
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function assertRenderedPage(path, expectedText) {
  const html = readOutput(path);
  const text = renderedText(html);
  assert.ok(text.length > 200, `${path} has too little rendered content (${text.length} characters)`);
  assert.ok(text.includes(expectedText), `${path} is missing rendered text: ${expectedText}`);
  return html;
}

function assertHeading(html, expectedText) {
  const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  const headingText = heading?.[1]
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  assert.ok(
    headingText?.includes(expectedText),
    `Missing homepage H1: ${expectedText}`
  );
}

/* helmet writes data-rh="true" and may reorder attributes, so match a tag by its
   name/property/rel and read the attribute, not the attribute order. */
function tags(html, tag, attr, value) {
  return [...html.matchAll(new RegExp(`<${tag}\\b[^>]*\\b${attr}=["']${value}["'][^>]*>`, "gi"))].map((m) => m[0]);
}
function attrOf(tagText, attr) {
  return tagText.match(new RegExp(`\\b${attr}=["']([^"']*)["']`, "i"))?.[1];
}

function assertMetadata(html, path) {
  const canonical = `https://seo.constantlabs.ai${path}`;
  const [description] = tags(html, "meta", "name", "description");
  assert.ok(description && attrOf(description, "content"), "Missing nonempty meta description");
  const canonicals = tags(html, "link", "rel", "canonical");
  assert.equal(canonicals.length, 1, `Expected one canonical, found ${canonicals.length}`);
  assert.equal(attrOf(canonicals[0], "href"), canonical, "Missing canonical URL");
  const [ogUrl] = tags(html, "meta", "property", "og:url");
  assert.equal(ogUrl && attrOf(ogUrl, "content"), canonical, "Missing Open Graph URL");
  assert.equal((html.match(/<title[\s>]/gi) ?? []).length, 1, "Expected exactly one <title>");
  assert.doesNotMatch(html, /<link[^>]+hreflang/i, "hreflang without separate language URLs");
  assert.doesNotMatch(tags(html, "meta", "name", "robots").join(""), /noindex/i, "Indexable page is noindex");
}

function assertNotFoundPage() {
  const file = join(DIST, "404.html");
  assert.ok(existsSync(file), "Missing dist/404.html: unknown URLs would not return a real 404");
  const html = readFileSync(file, "utf-8");
  const [robots] = tags(html, "meta", "name", "robots");
  assert.match(robots ?? "", /noindex/i, "404.html must be noindex");
  assert.equal(tags(html, "link", "rel", "canonical").length, 0, "404.html must have no canonical");
}

function assertTextFile(name, minChars) {
  const file = join(DIST, name);
  assert.ok(existsSync(file), `Missing dist/${name}`);
  const text = readFileSync(file, "utf-8");
  assert.ok(text.length >= minChars, `${name} is nearly empty`);
  assert.doesNotMatch(text, /^\s*</, `${name} is HTML, not plain text`);
  assert.doesNotMatch(text, /gmail\.com|Sunday to Thursday/i, `${name} carries a stale fact`);
}

const representativePages = [
  ["/", "Constant SEO"],
  ["/services", "Connected Search Systems for the GCC"],
  ["/seo-agency-dubai", "Search systems for Dubai businesses"],
  ["/tools/meta-tag-analyzer", "Meta Tag Analyzer"],
];

for (const [path, expectedText] of representativePages) {
  const html = assertRenderedPage(path, expectedText);
  assertMetadata(html, path);
  if (path === "/") assertHeading(html, expectedText);
}

assertNotFoundPage();
assertTextFile("llms.txt", 500);
assertTextFile("llms-full.txt", 5000);

console.log("Verified rendered static output for homepage, service, city, and tool pages, the 404 page, and llms.txt / llms-full.txt.");
