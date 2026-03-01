import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  Smartphone,
  ArrowRight,
  Menu,
  X,
  DollarSign,
  Target,
  Satellite,
  Cpu,
  Car,
  MapPin,
  Zap,
  CloudRain,
  Eye,
  Activity,
  ChevronRight,
  CheckCircle,
  Monitor,
} from "lucide-react";

const formFactors = [
  {
    icon: Smartphone,
    title: "Phone App",
    description:
      "The SmartRoads app connects to the RTK receiver module and turns your phone into the display. Full precision guidance, zero screen cost.",
    bullets: [
      "RTK precision via connected module",
      "Uses your existing phone screen",
      "Lowest cost entry point",
      "All 9 SmartRoads capabilities",
    ],
  },
  {
    icon: Monitor,
    title: "Compact LCD Display",
    description:
      "A small, dedicated LCD screen paired with the RTK module. Always-on guidance without depending on your phone or draining its battery.",
    bullets: [
      "Built-in RTK receiver",
      "Dedicated always-on screen",
      "No phone dependency",
      "Fleet-friendly form factor",
    ],
  },
];

const allCapabilities = [
  { icon: Car, title: "Smart Traffic Management", description: "Speed guidance that eliminates phantom jams" },
  { icon: MapPin, title: "Road Health Intelligence", description: "Every vehicle scans road surface quality" },
  { icon: Zap, title: "Emergency Response", description: "Sub-second crash detection and dispatch" },
  { icon: CloudRain, title: "Weather-Adaptive Safety", description: "Virtual vehicle awareness in fog and sandstorms" },
  { icon: Eye, title: "AI Driver Monitoring", description: "Drowsiness and distraction prevention" },
  { icon: Activity, title: "Behavior Analysis", description: "Driving score and personalized feedback" },
  { icon: Target, title: "Lane-Level Positioning", description: "Centimeter-precise lane awareness" },
  { icon: Satellite, title: "RTK Precision (2cm)", description: "100x better than standard GPS" },
  { icon: Cpu, title: "V2X Communication", description: "Real-time coordination with the network" },
];

const comparisonRows = [
  { feature: "RTK Precision (2cm)", lite: true, full: true },
  { feature: "All 9 Core Capabilities", lite: true, full: true },
  { feature: "AI Traffic Coordination", lite: true, full: true },
  { feature: "Emergency Detection", lite: true, full: true },
  { feature: "Road Health Scanning", lite: true, full: true },
  { feature: "Weather-Adaptive Safety", lite: true, full: true },
  { feature: "Full Tablet Display", lite: false, full: true },
  { feature: "Dual AI Cameras", lite: false, full: true },
  { feature: "OBD-II Integration", lite: "optional", full: true },
];

