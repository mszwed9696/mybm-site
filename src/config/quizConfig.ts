// =============================================================
// Quiz Configuration — Step Definitions, Enums, Validation
// =============================================================

export interface QuizOption {
    value: string;
    label: string;
    description?: string;
}

export interface QuizStepConfig {
    id: string;
    title: string;
    subtitle: string;
    type: "radio" | "select" | "text" | "contact";
    field: string;
    options?: QuizOption[];
    required: boolean;
    validation?: (value: string) => string | null;
}

// ─── Sub-Niche Options ──────────────────────────────────────
export const SUB_NICHES: QuizOption[] = [
    { value: "dietary_supplements", label: "Dietary Supplements", description: "Capsules, tablets, powders" },
    { value: "sports_nutrition", label: "Sports Nutrition", description: "Pre-workout, protein, BCAAs" },
    { value: "nutraceuticals", label: "Nutraceuticals", description: "Clinically-backed formulas" },
    { value: "functional_beverages", label: "Functional Beverages", description: "Energy drinks, adaptogens" },
    { value: "vitamins_minerals", label: "Vitamins & Minerals", description: "Daily essentials, multivitamins" },
    { value: "herbal_supplements", label: "Herbal Supplements", description: "Ashwagandha, turmeric, etc." },
    { value: "weight_management", label: "Weight Management", description: "Fat burners, meal replacements" },
    { value: "beauty_wellness", label: "Beauty & Wellness", description: "Collagen, skin/hair supplements" },
    { value: "pet_supplements", label: "Pet Supplements", description: "Pet health & nutrition" },
    { value: "other", label: "Other", description: "Something else" },
];

// ─── Revenue Ranges ─────────────────────────────────────────
export const REVENUE_RANGES: QuizOption[] = [
    { value: "under_50k", label: "Under $50,000/mo" },
    { value: "50k_100k", label: "$50,000 – $100,000/mo" },
    { value: "100k_250k", label: "$100,000 – $250,000/mo" },
    { value: "250k_500k", label: "$250,000 – $500,000/mo" },
    { value: "500k_1m", label: "$500,000 – $1,000,000/mo" },
    { value: "over_1m", label: "$1,000,000+/mo" },
];

// ─── Ad Spend Ranges ────────────────────────────────────────
export const AD_SPEND_RANGES: QuizOption[] = [
    { value: "under_10k", label: "Under $10,000/mo" },
    { value: "10k_25k", label: "$10,000 – $25,000/mo" },
    { value: "25k_50k", label: "$25,000 – $50,000/mo" },
    { value: "50k_100k", label: "$50,000 – $100,000/mo" },
    { value: "100k_250k", label: "$100,000 – $250,000/mo" },
    { value: "over_250k", label: "$250,000+/mo" },
];

// ─── Primary Platforms ──────────────────────────────────────
export const PLATFORMS: QuizOption[] = [
    { value: "meta", label: "Meta (Facebook/Instagram)" },
    { value: "google", label: "Google Ads" },
    { value: "tiktok", label: "TikTok Ads" },
    { value: "youtube", label: "YouTube Ads" },
    { value: "amazon", label: "Amazon Ads" },
    { value: "other", label: "Other" },
];

// ─── Pain Points ────────────────────────────────────────────
export const PAIN_POINTS: QuizOption[] = [
    { value: "low_roas", label: "Low ROAS", description: "Ad spend isn't translating to revenue" },
    { value: "low_conversion_rate", label: "Low Conversion Rate", description: "Traffic but no purchases" },
    { value: "low_ltv_retention", label: "Low LTV / Retention", description: "Customers don't come back" },
    { value: "attribution_tracking", label: "Attribution Issues", description: "Can't track what's working" },
    { value: "scaling_breaks", label: "Scaling Problems", description: "Growth kills profitability" },
    { value: "overreliance_on_paid", label: "Over-Reliance on Paid", description: "No organic revenue channel" },
];

