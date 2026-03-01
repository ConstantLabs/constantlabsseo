/**
 * Post-build script: generates per-route HTML files with baked-in meta tags.
 * This lets crawlers and social media scrapers see correct title/description/OG
 * tags without executing JavaScript.
 *
 * Run after `vite build`: node scripts/generate-static-pages.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const BASE_URL = "https://constantlabs.ai";

const routes = [
  {
    path: "/",
    title: "Constant Labs - Building Digital Experiences That Break Boundaries",
    description:
      "Constant Labs: We build fast, ship faster, scale infinitely. From AI-powered voice transcription to universal translators, we create innovative web applications with cutting-edge technology.",
  },
  {
    path: "/navii",
    title: "Navii - AI-Powered Navigation | Constant Labs",
    description:
      "Navii: AI-powered indoor navigation and wayfinding for airports, malls, hospitals, and large venues. Never get lost again.",
  },
  {
    path: "/navii/demo",
    title: "Navii Demo | Constant Labs",
    description:
      "Try Navii's AI-powered indoor navigation demo. Experience real-time wayfinding in action.",
  },
  {
    path: "/smartroads",
    title: "Smart Roads - End Traffic Jams Forever | Constant Labs",
    description:
      "Revolutionary traffic management system proven to eliminate congestion with just 5% adoption using RTK precision positioning.",
  },
  {
    path: "/smartroads/lite",
    title: "SmartRoads Lite - Full RTK Power, Smaller Package | Constant Labs",
    description:
      "All the precision and intelligence of SmartRoads in a compact, affordable form factor. Phone app or small LCD display with RTK positioning.",
  },
  {
    path: "/smartroads/capabilities",
    title: "Smart Roads Capabilities - 9 Integrated Core Features | Constant Labs",
    description:
      "Explore the 9 core capabilities of SmartRoads: Traffic Management, Road Health Intelligence, Emergency Response, and more.",
  },
  {
    path: "/smartroads/technology",
    title: "Smart Roads Technology - Precision Meets Intelligence | Constant Labs",
    description:
      "The technology behind SmartRoads: RTK GPS, 5G V2X communication, and AI-powered traffic coordination.",
  },
  {
    path: "/smartroads/research",
    title: "Smart Roads Research - Backed by Science | Constant Labs",
    description:
      "SmartRoads is built on validated research from MIT, UC Berkeley, and Vanderbilt proving traffic waves can be eliminated.",
  },
  {
    path: "/smartroads/implementation",
    title: "Smart Roads Implementation - Straightforward Deployment | Constant Labs",
    description:
      "SmartRoads implementation plan using proven government deployment models and nationwide RTK infrastructure.",
  },
  {
    path: "/smartroads/circles",
    title: "Smart Roads - CIRCLES Experiment | Constant Labs",
    description:
      "UC Berkeley's massive field test proving AI can smooth traffic flow and reduce fuel consumption by 40%.",
  },
  {
    path: "/smartroads/research-paper",
    title: "Smart Roads - Research Paper | Constant Labs",
    description:
      "Dissipation of Stop-and-Go Waves via Control of Autonomous Vehicles: Field Experiments.",
  },
  {
    path: "/smartroads/fhwa-report",
    title: "SmartRoads - FHWA Report | Constant Labs",
    description:
      "Federal Highway Administration report on traffic flow optimization and intelligent transportation systems.",
  },
  {
    path: "/smartroads/flow-paper",
    title: "SmartRoads - Traffic Flow Paper | Constant Labs",
    description:
      "Research paper on traffic flow optimization through autonomous vehicle coordination and wave dissipation.",
  },
  {
    path: "/smartroads/stabilizing-paper",
    title: "SmartRoads - Stabilizing Traffic Flow Paper | Constant Labs",
    description:
      "Research on stabilizing traffic flow through intelligent speed advisory and cooperative driving systems.",
  },
  {
    path: "/smartroads/suppressing-paper",
    title: "SmartRoads - Suppressing Traffic Waves Paper | Constant Labs",
    description:
      "Research on suppressing stop-and-go traffic waves using connected autonomous vehicles.",
  },
  {
    path: "/smartroads/virginia-tech",
    title: "SmartRoads - Virginia Tech Research | Constant Labs",
    description:
      "Virginia Tech Transportation Institute research on connected vehicle technology and traffic management.",
  },
  {
    path: "/robotics",
    title: "Robotics - AI-Powered Service Robots | Constant Labs",
    description:
      "Modular, AI-powered kiosk robots for hospitality, education, and service industries. From reception to coffee-serving - fully autonomous.",
  },
  {
    path: "/robotics/guideon",
    title: "GuideOn - Robotics | Constant Labs",
    description:
      "GuideOn: AI-powered service robot for hospitality and reception. Fully autonomous navigation and interaction.",
  },
  {
    path: "/robotics/guideon-desk",
    title: "GuideOn Desk - Robotics | Constant Labs",
    description:
      "GuideOn Desk: Compact AI-powered desktop robot for customer service and information delivery.",
  },
  {
    path: "/robotics/merhaab",
    title: "Merhaab - Robotics | Constant Labs",
    description:
      "Merhaab: AI-powered hospitality robot designed for greeting and guiding visitors in commercial spaces.",
  },
  {
    path: "/robotics/inmoov",
    title: "InMoov - Robotics | Constant Labs",
    description:
      "InMoov: Open-source humanoid robot platform with AI integration for education and research.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Constant Labs",
    description: "Privacy Policy for Constant Labs applications and services.",
  },
  {
    path: "/terms",
    title: "Terms of Service | Constant Labs",
    description: "Terms of Service for Constant Labs applications and services.",
  },
];

// Read the built index.html as template
const template = readFileSync(join(DIST, "index.html"), "utf-8");

let generated = 0;

for (const route of routes) {
  // Skip root — it already has index.html
  if (route.path === "/") continue;

  const url = `${BASE_URL}${route.path}`;

  // Replace meta tags in the template
  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description"\s+content="[^"]*">/,
    `<meta name="description" content="${route.description}">`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${route.description}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/>/,
    `<meta name="twitter:url" content="${url}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // Write to dist/<route>/index.html
  const dir = join(DIST, route.path);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(join(dir, "index.html"), html);
  generated++;
}

console.log(`Generated ${generated} static HTML files for SEO.`);
