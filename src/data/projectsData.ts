import {
  ShoppingCart, Smartphone, Plug, Users, Globe, Database, Monitor, Bot, Cpu,
  Shield, Brain, Megaphone
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import mufakkirImg from "@/assets/projects/mufakkir.webp";
import motargemImg from "@/assets/projects/motargem.webp";
import speechToTextPcImg from "@/assets/projects/speech-to-text-pc.webp";
import athkarImg from "@/assets/projects/athkar.webp";
import mosqueSilenceImg from "@/assets/projects/mosque-silence.webp";
import medievalQuestImg from "@/assets/projects/medieval-quest.webp";
import fznDiningImg from "@/assets/projects/fzn-dining.webp";

import cutInHalfImg from "@/assets/projects/cut-in-half.webp";
import sinaaiyaImg from "@/assets/projects/sinaaiya.webp";
import guideonImg from "@/assets/projects/guideon.webp";
import naviiImg from "@/assets/projects/navii.webp";
import darwishCafeImg from "@/assets/projects/darwish-cafe.webp";
import varietyCoffeeImg from "@/assets/projects/variety-coffee.webp";
import delhiDarbarImg from "@/assets/projects/delhi-darbar.webp";
import topwatchesImg from "@/assets/projects/topwatches.webp";
import driveforlessImg from "@/assets/projects/driveforless.webp";
import papertoproductImg from "@/assets/projects/papertoproduct.webp";
import gccDentalImg from "@/assets/projects/gcc-dental.webp";
import crescentWatchImg from "@/assets/projects/crescent-watch.webp";

import beHealthyImg from "@/assets/projects/be-healthy.webp";
import parfumcentralImg from "@/assets/projects/parfumcentral.webp";
import firstwayImg from "@/assets/projects/firstway.webp";
import ramadanTrackerImg from "@/assets/projects/ramadan-tracker.webp";
import tripBillSplitterImg from "@/assets/projects/trip-bill-splitter.webp";

// ─── Service Types ───────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
  oneLiner: string;
  link?: string;
}

