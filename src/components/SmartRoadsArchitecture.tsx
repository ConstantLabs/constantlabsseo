import { useRef, useState, useEffect } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Car, Radio, Brain, Monitor } from "lucide-react";

import React from "react";

const Circle = React.forwardRef<HTMLDivElement, { 
  className?: string; 
  children: React.ReactNode;
  label: string;
  sublabel?: string;
}>(({ className, children, label, sublabel }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={`z-10 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-2 border-[#5CFF3D]/30 bg-[#161616] shadow-[0_0_20px_rgba(92,255,61,0.15)] ${className}`}
      >
        {children}
      </div>
      <div className="text-center">
        <div className="text-xs md:text-sm font-medium text-white">{label}</div>
        {sublabel && <div className="text-[10px] md:text-xs text-[#6b6b6b]">{sublabel}</div>}
      </div>
    </div>
  );
});

export function SmartRoadsArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carDeviceRef = useRef<HTMLDivElement>(null);
  const rtkTowerRef = useRef<HTMLDivElement>(null);
  const aiCloudRef = useRef<HTMLDivElement>(null);
  const driverDisplayRef = useRef<HTMLDivElement>(null);
  
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="sr-heading-lg text-white mb-4">One Device. One Network.</h2>
          <p className="text-[#BEBEBE] text-base md:text-lg max-w-2xl mx-auto">
            Every vehicle gets a small device installed. That's it. RTK receivers for precision, 
            sensors for safety, display for guidance. ~AED 1,000 per car.
          </p>
        </div>

        <div
          className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[#161616] p-8 md:p-12 min-h-[400px] md:min-h-[250px]"
          ref={containerRef}
        >
          {/* Mobile: Vertical | Desktop: Horizontal */}
          <div className="flex flex-col md:flex-row items-center justify-between h-full w-full gap-8 md:gap-6">
            {/* AI Cloud */}
            <Circle ref={aiCloudRef} label="AI Platform" sublabel="Coordinates all vehicles">
              <Brain className="h-7 w-7 md:h-8 md:w-8 text-[#5CFF3D]" />
            </Circle>

            {/* RTK Tower */}
            <Circle ref={rtkTowerRef} label="RTK Network" sublabel="200-300 towers">
              <Radio className="h-7 w-7 md:h-8 md:w-8 text-[#5CFF3D]" />
            </Circle>

            {/* Car Device */}
            <Circle ref={carDeviceRef} label="Car Device" sublabel="~AED 1,000">
              <Car className="h-7 w-7 md:h-8 md:w-8 text-[#5CFF3D]" />
            </Circle>

            {/* Driver Display */}
            <Circle ref={driverDisplayRef} label="Driver Display" sublabel="Real-time guidance">
              <Monitor className="h-7 w-7 md:h-8 md:w-8 text-[#5CFF3D]" />
            </Circle>
          </div>

          {/* Animated Beams - AI to RTK */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={aiCloudRef}
            toRef={rtkTowerRef}
            curvature={isDesktop ? -30 : 0}
            pathColor="#5CFF3D"
            pathOpacity={0.15}
            gradientStartColor="#5CFF3D"
            gradientStopColor="#00ff88"
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={rtkTowerRef}
            toRef={aiCloudRef}
            curvature={isDesktop ? 30 : 0}
            reverse
            pathColor="#5CFF3D"
            pathOpacity={0.15}
            gradientStartColor="#5CFF3D"
            gradientStopColor="#00ff88"
            duration={3}
            delay={1.5}
          />
          
          {/* RTK to Car Device */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={rtkTowerRef}
            toRef={carDeviceRef}
            curvature={isDesktop ? -30 : 0}
            pathColor="#5CFF3D"
            pathOpacity={0.15}
            gradientStartColor="#5CFF3D"
            gradientStopColor="#00ff88"
            duration={2.5}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={carDeviceRef}
            toRef={rtkTowerRef}
            curvature={isDesktop ? 30 : 0}
            reverse
            pathColor="#5CFF3D"
            pathOpacity={0.15}
            gradientStartColor="#5CFF3D"
            gradientStopColor="#00ff88"
            duration={2.5}
            delay={1}
          />
          
          {/* Car Device to Driver Display */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={carDeviceRef}
            toRef={driverDisplayRef}
            curvature={isDesktop ? -30 : 0}
            pathColor="#5CFF3D"
            pathOpacity={0.15}
            gradientStartColor="#5CFF3D"
            gradientStopColor="#00ff88"
            duration={2}
          />
        </div>

        {/* Bottom callout */}
        <div className="mt-8 text-center">
          <p className="text-[#6b6b6b] text-sm">
            Position data flows up. Coordination signals flow down. Every car knows its exact lane position in real-time.
          </p>
        </div>
      </div>
    </section>
  );
}
