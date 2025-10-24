import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  
  const bootSequence = [
    "[SYSTEM] Initializing core modules...",
    "[BIOS] Hardware check: PASSED",
    "[BOOT] Loading security protocols...",
    "[AUTH] Verifying credentials...",
    "[NET] Establishing secure connection...",
    "[SYS] Mounting file systems...",
    "[KERN] Loading kernel modules...",
    "[GPU] Graphics acceleration: ENABLED",
    "[MEM] Memory allocation: COMPLETE",
    "[CPU] Processor ready: 8 cores detected",
    "[DISK] Storage devices: ONLINE",
    "[SEC] Firewall status: ACTIVE",
    "[NET] Network interfaces: UP",
    "[SYS] All systems nominal",
    "[INIT] Boot sequence complete",
    "[READY] CONSTANT LABS ONLINE",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-background flex items-center justify-center">
      <div className="w-full max-w-3xl px-8">
        <div className="border-2 border-foreground/20 p-8 bg-background/95">
          <div className="mb-6 flex items-center gap-2">
            <div className="w-3 h-3 bg-foreground animate-pulse" />
            <span className="text-xs font-tech tracking-wider text-foreground/60">
              SYSTEM BOOT SEQUENCE
            </span>
          </div>
          
          <div className="space-y-2 font-mono text-xs text-foreground/80">
            {lines.map((line, index) => (
              <div 
                key={index} 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
              >
                {line}
              </div>
            ))}
            <div className="inline-block w-2 h-4 bg-foreground animate-pulse ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
