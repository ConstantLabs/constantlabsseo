import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Menu, X, Download } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SmartRoadsFlowPaper = () => {
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
              href="/smartroads/flow-framework.pdf" 
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
                  href="/smartroads/flow-framework.pdf" 
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
            <span className="text-[#5CFF3D] text-sm font-medium uppercase tracking-wider">Research Paper</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Flow: A Modular Learning Framework for Mixed Autonomy Traffic
          </h1>
          <p className="text-[#888] mb-6">
            Wu, C., Kreidieh, A.R., Parvate, K., Vinitsky, E., Bayen, A.M.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-[#666]">
            <span>IEEE Transactions on Robotics, 2021</span>
            <span>•</span>
            <a 
              href="https://arxiv.org/abs/2011.00120" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#5CFF3D] hover:underline flex items-center gap-1"
            >
              View on arXiv <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="pb-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#5CFF3D]/10 border border-[#5CFF3D]/30 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Summary</h2>
            <p className="text-[#ccc] leading-relaxed">
              This paper introduces Flow, a computational framework that uses deep reinforcement learning to optimize traffic control in mixed-autonomy environments where autonomous vehicles (AVs) share the road with human drivers. The key insight is that even a small percentage of intelligently controlled AVs can dramatically improve traffic flow for everyone. The framework enables researchers to train AI controllers that learn optimal driving behaviors through simulation, then deploy these in real-world scenarios.
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
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">5-10%</div>
              <div className="text-white font-medium mb-2">AV Penetration</div>
              <p className="text-[#888] text-sm">Just 5-10% of vehicles need to be autonomous to see significant improvements.</p>
            </div>
            <div className="sr-card p-6 text-center">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">25%</div>
              <div className="text-white font-medium mb-2">Speed Improvement</div>
              <p className="text-[#888] text-sm">Average traffic speed improvements in congested scenarios.</p>
            </div>
            <div className="sr-card p-6 text-center">
              <div className="text-[#5CFF3D] text-3xl font-bold mb-2">Deep RL</div>
              <div className="text-white font-medium mb-2">AI Technology</div>
              <p className="text-[#888] text-sm">Uses deep reinforcement learning for optimal control policies.</p>
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
                <p className="text-[#ccc]"><strong className="text-white">Mixed autonomy works:</strong> You don't need 100% autonomous vehicles - a small percentage can stabilize traffic for everyone.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Scalable simulation:</strong> The Flow framework enables rapid testing of control strategies before real-world deployment.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Transferable results:</strong> Controllers trained in simulation successfully transfer to real traffic scenarios.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#5CFF3D] mt-2 flex-shrink-0"></div>
                <p className="text-[#ccc]"><strong className="text-white">Open source:</strong> The framework is publicly available, enabling further research and development.</p>
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
              SmartRoads applies these same principles - we don't need every vehicle to be equipped. By coordinating a small percentage of vehicles with RTK precision, we can eliminate congestion for all road users. The Flow framework validates our core approach: intelligent coordination of the few benefits the many.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Full Paper</h2>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10">
            <iframe 
              src="/smartroads/flow-framework.pdf"
              className="w-full h-[80vh]"
              title="Flow Framework Paper PDF"
            />
          </div>
          <div className="mt-4 text-center">
            <a 
              href="/smartroads/flow-framework.pdf" 
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

export default SmartRoadsFlowPaper;
