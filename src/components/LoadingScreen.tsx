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
    <div className="fixed inset-0 z-[10000] bg-black flex flex-col items-start justify-start p-8">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <div className="w-3 h-3 bg-green-500 animate-pulse mb-2" />
          <span className="text-sm font-mono tracking-wider text-green-500/80">
            CONSTANT LABS SYSTEMS
          </span>
        </div>
        
        <div className="space-y-1 font-mono text-sm text-green-500/90">
          {lines.map((line, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
            >
              {line}
            </div>
          ))}
          <div className="inline-block w-2 h-5 bg-green-500 animate-pulse ml-1" />
        </div>
      </div>
    </div>
  );
};
