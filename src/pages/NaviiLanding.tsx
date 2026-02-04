import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Section imports
import { HeroSection } from "@/components/navii/sections/HeroSection";
import { ProblemSection } from "@/components/navii/sections/ProblemSection";
import { SolutionSection } from "@/components/navii/sections/SolutionSection";
import { FeaturesSection } from "@/components/navii/sections/FeaturesSection";
import { DemoSection } from "@/components/navii/sections/DemoSection";
import { MarketSection } from "@/components/navii/sections/MarketSection";
import { B2BSection } from "@/components/navii/sections/B2BSection";
import { TeamSection } from "@/components/navii/sections/TeamSection";
import { ProgressSection } from "@/components/navii/sections/ProgressSection";
import { WaitlistSection } from "@/components/navii/sections/WaitlistSection";
import { NaviiFooter } from "@/components/navii/NaviiFooter";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Progress", href: "#progress" },
  { label: "Partners", href: "#partners" },
  { label: "Team", href: "#team" },
];

const NaviiLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrollToWaitlist = () => {
    scrollToSection("#waitlist");
  };

  const scrollToPartners = () => {
    scrollToSection("#partners");
  };

  return (
    <div className="min-h-screen bg-navii-bg text-white overflow-x-hidden">
      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navii-bg/90 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold bg-gradient-to-r from-navii-cyan via-white to-navii-magenta
                         bg-clip-text text-transparent font-rajdhani tracking-wider"
            >
              NAVII
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={scrollToWaitlist}
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-white/5"
              >
                Join Waitlist
              </Button>
              <Button
                onClick={scrollToPartners}
                className="bg-gradient-to-r from-navii-cyan to-navii-magenta text-black font-semibold
                           hover:opacity-90 transition-opacity"
              >
                Partner With Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg
                         border border-white/10 hover:bg-white/5"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-navii-bg/95 backdrop-blur-lg"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-gray-300 hover:text-white
                               transition-colors py-2"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Button
                    onClick={scrollToWaitlist}
                    variant="outline"
                    className="w-full border-white/20 text-white"
                  >
                    Join Waitlist
                  </Button>
                  <Button
                    onClick={scrollToPartners}
                    className="w-full bg-gradient-to-r from-navii-cyan to-navii-magenta text-black font-semibold"
                  >
                    Partner With Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onWaitlistClick={scrollToWaitlist}
          onPartnerClick={scrollToPartners}
        />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Solution Section (How It Works) */}
        <SolutionSection />

        {/* 4. Features Section (Bento Grid) */}
        <FeaturesSection />

        {/* 5. Demo Section */}
        <DemoSection />

        {/* 6. Progress Section - Tech & Roadmap */}
        <ProgressSection />

        {/* 7. Market Stats Section */}
        <MarketSection />

        {/* 8. B2B Section */}
        <B2BSection onScheduleClick={scrollToWaitlist} />

        {/* 8. Team Section */}
        <TeamSection />

        {/* 9. Waitlist CTA Section */}
        <WaitlistSection />
      </main>

      {/* 11. Footer */}
      <NaviiFooter />
    </div>
  );
};

export default NaviiLanding;