// ─── Lifecycle Maturity ─────────────────────────────────────
export const LIFECYCLE_MATURITY: QuizOption[] = [
    { value: "no_email_sms", label: "No Email/SMS in place" },
    { value: "basic_email", label: "Basic email only (no automation)" },
    { value: "automated_flows", label: "Automated email flows running" },
    { value: "email_and_sms", label: "Email + SMS with segmentation" },
    { value: "advanced_lifecycle", label: "Advanced lifecycle with retention focus" },
];

// ─── Commerce Channels ──────────────────────────────────────
export const COMMERCE_CHANNELS: QuizOption[] = [
    { value: "shopify_dtc", label: "Shopify (DTC Only)" },
    { value: "amazon", label: "Amazon" },
    { value: "shopify_amazon", label: "Shopify + Amazon" },
    { value: "retail_dtc", label: "Retail + DTC" },
    { value: "wholesale", label: "Wholesale / B2B" },
    { value: "other", label: "Other" },
];

// ─── Quiz Steps Definition ─────────────────────────────────
export const QUIZ_STEPS: QuizStepConfig[] = [
    {
        id: "sub_niche",
        title: "What type of supplements do you sell?",
        subtitle: "This helps us tailor our recommendations to your specific market.",
        type: "radio",
        field: "sub_niche",
        options: SUB_NICHES,
        required: true,
    },
    {
        id: "monthly_revenue",
        title: "What's your current monthly revenue?",
        subtitle: "We'll use this to calibrate the right growth strategy for your stage.",
        type: "radio",
        field: "monthly_revenue",
        options: REVENUE_RANGES,
        required: true,
    },
    {
        id: "monthly_ad_spend",
        title: "How much are you spending on ads per month?",
        subtitle: "Understanding your ad budget helps us identify efficiency opportunities.",
        type: "radio",
        field: "monthly_ad_spend",
        options: AD_SPEND_RANGES,
        required: true,
    },
    {
        id: "primary_platform",
        title: "What's your primary advertising platform?",
        subtitle: "We specialize in platform-specific optimization strategies.",
        type: "radio",
        field: "primary_platform",
        options: PLATFORMS,
        required: true,
    },
    {
        id: "primary_pain",
        title: "What's your #1 growth challenge right now?",
        subtitle: "We'll route you to a solution designed specifically for this problem.",
        type: "radio",
        field: "primary_pain",
        options: PAIN_POINTS,
        required: true,
    },
    {
        id: "lifecycle_maturity",
        title: "How mature is your email/SMS marketing?",
        subtitle: "Retention is half the equation — we need to know where you stand.",
        type: "radio",
        field: "lifecycle_maturity",
        options: LIFECYCLE_MATURITY,
        required: true,
    },
    {
        id: "commerce_channel",
        title: "What are your primary sales channels?",
        subtitle: "Channel mix affects strategy, creative, and attribution.",
        type: "radio",
        field: "commerce_channel",
        options: COMMERCE_CHANNELS,
        required: true,
    },
    {
        id: "contact",
        title: "Last step — where should we send your results?",
        subtitle: "We'll create a personalized recommendation and growth plan for you.",
        type: "contact",
        field: "contact",
        required: true,
    },
];

// ─── Total Steps ────────────────────────────────────────────
export const TOTAL_QUIZ_STEPS = QUIZ_STEPS.length;

// ─── Empty Quiz Answers ─────────────────────────────────────
export interface QuizAnswers {
    sub_niche: string;
    monthly_revenue: string;
    monthly_ad_spend: string;
    primary_platform: string;
    primary_pain: string;
    lifecycle_maturity: string;
    commerce_channel: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    website: string;
}

export const EMPTY_QUIZ_ANSWERS: QuizAnswers = {
    sub_niche: "",
    monthly_revenue: "",
    monthly_ad_spend: "",
    primary_platform: "",
    primary_pain: "",
    lifecycle_maturity: "",
    commerce_channel: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
};
