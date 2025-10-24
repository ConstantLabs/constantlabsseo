import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  
  const bootSequence = [
    "CONSTANT LABS SYSTEMS v2.4.1",
    "Copyright (C) 2024 Constant Labs. All rights reserved.",
    "",
    "Booting up...",
    "",
    "[BIOS] Initializing hardware components...",
    "[BIOS] CPU: AMD Ryzen 9 7950X - 16 cores detected",
    "[BIOS] RAM: 64GB DDR5 @ 6000MHz - PASSED",
    "[BIOS] GPU: NVIDIA RTX 4090 - ONLINE",
    "[BIOS] Storage: 4TB NVMe SSD - VERIFIED",
    "",
    "[BOOT] Loading CONSTANT LABS operating system...",
    "[BOOT] Mounting file systems... OK",
    "[BOOT] Starting system services... OK",
    "",
    "[KERN] Loading kernel modules...",
    "[KERN] Security protocols... ACTIVE",
    "[KERN] Encryption engine... ENABLED",
    "[KERN] Neural network processors... READY",
    "",
    "[NET] Establishing network connections...",
    "[NET] Secure tunnel established",
    "[NET] Firewall: ACTIVE | IDS: MONITORING",
    "[NET] Connection speed: 10Gbps",
    "",
    "[SYS] Loading CONSTANT LABS interface...",
    "[SYS] Initializing quantum processors...",
    "[SYS] AI systems: ONLINE",
    "[SYS] All systems nominal",
    "",
    "[READY] ✓ CONSTANT LABS ONLINE",
    "[READY] Welcome back, operator.",
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
              {line || "\u00A0"}
            </div>
          ))}
          <div className="inline-block w-2 h-5 bg-green-500 animate-pulse ml-1" />
        </div>
      </div>
    </div>
  );
};
