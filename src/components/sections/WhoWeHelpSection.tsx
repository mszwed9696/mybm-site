import { Check } from "lucide-react";

const industries = [
  {
    title: "Dietary Supplements",
    description: "Vitamins, minerals, and general wellness supplements",
  },
  {
    title: "Nutraceuticals",
    description: "Functional foods and pharmaceutical-grade supplements",
  },
  {
    title: "Sports Nutrition",
    description: "Protein, pre-workout, BCAAs, creatine, and performance supplements",
  },
  {
    title: "Health & Wellness",
    description: "Immunity, gut health, cognitive, and longevity supplements",
  },
  {
    title: "Weight Management",
    description: "Fat burners, metabolism boosters, and weight loss supplements",
  },
  {
    title: "Beauty & Collagen",
    description: "Collagen, anti-aging, and beauty-from-within supplements",
  },
];

export function WhoWeHelpSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-accent font-medium mb-4">Who We Work With</p>
            <h2 className="heading-lg mb-6">
              Built Specifically For{" "}
              <span className="text-gradient">Supplement Brands</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We exclusively partner with supplement, nutraceutical, and health brands 
              that are ready to scale. Our entire system is built around the unique 
              challenges and opportunities in this vertical.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-accent" size={14} />
                </div>
                <p className="text-muted-foreground">
                  Deep understanding of supplement compliance and advertising restrictions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-accent" size={14} />
                </div>
                <p className="text-muted-foreground">
                  Proven creative frameworks that work within platform guidelines
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-accent" size={14} />
                </div>
                <p className="text-muted-foreground">
                  Track record of scaling brands from $50K to $500K+ monthly revenue
                </p>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="glow-card p-6"
              >
                <h3 className="font-semibold mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
