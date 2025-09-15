import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScheduleCall from "./pages/ScheduleCall";
import SystemFeatures from "./pages/SystemFeatures";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import SmoothScrolling from "./components/SmoothScrolling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SmoothScrolling>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/schedule-call" element={<ScheduleCall />} />
            <Route path="/system-features" element={<SystemFeatures />} />
            <Route path="/results" element={<Results />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SmoothScrolling>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
