import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: string;
  className?: string;
  animate?: boolean;
}

export const GlitchText = ({ children, className, animate = false }: GlitchTextProps) => {
  return (
    <span 
      className={cn(
        "glitch inline-block",
        animate && "hover-glitch",
        className
      )}
      data-text={children}
    >
      {children}
    </span>
  );
};
