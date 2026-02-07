import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";
import { Check } from "lucide-react";

const industries = [
  {
    title: "Dietary Supplements",
    description: "General health vitamins, minerals, and daily wellness supplements for mass-market and premium positioning.",
    keywords: ["Vitamins", "Minerals", "Daily Wellness", "Multivitamins"],
  },
  {
    title: "Nutraceuticals",
    description: "Pharmaceutical-grade supplements and functional ingredients targeting specific health outcomes.",
    keywords: ["Functional Foods", "Pharmaceutical-Grade", "Clinical Formulations"],
  },
  {
    title: "Sports Nutrition",
    description: "Performance-focused supplements including protein, pre-workout, BCAAs, creatine, and recovery formulas.",
    keywords: ["Protein Powder", "Pre-Workout", "BCAAs", "Creatine", "Recovery"],
  },
  {
    title: "Weight Management",
    description: "Fat burners, metabolism boosters, appetite suppressants, and comprehensive weight loss supplement systems.",
    keywords: ["Fat Burners", "Metabolism", "Appetite Control", "Weight Loss"],
  },
  {
    title: "Cognitive & Nootropics",
    description: "Brain health supplements, nootropics, focus enhancers, and cognitive performance products.",
    keywords: ["Nootropics", "Brain Health", "Focus", "Memory", "Cognitive"],
  },
  {
    title: "Gut Health & Immunity",
    description: "Probiotics, digestive enzymes, greens powders, and immune support supplement formulations.",
    keywords: ["Probiotics", "Digestive Health", "Immunity", "Greens Powder"],
  },
  {
    title: "Beauty & Collagen",
    description: "Collagen peptides, anti-aging supplements, hair/skin/nail formulas, and beauty-from-within products.",
    keywords: ["Collagen", "Anti-Aging", "Hair Skin Nails", "Beauty"],
  },
  {
    title: "Plant-Based & Specialty",
    description: "Vegan proteins, plant-based supplements, herbal formulations, and botanical extract products.",
    keywords: ["Plant Protein", "Vegan", "Herbal", "Botanical", "Organic"],
  },
];

const idealClient = [
  "Doing at least $50,000/month in revenue (or have funding to scale)",
  "Currently running paid ads or ready to invest in paid traffic",
  "Have product-market fit with repeat customers",
  "Ready to commit to a 90-day growth partnership",
  "Want a revenue partner, not just another agency",
  "Open to performance-based compensation structure",
];

export default function WhoWeWorkWith() {
  return (
    <Layout>
      <PageMeta
        title="Who We Work With | Mind Your Business Media — Supplement & Nutraceutical Brands"
        description="We exclusively partner with supplement, nutraceutical, sports nutrition, and wellness brands ready to scale profitably. See if you're a fit."
        keywords="supplement brand marketing, nutraceutical brand growth, sports nutrition agency, wellness brand marketing, dietary supplement advertising, collagen marketing, nootropics marketing"
        canonicalPath="/who-we-work-with"
      />
      <JsonLd
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Who We Work With", path: "/who-we-work-with" },
        ]}
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium mb-4">Who We Work With</p>
            <h1 className="heading-xl mb-6 glow-text">
              Built For{" "}
              <span className="text-gradient-accent">Supplement Brands</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We exclusively partner with supplement, nutraceutical, and health brands 
              ready to scale profitably. Our entire system is built around this vertical.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              Industries We{" "}
              <span className="text-gradient">Specialize In</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep expertise in supplement compliance, creative frameworks, and 
              scaling strategies specific to these categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.title} className="glow-card p-6">
                <h3 className="text-lg font-semibold mb-3">{industry.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Client */}
      <section className="section-padding bg-card/50">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium mb-4">Ideal Partnership</p>
              <h2 className="heading-lg mb-6">
                You're a Great Fit If...
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're selective about who we partner with because our model requires 
                deep collaboration. Here's who we work best with:
              </p>
            </div>
            <div className="glow-card p-8">
              <ul className="space-y-4">
                {idealClient.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-accent" size={14} />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Scale Your Supplement Brand?"
        subtitle="Let's see if we're a good fit. Get a free performance audit and discover your growth opportunities."
      />
    </Layout>
  );
}
