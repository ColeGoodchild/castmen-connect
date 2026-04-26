import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CustomWireHarnessUSA from "./pages/CustomWireHarnessUSA";
import MilSpecCableAssemblies from "./pages/MilSpecCableAssemblies";
import ItarCableAssembly from "./pages/ItarCableAssembly";
import As9100WireHarness from "./pages/As9100WireHarness";
import RapidPrototypeCableAssembly from "./pages/RapidPrototypeCableAssembly";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/custom-wire-harness-manufacturer-usa" element={<CustomWireHarnessUSA />} />
          <Route path="/mil-spec-cable-assemblies" element={<MilSpecCableAssemblies />} />
          <Route path="/itar-cable-assembly-manufacturer" element={<ItarCableAssembly />} />
          <Route path="/as9100-wire-harness-manufacturer" element={<As9100WireHarness />} />
          <Route path="/rapid-prototype-cable-assembly" element={<RapidPrototypeCableAssembly />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
