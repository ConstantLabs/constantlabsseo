import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SmartRoads from "./pages/SmartRoads";
import SmartRoadsCapabilities from "./pages/SmartRoadsCapabilities";
import SmartRoadsTechnology from "./pages/SmartRoadsTechnology";
import SmartRoadsResearch from "./pages/SmartRoadsResearch";
import SmartRoadsImplementation from "./pages/SmartRoadsImplementation";
import SmartRoadsCircles from "./pages/SmartRoadsCircles";
import SmartRoadsResearchPaper from "./pages/SmartRoadsResearchPaper";
import SmartRoadsFHWA from "./pages/SmartRoadsFHWA";
import SmartRoadsFlowPaper from "./pages/SmartRoadsFlowPaper";
import SmartRoadsStabilizingPaper from "./pages/SmartRoadsStabilizingPaper";
import SmartRoadsSuppressingPaper from "./pages/SmartRoadsSuppressingPaper";
import SmartRoadsVirginiaTech from "./pages/SmartRoadsVirginiaTech";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/smartroads" element={<SmartRoads />} />
      <Route path="/smartroads/capabilities" element={<SmartRoadsCapabilities />} />
      <Route path="/smartroads/technology" element={<SmartRoadsTechnology />} />
      <Route path="/smartroads/research" element={<SmartRoadsResearch />} />
      <Route path="/smartroads/implementation" element={<SmartRoadsImplementation />} />
      <Route path="/smartroads/circles" element={<SmartRoadsCircles />} />
      <Route path="/smartroads/research-paper" element={<SmartRoadsResearchPaper />} />
      <Route path="/smartroads/fhwa-report" element={<SmartRoadsFHWA />} />
      <Route path="/smartroads/flow-paper" element={<SmartRoadsFlowPaper />} />
      <Route path="/smartroads/stabilizing-paper" element={<SmartRoadsStabilizingPaper />} />
      <Route path="/smartroads/suppressing-paper" element={<SmartRoadsSuppressingPaper />} />
      <Route path="/smartroads/virginia-tech" element={<SmartRoadsVirginiaTech />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
