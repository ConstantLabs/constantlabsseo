import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { SERVICES } from "@/data/projectsData";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

function slugify(id: string) {
  return id.toLowerCase().replace(/_/g, "-");
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isAr } = useLanguage();

  const service = SERVICES.find((s) => slugify(s.id) === slug);
  const otherServices = SERVICES.filter((s) => slugify(s.id) !== slug).slice(0, 4);

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {isAr ? "الخدمة غير موجودة" : "Service Not Found"}
          </h1>
          <p className="text-slate-600 mb-8">
            {isAr ? "الخدمة التي تبحث عنها غير موجودة." : "The service you're looking for doesn't exist."}
          </p>
          <Link to="/services" className="text-[#7143E0] font-semibold hover:underline">
            {isAr ? "عرض جميع الخدمات" : "View All Services"}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title={`${service.title} | ConstantSEO`}
        description={service.description}
        path={`/services/${slug}`}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            {isAr ? "جميع الخدمات" : "All Services"}
          </Link>
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-cyan-400" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-200 max-w-2xl"
          >
            {service.oneLiner}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {service.description}
            </p>
          </div>

          {/* What's Included */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {isAr ? "ما يشمله" : "What's Included"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7143E0]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#7143E0]" />
                  </div>
                  <span className="text-slate-700 font-medium">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Matters */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {isAr ? "لماذا هذا مهم" : "Why This Matters"}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {isAr
                ? "في عصر الذكاء الاصطناعي والبحث المتطور، لم يعد كافياً الاعتماد على الأساليب التقليدية فقط. نستخدم أحدث تقنيات الذكاء الاصطناعي لضمان تفوق عملك في نتائج البحث التقليدية ومنصات الذكاء الاصطناعي على حد سواء."
                : "In the age of AI and evolving search, traditional approaches alone aren't enough. We use cutting-edge AI technology to ensure your business dominates both traditional search results and AI platforms like ChatGPT, Gemini, and Perplexity."
              }
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium border border-cyan-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            {isAr ? "خدمات أخرى" : "Other Services"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.id}
                  to={`/services/${slugify(s.id)}`}
                  className="group bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#7143E0]/10 flex items-center justify-center mb-3">
                    <SIcon className="w-5 h-5 text-[#7143E0]" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#7143E0] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{s.oneLiner}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
