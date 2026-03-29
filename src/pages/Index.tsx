import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

import { ProblemSolution } from "@/components/ProblemSolution";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SEO
        title="ConstantSEO — AI-Powered SEO by Constant Labs"
        description="Dominate Google, ChatGPT, Gemini & AI search. ConstantSEO by Constant Labs is Dubai's leading AI-powered SEO agency serving businesses across the UAE, Saudi Arabia & GCC."
        path="/"
      />

      <Navbar />

      <main>
        <HeroSection />
        <ProblemSolution />
        <ServicesGrid />
        <HowItWorks />
        <CaseStudiesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
