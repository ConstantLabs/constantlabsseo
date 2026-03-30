import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { t, toggleLang, isAr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.caseStudies"), to: "/case-studies" },
    { label: t("nav.pricing"), to: "/pricing" },
    { label: t("nav.about"), to: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <Link to="/" className="group">
              <span
                className={`text-xl md:text-2xl font-heading font-extrabold tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-[#2B124C]" : "text-white"
                }`}
              >
                ConstantSEO
              </span>
            </Link>
            <a
              href="https://constantlabs.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[10px] md:text-xs font-medium transition-all duration-300 ${
                scrolled ? "text-[#7143E0] hover:text-[#5a2dcc]" : "text-gray-200 hover:text-white"
              }`}
            >
              by Constant Labs
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-[15px] font-semibold transition-colors duration-300 ${
                  location.pathname === link.to
                    ? scrolled ? "text-[#7143E0]" : "text-white"
                    : scrolled
                      ? "text-[#2B124C] hover:text-[#7143E0]"
                      : "text-gray-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-500 ${
                scrolled
                  ? "border-[#2B124C]/20 text-[#2B124C] hover:border-[#2B124C]/40"
                  : "border-gray-600 text-gray-200 hover:text-white hover:border-gray-400"
              }`}
            >
              {isAr ? "EN" : "عربي"}
            </button>

            <Link to="/audit">
              <Button className="hidden sm:inline-flex bg-[#FECD4D] hover:bg-[#ffe066] text-[#2B124C] font-semibold text-sm px-6 py-2.5 rounded-full uppercase tracking-wide shadow-lg shadow-[#FECD4D]/20 hover:shadow-[#FECD4D]/30 transition-all">
                {t("nav.audit")}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors duration-500 ${
                scrolled ? "text-[#2B124C]" : "text-white"
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-t ${
              scrolled
                ? "bg-white border-gray-100"
                : "bg-[#2B124C] border-white/10"
            }`}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-[15px] font-semibold rounded-lg transition-colors ${
                    scrolled
                      ? "text-[#2B124C] hover:bg-[#2B124C]/5"
                      : "text-gray-200 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3 px-4">
                <button
                  onClick={toggleLang}
                  className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all ${
                    scrolled
                      ? "border-[#2B124C]/20 text-[#2B124C]"
                      : "border-gray-600 text-gray-200 hover:text-white"
                  }`}
                >
                  {isAr ? "EN" : "عربي"}
                </button>
                <Link to="/audit" onClick={() => setMobileOpen(false)} className="flex-1">
                  <Button className="w-full bg-[#FECD4D] hover:bg-[#ffe066] text-[#2B124C] font-semibold rounded-full uppercase tracking-wide">
                    {t("nav.audit")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
