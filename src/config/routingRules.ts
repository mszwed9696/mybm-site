// =============================================================
// Routing Rules — Deterministic Pain → Route + Offer Mapping
// =============================================================

import type { QuizAnswers } from "@/config/quizConfig";

// ─── Pain → Route Map ───────────────────────────────────────
export const PAIN_ROUTE_MAP: Record<string, string> = {
    low_roas: "/problems/low-roas",
    low_conversion_rate: "/problems/low-conversion-rate",
    low_ltv_retention: "/problems/low-ltv-retention",
    attribution_tracking: "/problems/attribution-tracking",
    scaling_breaks: "/problems/scaling-breaks",
    overreliance_on_paid: "/problems/overreliance-on-paid",
};

// ─── Offer Definitions ──────────────────────────────────────
export interface RecommendedOffer {
    offer_key: string;
    offer_name: string;
    price_display: string;
    cta_type: "checkout" | "book_call";
    rationale_bullets: string[];
    next_step_copy: string;
}

const OFFER_GROWTH_AUDIT: RecommendedOffer = {
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
};

const OFFER_PERFORMANCE_PARTNERSHIP: RecommendedOffer = {
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
    next_step_copy: "Schedule a strategy call to discuss your custom performance partnership.",
};

const OFFER_RETENTION_ACCELERATOR: RecommendedOffer = {
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
    next_step_copy: "Book a call to learn how our Retention Accelerator can boost your LTV.",
};

const OFFER_FULL_STACK: RecommendedOffer = {
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
    next_step_copy: "Let's build your full-stack growth engine — schedule your strategy call.",
};

// ─── Revenue Tier Helper ────────────────────────────────────
type RevenueTier = "starter" | "growth" | "scale";

function getRevenueTier(revenue: string): RevenueTier {
    if (["under_50k", "50k_100k"].includes(revenue)) return "starter";
    if (["100k_250k", "250k_500k"].includes(revenue)) return "growth";
    return "scale";
}

// ─── Pain → Problem Page Content ────────────────────────────
export interface ProblemPageContent {
    slug: string;
    headline: string;
    subheadline: string;
    description: string;
    symptoms: string[];
    rootCauses: string[];
    solutionPreview: string;
}

