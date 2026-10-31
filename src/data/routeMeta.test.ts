import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { BASE_URL, routes } from "./routeMeta";

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

  it("retires the public pricing route and directs existing visitors to contact", () => {
    expect(routes.some((route) => route.path === "/pricing")).toBe(false);
    const config = JSON.parse(readFileSync(join(__dirname, "..", "..", "vercel.json"), "utf-8"));
    expect(config.redirects).toContainEqual({ source: "/pricing", destination: "/contact", permanent: true });
  });
});
