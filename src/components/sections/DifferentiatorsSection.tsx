import { Target, DollarSign, LineChart, Shield } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Full-Funnel Ownership",
    description:
      "We own the entire funnel — from first click to repeat purchase. No finger-pointing, just results.",
  },
  {
    icon: DollarSign,
    title: "Performance-Aligned",
    description:
      "Our revenue share model means we only win when you win. We're invested in your growth.",
  },
  {
    icon: LineChart,
    title: "ROAS-First Decisions",
    description:
      "Every decision is filtered through one question: does this drive profitable revenue?",
  },
  {
    icon: Shield,
    title: "Built for Scale",
    description:
      "Systems designed to take you from $100K to $1M+ monthly. Infrastructure that grows with you.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="section-lg">
      <div className="container-content">
        {/* Section Header - generous spacing */}
        <div className="text-center mb-20 md:mb-24">
          <p className="text-label text-accent mb-6">
            Why Choose Us
          </p>
          <h2 className="heading-section mb-6 md:mb-8">
            What Makes Us{" "}
            <span className="text-gradient">Different</span>
          </h2>
          <p className="text-body-lg text-muted-foreground italic max-w-xl mx-auto">
            "We don't care to be right. We care about making you money."
          </p>
        </div>

        {/* Differentiators Grid - clean 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="card-minimal p-8 md:p-10 flex gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="heading-card mb-3">{item.title}</h3>
                <p className="text-body text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
