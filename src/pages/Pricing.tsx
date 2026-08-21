import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/marketing/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Pricing - ConstantSEO"
        description="Transparent AI SEO pricing for businesses of all sizes. Choose from our flexible plans designed for the GCC market. Pricing in AED."
        path="/pricing"
      />
      <Navbar />

      <PageHero
        eyebrow={t("nav.pricing")}
        title={t("inner.pricing.title")}
        lede={t("inner.pricing.lede")}
      />

      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Pricing;
