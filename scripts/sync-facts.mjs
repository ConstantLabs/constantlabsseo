/**
 * Pulls the Constant Labs business facts before every build.
 *
 * https://constantlabs.ai/facts.json is the single source of truth for name,
 * contact, hours and service metadata across constantlabs.ai, websites. and seo.
 * This script fetches it and writes src/data/facts.json, which the app, the
 * JSON-LD and llms.txt all read. If the fetch fails (offline, URL not live yet,
 * bad JSON, missing fields, or an older revision) the committed copy is kept.
 * A stale remote must not restore offers removed by a newer committed revision.
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
  if (typeof facts.updated !== "string" || !Number.isFinite(Date.parse(facts.updated))) problems.push("updated");
  if (!facts.brand?.name) problems.push("brand.name");
  if (!facts.contact?.email) problems.push("contact.email");
  if (!facts.contact?.phone) problems.push("contact.phone");
  if (!facts.contact?.hours?.opens || !facts.contact?.hours?.closes) problems.push("contact.hours");
  if ("currency" in facts) problems.push("private currency rules must not be public");
  if ("free" in facts) problems.push("removed free-service offers must not be public");
  if (Array.isArray(facts.offers) && facts.offers.some((offer) => "prices" in offer)) {
    problems.push("service prices must not be public");
  }
  const seo = Array.isArray(facts.offers) ? facts.offers.find((o) => o.id === "seo") : null;
  if (!seo) problems.push("offers[seo]");
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
    if (problems.length) throw new Error(`invalid facts: ${problems.join(", ")}`);
    return facts;
  } finally {
    clearTimeout(timer);
  }
}

async function run() {
  const local = JSON.parse(readFileSync(LOCAL, "utf-8"));
  const localProblems = validateFacts(local);
  if (localProblems.length) {
    throw new Error(`committed ${LOCAL} is invalid: ${localProblems.join(", ")}`);
  }

  try {
    const remote = await fetchRemote();
    if (Date.parse(remote.updated) < Date.parse(local.updated)) {
      throw new Error(`remote revision ${remote.updated} is older than committed ${local.updated}`);
    }
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
