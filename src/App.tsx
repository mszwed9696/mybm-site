import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Services, WhoWeWorkWith, HowItWorks, FreeAudit, Contact } from "./pages";
import NotFound from "./pages/NotFound";
import SEOPage from "./pages/SEOPage";
import QuizPage from "./pages/QuizPage";
import ProblemPage from "./pages/ProblemPage";
import { seoPageSlugs } from "./data/seoPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/who-we-work-with" element={<WhoWeWorkWith />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/free-audit" element={<FreeAudit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/problems/:slug" element={<ProblemPage />} />
          {seoPageSlugs.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<SEOPage />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
