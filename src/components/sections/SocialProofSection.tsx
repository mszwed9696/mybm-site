import { TrendingUp, Target, Zap, Award } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "3.5x",
    label: "Average ROAS",
  },
  {
    icon: Target,
    value: "$50M+",
    label: "Revenue Generated",
  },
  {
    icon: Zap,
    value: "90-Day",
    label: "Results Timeline",
  },
  {
    icon: Award,
    value: "100%",
    label: "Performance Aligned",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-24 relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-narrow">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <metric.icon className="text-accent" size={20} />
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground tracking-wide uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
