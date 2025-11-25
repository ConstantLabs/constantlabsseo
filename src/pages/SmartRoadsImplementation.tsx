import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Satellite, CheckCircle, ArrowRight, Building, Zap } from "lucide-react";

const deploymentSteps = [
  {
    icon: Car,
    title: "Vehicle Equipment",
    items: [
      "Smart display with RTK receivers, IMU sensors, AI cameras",
      "Estimated cost: ~AED 1,000 per vehicle",
      "50-70% cost reduction at scale",
      "Standard installation at service centers",
    ],
  },
  {
    icon: Satellite,
    title: "RTK Network Infrastructure",
    items: [
      "200-300 RTK base stations across UAE",
      "Mounted on existing telecom towers",
      "Few million dirhams for national coverage",
      "Foundation for future autonomous systems",
    ],
  },
];

const successModels = [
  { name: "Salik Toll System", description: "Seamless nationwide deployment with near-universal compliance." },
  { name: "Emirates ID", description: "National identity system rolled out through standard government channels." },
  { name: "Smart Gate", description: "Automated border control backed by government mandate." },
];

const futureEconomies = [
  { title: "Urban Air Mobility", value: "$2-5B", description: "Air taxis require centimeter precision" },
  { title: "Drone Delivery", value: "$1.5-3B", description: "Autonomous logistics for e-commerce" },
  { title: "Autonomous Vehicles", value: "$5-10B", description: "Foundation for Level 4/5 self-driving" },
  { title: "Smart Construction", value: "$1-2B", description: "Precision robotics and surveying" },
];

const SmartRoadsImplementation = () => {
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
                <Link to="/smartroads/capabilities" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Capabilities</Link>
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
                Straightforward <span className="text-[#5CFF3D]">Deployment</span>
              </h1>
              <p className="text-[#BEBEBE] text-lg leading-relaxed">
                This is not a complex multi-year project. It's a straightforward infrastructure 
                deployment using proven government implementation models.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Banner */}
        <section className="py-8 md:py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="sr-hero-card p-4 md:p-8 relative overflow-hidden">
              <div className="sr-img-box aspect-[16/9] md:aspect-[21/9] relative">
                <img src="/smartroads/rta_hero_background.jpg" alt="UAE Infrastructure" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 p-4">
                  <div className="grid grid-cols-3 gap-2 md:gap-8 text-center w-full">
                    <div>
                      <div className="text-xl md:text-4xl font-bold text-[#5CFF3D] mb-1 md:mb-2">3.5M+</div>
                      <div className="text-[10px] md:text-sm text-white">Vehicles to Equip</div>
                    </div>
                    <div>
                      <div className="text-xl md:text-4xl font-bold text-[#5CFF3D] mb-1 md:mb-2">200-300</div>
                      <div className="text-[10px] md:text-sm text-white">RTK Base Stations</div>
                    </div>
                    <div>
                      <div className="text-xl md:text-4xl font-bold text-[#5CFF3D] mb-1 md:mb-2">100%</div>
                      <div className="text-[10px] md:text-sm text-white">National Coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Components */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="sr-heading-lg text-white mb-12">Two Simple Components</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {deploymentSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sr-card p-8"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#5CFF3D]">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{step.title}</h3>
                  <ul className="space-y-4">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#5CFF3D] flex-shrink-0 mt-0.5" />
                        <span className="text-[#BEBEBE] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proven Models */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="sr-heading-lg text-white mb-12">Proven Deployment Models</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {successModels.map((model, index) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sr-card p-6"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#5CFF3D]/15">
                    <Building className="w-6 h-6 text-[#5CFF3D]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{model.name}</h3>
                  <p className="text-[#BEBEBE] text-sm">{model.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 sr-card p-8 text-center">
              <p className="text-xl text-white">
                SmartRoads follows the <span className="text-[#5CFF3D] font-semibold">exact same model</span>: 
                deploy infrastructure, mandate adoption, achieve universal coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Future Economies */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="sr-heading-lg text-white mb-4">Unlocking Future Economies</h2>
            <p className="text-[#BEBEBE] text-lg mb-12 max-w-2xl">
              The RTK network enables multi-billion dollar future industries beyond traffic.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {futureEconomies.map((economy, index) => (
                <motion.div
                  key={economy.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sr-card p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#5CFF3D] mb-2">{economy.value}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{economy.title}</h3>
                  <p className="text-[#BEBEBE] text-sm">{economy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* First Mover */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#5CFF3D] rounded-[1.25rem] p-12">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-black" />
                <h2 className="text-2xl font-bold text-black">First-Mover Advantage</h2>
              </div>
              <p className="text-black/80 text-lg mb-8">
                The global market for intelligent traffic solutions is nascent, giving the UAE a 
                critical <span className="font-semibold">3-5 year first-mover advantage</span>.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">Prove</div>
                  <p className="text-sm text-black/70">Validate domestically</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">Export</div>
                  <p className="text-sm text-black/70">Secure regional contracts</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">Dominate</div>
                  <p className="text-sm text-black/70">Global vendor of choice</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="sr-hero-card p-12 md:p-16 text-center">
              <h2 className="sr-heading-lg text-white mb-6">
                The Vision is Clear.<br />
                <span className="text-[#5CFF3D]">The Technology Exists.</span><br />
                The Time is Now.
              </h2>
              <p className="text-[#BEBEBE] text-lg mb-10 max-w-xl mx-auto">
                By executing this vision, the UAE will define the global standard 
                for intelligent transportation.
              </p>
              <Link to="/smartroads" className="sr-btn-primary">
                Back to Overview
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

export default SmartRoadsImplementation;
