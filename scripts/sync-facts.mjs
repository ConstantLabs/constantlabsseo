/**
 * Pulls the Constant Labs business facts before every build.
 *
 * https://constantlabs.ai/facts.json is the single source of truth for name,
 * contact, hours, offers and prices across constantlabs.ai, websites. and seo.
 * This script fetches it and writes src/data/facts.json, which the app, the
 * JSON-LD and llms.txt all read. If the fetch fails (offline, URL not live yet,
 * bad JSON, missing fields) the committed copy is kept and the build goes on.
 * Either way it logs which copy the build used.
 *
 * Run: node scripts/sync-facts.mjs   (the build runs it first)
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOCAL = join(__dirname, "..", "src", "data", "facts.json");
const REMOTE = process.env.FACTS_URL || "https://constantlabs.ai/facts.json";
const TIMEOUT_MS = 8000;

/** The fields this site reads. A remote file missing any of them is rejected. */
export function validateFacts(facts) {
  const problems = [];
  if (!facts || typeof facts !== "object") return ["not an object"];
  if (!facts.brand?.name) problems.push("brand.name");
  if (!facts.contact?.email) problems.push("contact.email");
  if (!facts.contact?.phone) problems.push("contact.phone");
  if (!facts.contact?.hours?.opens || !facts.contact?.hours?.closes) problems.push("contact.hours");
  if (typeof facts.currency?.usdPerAed !== "number") problems.push("currency.usdPerAed");
  const seo = Array.isArray(facts.offers) ? facts.offers.find((o) => o.id === "seo") : null;
  if (!seo) problems.push("offers[seo]");
  for (const id of ["seo-starter", "seo-growth", "seo-enterprise", "seo-dominance"]) {
    const price = seo?.prices?.find((p) => p.id === id);
    if (!price || typeof price.aed !== "number") problems.push(`offers[seo].prices[${id}]`);
  }
  return problems;
}

async function fetchRemote() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(REMOTE, { signal: controller.signal, headers: { accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const type = res.headers.get("content-type") || "";
    if (!type.includes("json")) throw new Error(`content-type ${type || "missing"}`);
    const facts = await res.json();
    const problems = validateFacts(facts);
    if (problems.length) throw new Error(`missing ${problems.join(", ")}`);
    return facts;
  } finally {
    clearTimeout(timer);
  }
}

async function run() {
  const local = JSON.parse(readFileSync(LOCAL, "utf-8"));
  const localProblems = validateFacts(local);
  if (localProblems.length) {
    throw new Error(`committed ${LOCAL} is missing ${localProblems.join(", ")}`);
  }

  try {
    const remote = await fetchRemote();
    const next = `${JSON.stringify(remote, null, 2)}\n`;
    if (next !== readFileSync(LOCAL, "utf-8")) writeFileSync(LOCAL, next);
    console.log(`[facts] using REMOTE ${REMOTE} (updated ${remote.updated ?? "?"})`);
  } catch (err) {
    console.log(
      `[facts] using COMMITTED src/data/facts.json (updated ${local.updated ?? "?"}); remote ${REMOTE} unavailable: ${err.message}`
    );
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  run().catch((err) => {
    console.error(`[facts] ${err.message}`);
    process.exitCode = 1;
  });
}
