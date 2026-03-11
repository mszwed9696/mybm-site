import React from 'react';
import { ArrowRight, BarChart3, Target, Zap, Users, Shield, Rocket } from 'lucide-react';

const ConsultingPage: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#0A0A0F]">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Elite Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Consulting</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Direct access to owner Mike Szwed. Scale your internal acquisition systems with proven strategies that have driven explosive growth for hundreds of leading companies.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1">
                                Apply for Consulting
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Offer Section */}
            <section className="py-20 bg-[#0F0F16]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">Strategic Direction During Extreme Growth</h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                When you're scaling rapidly or managing large ad budgets internally, a wrong move can cost millions. Our consulting offer provides the exact playbook and oversight you need without the commitment of an agency.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Target, title: "Owner-Operators", desc: "For founders who want to run their own marketing internally but need elite-level guidance." },
                                    { icon: Users, title: "Internal Teams", desc: "For companies with a marketing department needing an outside expert POV to scale out acquisition systems." },
                                    { icon: Zap, title: "Skill Transfer", desc: "Direct knowledge and skill transfer from a master of digital marketing, empowering your team." }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                                <item.icon className="w-6 h-6 text-emerald-400" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            {/* 3D Pricing Card */}
                            <div className="glass-panel inner-glow multilayer-shadow p-8 md:p-12 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mx-20 -my-20" />

                                <h3 className="text-2xl text-emerald-400 font-bold mb-2 uppercase tracking-wider">The Inner Circle</h3>
                                <div className="flex items-baseline mb-8">
                                    <span className="text-6xl font-extrabold text-white">$10,000</span>
                                    <span className="text-xl text-gray-400 ml-2">/month</span>
                                </div>

                                <div className="bg-[#1A1A24] rounded-lg p-6 mb-8 border border-gray-800">
                                    <p className="text-gray-300 font-medium mb-2">Or pre-pay annually for maximum ROI:</p>
                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-bold text-emerald-400">$100,000</span>
                                        <span className="text-gray-500 ml-2">/year (Save $20k)</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {[
                                        "Month-to-month, no long-term commitment",
                                        "Direct 1-on-1 access to Mike Szwed",
                                        "Deep business analysis and strategic oversight",
                                        "Smarter decision making during extreme growth phases",
                                        "Complete knowledge & skill transfer to your team",
                                        "Audit and optimization of internal acquisition systems"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-gray-300">
                                            <Shield className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="/contact" className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">
                                    Secure Your Spot
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Mike Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-panel inner-glow multilayer-shadow p-8 md:p-16 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About Mike Szwed</h2>
                                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                                    <p>
                                        Mike's journey didn't start in a traditional marketing agency. He cut his teeth in the highly competitive real estate and insurance sectors, identifying a massive gap between how leads were generated and how sales teams were actually being served.
                                    </p>
                                    <p>
                                        Recognizing that most agencies optimize for metrics rather than revenue, Mike founded Mind Your Business Media to bridge that gap. He brought proven, conversion-focused ad strategies and built cutting-edge AI reporting systems to ensure total transparency and ROI.
                                    </p>
                                    <p>
                                        As an industry leader, Mike has generated proven results for hundreds of clients across various niches. His consulting is designed for companies that don't need a done-for-you agency, but require a master strategist to provide an outside point of view and transfer elite skills to their internal team.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl overflow-hidden glass-panel border border-emerald-500/20">
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000"
                                        alt="Strategic Consulting"
                                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-80" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 relative">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to scale out your internal acquisition systems?</h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Stop guessing. Get the master strategist point of view and make smarter decisions with your ad spend.
                    </p>
                    <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300">
                        Start Your Consulting Engagement
                        <Rocket className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ConsultingPage;
