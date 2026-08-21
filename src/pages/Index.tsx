import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
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

const Index = () => {
  return (
    <>
      <SEO
        title="ConstantSEO — Search systems for the GCC"
        description="ConstantSEO builds bilingual, technical, and local search systems for businesses across the GCC."
        path="/"
      />

      <Navbar />

      <main>
        <HeroSection />
        <ClientLogos />
        <ProblemSolution />
        <ServicesGrid />
        <MufakkirEvidence />
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
