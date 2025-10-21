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
        "group relative overflow-hidden border-2 border-border bg-card p-6 transition-all duration-300",
        "hover:border-foreground hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        link && "cursor-pointer",
        "before:absolute before:top-0 before:right-0 before:w-0 before:h-0",
        "before:border-l-[40px] before:border-l-transparent",
        "before:border-t-[40px] before:border-t-foreground/20",
        "before:transition-all before:duration-300",
        "hover:before:border-t-foreground/40",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(255,255,255,0.03)_100%)]",
        "after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"
      )}
    >
      {/* Status badge at top right */}
      <div className="absolute top-4 right-4 z-20">
        <span className={cn(
          "text-[10px] font-bold tracking-wider border px-2 py-1",
          status === "live" && "border-foreground text-foreground",
          status === "beta" && "border-muted-foreground text-muted-foreground",
          status === "development" && "border-muted text-muted"
        )}>
          [{status.toUpperCase()}]
        </span>
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
        <div className="mb-4">
          <h3 className="text-2xl font-bold uppercase">
            {title}
          </h3>
        </div>
        
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="border border-border bg-secondary px-2 py-1 text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity scanline pointer-events-none" />
    </Card>
  );
};
