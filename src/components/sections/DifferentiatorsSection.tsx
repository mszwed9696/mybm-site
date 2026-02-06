import { Target, DollarSign, LineChart, Shield } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Full-Funnel Ownership",
    description:
      "We don't just run ads. We own the entire funnel — from first click to repeat purchase. No finger-pointing, just results.",
  },
  {
    icon: DollarSign,
    title: "Performance-Aligned Compensation",
    description:
      "Our revenue share model means we only win when you win. We're invested in your growth, not just collecting retainers.",
  },
  {
    icon: LineChart,
    title: "ROAS-First Decision Making",
    description:
      "Every decision is filtered through one question: does this drive profitable revenue? We care about your bottom line, not vanity metrics.",
  },
  {
    icon: Shield,
    title: "Built for Scale",
    description:
      "Our systems are designed to take you from $100K to $1M+ monthly. We build infrastructure that grows with you.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-4">Why Us</p>
          <h2 className="heading-lg mb-6">
            What Makes Us{" "}
            <span className="text-gradient">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
            "We don't care to be right. We care about making you money."
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="glow-card p-8 flex gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
