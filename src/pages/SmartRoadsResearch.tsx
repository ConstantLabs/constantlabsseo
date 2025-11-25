import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";

const keyFindings = [
  { stat: "<5%", title: "Vehicle Adoption Threshold", description: "Controlling just 5% of vehicles can eliminate stop-and-go waves.", source: "MIT, UC Berkeley Studies", url: "/smartroads/research-paper", quote: "...controlling the speed of just one autonomous vehicle can significantly dampen stop-and-go waves..." },
  { stat: "40%", title: "Fuel Reduction", description: "A single AI-guided vehicle smoothed flow and reduced fuel consumption by 40%.", source: "Vanderbilt Field Test", url: "/smartroads/research-paper", quote: "...adding just one smart vehicle smoothed human-caused waves, leading to 40% fuel savings overall..." },
  { stat: "25%", title: "Capacity Improvement", description: "Highway capacity improvements through coordinated vehicle control.", source: "FHWA Report to Congress", url: "/smartroads/fhwa-report", quote: "...temporary increase of up to 25 percent in freeway capacity..." },
];

const keyPapers = [
  { title: "Dissipation of stop-and-go waves via control of autonomous vehicles", authors: "Stern, R.E., Cui, S., et al.", journal: "Transportation Research Part C", year: "2018", link: "/smartroads/research-paper", finding: "A single AV can dampen stop-and-go waves in experiments with 20+ drivers." },
  { title: "Flow: A Modular Learning Framework for Mixed Autonomy Traffic", authors: "Wu, C., Kreidieh, A.R., et al.", journal: "IEEE Transactions on Robotics", year: "2021", link: "/smartroads/flow-paper", finding: "Deep RL can optimize traffic with 5-10% penetration rate." },
  { title: "Suppressing traffic flow instabilities", authors: "Horn, B.K.P.", journal: "IEEE ITSC", year: "2013", link: "/smartroads/suppressing-paper", finding: "Bilateral control algorithms eliminate phantom jams." },
  { title: "Stabilizing Traffic Flow via a Single Autonomous Vehicle", authors: "Cui, S., Seibold, B., et al.", journal: "Transportation Research Part B", year: "2017", link: "/smartroads/stabilizing-paper", finding: "Single AV can stabilize traffic with arbitrarily many human drivers." },
  { title: "Freeway Operations and Intelligent Transportation Systems", authors: "Federal Highway Administration", journal: "FHWA Report to Congress", year: "2018", link: "/smartroads/fhwa-report", finding: "Real-world deployments in Germany achieved 25% capacity increase." },
  { title: "The Circles Experiment: Reducing Traffic Waves", authors: "UC Berkeley, Vanderbilt, Temple", journal: "Multi-University Field Study", year: "2022", link: "/smartroads/circles", finding: "100-car I-24 experiment validated AV wave dampening at highway scale." },
];

const economicData = [
  { metric: "Annual Congestion Cost (Dubai)", value: "AED 3.5B" },
  { metric: "Annual Road Fatalities (UAE)", value: "1,200+" },
  { metric: "Fuel Wasted in Congestion", value: "15-20%" },
  { metric: "Productivity Hours Lost", value: "Millions" },
];

const SmartRoadsResearch = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('no-crt', 'smartroads-bg');
    window.scrollTo(0, 0);
    return () => document.body.classList.remove('no-crt', 'smartroads-bg');
  }, []);

  return (
    <div className="min-h-screen text-white smartroads-page">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors ${mobileMenuOpen ? 'bg-[#0d0d0d]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/smartroads" className="flex items-center gap-2">
              <img src="/smartroads/logo.png" alt="SmartRoads" className="w-8 h-8 md:w-9 md:h-9" />
              <span className="font-semibold text-white text-base md:text-lg">SmartRoads</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/smartroads/technology" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Technology</Link>
              <Link to="/smartroads/capabilities" className="text-[#BEBEBE] hover:text-white transition-colors text-sm">Capabilities</Link>
              <Link to="/smartroads/research" className="text-white text-sm">Research</Link>
              <Link to="/smartroads/implementation" className="sr-btn-primary">View Plan</Link>
            </div>
            <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#0d0d0d] border-t border-white/10">
              <div className="flex flex-col px-4 py-4 gap-4 text-center">
                <Link to="/smartroads/technology" className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Technology</Link>
                <Link to="/smartroads/capabilities" className="text-[#BEBEBE] hover:text-white transition-colors text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Capabilities</Link>
                <Link to="/smartroads/research" className="text-white text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Research</Link>
                <Link to="/smartroads/implementation" className="sr-btn-primary justify-center" onClick={() => setMobileMenuOpen(false)}>View Plan</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-28">
        {/* Hero */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="sr-heading-xl text-white mb-6">
                Research-Backed <span className="text-[#5CFF3D]">Innovation</span>
              </h1>
              <p className="text-[#BEBEBE] text-lg leading-relaxed">
                This proposal is built on decades of research from leading institutions. 
                The science is proven. The technology exists. The results are validated.
              </p>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="sr-heading-lg text-white mb-12">Key Findings</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {keyFindings.map((finding, index) => (
                <motion.div
                  key={finding.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={finding.url}
                    className="sr-card p-6 block group relative overflow-hidden cursor-pointer h-full"
                  >
                    {/* Default state */}
                    <div className="group-hover:opacity-0 transition-opacity duration-200">
                      <div className="text-4xl font-bold text-[#5CFF3D] mb-4">{finding.stat}</div>
                      <h3 className="text-lg font-semibold text-white mb-3">{finding.title}</h3>
                      <p className="text-[#BEBEBE] text-sm mb-4">{finding.description}</p>
                      <div className="flex items-center gap-2 text-xs text-[#5CFF3D]">
                        <GraduationCap className="w-4 h-4" />
                        {finding.source}
                      </div>
                    </div>
                    {/* Hover state */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-center items-center bg-[#5CFF3D] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <p className="text-black text-sm text-center leading-relaxed italic mb-3">"{finding.quote}"</p>
                      <span className="text-black text-xs font-semibold">
                        Read more →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Papers */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="sr-heading-lg text-white mb-12">Foundational Papers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyPapers.map((paper, index) => (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={paper.link}
                    className="sr-card p-6 hover:bg-[#1c1c1c] transition-colors group block h-full"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-semibold text-white group-hover:text-[#5CFF3D] transition-colors">{paper.title}</h3>
                      <ArrowRight className="w-4 h-4 text-[#6b6b6b] group-hover:text-[#5CFF3D] transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-sm text-[#6b6b6b] mb-2">{paper.authors}</p>
                    <p className="text-sm text-[#5CFF3D]/70 mb-4">{paper.journal}, {paper.year}</p>
                    <div className="p-3 rounded-xl bg-[#0d0d0d]">
                      <p className="text-sm text-[#BEBEBE]"><span className="text-[#5CFF3D]">Key Finding:</span> {paper.finding}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Economic Impact */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="sr-heading-lg text-white mb-12">Economic Imperative</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {economicData.map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sr-card p-6 text-center"
                >
                  <div className="text-2xl font-bold text-[#5CFF3D] mb-2">{item.value}</div>
                  <div className="text-sm text-[#6b6b6b]">{item.metric}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="sr-hero-card p-12 text-center">
              <h2 className="sr-heading-lg text-white mb-6">Ready to See the Implementation?</h2>
              <p className="text-[#BEBEBE] mb-8">A straightforward deployment leveraging proven government models.</p>
              <Link to="/smartroads/implementation" className="sr-btn-primary">
                View Implementation Plan
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

export default SmartRoadsResearch;
