// =============================================================
// MYB Performance Portal — Centralized Constants & Config
// =============================================================

// ─── Pain Point Routing Map ─────────────────────────────────
export const PAIN_ROUTE_MAP: Record<string, string> = {
    low_roas: "/problems/low-roas",
    low_conversion_rate: "/problems/low-conversion-rate",
    low_ltv_retention: "/problems/low-ltv-retention",
    attribution_tracking: "/problems/attribution-tracking",
    scaling_breaks: "/problems/scaling-breaks",
    overreliance_on_paid: "/problems/overreliance-on-paid",
} as const;

// ─── Sub-Niche Options ──────────────────────────────────────
export const SUB_NICHES = [
    { value: "dietary_supplements", label: "Dietary Supplements" },
    { value: "sports_nutrition", label: "Sports Nutrition" },
    { value: "nutraceuticals", label: "Nutraceuticals" },
    { value: "functional_beverages", label: "Functional Beverages / Energy Drinks" },
    { value: "vitamins_minerals", label: "Vitamins & Minerals" },
    { value: "herbal_supplements", label: "Herbal Supplements" },
    { value: "weight_management", label: "Weight Management" },
    { value: "beauty_wellness", label: "Beauty & Wellness" },
    { value: "pet_supplements", label: "Pet Supplements" },
    { value: "other", label: "Other" },
] as const;

// ─── Primary Pain Points ────────────────────────────────────
export const PAIN_POINTS = [
    { value: "low_roas", label: "Low ROAS / Poor Ad Performance" },
    { value: "low_conversion_rate", label: "Low Conversion Rate" },
    { value: "low_ltv_retention", label: "Low LTV / Poor Retention" },
    { value: "attribution_tracking", label: "Attribution & Tracking Issues" },
    { value: "scaling_breaks", label: "Scaling Breaks Profitability" },
    { value: "overreliance_on_paid", label: "Over-Reliance on Paid Media" },
] as const;

// ─── Revenue Ranges ─────────────────────────────────────────
export const REVENUE_RANGES = [
    { value: "under_50k", label: "Under $50,000/mo" },
    { value: "50k_100k", label: "$50,000 - $100,000/mo" },
    { value: "100k_250k", label: "$100,000 - $250,000/mo" },
    { value: "250k_500k", label: "$250,000 - $500,000/mo" },
    { value: "500k_1m", label: "$500,000 - $1,000,000/mo" },
    { value: "over_1m", label: "$1,000,000+/mo" },
] as const;

// ─── Ad Spend Ranges ────────────────────────────────────────
export const AD_SPEND_RANGES = [
    { value: "under_10k", label: "Under $10,000/mo" },
    { value: "10k_25k", label: "$10,000 - $25,000/mo" },
    { value: "25k_50k", label: "$25,000 - $50,000/mo" },
    { value: "50k_100k", label: "$50,000 - $100,000/mo" },
    { value: "100k_250k", label: "$100,000 - $250,000/mo" },
    { value: "over_250k", label: "$250,000+/mo" },
] as const;

// ─── Traffic Platforms ──────────────────────────────────────
export const PLATFORMS = [
    { value: "meta", label: "Meta (Facebook/Instagram)" },
    { value: "google", label: "Google Ads" },
    { value: "tiktok", label: "TikTok Ads" },
    { value: "youtube", label: "YouTube Ads" },
    { value: "amazon", label: "Amazon Ads" },
    { value: "other", label: "Other" },
] as const;

// ─── Lifecycle Maturity ─────────────────────────────────────
export const LIFECYCLE_MATURITY = [
    { value: "no_email_sms", label: "No Email/SMS in place" },
    { value: "basic_email", label: "Basic email only (no automation)" },
    { value: "automated_flows", label: "Automated email flows running" },
    { value: "email_and_sms", label: "Email + SMS with segmentation" },
    { value: "advanced_lifecycle", label: "Advanced lifecycle with retention focus" },
] as const;

// ─── Commerce Channels ──────────────────────────────────────
export const COMMERCE_CHANNELS = [
    { value: "shopify_dtc", label: "Shopify (DTC only)" },
    { value: "amazon", label: "Amazon" },
    { value: "shopify_amazon", label: "Shopify + Amazon" },
    { value: "retail_dtc", label: "Retail + DTC" },
    { value: "wholesale", label: "Wholesale / B2B" },
    { value: "other", label: "Other" },
] as const;

// ─── Offer Catalog ──────────────────────────────────────────
export interface OfferConfig {
    offer_key: string;
    offer_name: string;
    price_display: string;
    cta_type: "checkout" | "book_call";
    rationale_bullets: string[];
    next_step_copy: string;
}

export const OFFERS: Record<string, OfferConfig> = {
    growth_audit: {
        offer_key: "growth_audit",
        offer_name: "Free Growth Audit",
        price_display: "Free",
        cta_type: "book_call",
        rationale_bullets: [
            "Comprehensive analysis of your current ad performance",
            "Identify wasted spend and missed opportunities",
            "Actionable 90-day growth roadmap",
        ],
        next_step_copy: "Book your free growth audit call with our team.",
    },
    performance_partnership: {
        offer_key: "performance_partnership",
        offer_name: "Performance Partnership",
        price_display: "Custom",
        cta_type: "book_call",
        rationale_bullets: [
            "Full-funnel paid media management across Meta, TikTok, and Google",
            "Dedicated account strategist and creative team",
            "Weekly performance reporting with transparent dashboards",
            "Target 3.5x ROAS within 90 days",
        ],
        next_step_copy:
            "Schedule a strategy call to discuss your custom performance partnership.",
    },
    retention_accelerator: {
        offer_key: "retention_accelerator",
        offer_name: "Retention Accelerator",
        price_display: "Custom",
        cta_type: "book_call",
        rationale_bullets: [
            "Email and SMS automation built for supplement purchase cycles",
            "Welcome, replenishment, and win-back flow setup",
            "Audience segmentation and personalization strategy",
            "Increase customer lifetime value by 40%+",
        ],
        next_step_copy:
            "Book a call to learn how our Retention Accelerator can boost your LTV.",
    },
    full_stack_growth: {
        offer_key: "full_stack_growth",
        offer_name: "Full-Stack Growth Engine",
        price_display: "Custom",
        cta_type: "book_call",
        rationale_bullets: [
            "Combined acquisition + retention management",
            "Multi-channel paid media with lifecycle marketing",
            "Creative production, CRO, and analytics included",
            "Designed for brands scaling past $500K/mo",
        ],
        next_step_copy:
            "Let's build your full-stack growth engine — schedule your strategy call.",
    },
} as const;

// ─── GHL Tag Mapping ────────────────────────────────────────
export const GHL_TAG_RULES: Record<string, string[]> = {
    low_roas: ["pain:low-roas", "funnel:quiz-lead"],
    low_conversion_rate: ["pain:low-conversion", "funnel:quiz-lead"],
    low_ltv_retention: ["pain:low-ltv", "funnel:quiz-lead"],
    attribution_tracking: ["pain:attribution", "funnel:quiz-lead"],
    scaling_breaks: ["pain:scaling", "funnel:quiz-lead"],
    overreliance_on_paid: ["pain:overreliance-paid", "funnel:quiz-lead"],
} as const;
