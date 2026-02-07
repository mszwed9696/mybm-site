import { Check } from "lucide-react";

const benefits = [
  "Deep understanding of supplement compliance and advertising restrictions",
  "Proven creative frameworks that work within platform guidelines",
  "Track record of scaling brands from $50K to $500K+ monthly revenue",
];

const industries = [
  "Dietary Supplements",
  "Nutraceuticals", 
  "Sports Nutrition",
  "Health & Wellness",
  "Weight Management",
  "Beauty & Collagen",
];

export function WhoWeHelpSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-card/30">
      <div className="container-narrow">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div>
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-5">
              Who We Work With
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">
              Built For{" "}
              <span className="text-gradient">Supplement Brands</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              We exclusively partner with supplement, nutraceutical, and health brands 
              ready to scale. Our system is built around this vertical's unique challenges.
            </p>
            
            <div className="space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-accent" size={14} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Industry Tags */}
          <div className="lg:pt-4">
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="p-6 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300"
                >
                  <p className="font-medium">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
