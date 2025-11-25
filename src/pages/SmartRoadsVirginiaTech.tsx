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
            <span className="text-[#5CFF3D] text-sm font-medium uppercase tracking-wider">Research Report • Safe-D</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Connected Vehicle Data Safety Applications
          </h1>
          <p className="text-[#888] mb-6">
            Martin, M., Wu, L., Ramezani, M., Li, X., Turner, S., Stutes, S., Hasan, F., Potter, M.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-[#666]">
            <span>Texas A&M Transportation Institute</span>
            <span>•</span>
            <span>September 2023</span>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Summary</h2>
            <p className="text-[#ccc] leading-relaxed">
              This Safe-D research project evaluated the viability of connected vehicle (CV) data in roadway safety applications. The team analyzed massive volumes of driving behavior data from vehicles across Texas to improve crash prediction methods. The key finding: adding hard braking and acceleration data from connected vehicles significantly improves the accuracy of crash prediction models.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Key Findings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="sr-card p-6 text-center">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">25/25</div>
              <div className="text-white font-medium mb-2">Districts Improved</div>
              <p className="text-[#888] text-sm">All 25 Texas districts showed improved crash prediction with CV data.</p>
            </div>
            <div className="sr-card p-6 text-center">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">134%</div>
              <div className="text-white font-medium mb-2">Crash Correlation</div>
              <p className="text-[#888] text-sm">Each 100 hard brake events correlates to 134% more crashes.</p>
            </div>
            <div className="sr-card p-6 text-center">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">60%</div>
              <div className="text-white font-medium mb-2">ML Accuracy</div>
              <p className="text-[#888] text-sm">Machine learning model explained 60% of crash variance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Key Takeaways</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">CV data improves crash prediction:</strong> Hard braking and acceleration counts significantly improve Safety Performance Functions (SPFs) for both rural segments and urban intersections.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Massive data scale:</strong> The study analyzed 49-59 billion vehicle movements and 400-500 million driver events across Texas.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Hard braking = crash risk:</strong> All 25 Texas districts showed positive, statistically significant correlation between hard brake counts and crashes.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Speed data available:</strong> Various speed measures (mean, median, percentiles) can be derived from CV data across entire road networks.</p>
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
              This research proves that connected vehicle data directly improves crash prediction. SmartRoads generates exactly this type of data - hard braking events, acceleration patterns, speed metrics - but with centimeter-level RTK precision. If CV data from consumer vehicles improves safety models, imagine what purpose-built coordination systems can achieve.
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
