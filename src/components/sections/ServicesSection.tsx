import { 
  Megaphone, 
  Palette, 
  MousePointerClick, 
  Mail, 
  BarChart3, 
  Share2 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Megaphone,
    title: "Paid Traffic Management",
    description: "Strategic ad campaigns across Meta, TikTok, and Google that drive qualified traffic and maximize ROAS.",
    platforms: ["Meta Ads", "TikTok Ads", "Google Ads"],
  },
  {
    icon: Palette,
    title: "Creative Strategy & Production",
    description: "Scroll-stopping ad creative direction and production that converts cold traffic into paying customers.",
    platforms: ["UGC Direction", "Static Ads", "Video Ads"],
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages & Funnels",
    description: "High-converting landing pages with optimized conversion paths, forms, and conditional logic.",
    platforms: ["Sales Pages", "Quiz Funnels", "Checkout Optimization"],
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    description: "Revenue-generating email systems that nurture leads, recover carts, and maximize customer LTV.",
    platforms: ["Flows", "Campaigns", "Segmentation"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Attribution",
    description: "Advanced tracking and attribution systems so you know exactly what's driving revenue.",
    platforms: ["Server-Side Tracking", "Attribution", "Dashboards"],
  },
  {
    icon: Share2,
    title: "Organic Social Growth",
    description: "Content strategy and consulting to build brand authority and reduce CAC through organic channels.",
    platforms: ["Content Strategy", "Community", "Brand Building"],
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-4">Our Services</p>
          <h2 className="heading-lg mb-6">
            Full-Funnel Growth{" "}
            <span className="text-gradient">For Supplement Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to scale profitably — from first click to loyal customer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glow-card p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="glow" size="lg">
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
