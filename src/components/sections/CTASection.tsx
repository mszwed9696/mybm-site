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
    <section className="py-28 md:py-36 lg:py-44 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <Button asChild variant="glow" size="xl" className="text-base px-10 py-7 h-auto mb-6">
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-3" size={20} />
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
