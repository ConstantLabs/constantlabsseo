import { useState, useEffect, lazy, Suspense } from "react";
import { GlitchTextFramer } from "@/components/GlitchTextFramer";

import { ProjectCard } from "@/components/ProjectCard";
import { TeamMember } from "@/components/TeamMember";
import { PageLoader } from "@/components/PageLoader";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Zap, Rocket, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import tamerAvatar from "@/assets/tamer-avatar.webp";
import ahmadAvatar from "@/assets/ahmad-avatar.webp";
import tjAvatar from "@/assets/tj-avatar.webp";

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

// Lazy load HackerBackground for better performance
const HackerBackground = lazy(() => import("@/components/HackerBackground").then(module => ({ default: module.HackerBackground })));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoadBackground, setShouldLoadBackground] = useState(false);

  // Only load background on desktop or after initial render
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      setShouldLoadBackground(true);
    } else {
      // Load after 1 second on mobile to prioritize content
      const timer = setTimeout(() => setShouldLoadBackground(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  const projects = [
    {
      title: "MUFAKKIR",
      description: "Voice-to-text Arabic transcription app with AI. Real-time speech recognition supporting 50+ languages and 10+ Arabic dialects. Transform thoughts into organized notes.",
      tech: ["AI", "Speech-to-Text", "Arabic", "Multi-dialect"],
      status: "live" as const,
      link: "https://mufakkir.app",
      image: mufakkirImg
    },
    {
      title: "MOTARGEM",
      description: "Universal translator breaking language barriers. Real-time translation with voice, text, and camera input. Natural conversations across different languages.",
      tech: ["Translation AI", "Real-time", "Voice Input", "Multi-language"],
      status: "live" as const,
      link: "https://motargem-v2.vercel.app/",
      image: motargemImg
    },
    {
      title: "SPEAK-TO-WINDOWS",
      description: "Voice-controlled Windows automation tool. Speak commands to control your desktop and manage windows with natural language processing.",
      tech: ["JavaScript", "Voice Recognition", "Windows API", "NLP"],
      status: "repository" as const,
      link: "https://github.com/Astrobubu/Speak-to-Windows",
      image: speakWindowsImg
    },
    {
      title: "ATHKAR DESKTOP",
      description: "Elegant desktop application for Islamic remembrance with notifications and beautiful UI for daily prayers.",
      tech: ["Electron", "JavaScript", "Node.js", "Cross-platform"],
      status: "repository" as const,
      link: "https://github.com/Astrobubu/Athkar-Desktop",
      image: athkarImg
    },
    {
      title: "MOSQUE SILENCE",
      description: "Smart Android app that automatically silences phones in the vicinity of mosques using geolocation.",
      tech: ["Flutter", "Dart", "Geolocation", "Android"],
      status: "repository" as const,
      link: "https://github.com/Astrobubu/MosqueSilence",
      image: mosqueSilenceImg
    },
    {
      title: "MEDIEVAL QUEST JOURNAL",
      description: "Immersive medieval-inspired quest tracker with rich 3-column UI for tabletop RPG adventures.",
      tech: ["HTML", "CSS", "JavaScript", "Fantasy UI"],
      status: "repository" as const,
      link: "https://github.com/Astrobubu/Medieval-Quest-Journal",
      image: medievalQuestImg
    },
    {
      title: "SANAYE",
      description: "Making UAE industrial areas accessible. Find specialized shops, parts, services, and craftsmen across industrial zones.",
      tech: ["React", "Maps", "Arabic", "Vercel"],
      status: "live" as const,
      link: "https://sinaaiya.vercel.app/",
      image: sinaaiyaImg
    },

    {
      title: "NAVII",
      description: "AR indoor navigation for malls, airports, and large indoor spaces. Turn-by-turn guidance without GPS.",
      tech: ["AR", "Indoor Navigation", "React", "Vercel"],
      status: "development" as const,
      link: "https://constantlabs.ai/navii",
      image: naviiImg
    },
  ];

  const clientProjects = [
    {
      title: "FZN DINING EXPERIENCE",
      description: "Three Michelin-starred fine dining experience by Chef Björn Frantzén. Nordic Kaiseki meets Japanese precision in Dubai. Elegant reservation system with immersive visual storytelling.",
      tech: ["React", "Framer Motion", "Luxury UI/UX", "Responsive"],
      status: "live" as const,
      link: "https://fzn-dining-experience.pages.dev/",
      image: fznDiningImg
    },
    {
      title: "TOIT HOT CHICKEN",
      description: "Dubai's most craveable fried chicken burgers. Full menu showcase with online ordering integration, location finder, and Instagram-worthy visuals. Nashville-style meets modern web.",
      tech: ["React", "Vercel", "Maps API", "E-commerce"],
      status: "live" as const,
      link: "https://toit.vercel.app/",
      image: toitImg
    },
    {
      title: "CUT IN HALF",
      description: "Premium Wagyu burger restaurant chain with 4 locations. Interactive menu, milkshake builder, multi-location ordering through Talabat integration. Double-fried perfection, digitized.",
      tech: ["React", "Leaflet Maps", "Vercel", "Restaurant Tech"],
      status: "live" as const,
      link: "https://cut-in-half.vercel.app/",
      image: cutInHalfImg
    },
  ];

  const hardwareProjects = [
    {
      title: "SMARTROADS",
      description: "Revolutionary traffic management system. Coordinate 5% of vehicles to eliminate congestion for everyone. RTK precision positioning with AI-powered coordination.",
      tech: ["Traffic AI", "RTK GPS", "IoT", "V2X"],
      status: "development" as const,
      link: "/smartroads",
      image: "/smartroads/front car.png"
    },
    {
      title: "GUIDEON",
      description: "Modular AI-powered kiosk robot. 3D-printed, fully autonomous, handles roles from coffee-serving to reception with expressive gestures and smart chat.",
      tech: ["Robotics", "AI", "3D Printing", "ROS"],
      status: "live" as const,
      link: "/robotics",
      image: "/robotics/guideon/01.jpg",
      imagePosition: "top" as const
    },
  ];

  const team = [
    {
      name: "AHMAD HASAN",
      role: "CO-FOUNDER / ARCHITECT",
      journey: [
        "3D fabrication and physical prototyping → Hardware engineering",
        "Applied Physics (dropout) → Astronomical research",
        "Built observatories for deep space observation",
        "Now: Architecting digital experiences that push boundaries"
      ],
      avatar: ahmadAvatar,
      github: "https://github.com/Astrobubu",
      linkedin: "https://www.linkedin.com/in/astrobubu"
    },
    {
      name: "MOHAMAD TAMER",
      role: "CO-FOUNDER / CREATIVE DIRECTOR",
      journey: [
        "Computer Engineer and Astrophotographer",
        "3D design and modeling",
        "Motion graphics and video editing",
        "Full-stack development and system architecture",
        "Now: Crafting visual experiences that break conventions"
      ],
      avatar: tamerAvatar,
      github: "https://github.com/Moenamatics",
      linkedin: "https://www.linkedin.com/in/mohamad-rabie-b304a8203/"
    },
    {
      name: "MOHAMMAD TIJANI",
      role: "SOFTWARE ENGINEER",
      journey: [
        "BSc Computer Engineering",
        "MSc Computer Science (University of York)",
        "Web development and programming",
        "Now: Building robust software solutions"
      ],
      avatar: tjAvatar,
      github: "",
      linkedin: "https://www.linkedin.com/in/altigani-501599235/"
    }
  ];

  /* Loading disabled - show content immediately */

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden chromatic-page">
      <SEO title="Home" description="Build. Ship. Repeat. Constant Labs portfolio." />
      {shouldLoadBackground && (
        <Suspense fallback={null}>
          <HackerBackground />
        </Suspense>
      )}

      {/* System Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/20 bg-background">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-foreground animate-pulse rounded-full" />
              <span className="text-[10px] font-tech tracking-wider text-foreground/60 uppercase">
                SYSTEM ONLINE
              </span>
            </div>
            <span className="text-[10px] font-tech text-foreground/80 font-bold tracking-wider">
              CONSTANT_LABS
            </span>
            <span className="text-[8px] font-tech text-foreground/40">
              // SECURE CONNECTION ESTABLISHED
            </span>
          </div>
          <span className="text-[8px] font-tech text-foreground/40 uppercase">
            {new Date().toLocaleString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            })}
          </span>
        </div>
      </div>

      {/* ENTRY POINT */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="container mx-auto px-4 text-center">
          {/* Main title - THE STAR */}
          <h1 className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tight uppercase transform -rotate-3 font-dedsec mb-12">
            <GlitchTextFramer>CONSTANT LABS</GlitchTextFramer>
          </h1>

          {/* Single tagline */}
          <p className="text-sm md:text-base text-muted-foreground font-tech tracking-[0.3em] uppercase mb-16">
            BUILD. SHIP. REPEAT.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide transition-all focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              onClick={() => document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Navigate to projects section"
            >
              [ENTER_VAULT]
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border-2 border-border text-foreground hover:border-foreground hover:bg-transparent font-tech tracking-wide transition-all focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Navigate to contact section"
            >
              [INITIATE_CONTACT]
            </Button>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section id="mission" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative border-2 border-foreground/20 bg-background p-12 overflow-hidden group hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-foreground/20" />
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-foreground/20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-foreground/20" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-foreground/20" />

              {/* Halftone background */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)',
                  backgroundSize: '16px 16px'
                }}
              />

              <div className="relative z-10 text-center">
                <div className="text-[10px] font-tech text-foreground/40 mb-6 tracking-widest">
                  [WHO_WE_ARE]
                </div>

                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px w-16 bg-foreground/40" />
                  <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-wider font-tech">
                    THE MISSION
                  </h2>
                  <div className="h-px w-16 bg-foreground/40" />
                </div>

                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    We are a group of builders pushing the boundaries of what's possible.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Our goal is to create a new wave of technology—the kind most would call sci-fi.
                    We're here to make it real. To make it achievable. To make it something you can touch,
                    use, and rely on.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Hardware and software. No limits. No stopping until it's done.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-8 pt-6">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 border-2 border-foreground/40 flex items-center justify-center">
                        <span className="text-foreground/60 font-tech text-lg">H</span>
                      </div>
                      <p className="text-[10px] font-tech text-muted-foreground uppercase">Hardware</p>
                    </div>
                    <div className="text-[10px] font-tech text-foreground/40">+</div>
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 border-2 border-foreground/40 flex items-center justify-center">
                        <span className="text-foreground/60 font-tech text-lg">S</span>
                      </div>
                      <p className="text-[10px] font-tech text-muted-foreground uppercase">Software</p>
                    </div>
                    <div className="text-[10px] font-tech text-foreground/40">=</div>
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 border-2 border-foreground flex items-center justify-center">
                        <span className="text-foreground font-tech text-lg">∞</span>
                      </div>
                      <p className="text-[10px] font-tech text-muted-foreground uppercase">No Limits</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-foreground/20">
                  <p className="text-[10px] font-tech text-muted-foreground/40 uppercase tracking-wider">
                    // SCI-FI TODAY // REALITY TOMORROW //
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE VAULT - All Projects */}
      <section id="vault" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              [THE_VAULT]
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
              // Active projects and experiments
            </p>
          </div>

          {/* SOFTWARE SECTION */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-foreground/20" />
              <h3 className="text-lg font-tech text-foreground/60 uppercase tracking-wider">
                // SOFTWARE
              </h3>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} index={idx} />
              ))}
            </div>
          </div>

          {/* HARDWARE SECTION */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-foreground/20" />
              <h3 className="text-lg font-tech text-foreground/60 uppercase tracking-wider">
                // HARDWARE
              </h3>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hardwareProjects.map((project, idx) => (
                <ProjectCard key={idx} {...project} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT DEPLOYMENTS - Hidden for now
      <section id="deployments" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              [CLIENT_DEPLOYMENTS]
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
              // Restaurant brands & hospitality experiences built for Dubai's finest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} index={idx} />
            ))}
          </div>
        </div>
      </section>
      */}

      {/* OPERATORS - Team */}
      <section id="operators" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              [OPERATORS]
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
              // Core team members
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {team.map((member, idx) => (
              <TeamMember key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* INITIATE CONTACT */}
      <section id="contact" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-foreground p-12 space-y-6 text-center relative overflow-hidden bg-card">
              <div className="absolute top-4 right-4 text-[10px] font-tech text-white/20">
                [ENCRYPTED_CHANNEL]
              </div>
              <div className="absolute bottom-4 left-4 text-[10px] font-tech text-white/20">
                [SECURE_LINE_OPEN]
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                [INITIATE_CONTACT]
              </h2>
              <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
                // Secure communications channel active
              </p>
              <p className="text-muted-foreground/60 font-tech text-[10px] tracking-wide">
                Got a project? Need a team? Let's talk.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide font-bold transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:akhmad6093@gmail.com'}
                >
                  [EMAIL]
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide font-bold transition-all duration-300"
                  onClick={() => window.open('https://wa.me/971561495656', '_blank')}
                >
                  [WHATSAPP]
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-muted-foreground font-tech space-y-2">
            <p className="uppercase tracking-wider">CONSTANT LABS © 2025</p>
            <p className="text-[10px] uppercase tracking-wide opacity-60">// BUILT WITH PURPOSE // DESIGNED FOR IMPACT //</p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <a href="/privacy" className="text-[10px] uppercase tracking-wide opacity-40 hover:opacity-80 transition-opacity">Privacy Policy</a>
              <span className="text-[10px] opacity-20">|</span>
              <a href="/terms" className="text-[10px] uppercase tracking-wide opacity-40 hover:opacity-80 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
