import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { CTASection } from "@/components/sections";
import { Check, Shield, TrendingUp, Users, Target, Zap, Star, Bot, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function TheGodfather() {
    return (
        <Layout noPaddingTop>
            <PageMeta
                title="The Godfather Package | Mind Your Business Media"
                description="The whole empire. Built, run, and grown for you. Full celebrity personal brand buildout, ad campaigns, funnels, and backend revenue mechanisms."
                canonicalPath="/packages/the-godfather"
            />

            <PageHero
                label="The Elite Tier"
                title={
                    <>
                        The Godfather <br className="hidden md:block" />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-rose-400">
                            Package
                        </span>
                    </>
                }
                description="The antidote to cookie-cutter marketing factories. We build your empire, flood your pipeline with qualified service calls, and take revenue share. We eat when you eat."
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
                                End the Account Manager Roulette.
                            </h2>
                            <div
                                className="w-20 h-1 mb-8"
                                style={{ backgroundColor: "#af3e4d" }}
                            ></div>
                            <p
                                className="text-lg leading-relaxed mb-6"
                                style={{ color: "rgba(244,244,245,0.8)" }}
                            >
                                You've tried the big box agencies. You've been sold the dream by slick salespeople, only to be handed off to a junior account manager who doesn't understand your margins, your market, or the difference between a $150 tune-up and a $15,000 install.
                            </p>
                            <p
                                className="text-lg leading-relaxed mb-6"
                                style={{ color: "rgba(244,244,245,0.8)" }}
                            >
                                The Godfather Package isn't a "set and forget" ad campaign. It's a top-to-bottom takeover of your revenue acquisition. We build out your celebrity authority, deploy our proprietary objection-handling automations, and manage your Meta and Google budgets daily.
                            </p>
                            <p
                                className="text-lg leading-relaxed font-semibold italic"
                                style={{ color: "#af3e4d" }}
                            >
                                No offshore teams. No generic templates. We become your dedicated Consigliere, directly accountable for keeping your comfort advisors booked and your trucks rolling year-round.
                            </p>
                        </div>
                        {/* Dual Pricing Layout */}
                        <div className="relative flex flex-col gap-6">
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-[#af3e4d]/20 to-transparent rounded-3xl blur-3xl -z-10"
                            ></div>
                            <img
                                src="/images/packages/godfather.png"
                                alt="Cinematic modern corporate mafia boss office"
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
                                            $16,000<span className="text-lg text-gray-400">/mo</span>
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
                                    <div>
                                        <p className="text-sm uppercase tracking-widest text-[#af3e4d] font-bold mb-1">
                                            Option B
                                        </p>
                                        <h4 className="text-xl font-bold text-white mb-2">90-Day Paid in Full</h4>
                                        <p className="text-3xl font-black text-white mb-1">
                                            $42,000<span className="text-lg text-gray-400"> total</span>
                                        </p>
                                        <p className="text-xs text-[#10b981] font-bold mb-4">Save $6,000 instantly</p>
                                    </div>
                                    <ul className="text-sm text-gray-400 space-y-2 mb-6 relative z-10">
                                        <li className="flex items-start gap-2 text-white"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> Best for cash-flow healthy ops</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> Locks in dedicated team</li>
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
                                The Full Arsenal
                            </h2>
                            <p
                                className="text-lg"
                                style={{ color: "rgba(244,244,245,0.7)" }}
                            >
                                Everything required to dominate your local market. No holds barred.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Star, title: "Authority Buildout", desc: "Turn the owner into the definitive local celebrity in your market." },
                                { icon: TrendingUp, title: "The Racket (Ads)", desc: "Relentless U.S.-managed Paid Ads engineered for ROAS, not just clicks." },
                                { icon: Share2, title: "The Omertà (SEO)", desc: "Quiet, undeniable map-pack dominance and high-converting content." },
                                { icon: Target, title: "The Operation", desc: "Full funnel builds: lead gen, VSLs, and high-ticket service booking flows." },
                                { icon: Bot, title: "The Capo (CRM)", desc: "Objection-mapped automations that follow up instantly and relentlessly." },
                                { icon: Zap, title: "The Concierge", desc: "Back-end database reactivation to turn cold leads into maintenance plans." },
                                { icon: Users, title: "The Underboss", desc: "Your dedicated, senior-level account lead. Zero junior hand-offs." },
                                { icon: Shield, title: "Godfather Guarantee", desc: "Performance incentives tied directly to your agreed KPIs." },
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
                                    This package is reserved for 7-to-8-figure operators who are sick of acting as the "firefighter-in-chief" for their agency vendor. You know your numbers, you have comfort advisors hungry for qualified board placements, and you're ready to buy predictable pipeline stability over cheap, unqualified "jelly bean" leads.
                                </p>
                            </div>
                        </div>
                        <div className="p-10 rounded-3xl relative overflow-hidden glass-panel inner-glow card-3d">
                            <div className="gradient-border-top" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#af3e4d] opacity-5 blur-[100px] rounded-full point-events-none"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Shield className="text-[#af3e4d]" /> The Promise
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Every great empire has a Don, but the Don doesn't run every street corner himself. He has a system and a consigliere who ensures execution. We are your execution. We map our systems directly to your sales objections, guaranteeing that every dollar spent is an investment in your territory's dominance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#0a0a0f" }}>
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-4xl font-black text-white mb-6">Ready to claim your territory?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            We strictly cap our partnerships to ensure we deliver maximum impact for every client. Book your introductory strategy call to see if your market is still available.
                        </p>
                        <Link
                            to="/free-audit"
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold text-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(175,62,77,0.3)] hover:shadow-[0_0_50px_rgba(175,62,77,0.5)] bg-[#af3e4d]"
                        >
                            Apply for Partnership
                        </Link>
                    </div>
                </section>

                <CTASection />
            </div>
        </Layout>
    );
}
