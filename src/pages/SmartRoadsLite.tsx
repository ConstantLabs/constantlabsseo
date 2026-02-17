import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  Smartphone,
  Gauge,
  AlertTriangle,
  CloudRain,
  Activity,
  ArrowRight,
  Menu,
  X,
  Waves,
  DollarSign,
  Users,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const liteFeatures = [
  {
    icon: Gauge,
    title: "Speed Guidance",
    description:
      "Real-time speed recommendations to smooth traffic flow. The core feature that eliminates phantom jams — no RTK needed.",
    stat: "40%",
    statLabel: "Fuel Savings",
  },
  {
    icon: Activity,
    title: "Road Quality Reporting",
    description:
      "Built-in accelerometer detects potholes, bumps, and surface degradation. Every trip contributes to a live road health map.",
    stat: "95%",
    statLabel: "Detection Rate",
  },
  {
    icon: AlertTriangle,
    title: "Crash & Emergency Detection",
    description:
      "Sudden deceleration and G-force spikes trigger instant alerts. Automatic emergency notification to dispatch services.",
    stat: "<1s",
    statLabel: "Alert Time",
  },
  {
    icon: CloudRain,
    title: "Weather & Hazard Alerts",
    description:
      "Network-wide hazard warnings pushed to all devices. Fog zones, sandstorm corridors, and flood-prone areas — all in real-time.",
    stat: "Network",
    statLabel: "Coverage",
  },
];

const comparisonRows = [
  {
    feature: "Speed Guidance",
    lite: true,
    full: true,
  },
  {
    feature: "Pothole Detection",
    lite: true,
    full: true,
  },
  {
    feature: "Crash Detection",
    lite: true,
    full: true,
  },
  {
    feature: "Weather Alerts",
    lite: true,
    full: true,
  },
  {
    feature: "Lane-Level Positioning",
    lite: false,
    full: true,
  },
  {
    feature: "AI Driver Monitoring",
    lite: false,
    full: true,
  },
  {
    feature: "Dual AI Cameras",
    lite: false,
    full: true,
  },
  {
    feature: "RTK Precision (2cm)",
    lite: false,
    full: true,
  },
];

