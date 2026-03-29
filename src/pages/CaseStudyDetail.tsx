import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { caseStudies } from "@/data/projectsData";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-slate-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link to="/case-studies" className="text-[#7143E0] font-semibold hover:underline">
            View All Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title={`${cs.title} | ConstantSEO`}
        description={cs.description}
        path={`/case-studies/${slug}`}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Case Studies
          </Link>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-white/10 text-cyan-400 text-xs font-semibold">
              {cs.industry}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-medium">
              {cs.market}
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold text-[#FECD4D] mb-4"
          >
            {cs.metric}
          </motion.div>

          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold"
          >
            {cs.title}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-2">Client</h2>
            <p className="text-xl font-bold text-slate-900">{cs.client}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-2">Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {cs.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium border border-cyan-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Other case studies */}
          {caseStudies.filter((c) => c.id !== cs.id).length > 0 && (
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">More Case Studies</h3>
              <div className="space-y-3">
                {caseStudies
                  .filter((c) => c.id !== cs.id)
                  .map((other) => (
                    <Link
                      key={other.id}
                      to={`/case-studies/${other.slug}`}
                      className="block p-4 rounded-xl border border-slate-200 hover:border-[#7143E0]/30 hover:shadow-sm transition-all"
                    >
                      <div className="text-sm font-bold text-[#FECD4D] mb-1">{other.metric}</div>
                      <div className="font-semibold text-slate-900">{other.title}</div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
