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
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-transparent before:to-foreground/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <GlitchText className="text-2xl font-bold" animate>
            {title}
          </GlitchText>
          <span className={cn(
            "text-xs font-bold tracking-wider border px-2 py-1",
            status === "live" && "border-foreground text-foreground",
            status === "beta" && "border-muted-foreground text-muted-foreground",
            status === "development" && "border-muted text-muted"
          )}>
            [{status.toUpperCase()}]
          </span>
        </div>
        
        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="border border-border bg-secondary px-2 py-1 text-xs font-mono tracking-wide"
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
