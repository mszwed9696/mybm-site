import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { CTASection } from "@/components/sections";
import { Shield, Target, Zap, Globe, LayoutTemplate, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function TheStreetCrew() {
    return (
        <Layout noPaddingTop>
            <PageMeta
                title="The Street Crew Package | Mind Your Business Media"
                description="Before the ads. Before the funnels. There's the foundation. Custom infrastructural builds for operations."
                canonicalPath="/packages/the-street-crew"
            />

            <PageHero
                label="The Foundational Tier"
                title={
                    <>
                        The Street Crew <br className="hidden md:block" />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-rose-400">
                            Package
                        </span>
                    </>
                }
                description="Before the ads. Before the funnels. There's the foundation. Custom infrastructural builds for operations."
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
                                Pour The Concrete.
                            </h2>
                            <div
                                className="w-20 h-1 mb-8"
                                style={{ backgroundColor: "#af3e4d" }}
                            ></div>
                            <p
                                className="text-lg leading-relaxed mb-6"
                                style={{ color: "rgba(244,244,245,0.8)" }}
                            >
                                The biggest mistake 7-figure operators make is pouring ad budget into a cracked foundation. Sending traffic to a slow website, a confusing funnel, or a non-existent CRM is like burning cash in an oil drum.
                            </p>
                            <p
                                className="text-lg leading-relaxed mb-6"
                                style={{ color: "rgba(244,244,245,0.8)" }}
                            >
                                The Street Crew is our custom foundational strike team. We deploy to fix your root-level operations *before* you attempt to scale your acquisition. Whether your branding is a liability, your website needs an overhaul, or your local SEO is bleeding leads to competitors—we build the infrastructure.
                            </p>
                            <p
                                className="text-lg leading-relaxed font-semibold italic"
                                style={{ color: "#af3e4d" }}
                            >
                                We don't just build websites. We engineer revenue-capture systems.
                            </p>
                        </div>
                        {/* Thematic Image and Pricing Layout */}
                        <div className="relative flex flex-col gap-6">
                            <div
                                className="absolute inset-0 bg-gradient-to-tl from-[#af3e4d]/20 to-transparent rounded-3xl blur-3xl -z-10"
                            ></div>
                            <img
                                src="/images/packages/streetcrew.png"
                                alt="Cinematic bustling modern city street at night"
                                className="rounded-3xl shadow-2xl border w-full object-cover mb-4"
                                style={{ borderColor: "rgba(255,255,255,0.1)", aspectRatio: "16/9" }}
                            />

                            {/* Investment Card */}
                            <div className="p-6 rounded-2xl flex flex-col justify-between items-center text-center relative overflow-hidden glass-panel inner-glow card-3d bg-[#1a1a24]/50">
                                <div className="gradient-border-top" />
                                <div className="relative z-10">
                                    <p className="text-sm uppercase tracking-widest text-[#af3e4d] font-bold mb-1">
                                        Investment
                                    </p>
                                    <p className="text-4xl font-black text-white mb-2">
                                        Custom<span className="text-xl text-gray-400"> Scope</span>
                                    </p>
                                    <p className="text-sm text-gray-400 mb-6 max-w-sm mx-auto">
                                        Pricing is project-based dependent on the structural requirements. A custom proposal is provided after our teardown.
                                    </p>
                                </div>
                                <Link
                                    to="/free-audit"
                                    className="inline-block py-4 px-10 rounded-xl font-bold text-white bg-[#af3e4d] hover:bg-[#90303d] shadow-[0_0_20px_rgba(175,62,77,0.3)] transition-all hover:scale-[1.02] relative z-10"
                                >
                                    Request a Systems Teardown
                                </Link>
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
                                Custom scope based on your operational needs. Common builds include:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Globe, title: "The Estate", desc: "Full, high-converting website builds engineered for speed and conversion." },
                                { icon: LayoutTemplate, title: "The Don", desc: "High-performance standalone landing pages for aggressive isolated offers." },
                                { icon: Search, title: "The Omertà", desc: "Foundational local SEO to completely dominate organic search territory." },
                                { icon: Zap, title: "Custom Consulting", desc: "Strategic teardowns, platform migrations, and rebuilds of your current systems." },
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
                                    Operators who know their foundation is cracking and need it rebuilt before they try scaling. You can't scale chaos. If you have "leaky bucket" syndrome where leads are dropping off because your digital storefront looks cheap, we build the systems to support your future weight.
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
                                    You don't build a massive operation on top of a swamp. The Street Crew handles the heavy lifting, the dirty work, and the foundation pouring. Before any other tier can thrive, the concrete must be set correctly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#0a0a0f" }}>
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-4xl font-black text-white mb-6">Build the foundation.</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Apply for The Street Crew and let's fix your systems before you scale.
                        </p>
                        <Link
                            to="/free-audit"
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold text-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(175,62,77,0.3)] hover:shadow-[0_0_50px_rgba(175,62,77,0.5)] bg-[#af3e4d]"
                        >
                            Request a Systems Teardown
                        </Link>
                    </div>
                </section>

                <CTASection />
            </div>
        </Layout>
    );
}
