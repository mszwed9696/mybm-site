import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, CheckCircle2, XCircle, TrendingUp, Target,
  Search, ShieldCheck, Zap, DollarSign, Clock
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GoogleAdsPage() {
  return (
    <Layout noPaddingTop>
      <PageMeta
        title="Google Ads Agency for $1M+ Businesses | results-driven strategies"
        description="Scale your business with our performance-based Google Ads management. Only pay for what you need when you need it. data-driven execution."
        keywords="google ads agency, pay for performance marketing, results-driven marketing agency, google ads $1m business"
        canonicalPath="/google-ads"
      />

      {/* Hero Section */}
      <PageHero
        title={
          <>
            Scale With Google Ads. <br className="hidden md:block" />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-rose-400"> Pay Only When We Deliver Revenue. </span>
          </>
        }
        description="Top-tier expertise at a fraction of the cost. Get enterprise-level marketing by only paying for what you need when you need it. No risk."
      />

      {/* Main Content Wrapper for Sweep-Over Effect */}
      <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">

        {/* Pain Points & Gaps (The Anti-Retainer Section) */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Retainer Agencies Fail $1M+ Owners</h2>
              <p className="text-lg text-muted-foreground">
                You've outgrown the cheap freelancers, but bloated agency retainers drain cashflow without guaranteeing results. It's time for a model that actually aligns with your growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Typical Agency */}
              <Card className="border-red-500/20 bg-red-500/5 relative overflow-hidden glass-panel inner-glow card-3d">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                    <XCircle className="text-red-500 mr-3 h-6 w-6" /> The Typical Agency
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-muted-foreground">
                      <DollarSign className="h-5 w-5 mr-3 shrink-0 text-red-400 mt-0.5" />
                      <span><strong>Monthly Retainers:</strong> $5K-$10K/mo upfront before you see a single lead.</span>
                    </li>
                    <li className="flex items-start text-muted-foreground">
                      <Target className="h-5 w-5 mr-3 shrink-0 text-red-400 mt-0.5" />
                      <span><strong>Multi-Channel Dilution:</strong> They upsell SEO, social, and email instead of mastering intent-driven search.</span>
                    </li>
                    <li className="flex items-start text-muted-foreground">
                      <Clock className="h-5 w-5 mr-3 shrink-0 text-red-400 mt-0.5" />
                      <span><strong>No Skin In The Game:</strong> They get paid regardless of your return on ad spend (ROAS).</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Mind Your Business Media - Us */}
              <Card className="border-primary/50 bg-primary/5 relative overflow-hidden shadow-lg shadow-primary/10 glass-panel inner-glow card-3d">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                    <CheckCircle2 className="text-primary mr-3 h-6 w-6" /> Mind Your Business Media
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start text-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 mr-3 shrink-0 text-primary mt-0.5" />
                      <span><strong>Pay-Per-Result:</strong> You only pay when we hit agreed-upon revenue markers. </span>
                    </li>
                    <li className="flex items-start text-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 mr-3 shrink-0 text-primary mt-0.5" />
                      <span><strong>Google Ads Exclusive:</strong> Precision targeting for high-ticket buyers at the lowest possible CAC.</span>
                    </li>
                    <li className="flex items-start text-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 mr-3 shrink-0 text-primary mt-0.5" />
                      <span><strong>Tied to Your Revenue:</strong> We eat what we kill. Our success is 100% mathematically tied to yours.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The No-BS Value Proposition */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto glass-panel inner-glow card-3d relative overflow-hidden bg-muted/50 border border-border/50">
              <div className="gradient-border-top" />
              <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Drop the retainer. Only pay for what you need when you need it.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                We're completely changing the agency model. By leveraging AI automation for the busywork and keeping our world-class human experts focused purely on high-level strategy, we deliver enterprise-level Google Ads management at a fraction of the cost.
              </p>
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link to="/contact">Let's Scale Your Business Profitably</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works (3-Step Process) */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Performance-Based Process</h2>
              <p className="text-lg text-muted-foreground">
                A streamlined, transparent partnership built entirely around your profitability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border -z-10" />

              {/* Step 1 */}
              <div className="rounded-2xl p-8 text-center relative z-0 glass-panel inner-glow card-3d overflow-hidden bg-background/50 border">
                <div className="gradient-border-top" />
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-primary/20">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Free ROAS Audit</h3>
                <p className="text-muted-foreground">
                  We analyze your historical Google Ads data, identify wasted spend, and forecast your true revenue potential before you commit to anything.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl p-8 text-center relative z-0 glass-panel inner-glow card-3d overflow-hidden bg-background/50 border">
                <div className="gradient-border-top" />
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-primary/20">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Launch & Optimize</h3>
                <p className="text-muted-foreground">
                  We rebuild your campaigns utilizing data-driven intent matching, cutting-edge AI bidding strategies, and proven ad copy frameworks.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl p-8 text-center relative z-0 glass-panel inner-glow card-3d overflow-hidden bg-background/50 border">
                <div className="gradient-border-top" />
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-primary/20">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Pay For Results</h3>
                <p className="text-muted-foreground">
                  You only pay a percentage of the tracked revenue or ROAS we generate above your baseline. If you don't scale, we don't get paid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Google Ads Exclusive */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <Badge variant="outline" className="mb-4">Why Google Ads?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Highest Intent Platform on Earth.</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  While other agencies try to sell you TikTok dances and Facebook brand awareness campaigns, we focus strictly on capturing the people who are actively searching for your high-ticket services right now.
                </p>
                <ul className="space-y-4 mb-8 text-muted-foreground">
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Capture high-intent, bottom-of-funnel traffic</li>
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Measurable, direct-response ROI tracking</li>
                  <li className="flex items-center"><CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Highest conversion rates for local service & B2B</li>
                </ul>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies">See Our Case Studies</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl -z-10" />
                <div className="rounded-3xl p-8 glass-panel inner-glow card-3d relative overflow-hidden bg-muted/50 border shadow-2xl">
                  <div className="gradient-border-top" />
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-border/50">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Ad Spend</p>
                      <p className="text-2xl font-bold">$14,250</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Revenue Generated</p>
                      <p className="text-2xl font-bold text-green-500">$98,400</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <TrendingUp className="h-8 w-8 text-primary mr-4" />
                      <div>
                        <p className="font-bold text-xl">6.9x ROAS</p>
                        <p className="text-sm text-muted-foreground">Return on Ad Spend</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      Verified Result
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Urgency CTA */}
        <section className="py-24 relative overflow-hidden bg-foreground text-background">
          <div className="absolute inset-0 bg-primary/10" />
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Get $10K+ in Free Google Ads Value Today.
              </h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                We only partner with $1M+ businesses where we know we can drive massive ROI. Let us audit your account for free to see if you qualify.
              </p>
              <Button size="lg" className="h-14 px-10 text-lg bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/free-audit">Claim Your Free ROAS Audit</Link>
              </Button>
              <p className="text-sm opacity-70 mt-6 mt-4">
                Limited slots available. We strictly cap our performance partnerships to ensure quality.
              </p>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
