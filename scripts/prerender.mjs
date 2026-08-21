/**
 * Post-build prerender: snapshots the fully-rendered DOM for each route and
 * writes it to dist/<route>/index.html.
 *
 * Why: the app is a client-rendered SPA, so crawlers that don't execute JS see
 * an empty <div id="root">. This step serves the built dist locally, drives a
 * headless Chromium through every route, waits for React to render (content +
 * react-helmet head tags + JSON-LD), and saves the resulting HTML.
 *
 * Resilience: runs AFTER generate-static-pages.mjs (which writes a head-only
 * baseline for every route). If a route fails to snapshot, we skip it and the
 * baseline file remains — we never ship worse than the head-only version.
 *
 * Run: node scripts/prerender.mjs   (build script runs it after the generator)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "fs";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import puppeteer from "puppeteer";
import { BASE_URL, routes } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 4178;
const CONCURRENCY = 4;
const NAV_TIMEOUT = 30000;
const SETTLE_MS = 1200; // let framer-motion animations + helmet head updates settle

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

const indexHtml = readFileSync(join(DIST, "index.html"), "utf-8");

function escapeText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeText(value).replace(/"/g, "&quot;");
}

function replaceOrInsertHeadTag(html, pattern, replacement) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }
  return html.replace("</head>", `  ${replacement}\n</head>`);
}

function applyRouteHead(html, route) {
  const url = `${BASE_URL}${route.path}`;
  const title = escapeText(route.title);
  const description = escapeAttr(route.description);
  const titleAttr = escapeAttr(route.title);
  const urlAttr = escapeAttr(url);

  html = replaceOrInsertHeadTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  html = replaceOrInsertHeadTag(
    html,
    /<meta\s+name=["']description["']\s+content=["'][^"']*["'][^>]*>/i,
    `<meta name="description" content="${description}">`
  );
  html = replaceOrInsertHeadTag(
    html,
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["'][^>]*>/i,
    `<link rel="canonical" href="${urlAttr}" />`
  );
  html = replaceOrInsertHeadTag(
    html,
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["'][^>]*>/i,
    `<meta property="og:url" content="${urlAttr}" />`
  );
  html = replaceOrInsertHeadTag(
    html,
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["'][^>]*>/i,
    `<meta property="og:title" content="${titleAttr}" />`
  );
  html = replaceOrInsertHeadTag(
    html,
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["'][^>]*>/i,
    `<meta property="og:description" content="${description}" />`
  );
  html = replaceOrInsertHeadTag(
    html,
    /<meta\s+name=["']twitter:url["']\s+content=["'][^"']*["'][^>]*>/i,
    `<meta name="twitter:url" content="${urlAttr}" />`
  );
  html = replaceOrInsertHeadTag(
    html,
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["'][^>]*>/i,
    `<meta name="twitter:title" content="${titleAttr}" />`
  );
  html = replaceOrInsertHeadTag(
    html,
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["'][^>]*>/i,
    `<meta name="twitter:description" content="${description}" />`
  );

  return html;
}
// Static server with SPA fallback: serve real files (assets), otherwise the
// root index.html so the SPA boots and react-router renders the route.
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const filePath = join(DIST, urlPath);
      try {
        if (urlPath !== "/" && existsSync(filePath) && statSync(filePath).isFile()) {
          const type = MIME[extname(filePath).toLowerCase()] || "application/octet-stream";
          res.writeHead(200, { "Content-Type": type });
          res.end(readFileSync(filePath));
          return;
        }
      } catch {
        /* fall through to SPA fallback */
      }
      res.writeHead(200, { "Content-Type": MIME[".html"] });
      res.end(indexHtml);
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function snapshot(browser, route) {
  const page = await browser.newPage();
  try {
    page.setDefaultNavigationTimeout(NAV_TIMEOUT);
    await page.goto(`http://localhost:${PORT}${route.path}`, {
      waitUntil: "networkidle0",
    });
    // Wait until React has rendered real content (not just the PageLoader).
    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        return root && root.innerText && root.innerText.trim().length > 200;
      },
      { timeout: NAV_TIMEOUT }
    );
    await new Promise((r) => setTimeout(r, SETTLE_MS));

    const html = applyRouteHead(await page.content(), route);

    // Sanity gate: don't overwrite the baseline with a broken/empty snapshot.
    if (!html.includes("<div id=\"root\">") || html.length < 2000) {
      throw new Error("snapshot looked empty");
    }

    const outDir = route.path === "/" ? DIST : join(DIST, route.path);
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), html);
    return { path: route.path, ok: true, bytes: html.length };
  } finally {
    await page.close();
  }
}

async function run() {
  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let ok = 0;
  let failed = 0;
  const queue = [...routes];

  async function worker() {
    while (queue.length) {
      const route = queue.shift();
      try {
        const r = await snapshot(browser, route);
        ok++;
        console.log(`  ✓ ${r.path} (${(r.bytes / 1024).toFixed(0)} KB)`);
      } catch (err) {
        failed++;
        console.warn(`  ✗ ${route.path} — kept head-only baseline (${err.message})`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  await browser.close();
  server.close();

  console.log(`\nPrerendered ${ok}/${routes.length} routes (${failed} fell back to baseline).`);
  if (ok === 0) {
    // Don't block the deploy: every route already has a head-only baseline from
    // generate-static-pages.mjs (today's behavior). Likely Chromium is missing
    // in the build env — warn loudly but ship the baseline rather than failing.
    console.warn("Prerender produced zero snapshots — shipping head-only baseline. Check Chromium availability in the build env.");
  }
}

run().catch((err) => {
  // Same rationale: a prerender crash must not break the build. Baseline ships.
  console.warn("Prerender step errored — shipping head-only baseline:", err.message);
});
