import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, Phone, LogIn } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  mainNavSections,
  type NavSection,
} from "@/data/navigationData";
import logoImg from "@/assets/logo-transparent.png";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openDropdown = useCallback((idx: number) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(idx);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      {/* ── Floating pill container ── */}
      <div className="px-4 pt-3">
        <nav
          className={`
            max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-500
            ${isScrolled
              ? "rounded-2xl shadow-lg"
              : "rounded-2xl"
            }
          `}
          style={{
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.82)"
              : "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: isScrolled
              ? "0 4px 30px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)"
              : "0 2px 20px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="shrink-0 pl-1">
              <img
                src={logoImg}
                alt="Mind Your Business Media"
                className="h-12 w-auto"
                style={{ filter: "brightness(0) opacity(0.55)" }}
              />
            </Link>

            {/* ── Desktop nav links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {mainNavSections.map((section, idx) => (
                <div
                  key={section.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(idx)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 ${activeDropdown === idx
                      ? "text-[#af3e4d] bg-[#af3e4d]/5"
                      : "text-[#374151] hover:text-[#af3e4d]"
                      }`}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === idx ? null : idx)
                    }
                    aria-expanded={activeDropdown === idx}
                  >
                    {section.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${activeDropdown === idx ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* ── Desktop right controls ── */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="tel:+18563504733"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#546a7b] hover:text-[#af3e4d] transition-colors"
              >
                <Phone size={12} />
                (856) 350-4733
              </a>
              <a
                href="https://app.mindyourbusiness.media"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium text-[#374151] hover:text-[#af3e4d] transition-colors"
              >
                <LogIn size={14} />
                Login
              </a>
              <Link
                to="/free-audit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  backgroundColor: "#af3e4d",
                  boxShadow: "0 2px 8px rgba(175, 62, 77, 0.25)",
                }}
              >
                Free Audit
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* ── Mobile burger ── */}
            <button
              className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100/50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* ── Desktop mega-menu panels ── */}
      {activeDropdown !== null && (
        <div
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 mt-2"
          style={{
            width: "min(900px, calc(100vw - 3rem))",
          }}
          onMouseEnter={cancelClose}
          onMouseLeave={closeDropdown}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06)",
            }}
          >
            <MegaMenuPanel section={mainNavSections[activeDropdown]} />
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden px-4 mt-2">
          <div
            className="rounded-2xl overflow-hidden overflow-y-auto"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
              maxHeight: "calc(100vh - 100px)",
            }}
          >
            <div className="p-4 space-y-1">
              {mainNavSections.map((section, idx) => (
                <MobileAccordion
                  key={section.label}
                  section={section}
                  isOpen={mobileAccordion === idx}
                  onToggle={() =>
                    setMobileAccordion(mobileAccordion === idx ? null : idx)
                  }
                />
              ))}

              {/* Divider + actions */}
              <div className="pt-3 mt-3 border-t border-gray-200/50">
                <a
                  href="https://app.mindyourbusiness.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2.5 text-sm font-medium text-gray-700 hover:text-[#af3e4d]"
                >
                  <LogIn size={15} />
                  Client Login
                </a>
              </div>

              {/* Mobile CTA */}
              <Link
                to="/free-audit"
                className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-xl text-sm font-bold text-white"
                style={{
                  backgroundColor: "#af3e4d",
                  boxShadow: "0 2px 8px rgba(175, 62, 77, 0.25)",
                }}
              >
                Request an Audit
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════
   Desktop Mega-Menu Panel
   ═══════════════════════════════════════════ */
function MegaMenuPanel({ section }: { section: NavSection }) {
  return (
    <div className="px-6 py-6">
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: section.featured
            ? `repeat(${section.columns.length}, 1fr) minmax(200px, 1fr)`
            : `repeat(${section.columns.length}, 1fr)`,
        }}
      >
        {section.columns.map((col) => (
          <div key={col.heading}>
            {col.heading && (
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                {col.heading}
              </h4>
            )}
            <div className="space-y-1">
              {col.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block p-2 -mx-2 rounded-lg transition-colors hover:bg-gray-50/80 group"
                >
                  <div className="text-[13px] font-semibold text-gray-900 group-hover:text-[#af3e4d] transition-colors">
                    {item.label}
                  </div>
                  {item.description && (
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Featured column */}
        {section.featured && (
          <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(243, 244, 246, 0.7)" }}>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
              {section.featured.heading}
            </h4>
            <Link to={section.featured.href} className="block group">
              <p className="text-[13px] font-bold text-gray-900 group-hover:text-[#af3e4d] transition-colors">
                {section.featured.title}
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {section.featured.description}
              </p>
              <span className="inline-flex items-center gap-1 mt-2.5 text-xs font-bold text-[#af3e4d]">
                Learn more <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Mobile Accordion
   ═══════════════════════════════════════════ */
function MobileAccordion({
  section,
  isOpen,
  onToggle,
}: {
  section: NavSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-3 text-sm font-semibold text-gray-800"
        onClick={onToggle}
      >
        {section.label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 text-gray-400 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      {isOpen && (
        <div className="pb-3 pl-3 space-y-1">
          {section.columns.map((col) => (
            <div key={col.heading} className="mb-3">
              {col.heading && (
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  {col.heading}
                </p>
              )}
              {col.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-1.5 text-sm text-gray-600 hover:text-[#af3e4d]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
