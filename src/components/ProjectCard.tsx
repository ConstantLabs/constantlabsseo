import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  status: "live" | "beta" | "development" | "repository";
  link: string;
  image?: string;
  index: number;
}

export const ProjectCard = ({ title, description, tech, status, link, image, index }: ProjectCardProps) => {
  const [isTouched, setIsTouched] = useState(false);
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col bg-background p-6 border-2 border-foreground/20 overflow-hidden",
        isTouched && "border-foreground/40"
      )}
      whileHover={{
        scale: 1.01,
        borderColor: "rgba(255, 255, 255, 0.4)",
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.05)"
      }}
      whileTap={{ scale: 0.98 }}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 300)}
      transition={{ duration: 0.3 }}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground/20 group-hover:border-foreground/60 transition-colors z-20" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground/20 group-hover:border-foreground/60 transition-colors z-20" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground/20 group-hover:border-foreground/60 transition-colors z-20" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground/20 group-hover:border-foreground/60 transition-colors z-20" />

      {/* Halftone background */}
      <div
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '8px 8px'
        }}
      />

      {image && (
        <div className="relative h-48 w-full overflow-hidden mb-6 border border-foreground/10 group-hover:border-foreground/20 transition-colors z-10">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
          {/* Image scanline overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
        </div>
      )}

      <div className="flex flex-col flex-1 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="text-[10px] font-tech text-foreground/40 tracking-widest">
            [00{index + 1}]
          </div>
          <span className={cn(
            "text-[10px] font-bold tracking-wider px-2 py-0.5 font-tech border",
            status === "live" && "border-emerald-500/50 text-emerald-500",
            status === "beta" && "border-amber-500/50 text-amber-500",
            status === "development" && "border-blue-500/50 text-blue-500",
            status === "repository" && "border-zinc-500/50 text-zinc-400"
          )}>
            {status.toUpperCase()}
          </span>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold uppercase group-hover:text-white transition-colors font-tech tracking-wide">
            {title}
          </h3>
          <motion.div
            className="h-px bg-foreground/40 my-3"
            initial={{ width: 48 }}
            whileHover={{ width: 96 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <p className="mb-6 text-sm text-muted-foreground leading-relaxed font-mono">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-tech text-foreground/60 uppercase tracking-wider"
            >
             // {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};
