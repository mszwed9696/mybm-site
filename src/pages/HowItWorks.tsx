import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";
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
          <Layout noPaddingTop>
               <PageMeta
                    title="How It Works | Mind Your Business Media — Our 5-Step Growth Process"
                    description="From free audit to scaled success — discover our 5-step process for driving profitable growth for supplement brands. Performance-aligned pricing."
                    keywords="supplement marketing process, performance marketing agency process, supplement growth roadmap, supplement brand scaling, ROAS optimization process"
                    canonicalPath="/how-it-works"
               />
               <JsonLd
                    type="BreadcrumbList"
                    breadcrumbs={[
                         { name: "Home", path: "/" },
                         { name: "How It Works", path: "/how-it-works" },
                    ]}
               />
               {/* Hero */}
               <PageHero
                    label="How It Works"
                    title={<>Our Process For{" "} <span className="text-gradient-accent">Profitable Growth</span></>}
                    description="From free audit to scaled success — here's exactly how we work 
 with supplement brands to drive revenue."
               />

               {/* Main Content Wrapper for Sweep-Over Effect */}
               <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">

                    {/* Steps */}
                    <section className="section-padding">
                         <div className="container-wide">
                              <div className="space-y-8">
                                   {steps.map((step, index) => (
                                        <div key={step.number} className="p-8 md:p-12 rounded-2xl relative overflow-hidden glass-panel inner-glow card-3d bg-[#141419]/50 mb-8">
                                             <div className="gradient-border-top" />
                                             <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-start">
                                                  <div>
                                                       <div className="flex items-center gap-4 mb-6">
                                                            <span className="text-5xl font-bold" style={{ color: "rgba(175, 62, 77, 0.3)" }}>
                                                                 {step.number}
                                                            </span>
                                                            <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                                                       </div>
                                                       <p className="text-lg" style={{ color: "rgba(244,244,245,0.7)" }}>
                                                            {step.description}
                                                       </p>
                                                  </div>
                                                  <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(10, 10, 15, 0.5)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                                       <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: "#af3e4d" }}>
                                                            What's Included
                                                       </h3>
                                                       <ul className="space-y-3">
                                                            {step.details.map((detail) => (
                                                                 <li key={detail} className="flex items-center gap-3">
                                                                      <ArrowRight className="flex-shrink-0" style={{ color: "#af3e4d" }} size={16} />
                                                                      <span style={{ color: "rgba(244,244,245,0.7)" }}>{detail}</span>
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
                                   <p className="font-medium mb-4 uppercase tracking-widest text-sm" style={{ color: "#af3e4d" }}>Engagement Model</p>
                                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                        Performance-Aligned{" "}
                                        <span style={{ color: "#af3e4d" }}>Pricing</span>
                                   </h2>
                                   <p className="text-xl max-w-2xl mx-auto italic" style={{ color: "rgba(244,244,245,0.7)" }}>
                                        "We only win when you win."
                                   </p>
                              </div>

                              <div className="grid md:grid-cols-3 gap-6">
                                   {pricingDetails.map((item) => (
                                        <div key={item.title} className="p-8 text-center rounded-2xl relative overflow-hidden glass-panel inner-glow card-3d bg-[#1a1a24]/50">
                                             <div className="gradient-border-top" />
                                             <div className="relative z-10">
                                                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                                  <p style={{ color: "rgba(244,244,245,0.7)" }}>{item.description}</p>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </section>

                    <CTASection />
               </div>
          </Layout>
     );
}
