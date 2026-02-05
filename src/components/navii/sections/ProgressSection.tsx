import { motion } from "framer-motion";
import {
  Cpu,
  Eye,
  Map,
  CheckCircle2,
  Clock,
  Lightbulb,
  ArrowRight,
  Layers,
  ScanLine,
  Route,
  Sparkles
} from "lucide-react";
import { SectionWrapper, containerVariants, itemVariants } from "../ui/SectionWrapper";
import { Badge } from "@/components/ui/badge";

const techStack = [
  {
    icon: Eye,
    title: "Depth Estimation",
    description: "Real-time monocular depth from phone camera using state-of-the-art AI models",
    status: "working",
  },
  {
    icon: ScanLine,
    title: "Visual Positioning",
    description: "Camera-based localization without GPS or beacons",
    status: "working",
  },
  {
    icon: Route,
    title: "Pathfinding",
    description: "A* algorithm with indoor constraints and accessibility options",
    status: "working",
  },
  {
    icon: Layers,
    title: "AR Overlay",
    description: "WebXR-based arrow rendering anchored to real-world positions",
    status: "in-progress",
  },
];

const roadmapItems = [
  {
    quarter: "Now",
    title: "Working Prototype",
    description: "Core depth estimation and basic AR navigation functional",
    status: "done",
  },
  {
    quarter: "Q2",
    title: "First Mall Partnership",
    description: "Dubai Mall pilot with limited store coverage",
    status: "next",
  },
  {
    quarter: "Q3",
    title: "Beta Launch",
    description: "Public beta in Dubai Mall with 100+ stores mapped",
    status: "planned",
  },
  {
    quarter: "Q4",
    title: "UAE Expansion",
    description: "5 mall partners, 50,000 users target",
    status: "planned",
  },
];

const activeWork = [
  {
    title: "Venue Onboarding",
    description: "Streamlining the process to bring new venues online quickly",
  },
  {
    title: "AR Overlay Polish",
    description: "Refining the visual experience and arrow placement accuracy",
  },
  {
    title: "Multi-Floor Support",
    description: "Seamless navigation across different levels and elevators",
  },
];

export const ProgressSection = () => {
  return (
    <SectionWrapper
      id="progress"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-navii-bg via-navii-cyan/3 to-navii-bg" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 229, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 229, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <Badge className="mb-3 sm:mb-4 bg-navii-cyan/10 text-navii-cyan border-navii-cyan/30 font-tech text-xs sm:text-sm">
            <Cpu className="w-3 h-3 mr-1" />
            Under The Hood
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 font-rajdhani text-white">
            Not Just an <span className="text-navii-cyan">Idea</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real technology, working prototype, transparent roadmap. Here's exactly where we are and where we're going.
          </p>
        </motion.div>

        {/* Tech Demo Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative p-4 sm:p-6 rounded-2xl border border-navii-cyan/20 bg-navii-cyan/5 backdrop-blur-sm overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl bg-navii-cyan/20" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-navii-cyan" />
                <h3 className="text-lg sm:text-xl font-bold text-white font-rajdhani">
                  Core Tech: Real-Time Depth Estimation
                </h3>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                Navii uses state-of-the-art monocular depth estimation to understand 3D space from a single phone camera — no special sensors needed.
              </p>

              {/* Depth Estimation Demo GIF */}
              <div className="relative rounded-xl border border-white/10 bg-navii-bg overflow-hidden">
                <div className="relative h-[280px] sm:h-[350px] overflow-hidden">
                  <img
                    src="https://raw.githubusercontent.com/ByteDance-Seed/Depth-Anything-3/main/assets/images/demo320-2.gif"
                    alt="Real-time depth estimation demo"
                    className="w-full h-[140%] object-cover object-bottom"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">Depth Estimation in Action</p>
                      <p className="text-gray-400 text-xs">Real-time monocular depth from camera</p>
                    </div>
                    <Badge className="bg-navii-cyan/20 text-navii-cyan border-0 text-[10px]">Live Tech</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 font-rajdhani flex items-center gap-2">
            <Layers className="w-5 h-5 text-navii-cyan" />
            Technology Stack
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {techStack.map((tech) => (
              <motion.div
                key={tech.title}
                variants={itemVariants}
                className="relative p-3 sm:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-navii-cyan/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-navii-cyan/10 flex items-center justify-center">
                    <tech.icon className="w-4 h-4 sm:w-5 sm:h-5 text-navii-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm sm:text-base font-semibold text-white truncate">{tech.title}</h4>
                      {tech.status === "working" ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-gray-400 text-xs line-clamp-2">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two columns: Roadmap + Limitations */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Roadmap */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 font-rajdhani flex items-center gap-2">
              <Map className="w-5 h-5 text-navii-magenta" />
              Roadmap
            </h3>

            <div className="space-y-3">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-3 sm:p-4 rounded-xl border ${
                    item.status === "done"
                      ? "border-green-500/30 bg-green-500/5"
                      : item.status === "next"
                      ? "border-navii-cyan/30 bg-navii-cyan/5"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-12 sm:w-14 text-center py-1.5 rounded-full text-xs sm:text-sm font-bold font-tech ${
                      item.status === "done"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "next"
                        ? "bg-navii-cyan/20 text-navii-cyan"
                        : "bg-white/10 text-gray-400"
                    }`}>
                      {item.quarter}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-semibold text-white">{item.title}</h4>
                        {item.status === "done" && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                        {item.status === "next" && <ArrowRight className="w-4 h-4 text-navii-cyan" />}
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Active Development */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 font-rajdhani flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-navii-cyan" />
              Active Development
            </h3>

            <div className="p-4 sm:p-5 rounded-xl border border-navii-cyan/20 bg-navii-cyan/5">
              <p className="text-gray-400 text-xs sm:text-sm mb-4">
                What we're actively building and improving:
              </p>

              <div className="space-y-3">
                {activeWork.map((item, index) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-navii-cyan/20 flex items-center justify-center mt-0.5">
                      <span className="text-navii-cyan text-xs font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-400 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-navii-cyan mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-300">
                    <span className="text-navii-cyan font-semibold">Our approach:</span> Iterative development — starting with high-traffic mall areas and expanding coverage based on feedback.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
