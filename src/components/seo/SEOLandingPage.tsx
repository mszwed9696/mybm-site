import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageMeta } from "./PageMeta";
import { JsonLd } from "./JsonLd";
import type { LucideIcon } from "lucide-react";

export interface SEOPageSection {
  heading: string;
  body: string;
  bullets?: string[];
  icon?: LucideIcon;
}

export interface SEOPageFAQ {
  question: string;
  answer: string;
}

export interface RelatedPage {
  href: string;
  label: string;
}

export interface SEOLandingPageProps {
  meta: {
    title: string;
    description: string;
    keywords: string;
    canonicalPath: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    subtitle: string;
  };
  intro: {
    heading: string;
    body: string;
    bullets?: string[];
  };
  sections: SEOPageSection[];
  faqs: SEOPageFAQ[];
  relatedPages: RelatedPage[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export function SEOLandingPage({
  meta,
  hero,
  intro,
  sections,
  faqs,
  relatedPages,
  ctaTitle,
  ctaSubtitle,
}: SEOLandingPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [meta.canonicalPath]);

  return (
    <Layout>
      <PageMeta
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonicalPath={meta.canonicalPath}
      />
      <JsonLd type="FAQPage" faqs={faqs} />
      <JsonLd
        type="Service"
        serviceName={hero.headline + " " + hero.headlineAccent}
        serviceDescription={meta.description}
      />

      {/* Hero */}
      <section className="section-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="container-hero relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-label text-accent mb-8 md:mb-10">{hero.eyebrow}</p>
            <h1 className="heading-hero mb-8 md:mb-10">
              {hero.headline}
              <br />
              <span className="text-gradient-accent">{hero.headlineAccent}</span>
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 md:mb-16">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button asChild variant="glow" size="xl" className="text-base px-10 h-14">
                <Link to="/free-audit">
                  Get a Free Performance Audit
                  <ArrowRight className="ml-3" size={18} />
                </Link>
              </Button>
              <Button asChild variant="glow-outline" size="xl" className="text-base px-10 h-14">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Social Proof Bar */}
      <section className="section-sm relative">
        <div className="divider-subtle max-w-4xl mx-auto mb-16 md:mb-20" />
        <div className="container-content">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {[
              { value: "3.5x", label: "Average ROAS" },
              { value: "$50M+", label: "Revenue Generated" },
              { value: "90-Day", label: "Results Timeline" },
              { value: "100%", label: "Performance Aligned" },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
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
        <div className="divider-subtle max-w-4xl mx-auto mt-16 md:mt-20" />
      </section>

      {/* Intro Section */}
      <section className="section-md">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-section mb-8">{intro.heading}</h2>
            <p className="text-body-lg text-muted-foreground mb-8">{intro.body}</p>
            {intro.bullets && (
              <ul className="space-y-4">
                {intro.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={section.heading}
          className={`section-md ${index % 2 === 0 ? "bg-section-alt" : ""}`}
        >
          <div className="container-content">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-subsection mb-6">{section.heading}</h2>
              <p className="text-body-lg text-muted-foreground mb-6">{section.body}</p>
              {section.bullets && (
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="section-md">
          <div className="container-content">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-section mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {faqs.map((faq) => (
                  <div key={faq.question} className="card-minimal p-8">
                    <h3 className="heading-card mb-4">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Pages / Internal Links */}
      {relatedPages.length > 0 && (
        <section className="section-sm bg-section-alt">
          <div className="container-content">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-subsection mb-8 text-center">Related Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="card-minimal p-5 flex items-center justify-between group hover:border-accent/40 transition-colors"
                  >
                    <span className="text-sm font-medium">{page.label}</span>
                    <ArrowRight
                      size={16}
                      className="text-muted-foreground group-hover:text-accent transition-colors"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={ctaTitle || "Ready to Scale Your Brand?"}
        subtitle={
          ctaSubtitle ||
          "Get a free performance audit and discover the hidden revenue opportunities in your current marketing."
        }
      />
    </Layout>
  );
}
