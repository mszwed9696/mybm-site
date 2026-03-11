import { useParams, Link } from "react-router-dom";
import {
  Megaphone,
  Search,
  Share2,
  MapPin,
  Star,
  Bot,
  Globe,
  Check,
  ChevronDown,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta, JsonLd } from "@/components/seo";
import { CTASection } from "@/components/sections";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ROICalculator } from "@/components/widgets/ROICalculator";
import { ComparisonTable } from "@/components/widgets/ComparisonTable";
import { getServiceBySlug } from "@/data/servicePages";
import NotFound from "./NotFound";

/* ── Icon lookup ── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  Megaphone,
  Search,
  Share2,
  MapPin,
  Star,
  Bot,
  Globe,
};

/* ── Animated counter ── */
function AnimatedStat({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-6 glass-panel inner-glow card-3d overflow-hidden relative transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="gradient-border-top" />
      <p
        className="text-3xl md:text-4xl font-black mb-1"
        style={{ color }}
      >
        {value}
      </p>
      <p
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "hsl(197 24% 94% / 0.5)" }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── FAQ Accordion ── */
function FAQItem({
  question,
  answer,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className="border-b transition-all"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span
          className="text-base font-bold pr-4"
          style={{ color: "#fff" }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          className="shrink-0 transition-transform duration-300"
          style={{
            color: "rgba(244,244,245,0.7)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "rgba(244,244,245,0.7)" }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
 Main ServicePage Component
 ══════════════════════════════════════════════════════ */
export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Scroll to top on service change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <NotFound />;

  const IconComponent = iconMap[service.iconName] || Zap;

  return (
    <Layout noPaddingTop>
      <PageMeta
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.metaKeywords}
        canonicalPath={`/services/${service.slug}`}
      />
      <JsonLd
        type="Service"
        serviceName={service.title}
        serviceDescription={service.metaDescription}
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* ── HERO ── */}
      <PageHero
        label={service.heroSubtitle}
        title={<>{service.title}</>}
        description={service.heroDescription}
      />

      {/* Main Content Wrapper for Sweep-Over Effect */}
      <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">

        {/* ── PAIN POINT ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Big stat */}
                <div className="text-center md:text-left">
                  <p
                    className="text-7xl md:text-8xl font-black mb-2"
                    style={{ color: service.accentColor }}
                  >
                    {service.painPointStat}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "rgba(244,244,245,0.7)" }}>
                    {service.painPointStatLabel}
                  </p>
                </div>

                {/* Pain point copy */}
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-black mb-4"
                    style={{ color: "#fff" }}
                  >
                    {service.painPointHeadline}
                  </h2>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(244,244,245,0.7)" }}
                  >
                    {service.painPointDescription}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── OUR APPROACH + COMPARISON ── */}
        <section className="py-20 md:py-28" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-12">
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ color: service.accentColor }}
                >
                  We're changing the game
                </p>
                <h2
                  className="text-3xl md:text-4xl font-black mb-4"
                  style={{ color: "#fff" }}
                >
                  {service.approachHeadline}
                </h2>
                <p
                  className="text-base leading-relaxed max-w-2xl mx-auto"
                  style={{ color: "rgba(244,244,245,0.7)" }}
                >
                  {service.approachDescription}
                </p>
              </div>
            </AnimatedSection>

            {/* Approach points */}
            <AnimatedSection delay={0.1}>
              <div className="grid md:grid-cols-2 gap-4 mb-14">
                {service.approachPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl glass-panel inner-glow relative overflow-hidden"
                  >
                    <div className="gradient-border-top" />
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: service.accentColor + "15" }}
                    >
                      <Check size={14} style={{ color: service.accentColor }} />
                    </div>
                    <span className="text-sm font-medium text-white">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Comparison table */}
            <AnimatedSection delay={0.2}>
              <h3
                className="text-xl font-bold text-center mb-6"
                style={{ color: "#fff" }}
              >
                Long gone are the days of paying retainers and hoping for results.
              </h3>
              <ComparisonTable oldWay={service.oldWay} mybWay={service.mybWay} />
            </AnimatedSection>
          </div>
        </section>

        {/* ── ROI CALCULATOR ── */}
        <section
          id="roi-calculator"
          className="py-20 md:py-28"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-10">
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ color: service.accentColor }}
                >
                  Interactive ROI Calculator
                </p>
                <h2
                  className="text-3xl md:text-4xl font-black mb-3"
                  style={{ color: "hsl(197 24% 94%)" }}
                >
                  See what {service.title.toLowerCase()} can do for you
                </h2>
                <p className="text-sm" style={{ color: "hsl(197 24% 94% / 0.5)" }}>
                  Real numbers based on industry benchmarks. Not guesses.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <ROICalculator
                config={service.roiCalculator}
                accentColor={service.accentColor}
              />
            </AnimatedSection>
          </div>
        </section>

        {/* ── BENCHMARKS ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-12">
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ color: service.accentColor }}
                >
                  Industry Benchmarks
                </p>
                <h2
                  className="text-3xl md:text-4xl font-black"
                  style={{ color: "hsl(197 24% 94%)" }}
                >
                  The numbers don't lie
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.benchmarks.map((bm, i) => (
                <AnimatedStat
                  key={bm.value}
                  value={bm.label}
                  label={bm.value}
                  color={service.accentColor}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {service.benchmarks.map((bm) => (
                <p
                  key={bm.description}
                  className="text-center text-xs"
                  style={{ color: "hsl(197 24% 94% / 0.35)" }}
                >
                  {bm.description}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="py-20 md:py-28" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-12">
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ color: service.accentColor }}
                >
                  What's Included
                </p>
                <h2
                  className="text-3xl md:text-4xl font-black"
                  style={{ color: "#fff" }}
                >
                  Everything you need. Nothing you don't.
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid md:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 rounded-xl glass-panel inner-glow card-3d overflow-hidden relative group"
                  >
                    <div className="gradient-border-top" />
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: service.accentColor + "15" }}
                    >
                      <Check size={14} style={{ color: service.accentColor }} />
                    </div>
                    <span className="text-sm font-medium text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── TRAILBLAZER BANNER ── */}
        <section
          className="py-16 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${service.accentColor} 0%, rgba(20, 20, 25, 0.9) 100%)`,
          }}
        >
          <div className="gradient-border-top" />
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              We're not another agency. We're trailblazers.
            </h2>
            <p className="text-base text-white/80 max-w-2xl mx-auto mb-6">
              We're changing how the agency model works. No more paying retainers upfront and hoping for results. With Mind Your Business Media, you pay exactly for what you need — only for what you need — and we deliver real, measurable outcomes.
            </p>
            <Link
              to="/free-audit"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={{
                background: "#fff",
                color: service.accentColor,
              }}
            >
              Start Your Free Audit
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-10">
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-3"
                  style={{ color: service.accentColor }}
                >
                  Frequently Asked Questions
                </p>
                <h2
                  className="text-3xl md:text-4xl font-black"
                  style={{ color: "#fff" }}
                >
                  Got questions? We've got answers.
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                {service.faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === i}
                    toggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection />
      </div>
    </Layout>
  );
}
