import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Pricing — ConstantSEO"
        description="Transparent AI SEO pricing for businesses of all sizes. Choose from our flexible plans designed for the GCC market. Pricing in AED."
        path="/pricing"
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
            Pricing
          </motion.p>
          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
            style={{ color: "#ffffff" }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto"
          >
            No hidden fees, no long-term lock-ins. Choose the plan that fits your business and scale as you grow.
          </motion.p>
        </div>
      </section>

      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Pricing;
