import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { Rss } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Blog - ConstantSEO"
        description="SEO insights, AI trends, and digital marketing tips from the ConstantSEO team. Stay updated on the latest in AI-powered search optimization."
        path="/blog"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4"
          >
            Blog
          </motion.p>
          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
            style={{ color: "#ffffff" }}
          >
            Insights & Updates
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto"
          >
            AI-powered SEO insights, GCC market trends, and strategies that work.
          </motion.p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#7143E0]/10 flex items-center justify-center mx-auto mb-6">
            <Rss className="w-8 h-8 text-[#7143E0]" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Coming Soon</h2>
          <p className="text-slate-600 leading-relaxed">
            We're working on in-depth guides on AI SEO, GCC market strategies, and technical optimization. Check back soon or reach out to get notified when we publish.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Blog;
