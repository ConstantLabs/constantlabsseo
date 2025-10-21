import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GlitchText } from "./GlitchText";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  status?: "live" | "beta" | "development";
}

export const ProjectCard = ({ title, description, tech, link, status = "live" }: ProjectCardProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Card
      onClick={handleClick}
      className={cn(
        "group relative overflow-hidden border-4 border-foreground bg-card p-6 transition-all duration-300",
        "hover:shadow-[0_0_30px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.1)]",
        link && "cursor-pointer",
        "skew-y-[-0.5deg] hover:skew-y-0",
        "before:absolute before:top-0 before:right-0 before:w-0 before:h-0",
        "before:border-l-[40px] before:border-l-transparent",
        "before:border-t-[40px] before:border-t-foreground/20",
        "before:transition-all before:duration-300",
        "hover:before:border-t-foreground/40",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(255,255,255,0.03)_100%)]",
        "after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"
      )}
    >
      {/* CLASSIFIED stamp */}
      <div className="absolute top-2 left-2 text-xs font-bold tracking-widest text-foreground/30 rotate-[-5deg] z-20 border-2 border-foreground/30 px-2 py-1">
        CLASSIFIED
      </div>

      {/* Comic halftone overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '4px 4px'
        }}
      />
      
      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-4">
          <GlitchText className="text-2xl font-black uppercase leading-tight tracking-tight" animate>
            {title}
          </GlitchText>
          <span className={cn(
            "text-[10px] font-black tracking-widest border-2 px-2 py-1 whitespace-nowrap flex-shrink-0",
            "skew-x-[-5deg] transition-all duration-300",
            status === "live" && "border-foreground text-foreground bg-foreground/10 group-hover:bg-foreground/20",
            status === "beta" && "border-muted-foreground text-muted-foreground bg-muted-foreground/10",
            status === "development" && "border-muted text-muted bg-muted/10"
          )}>
            [{status.toUpperCase()}]
          </span>
        </div>
        
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed font-mono border-l-2 border-foreground/20 pl-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className={cn(
                "border-2 border-foreground bg-secondary px-3 py-1 text-xs font-mono tracking-wide font-bold",
                "clip-path-[polygon(4px_0,100%_0,100%_calc(100%-4px),calc(100%-4px)_100%,0_100%,0_4px)]",
                "transition-all duration-200 hover:bg-foreground hover:text-background hover:scale-105"
              )}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity scanline pointer-events-none z-30" />
      
      {/* Glitch bars on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
        <div className="absolute top-[20%] left-0 right-0 h-[2px] bg-foreground/50 animate-[glitch-1_0.2s_infinite]" />
        <div className="absolute top-[60%] left-0 right-0 h-[2px] bg-foreground/50 animate-[glitch-2_0.2s_infinite]" />
      </div>
    </Card>
  );
};
