import { useLocation, Navigate } from "react-router-dom";
import { SEOLandingPage } from "@/components/seo";
import { allSeoPages } from "@/data/seoPages";

export default function SEOPage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const pageData = allSeoPages.find((p) => p.slug === slug);

  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  return (
    <SEOLandingPage
      key={slug}
      meta={pageData.meta}
      hero={pageData.hero}
      intro={pageData.intro}
      sections={pageData.sections}
      faqs={pageData.faqs}
      relatedPages={pageData.relatedPages}
      ctaTitle={pageData.ctaTitle}
      ctaSubtitle={pageData.ctaSubtitle}
    />
  );
}
