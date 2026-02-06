import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Free Performance Audit",
    description: "We analyze your current marketing, funnels, and data to identify wasted spend, funnel leaks, and ROAS opportunities. You get a custom report with actionable insights.",
    details: [
      "Ad account review and ROAS analysis",
      "Funnel and landing page audit",
      "Email marketing assessment",
      "Tracking and attribution review",
      "Competitive landscape analysis",
    ],
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description: "We build a custom 90-day growth roadmap based on your audit findings, business goals, and market opportunity. This becomes our shared execution plan.",
    details: [
      "90-day growth objectives",
      "Channel prioritization",
      "Creative and messaging strategy",
      "Funnel optimization roadmap",
      "KPI targets and milestones",
    ],
  },
  {
    number: "03",
    title: "Onboarding & Setup",
    description: "We get access to your accounts, implement tracking, set up reporting dashboards, and prepare all systems for launch. Usually takes 1-2 weeks.",
    details: [
      "Ad account access and setup",
      "Tracking and pixel implementation",
      "Dashboard and reporting configuration",
      "Creative asset organization",
      "Communication workflow setup",
    ],
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "We launch campaigns, monitor performance daily, and continuously optimize towards your ROAS and revenue goals. Weekly calls keep you informed.",
    details: [
      "Campaign launch and monitoring",
      "Daily optimization and scaling",
      "Weekly performance calls",
      "Creative testing and iteration",
      "Funnel A/B testing",
    ],
  },
  {
    number: "05",
    title: "Scale & Expand",
    description: "As we hit targets, we scale winning campaigns and expand into new channels, audiences, and creative angles to compound your growth.",
    details: [
      "Scaling winning campaigns",
      "New channel expansion",
      "Audience expansion testing",
      "Creative scaling framework",
      "LTV optimization strategies",
    ],
  },
];

const pricingDetails = [
  {
    title: "Retainer + Performance Share",
    description: "Our hybrid model aligns our incentives with your success. We earn more when you earn more.",
  },
  {
    title: "90-Day Minimum",
    description: "Real results take time. We require a 90-day minimum commitment to properly test, learn, and optimize.",
  },
  {
    title: "Month-to-Month After",
    description: "After the initial 90 days, we continue month-to-month. Stay because you want to, not because you have to.",
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">How It Works</p>
            <h1 className="heading-xl mb-6 glow-text">
              Our Process For{" "}
              <span className="text-gradient-accent">Profitable Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From free audit to scaled success — here's exactly how we work 
              with supplement brands to drive revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="glow-card p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-bold text-accent/30">
                        {step.number}
                      </span>
                      <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-6">
                    <h3 className="font-semibold mb-4 text-accent text-sm uppercase tracking-wider">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <ArrowRight className="text-accent flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-4">Engagement Model</p>
            <h2 className="heading-lg mb-6">
              Performance-Aligned{" "}
              <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
              "We only win when you win."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingDetails.map((item) => (
              <div key={item.title} className="glow-card p-8 text-center">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
