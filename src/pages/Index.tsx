import { GlitchText } from "@/components/GlitchText";
import { ProjectCard } from "@/components/ProjectCard";
import { TeamMember } from "@/components/TeamMember";
import { HackerBackground } from "@/components/HackerBackground";
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
      <HackerBackground />
      
      {/* ENTRY POINT */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="scanline absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12 flex items-center justify-center gap-2 opacity-60">
            <Terminal className="w-6 h-6" />
            <span className="text-xs font-tech tracking-[0.3em] uppercase">SYSTEM_ONLINE</span>
          </div>
          
          <h1 className="text-8xl md:text-[12rem] lg:text-[16rem] font-black mb-12 tracking-tight uppercase transform -rotate-2">
            <GlitchText animate intensity="insane">CONSTANT LABS</GlitchText>
          </h1>
          
          <p className="text-xs md:text-sm text-muted-foreground font-tech mb-12 tracking-[0.2em] uppercase">
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
      <section id="vault" className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight uppercase">
              <GlitchText>[THE_VAULT]</GlitchText>
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide">
              Active projects and experiments
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
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight uppercase">
              <GlitchText>[OPERATORS]</GlitchText>
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide">
              Core team members
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
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight uppercase">
              <GlitchText>[ORIGIN_PROTOCOL]</GlitchText>
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide">
              Company history and mission
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-t-2 border-foreground/20 pt-6">
              <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">The Common Thread</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Two paths. Different journeys. Same destination. We've always been builders—whether it's paper models, 
                observatories, 3D worlds, or video content. We never stopped creating. We never stopped experimenting.
              </p>
            </div>
            
            <div className="border-t-2 border-foreground/20 pt-6">
              <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">The Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Constant Labs isn't just a studio—it's a holding company for ideas that matter. We build fast, 
                we iterate faster, and we're not afraid to break things. Each project adds to our arsenal. 
                Each experiment increases our value. We're building something investors can't ignore.
              </p>
            </div>
            
            <div className="border-t-2 border-foreground/20 pt-6">
              <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">The Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
            <div className="border-2 border-foreground p-12 space-y-6 text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                <GlitchText>[INITIATE_CONTACT]</GlitchText>
              </h2>
              <p className="text-muted-foreground font-tech text-xs tracking-wide">
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
          
          <div className="mt-12 text-center text-xs text-muted-foreground font-tech">
            <p>CONSTANT LABS © 2025</p>
            <p className="mt-2">BUILT WITH PURPOSE. DESIGNED FOR IMPACT.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
