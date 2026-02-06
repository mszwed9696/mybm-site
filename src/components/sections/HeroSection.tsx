import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Performance Marketing for Supplement Brands
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-xl mb-6 glow-text">
            Scale Your Supplement Brand{" "}
            <span className="text-gradient-accent">Profitably</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            We build full-funnel growth engines that drive real ROAS and revenue 
            for nutraceutical, health, and wellness brands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild variant="glow" size="xl">
              <Link to="/free-audit">
                Get a Free Performance Audit
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="glow-outline" size="xl">
              <Link to="/services">See Our Services</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <TrendingUp className="text-accent" size={24} />
              <span className="text-sm">ROAS-First Strategy</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Target className="text-accent" size={24} />
              <span className="text-sm">Full-Funnel Ownership</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Zap className="text-accent" size={24} />
              <span className="text-sm">Performance-Aligned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
