import { Layout } from "@/components/layout";
import {
  HeroSection,
  SocialProofSection,
  ServicesSection,
  WhoWeHelpSection,
  DifferentiatorsSection,
  CTASection,
} from "@/components/sections";
import { AuditForm } from "@/components/forms";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <WhoWeHelpSection />
      <DifferentiatorsSection />
      
      {/* Lead Magnet Section */}
      <section className="py-28 md:py-36 lg:py-44 bg-card/30">
        <div className="container-narrow">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-5">
              Free Performance Audit
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">
              Get Your Custom{" "}
              <span className="text-gradient">Growth Roadmap</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Discover wasted ad spend, funnel leaks, and ROAS opportunities 
              with a free audit customized for your supplement brand.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <AuditForm />
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
