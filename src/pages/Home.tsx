import { Layout } from "@/components/layout";
import {
  HeroSection,
  ServicesCardsSection,
  TiersSection,
  SocialProofSection,
  IntegrationsSection,
  CTASection,
} from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";

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

      <HeroSection />
      <ServicesCardsSection />
      <TiersSection />
      <SocialProofSection />
      <IntegrationsSection />
      <CTASection />
    </Layout>
  );
}
