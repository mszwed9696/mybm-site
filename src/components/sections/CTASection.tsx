import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  title = "Ready to Scale Profitably?",
  subtitle = "Get a free performance audit and discover the hidden revenue opportunities in your current marketing.",
  buttonText = "Get Your Free Audit",
  buttonLink = "/free-audit",
}: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />
      
      <div className="container-narrow relative z-10">
        <div className="glow-card p-12 md:p-16 text-center animate-pulse-glow">
          <h2 className="heading-lg mb-6 glow-text">{title}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button asChild variant="glow" size="xl">
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            90-day minimum commitment • Retainer + Performance Revenue Share
          </p>
        </div>
      </div>
    </section>
  );
}
