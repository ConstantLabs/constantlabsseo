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
    title: "Constant Labs — Dubai Tech Studio | AI, Web & Hardware Solutions in UAE",
    description:
      "Constant Labs — Dubai-based technology studio. AI-powered applications, web platforms, robotics, and IoT solutions. Building the future from the UAE and the Emirates.",
  },
  {
    path: "/navii",
    title: "Navii - AI-Powered Navigation | Constant Labs — Dubai",
    description:
      "Navii: AI-powered indoor navigation and wayfinding for airports, malls, hospitals, and large venues. Built by Constant Labs, Dubai, UAE.",
  },
  {
    path: "/navii/demo",
    title: "Navii Demo | Constant Labs — Dubai",
    description:
      "Try Navii's AI-powered indoor navigation demo. Experience real-time wayfinding in action.",
  },
  {
    path: "/smartroads",
    title: "Smart Roads - End Traffic Jams Forever | Constant Labs — Dubai",
    description:
      "Revolutionary traffic management system proven to eliminate congestion with just 5% adoption using RTK precision positioning.",
  },
  {
    path: "/smartroads/lite",
    title: "SmartRoads Lite - Full RTK Power, Smaller Package | Constant Labs — Dubai",
    description:
      "All the precision and intelligence of SmartRoads in a compact, affordable form factor. Phone app or small LCD display with RTK positioning.",
  },
  {
    path: "/smartroads/capabilities",
    title: "Smart Roads Capabilities - 9 Integrated Core Features | Constant Labs — Dubai",
    description:
      "Explore the 9 core capabilities of SmartRoads: Traffic Management, Road Health Intelligence, Emergency Response, and more.",
  },
  {
    path: "/smartroads/technology",
    title: "Smart Roads Technology - Precision Meets Intelligence | Constant Labs — Dubai",
    description:
      "The technology behind SmartRoads: RTK GPS, 5G V2X communication, and AI-powered traffic coordination.",
  },
  {
    path: "/smartroads/research",
    title: "Smart Roads Research - Backed by Science | Constant Labs — Dubai",
    description:
      "SmartRoads is built on validated research from MIT, UC Berkeley, and Vanderbilt proving traffic waves can be eliminated.",
  },
  {
    path: "/smartroads/implementation",
    title: "Smart Roads Implementation - Straightforward Deployment | Constant Labs — Dubai",
    description:
      "SmartRoads implementation plan using proven government deployment models and nationwide RTK infrastructure.",
  },
  {
    path: "/smartroads/circles",
    title: "Smart Roads - CIRCLES Experiment | Constant Labs — Dubai",
    description:
      "UC Berkeley's massive field test proving AI can smooth traffic flow and reduce fuel consumption by 40%.",
  },
  {
    path: "/smartroads/research-paper",
    title: "Smart Roads - Research Paper | Constant Labs — Dubai",
    description:
      "Dissipation of Stop-and-Go Waves via Control of Autonomous Vehicles: Field Experiments.",
  },
  {
    path: "/smartroads/fhwa-report",
    title: "SmartRoads - FHWA Report | Constant Labs — Dubai",
    description:
      "Federal Highway Administration report on traffic flow optimization and intelligent transportation systems.",
  },
  {
    path: "/smartroads/flow-paper",
    title: "SmartRoads - Traffic Flow Paper | Constant Labs — Dubai",
    description:
      "Research paper on traffic flow optimization through autonomous vehicle coordination and wave dissipation.",
  },
  {
    path: "/smartroads/stabilizing-paper",
    title: "SmartRoads - Stabilizing Traffic Flow Paper | Constant Labs — Dubai",
    description:
      "Research on stabilizing traffic flow through intelligent speed advisory and cooperative driving systems.",
  },
  {
    path: "/smartroads/suppressing-paper",
    title: "SmartRoads - Suppressing Traffic Waves Paper | Constant Labs — Dubai",
    description:
      "Research on suppressing stop-and-go traffic waves using connected autonomous vehicles.",
  },
  {
    path: "/smartroads/virginia-tech",
    title: "SmartRoads - Virginia Tech Research | Constant Labs — Dubai",
    description:
      "Virginia Tech Transportation Institute research on connected vehicle technology and traffic management.",
  },
  {
    path: "/robotics",
    title: "Robotics - AI-Powered Service Robots | Constant Labs — Dubai",
    description:
      "Modular, AI-powered kiosk robots for hospitality, education, and service industries. From reception to coffee-serving - fully autonomous. Built in Dubai, UAE.",
  },
  {
    path: "/robotics/guideon",
    title: "GuideOn - Robotics | Constant Labs — Dubai",
    description:
      "GuideOn: AI-powered service robot for hospitality and reception. Fully autonomous navigation and interaction.",
  },
  {
    path: "/robotics/guideon-desk",
    title: "GuideOn Desk - Robotics | Constant Labs — Dubai",
    description:
      "GuideOn Desk: Compact AI-powered desktop robot for customer service and information delivery.",
  },
  {
    path: "/robotics/merhaab",
    title: "Merhaab - Robotics | Constant Labs — Dubai",
    description:
      "Merhaab: AI-powered hospitality robot designed for greeting and guiding visitors in commercial spaces.",
  },
  {
    path: "/robotics/inmoov",
    title: "InMoov - Robotics | Constant Labs — Dubai",
    description:
      "InMoov: Open-source humanoid robot platform with AI integration for education and research.",
  },
  // Projects
  {
    path: "/projects/mufakkir",
    title: "MUFAKKIR - Arabic Voice Transcription | Constant Labs — Dubai",
    description:
      "Voice-to-text Arabic transcription app with AI. Real-time speech recognition supporting 50+ languages and 10+ Arabic dialects. Built by Constant Labs, Dubai, UAE.",
  },
  {
    path: "/projects/motargem",
    title: "MOTARGEM - Universal Translator | Constant Labs — Dubai",
    description:
      "Universal translator breaking language barriers. Real-time translation with voice, text, and camera input. Built by Constant Labs, Dubai, UAE.",
  },
  {
    path: "/projects/voicetype",
    title: "VOICETYPE - Dictate Anywhere | Constant Labs — Dubai",
    description:
      "Dictate anywhere on your PC with a keyboard shortcut. Real-time speech-to-text that types directly into any app. Built by Constant Labs, Dubai, UAE.",
  },
  {
    path: "/projects/athkar-desktop",
    title: "ATHKAR DESKTOP | Constant Labs — Dubai",
    description:
      "Elegant desktop application for Islamic remembrance with notifications and beautiful UI for daily prayers. Built by Constant Labs, Dubai, UAE.",
  },
  {
    path: "/projects/mosque-silence",
    title: "MOSQUE SILENCE | Constant Labs — Dubai",
    description:
      "Smart Android app that automatically silences phones in the vicinity of mosques using geolocation. Built by Constant Labs, Dubai, UAE.",
  },
  {
    path: "/projects/medieval-quest-journal",
    title: "MEDIEVAL QUEST JOURNAL | Constant Labs — Dubai",
    description:
      "Immersive medieval-inspired quest tracker with rich 3-column UI for tabletop RPG adventures.",
  },
  {
    path: "/projects/sanaye",
    title: "SANAYE - UAE Industrial Directory | Constant Labs — Dubai",
    description:
      "Making UAE industrial areas accessible. Find specialized shops, parts, services, and craftsmen across industrial zones.",
  },
  {
    path: "/projects/paper-to-product",
    title: "PAPER TO PRODUCT | Constant Labs — Dubai",
    description:
      "Research intelligence platform. Search 225M+ papers and 12M+ patents, find expired patents, and convert research into product specs with AI.",
  },
  {
    path: "/projects/crescent-watch",
    title: "CRESCENT WATCH | Constant Labs — Dubai",
    description:
      "Islamic lunar crescent visibility tool. Precision moon tracking and simulation for determining Ramadan, Eid, and Islamic calendar dates worldwide.",
  },
  {
    path: "/projects/fzn-dining",
    title: "FZN DINING EXPERIENCE | Constant Labs — Dubai",
    description:
      "Three Michelin-starred fine dining experience by Chef Björn Frantzén. Nordic Kaiseki meets Japanese precision in Dubai. Elegant reservation system.",
  },
  {
    path: "/projects/cut-in-half",
    title: "CUT IN HALF - Dubai Wagyu Burgers | Constant Labs — Dubai",
    description:
      "Premium Dubai Wagyu burger restaurant chain with 4 locations. Interactive menu, milkshake builder, multi-location ordering.",
  },
  {
    path: "/projects/darwish-cafe",
    title: "DARWISH CAFE | Constant Labs — Dubai",
    description:
      "Premium coffee shop website with elegant branding and a warm, inviting digital presence. Built by Constant Labs, Dubai.",
  },
  {
    path: "/projects/variety-coffee",
    title: "VARIETY COFFEE | Constant Labs — Dubai",
    description:
      "Specialty coffee brand website with modern aesthetics and a focus on the craft behind every cup.",
  },
  {
    path: "/projects/delhi-darbar",
    title: "DELHI DARBAR | Constant Labs — Dubai",
    description:
      "Legendary Mughlai restaurant chain (est. 1946) with 8 outlets across Dubai and Mumbai. Full menu, catering, and multi-location support.",
  },
  {
    path: "/projects/topwatches",
    title: "TOPWATCHES - Luxury Timepieces | Constant Labs — Dubai",
    description:
      "Curated marketplace for pre-owned luxury timepieces — Rolex, Patek Philippe, AP. Authenticated, insured, shipped worldwide.",
  },
  {
    path: "/projects/drive-for-less",
    title: "DRIVE FOR LESS DUBAI | Constant Labs — Dubai",
    description:
      "Luxury car rental in Dubai — Mercedes Brabus, Lamborghini, Bentley at below-market rates. Free delivery, full insurance.",
  },
  {
    path: "/projects/parfum-central",
    title: "PARFUM CENTRAL | Constant Labs — Dubai",
    description:
      "Fully customized Shopify perfume store. Premium fragrance e-commerce with curated collections and seamless checkout.",
  },
  {
    path: "/projects/gcc-dental",
    title: "GCC DENTAL CLINIC | Constant Labs — Dubai",
    description:
      "Professional dental clinic website for the UAE. Services, team profiles, and appointment booking with a clean healthcare aesthetic.",
  },
  {
    path: "/projects/be-healthy",
    title: "BE HEALTHY FOOD | Constant Labs — Dubai",
    description:
      "Arabic health food brand website. Clean, fresh design for a healthy lifestyle brand in the UAE.",
  },
  // Legal
  {
    path: "/privacy",
    title: "Privacy Policy | Constant Labs — Dubai",
    description: "Privacy Policy for Constant Labs applications and services.",
  },
  {
    path: "/terms",
    title: "Terms of Service | Constant Labs — Dubai",
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
