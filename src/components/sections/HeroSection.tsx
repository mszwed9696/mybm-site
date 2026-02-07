import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-hero relative z-10 py-32 md:py-40 lg:py-48">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow - minimal, refined */}
          <p className="text-label text-accent mb-8 md:mb-10">
            Performance Marketing for Supplement Brands
          </p>

          {/* Hero Headline - large, confident */}
          <h1 className="heading-hero mb-8 md:mb-10">
            Scale Your Brand
            <br />
            <span className="text-gradient-accent">Profitably</span>
          </h1>

          {/* Subheadline - comfortable line-height, constrained width */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 md:mb-16">
            We build full-funnel growth engines that drive real ROAS and revenue 
            for nutraceutical, health, and wellness brands.
          </p>

          {/* CTA - clearly separated with generous spacing */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild variant="glow" size="xl" className="text-base px-10 h-14">
              <Link to="/free-audit">
                Get a Free Performance Audit
                <ArrowRight className="ml-3" size={18} />
              </Link>
            </Button>
            <Button asChild variant="glow-outline" size="xl" className="text-base px-10 h-14">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade - smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
