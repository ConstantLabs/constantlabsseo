import { GlitchText } from "@/components/GlitchText";
import { ProjectCard } from "@/components/ProjectCard";
import { TeamMember } from "@/components/TeamMember";
import { WireframeBackground } from "@/components/WireframeBackground";
import { Button } from "@/components/ui/button";
import { Terminal, Github, Linkedin } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground relative">
      <WireframeBackground />
      
      {/* ENTRY POINT */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="scanline absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex items-center justify-center gap-2">
            <Terminal className="w-10 h-10" />
            <span className="text-xs font-mono tracking-[0.5em] uppercase">SYSTEM_ONLINE</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter uppercase italic">
            <GlitchText animate intensity="insane">CONSTANT LABS</GlitchText>
          </h1>
          
          <p className="text-sm md:text-base text-muted-foreground font-mono mb-12 tracking-[0.3em] uppercase border-l-4 border-foreground/50 pl-6 inline-block">
            WE BUILD. WE BREAK. WE OWN IT.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="border-4 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-mono tracking-wider font-black skew-x-[-2deg] hover:skew-x-0 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              onClick={() => document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' })}
            >
              [ENTER_VAULT]
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="border-4 border-border text-foreground hover:border-foreground hover:bg-transparent font-mono tracking-wider font-black skew-x-[2deg] hover:skew-x-0 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              [INITIATE_CONTACT]
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-16">
            <a
              href="https://www.linkedin.com/company/constant-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-border hover:border-foreground p-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:skew-x-[-5deg]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/moobfinancial"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-border hover:border-foreground p-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:skew-x-[5deg]"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* THE VAULT - Projects */}
      <section id="vault" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-l-8 border-foreground pl-6">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
              <GlitchText animate intensity="insane">[THE_VAULT]</GlitchText>
            </h2>
            <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
              [ACTIVE_PROJECTS_AND_EXPERIMENTS]
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
      <section id="operators" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-l-8 border-foreground pl-6">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
              <GlitchText animate intensity="insane">[OPERATORS]</GlitchText>
            </h2>
            <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
              [CORE_TEAM_MEMBERS]
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
      <section id="origin" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 border-l-8 border-foreground pl-6">
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">
              <GlitchText animate intensity="insane">[ORIGIN_PROTOCOL]</GlitchText>
            </h2>
            <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
              [COMPANY_HISTORY_AND_MISSION]
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 border-foreground/50 pl-6 hover:border-foreground transition-all duration-300">
              <h3 className="text-xs font-black tracking-widest text-foreground mb-3 uppercase">[THE_COMMON_THREAD]</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                Two paths. Different journeys. Same destination. We've always been builders—whether it's paper models, 
                observatories, 3D worlds, or video content. We never stopped creating. We never stopped experimenting.
              </p>
            </div>
            
            <div className="border-l-4 border-foreground/50 pl-6 hover:border-foreground transition-all duration-300">
              <h3 className="text-xs font-black tracking-widest text-foreground mb-3 uppercase">[THE_VISION]</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                Constant Labs isn't just a studio—it's a holding company for ideas that matter. We build fast, 
                we iterate faster, and we're not afraid to break things. Each project adds to our arsenal. 
                Each experiment increases our value. We're building something investors can't ignore.
              </p>
            </div>
            
            <div className="border-l-4 border-foreground/50 pl-6 hover:border-foreground transition-all duration-300">
              <h3 className="text-xs font-black tracking-widest text-foreground mb-3 uppercase">[THE_MISSION]</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                Build. Ship. Repeat. We're here to create a portfolio of web applications that showcase our craft, 
                our speed, and our vision. Available for hire, ready to scale, designed for acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INITIATE CONTACT */}
      <section id="contact" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border-4 border-foreground p-12 space-y-6 bg-background/80 backdrop-blur-sm skew-y-[-0.5deg] hover:skew-y-0 transition-all duration-300 text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
                <GlitchText animate intensity="insane">[INITIATE_CONTACT]</GlitchText>
              </h2>
              <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                GOT_A_PROJECT?_NEED_A_TEAM?_LET'S_TALK.
              </p>
              
              <Button 
                size="lg"
                className="border-4 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-mono tracking-widest font-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] skew-x-[-2deg] hover:skew-x-0"
                onClick={() => window.location.href = 'mailto:contact@constantslap.ai'}
              >
                [SEND_TRANSMISSION]
              </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center text-xs text-muted-foreground font-mono tracking-widest">
            <p>CONSTANT_LABS_©_2025</p>
            <p className="mt-2">BUILT_WITH_PURPOSE._DESIGNED_FOR_IMPACT.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
