import { Layout } from "@/components/layout";
import { AuditForm } from "@/components/forms";
import { PageMeta, JsonLd } from "@/components/seo";
import { Check } from "lucide-react";

const auditIncludes = [
  "Ad account performance analysis",
  "ROAS and CAC benchmarking",
  "Funnel leak identification",
  "Landing page conversion audit",
  "Email marketing assessment",
  "Tracking and attribution review",
  "Competitive positioning analysis",
  "Custom growth recommendations",
];

export default function FreeAudit() {
  return (
    <Layout>
      <PageMeta
        title="Free Performance Audit | Mind Your Business Media — Discover Hidden Revenue"
        description="Get a free custom audit of your supplement brand's marketing. We identify wasted ad spend, funnel leaks, and ROAS opportunities. Delivered within 48 hours."
        keywords="free marketing audit, supplement brand audit, ROAS audit, ad spend audit, funnel audit, supplement marketing review, free performance audit"
        canonicalPath="/free-audit"
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Free Audit", path: "/free-audit" },
        ]}
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-accent font-medium mb-4">Free Performance Audit</p>
              <h1 className="heading-xl mb-6 glow-text">
                Discover Your{" "}
                <span className="text-gradient-accent">Hidden Revenue</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get a custom audit of your supplement brand's marketing performance. 
                We'll identify wasted ad spend, funnel leaks, and ROAS opportunities 
                specific to your business.
              </p>

              <div className="glow-card p-6 mb-8">
                <h3 className="font-semibold mb-4 text-accent">Your Audit Includes:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {auditIncludes.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="text-accent flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Delivered within 48 hours
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  100% free, no obligation
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <AuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow text-center">
          <h2 className="heading-lg mb-6">
            What Happens{" "}
            <span className="text-gradient">After You Submit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Here's exactly what to expect once you request your free audit:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glow-card p-8">
              <div className="text-4xl font-bold text-accent/30 mb-4">01</div>
              <h3 className="font-semibold mb-2">We Review</h3>
              <p className="text-muted-foreground text-sm">
                Our team analyzes your website, ads library, and publicly available data.
              </p>
            </div>
            <div className="glow-card p-8">
              <div className="text-4xl font-bold text-accent/30 mb-4">02</div>
              <h3 className="font-semibold mb-2">We Analyze</h3>
              <p className="text-muted-foreground text-sm">
                We identify opportunities, gaps, and quick wins specific to your brand.
              </p>
            </div>
            <div className="glow-card p-8">
              <div className="text-4xl font-bold text-accent/30 mb-4">03</div>
              <h3 className="font-semibold mb-2">We Deliver</h3>
              <p className="text-muted-foreground text-sm">
                You receive a custom audit with actionable recommendations within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
