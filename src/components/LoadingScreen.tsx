import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const bootSequence = [
    "",
    "Booting up...",
    "",
    " ██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ███╗   ██╗████████╗    ██╗      █████╗ ██████╗ ███████╗",
    "██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗████╗  ██║╚══██╔══╝    ██║     ██╔══██╗██╔══██╗██╔════╝",
    "██║     ██║   ██║██╔██╗ ██║███████╗   ██║   ███████║██╔██╗ ██║   ██║       ██║     ███████║██████╔╝███████╗",
    "██║     ██║   ██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║╚██╗██║   ██║       ██║     ██╔══██║██╔══██╗╚════██║",
    "╚██████╗╚██████╔╝██║ ╚████║███████║   ██║   ██║  ██║██║ ╚████║   ██║       ███████╗██║  ██║██████╔╝███████║",
    " ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝       ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝",
    "",
    "[BIOS] Initializing hardware components...",
    "",
    "[BOOT] Loading CONSTANT LABS operating system...",
    "[BOOT] Mounting file systems... OK",
    "",
    "[KERN] Loading kernel modules...",
    "[KERN] Security protocols... ACTIVE",
    "[KERN] Neural network processors... READY",
    "",
    "[NET] Establishing network connections...",
    "[NET] Secure tunnel established",
    "[NET] Firewall: ACTIVE | IDS: MONITORING",
    "",
    "[SYS] Loading CONSTANT LABS interface...",
    "[SYS] Initializing quantum processors...",
    "[SYS] AI systems: ONLINE",
    "[SYS] All systems nominal",
    "",
    "[READY] CONSTANT LABS ONLINE",
    "[READY] Welcome back, operator.",
  ];

  useEffect(() => {
    if (currentIndex >= bootSequence.length) {
      setTimeout(onComplete, 500);
      return;
    }

    const currentText = bootSequence[currentIndex];

    // If line is empty, move to next line immediately
    if (currentText === "") {
      setLines((prev) => [...prev, ""]);
      setCurrentLine("");
      setCharIndex(0);
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    // Type character by character - 3x faster
    if (charIndex < currentText.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 3); // Speed of typing (faster: 8ms -> 3ms)
      return () => clearTimeout(timer);
    } else {
      // Line complete, move to next
      setLines((prev) => [...prev, currentText]);
      setCurrentLine("");
      setCharIndex(0);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, charIndex, onComplete]);

  return (
    <div className="fixed inset-0 z-[10000]  flex flex-col items-start justify-start p-8">
      <div className="w-full max-w-4xl">

        <div className="font-mono text-sm leading-tight">
          {lines.map((line, index) => {
            // ASCII art lines are indices 3-8 (no spacing)
            // Empty lines before/after ASCII also no spacing
            const isAsciiArt = index >= 3 && index <= 8;
            const isEmpty = line === "";
            const prevLineIsAsciiOrEmpty = index > 0 && (lines[index - 1] === "" || (index > 3 && index <= 9));
            
            // Only add spacing if it's not ASCII art, not empty, and previous line wasn't ASCII/empty
            const needsSpacing = !isAsciiArt && !isEmpty && index > 0 && !prevLineIsAsciiOrEmpty;
            
            return (
              <div 
                key={index} 
                className={`text-green-500 chromatic-aberration ${needsSpacing ? 'mt-1' : ''}`}
                style={isAsciiArt ? { whiteSpace: 'pre', fontFamily: 'monospace' } : undefined}
              >
                {line || <span>&nbsp;</span>}
              </div>
            );
          })}
          {currentLine && (
            <div className="text-green-500 chromatic-aberration mt-1">
              {currentLine}
              <span className="inline-block w-2 h-5 bg-green-500 animate-pulse ml-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
