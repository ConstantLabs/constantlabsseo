import test from "node:test";
import assert from "node:assert/strict";
import { routes } from "./routes.mjs";

test("the prerender registry includes the homepage exactly once", () => {
  assert.equal(routes.filter((route) => route.path === "/").length, 1);
});
