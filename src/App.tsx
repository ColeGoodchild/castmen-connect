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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/custom-wire-harness-manufacturer-usa" element={<CustomWireHarnessUSA />} />
          <Route path="/mil-spec-cable-assemblies" element={<MilSpecCableAssemblies />} />
          <Route path="/itar-cable-assembly-manufacturer" element={<ItarCableAssembly />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
