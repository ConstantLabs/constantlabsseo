import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Menu, X, Download } from "lucide-react";
import { Link } from "react-router-dom";

const SmartRoadsResearchPaper = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("smartroads-bg");
    return () => document.body.classList.remove("smartroads-bg");
  }, []);

  return (
    <div className="smartroads-page min-h-screen text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 ${mobileMenuOpen ? 'bg-[#0d0d0d]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/smartroads" className="flex items-center gap-2 text-[#5CFF3D] hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to SmartRoads</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/smartroads/circles" className="text-sm text-[#888] hover:text-white">UC Berkeley Study</Link>
            <Link to="/smartroads/fhwa-report" className="text-sm text-[#888] hover:text-white">FHWA Report</Link>
            <a 
              href="/smartroads/dissipation-stop-go-waves.pdf" 
              download
              className="px-4 py-2 bg-[#5CFF3D] text-black text-sm font-semibold rounded-lg hover:bg-[#4de632] flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-white/10 text-center"
            >
              <div className="flex flex-col gap-4 pt-4">
                <Link to="/smartroads/circles" className="text-sm text-[#888] hover:text-white">UC Berkeley Study</Link>
                <Link to="/smartroads/fhwa-report" className="text-sm text-[#888] hover:text-white">FHWA Report</Link>
                <a 
                  href="/smartroads/dissipation-stop-go-waves.pdf" 
                  download
                  className="mx-auto px-4 py-2 bg-[#5CFF3D] text-black text-sm font-semibold rounded-lg hover:bg-[#4de632] flex items-center justify-center gap-2"
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
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <span className="text-[#5CFF3D] text-sm font-medium uppercase tracking-wider">Research Paper</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Dissipation of Stop-and-Go Waves via Control of Autonomous Vehicles: Field Experiments
          </h1>
          <p className="text-[#888] mb-6">
            Stern, R.E., Cui, S., Delle Monache, M.L., Bhadani, R., Bunting, M., Churchill, M., Hamilton, N., Haulcy, R., Pohlmann, H., Wu, F., Piccoli, B., Seibold, B., Sprinkle, J., Work, D.B.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-[#666]">
            <span>Transportation Research Part C, 2018</span>
            <span>•</span>
            <a 
              href="https://arxiv.org/abs/1705.01693" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#5CFF3D] hover:underline flex items-center gap-1"
            >
              View on arXiv <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">&lt;5%</div>
              <div className="text-white font-medium mb-2">Vehicles Needed</div>
              <p className="text-[#888] text-sm">Controlling less than 5% of vehicles can eliminate stop-and-go waves for all traffic.</p>
            </div>
            <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">40%</div>
              <div className="text-white font-medium mb-2">Fuel Savings</div>
              <p className="text-[#888] text-sm">Smoothing traffic waves reduces fuel consumption by up to 40% for all vehicles.</p>
            </div>
            <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">99%</div>
              <div className="text-white font-medium mb-2">Less Braking</div>
              <p className="text-[#888] text-sm">Dramatic reduction in hard braking events improves safety and comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10">
            <iframe 
              src="/smartroads/dissipation-stop-go-waves.pdf"
              className="w-full h-[80vh]"
              title="Research Paper PDF"
            />
          </div>
          <div className="mt-4 text-center">
            <a 
              href="/smartroads/dissipation-stop-go-waves.pdf" 
              download
              className="inline-flex items-center gap-2 text-[#5CFF3D] hover:underline"
            >
              <Download className="w-4 h-4" />
              Download PDF for offline reading
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartRoadsResearchPaper;
