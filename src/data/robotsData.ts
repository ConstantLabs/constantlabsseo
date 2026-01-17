export interface RobotFeature {
  title: string;
  items: string[];
}

export interface Robot {
  slug: string;
  name: string;
  tagline: string;
  year: number;
  status: 'built' | 'in-dev' | 'concept';
  statusLabel: string;
  gallery: string[];
  video?: string;
  description: string;
  features: RobotFeature[];
}

export const ROBOTS: Robot[] = [
  {
    slug: "guideon",
    name: "Guideon",
    tagline: "Autonomous crowd-magnet kiosk - launch 2026",
    year: 2026,
    status: "in-dev",
    statusLabel: "In Development • Expected Q2 2026",
    gallery: [
      "/robotics/guideon/01.jpg",
      "/robotics/guideon/02.jpg",
      "/robotics/guideon/03.jpg",
      "/robotics/guideon/04.jpg",
      "/robotics/guideon/05.jpg",
      "/robotics/guideon/06.jpg",
    ],
    description: "Guideon is a modular, AI-powered kiosk robot that rolls in, charms the crowd with expressive gestures and smart chat, and tackles roles from coffee-serving to fundraising—all fully autonomous.",
    features: [
      {
        title: "Key Hardware & Mobility",
        items: [
          "Full-steel Guideon-chassis v1 – separates into 3 pieces for easy transport",
          "Twin hub-motors + two caster wheels",
          "Two fully-articulated 6-axis arms with working fingers",
          "15.6″ touch-OLED on chest for interaction",
          "Auto-dock charger – rolls home at 15% battery",
          "Full-map navigation with LiDAR & depth camera",
          "Tri-sensor nav: LiDAR, Intel RealSense depth, HD face-detection cam"
        ]
      },
      {
        title: "Conversational AI Suite",
        items: [
          "Persona-Engine v1 – OpenAI GPT-4 Turbo backend with real-time vector-search memory",
          "Full multilingual support – understands & speaks Modern Standard Arabic and English natively; auto-detects language mid-conversation",
          "Emotion-mapped TTS: 4 voice fonts (friendly, formal, playful, sarcastic)",
          "On-device session log → fine-tunes dialogue for higher engagement"
        ]
      },
      {
        title: "Human + Gesture Interaction",
        items: [
          "LED face with many emotion morph targets",
          "Gesture arms (optional fixed-arm kit for -33.3% cost)",
          "Depth-aware audience sizing & heat-map; greets only approaching visitors"
        ]
      },
      {
        title: "First Customer",
        items: [
          "UAE Red Crescent – roaming donation agent (tap-to-give, animated thank-you sequence) – in development"
        ]
      }
    ]
  },
  {
    slug: "guideon-desk",
    name: "Guideon-Desk",
    tagline: "Stationary greeter – the top half of GuideOn",
    year: 2026,
    status: "concept",
    statusLabel: "Concept Design • Pre-order",
    gallery: [
      "/robotics/guideon-desk/01.jpg",
      "/robotics/guideon-desk/02.jpg",
      "/robotics/guideon-desk/03.jpg",
      "/robotics/guideon-desk/04.jpg",
      "/robotics/guideon-desk/05.jpg",
      "/robotics/guideon-desk/06.jpg",
      "/robotics/guideon-desk/07.jpg",
      "/robotics/guideon-desk/08.jpg",
    ],
    description: "Guideon-Desk keeps everything that matters—animated face, dual gesture arms and screens—but drops the drive base, making it the perfect fixed greeter for counters, lobbies or ticket windows.",
    features: [
      {
        title: "Why Guideon-Desk?",
        items: [
          "Heavy weighted base with lockable casters for fast positioning",
          "Optional anchor-plate if you want it permanently bolted down",
          "Same Persona-Engine AI (Arabic + English) as full GuideOn",
          "6-8 hour battery or runs 24/7 on mains power",
          "Can be split into 2-3 parts for easy transport"
        ]
      },
      {
        title: "Conversational AI Suite",
        items: [
          "Persona-Engine v1 – OpenAI GPT-4 Turbo backend with real-time vector-search memory",
          "Full multilingual support – understands & speaks Modern Standard Arabic and English natively",
          "Emotion-mapped TTS: 4 voice fonts (friendly, formal, playful, sarcastic)",
          "On-device session log → fine-tunes dialogue for higher engagement"
        ]
      },
      {
        title: "Human + Gesture Interaction",
        items: [
          "LED face with many emotion morph targets",
          "Gesture arms (optional fixed-arm kit for -33.3% cost)",
          "Depth-aware audience sizing & heat-map; greets only approaching visitors"
        ]
      }
    ]
  },
  {
    slug: "merhaab",
    name: "Merhaab Prototype",
    tagline: "Al Maarifa-funded receptionist that started it all",
    year: 2021,
    status: "built",
    statusLabel: "Decommissioned – Archival Unit",
    gallery: [
      "/robotics/merhaab/01.jpg",
      "/robotics/merhaab/02.jpg",
      "/robotics/merhaab/03.jpg",
      "/robotics/merhaab/04.jpg",
      "/robotics/merhaab/05.jpg",
      "/robotics/merhaab/06.jpg",
    ],
    video: "/robotics/merhaab/reel.mp4",
    description: "Merhaab was our very first build — a privately funded proof-of-concept sponsored by Al Maarifa Electronics. Entirely 3D-printed around an off-the-shelf mannequin frame, it proved that expressive, mobile reception robots could be fabricated on a shoestring.",
    features: [
      {
        title: "Build Snapshot",
        items: [
          "ROS Noetic running on an Nvidia Jetson Nano",
          "Full PLA+ shell printed on three Ultimaker printers",
          "Repurposed mannequin torso + aluminium spine",
          "Off-the-shelf BLDC motors & 3D printed wheels",
          "RPLidar A3 + SLAM → ≈5cm indoor accuracy",
          "Samsung Galaxy Tab A 10.1″ used as chest display",
          "Off-shelf LED Mask"
        ]
      },
      {
        title: "Field History",
        items: [
          "2021 launch – first demo at Sharjah Research, Technology & Innovation Park",
          "Appeared on stage at UAE Conferences (2022)",
          "Roamed exhibition floors in a school tech fair",
          "Featured in Sharjah News Instagram and TV Channel",
          "Called on stage graduating students during their graduation ceremony"
        ]
      }
    ]
  },
  {
    slug: "inmoov",
    name: "InMoov – R&D Testbed",
    tagline: "3D-printed humanoid for Education",
    year: 2024,
    status: "built",
    statusLabel: "Active – Zayed Educational Complex, Al-Mizhar",
    gallery: [
      "/robotics/inmoov/01.jpg",
      "/robotics/inmoov/02.jpg",
      "/robotics/inmoov/03.jpg",
      "/robotics/inmoov/04.jpg",
      "/robotics/inmoov/05.jpg",
      "/robotics/inmoov/06.jpg",
    ],
    description: "Our printable humanoid lets students start their robot programming journey without fear. Fully open-source design adapted for educational settings.",
    features: [
      {
        title: "Hardware Specifications",
        items: [
          "20 Heavy duty Servos",
          "Printed on Snapmaker Luban with PETG-White",
          "Fully moveable fingers and arms"
        ]
      },
      {
        title: "Educational Features",
        items: [
          "Open-source design for easy customization",
          "Arduino-based control system for learning",
          "Visual programming interface for beginners",
          "Modular design allows incremental assembly"
        ]
      }
    ]
  }
];

