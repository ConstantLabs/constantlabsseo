import { GlitchText } from "@/components/GlitchText";
import { ProjectCard } from "@/components/ProjectCard";
import { TeamMember } from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

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
        "Paper model designs → Hardware engineering",
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
    <div className="min-h-screen bg-background text-foreground">
      {/* ENTRY POINT */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-2 border-border">
        <div className="scanline absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-4 text-center z-10">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Terminal className="w-8 h-8" />
            <span className="text-sm font-mono tracking-wider">SYSTEM ONLINE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            <GlitchText animate>CONSTANT LABS</GlitchText>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-8 max-w-2xl mx-auto">
            Building the future, one experiment at a time. We don't just code—we <span className="text-foreground font-bold">vibe</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-mono tracking-wider"
              onClick={() => document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' })}
            >
              [ENTER_VAULT]
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="border-2 border-border text-foreground hover:border-foreground hover:bg-transparent font-mono tracking-wider"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              [INITIATE_CONTACT]
            </Button>
          </div>
        </div>
      </section>

      {/* THE VAULT - Projects */}
      <section id="vault" className="py-24 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText>[THE_VAULT]</GlitchText>
            </h2>
            <p className="text-muted-foreground font-mono text-lg">
              Our collection of digital artifacts. Each one a unique experiment.
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
      <section id="operators" className="py-24 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText>[OPERATORS]</GlitchText>
            </h2>
            <p className="text-muted-foreground font-mono text-lg">
              The minds behind the madness.
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
      <section id="origin" className="py-24 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText>[ORIGIN_PROTOCOL]</GlitchText>
            </h2>
            <p className="text-muted-foreground font-mono text-lg mb-8">
              Every system has a beginning. This is ours.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-2xl font-bold mb-3">THE COMMON THREAD</h3>
              <p className="text-muted-foreground leading-relaxed">
                Two paths. Different journeys. Same destination. We've always been builders—whether it's paper models, 
                observatories, 3D worlds, or video content. We never stopped creating. We never stopped experimenting.
              </p>
            </div>
            
            <div className="border-l-2 border-muted pl-6">
              <h3 className="text-2xl font-bold mb-3">THE VISION</h3>
              <p className="text-muted-foreground leading-relaxed">
                Constant Labs isn't just a studio—it's a holding company for ideas that matter. We build fast, 
                we iterate faster, and we're not afraid to break things. Each project adds to our arsenal. 
                Each experiment increases our value. We're building something investors can't ignore.
              </p>
            </div>
            
            <div className="border-l-2 border-muted pl-6">
              <h3 className="text-2xl font-bold mb-3">THE MISSION</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build. Ship. Repeat. We're here to create a portfolio of web applications that showcase our craft, 
                our speed, and our vision. Available for hire, ready to scale, designed for acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INITIATE CONTACT */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <GlitchText>[INITIATE_CONTACT]</GlitchText>
          </h2>
          <p className="text-muted-foreground font-mono text-lg mb-8 max-w-2xl mx-auto">
            Got a project? An idea? Investment interest? Let's talk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-mono tracking-wider"
              onClick={() => window.location.href = 'mailto:contact@constantslap.ai'}
            >
              [SEND_MESSAGE]
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground font-mono">
            <p>CONSTANT LABS © 2025</p>
            <p className="mt-2">BUILT WITH PURPOSE. DESIGNED FOR IMPACT.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