const deploymentOptions = [
  {
    icon: Smartphone,
    title: "Phone App",
    description:
      "Mount your phone on the dash. The SmartRoads Lite app uses the phone's GPS and accelerometer for speed guidance, hazard alerts, and road quality reporting.",
    bullets: [
      "Zero hardware cost",
      "Download and drive",
      "Works on any smartphone",
      "GPS + accelerometer built in",
    ],
  },
  {
    icon: Gauge,
    title: "Compact Display",
    description:
      "A small, dedicated screen with a basic OBD-II sensor. Always-on guidance without draining your phone battery or needing a mount.",
    bullets: [
      "Low-cost dedicated device",
      "OBD-II plug-and-play",
      "No phone dependency",
      "Fleet-friendly form factor",
    ],
  },
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
        title="SmartRoads Lite - Low-Cost Traffic Intelligence"
        description="A basic sensor and phone app that delivers the core congestion-killing benefits of SmartRoads at a fraction of the cost."
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
                Low-Cost Solution
              </div>
              <h1 className="sr-heading-xl text-white mb-6">
                SmartRoads <span className="text-[#5CFF3D]">Lite</span>
              </h1>
              <p className="text-[#BEBEBE] text-lg leading-relaxed mb-4">
                A basic sensor and a phone app. That's all it takes to join the
                network and start killing traffic jams.
              </p>
              <p className="text-[#6b6b6b] text-base leading-relaxed">
                The Vanderbilt study proved a single vehicle with just speed
                adjustments cut fuel waste by 40%. SmartRoads Lite delivers that
                core capability at the lowest possible cost — accelerating the
                5% adoption threshold that transforms traffic for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* The Strategy - Why Lite Matters */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="sr-heading-lg text-white mb-6">
                  The Fastest Path to{" "}
                  <span className="text-[#5CFF3D]">5%</span>
                </h2>
                <p className="text-[#BEBEBE] text-lg mb-8 leading-relaxed">
                  Research proves that coordinating just 5% of vehicles
                  eliminates congestion for 100% of drivers. The biggest barrier
                  to hitting that number is cost and friction.
                </p>
                <p className="text-[#BEBEBE] text-base mb-8 leading-relaxed">
                  SmartRoads Lite removes both. No expensive hardware. No
                  complex installation. Download the app, mount your phone, and
                  you're part of the network.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: DollarSign,
                      label: "Minimal Cost",
                      desc: "Phone app is free. Compact display costs a fraction of the full unit.",
                    },
                    {
                      icon: Users,
                      label: "Maximum Reach",
                      desc: "Every smartphone owner is a potential node in the network.",
                    },
                    {
                      icon: Waves,
                      label: "Network Effect",
                      desc: "Even basic participants help smooth traffic waves for everyone.",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#5CFF3D]/10 flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#5CFF3D]" />
                      </div>
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
              <div className="sr-card p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-extrabold text-[#5CFF3D] mb-2">
                    5%
                  </div>
                  <div className="text-[#6b6b6b] text-sm">
                    Adoption threshold to eliminate congestion
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#BEBEBE]">Full Units (Precision Layer)</span>
                    <span className="text-[#5CFF3D]">~1-2%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#0d0d0d]">
                    <div className="h-full w-[30%] rounded-full bg-[#5CFF3D]" />
                  </div>
                  <div className="flex justify-between text-sm mt-4">
                    <span className="text-[#BEBEBE]">Lite Units (Mass Adoption)</span>
                    <span className="text-[#5CFF3D]">~3-4%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#0d0d0d]">
                    <div className="h-full w-[70%] rounded-full bg-[#5CFF3D]/70" />
                  </div>
                  <div className="sr-card p-4 mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium text-sm">
                        Combined Network
                      </span>
                      <span className="text-[#5CFF3D] font-bold">
                        5%+ Reached
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-[#0d0d0d] mt-3">
                      <div className="h-full w-full rounded-full bg-[#5CFF3D]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Deployment Options */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="sr-heading-lg text-white mb-4">
                Two Ways to Go Lite
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg max-w-2xl mx-auto">
                Choose the option that fits your situation. Both deliver the core
                traffic-smoothing benefits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {deploymentOptions.map((option, index) => (
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

        {/* Core Capabilities */}
        <section className="py-10 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h2 className="sr-heading-lg text-white mb-4">
                What Lite <span className="text-[#5CFF3D]">Delivers</span>
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg max-w-xl">
                Four high-impact capabilities that don't require RTK precision
                or AI cameras.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {liteFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sr-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#5CFF3D]">
                      <feature.icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {feature.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-[#5CFF3D] font-bold text-lg">
                            {feature.stat}
                          </div>
                          <div className="text-[#6b6b6b] text-xs">
                            {feature.statLabel}
                          </div>
                        </div>
                      </div>
                      <p className="text-[#BEBEBE] text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
                Lite covers the essentials. Full units add precision and AI
                capabilities.
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
                    {row.lite ? (
                      <CheckCircle className="w-5 h-5 text-[#5CFF3D] mx-auto" />
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

        {/* How They Work Together */}
        <section className="py-10 md:py-20 px-4 md:px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="sr-heading-lg text-white mb-4">
                A Two-Tier <span className="text-[#5CFF3D]">Network</span>
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg max-w-2xl mx-auto">
                Full units provide the precision data the AI platform needs.
                Lite units massively expand the coordination network. Together,
                they hit the critical mass that eliminates congestion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Full Units Lead",
                  description:
                    "RTK-equipped vehicles provide centimeter-precision data that trains and anchors the AI platform. They're the high-fidelity backbone.",
                },
                {
                  step: "02",
                  title: "Lite Units Scale",
                  description:
                    "Phone apps and basic sensors flood the network with participants. Each one follows speed guidance and reports road conditions — cheaply.",
                },
                {
                  step: "03",
                  title: "Network Wins",
                  description:
                    "Combined adoption crosses the 5% threshold. Phantom jams disappear. Fuel waste drops. Emergency response accelerates. Everyone benefits.",
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
                    "Download the free app. Get speed guidance that saves fuel and smooths your commute. Zero cost, real impact.",
                },
                {
                  title: "Ride-Hail Drivers",
                  description:
                    "Taxi and ride-share drivers spend all day on the road. The app pays for itself in fuel savings within the first week.",
                },
                {
                  title: "Delivery Fleets",
                  description:
                    "Equip every vehicle with a compact display. Low per-unit cost makes fleet-wide deployment practical.",
                },
                {
                  title: "Government Pilots",
                  description:
                    "Test the network effect with a low-cost rollout before committing to full infrastructure investment.",
                },
                {
                  title: "Older Vehicles",
                  description:
                    "Cars without CarPlay or Android Auto can still participate through the compact display option.",
                },
                {
                  title: "Early Adopters",
                  description:
                    "Be part of the network from day one. Every Lite user accelerates the path to congestion-free roads.",
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
                See the Full Picture
              </h2>
              <p className="text-[#BEBEBE] text-base md:text-lg mb-6 md:mb-10 max-w-lg mx-auto leading-relaxed">
                SmartRoads Lite is the on-ramp. Explore the full platform to see
                everything the network can do at scale.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <Link
                  to="/smartroads"
                  className="sr-btn-primary text-sm md:text-base"
                >
                  SmartRoads Overview
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <Link
                  to="/smartroads/technology"
                  className="sr-btn-secondary text-sm md:text-base"
                >
                  Full Technology Stack
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
