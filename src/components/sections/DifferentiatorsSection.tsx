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
    <section className="py-28 md:py-36 lg:py-44">
      <div className="container-narrow">
        {/* Section Header - more spacious */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-5">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">
            What Makes Us{" "}
            <span className="text-gradient">Different</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto italic">
            "We don't care to be right. We care about making you money."
          </p>
        </div>

        {/* Differentiators Grid - cleaner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 flex gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="text-accent" size={26} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