export const SERVICES: Service[] = [
  {
    id: "E_COMMERCE",
    title: "E-Commerce",
    icon: ShoppingCart,
    description: "Full-stack online stores, payment integrations, and inventory systems that convert visitors into customers.",
    tags: ["Shopify Integration", "Custom Carts", "Payment APIs"],
    oneLiner: "Online stores that convert",
  },
  {
    id: "MOBILE_WEB_APPS",
    title: "Mobile & Web Apps",
    icon: Smartphone,
    description: "Native and cross-platform apps for iOS, Android, and the web — built from scratch around your users' needs.",
    tags: ["React Native", "Flutter", "PWA"],
    oneLiner: "Apps your users actually want",
  },
  {
    id: "DASHBOARDS_INTERNAL_TOOLS",
    title: "Dashboards & Internal Tools",
    icon: Monitor,
    description: "Admin panels, analytics dashboards, and business tools that give your team real-time visibility and control.",
    tags: ["Admin Panels", "Analytics", "Business Intelligence"],
    oneLiner: "Your data, at a glance",
  },
  {
    id: "AI_AGENTS",
    title: "AI Agents & Automation",
    icon: Bot,
    description: "Deploy AI agents that read emails, answer customers, generate reports, and make decisions autonomously — so your team focuses on what humans do best.",
    tags: ["AI Agents", "LLMs", "Autonomous Ops"],
    oneLiner: "AI that works while you sleep",
  },
  {
    id: "CUSTOM_AI_AGENTS",
    title: "Custom AI Agents",
    icon: Brain,
    description: "Purpose-built AI agents tailored to your workflows. From customer support bots to autonomous data processors, we build agents that understand your business.",
    tags: ["Custom Agents", "LLM Ops", "Workflow AI"],
    oneLiner: "Your business, automated",
  },
  {
    id: "PRIVATE_AI",
    title: "Privacy-First Local AI",
    icon: Shield,
    description: "Deploy AI models on-premise. Your data never leaves your servers. Custom LLMs, RAG pipelines, and inference engines running locally for compliance-sensitive businesses.",
    tags: ["On-Premise AI", "Local LLMs", "Data Privacy"],
    oneLiner: "AI that stays in-house",
  },
  {
    id: "SYSTEM_INTEGRATION",
    title: "System Integration",
    icon: Plug,
    description: "Connect your existing tools and eliminate data silos. We wire your CRM, payments, and third-party services into one unified pipeline.",
    tags: ["APIs", "Webhooks", "Middleware"],
    oneLiner: "Wire your systems together",
  },
  {
    id: "B2B_B2C_PLATFORMS",
    title: "B2B/B2C Platforms",
    icon: Users,
    description: "Multi-sided platforms that serve your business partners and end customers with tailored experiences under one roof.",
    tags: ["Portals", "Marketplaces", "Multi-tenant"],
    oneLiner: "Platforms for every audience",
  },
  {
    id: "DIGITAL_PRESENCE",
    title: "Digital Presence",
    icon: Globe,
    description: "Websites, landing pages, and digital identities that make your brand impossible to ignore.",
    tags: ["Web Design", "Motion Graphics", "Branding"],
    oneLiner: "Brands that stand out online",
  },
  {
    id: "DIGITAL_MARKETING",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "SEO, paid ads, social media management, and content strategy that drive real traffic and measurable ROI.",
    tags: ["SEO", "Google Ads", "Social Media", "Content"],
    oneLiner: "Growth you can measure",
  },
  {
    id: "IOT_EMBEDDED",
    title: "IoT & Embedded Systems",
    icon: Cpu,
    description: "Connected devices, sensor networks, and embedded firmware — from prototype to deployment in the field.",
    tags: ["Hardware", "Sensors", "Firmware"],
    oneLiner: "Smart devices, real world",
  },
  {
    id: "ERP_INTEGRATIONS",
    title: "ERP Integrations",
    icon: Database,
    description: "Seamless connections to SAP, Oracle, Odoo and other enterprise systems. Your data, unified.",
    tags: ["SAP", "Oracle", "Odoo", "Custom ERP"],
    oneLiner: "Enterprise systems, unified",
  },
];

// ─── Project Types ───────────────────────────────────────────────

export type ProjectStatus = "live" | "beta" | "development" | "repository";
export type ProjectCategory = "software" | "client" | "hardware";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  tech: string[];
  status: ProjectStatus;
  link: string;
  image: string;
  imagePosition?: "top" | "center";
  features: string[];
  internalRoute?: string;
}

// ─── Software Projects ──────────────────────────────────────────

