import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { CTASection } from "@/components/sections";
import { Check, Shield, TrendingUp, Users, Target, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function TheUnderboss() {
    return (
        <Layout noPaddingTop>
            <PageMeta
                title="The Underboss Package | Mind Your Business Media"
                description="Full operation. Zero guesswork. Total control. We build, manage, and scale the systems that drive your customer acquisition."
                canonicalPath="/packages/the-underboss"
            />

            <PageHero
                label="The Executive Tier"
                title={
                    <>
                        The Underboss <br className="hidden md:block" />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-rose-400">
                            Package
                        </span>
                    </>
                }
                description="Full operation. Zero guesswork. Total control. You bring the offer. We bring the army."
            />

            {/* Main Content Wrapper for Sweep-Over Effect */}
            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">
                {/* Core Description Structure */}
                <section className="py-24" style={{ backgroundColor: "#141419" }}>
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2
                                className="text-3xl md:text-5xl font-bold mb-6"
                                style={{ color: "#fff" }}
                            >
                                Execution Without the Ego.
                            </h2>
                            <div
                                className="w-20 h-1 mb-8"
                                style={{ backgroundColor: "#af3e4d" }}
                            ></div>
                            <p
                                className="text-lg leading-relaxed mb-6"
                                style={{ color: "rgba(244,244,245,0.8)" }}
                            >
                                You already have a proven offer. You don't need a massive personal brand or a camera crew following you around. You just need a ruthless execution team that knows how to turn ad spend into highly-qualified, booked service calls.
                            </p>
                            <p
                                className="text-lg leading-relaxed mb-6"
                                style={{ color: "rgba(244,244,245,0.8)" }}
                            >
                                The Underboss Package gives you all the operational firepower of a top-tier agency—funnels, Meta & Google ads, and CRM automations that actually convert—without the bloated "celebrity" markup. We are the operators running the machine behind your local dominance.
                            </p>
                            <p
                                className="text-lg leading-relaxed font-semibold italic"
                                style={{ color: "#af3e4d" }}
                            >
                                Stop paying agencies to learn on your dime. You bring the offer and the trucks. We bring the army.
                            </p>
                        </div>
                        {/* Dual Pricing Layout */}
                        <div className="relative flex flex-col gap-6">
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-[#af3e4d]/20 to-transparent rounded-3xl blur-3xl -z-10"
                            ></div>
                            <img
                                src="/images/packages/underboss.png"
                                alt="Sleek high-tech corporate war room showing analytics"
                                className="rounded-3xl shadow-2xl border w-full object-cover mb-4"
                                style={{ borderColor: "rgba(255,255,255,0.1)", aspectRatio: "16/9" }}
                            />

                            {/* Pricing Cards Container */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Option A: Monthly */}
                                <div className="p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden glass-panel inner-glow card-3d bg-[#1a1a24]/50">
                                    <div className="gradient-border-top" />
                                    <div className="relative z-10">
                                        <p className="text-sm uppercase tracking-widest text-[#af3e4d] font-bold mb-1">
                                            Option A
                                        </p>
                                        <h4 className="text-xl font-bold text-white mb-2">90-Day Monthly</h4>
                                        <p className="text-3xl font-black text-white mb-1">
                                            $9,000<span className="text-lg text-gray-400">/mo</span>
                                        </p>
                                        <p className="text-xs text-gray-400 mb-4">+ Performance Incentives</p>
                                    </div>
                                    <ul className="text-sm text-gray-400 space-y-2 mb-6 relative z-10">
                                        <li className="flex items-start gap-2"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> Billed every 30 days</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> 90-day minimum lock-in</li>
                                    </ul>
                                    <Link
                                        to="/free-audit"
                                        className="block text-center py-3 rounded-xl font-bold text-white border border-[#af3e4d]/50 hover:bg-[#af3e4d]/10 transition-colors relative z-10"
                                    >
                                        Select Monthly
                                    </Link>
                                </div>

                                {/* Option B: Pay In Full (Highlighted) */}
                                <div className="p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden glass-panel inner-glow card-3d bg-gradient-to-b from-[#af3e4d]/20 to-transparent border border-[#af3e4d]/50 shadow-[0_0_30px_rgba(175,62,77,0.2)]">
                                    <div className="gradient-border-top" style={{ background: 'linear-gradient(90deg, transparent, #af3e4d, transparent)' }} />
                                    <div className="absolute top-0 right-0 bg-[#af3e4d] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                        Smart Partner Choice
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-sm uppercase tracking-widest text-[#af3e4d] font-bold mb-1">
                                            Option B
                                        </p>
                                        <h4 className="text-xl font-bold text-white mb-2">90-Day Paid in Full</h4>
                                        <p className="text-3xl font-black text-white mb-1">
                                            $24,000<span className="text-lg text-gray-400"> total</span>
                                        </p>
                                        <p className="text-xs text-[#10b981] font-bold mb-4">Save $3,000 instantly</p>
                                    </div>
                                    <ul className="text-sm text-gray-400 space-y-2 mb-6 relative z-10">
                                        <li className="flex items-start gap-2 text-white"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> Direct to ROI baseline faster</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> Streamlined onboarding</li>
                                    </ul>
                                    <Link
                                        to="/free-audit"
                                        className="block text-center py-3 rounded-xl font-bold text-white bg-[#af3e4d] hover:bg-[#90303d] shadow-[0_0_20px_rgba(175,62,77,0.4)] transition-all hover:scale-[1.02] relative z-10"
                                    >
                                        Select Pay In Full
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* What's Included */}
                <section className="py-24" style={{ backgroundColor: "#1a1a24" }}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2
                                className="text-3xl md:text-4xl font-bold mb-4"
                                style={{ color: "#fff" }}
                            >
                                What's Included
                            </h2>
                            <p
                                className="text-lg"
                                style={{ color: "rgba(244,244,245,0.7)" }}
                            >
                                The complete execution machinery to scale a proven offer.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: TrendingUp, title: "Paid Ads", desc: "Full paid advertising management (Meta, Google, YouTube)" },
                                { icon: Target, title: "Funnel Builds", desc: "Complete funnel builds: lead gen, VSL, webinar" },
                                { icon: Zap, title: "CRM & Automations", desc: "CRM + automations stack to handle lead flow" },
                                { icon: Settings, title: "Strategy", desc: "Marketing strategy & continuous optimization" },
                                { icon: Users, title: "Account Manager", desc: "Dedicated account manager + bi-weekly strategy calls" },
                                { icon: Shield, title: "The Concierge Add-On", desc: "Option to add The Concierge (Back-End Sales)" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-8 rounded-2xl transition-all hover:-translate-y-1 relative overflow-hidden glass-panel inner-glow card-3d"
                                >
                                    <div className="gradient-border-top" />
                                    <div className="relative z-10">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                            style={{ backgroundColor: "rgba(175, 62, 77, 0.1)" }}
                                        >
                                            <item.icon size={24} style={{ color: "#af3e4d" }} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-sm" style={{ color: "rgba(244,244,245,0.7)" }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who It's For & Mob Logic */}
                <section className="py-24" style={{ backgroundColor: "#141419" }}>
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                        <div className="p-10 rounded-3xl relative overflow-hidden glass-panel inner-glow card-3d">
                            <div className="gradient-border-top" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Target className="text-[#af3e4d]" /> Who It's For
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Operators who already have a proven offer and just need the execution team to scale it. You don't need the spotlight; you just need the revenue. You demand transparent ROI and refuse to work with agencies that hide behind vanity metrics like "impressions" when you're looking for closed jobs.
                                </p>
                            </div>
                        </div>
                        <div className="p-10 rounded-3xl relative overflow-hidden glass-panel inner-glow card-3d">
                            <div className="gradient-border-top" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#af3e4d] opacity-5 blur-[100px] rounded-full point-events-none"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Shield className="text-[#af3e4d]" /> The Mechanism
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    The Underboss doesn't need to be on the front page of the paper. He just needs to make sure the family gets paid. This is a pure execution play. No fluff, just brutal efficiency in acquiring customers and pushing them into your sales pipeline.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#0a0a0f" }}>
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-4xl font-black text-white mb-6">Scale your operation today.</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Apply for The Underboss package to inject operational firepower into your proven offer.
                        </p>
                        <Link
                            to="/free-audit"
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold text-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(175,62,77,0.3)] hover:shadow-[0_0_50px_rgba(175,62,77,0.5)] bg-[#af3e4d]"
                        >
                            Request a Strategy Session
                        </Link>
                    </div>
                </section>

                <CTASection />
            </div>
        </Layout>
    );
}
