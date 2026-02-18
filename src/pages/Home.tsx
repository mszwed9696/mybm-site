import { lazy, Suspense } from "react";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesCardsSection } from "@/components/sections/ServicesCardsSection";
import { TiersSection } from "@/components/sections/TiersSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PageMeta } from "@/components/seo/PageMeta";
import { JsonLd } from "@/components/seo/JsonLd";

// Below-fold sections — lazy-loaded so they don't block initial paint
const IntegrationsSection = lazy(() =>
  import("@/components/sections/IntegrationsSection").then((m) => ({
    default: m.IntegrationsSection,
  }))
);
const CTASection = lazy(() =>
  import("@/components/sections/CTASection").then((m) => ({
    default: m.CTASection,
  }))
);

export default function Home() {
  return (
    <Layout>
      <PageMeta
        title="MYB Media | Performance Marketing Agency"
        description="Performance marketing for every industry. Ad campaigns, SEO, AI automations, and more — all working together. Only pay for what you need, when you need it."
        keywords="digital marketing agency, performance marketing, SEO agency, ad campaigns, AI marketing automations, no retainer marketing, local business marketing, online marketing"
        canonicalPath="/"
      />
      <JsonLd type="Organization" />
      <JsonLd type="WebSite" />

      {/* Above the fold — loads immediately */}
      <HeroSection />
      <ServicesCardsSection />
      <TiersSection />
      <SocialProofSection />

      {/* Below the fold — lazy loaded */}
      <Suspense fallback={null}>
        <IntegrationsSection />
        <CTASection />
      </Suspense>
    </Layout>
  );
}
