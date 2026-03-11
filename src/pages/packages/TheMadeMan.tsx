import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { CTASection } from "@/components/sections";
import { Check, Shield, Users, Target, Zap, PhoneCall, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function TheMadeMan() {
    return (
        <Layout noPaddingTop>
            <PageMeta
                title="The Made Man Package | Mind Your Business Media"
                description="One investment. Your seat at the table. Forever. Foundational systems, templates, and SOPs."
                canonicalPath="/packages/the-made-man"
            />

            <PageHero
                label="The Blueprint Tier"
                title={
                    <>
                        The Made Man <br className="hidden md:block" />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-rose-400">
                            Package
                        </span>
                    </>
                }
                description="One investment. Your seat at the table. Forever. You buy the playbook. You run the plays."
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
                                Access The Vault.
                            </h2>
                            <div
                                className="w-20 h-1 mb-8"
                                style={{ backgroundColor: "#af3e4d" }}
                            ></div>
                            <p
                                className="text-lg leading-relaxed mb-6"
                                style={{ color: "rgba(244,244,245,0.8)" }}
                            >
                                Most business owners are stuck grinding away on the execution because they don't have the systems. They try to invent their own ad playbooks, write their own nurture sequences, and build their CRMs from scratch.
                            </p>
                            <p
                                className="text-lg leading-relaxed mb-6"
                                style={{ color: "rgba(244,244,245,0.8)" }}
                            >
                                The Made Man is a one-time initiation designed for operators who have the hustle but lack the architecture. You get direct access to our foundational systems, templates, and standard operating procedures (SOPs) without paying an agency retainer.
                            </p>
                            <p
                                className="text-lg leading-relaxed font-semibold italic"
                                style={{ color: "#af3e4d" }}
                            >
                                Stop guessing. Just deploy the exact systems we use to scale 7-figure empires.
                            </p>
                        </div>
                        {/* Dual Pricing Layout */}
                        <div className="relative flex flex-col gap-6">
                            <div
                                className="absolute inset-0 bg-gradient-to-bl from-[#af3e4d]/20 to-transparent rounded-3xl blur-3xl -z-10"
                            ></div>
                            <img
                                src="/images/packages/mademan.png"
                                alt="A single high-end metallic briefcase open on a dark polished wood table"
                                className="rounded-3xl shadow-2xl border w-full object-cover mb-4"
                                style={{ borderColor: "rgba(255,255,255,0.1)", aspectRatio: "16/9" }}
                            />

                            {/* Pricing Cards Container */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Option A: Payment Plan */}
                                <div className="p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden glass-panel inner-glow card-3d bg-[#1a1a24]/50">
                                    <div className="gradient-border-top" />
                                    <div className="relative z-10">
                                        <p className="text-sm uppercase tracking-widest text-[#af3e4d] font-bold mb-1">
                                            Option A
                                        </p>
                                        <h4 className="text-xl font-bold text-white mb-2">Split Payment</h4>
                                        <p className="text-3xl font-black text-white mb-1">
                                            $600<span className="text-lg text-gray-400">/mo</span>
                                        </p>
                                        <p className="text-xs text-transparent mb-4">_</p>
                                    </div>
                                    <ul className="text-sm text-gray-400 space-y-2 mb-6 relative z-10">
                                        <li className="flex items-start gap-2"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> 2 monthly payments</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> Immediate vault access</li>
                                    </ul>
                                    <Link
                                        to="/free-audit"
                                        className="block text-center py-3 rounded-xl font-bold text-white border border-[#af3e4d]/50 hover:bg-[#af3e4d]/10 transition-colors relative z-10"
                                    >
                                        Select Split Pay
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
                                        <h4 className="text-xl font-bold text-white mb-2">Paid in Full</h4>
                                        <p className="text-3xl font-black text-white mb-1">
                                            $1,000<span className="text-lg text-gray-400"> total</span>
                                        </p>
                                        <p className="text-xs text-[#10b981] font-bold mb-4">Save $200 instantly</p>
                                    </div>
                                    <ul className="text-sm text-gray-400 space-y-2 mb-6 relative z-10">
                                        <li className="flex items-start gap-2 text-white"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> Lifetime updates</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-[#af3e4d] shrink-0 mt-0.5" /> Priority onboarding call</li>
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
                                The exact blueprint we use to scale 7-figure empires.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Zap, title: "CRM Blueprint", desc: "Complete CRM architecture and system snapshot plug-and-play" },
                                { icon: BookOpen, title: "Ad Playbooks", desc: "Core advertising playbooks for Meta & Google that actually convert" },
                                { icon: Target, title: "Funnel Templates", desc: "Essential battle-tested funnel templates: Lead Gen & Application" },
                                { icon: Shield, title: "Nurture Sequences", desc: "Evergreen email and SMS conversion nurture sequences" },
                                { icon: Users, title: "Private Inner Circle", desc: "Access to our private community of operators running the plays" },
                                { icon: PhoneCall, title: "Strategy Kickoff", desc: "One 90-minute strategic kickoff call with our execution team" },
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
                                    Operators who have the hustle to execute but lack the proven systems to scale. You don't need another generic coaching call. You need the tactical implementation files to inject directly into your business today. You need the blueprint, not the agency.
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
                                    Before you run a crew, you have to be initiated. Earning your button means you get access to the inner circle's secrets. Stop trying to figure it out through trial and error—just take what we've already perfected. Once you're made, you have the tools to build your own operation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#0a0a0f" }}>
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-4xl font-black text-white mb-6">Earn your button.</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Get immediate access to the foundational systems and templates to scale your operation.
                        </p>
                        <Link
                            to="/free-audit"
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold text-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(175,62,77,0.3)] hover:shadow-[0_0_50px_rgba(175,62,77,0.5)] bg-[#af3e4d]"
                        >
                            Get The Blueprint
                        </Link>
                    </div>
                </section>

                <CTASection />
            </div>
        </Layout>
    );
}
