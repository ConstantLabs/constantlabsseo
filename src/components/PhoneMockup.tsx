import { useState } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  screenshots: string[];
  alt: string;
  className?: string;
}

export function PhoneMockup({ screenshots, alt, className }: PhoneMockupProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      {/* Phone frame */}
      <div className="relative w-[180px] md:w-[220px] mx-auto">
        {/* Outer bezel */}
        <div className="relative border-[3px] border-foreground/30 rounded-[28px] bg-background overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-background rounded-b-xl z-20 border-b-[2px] border-x-[2px] border-foreground/20" />

          {/* Screen area with 9:19.5 aspect ratio */}
          <div className="relative w-full" style={{ aspectRatio: "9 / 19.5" }}>
            <img
              src={screenshots[current]}
              alt={`${alt} screenshot ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }}
            />
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-foreground/20 rounded-full z-20" />
        </div>
      </div>

      {/* Dot indicators (only if multiple screenshots) */}
      {screenshots.length > 1 && (
        <div className="flex items-center gap-2">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="p-2"
              aria-label={`Screenshot ${idx + 1}`}
            >
              <span
                className={cn(
                  "block w-1.5 h-1.5 rounded-full transition-all",
                  idx === current
                    ? "bg-cl-cyan w-4"
                    : "bg-foreground/20 hover:bg-foreground/40"
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
