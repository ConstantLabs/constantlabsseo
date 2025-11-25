import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Satellite, Cpu, Camera, Smartphone, Radio, Cloud, Brain, ArrowRight, Target, Wifi, Server } from "lucide-react";

const vehicleHardware = [
  { icon: Satellite, title: "RTK GPS Receiver", description: "Centimeter-level positioning accuracy, far superior to standard GPS.", specs: ["2cm accuracy", "Real-time corrections"] },
  { icon: Cpu, title: "6-Axis IMU Sensors", description: "Accelerometer and gyroscope detect vibrations and G-forces.", specs: ["Crash detection <100ms", "Road surface analysis"] },
  { icon: Camera, title: "Dual AI Cameras", description: "Forward and driver-facing cameras with embedded AI.", specs: ["Drowsiness detection", "Incident recording"] },
  { icon: Smartphone, title: "Smart Display", description: "In-vehicle tablet for driver guidance.", specs: ["Clear feedback", "Minimal cognitive load"] },
];

const networkInfra = [
  { icon: Radio, title: "5G Communication", description: "High-bandwidth, low-latency vehicle-to-platform communication." },
  { icon: Server, title: "Edge Computing", description: "Processing at intersections for sub-millisecond responses." },
  { icon: Satellite, title: "RTK Base Stations", description: "200-300 stations broadcasting correction data nationwide." },
];

const rtkComparison = [
  { feature: "Positioning Accuracy", standard: "3-5 meters", rtk: "2-5 centimeters" },
  { feature: "Lane Detection", standard: "Not possible", rtk: "Precise sub-lane" },
  { feature: "Vehicle Coordination", standard: "Basic proximity", rtk: "Surgical precision" },
  { feature: "Update Rate", standard: "1 Hz", rtk: "Up to 20 Hz" },
];

const SmartRoadsTechnology = () => {
  useEffect(() => {
    document.body.classList.add('no-crt');
    window.scrollTo(0, 0);
    return () => document.body.classList.remove('no-crt');
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white smartroads-page">
      {/* Fixed dot grid background */}
      <div className="smartroads-dot-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/smartroads" className="flex items-center gap-2">
              <img src="/smartroads/logo.png" alt="SmartRoads" className="w-9 h-9" />
              <span className="font-semibold text-white text-lg">SmartRoads</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/smartroads/technology" className="text-white text-sm">Technology</Link>
              <Link to="/smartroads/capabilities" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Capabilities</Link>
              <Link to="/smartroads/research" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Research</Link>
              <Link to="/smartroads/implementation" className="sr-btn-primary">View Plan</Link>
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
                Precision Meets <span className="text-[#5CFF3D]">Intelligence</span>
              </h1>
              <p className="text-[#BEBEBE] text-lg leading-relaxed">
                A synergistic stack of advanced hardware, robust network infrastructure, 
                and powerful AI working together to transform traffic management.
              </p>
            </div>
          </div>
        </section>

        {/* RTK Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="sr-heading-lg text-white mb-6">The RTK Advantage</h2>
                <p className="text-[#BEBEBE] text-lg mb-8 leading-relaxed">
                  Real-Time Kinematic GPS achieves centimeter-level accuracy—100x better 
                  than standard GPS—by using correction signals from base stations.
                </p>
                <div className="space-y-4">
                  <div className="sr-card p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-5 h-5 text-[#5CFF3D]" />
                      <span className="font-semibold text-white">Precise Lane Awareness</span>
                    </div>
                    <p className="text-sm text-[#BEBEBE]">Know exact position relative to lane markings.</p>
                  </div>
                  <div className="sr-card p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Wifi className="w-5 h-5 text-[#5CFF3D]" />
                      <span className="font-semibold text-white">Reliable State Estimation</span>
                    </div>
                    <p className="text-sm text-[#BEBEBE]">Eliminates GPS noise for tighter coordination.</p>
                  </div>
                  <div className="sr-card p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="w-5 h-5 text-[#5CFF3D]" />
                      <span className="font-semibold text-white">Global Optimization</span>
                    </div>
                    <p className="text-sm text-[#BEBEBE]">Choreograph vehicle groups with surgical precision.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="sr-img-box aspect-video relative">
                  <img src="/smartroads/rtk_network_map.jpg" alt="RTK Network" className="w-full h-full object-cover" />
                </div>
                <div className="sr-card p-6">
                  <h3 className="font-semibold text-white mb-4">RTK vs Standard GPS</h3>
                  <div className="space-y-3">
                    {rtkComparison.map((row, i) => (
                      <div key={i} className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-[#BEBEBE]">{row.feature}</div>
                        <div className="text-[#6b6b6b]">{row.standard}</div>
                        <div className="text-[#5CFF3D]">{row.rtk}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Hardware */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="sr-heading-lg text-white mb-12">Vehicle Hardware</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {vehicleHardware.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sr-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#5CFF3D]">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-[#BEBEBE] text-sm mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.specs.map((spec) => (
                          <span key={spec} className="px-3 py-1 rounded-full text-xs text-[#BEBEBE] bg-[#0d0d0d]">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Infrastructure */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="sr-heading-lg text-white mb-12">Network Infrastructure</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {networkInfra.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sr-card p-6 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[#5CFF3D]">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[#BEBEBE] text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Platform */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="sr-heading-lg text-white mb-6">AI Cloud Platform</h2>
                <p className="text-[#BEBEBE] text-lg mb-8 leading-relaxed">
                  The brain of the network. Advanced machine learning processes millions 
                  of data points per second to optimize traffic flow.
                </p>
                <div className="space-y-4">
                  {["Real-time Data Fusion", "Predictive Modeling", "Machine Learning", "Computer Vision"].map((cap) => (
                    <div key={cap} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#5CFF3D]" />
                      <span className="text-white">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sr-card p-8 text-center">
                <div className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-[#5CFF3D]">
                  <Cloud className="w-12 h-12 text-black" />
                </div>
                <p className="text-[#6b6b6b]">Processing millions of data points in real-time</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="sr-hero-card p-12 text-center">
              <h2 className="sr-heading-lg text-white mb-6">See What This Enables</h2>
              <p className="text-[#BEBEBE] mb-8">Explore the nine core capabilities powered by this technology.</p>
              <Link to="/smartroads/capabilities" className="sr-btn-primary">
                View Capabilities
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

export default SmartRoadsTechnology;
