# Task 4 — Homepage Prerender Contract and Static SEO Verification

## TDD evidence

- RED: `node --test scripts/routes.test.mjs` exited `1` before the implementation. The real exported registry contained zero homepage routes (`0 !== 1`).
- GREEN: the same command exited `0` after adding the root entry; it reports one passing test.

## Build and prerender evidence

- `npm run build` exited `0` (captured directly from the build process).
- The completed prerender log reports: `Prerendered 50/50 routes (0 fell back to baseline).`
- The full log was inspected for `✗`, fallback, zero-snapshot, and prerender-error markers; none occurred. The only stderr output was existing browser-data freshness warnings from `baseline-browser-mapping` and Browserslist.

## Static output verification

- `npm run verify:static` exited `0`.
- The verifier reads built `dist` HTML, not source files. It checks a nonempty prerendered root with the homepage H1, homepage description/canonical/Open Graph URL, plus rendered service, Dubai city, and meta-tag-tool content.
- Root generation and prerendering now write `/` to `dist/index.html`; all other routes continue to write to `dist/<route>/index.html`.

## Files changed

- `scripts/routes.mjs`
- `scripts/generate-static-pages.mjs`
- `scripts/prerender.mjs`
- `scripts/routes.test.mjs`
- `scripts/verify-static-output.mjs`
- `package.json`

## Self-review

- `/` is present exactly once in the shared registry and remains consumed by both static stages.
- The verification contract exercises the generated consumer-facing artifacts and fails on absent, empty, or incorrect representative output.
- `git diff --check` exited `0`; only Task 4 implementation files were included in the implementation commit. `mcp.json` remains ignored by `.gitignore`.

## Commit

- Implementation: `a87a04af8f682b39b71d59f2e9efcfdc67a90522` (`fix: prerender the ConstantSEO homepage`)

## Concerns

- No functional concerns. The build emits pre-existing browser compatibility-data freshness warnings; they do not affect the exit status or prerender output.

## Fix Round 1

### Regression-first evidence

- RED: `node --test scripts/verify-static-output.test.mjs` exited `1`. Removing the services page Open Graph URL and moving the homepage phrase from its H1 both incorrectly allowed the CLI verifier to exit `0`.
- GREEN: the same regression command exited `0` after the repair, with both tests passing.

### Repair

- Metadata verification now runs for every representative artifact: homepage, services, Dubai city landing page, and meta-tag tool.
- The homepage phrase must be inside an actual H1.
- Per-route snapshot failures now retain their baseline only for diagnosis and set a nonzero process status. Outer prerender failures log an explicit error and also set a nonzero status.

### Final verification

- `node --test scripts/routes.test.mjs scripts/verify-static-output.test.mjs` exited `0` (3 passing tests).
- `npm run build` exited `0`; the complete log reports `Prerendered 50/50 routes (0 fell back to baseline)` and contains no failed-route or outer-failure marker.
- `npm run verify:static` exited `0` against that fresh build output.
- `git diff --check` exited `0`.

### Files and self-review

- Changed: `scripts/prerender.mjs`, `scripts/verify-static-output.mjs`, and `scripts/verify-static-output.test.mjs`.
- The new regression test invokes the actual CLI against intentionally altered, restored `dist` artifacts; it does not assert source text or use mocks.
- The process exits nonzero for both snapshot-failure and outer-failure paths, preventing head-only fallback output from being accepted as a successful prerender.

### Commit

- Implementation: `419fbc74213a947407cf917850696c46caad9c99` (`fix: enforce static SEO verification`)

### Concerns

- No functional concerns. Existing browser compatibility-data freshness warnings remain unchanged.
