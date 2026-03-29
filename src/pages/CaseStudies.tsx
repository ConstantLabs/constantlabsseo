import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { caseStudies } from "@/data/projectsData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Case Studies - ConstantSEO"
        description="See how ConstantSEO has helped businesses across the GCC achieve measurable SEO results with AI-powered optimization strategies."
        path="/case-studies"
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
            Case Studies
          </motion.p>
          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
            style={{ color: "#ffffff" }}
          >
            Real Results, Real Impact
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto"
          >
            See how our AI-powered approach to SEO delivers measurable outcomes for businesses across the GCC.
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/case-studies/${cs.slug}`}
                className="block group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8 md:p-10">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#7143E0]/10 text-[#7143E0] text-xs font-semibold">
                      {cs.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                      {cs.market}
                    </span>
                  </div>

                  {/* Metric */}
                  <div className="text-3xl md:text-4xl font-extrabold text-[#FECD4D] mb-3">
                    {cs.metric}
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#7143E0] transition-colors">
                    {cs.title}
                  </h2>

                  <p className="text-slate-600 leading-relaxed mb-5 max-w-3xl">
                    {cs.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium border border-cyan-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7143E0]">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudies;
