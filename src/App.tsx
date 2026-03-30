import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./i18n/LanguageContext";
import { PageTransition } from "./components/PageTransition";
import { PageLoader } from "./components/PageLoader";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { CookieConsent } from "./components/CookieConsent";
import { cities } from "./data/cityData";
import { industries } from "./data/industryData";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Lazy Load Pages
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Audit = lazy(() => import("./pages/Audit"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CityLandingPage = lazy(() => import("./pages/CityLandingPage"));
const IndustryLandingPage = lazy(() => import("./pages/IndustryLandingPage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
        <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/case-studies/:slug" element={<PageTransition><CaseStudyDetail /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/audit" element={<PageTransition><Audit /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />

        {/* City Landing Pages */}
        {cities.map((city) => (
          <Route
            key={city.slug}
            path={`/${city.slug}`}
            element={<PageTransition><CityLandingPage city={city} /></PageTransition>}
          />
        ))}

        {/* Industry Landing Pages */}
        {industries.map((industry) => (
          <Route
            key={industry.slug}
            path={`/${industry.slug}`}
            element={<PageTransition><IndustryLandingPage industry={industry} /></PageTransition>}
          />
        ))}

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
        <WhatsAppButton />
        <CookieConsent />
      </BrowserRouter>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