export const PROBLEM_PAGES: Record<string, ProblemPageContent> = {
    "low-roas": {
        slug: "low-roas",
        headline: "Burning Cash on Ads That Don't Convert?",
        subheadline: "Low ROAS is the #1 reason supplement brands plateau.",
        description:
            "If your return on ad spend is below 2.5x, you're likely leaving money on the table through poor targeting, weak creative, or misaligned offer strategy.",
        symptoms: [
            "CPAs have been rising for 3+ months",
            "Ad accounts get fatigued quickly",
            "You're not profitable at your current spend level",
            "Creative testing feels random and unstructured",
        ],
        rootCauses: [
            "Broad targeting without audience segmentation",
            "Creative not aligned with buyer awareness stage",
            "Landing pages not optimized for supplement conversions",
            "No structured creative testing framework",
        ],
        solutionPreview:
            "Our Performance Partnership includes a full audit + restructure of your ad account with proven supplement-specific strategies.",
    },
    "low-conversion-rate": {
        slug: "low-conversion-rate",
        headline: "Getting Traffic But No Sales?",
        subheadline: "Your funnel has leaks — let's find and fix them.",
        description:
            "High traffic with low conversion rates (< 2.5%) usually signals a disconnect between your ads and your landing experience.",
        symptoms: [
            "Add-to-cart rate below 8%",
            "High bounce rate on product pages",
            "Checkout abandonment above 70%",
            "Visitors browse but don't buy",
        ],
        rootCauses: [
            "Ad-to-page message mismatch",
            "Weak social proof and trust signals",
            "Friction in the checkout process",
            "Price presentation and offer structure",
        ],
        solutionPreview:
            "We'll rebuild your conversion funnel from ad click to purchase with CRO best practices specific to supplements.",
    },
    "low-ltv-retention": {
        slug: "low-ltv-retention",
        headline: "Customers Buy Once and Disappear?",
        subheadline: "Retention is the highest-leverage growth lever you're ignoring.",
        description:
            "If your 90-day repurchase rate is below 25%, you're spending too much acquiring customers who never come back. Supplements are a replenishment product — retention should be your superpower.",
        symptoms: [
            "90-day repurchase rate under 25%",
            "No automated email/SMS flows",
            "Subscription rate below 15%",
            "LTV:CAC ratio below 3:1",
        ],
        rootCauses: [
            "No post-purchase nurture sequence",
            "Missing replenishment reminders",
            "No subscription or loyalty incentive",
            "Generic communications (not segmented)",
        ],
        solutionPreview:
            "Our Retention Accelerator builds automated lifecycle flows that turn one-time buyers into repeat customers.",
    },
    "attribution-tracking": {
        slug: "attribution-tracking",
        headline: "Flying Blind on What's Actually Working?",
        subheadline: "Bad data leads to bad decisions — and wasted ad spend.",
        description:
            "Post-iOS 14, most supplement brands are making decisions on incomplete data. If you can't attribute revenue accurately, you can't optimize effectively.",
        symptoms: [
            "Platform-reported ROAS doesn't match actual revenue",
            "Can't tell which campaigns drive real profit",
            "Organic vs paid attribution is unclear",
            "Scaling decisions feel like guesswork",
        ],
        rootCauses: [
            "iOS privacy changes broke pixel tracking",
            "No server-side tracking implementation",
            "Multiple touchpoints not being tracked",
            "No unified reporting dashboard",
        ],
        solutionPreview:
            "We implement server-side tracking, UTM frameworks, and unified dashboards so you can see exactly what's driving revenue.",
    },
    "scaling-breaks": {
        slug: "scaling-breaks",
        headline: "Every Time You Scale, Profitability Tanks?",
        subheadline: "Scaling is a system problem, not a budget problem.",
        description:
            "If doubling your ad budget doesn't double your revenue, your scaling infrastructure is broken — not your creative.",
        symptoms: [
            "CPA spikes when you increase budget by 20%+",
            "New audiences don't perform like seed audiences",
            "Creative fatigue happens within 7-14 days",
            "Profitable at $50K/mo but unprofitable at $100K/mo",
        ],
        rootCauses: [
            "No structured scaling framework",
            "Over-reliance on a single winning creative",
            "Audience expansion without lookalike strategy",
            "Landing pages not tested for scale traffic",
        ],
        solutionPreview:
            "Our scaling framework is built specifically for supplement brands — we've scaled 20+ brands past the $500K/mo mark profitably.",
    },
    "overreliance-on-paid": {
        slug: "overreliance-on-paid",
        headline: "If You Turned Off Ads Tomorrow, Would Your Revenue Disappear?",
        subheadline: "Building a brand that depends entirely on paid media is a ticking time bomb.",
        description:
            "When 80%+ of your revenue comes from paid channels, you're one algorithm change away from crisis. Diversification isn't optional — it's survival.",
        symptoms: [
            "80%+ of revenue from paid ads",
            "No organic search traffic strategy",
            "Email/SMS generates less than 20% of revenue",
            "No brand awareness or community building",
        ],
        rootCauses: [
            "No content or SEO strategy in place",
            "Email list not being monetized effectively",
            "No influencer or UGC acquisition channel",
            "Brand perception relies entirely on ads",
        ],
        solutionPreview:
            "Our Full-Stack Growth Engine balances acquisition, retention, and organic so no single channel can break your business.",
    },
};

// ─── Compute Recommended Offer ──────────────────────────────
/**
 * Deterministic offer recommendation based on quiz answers.
 * Logic:
 *   - Starter revenue → Growth Audit (qualify first)
 *   - Low LTV/Retention pain → Retention Accelerator
 *   - Scale revenue + any pain → Full-Stack Growth
 *   - Growth revenue → Performance Partnership
 *   - Default → Growth Audit
 */
export function computeRecommendedOffer(answers: QuizAnswers): RecommendedOffer {
    const tier = getRevenueTier(answers.monthly_revenue);
    const pain = answers.primary_pain;

    // Starter brands → always start with free audit
    if (tier === "starter") {
        return OFFER_GROWTH_AUDIT;
    }

    // Retention pain → Retention Accelerator
    if (pain === "low_ltv_retention") {
        return OFFER_RETENTION_ACCELERATOR;
    }

    // Scale brands → Full-Stack Growth Engine
    if (tier === "scale") {
        return OFFER_FULL_STACK;
    }

    // Growth brands with acquisition/tracking pains → Performance Partnership
    if (["low_roas", "low_conversion_rate", "scaling_breaks", "attribution_tracking"].includes(pain)) {
        return OFFER_PERFORMANCE_PARTNERSHIP;
    }

    // Over-reliance on paid at growth stage → Full-Stack
    if (pain === "overreliance_on_paid") {
        return OFFER_FULL_STACK;
    }

    // Default fallback → Growth Audit
    return OFFER_GROWTH_AUDIT;
}
