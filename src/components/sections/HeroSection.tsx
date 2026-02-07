import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-narrow relative z-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - subtle, minimal */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/60 bg-secondary/30 backdrop-blur-sm mb-10 md:mb-12">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium tracking-wide">
              Performance Marketing for Supplement Brands
            </span>
          </div>

          {/* Headline - larger, bolder, more breathing room */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 md:mb-10">
            Scale Your Brand
            <br />
            <span className="text-gradient-accent">Profitably</span>
          </h1>

          {/* Subheadline - increased line-height, more space */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 md:mb-16">
            We build full-funnel growth engines that drive real ROAS and revenue 
            for nutraceutical, health, and wellness brands.
          </p>

          {/* CTA - clearly separated, generous spacing */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild variant="glow" size="xl" className="text-base px-10 py-7 h-auto">
              <Link to="/free-audit">
                Get a Free Performance Audit
                <ArrowRight className="ml-3" size={20} />
              </Link>
            </Button>
            <Button asChild variant="glow-outline" size="xl" className="text-base px-10 py-7 h-auto">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
