import {
  ShoppingCart, Smartphone, Plug, Users, Globe, Database, Monitor, Bot, Cpu,
  Shield, Brain
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import mufakkirImg from "@/assets/projects/mufakkir.webp";
import motargemImg from "@/assets/projects/motargem.webp";
import speakWindowsImg from "@/assets/projects/speak-windows.webp";
import athkarImg from "@/assets/projects/athkar.webp";
import mosqueSilenceImg from "@/assets/projects/mosque-silence.webp";
import medievalQuestImg from "@/assets/projects/medieval-quest.webp";
import fznDiningImg from "@/assets/projects/fzn-dining.webp";
import toitImg from "@/assets/projects/toit.webp";
import cutInHalfImg from "@/assets/projects/cut-in-half.webp";
import sinaaiyaImg from "@/assets/projects/sinaaiya.webp";
import guideonImg from "@/assets/projects/guideon.webp";
import naviiImg from "@/assets/projects/navii.webp";

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
    tags: ["Shopify", "Custom Carts", "Payment APIs"],
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
    link: "/services/custom-ai-agents",
  },
  {
    id: "PRIVATE_AI",
    title: "Privacy-First Local AI",
    icon: Shield,
    description: "Deploy AI models on-premise. Your data never leaves your servers. Custom LLMs, RAG pipelines, and inference engines running locally for compliance-sensitive businesses.",
    tags: ["On-Premise AI", "Local LLMs", "Data Privacy"],
    oneLiner: "AI that stays in-house",
    link: "/services/private-ai",
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
    tags: ["Web Design", "SEO", "Branding"],
    oneLiner: "Brands that stand out online",
    link: "/services/websites",
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
    slug: "speak-to-windows",
    title: "SPEAK-TO-WINDOWS",
    category: "software",
    description: "Voice-controlled Windows automation tool. Speak commands to control your desktop and manage windows with natural language processing.",
    longDescription: "Speak-to-Windows is a voice-controlled automation tool that lets you command your Windows desktop using natural language. Open apps, manage windows, control media, and execute system tasks — all hands-free. Built for power users and accessibility, it turns your voice into a productivity tool.",
    tech: ["JavaScript", "Voice Recognition", "Windows API", "NLP"],
    status: "repository",
    link: "https://github.com/Astrobubu/Speak-to-Windows",
    image: speakWindowsImg,
    features: [
      "Natural language voice commands for Windows",
      "App launching and window management",
      "Media playback control",
      "System task automation",
      "Extensible command vocabulary",
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
    slug: "toit-hot-chicken",
    title: "TOIT HOT CHICKEN",
    category: "client",
    description: "Dubai's most craveable fried chicken burgers. Full menu showcase with online ordering integration, location finder, and Instagram-worthy visuals. Nashville-style meets modern web.",
    longDescription: "Toit Hot Chicken is Dubai's most craveable fried chicken burger brand. We built their digital presence from scratch — a bold, Instagram-worthy website with a full interactive menu, online ordering integration, and a location finder. Nashville hot chicken meets modern web design with vibrant visuals, smooth UX, and seamless Talabat ordering integration. The site captures the energy and flavor of the brand perfectly.",
    tech: ["React", "Vercel", "Maps API", "E-commerce"],
    status: "live",
    link: "https://toit.vercel.app/",
    image: toitImg,
    features: [
      "Full interactive menu showcase",
      "Online ordering via Talabat integration",
      "Location finder with Maps API",
      "Instagram-worthy food photography layout",
      "Mobile-first responsive design",
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
