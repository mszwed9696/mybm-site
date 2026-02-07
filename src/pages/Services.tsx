import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";
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
    title: "Paid Traffic Management",
    description: "Strategic paid advertising across Meta, TikTok, and Google that drives qualified traffic and maximizes return on ad spend.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "TikTok Ads campaign management",
      "Google Ads & YouTube advertising",
      "Audience research and targeting",
      "Creative testing frameworks",
      "Daily optimization and scaling",
    ],
  },
  {
    icon: Palette,
    title: "Creative Strategy & Production Direction",
    description: "Scroll-stopping ad creative direction that converts cold traffic into paying customers while staying compliant.",
    features: [
      "Creative strategy development",
      "UGC creator sourcing and direction",
      "Static ad design briefs",
      "Video ad scripting and storyboarding",
      "Creative performance analysis",
      "Iterative testing and optimization",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages & Funnels",
    description: "High-converting landing pages and funnels designed specifically for supplement brands to maximize conversion rates.",
    features: [
      "High-converting sales pages",
      "Quiz and assessment funnels",
      "Product landing pages",
      "Checkout flow optimization",
      "Forms with conditional logic",
      "Mobile-first responsive design",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    description: "Revenue-generating email systems that nurture leads, recover abandoned carts, and maximize customer lifetime value.",
    features: [
      "Welcome sequence automation",
      "Abandoned cart recovery flows",
      "Post-purchase nurture sequences",
      "Win-back and re-engagement campaigns",
      "Promotional campaign strategy",
      "List segmentation and hygiene",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Attribution",
    description: "Advanced tracking and attribution systems so you know exactly what's driving revenue and can make data-driven decisions.",
    features: [
      "Server-side tracking implementation",
      "Multi-touch attribution modeling",
      "Custom dashboard creation",
      "ROAS and LTV tracking",
      "Conversion API setup",
      "Data visualization and reporting",
    ],
  },
  {
    icon: Share2,
    title: "Organic Social & Content",
    description: "Content strategy and consulting to build brand authority and reduce customer acquisition costs through organic channels.",
    features: [
      "Content calendar development",
      "Platform-specific strategy",
      "Community engagement tactics",
      "Influencer partnership guidance",
      "Brand voice development",
      "Performance benchmarking",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <PageMeta
        title="Services | Mind Your Business Media — Full-Funnel Growth for Supplement Brands"
        description="Paid traffic management, creative strategy, landing pages, email automation, analytics & organic social — everything your supplement brand needs to scale profitably."
        keywords="supplement paid ads, supplement email marketing, supplement landing pages, supplement funnel agency, supplement creative strategy, supplement analytics"
        canonicalPath="/services"
      />
      <JsonLd
        type="Service"
        serviceName="Full-Funnel Growth Services"
        serviceDescription="Paid traffic management, creative strategy, landing pages & funnels, email marketing & automation, analytics & attribution, and organic social & content for supplement brands."
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">Our Services</p>
            <h1 className="heading-xl mb-6 glow-text">
              Full-Funnel Growth{" "}
              <span className="text-gradient-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything your supplement brand needs to scale profitably — 
              from paid traffic to email automation, all tied back to revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="text-accent" size={28} />
                  </div>
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <Button asChild variant="glow" size="lg">
                    <Link to="/free-audit">
                      Get Started
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={`glow-card p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-semibold mb-6 text-accent">What's Included</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
