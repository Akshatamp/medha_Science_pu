import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import Index from "./pages/Index";
import Faculty from "./pages/Faculty";
import Heritage from "./pages/Heritage";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Courses from "./pages/Courses";
import MetaAdsLanding from "./pages/MetaAdsLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageLoader>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/our-heritage" element={<Heritage />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions-2026" element={<MetaAdsLanding />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageLoader>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
