/**
 * Build-time prerender: renders every route with React on the server and writes
 * the finished HTML to dist/<route>/index.html, plus dist/404.html.
 *
 * Why SSR and not a headless browser: the old step drove Puppeteer's Chrome
 * through each route. It never ran on Vercel (vercel.json's buildCommand skipped
 * it), and Chrome needs shared libraries the Vercel build image does not ship.
 * Rendering with react-dom/server needs nothing but Node, does no network or
 * timing guesswork, and fails loudly when a page throws.
 *
 * Input:  dist/index.html            (client build, the HTML template)
 *         dist-ssr/entry-server.js   (vite build --ssr src/entry-server.tsx)
 * Output: dist/index.html, dist/<route>/index.html, dist/404.html
 *
 * Exits nonzero if any route fails to render, renders too little text, lacks a
 * single canonical/title, or if the router knows a path the registry lacks.
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const SSR_DIR = join(ROOT, "dist-ssr");
const MIN_WORDS = 120;
const NOT_FOUND_PROBE = "/__prerender-not-found__";

const template = readFileSync(join(DIST, "index.html"), "utf-8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html has no empty <div id="root"></div> to fill');
}

const { render, appPaths, routes, BASE_URL } = await import(pathToFileURL(join(SSR_DIR, "entry-server.js")).href);

export function wordCount(html) {
  const body = html.match(/<div id="root">([\s\S]*)<\/div>\s*(?:<script|<\/body>)/i)?.[1] ?? "";
  const text = body
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .trim();
  return text ? text.split(/\s+/).length : 0;
}

function headTags(helmet) {
  if (!helmet) return "";
  return [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((part) => part.toString())
    .filter(Boolean)
    .join("\n    ");
}

function page({ html, helmet }) {
  return template
    .replace("</head>", `    ${headTags(helmet)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

function check(path, out, { expectNoindex = false } = {}) {
  const problems = [];
  const titles = out.match(/<title[\s>]/gi) ?? [];
  if (titles.length !== 1) problems.push(`${titles.length} <title> tags`);
  const canonicals = [...out.matchAll(/<link[^>]+rel="canonical"[^>]*>/gi)];
  const robots = out.match(/<meta[^>]+name="robots"[^>]+content="([^"]*)"/i)?.[1] ?? "";
  if (expectNoindex) {
    if (!/noindex/i.test(robots)) problems.push(`robots is "${robots}", expected noindex`);
    if (canonicals.length) problems.push("a 404 must not carry a canonical");
  } else {
    if (canonicals.length !== 1) problems.push(`${canonicals.length} canonical tags`);
    const href = canonicals[0]?.[0].match(/href="([^"]*)"/)?.[1];
    const expected = `${BASE_URL}${path}`;
    if (canonicals.length === 1 && href !== expected) problems.push(`canonical ${href} != ${expected}`);
    if (/noindex/i.test(robots)) problems.push("indexable route rendered noindex (NotFound?)");
    const words = wordCount(out);
    if (words < MIN_WORDS) problems.push(`only ${words} words of body text`);
  }
  if (/<link[^>]+hreflang/i.test(out)) problems.push("hreflang present but there are no separate language URLs");
  return problems;
}

function write(path, out) {
  const dir = path === "/" ? DIST : join(DIST, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), out);
}

async function run() {
  let failed = 0;

  // The registry (src/data/routeMeta.ts) must cover every path the router renders from data, because
  // vercel.json has no SPA fallback: an unlisted path is a hard-load 404.
  const registry = new Set(routes.map((r) => r.path));
  const missing = appPaths().filter((p) => !registry.has(p));
  if (missing.length) {
    failed += missing.length;
    console.error(`  ✗ src/data/routeMeta.ts is missing router paths:\n    ${missing.join("\n    ")}`);
  }

  for (const route of routes) {
    try {
      const out = page(await render(route.path));
      const problems = check(route.path, out);
      if (problems.length) throw new Error(problems.join("; "));
      write(route.path, out);
      console.log(`  ✓ ${route.path} (${wordCount(out)} words)`);
    } catch (err) {
      failed++;
      console.error(`  ✗ ${route.path}: ${err.message}`);
    }
  }

  // 404 page. Vercel serves dist/404.html with status 404 for any path without a file.
  try {
    const out = page(await render(NOT_FOUND_PROBE));
    const problems = check(NOT_FOUND_PROBE, out, { expectNoindex: true });
    if (problems.length) throw new Error(problems.join("; "));
    writeFileSync(join(DIST, "404.html"), out);
    console.log("  ✓ 404.html (noindex)");
  } catch (err) {
    failed++;
    console.error(`  ✗ 404.html: ${err.message}`);
  }

  rmSync(SSR_DIR, { recursive: true, force: true });
  console.log(`\nPrerendered ${routes.length - Math.min(failed, routes.length)}/${routes.length} routes + 404.`);
  if (failed > 0) {
    console.error(`${failed} prerender problem(s). Failing the build.`);
    process.exitCode = 1;
  }
}

await run();
