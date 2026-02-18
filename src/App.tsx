import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// ── Eager: homepage loads immediately ──
import Home from "./pages/Home";

// ── Lazy: all other pages split into separate chunks ──
const Services = lazy(() => import("./pages/Services"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const WhoWeWorkWith = lazy(() => import("./pages/WhoWeWorkWith"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const ZeroRetainersPage = lazy(() => import("./pages/ZeroRetainersPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const ClientReviewsPage = lazy(() => import("./pages/ClientReviewsPage"));
const FreeAudit = lazy(() => import("./pages/FreeAudit"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const MarketingQuizPage = lazy(() => import("./pages/MarketingQuizPage"));
const ListingScanPage = lazy(() => import("./pages/ListingScanPage"));
const MarketingScorePage = lazy(() => import("./pages/MarketingScorePage"));
const SocialCalculatorPage = lazy(() => import("./pages/SocialCalculatorPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ProblemPage = lazy(() => import("./pages/ProblemPage"));
const GlossaryPage = lazy(() => import("./pages/GlossaryPage"));
const GlossaryTermPage = lazy(() => import("./pages/GlossaryTermPage"));
const PlatformPricingPage = lazy(() => import("./pages/PlatformPricingPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// ── Lazy: SEO pages + providers (heavy, not needed for initial render) ──
const SEOCatchAll = lazy(() => import("./SEOCatchAll"));
const LazyProviders = lazy(() => import("./LazyProviders"));

// Lightweight loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-8 h-8 border-3 border-gray-200 rounded-full animate-spin"
        style={{ borderTopColor: "#af3e4d" }}
      />
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    {/* Lazy-load toast/tooltip providers — not needed for first paint */}
    <Suspense fallback={null}>
      <LazyProviders />
    </Suspense>

    <Suspense fallback={<PageLoader />}>
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
        {/* SEO catch-all: loads seoPages data only when needed */}
        <Route path="*" element={<SEOCatchAll fallback={<NotFound />} />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
