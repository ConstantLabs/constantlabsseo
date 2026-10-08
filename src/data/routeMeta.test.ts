import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { BASE_URL, routes } from "./routeMeta";
import { seoTiers } from "./facts";

describe("route registry", () => {
  it("includes the homepage exactly once and no duplicate paths", () => {
    expect(routes.filter((r) => r.path === "/")).toHaveLength(1);
    expect(new Set(routes.map((r) => r.path)).size).toBe(routes.length);
  });

  it("matches public/sitemap.xml exactly", () => {
    const xml = readFileSync(join(__dirname, "..", "..", "public", "sitemap.xml"), "utf-8");
    const sitemap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(BASE_URL, "") || "/");
    expect([...sitemap].sort()).toEqual(routes.map((r) => r.path).sort());
  });

  it("takes the pricing title's price from facts", () => {
    const pricing = routes.find((r) => r.path === "/pricing")!;
    expect(pricing.title).toContain(`AED ${seoTiers.starter.aed.toLocaleString("en-US")}`);
  });
});