export const USE_CASES = [
  { icon: "🏛️", title: "Government Offices", description: "Visitor guidance, ticketing & queue systems." },
  { icon: "🏥", title: "Hospitals & Clinics", description: "Wayfinding, check-in & companionship." },
  { icon: "🎓", title: "Universities & Schools", description: "Registration & robotics education platform." },
  { icon: "🏢", title: "Corporate Lobbies", description: "AI-powered reception & info desk support." },
  { icon: "☕", title: "Restaurants & Majlis", description: "Arabic coffee serving & table-side service." },
  { icon: "🖼️", title: "Events & Exhibitions", description: "Engaging assistant & visitor interaction." },
  { icon: "🏦", title: "Banks & Telecom", description: "Queue-ticket support & helpdesk info." },
  { icon: "🧓", title: "Elderly & Special Needs", description: "Social interaction & gentle guidance." },
  { icon: "🛍️", title: "Shop Attendant", description: "Welcome customers & recommend products." },
];

export const MODULES = [
  {
    title: "Hospitality Attachments",
    description: "Arabic coffee dispensers, tray modules, cup holders & heating compartments — ideal for majlis, receptions, and events."
  },
  {
    title: "Queue & Ticketing Systems",
    description: "Integrate with queue ticket printers, visitor ID scanners, and CRM dashboards — perfect for banks, telecoms & government."
  },
  {
    title: "Smart Display Interfaces",
    description: "Large screens or tablets with multi-language content, gesture interaction & maps — for hospitals, exhibitions & museums."
  },
  {
    title: "Education & AI Modules",
    description: "Teaching-ready platforms with ROS2, AI vision, voice integration & hardware access — ideal for schools and labs."
  }
];

export const TEAM = [
  {
    name: "Ahmad Hasan",
    role: "Founder · Robotics Lead",
    description: "Designs, prototypes and integrates every drive motor & ROS node.",
    image: "/robotics/merhaab/06.jpg" // Using existing team image
  },
  {
    name: "Faisal Kamal",
    role: "Representative",
    description: "Connects NGOs & brands with the right robot solution.",
    image: "/robotics/merhaab/06.jpg" // Placeholder
  }
];

export function getRobotBySlug(slug: string): Robot | undefined {
  return ROBOTS.find(r => r.slug === slug);
}
