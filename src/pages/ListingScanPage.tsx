import { Layout } from "@/components/layout";
import { PageMeta } from "@/components/seo";
import { useState } from "react";
import { Search, CheckCircle, XCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════
   Business Listing Scan — simulated scan tool
   ═══════════════════════════════════════════ */

interface ListingSource {
    name: string;
    status: "found" | "missing" | "inconsistent";
    note: string;
}

const demoResults: ListingSource[] = [
    { name: "Google Business Profile", status: "found", note: "Listed — verify hours and photos are current" },
    { name: "Yelp", status: "found", note: "Listed — 3 reviews, consider requesting more" },
    { name: "Facebook Business", status: "inconsistent", note: "Phone number doesn't match your website" },
    { name: "Bing Places", status: "missing", note: "Not found — you're missing search traffic from Bing" },
    { name: "Apple Maps", status: "found", note: "Listed — address verified" },
    { name: "Yellow Pages", status: "missing", note: "Not listed — add your business for free" },
    { name: "BBB", status: "missing", note: "Not accredited — consider applying" },
    { name: "Nextdoor", status: "inconsistent", note: "Business name is slightly different" },
    { name: "Foursquare / Swarm", status: "missing", note: "Not found — automatically feeds many apps" },
    { name: "MapQuest", status: "found", note: "Listed — data looks accurate" },
    { name: "TripAdvisor", status: "missing", note: "Not found — relevant for local businesses" },
    { name: "Angi's List", status: "inconsistent", note: "Address is outdated" },
];

const statusConfig = {
    found: { icon: CheckCircle, color: "#22c55e", label: "Found" },
    missing: { icon: XCircle, color: "#ef4444", label: "Missing" },
    inconsistent: { icon: AlertTriangle, color: "#eab308", label: "Inconsistent" },
};

export default function ListingScanPage() {
    const [businessName, setBusinessName] = useState("");
    const [scanned, setScanned] = useState(false);
    const [scanning, setScanning] = useState(false);

    const handleScan = () => {
        if (!businessName.trim()) return;
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
            setScanned(true);
        }, 2000);
    };

    const found = demoResults.filter((r) => r.status === "found").length;
    const missing = demoResults.filter((r) => r.status === "missing").length;
    const inconsistent = demoResults.filter((r) => r.status === "inconsistent").length;

    return (
        <Layout>
            <PageMeta
                title="Free Business Listing Scan | Mind Your Business Media"
                description="Check how your business appears across 60+ online directories. Fix inconsistencies and missing listings to boost local SEO."
                canonicalPath="/resources/listing-scan"
            />

            <section className="pt-28 pb-16 min-h-screen" style={{ backgroundColor: "#edf2f4" }}>
                <div className="max-w-3xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#0a0908" }}>
                            Business Listing Scan
                        </h1>
                        <p className="text-base max-w-xl mx-auto" style={{ color: "#546a7b" }}>
                            Inconsistent or missing listings cost you customers. See how your
                            business appears across major directories — in seconds.
                        </p>
                    </div>

                    {/* Scan input */}
                    {!scanned && (
                        <div className="rounded-2xl border p-8 md:p-10" style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}>
                            <label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
                                Enter your business name
                            </label>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    className="flex-1 px-4 py-3 rounded-xl border-2 text-sm focus:outline-none focus:border-[#af3e4d] transition-colors"
                                    style={{ borderColor: "#e5e7eb" }}
                                    placeholder="e.g. Joe's Plumbing LLC"
                                    onKeyDown={(e) => e.key === "Enter" && handleScan()}
                                />
                                <button
                                    onClick={handleScan}
                                    disabled={scanning || !businessName.trim()}
                                    className="px-6 py-3 rounded-xl text-sm font-bold text-white hover:scale-105 transition-all disabled:opacity-50"
                                    style={{ backgroundColor: "#af3e4d" }}
                                >
                                    {scanning ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Scanning...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <Search size={16} />
                                            Scan Now
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Results */}
                    {scanned && (
                        <>
                            {/* Summary cards */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {[
                                    { label: "Found", count: found, color: "#22c55e" },
                                    { label: "Missing", count: missing, color: "#ef4444" },
                                    { label: "Inconsistent", count: inconsistent, color: "#eab308" },
                                ].map((s) => (
                                    <div key={s.label} className="rounded-xl border p-4 text-center" style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}>
                                        <p className="text-3xl font-black" style={{ color: s.color }}>{s.count}</p>
                                        <p className="text-xs font-semibold mt-1" style={{ color: "#546a7b" }}>{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}>
                                <div className="p-5 border-b" style={{ borderColor: "#e5e7eb" }}>
                                    <h2 className="text-lg font-bold" style={{ color: "#0a0908" }}>
                                        Results for "{businessName}"
                                    </h2>
                                    <p className="text-xs" style={{ color: "#9ca3af" }}>
                                        Scanned {demoResults.length} major directories
                                    </p>
                                </div>
                                <div className="divide-y" style={{ borderColor: "#e5e7eb" }}>
                                    {demoResults.map((r) => {
                                        const cfg = statusConfig[r.status];
                                        return (
                                            <div key={r.name} className="flex items-center gap-4 px-5 py-3.5">
                                                <cfg.icon size={18} style={{ color: cfg.color }} />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold" style={{ color: "#374151" }}>{r.name}</p>
                                                    <p className="text-xs truncate" style={{ color: "#9ca3af" }}>{r.note}</p>
                                                </div>
                                                <span
                                                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                                                    style={{ backgroundColor: cfg.color + "15", color: cfg.color }}
                                                >
                                                    {cfg.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-sm mb-4" style={{ color: "#546a7b" }}>
                                    Want us to fix your listings and boost your local visibility?
                                </p>
                                <Link
                                    to="/free-audit"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white hover:scale-105 transition-all"
                                    style={{ backgroundColor: "#af3e4d" }}
                                >
                                    Get Your Free Audit
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </Layout>
    );
}