export const softwareProjects: Project[] = [
  {
    slug: "mufakkir",
    title: "MUFAKKIR",
    category: "software",
    description: "Voice-to-text Arabic transcription app with AI. Real-time speech recognition supporting 50+ languages and 10+ Arabic dialects. Transform thoughts into organized notes.",
    longDescription: "Mufakkir is an AI-powered voice-to-text transcription platform built specifically for Arabic speakers. It supports real-time speech recognition across 50+ languages and more than 10 Arabic dialects — from Gulf Arabic to Levantine, Egyptian, and Maghrebi. Whether you're a student recording lectures, a journalist capturing interviews, or a professional organizing meeting notes, Mufakkir transforms spoken words into clean, structured text. Built in Dubai to serve the Arabic-speaking world.",
    tech: ["AI", "Speech-to-Text", "Arabic", "Multi-dialect"],
    status: "live",
    link: "https://mufakkir.app",
    image: mufakkirImg,
    features: [
      "Real-time speech recognition in 50+ languages",
      "10+ Arabic dialect support including Gulf, Levantine, Egyptian",
      "AI-powered text organization and formatting",
      "Export notes in multiple formats",
      "Works offline for privacy-sensitive recordings",
    ],
  },
  {
    slug: "motargem",
    title: "MOTARGEM",
    category: "software",
    description: "Universal translator breaking language barriers. Real-time translation with voice, text, and camera input. Natural conversations across different languages.",
    longDescription: "Motargem is a universal translation tool designed to break language barriers in real time. Whether through voice, text, or camera input, it delivers fast and natural translations for cross-language conversations. Built for travelers, businesses, and multilingual teams across the UAE and beyond, Motargem enables seamless communication without friction.",
    tech: ["Translation AI", "Real-time", "Voice Input", "Multi-language"],
    status: "live",
    link: "https://motargem-v2.vercel.app/",
    image: motargemImg,
    features: [
      "Real-time voice translation between languages",
      "Camera-based text translation (OCR)",
      "Text input with instant translation",
      "Natural conversational tone preservation",
      "Optimized for Arabic-English translation",
    ],
  },
  {
    slug: "voicetype",
    title: "VOICETYPE",
    category: "software",
    description: "Dictate anywhere on your PC with a keyboard shortcut. Real-time speech-to-text that types directly into any app — no copy-pasting needed.",
    longDescription: "Speech to Text PC turns your voice into typed text anywhere on Windows. Hit a keyboard shortcut, speak, and your words appear wherever your cursor is — any app, any text field, no copy-paste. Built for speed and convenience, it uses real-time speech recognition to let you dictate emails, messages, code comments, and documents hands-free.",
    tech: ["JavaScript", "Speech Recognition", "Windows API", "Hotkeys"],
    status: "repository",
    link: "https://github.com/Astrobubu/Speak-to-Windows",
    image: speechToTextPcImg,
    features: [
      "Global keyboard shortcut to start dictation",
      "Types directly into any active application",
      "Real-time speech-to-text recognition",
      "Works with any text field on Windows",
      "Lightweight and runs in the background",
    ],
  },
  {
    slug: "athkar-desktop",
    title: "ATHKAR DESKTOP",
    category: "software",
    description: "Elegant desktop application for Islamic remembrance with notifications and beautiful UI for daily prayers.",
    longDescription: "Athkar Desktop is an elegant cross-platform desktop application for Islamic daily remembrance (Athkar). It provides timed notifications, a beautiful UI for morning and evening supplications, and customizable reminders. Built with Electron for Windows, macOS, and Linux — keeping faith and technology in harmony.",
    tech: ["Electron", "JavaScript", "Node.js", "Cross-platform"],
    status: "repository",
    link: "https://github.com/Astrobubu/Athkar-Desktop",
    image: athkarImg,
    features: [
      "Morning and evening Athkar collections",
      "Timed notification reminders",
      "Beautiful, distraction-free reading mode",
      "Cross-platform: Windows, macOS, Linux",
      "Customizable reminder schedules",
    ],
  },
  {
    slug: "mosque-silence",
    title: "MOSQUE SILENCE",
    category: "software",
    description: "Smart Android app that automatically silences phones in the vicinity of mosques using geolocation.",
    longDescription: "Mosque Silence is a smart Android app that automatically silences your phone when you enter a mosque. Using geolocation and a curated database of mosque locations across the UAE and beyond, it ensures your phone won't disrupt prayers. Respectful, automatic, and effortless — the way technology should support worship.",
    tech: ["Flutter", "Dart", "Geolocation", "Android"],
    status: "repository",
    link: "https://github.com/Astrobubu/MosqueSilence",
    image: mosqueSilenceImg,
    features: [
      "Automatic phone silencing near mosques",
      "GPS-based mosque proximity detection",
      "UAE mosque database",
      "Battery-efficient background service",
      "Customizable silence radius",
    ],
  },
  {
    slug: "medieval-quest-journal",
    title: "MEDIEVAL QUEST JOURNAL",
    category: "software",
    description: "Immersive medieval-inspired quest tracker with rich 3-column UI for tabletop RPG adventures.",
    longDescription: "Medieval Quest Journal is an immersive, medieval-themed quest tracker designed for tabletop RPG enthusiasts. With a rich 3-column layout, it helps dungeon masters and players organize quests, track progress, and immerse themselves in fantasy worlds. Parchment textures, gothic typography, and interactive UI elements bring the adventure to life.",
    tech: ["HTML", "CSS", "JavaScript", "Fantasy UI"],
    status: "repository",
    link: "https://github.com/Astrobubu/Medieval-Quest-Journal",
    image: medievalQuestImg,
    features: [
      "3-column quest management layout",
      "Medieval/fantasy themed UI design",
      "Quest progress tracking",
      "Character and inventory management",
      "Immersive parchment and gothic aesthetics",
    ],
  },
  {
    slug: "sanaye",
    title: "SANAYE",
    category: "software",
    description: "Making UAE industrial areas accessible. Find specialized shops, parts, services, and craftsmen across industrial zones.",
    longDescription: "Sanaye (صنائع) makes UAE industrial areas accessible to everyone. Find specialized shops, spare parts, services, and craftsmen across industrial zones in Dubai, Sharjah, and beyond. With map integration and categorized listings, Sanaye connects you to the skilled workforce and specialized suppliers that keep the UAE running.",
    tech: ["React", "Maps", "Arabic", "Vercel"],
    status: "live",
    link: "https://sinaaiya.vercel.app/",
    image: sinaaiyaImg,
    features: [
      "Interactive map of UAE industrial zones",
      "Categorized shop and service listings",
      "Arabic and English bilingual interface",
      "Search by trade, part, or service type",
      "Covers Dubai, Sharjah, and more",
    ],
  },
  {
    slug: "navii",
    title: "NAVII",
    category: "software",
    description: "AR indoor navigation for malls, airports, and large indoor spaces. Turn-by-turn guidance without GPS.",
    longDescription: "Navii is an augmented reality indoor navigation system for malls, airports, hospitals, and other large indoor spaces. Where GPS fails, Navii uses AR markers and computer vision to provide turn-by-turn guidance right on your phone screen. Built for Dubai's massive malls and growing infrastructure, Navii is redefining how people navigate indoor spaces.",
    tech: ["AR", "Indoor Navigation", "React", "Vercel"],
    status: "development",
    link: "https://constantlabs.ai/navii",
    image: naviiImg,
    features: [
      "AR-based indoor turn-by-turn navigation",
      "No GPS required — works entirely indoors",
      "Mall, airport, and hospital support",
      "Real-time path calculation",
      "Built for Dubai's mega-malls",
    ],
    internalRoute: "/navii",
  },
  {
    slug: "paper-to-product",
    title: "PAPER TO PRODUCT",
    category: "software",
    description: "Research intelligence platform. Search 225M+ papers and 12M+ patents, find expired patents, and convert research into product specs with AI.",
    longDescription: "PaperToProduct is a research intelligence platform that lets users search 225M+ research papers and 12M+ patents, discover expired patents ready for commercialization, and use AI to convert academic documents into actionable product specifications. A powerful, clean interface for navigating deep tech research and turning ideas into real products.",
    tech: ["React", "AI", "Search", "SaaS"],
    status: "live",
    link: "https://papertoproduct.vercel.app/",
    image: papertoproductImg,
    features: [
      "225M+ research paper search engine",
      "12M+ patent database with expired patent finder",
      "AI-powered document-to-product conversion",
      "Clean, powerful SaaS interface",
      "Research commercialization workflows",
    ],
  },
  {
    slug: "crescent-watch",
    title: "CRESCENT WATCH",
    category: "software",
    description: "Islamic lunar crescent visibility tool. Precision moon tracking and simulation for determining Ramadan, Eid, and Islamic calendar dates worldwide.",
    longDescription: "Crescent Watch is a precision tool for Islamic lunar crescent visibility mapping and simulation. It helps users track when and where the new moon crescent will be visible — critical for determining the start of Ramadan, Eid, and other Islamic calendar dates. An interactive, data-rich interface that serves the global Muslim community with scientific accuracy.",
    tech: ["React", "Astronomy Data", "Maps", "Simulation"],
    status: "live",
    link: "https://crescent-watch.vercel.app/",
    image: crescentWatchImg,
    features: [
      "Lunar crescent visibility mapping",
      "Worldwide moon simulation",
      "Islamic calendar date determination",
      "Interactive data-rich interface",
      "Serves the global Muslim community",
    ],
  },
  {
    slug: "ramadan-tracker",
    title: "RAMADAN TRACKER",
    category: "software",
    description: "Track your Ramadan journey — fasting progress, prayer tracking, Quran reading goals, and daily streaks all in one beautiful app.",
    longDescription: "Ramadan Tracker is a comprehensive companion app for the holy month. Track your fasting days with streak monitoring and makeup day management, log all five daily prayers plus Sunnah and Nafl prayers with motivational progress updates, monitor your Quran reading with page counts and surah bookmarks, and set personalized daily goals. With a stunning dark mode featuring mosque silhouettes and an intuitive interface, it keeps your spiritual journey organized and motivated throughout Ramadan.",
    tech: ["Flutter", "Dart", "Android", "Material Design"],
    status: "live",
    link: "https://play.google.com/store/apps/details?id=com.mohammed.flutter_projects",
    image: ramadanTrackerImg,
    features: [
      "Fasting tracker with streaks and makeup day management",
      "Complete prayer tracking — Fard, Sunnah, and Nafl",
      "Quran progress with page counts and surah navigation",
      "Personalized daily goals and achievements",
      "Beautiful dark mode with Islamic-themed design",
    ],
  },
  {
    slug: "trip-bill-splitter",
    title: "TRIP BILL SPLITTER",
    category: "software",
    description: "Split trip expenses effortlessly. Track who paid what, settle debts fairly, and keep group trips stress-free with multi-currency support.",
    longDescription: "Trip Bill Splitter is a clean, intuitive expense-splitting app for group trips and outings. Add participants, log expenses with payer names and descriptions, and the app automatically calculates fair settlements — who owes whom and how much. Supports multiple currencies including AED, features trip history and analytics, and makes group finances transparent. No more awkward money conversations after a trip.",
    tech: ["Flutter", "Dart", "Android", "Material Design"],
    status: "live",
    link: "https://play.google.com/store/apps/details?id=com.astrobubu.tripbillsplitter",
    image: tripBillSplitterImg,
    features: [
      "Add expenses with payer, amount, and description",
      "Automatic per-person settlement calculation",
      "Multi-currency support (AED, USD, etc.)",
      "Trip history and expense analytics",
      "Share settlement summaries with the group",
    ],
  },
];

