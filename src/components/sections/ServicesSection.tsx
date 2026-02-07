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
    <section className="section-lg">
      <div className="container-content">
        {/* Section Header - Stripe-style generous spacing */}
        <div className="text-center mb-20 md:mb-24">
          <p className="text-label text-accent mb-6">
            What We Do
          </p>
          <h2 className="heading-section mb-6 md:mb-8">
            Full-Funnel Growth{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need to scale profitably — from first click to loyal customer.
          </p>
        </div>

        {/* Services Grid - clean, even gutters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-minimal p-8 md:p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <service.icon className="text-accent" size={24} />
              </div>
              <h3 className="heading-card mb-4">{service.title}</h3>
              <p className="text-body text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA - generous spacing above */}
        <div className="text-center mt-16 md:mt-20">
          <Button asChild variant="glow-outline" size="lg" className="px-8 h-12">
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
