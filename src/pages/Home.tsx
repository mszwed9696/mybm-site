import { lazy, Suspense } from "react";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PageMeta } from "@/components/seo/PageMeta";
import { JsonLd } from "@/components/seo/JsonLd";

// Below-fold sections — lazy-loaded so they don't block initial paint
const MethodologySection = lazy(() =>
    import("@/components/sections/MethodologySection").then((m) => ({
        default: m.MethodologySection,
    }))
);
const CredentialsSection = lazy(() =>
    import("@/components/sections/CredentialsSection").then((m) => ({
        default: m.CredentialsSection,
    }))
);
const CTASection = lazy(() =>
    import("@/components/sections/CTASection").then((m) => ({
        default: m.CTASection,
    }))
);

export default function Home() {
    return (
        <Layout noPaddingTop>
            <PageMeta
                title="Mind Your Business Media | Premier Marketing Agency"
                description="Premier marketing for million-dollar businesses. AI-powered lead generation, precision ad spend, data-driven retargeting — we ensure no lead slips through the cracks."
                keywords="premier marketing agency, AI marketing, data-driven advertising, lead generation, retargeting, paid ads, digital marketing, performance marketing"
                canonicalPath="/"
            />
            <JsonLd type="Organization" />
            <JsonLd type="WebSite" />

            {/* Above the fold — loads immediately */}
            <HeroSection />
            {/* Main content wrapper that overlaps the sticky hero on scroll */}
            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">
                <ValuePropSection />
                <SocialProofSection />

                {/* Below the fold — lazy loaded */}
                <Suspense fallback={null}>
                    <MethodologySection />
                    <CredentialsSection />
                    <CTASection />
                </Suspense>
            </div>
        </Layout>
    );
}
