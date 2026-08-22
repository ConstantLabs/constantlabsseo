import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ClientLogos } from "@/components/ClientLogos";

import { ProblemSolution } from "@/components/ProblemSolution";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { ZCalBookingSection } from "@/components/ZCalBookingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { MufakkirEvidence } from "@/components/marketing/MufakkirEvidence";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  return (
    <>
      <SEO
        title={t("home.seo.title")}
        description={t("home.seo.description")}
        path="/"
      />

      <main>
        <HeroSection />
        <ClientLogos />
        <MufakkirEvidence />
        <ProblemSolution />
        <ServicesGrid />
        <HowItWorks />
        <CaseStudiesSection />
        <PricingSection />
        <FAQSection />
        <ZCalBookingSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
