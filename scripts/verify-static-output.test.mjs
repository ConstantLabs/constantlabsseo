import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const verifier = join(__dirname, "verify-static-output.mjs");

function runVerifier() {
  return spawnSync(process.execPath, [verifier], {
    cwd: join(__dirname, ".."),
    encoding: "utf8",
  });
}

function withRestoredOutput(path, alter, verify) {
  const file = join(DIST, path, "index.html");
  const original = readFileSync(file, "utf-8");
  try {
    writeFileSync(file, alter(original));
    verify();
  } finally {
    writeFileSync(file, original);
  }
}

test("verification fails when a representative page loses its Open Graph URL", () => {
  withRestoredOutput(
    "services",
    (html) => html.replace(/<meta property="og:url" content="[^"]*"\s*\/?\s*>/i, ""),
    () => {
      const result = runVerifier();
      assert.notEqual(result.status, 0, "metadata loss must make verification fail");
      assert.match(`${result.stdout}${result.stderr}`, /Missing Open Graph URL/);
    }
  );
});

test("verification fails when the homepage phrase is outside an H1", () => {
  withRestoredOutput(
    ".",
    (html) => html.replace(
      /<h1\b([^>]*)>Build the answer people find\.<\/h1>/i,
      "<p$1>Build the answer people find.</p>"
    ),
    () => {
      const result = runVerifier();
      assert.notEqual(result.status, 0, "a homepage phrase outside H1 must make verification fail");
      assert.match(`${result.stdout}${result.stderr}`, /homepage H1/);
    }
  );
});