const SmartRoadsLite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-crt", "smartroads-bg");
    window.scrollTo(0, 0);
    return () => document.body.classList.remove("no-crt", "smartroads-bg");
  }, []);

  return (
    <div className="min-h-screen text-white smartroads-page">
      <SEO
        title="SmartRoads Lite - Full RTK Power, Smaller Package"
        description="All the precision and intelligence of SmartRoads in a compact, affordable form factor. Phone app or small LCD display with RTK positioning."
        path="/smartroads/lite"
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
          mobileMenuOpen ? "bg-[#0d0d0d]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/smartroads" className="flex items-center gap-2">
              <img
                src="/smartroads/logo.png"
                alt="SmartRoads"
                className="w-8 h-8 md:w-9 md:h-9"
              />
              <span className="font-semibold text-white text-base md:text-lg">
                SmartRoads
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/smartroads/technology"
                className="text-[#BEBEBE] hover:text-white transition-colors text-sm"
              >
                Technology
              </Link>
              <Link
                to="/smartroads/capabilities"
                className="text-[#BEBEBE] hover:text-white transition-colors text-sm"
              >
                Capabilities
              </Link>
              <Link
                to="/smartroads/research"
                className="text-[#BEBEBE] hover:text-white transition-colors text-sm"
              >
                Research
              </Link>
              <Link
                to="/smartroads/implementation"
                className="sr-btn-primary"
              >
                View Plan
              </Link>
            </div>
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0d0d0d] border-t border-white/10"
            >
              <div className="flex flex-col px-4 py-4 gap-4 text-center">
                <Link
                  to="/smartroads/technology"
                  className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Technology
                </Link>
                <Link
                  to="/smartroads/capabilities"
                  className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Capabilities
                </Link>
                <Link
                  to="/smartroads/research"
                  className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Research
                </Link>
                <Link
                  to="/smartroads/implementation"
                  className="sr-btn-primary justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View Plan
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-28">
        {/* Hero */}
        <section className="py-10 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5CFF3D]/10 text-[#5CFF3D] text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4" />
                Affordable Form Factor
              </div>
              <h1 className="sr-heading-xl text-white mb-6">
                SmartRoads <span className="text-[#5CFF3D]">Lite</span>
              </h1>
              <p className="text-[#BEBEBE] text-lg leading-relaxed mb-4">
                Same RTK precision. Same 9 capabilities. Same network.
                Just a smaller, cheaper package.
              </p>
              <p className="text-[#6b6b6b] text-base leading-relaxed">
                Instead of a full tablet, SmartRoads Lite uses your phone or a compact LCD display
                paired with the RTK receiver module. You get centimeter-level positioning and every
                SmartRoads capability — at a fraction of the cost.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes It "Lite" */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="sr-heading-lg text-white mb-6">
                  Same Brain, <span className="text-[#5CFF3D]">Lighter Shell</span>
                </h2>
                <p className="text-[#BEBEBE] text-lg mb-6 leading-relaxed">
                  The cost of SmartRoads isn't in the intelligence — it's in the hardware.
                  The full unit ships with a large tablet display, dual AI cameras, and OBD-II integration.
                </p>
                <p className="text-[#BEBEBE] text-base mb-8 leading-relaxed">
                  SmartRoads Lite strips the expensive parts. Replace the tablet with a phone
                  app or small LCD. Skip the cameras. Make OBD-II optional. What's left is a compact
                  RTK module that plugs into the full SmartRoads network — with all 9 capabilities intact.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      label: "RTK Module",
                      desc: "The core hardware. Centimeter-precision positioning that powers everything.",
                      color: "text-[#5CFF3D]",
                    },
                    {
                      label: "Phone or Small LCD",
                      desc: "Replaces the full tablet. Displays guidance, alerts, and driver feedback.",
                      color: "text-[#5CFF3D]",
                    },
                    {
                      label: "No Cameras Required",
                      desc: "AI driver monitoring and cameras are optional upgrades, not required.",
                      color: "text-[#5CFF3D]",
                    },
                    {
                      label: "OBD-II Optional",
                      desc: "Vehicle diagnostics integration available but not needed for core functions.",
                      color: "text-[#5CFF3D]",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium mb-1">
                          {item.label}
                        </div>
                        <div className="text-sm text-[#6b6b6b]">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="sr-card p-8">
                  <h3 className="font-semibold text-white mb-6 text-center">What You Keep</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "RTK 2cm Precision",
                      "Speed Guidance",
                      "Traffic Coordination",
                      "Emergency Detection",
                      "Road Scanning",
                      "Weather Alerts",
                      "Behavior Analysis",
                      "Network Access",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#5CFF3D] flex-shrink-0" />
                        <span className="text-sm text-[#BEBEBE]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sr-card p-8">
                  <h3 className="font-semibold text-white mb-6 text-center">What Changes</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6b6b6b]">Full tablet display</span>
                      <span className="text-[#5CFF3D]">Phone app or small LCD</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6b6b6b]">Dual AI cameras</span>
                      <span className="text-[#5CFF3D]">Optional add-on</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6b6b6b]">OBD-II integration</span>
                      <span className="text-[#5CFF3D]">Optional add-on</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Form Factors */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="sr-heading-lg text-white mb-4">
                Choose Your <span className="text-[#5CFF3D]">Display</span>
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg max-w-2xl mx-auto">
                Both options pair with the same RTK module and deliver the same capabilities.
                The only difference is the screen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {formFactors.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="sr-card p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#5CFF3D]/10 flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-[#5CFF3D]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {option.title}
                    </h3>
                  </div>
                  <p className="text-[#BEBEBE] mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <ul className="space-y-3">
                    {option.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-sm text-[#6b6b6b]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5CFF3D]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All 9 Capabilities */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="sr-heading-lg text-white mb-4">
                All <span className="text-[#5CFF3D]">9</span> Capabilities Included
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg max-w-2xl mx-auto">
                SmartRoads Lite isn't a stripped-down version. Every core capability
                powered by RTK precision is available from day one.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {allCapabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="sr-card p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#5CFF3D]">
                    <cap.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{cap.title}</h3>
                    <p className="text-[#6b6b6b] text-xs leading-relaxed">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="sr-heading-lg text-white mb-4">
                Lite vs Full Unit
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg">
                Same intelligence, different hardware package.
              </p>
            </div>

            <div className="sr-card overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-4 md:p-5 border-b border-white/10">
                <div className="text-[#6b6b6b] text-sm font-medium">
                  Feature
                </div>
                <div className="text-center text-[#5CFF3D] text-sm font-medium">
                  Lite
                </div>
                <div className="text-center text-white text-sm font-medium">
                  Full Unit
                </div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`grid grid-cols-3 gap-4 p-4 md:p-5 ${
                    index < comparisonRows.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }`}
                >
                  <div className="text-[#BEBEBE] text-sm">{row.feature}</div>
                  <div className="text-center">
                    {row.lite === true ? (
                      <CheckCircle className="w-5 h-5 text-[#5CFF3D] mx-auto" />
                    ) : row.lite === "optional" ? (
                      <span className="text-[#5CFF3D] text-xs">Optional</span>
                    ) : (
                      <span className="text-[#3a3a3a]">—</span>
                    )}
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-5 h-5 text-[#5CFF3D] mx-auto" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-10 md:py-20 px-4 md:px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="sr-heading-lg text-white mb-4">
                Why a <span className="text-[#5CFF3D]">Multi-Tier</span> Product
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg max-w-2xl mx-auto">
                Reaching the 5% adoption threshold requires making SmartRoads accessible at every price point.
                The Lite tier removes cost as a barrier while maintaining the RTK precision that makes the system work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Lower The Barrier",
                  description:
                    "Not every driver needs a full tablet and cameras. A phone app with RTK guidance delivers the same network benefits at a fraction of the cost.",
                },
                {
                  step: "02",
                  title: "Accelerate Adoption",
                  description:
                    "More affordable options means faster growth. Every Lite user is a full participant in the network — same precision, same coordination, same impact on traffic.",
                },
                {
                  step: "03",
                  title: "Reach Critical Mass",
                  description:
                    "The 5% threshold gets closer with every vehicle. Once crossed, phantom jams vanish, fuel waste drops, and emergency response accelerates — for everyone.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="sr-card p-6 md:p-8"
                >
                  <div className="text-[#5CFF3D] text-3xl font-extrabold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h2 className="sr-heading-lg text-white mb-4">
                Who It's <span className="text-[#5CFF3D]">For</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Daily Commuters",
                  description:
                    "Use the phone app with an RTK module. Full precision guidance through your existing phone — no extra screens to buy.",
                },
                {
                  title: "Ride-Hail & Taxi",
                  description:
                    "Drivers who spend all day on the road get the same fuel savings and traffic benefits without the premium hardware investment.",
                },
                {
                  title: "Delivery Fleets",
                  description:
                    "Equip every vehicle with a compact LCD unit. Low per-unit cost makes fleet-wide RTK deployment practical at scale.",
                },
                {
                  title: "Government Pilots",
                  description:
                    "Roll out SmartRoads affordably across thousands of vehicles to prove the network effect before committing to full units.",
                },
                {
                  title: "Older Vehicles",
                  description:
                    "Cars without CarPlay or Android Auto use the compact LCD display. Every vehicle can participate, regardless of age.",
                },
                {
                  title: "Budget-Conscious Drivers",
                  description:
                    "Full SmartRoads intelligence without the premium price tag. Upgrade to the full unit later if you want cameras and a tablet.",
                },
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="sr-card p-6"
                >
                  <h3 className="text-white font-semibold mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="sr-hero-card p-8 md:p-16 text-center">
              <h2 className="sr-heading-lg text-white mb-4 md:mb-6">
                Explore the Full Platform
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg mb-6 md:mb-10 max-w-lg mx-auto leading-relaxed">
                SmartRoads Lite delivers the same intelligence at a lower price point.
                See the full technology stack and all 9 capabilities in detail.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <Link
                  to="/smartroads/capabilities"
                  className="sr-btn-primary text-sm md:text-base"
                >
                  View All Capabilities
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <Link
                  to="/smartroads/technology"
                  className="sr-btn-secondary text-sm md:text-base"
                >
                  Technology Stack
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 md:py-10 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <div className="flex items-center gap-2">
              <img
                src="/smartroads/logo.png"
                alt="SmartRoads"
                className="w-8 h-8 md:w-9 md:h-9"
              />
              <span className="font-semibold text-white text-sm md:text-base">
                SmartRoads
              </span>
            </div>
            <div className="text-xs text-[#6b6b6b] max-w-2xl leading-relaxed">
              © 2025 SmartRoads. All rights reserved. This proposal, including
              all concepts, methodologies, technical specifications, and
              intellectual property contained herein, is confidential and
              proprietary. Unauthorized reproduction, distribution, or use of
              this material without express written consent is strictly
              prohibited.
            </div>
            <div className="text-xs text-[#4a4a4a]">
              Protected under UAE Federal Law No. 38 of 2021 on Copyrights and
              Related Rights
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartRoadsLite;
