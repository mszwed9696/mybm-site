import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Paid Traffic",
    description:
      "Strategic campaigns across Meta, TikTok, and Google that maximize ROAS and drive qualified buyers to your supplement brand.",
  },
  {
    num: "02",
    title: "Creative Strategy",
    description:
      "Scroll-stopping ad creative and UGC that converts cold traffic into customers — compliant with platform and FTC guidelines.",
  },
  {
    num: "03",
    title: "Funnels & Landing Pages",
    description:
      "High-converting pages with optimized paths, conditional logic, and checkout flows designed to maximize AOV and conversion rate.",
  },
  {
    num: "04",
    title: "Email Automation",
    description:
      "Revenue-driving email and SMS systems that nurture leads, recover abandoned carts, and maximize customer lifetime value.",
  },
  {
    num: "05",
    title: "Analytics & Attribution",
    description:
      "Advanced first-party tracking, attribution modeling, and dashboards so you know exactly what's driving revenue.",
  },
  {
    num: "06",
    title: "Organic Growth",
    description:
      "Content strategy, SEO, and social media management that builds authority, drives organic traffic, and reduces CAC over time.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-lg">
      <div className="container-content">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-label text-accent mb-6">What We Do</p>
          <h2 className="heading-section max-w-2xl">
            Full-Funnel Growth{" "}
            <span className="text-gradient-accent">Services</span>
          </h2>
        </div>

        {/* Numbered Service List */}
        <div>
          {services.map((service) => (
            <div key={service.num} className="service-list-item">
              <span className="service-number">{service.num}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20">
          <Link to="/services" className="btn-ghost">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
