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
    <section className="section-sm relative">
      {/* Subtle top divider */}
      <div className="divider-subtle max-w-4xl mx-auto mb-16 md:mb-20" />
      
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-5">
                <metric.icon className="text-accent" size={20} />
              </div>
              <p className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground tracking-wide uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="divider-subtle max-w-4xl mx-auto mt-16 md:mt-20" />
    </section>
  );
}
