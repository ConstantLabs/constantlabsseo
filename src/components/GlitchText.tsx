import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: string;
  className?: string;
  animate?: boolean;
  intensity?: "normal" | "insane";
}

export const GlitchText = ({ 
  children, 
  className, 
  animate = false,
  intensity = "normal" 
}: GlitchTextProps) => {
  return (
    <span 
      className={cn(
        "glitch inline-block",
        // Disable hover glitch on intense mode for performance
        animate && intensity !== "insane" && "hover-glitch",
        intensity === "insane" && "glitch-intense",
        className
      )}
      data-text={children}
    >
      {children}
    </span>
  );
};
