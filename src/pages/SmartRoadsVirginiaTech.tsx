import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Menu, X, Download } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SmartRoadsVirginiaTech = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("no-crt", "smartroads-bg");
    return () => document.body.classList.remove("no-crt", "smartroads-bg");
  }, []);

  return (
    <div className="smartroads-page min-h-screen text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 ${mobileMenuOpen ? 'bg-[#0d0d0d]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#5CFF3D] hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </button>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/smartroads/research" className="text-sm text-[#888] hover:text-white">All Research</Link>
            <a 
              href="/smartroads/vtti-safe-d-report.pdf" 
              download
              className="px-4 py-2 bg-[#5CFF3D] text-black text-sm font-semibold rounded-full hover:bg-[#4de632] flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-white/10 text-center"
            >
              <div className="flex flex-col gap-4 pt-4">
                <Link to="/smartroads/research" className="text-sm text-[#888] hover:text-white">All Research</Link>
                <a 
                  href="/smartroads/vtti-safe-d-report.pdf" 
                  download
                  className="mx-auto px-4 py-2 bg-[#5CFF3D] text-black text-sm font-semibold rounded-full hover:bg-[#4de632] flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Header */}
      <section className="pt-24 md:pt-32 pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="text-[#5CFF3D] text-sm font-medium uppercase tracking-wider">Research Institution</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Virginia Tech Transportation Institute
          </h1>
          <p className="text-[#888] mb-6">
            One of the world's leading transportation research centers
          </p>
        </div>
      </section>

      {/* Key Quote */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6 md:p-8">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
              "Connected vehicles represent the most significant opportunity to improve road safety since the invention of the seatbelt."
            </p>
            <p className="text-[#5CFF3D] mt-4">— Virginia Tech Transportation Institute</p>
          </div>
        </div>
      </section>

      {/* About VTTI */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4">About VTTI</h2>
            <p className="text-[#ccc] leading-relaxed mb-4">
              The Virginia Tech Transportation Institute (VTTI) is one of the largest and most comprehensive transportation research institutes in the world. Located in Blacksburg, Virginia, VTTI conducts research in all modes of transportation - from cars and trucks to trains and planes.
            </p>
            <p className="text-[#ccc] leading-relaxed">
              Their connected vehicle research focuses on using data from vehicles to improve safety, reduce congestion, and make transportation more efficient. They've conducted extensive real-world studies showing how connected vehicle technology can prevent crashes and save lives.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Connected Vehicle Safety Benefits</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="sr-card p-6 text-center">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">80%</div>
              <div className="text-white font-medium mb-2">Crash Reduction</div>
              <p className="text-[#888] text-sm">Potential to prevent up to 80% of non-impaired crashes.</p>
            </div>
            <div className="sr-card p-6 text-center">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">V2V</div>
              <div className="text-white font-medium mb-2">Vehicle-to-Vehicle</div>
              <p className="text-[#888] text-sm">Direct communication between vehicles for collision avoidance.</p>
            </div>
            <div className="sr-card p-6 text-center">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">V2I</div>
              <div className="text-white font-medium mb-2">Vehicle-to-Infrastructure</div>
              <p className="text-[#888] text-sm">Communication with traffic signals and road infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Areas */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Key Research Areas</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Crash prediction:</strong> Using connected vehicle data to predict and prevent crashes before they happen.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Traffic flow optimization:</strong> Leveraging real-time data to improve traffic efficiency.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Driver behavior analysis:</strong> Understanding how drivers interact with connected vehicle systems.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Automated vehicles:</strong> Research on the transition to autonomous driving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevance */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#5CFF3D] rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-black mb-4">Why This Matters for SmartRoads</h2>
            <p className="text-black/80 leading-relaxed">
              VTTI's research validates our core premise: connected vehicles are transformative for road safety. SmartRoads takes this further by adding RTK precision positioning, enabling not just communication but precise coordination. When VTTI says connected vehicles are the biggest safety opportunity since seatbelts, they're talking about exactly what we're building.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Full Report</h2>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10">
            <iframe 
              src="/smartroads/vtti-safe-d-report.pdf"
              className="w-full h-[80vh]"
              title="VTTI Safe-D Report PDF"
            />
          </div>
          <div className="mt-4 text-center">
            <a 
              href="/smartroads/vtti-safe-d-report.pdf" 
              download
              className="inline-flex items-center gap-2 text-[#5CFF3D] hover:underline"
            >
              <Download className="w-4 h-4" />
              Download PDF for offline reading
            </a>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Learn More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://www.vtti.vt.edu/" 
              target="_blank"
              rel="noopener noreferrer"
              className="sr-card p-6 hover:bg-[#1c1c1c] transition-colors group flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-white group-hover:text-[#5CFF3D]">VTTI Homepage</h3>
                <p className="text-sm text-[#888]">Virginia Tech Transportation Institute</p>
              </div>
              <ExternalLink className="w-5 h-5 text-[#888] group-hover:text-[#5CFF3D]" />
            </a>
            <a 
              href="https://safed.vtti.vt.edu/projects/connected-vehicle-data-safety-applications/" 
              target="_blank"
              rel="noopener noreferrer"
              className="sr-card p-6 hover:bg-[#1c1c1c] transition-colors group flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-white group-hover:text-[#5CFF3D]">Safe-D Research</h3>
                <p className="text-sm text-[#888]">Connected Vehicle Safety Applications</p>
              </div>
              <ExternalLink className="w-5 h-5 text-[#888] group-hover:text-[#5CFF3D]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartRoadsVirginiaTech;
