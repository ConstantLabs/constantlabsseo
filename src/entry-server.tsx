import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppContent } from "./App";
import { SERVICES, caseStudies } from "./data/projectsData";
import { blogPosts } from "./data/blogData";
import { freeTools } from "./data/freeToolsData";
import { cities } from "./data/cityData";
import { industries } from "./data/industryData";

export { routes, BASE_URL } from "./data/routeMeta";

export type RenderResult = { html: string; helmet: HelmetServerState | undefined };

/* Renders one route to HTML at build time. onAllReady waits for every lazy page and
   Suspense boundary, so the output is the finished page, not the loader. */
export function render(url: string): Promise<RenderResult> {
  const helmetContext: { helmet?: HelmetServerState } = {};
  return new Promise((resolve, reject) => {
    let html = "";
    let failed = false;
    const sink = new Writable({
      write(chunk, _encoding, done) {
        html += chunk.toString();
        done();
      },
    });
    sink.on("finish", () => {
      if (!failed) resolve({ html, helmet: helmetContext.helmet });
    });
    const stream = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppContent />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          stream.pipe(sink);
        },
        onShellError(error) {
          failed = true;
          reject(error);
        },
        onError(error) {
          failed = true;
          reject(error);
        },
      },
    );
  });
}

/* Every path the router can render from data. The prerender checks the route
   registry (scripts/routes.mjs) against this, so a new blog post, tool, city or
   service cannot ship without a prerendered page (it would 404 on a hard load). */
export function appPaths(): string[] {
  const slugify = (id: string) => id.toLowerCase().replace(/_/g, "-");
  return [
    ...SERVICES.map((s) => `/services/${slugify(s.id)}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
    ...freeTools.map((t) => `/tools/${t.slug}`),
    ...cities.map((c) => `/${c.slug}`),
    ...industries.map((i) => `/${i.slug}`),
  ];
}
