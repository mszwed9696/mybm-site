import { 
  Megaphone, 
  Palette, 
  MousePointerClick, 
  Mail, 
  BarChart3, 
  Share2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Megaphone,
    title: "Paid Traffic",
    description: "Strategic campaigns across Meta, TikTok, and Google that maximize ROAS.",
  },
  {
    icon: Palette,
    title: "Creative Strategy",
    description: "Scroll-stopping ad creative that converts cold traffic into customers.",
  },
  {
    icon: MousePointerClick,
    title: "Funnels & Landing Pages",
    description: "High-converting pages with optimized paths and conditional logic.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Revenue systems that nurture leads and maximize customer LTV.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Attribution",
    description: "Advanced tracking so you know exactly what drives revenue.",
  },
  {
    icon: Share2,
    title: "Organic Growth",
    description: "Content strategy to build authority and reduce CAC organically.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-28 md:py-36 lg:py-44">
      <div className="container-narrow">
        {/* Section Header - more breathing room */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-5">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">
            Full-Funnel Growth{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Everything you need to scale profitably — from first click to loyal customer.
          </p>
        </div>

        {/* Services Grid - cleaner, more spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors duration-300">
                <service.icon className="text-accent" size={26} />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA - more space above */}
        <div className="text-center mt-16 md:mt-20">
          <Button asChild variant="glow-outline" size="lg" className="px-8">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