// ─── Client Projects ────────────────────────────────────────────

export const clientProjects: Project[] = [
  {
    slug: "fzn-dining",
    title: "FZN DINING EXPERIENCE",
    category: "client",
    description: "Three Michelin-starred fine dining experience by Chef Björn Frantzén. Nordic Kaiseki meets Japanese precision in Dubai. Elegant reservation system with immersive visual storytelling.",
    longDescription: "FZN Dining Experience is the digital home of Chef Björn Frantzén's three Michelin-starred fine dining concept in Dubai. The website captures the essence of Nordic Kaiseki — where Scandinavian elegance meets Japanese precision. We designed and built an immersive visual storytelling experience with an elegant reservation system, smooth animations, and a luxury aesthetic that matches the culinary artistry. Every scroll tells a story of flavor, craft, and excellence.",
    tech: ["React", "Framer Motion", "Luxury UI/UX", "Responsive"],
    status: "live",
    link: "https://fzn-dining-experience.pages.dev/",
    image: fznDiningImg,
    features: [
      "Immersive visual storytelling with parallax effects",
      "Elegant reservation system integration",
      "Luxury-grade UI/UX design",
      "Responsive across all devices",
      "Performance-optimized media loading",
    ],
  },
  {
    slug: "cut-in-half",
    title: "CUT IN HALF",
    category: "client",
    description: "Premium Dubai Wagyu burger restaurant chain with 4 locations. Interactive menu, milkshake builder, multi-location ordering through Talabat integration. Double-fried perfection, digitized.",
    longDescription: "Cut in Half is Dubai's premium Wagyu burger chain with 4 locations across the city. We designed and developed their website with an interactive menu, a fun milkshake builder feature, multi-location support with Leaflet maps, and seamless Talabat ordering integration. The design captures the brand's bold, unapologetic personality — double-fried perfection, digitized. Every element reflects the quality and craft behind their Wagyu burgers.",
    tech: ["React", "Leaflet Maps", "Vercel", "Restaurant Tech"],
    status: "live",
    link: "https://cut-in-half.vercel.app/",
    image: cutInHalfImg,
    features: [
      "Interactive menu with categories and filters",
      "Custom milkshake builder feature",
      "Multi-location map with Leaflet",
      "Talabat ordering integration per location",
      "Bold, brand-aligned visual design",
    ],
  },
  {
    slug: "darwish-cafe",
    title: "DARWISH CAFE",
    category: "client",
    description: "Premium coffee shop website with elegant branding and a warm, inviting digital presence.",
    longDescription: "Darwish Cafe is a premium coffee shop brand. We built a clean, elegant website that captures the warmth and quality of their coffee experience — from rich visuals to smooth navigation. Designed to reflect the cafe's identity and draw customers in before they even walk through the door.",
    tech: ["React", "Vercel", "Responsive Design"],
    status: "live",
    link: "https://darwish-cafe-static.vercel.app/",
    image: darwishCafeImg,
    features: [
      "Warm, inviting brand-aligned design",
      "Menu showcase with rich visuals",
      "Fully responsive across all devices",
      "Fast static deployment",
    ],
  },
  {
    slug: "variety-coffee",
    title: "VARIETY COFFEE",
    category: "client",
    description: "Specialty coffee brand website with modern aesthetics and a focus on the craft behind every cup.",
    longDescription: "Variety Coffee is a specialty coffee brand that celebrates the craft behind every cup. We designed and built a modern, visually rich website that showcases their coffee offerings, brand story, and locations. Clean layout, bold imagery, and smooth interactions — a digital experience as refined as their brew.",
    tech: ["React", "Vercel", "Modern UI"],
    status: "live",
    link: "https://variety-coffee-sage.vercel.app/",
    image: varietyCoffeeImg,
    features: [
      "Modern specialty coffee brand design",
      "Product and menu showcase",
      "Brand storytelling through visuals",
      "Mobile-first responsive layout",
    ],
  },
  {
    slug: "delhi-darbar",
    title: "DELHI DARBAR",
    category: "client",
    description: "Legendary Mughlai restaurant chain (est. 1946) with 8 outlets across Dubai and Mumbai. Full menu, catering, and multi-location support.",
    longDescription: "Delhi Darbar is a legendary Mughlai restaurant chain established in 1946, serving authentic butter chicken, biryani, and tandoori across 8 outlets in Dubai and Mumbai. We built a digital presence that honors their rich heritage — full interactive menu, catering services, and multi-location support with a design that feels as warm and authentic as their food.",
    tech: ["React", "Vercel", "Multi-location", "Restaurant Tech"],
    status: "live",
    link: "https://delhi-darbar-website.vercel.app/",
    image: delhiDarbarImg,
    features: [
      "Heritage-inspired restaurant design",
      "Full interactive menu with categories",
      "Multi-location outlet finder",
      "Catering services showcase",
      "Responsive across all devices",
    ],
  },
  {
    slug: "topwatches",
    title: "TOPWATCHES",
    category: "client",
    description: "Curated marketplace for pre-owned luxury timepieces — Rolex, Patek Philippe, AP. Authenticated, insured, shipped worldwide.",
    longDescription: "TopWatches is a curated marketplace for pre-owned luxury timepieces. From Rolex to Patek Philippe and Audemars Piguet, every piece is authenticated by certified watchmakers with insured shipping to 120+ countries and a 14-day return guarantee. We built a premium e-commerce experience that matches the caliber of the watches themselves.",
    tech: ["React", "E-commerce", "Vercel", "Luxury UI"],
    status: "live",
    link: "https://topwatches.vercel.app/",
    image: topwatchesImg,
    features: [
      "Luxury-grade product showcase",
      "Authentication and trust badges",
      "Global shipping integration",
      "Premium e-commerce experience",
      "Mobile-responsive catalog",
    ],
  },
  {
    slug: "drive-for-less",
    title: "DRIVE FOR LESS DUBAI",
    category: "client",
    description: "Luxury car rental in Dubai — Mercedes Brabus, Lamborghini, Bentley at below-market rates. Free delivery, full insurance.",
    longDescription: "Drive For Less Dubai offers premium luxury car rentals — Mercedes Brabus, Lamborghini Urus, Bentley, and more — at below-market rates with free delivery and comprehensive insurance. We designed a sleek, high-impact website that showcases their fleet with bold visuals, easy booking flow, and the luxury feel their clients expect.",
    tech: ["React", "Vercel", "Booking UI", "Responsive"],
    status: "live",
    link: "https://driveforlessdubai.vercel.app/",
    image: driveforlessImg,
    features: [
      "Premium fleet showcase with bold visuals",
      "Easy booking and inquiry flow",
      "Vehicle specs and pricing display",
      "Free delivery and insurance highlights",
      "Mobile-optimized luxury experience",
    ],
  },
  {
    slug: "parfum-central",
    title: "PARFUM CENTRAL",
    category: "client",
    description: "Fully customized Shopify perfume store. Premium fragrance e-commerce with curated collections and seamless checkout.",
    longDescription: "Parfum Central is a premium online perfume store built on a fully customized Shopify theme. We designed and developed a luxury e-commerce experience with curated fragrance collections, detailed product pages, and a seamless checkout flow. Every element was tailored to match the brand's premium positioning in the fragrance market.",
    tech: ["Shopify", "Custom Theme", "E-commerce", "Liquid"],
    status: "live",
    link: "https://parfumcentral.com/",
    image: parfumcentralImg,
    features: [
      "Fully customized Shopify theme",
      "Premium fragrance product showcase",
      "Curated collections and filtering",
      "Seamless checkout experience",
      "Mobile-optimized luxury design",
    ],
  },
  {
    slug: "gcc-dental",
    title: "GCC DENTAL CLINIC",
    category: "client",
    description: "Professional dental clinic website for the UAE. Services, team profiles, and appointment booking with a clean healthcare aesthetic.",
    longDescription: "GCC Dental Clinic is a professional dental care practice operating in the UAE. We designed and built a clean, trust-inspiring website that showcases their services, introduces the team, and makes booking appointments effortless. The design reflects the precision and care of modern dentistry.",
    tech: ["React", "Vercel", "Healthcare UI", "Responsive"],
    status: "live",
    link: "https://gcc-dental-clinic.vercel.app/",
    image: gccDentalImg,
    features: [
      "Clean, professional healthcare design",
      "Service and treatment showcase",
      "Team profile section",
      "Appointment booking integration",
      "Mobile-friendly patient experience",
    ],
  },
  {
    slug: "be-healthy",
    title: "BE HEALTHY FOOD",
    category: "client",
    description: "Arabic health food brand website. Clean, fresh design for a healthy lifestyle brand in the UAE.",
    longDescription: "Be Healthy Food (بي هيلثي فود) is a health-focused food brand serving the UAE market. We designed a clean, fresh Arabic website that captures the brand's commitment to healthy living — from product showcases to nutritional information. The design is as clean and refreshing as the food itself.",
    tech: ["React", "Vercel", "Arabic", "Responsive"],
    status: "live",
    link: "https://be-healthy-website.vercel.app/",
    image: beHealthyImg,
    features: [
      "Clean, health-inspired brand design",
      "Full Arabic language support",
      "Product and nutrition showcase",
      "Fresh, modern visual identity",
      "Mobile-responsive layout",
    ],
  },
  {
    slug: "firstway",
    title: "FIRST WAY CAR ACCESSORIES",
    category: "client",
    description: "Automotive accessories shop in Sharjah. Performance upgrades, nano-ceramic tinting, off-road gear, and 5,000+ products — everything your car needs under one roof.",
    longDescription: "First Way Car Accessories (فرست واي زينة السيارات) is a full-service automotive shop in Industrial Area 13, Sharjah, UAE. With 10+ years of experience and 5,000+ products, they offer performance upgrades (exhaust systems, brake kits, suspension), aesthetic enhancements (nano-ceramic tinting, ambient lighting, LED headlights), off-road equipment under their proprietary EXKING brand, and professional maintenance services. We built a bilingual Arabic-English website with vehicle-specific parts filtering, product catalog, and service booking — a complete digital storefront for one of Sharjah's go-to car accessory destinations.",
    tech: ["Next.js", "React", "Arabic/English", "E-commerce"],
    status: "live",
    link: "https://firstway.vercel.app/",
    image: firstwayImg,
    features: [
      "Vehicle-specific parts filtering by make, model, and year",
      "5,000+ product catalog with categories",
      "Bilingual Arabic and English support",
      "Service booking and labor estimates",
      "Proprietary EXKING off-road brand showcase",
    ],
  },
];

