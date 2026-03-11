import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
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
    <Layout noPaddingTop>
      <PageMeta
        title="Free Business Listing Scan | Mind Your Business Media"
        description="Check how your business appears across 60+ online directories. Fix inconsistencies and missing listings to boost local SEO."
        canonicalPath="/resources/listing-scan"
      />

      <PageHero
        title={<>Business Listing Scan</>}
        description="Inconsistent or missing listings cost you customers. See how your business appears across major directories — in seconds."
      />
      {/* Main Content Wrapper for Sweep-Over Effect */}
      <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">
        {/* Placeholder for future listing scan content */}
      </div>
    </Layout>
  );
}
