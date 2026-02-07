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
      <section className="section-lg bg-section-alt">
        <div className="container-content">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-label text-accent mb-6">
              Free Performance Audit
            </p>
            <h2 className="heading-section mb-6 md:mb-8">
              Get Your Custom{" "}
              <span className="text-gradient">Growth Roadmap</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
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
