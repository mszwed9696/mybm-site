import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Services,
  WhoWeWorkWith,
  HowItWorks,
  FreeAudit,
  Contact,
  IndustriesPage,
  IndustryPage,
  AboutPage,
} from "./pages";
import NotFound from "./pages/NotFound";
import SEOPage from "./pages/SEOPage";
import QuizPage from "./pages/QuizPage";
import ProblemPage from "./pages/ProblemPage";
import GlossaryPage from "./pages/GlossaryPage";
import GlossaryTermPage from "./pages/GlossaryTermPage";
import MarketingQuizPage from "./pages/MarketingQuizPage";
import ListingScanPage from "./pages/ListingScanPage";
import MarketingScorePage from "./pages/MarketingScorePage";
import SocialCalculatorPage from "./pages/SocialCalculatorPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ServicePage from "./pages/ServicePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ClientReviewsPage from "./pages/ClientReviewsPage";
import PlatformPricingPage from "./pages/PlatformPricingPage";
import ZeroRetainersPage from "./pages/ZeroRetainersPage";
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
          <Route path="/services/pricing" element={<PlatformPricingPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/who-we-work-with" element={<WhoWeWorkWith />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/two-tiers" element={<ZeroRetainersPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/reviews" element={<ClientReviewsPage />} />
          <Route path="/free-audit" element={<FreeAudit />} />
          <Route path="/contact" element={<FreeAudit />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/resources/marketing-quiz" element={<MarketingQuizPage />} />
          <Route path="/resources/listing-scan" element={<ListingScanPage />} />
          <Route path="/resources/marketing-score" element={<MarketingScorePage />} />
          <Route path="/resources/social-calculator" element={<SocialCalculatorPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/problems/:slug" element={<ProblemPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/glossary/:slug" element={<GlossaryTermPage />} />
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
