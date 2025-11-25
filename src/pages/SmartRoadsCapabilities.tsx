import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, MapPin, Zap, Cloud, Eye, TrendingUp, ArrowRight } from "lucide-react";

const capabilities = [
  {
    id: "traffic",
    icon: Car,
    title: "Smart Traffic Management",
    subtitle: "Eliminate phantom jams, optimize flow",
    image: "/smartroads/driver_ui_stay_middle_lane.jpg",
    description: "Directly targets traffic congestion by applying macroscopic flow control principles.",
    features: ["Phantom Jam Elimination", "Speed Harmonization", "Real-Time Optimization"],
    stats: [{ value: "20-40%", label: "Throughput Increase" }, { value: "40%", label: "Fuel Savings" }],
  },
  {
    id: "road-health",
    icon: MapPin,
    title: "Road Health Intelligence",
    subtitle: "Every vehicle is a road scanner",
    image: "/smartroads/road_health_scan.jpg",
    description: "Transforms every vehicle into a mobile road-scanning unit for real-time monitoring.",
    features: ["Pothole Detection", "Multi-Vehicle Confirmation", "Quality Scoring"],
    stats: [{ value: "98%", label: "Detection Rate" }, { value: "99.6%", label: "Accuracy" }],
  },
  {
    id: "emergency",
    icon: Zap,
    title: "Emergency Response",
    subtitle: "Sub-second detection and dispatch",
    image: "/smartroads/driver_ui_emergency_vehicle.jpg",
    description: "Leverages instant detection to dramatically reduce emergency response times.",
    features: ["Crash Detection <100ms", "Auto Dispatch", "Lane Clearing"],
    stats: [{ value: "<100ms", label: "Detection" }, { value: "<1s", label: "Dispatch" }],
  },
  {
    id: "weather",
    icon: Cloud,
    title: "Weather-Adaptive Safety",
    subtitle: "See through fog, survive sandstorms",
    image: "/smartroads/weather_vision_fog.jpg",
    description: "Enhances safety during UAE's most challenging weather conditions.",
    features: ["Virtual Vehicle Awareness", "Sandstorm Coordination", "Hazard Alerts"],
    stats: [{ value: "Near-Zero", label: "Visibility OK" }, { value: "Coordinated", label: "Response" }],
  },
  {
    id: "driver-monitoring",
    icon: Eye,
    title: "AI Driver Monitoring",
    subtitle: "Prevent accidents before they happen",
    image: "/smartroads/driver_ui_stay_lane_warning.jpg",
    description: "Driver-facing AI transforms passive safety into active prevention.",
    features: ["Drowsiness Detection", "Distraction Monitoring", "Medical Emergency"],
    stats: [{ value: "Real-time", label: "Monitoring" }, { value: "Progressive", label: "Alerts" }],
  },
  {
    id: "behavior",
    icon: TrendingUp,
    title: "Behavior Analysis",
    subtitle: "Learn, improve, optimize",
    image: "/smartroads/driver_ui_change_lane_right.jpg",
    description: "AI learns from driving patterns for personalized insights.",
    features: ["Aggressive Driving Detection", "Driving Score", "Fleet Management"],
    stats: [{ value: "Continuous", label: "Scoring" }, { value: "Personalized", label: "Feedback" }],
  },
];

const SmartRoadsCapabilities = () => {
  useEffect(() => {
    document.body.classList.add('no-crt', 'smartroads-bg');
    window.scrollTo(0, 0);
    return () => document.body.classList.remove('no-crt', 'smartroads-bg');
  }, []);

  return (
    <div className="min-h-screen text-white smartroads-page">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/smartroads" className="flex items-center gap-2">
              <img src="/smartroads/logo.png" alt="SmartRoads" className="w-8 h-8 md:w-9 md:h-9" />
              <span className="font-semibold text-white text-base md:text-lg">SmartRoads</span>
            </Link>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden md:flex items-center gap-8">
                <Link to="/smartroads/technology" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Technology</Link>
                <Link to="/smartroads/capabilities" className="text-white text-sm">Capabilities</Link>
                <Link to="/smartroads/research" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Research</Link>
              </div>
              <Link to="/smartroads/implementation" className="sr-btn-primary text-sm px-4 py-2">View Plan</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28">
        {/* Hero */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="sr-heading-xl text-white mb-6">
                Nine Integrated <span className="text-[#5CFF3D]">Capabilities</span>
              </h1>
              <p className="text-[#BEBEBE] text-lg leading-relaxed">
                Each capability delivers standalone value, but their true power is realized 
                through network effects—creating a self-reinforcing ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Nav */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {capabilities.map((cap) => (
                <a key={cap.id} href={`#${cap.id}`} className="px-4 py-2 rounded-full text-sm text-[#BEBEBE] hover:text-white transition-colors bg-[#161616]">
                  {cap.title.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        {capabilities.map((cap, index) => (
          <section key={cap.id} id={cap.id} className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-16 items-start`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#5CFF3D]">
                    <cap.icon className="w-7 h-7 text-black" />
                  </div>
                  <h2 className="sr-heading-lg text-white mb-2">{cap.title}</h2>
                  <p className="text-[#5CFF3D] mb-6">{cap.subtitle}</p>
                  <p className="text-[#BEBEBE] text-lg mb-8 leading-relaxed">{cap.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {cap.stats.map((stat) => (
                      <div key={stat.label} className="sr-card p-4 text-center">
                        <div className="text-xl font-bold text-[#5CFF3D]">{stat.value}</div>
                        <div className="text-xs text-[#6b6b6b]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {cap.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#5CFF3D]" />
                        <span className="text-white text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="sr-card p-4"
                  >
                    <div className="sr-img-box aspect-video relative overflow-hidden">
                      <img src={cap.image} alt={cap.title} className="w-full h-full object-cover scale-105" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Network Effects */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="sr-card p-10 text-center">
              <h2 className="sr-heading-lg text-white mb-6">Network Effects</h2>
              <p className="text-[#BEBEBE] text-lg mb-8 leading-relaxed">
                When integrated, these capabilities create a self-reinforcing ecosystem 
                where the whole is far greater than the sum of its parts.
              </p>
              <Link to="/smartroads/implementation" className="sr-btn-primary">
                View Implementation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <img src="/smartroads/logo.png" alt="SmartRoads" className="w-9 h-9" />
              <span className="font-semibold text-white">SmartRoads</span>
            </div>
            <div className="text-xs text-[#6b6b6b] max-w-2xl leading-relaxed">
              © 2025 SmartRoads. All rights reserved. This proposal, including all concepts, 
              methodologies, technical specifications, and intellectual property contained herein, 
              is confidential and proprietary. Unauthorized reproduction, distribution, or use 
              of this material without express written consent is strictly prohibited.
            </div>
            <div className="text-xs text-[#4a4a4a]">
              Protected under UAE Federal Law No. 38 of 2021 on Copyrights and Related Rights
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartRoadsCapabilities;
