import { Link, useLocation } from "react-router-dom";
import { X, ArrowRight, Phone, LogIn, ChevronDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { mainNavSections, NavSection } from "@/data/navigationData";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "@/assets/mybm-logo.webp";
import logoTransparent from "@/assets/logo-transparent.webp";

export function Header() {
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const location = useLocation();

    // Close on route change
    useEffect(() => {
        setOverlayOpen(false);
        setExpandedSection(null);
    }, [location.pathname]);

    // Scroll detection
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when overlay open
    useEffect(() => {
        document.body.style.overflow = overlayOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [overlayOpen]);

    const toggleOverlay = useCallback(() => {
        setOverlayOpen((prev) => !prev);
        if (overlayOpen) {
            setExpandedSection(null);
        }
    }, [overlayOpen]);

    const toggleAccordion = (label: string) => {
        setExpandedSection((prev) => (prev === label ? null : label));
    };

    return (
        <>
            {/* ── Fixed top bar ── */}
            <header
                className="fixed top-0 left-0 right-0 z-[60] transition-all duration-500"
                style={{
                    backgroundColor: "transparent",
                    borderBottom: isScrolled
                        ? "1px solid rgba(255,255,255,0.05)"
                        : "1px solid transparent",
                }}
            >
                <div className="container-wide">
                    <div className="flex items-center justify-between h-20 md:h-24">
                        {/* Extended Logo */}
                        <Link to="/" className="shrink-0 relative z-[60]">
                            <img
                                src={logoTransparent}
                                alt="Mind Your Business Media"
                                className="h-20 md:h-28 w-auto transition-opacity duration-300"
                                width={240}
                                height={80}
                                fetchPriority="high"
                            />
                        </Link>

                        {/* Right side: CTA + Hamburger */}
                        <div className="flex items-center gap-4 md:gap-6 relative z-[60]">
                            {/* Desktop phone + login */}
                            <a
                                href="tel:+18563504733"
                                className="hidden lg:flex items-center gap-1.5 text-xs font-medium transition-colors"
                                style={{ color: "rgba(244,244,245,0.6)" }}
                            >
                                <Phone size={12} />
                                (856) 350-4733
                            </a>
                            <a
                                href="https://app.mindyourbusiness.media"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden lg:flex items-center gap-1 text-sm font-medium transition-colors"
                                style={{ color: "rgba(244,244,245,0.6)" }}
                            >
                                <LogIn size={14} />
                                Login
                            </a>

                            {/* CTA button */}
                            <Link
                                to="/free-audit"
                                className="hidden sm:inline-flex btn-pill-primary !py-2.5 !px-6 !text-xs"
                            >
                                Let's Talk
                            </Link>

                            {/* Hamburger */}
                            <button
                                className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 group rounded-full transition-colors"
                                onClick={toggleOverlay}
                                aria-label={overlayOpen ? "Close menu" : "Open menu"}
                                style={{ backgroundColor: overlayOpen ? "rgba(255,255,255,0.1)" : "transparent" }}
                            >
                                <span
                                    className={`block h-[2px] bg-white transition-all duration-300 ${overlayOpen
                                        ? "w-6 rotate-45 translate-y-[4px]"
                                        : "w-8 group-hover:w-6"
                                        }`}
                                />
                                <span
                                    className={`block h-[2px] bg-white transition-all duration-300 ${overlayOpen
                                        ? "w-6 -rotate-45 -translate-y-[4px]"
                                        : "w-8 group-hover:w-7"
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Full-screen overlay nav ── */}
            <AnimatePresence>
                {overlayOpen && (
                    <motion.div
                        className="fixed inset-0 z-[55] overflow-y-auto"
                        style={{ backgroundColor: "rgba(12, 12, 15, 0.98)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setOverlayOpen(false)}
                    >
                        {/* Interior container with preventDefault on click so clicking links/menus doesn't close overlay */}
                        <div
                            className="min-h-full flex flex-col justify-center container-wide py-32"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <nav className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
                                {/* ── Main nav accordion ── */}
                                <div className="space-y-1">
                                    {mainNavSections.map((section: NavSection, idx) => (
                                        <div
                                            key={section.label}
                                            className="border-b border-white/5 last:border-0"
                                        >
                                            <button
                                                className="w-full text-left flex items-center justify-between py-4 md:py-5 group"
                                                onClick={() => toggleAccordion(section.label)}
                                            >
                                                <div className="flex items-baseline gap-4 md:gap-6">
                                                    <span
                                                        className="text-xs font-mono"
                                                        style={{ color: "var(--brand-crimson)" }}
                                                    >
                                                        0{idx + 1}
                                                    </span>
                                                    <span
                                                        className="text-2xl md:text-4xl lg:text-5xl font-bold transition-colors duration-200 group-hover:text-white"
                                                        style={{
                                                            fontFamily: "'Poppins', sans-serif",
                                                            color:
                                                                expandedSection === section.label
                                                                    ? "var(--brand-light)"
                                                                    : "rgba(244,244,245,0.6)",
                                                        }}
                                                    >
                                                        {section.label}
                                                    </span>
                                                </div>
                                                <ChevronDown
                                                    className={`transition-transform duration-300 ${expandedSection === section.label ? "rotate-180" : ""
                                                        }`}
                                                    style={{ color: "rgba(244,244,245,0.4)" }}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {expandedSection === section.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pb-6 pl-10 md:pl-14 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                                                            {section.columns.map((col) => (
                                                                <div key={col.heading}>
                                                                    {col.heading && (
                                                                        <h4
                                                                            className="text-xs uppercase tracking-wider font-bold mb-3"
                                                                            style={{ color: "rgba(244,244,245,0.3)" }}
                                                                        >
                                                                            {col.heading}
                                                                        </h4>
                                                                    )}
                                                                    <ul className="space-y-2">
                                                                        {col.items.map((item) => (
                                                                            <li key={item.label}>
                                                                                <Link
                                                                                    to={item.href}
                                                                                    className="text-sm md:text-base hover:text-white transition-colors block"
                                                                                    style={{
                                                                                        color: "rgba(244,244,245,0.7)",
                                                                                    }}
                                                                                    onClick={() => setOverlayOpen(false)}
                                                                                >
                                                                                    {item.label}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}

                                    {/* Extra links */}
                                    <div className="pt-8 mt-4 space-y-3">
                                        <Link
                                            to="/blog"
                                            className="block text-lg font-medium transition-colors hover:text-white"
                                            style={{ color: "rgba(244,244,245,0.5)" }}
                                            onClick={() => setOverlayOpen(false)}
                                        >
                                            Insights & Blog
                                        </Link>
                                        <Link
                                            to="/about"
                                            className="block text-lg font-medium transition-colors hover:text-white"
                                            style={{ color: "rgba(244,244,245,0.5)" }}
                                            onClick={() => setOverlayOpen(false)}
                                        >
                                            About Mind Your Business Media
                                        </Link>
                                        <Link
                                            to="/blog/case-studies"
                                            className="block text-lg font-medium transition-colors hover:text-white"
                                            style={{ color: "rgba(244,244,245,0.5)" }}
                                            onClick={() => setOverlayOpen(false)}
                                        >
                                            Case Studies
                                        </Link>
                                    </div>
                                </div>

                                {/* ── Right column: CTA + contact ── */}
                                <div className="flex flex-col justify-between pt-8 md:pt-0">
                                    <div>
                                        <p
                                            className="text-sm font-bold uppercase tracking-widest mb-4"
                                            style={{ color: "var(--brand-crimson)" }}
                                        >
                                            Ready to grow?
                                        </p>
                                        <p
                                            className="text-lg md:text-xl leading-relaxed mb-8"
                                            style={{
                                                fontFamily: "'Poppins', sans-serif",
                                                color: "rgba(244,244,245,0.7)",
                                            }}
                                        >
                                            You've built a million-dollar business.
                                            <br />
                                            <strong style={{ color: "var(--brand-light)" }}>
                                                Market like it.
                                            </strong>
                                        </p>
                                        <Link
                                            to="/free-audit"
                                            className="btn-pill-outline inline-flex items-center gap-2"
                                            onClick={() => setOverlayOpen(false)}
                                        >
                                            Talk to Us
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>

                                    {/* Contact info */}
                                    <div className="mt-12 space-y-3">
                                        <a
                                            href="tel:+18563504733"
                                            className="block text-sm hover:text-white transition-colors"
                                            style={{ color: "rgba(244,244,245,0.4)" }}
                                        >
                                            (856) 350-4733
                                        </a>
                                        <a
                                            href="mailto:hello@mindyourbusiness.media"
                                            className="block text-sm hover:text-white transition-colors"
                                            style={{ color: "rgba(244,244,245,0.4)" }}
                                        >
                                            hello@mindyourbusiness.media
                                        </a>
                                        <div
                                            className="flex gap-6 pt-4 text-sm"
                                            style={{ color: "rgba(244,244,245,0.3)" }}
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
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
