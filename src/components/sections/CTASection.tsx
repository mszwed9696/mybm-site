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
    <section className="section-lg relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/[0.04] rounded-full blur-3xl" />
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="text-center">
          <h2 className="heading-section mb-6 md:mb-8">
            {title}
          </h2>
          <p className="text-body-lg text-muted-foreground mb-12 md:mb-14 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button asChild variant="glow" size="xl" className="text-base px-10 h-14 mb-8">
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-3" size={18} />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            90-day minimum commitment • Retainer + Performance Revenue Share
          </p>
        </div>
      </div>
    </section>
  );
}
