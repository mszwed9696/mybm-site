import { Layout } from "@/components/layout";
import {
  HeroSection,
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
      <ServicesSection />
      <WhoWeHelpSection />
      <DifferentiatorsSection />
      
      {/* Lead Magnet Section */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-4">Free Performance Audit</p>
            <h2 className="heading-lg mb-6">
              Get Your Custom{" "}
              <span className="text-gradient">Growth Roadmap</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover wasted ad spend, funnel leaks, and ROAS opportunities 
              with a free audit customized for your supplement brand.
            </p>
          </div>
          <AuditForm />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
