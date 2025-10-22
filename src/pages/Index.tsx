import { GlitchText } from "@/components/GlitchText";
import { ProjectCard } from "@/components/ProjectCard";
import { TeamMember } from "@/components/TeamMember";
import { HackerBackground } from "@/components/HackerBackground";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "PROJECT_ALPHA",
      description: "Revolutionary web application that transforms how users interact with digital spaces. Built with cutting-edge technology.",
      tech: ["React", "TypeScript", "Supabase"],
      status: "live" as const,
      link: "https://example.com"
    },
    {
      title: "PROJECT_BETA",
      description: "Experimental platform pushing the boundaries of what's possible in modern web development.",
      tech: ["Next.js", "AI", "Edge Functions"],
      status: "beta" as const,
    },
    {
      title: "PROJECT_GAMMA",
      description: "Next-generation solution designed for scalability and performance at enterprise level.",
      tech: ["React", "Cloud", "Real-time"],
      status: "development" as const,
    },
  ];

  const team = [
    {
      name: "AHMED HASSAN",
      role: "CO-FOUNDER / ARCHITECT",
      journey: [
        "3D fabrication and physical prototyping → Hardware engineering",
        "Applied Physics (dropout) → Astronomical research",
        "Built observatories for deep space observation",
        "Now: Architecting digital experiences that push boundaries"
      ]
    },
    {
      name: "MOHAMMED TAMER",
      role: "CO-FOUNDER / CREATIVE DIRECTOR",
      journey: [
        "Computer Science degree → Astrophotography",
        "3D design and modeling",
        "Marketing agency: Video production & editing",
        "Now: Crafting visual experiences that break conventions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <HackerBackground />
      
      {/* ENTRY POINT */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          {/* Main title - THE STAR */}
          <h1 className="relative text-7xl md:text-[11rem] lg:text-[16rem] font-black tracking-tight uppercase transform -rotate-3 font-dedsec mb-16">
            <GlitchText animate intensity="insane">CONSTANT LABS</GlitchText>
          </h1>
          
          {/* Single tagline */}
          <p className="text-sm md:text-base text-muted-foreground font-tech tracking-[0.3em] uppercase mb-16">
            WE BUILD. WE BREAK. WE OWN IT.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide transition-all"
              onClick={() => document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' })}
            >
              [ENTER_VAULT]
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="border-2 border-border text-foreground hover:border-foreground hover:bg-transparent font-tech tracking-wide transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              [INITIATE_CONTACT]
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://www.linkedin.com/company/constant-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border hover:border-foreground p-3 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/moobfinancial"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-border hover:border-foreground p-3 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* THE VAULT - Projects */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

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

      {/* ORIGIN PROTOCOL - Story */}
      <section id="origin" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              [ORIGIN_PROTOCOL]
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
              // Our story and mission
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Classified Document Style */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column - The Thread */}
              <div className="relative border border-foreground/40 p-8 group hover:border-foreground/60 transition-all">
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-foreground/60" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-foreground/60" />
                
                <div className="absolute top-2 right-2 text-[8px] font-tech text-foreground/40">
                  [DOC_001]
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-foreground" />
                    <h3 className="text-lg font-bold text-foreground uppercase tracking-wide font-tech">
                      The Common Thread
                    </h3>
                  </div>
                  <div className="h-px bg-foreground/20 mb-4" />
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Two paths. Different journeys. Same destination.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We've always been builders—whether it's paper models, observatories, 3D worlds, or video content. 
                  We never stopped creating. We never stopped experimenting.
                </p>
                
                <div className="mt-6 pt-4 border-t border-foreground/10">
                  <p className="text-[10px] font-tech text-muted-foreground/40 uppercase tracking-wider">
                    STATUS: VERIFIED // SOURCE: GENESIS_ARCHIVE
                  </p>
                </div>
              </div>
              
              {/* Right Column - The Vision */}
              <div className="relative border border-foreground/40 p-8 group hover:border-foreground/60 transition-all">
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-foreground/60" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-foreground/60" />
                
                <div className="absolute top-2 right-2 text-[8px] font-tech text-foreground/40">
                  [DOC_002]
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-foreground" />
                    <h3 className="text-lg font-bold text-foreground uppercase tracking-wide font-tech">
                      The Vision
                    </h3>
                  </div>
                  <div className="h-px bg-foreground/20 mb-4" />
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Constant Labs isn't just a studio—it's a holding company for ideas that matter.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build fast, we iterate faster, and we're not afraid to break things. Each project adds to our arsenal. 
                  Each experiment increases our value. We're building something investors can't ignore.
                </p>
                
                <div className="mt-6 pt-4 border-t border-foreground/10">
                  <p className="text-[10px] font-tech text-muted-foreground/40 uppercase tracking-wider">
                    STATUS: VERIFIED // SOURCE: STRATEGIC_BRIEF
                  </p>
                </div>
              </div>
            </div>
            
            {/* Full Width Mission Block */}
            <div className="relative border-2 border-foreground bg-background p-12 overflow-hidden group hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-foreground/60" />
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-foreground/60" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-foreground/60" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-foreground/60" />
              
              {/* Halftone background */}
              <div 
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)',
                  backgroundSize: '16px 16px'
                }}
              />
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="text-[10px] font-tech text-foreground/40 mb-6 tracking-widest">
                  [CLASSIFIED_DIRECTIVE_003] [PRIORITY: MAXIMUM] [CLEARANCE: OMEGA]
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-16 bg-foreground/40" />
                  <h3 className="text-3xl font-black text-foreground uppercase tracking-wider font-tech">
                    THE MISSION
                  </h3>
                  <div className="h-px w-16 bg-foreground/40" />
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl font-bold text-foreground leading-relaxed uppercase tracking-wide">
                    Build. Ship. Repeat.
                  </p>
                  
                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    We're here to create a portfolio of web applications that showcase our craft, our speed, and our vision. 
                    Available for hire, ready to scale, designed for acquisition.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-8 pt-6">
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 border-2 border-foreground/20" />
                      <p className="text-[10px] font-tech text-muted-foreground uppercase">Build Fast</p>
                    </div>
                    <div className="w-px h-12 bg-foreground/20" />
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 border-2 border-foreground/20" />
                      <p className="text-[10px] font-tech text-muted-foreground uppercase">Ship Faster</p>
                    </div>
                    <div className="w-px h-12 bg-foreground/20" />
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 border-2 border-foreground/20" />
                      <p className="text-[10px] font-tech text-muted-foreground uppercase">Scale Infinitely</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-foreground/20">
                  <p className="text-[10px] font-tech text-muted-foreground/40 uppercase tracking-wider">
                    // MISSION_ACTIVE // PROTOCOL_ENGAGED // TARGETS_LOCKED //
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INITIATE CONTACT */}
      <section id="contact" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-foreground p-12 space-y-6 text-center relative overflow-hidden">
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
              
              <Button 
                size="lg"
                className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide font-bold transition-all duration-300"
                onClick={() => window.location.href = 'mailto:contact@constantslap.ai'}
              >
                [SEND_MESSAGE]
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-muted-foreground font-tech space-y-2">
            <p className="uppercase tracking-wider">CONSTANT LABS © 2025</p>
            <p className="text-[10px] uppercase tracking-wide opacity-60">// BUILT WITH PURPOSE // DESIGNED FOR IMPACT //</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
