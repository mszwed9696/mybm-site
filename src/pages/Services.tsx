import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";
import {
  Megaphone,
  Search,
  Bot,
  Globe,
  Share2,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Megaphone,
    accent: "#ef4444",
    title: "Ad Campaigns",
    slug: "ad-campaigns",
    description:
      "Search, display, and social ads powered by data-driven strategy. We manage Meta, Google, TikTok, and YouTube campaigns optimized for your KPIs.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & search campaigns",
      "TikTok & YouTube advertising",
      "Audience research & targeting",
      "Creative testing frameworks",
      "Daily optimization & scaling",
    ],
  },
  {
    icon: Search,
    accent: "#3b82f6",
    title: "SEO & Organic Marketing",
    slug: "seo",
    description:
      "Dominate search results with fully-managed SEO, content strategy, local optimization, and Google Business management.",
    features: [
      "On-page & technical SEO audits",
      "Content strategy & blog management",
      "Local SEO & map-pack optimization",
      "Google Business Profile management",
      "Link building & authority growth",
      "Keyword tracking & reporting",
    ],
  },
  {
    icon: Bot,
    accent: "#8b5cf6",
    title: "AI Solutions & Automations",
    slug: "ai-solutions",
    description:
      "Automate lead follow-up, appointment booking, and marketing workflows with AI-powered systems that work 24/7.",
    features: [
      "AI chatbots & lead qualification",
      "Automated follow-up sequences",
      "Appointment booking bots",
      "CRM workflow automations",
      "Lead scoring & routing",
      "Smart review request systems",
    ],
  },
  {
    icon: Globe,
    accent: "#f97316",
    title: "Website Design",
    slug: "website-design",
    description:
      "Custom-coded and proven fast solutions — responsive, fast, and built to convert visitors into customers.",
    features: [
      "Custom website design & development",
      "Proven fast solution templates",
      "Landing page & funnel builds",
      "Mobile-first responsive design",
      "Speed & Core Web Vitals optimization",
      "Conversion rate optimization",
    ],
  },
  {
    icon: Share2,
    accent: "#10b981",
    title: "Social Media Marketing",
    slug: "social-media",
    description:
      "Build brand awareness and engagement across Facebook, Instagram, TikTok, and LinkedIn with strategic content.",
    features: [
      "Content calendar development",
      "Platform-specific strategy",
      "Community management",
      "Influencer partnership guidance",
      "Brand voice development",
      "Performance benchmarking",
    ],
  },
  {
    icon: Star,
    accent: "#eab308",
    title: "Reviews Management",
    slug: "reviews-management",
    description:
      "Monitor, respond to, and grow your online reviews to build trust and credibility with potential customers.",
    features: [
      "Review monitoring dashboard",
      "Automated review requests",
      "Response templates & management",
      "Listings across 60+ directories",
      "Reputation score tracking",
      "Competitive review analysis",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <PageMeta
        title="Digital Marketing Services | Mind Your Business Media"
        description="Ad campaigns, SEO, AI automations, website design, social media, and reviews management — everything your business needs, with no retainers."
        keywords="digital marketing services, ad campaigns, SEO, AI automations, website design, social media marketing, reviews management"
        canonicalPath="/services"
      />
      <JsonLd
        type="Service"
        serviceName="Digital Marketing Services"
        serviceDescription="Ad campaigns, SEO, AI automations, website design, social media, and reviews management for businesses in every industry."
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#edf2f4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: "#af3e4d" }}
            >
              Our Services
            </p>
            <h1
              className="text-4xl md:text-5xl font-black tracking-tight mb-5"
              style={{ color: "#0a0908" }}
            >
              Everything you need.{" "}
              <span style={{ color: "#af3e4d" }}>Nothing you don't.</span>
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#546a7b" }}
            >
              Six core services — all working together, all without retainers.
              Only pay for what you need, when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "" : ""
                }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: service.accent + "15" }}
                >
                  <service.icon
                    size={28}
                    style={{ color: service.accent }}
                  />
                </div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#0a0908" }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "#546a7b" }}
                >
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: service.accent }}
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div
                className={`p-7 rounded-2xl border ${index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                style={{ borderColor: "#e5e7eb", backgroundColor: "#f9fafb" }}
              >
                <h3
                  className="font-bold text-sm uppercase tracking-wider mb-5"
                  style={{ color: service.accent }}
                >
                  What's included
                </h3>
                <ul className="space-y-3.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check
                        size={16}
                        className="shrink-0"
                        style={{ color: service.accent }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "#374151" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
