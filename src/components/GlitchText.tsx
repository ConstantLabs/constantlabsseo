import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to allow LCP paint before heavy animation starts
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      className={cn(
        "glitch inline-block",
        // Disable hover glitch on intense mode for performance
        animate && intensity !== "insane" && "hover-glitch",
        intensity === "insane" && isReady && "glitch-intense",
        className
      )}
      data-text={children}
    >
      {children}
    </span>
  );
};
