import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoTransparent from "../../assets/logo-transparent.webp";

const footerSections = [
    {
        heading: "Services",
        links: [
            { label: "Marketing Consulting", href: "/consulting" },
            { label: "Ad Campaigns", href: "/services/ad-campaigns" },
            { label: "SEO & Organic", href: "/services/seo" },
            { label: "AI Solutions", href: "/services/ai-solutions" },
            { label: "Website Design", href: "/services/website-design" },
            { label: "Social Media", href: "/services/social-media" },
            { label: "Reviews Management", href: "/services/reviews" },
            { label: "Pricing", href: "/services/pricing" },
        ],
    },
    {
        heading: "Industries",
        links: [
            { label: "Home Services", href: "/industries/hvac" },
            { label: "Medical & Wellness", href: "/industries/dentists" },
            { label: "Real Estate", href: "/industries/real-estate" },
            { label: "E-Commerce", href: "/industries/e-commerce" },
            { label: "Supplement Brands", href: "/industries/supplements" },
            { label: "All Industries", href: "/industries" },
        ],
    },
    {
        heading: "Resources",
        links: [
            { label: "Marketing Quiz", href: "/resources/marketing-quiz" },
            { label: "Listing Scan", href: "/resources/listing-scan" },
            { label: "Marketing Score", href: "/resources/marketing-score" },
            { label: "Blog", href: "/blog" },
            { label: "Case Studies", href: "/blog/case-studies" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "/contact" },
            { label: "Client Reviews", href: "/about/reviews" },
            { label: "Client Support", href: "/support" },
            { label: "Client Login", href: "/login" },
        ],
    },
];

export function Footer() {
    return (
        <footer style={{ backgroundColor: "#0C0C0F" }}>
            {/* ── Footer columns ── */}
            <div className="container-wide pt-16 pb-10 relative">
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-10">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-1.5 mb-4">
                            <img
                                src={logoTransparent}
                                alt="Mind Your Business Media"
                                className="h-20 md:h-24 w-auto"
                                loading="lazy"
                                width={200}
                                height={80}
                            />
                        </Link>
                        <p
                            className="text-xs leading-relaxed mb-6"
                            style={{ color: "rgba(244, 244, 245, 0.3)" }}
                        >
                            Premier marketing for million-dollar businesses. Data-driven
                            strategy, AI-powered execution, results you can measure.
                        </p>

                        {/* Social links */}
                        <div
                            className="flex gap-4 text-xs"
                            style={{ color: "rgba(244, 244, 245, 0.3)" }}
                        >
                            <a
                                href="https://www.instagram.com/myb.media/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerSections.map((section) => (
                        <div key={section.heading}>
                            <h4
                                className="text-xs font-bold uppercase tracking-wider mb-3"
                                style={{ color: "rgba(244, 244, 245, 0.4)" }}
                            >
                                {section.heading}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            to={link.href}
                                            className="text-sm transition-colors"
                                            style={{ color: "rgba(244, 244, 245, 0.3)" }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── Divider ── */}
                <div className="divider-subtle my-8 relative z-10" />

                {/* ── Bottom row ── */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-6">
                        <Link
                            to="/terms"
                            className="text-xs transition-colors"
                            style={{ color: "rgba(244, 244, 245, 0.2)" }}
                        >
                            Terms & Conditions
                        </Link>
                        <Link
                            to="/privacy"
                            className="text-xs transition-colors"
                            style={{ color: "rgba(244, 244, 245, 0.2)" }}
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <p className="text-xs" style={{ color: "rgba(244, 244, 245, 0.2)" }}>
                        © {new Date().getFullYear()} Mind Your Business Media LLC. All
                        Rights Reserved.
                    </p>
                </div>
            </div>

            {/* ── Massive Watermark at Bottom ── */}
            <div className="w-full text-center select-none overflow-hidden pt-8 pb-4">
                <span className="block text-[8.5vw] font-black tracking-tighter leading-none text-white opacity-5 mx-auto whitespace-nowrap">
                    Mind Your Business Media
                </span>
            </div>
        </footer>
    );
}