// ─── Hardware Projects ──────────────────────────────────────────

export const hardwareProjects: Project[] = [
  {
    slug: "smartroads",
    title: "SMARTROADS",
    category: "hardware",
    description: "Revolutionary traffic management system. Coordinate 5% of vehicles to eliminate congestion for everyone. RTK precision positioning with AI-powered coordination.",
    longDescription: "SmartRoads is a revolutionary approach to traffic management. Instead of building more roads, we coordinate just 5% of vehicles on the road to eliminate congestion for everyone. Using RTK precision GPS positioning and AI-powered coordination algorithms, SmartRoads creates smooth traffic flow patterns that propagate through the entire road network. Research-backed, UAE-tested, and ready to transform urban mobility.",
    tech: ["Traffic AI", "RTK GPS", "IoT", "V2X"],
    status: "development",
    link: "/smartroads",
    image: "/smartroads/front car.png",
    features: [
      "Only 5% vehicle participation needed to eliminate congestion",
      "RTK GPS sub-centimeter positioning",
      "AI-powered traffic flow optimization",
      "V2X (Vehicle-to-Everything) communication",
      "Backed by published research and FHWA data",
    ],
    internalRoute: "/smartroads",
  },
  {
    slug: "guideon",
    title: "GUIDEON",
    category: "hardware",
    description: "Modular AI-powered kiosk robot. 3D-printed, fully autonomous, handles roles from coffee-serving to reception with expressive gestures and smart chat.",
    longDescription: "Guideon is a modular, AI-powered service robot designed and built in Dubai. Fully 3D-printed and autonomous, Guideon handles roles from coffee serving to reception, queue management to education. With expressive gestures, smart chat capabilities, and a modular design that adapts to any industry, Guideon is bringing service robotics to the UAE's hospitality, healthcare, and government sectors.",
    tech: ["Robotics", "AI", "3D Printing", "ROS"],
    status: "live",
    link: "/robotics",
    image: "/robotics/guideon/01.jpg",
    imagePosition: "top",
    features: [
      "Fully 3D-printed modular chassis",
      "AI-powered conversational interface",
      "Expressive gestures and emotional responses",
      "Roles: reception, queue management, coffee service, education",
      "Designed and built in Dubai, UAE",
    ],
    internalRoute: "/robotics",
  },
];

// ─── Helpers ────────────────────────────────────────────────────

export const ALL_PROJECTS: Project[] = [
  ...softwareProjects,
  ...clientProjects,
  ...hardwareProjects,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}
