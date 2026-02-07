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
    <section className="section-lg bg-section-alt">
      <div className="container-content">
        {/* Two-column layout with generous gap */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <div>
            <p className="text-label text-accent mb-6">
              Who We Work With
            </p>
            <h2 className="heading-section mb-6 md:mb-8">
              Built For{" "}
              <span className="text-gradient">Supplement Brands</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10 md:mb-12">
              We exclusively partner with supplement, nutraceutical, and health brands 
              ready to scale. Our system is built around this vertical's unique challenges.
            </p>
            
            {/* Benefits list with comfortable spacing */}
            <div className="space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-accent" size={14} />
                  </div>
                  <p className="text-body text-muted-foreground">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Industry Tags with even grid */}
          <div className="lg:pt-4">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="card-minimal p-6 md:p-7"
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
