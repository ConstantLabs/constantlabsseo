import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Car, Radio, Brain, Monitor } from "lucide-react";

const Circle = ({ 
  className, 
  children, 
  label,
  sublabel
}: { 
  className?: string; 
  children: React.ReactNode;
  label: string;
  sublabel?: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
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
};

export function SmartRoadsArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carDeviceRef = useRef<HTMLDivElement>(null);
  const rtkTowerRef = useRef<HTMLDivElement>(null);
  const aiCloudRef = useRef<HTMLDivElement>(null);
  const driverDisplayRef = useRef<HTMLDivElement>(null);

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
          className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[#161616] p-8 md:p-12 min-h-[350px] md:min-h-[400px]"
          ref={containerRef}
        >
          {/* Layout: AI Cloud at top, RTK Tower in middle, Car Device and Display at bottom */}
          <div className="flex flex-col items-center justify-between h-full w-full gap-8 md:gap-12">
            {/* Top: AI Cloud */}
            <div ref={aiCloudRef}>
              <Circle label="AI Platform" sublabel="Coordinates all vehicles">
                <Brain className="h-7 w-7 md:h-8 md:w-8 text-[#5CFF3D]" />
              </Circle>
            </div>

            {/* Middle: RTK Tower */}
            <div ref={rtkTowerRef}>
              <Circle label="RTK Network" sublabel="200-300 towers, 2cm accuracy">
                <Radio className="h-7 w-7 md:h-8 md:w-8 text-[#5CFF3D]" />
              </Circle>
            </div>

            {/* Bottom: Car Device and Driver Display side by side */}
            <div className="flex items-center justify-center gap-16 md:gap-24">
              <div ref={carDeviceRef}>
                <Circle label="Car Device" sublabel="RTK + Sensors">
                  <Car className="h-7 w-7 md:h-8 md:w-8 text-[#5CFF3D]" />
                </Circle>
              </div>
              <div ref={driverDisplayRef}>
                <Circle label="Driver Display" sublabel="Real-time guidance">
                  <Monitor className="h-7 w-7 md:h-8 md:w-8 text-[#5CFF3D]" />
                </Circle>
              </div>
            </div>
          </div>

          {/* Animated Beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={aiCloudRef}
            toRef={rtkTowerRef}
            curvature={0}
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
            curvature={0}
            reverse
            pathColor="#5CFF3D"
            pathOpacity={0.15}
            gradientStartColor="#5CFF3D"
            gradientStopColor="#00ff88"
            duration={3}
            delay={1.5}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={rtkTowerRef}
            toRef={carDeviceRef}
            curvature={-50}
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
            curvature={50}
            reverse
            pathColor="#5CFF3D"
            pathOpacity={0.15}
            gradientStartColor="#5CFF3D"
            gradientStopColor="#00ff88"
            duration={2.5}
            delay={1}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={carDeviceRef}
            toRef={driverDisplayRef}
            curvature={0}
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
