import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./i18n/LanguageContext";
import { PageTransition } from "./components/PageTransition";
import { PageLoader } from "./components/PageLoader";

// Lazy Load Pages
const Index = lazy(() => import("./pages/Index"));
const SmartRoads = lazy(() => import("./pages/SmartRoads"));
const SmartRoadsCapabilities = lazy(() => import("./pages/SmartRoadsCapabilities"));
const SmartRoadsTechnology = lazy(() => import("./pages/SmartRoadsTechnology"));
const SmartRoadsResearch = lazy(() => import("./pages/SmartRoadsResearch"));
const SmartRoadsImplementation = lazy(() => import("./pages/SmartRoadsImplementation"));
const SmartRoadsCircles = lazy(() => import("./pages/SmartRoadsCircles"));
const SmartRoadsResearchPaper = lazy(() => import("./pages/SmartRoadsResearchPaper"));
const SmartRoadsFHWA = lazy(() => import("./pages/SmartRoadsFHWA"));
const SmartRoadsFlowPaper = lazy(() => import("./pages/SmartRoadsFlowPaper"));
const SmartRoadsStabilizingPaper = lazy(() => import("./pages/SmartRoadsStabilizingPaper"));
const SmartRoadsSuppressingPaper = lazy(() => import("./pages/SmartRoadsSuppressingPaper"));
const SmartRoadsVirginiaTech = lazy(() => import("./pages/SmartRoadsVirginiaTech"));
const SmartRoadsLite = lazy(() => import("./pages/SmartRoadsLite"));
const Robotics = lazy(() => import("./pages/Robotics"));
const RobotDetail = lazy(() => import("./pages/RobotDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NaviiLanding = lazy(() => import("./pages/NaviiLanding"));
const NaviiDemo = lazy(() => import("./pages/NaviiDemo"));
const LogoExplorer = lazy(() => import("./pages/LogoExplorer"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/navii" element={<PageTransition><NaviiLanding /></PageTransition>} />
        <Route path="/navii/demo" element={<NaviiDemo />} />
        <Route path="/smartroads" element={<PageTransition><SmartRoads /></PageTransition>} />
        <Route path="/smartroads/capabilities" element={<PageTransition><SmartRoadsCapabilities /></PageTransition>} />
        <Route path="/smartroads/technology" element={<PageTransition><SmartRoadsTechnology /></PageTransition>} />
        <Route path="/smartroads/research" element={<PageTransition><SmartRoadsResearch /></PageTransition>} />
        <Route path="/smartroads/implementation" element={<PageTransition><SmartRoadsImplementation /></PageTransition>} />
        <Route path="/smartroads/circles" element={<PageTransition><SmartRoadsCircles /></PageTransition>} />
        <Route path="/smartroads/research-paper" element={<PageTransition><SmartRoadsResearchPaper /></PageTransition>} />
        <Route path="/smartroads/fhwa-report" element={<PageTransition><SmartRoadsFHWA /></PageTransition>} />
        <Route path="/smartroads/flow-paper" element={<PageTransition><SmartRoadsFlowPaper /></PageTransition>} />
        <Route path="/smartroads/stabilizing-paper" element={<PageTransition><SmartRoadsStabilizingPaper /></PageTransition>} />
        <Route path="/smartroads/suppressing-paper" element={<PageTransition><SmartRoadsSuppressingPaper /></PageTransition>} />
        <Route path="/smartroads/virginia-tech" element={<PageTransition><SmartRoadsVirginiaTech /></PageTransition>} />
        <Route path="/smartroads/lite" element={<PageTransition><SmartRoadsLite /></PageTransition>} />
        <Route path="/robotics" element={<PageTransition><Robotics /></PageTransition>} />
        <Route path="/robotics/:slug" element={<PageTransition><RobotDetail /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/logo-explorer" element={<PageTransition><LogoExplorer /></PageTransition>} />
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
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
