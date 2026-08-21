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
  const escaped = expectedText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  assert.match(
    html,
    new RegExp(`<h1\\b[^>]*>[\\s\\S]*?${escaped}[\\s\\S]*?<\\/h1>`, "i"),
    `Missing homepage H1: ${expectedText}`
  );
}

function assertMetadata(html, path) {
  const canonical = `https://seo.constantlabs.ai${path}`;
  assert.match(html, /<meta name=["']description["'] content=["'][^"']+?["']/i, "Missing nonempty meta description");
  assert.match(html, new RegExp(`<link rel=["']canonical["'] href=["']${canonical}["']`, "i"), "Missing canonical URL");
  assert.match(html, new RegExp(`<meta property=["']og:url["'] content=["']${canonical}["']`, "i"), "Missing Open Graph URL");
}

const representativePages = [
  ["/", "Build the answer people find."],
  ["/services", "Everything You Need to Get Found and Grow"],
  ["/seo-agency-dubai", "Dubai's #1 AI SEO Agency"],
  ["/tools/meta-tag-analyzer", "Meta Tag Analyzer"],
];

for (const [path, expectedText] of representativePages) {
  const html = assertRenderedPage(path, expectedText);
  assertMetadata(html, path);
  if (path === "/") assertHeading(html, expectedText);
}

console.log("Verified rendered static output for homepage, service, city, and tool pages.");
