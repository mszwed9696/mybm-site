/**
 * Comprehensive service page data for all 7 digital marketing services.
 * Includes SEO metadata, ROI benchmarks, pain points, and calculator configs.
 * Research sourced from Perplexity (WordStream, BrightLocal, BluThings, 2024-2025).
 */

import type { ReactNode } from "react";

/* ── Types ── */
export interface ServiceBenchmark {
    label: string;
    value: string;
    description: string;
}

export interface ROICalculatorConfig {
    inputLabel: string;
    inputUnit: string;
    inputMin: number;
    inputMax: number;
    inputStep: number;
    inputDefault: number;
    calculate: (input: number) => { label: string; value: string }[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ServicePageData {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    heroSubtitle: string;
    heroDescription: string;
    accentColor: string;
    iconName: string;

    /* Pain point section */
    painPointStat: string;
    painPointStatLabel: string;
    painPointHeadline: string;
    painPointDescription: string;

    /* Our approach */
    approachHeadline: string;
    approachDescription: string;
    approachPoints: string[];

    /* Old way vs MYB way */
    oldWay: string[];
    mybWay: string[];

    /* ROI Calculator */
    roiCalculator: ROICalculatorConfig;

    /* Benchmarks */
    benchmarks: ServiceBenchmark[];

    /* Features */
    features: string[];

    /* FAQs */
    faqs: FAQ[];
}

/* ══════════════════════════════════════════════════════
   Service Data
   ══════════════════════════════════════════════════════ */

export const servicePages: ServicePageData[] = [
    /* ─── Ad Campaigns ─── */
    {
        slug: "ad-campaigns",
        title: "Ad Campaigns",
        metaTitle: "Ad Campaign Management | Google, Meta & TikTok Ads | MYB Media",
        metaDescription:
            "Data-driven ad campaigns across Google, Meta, TikTok & YouTube. No retainers — pay for performance. Average 3.52:1 ROAS for our clients.",
        metaKeywords:
            "ad campaign management, google ads management, meta ads agency, PPC management, paid search, display advertising, social ads",
        heroSubtitle: "Paid Advertising",
        heroDescription:
            "Search, display, and social ads powered by data — not guesswork. We manage campaigns across Google, Meta, TikTok, and YouTube, optimized daily for your KPIs.",
        accentColor: "#ef4444",
        iconName: "Megaphone",

        painPointStat: "76%",
        painPointStatLabel: "of ad spend is wasted on irrelevant clicks",
        painPointHeadline: "You're paying for clicks. Not customers.",
        painPointDescription:
            "Most agencies charge a flat retainer regardless of results, then spread your budget thin across campaigns that aren't optimized. You end up paying for impressions and clicks that never convert — while your agency still collects their fee.",

        approachHeadline: "Performance-first. Every dollar accountable.",
        approachDescription:
            "We treat your ad spend like our own money. Every campaign is built with conversion tracking from day one, optimized daily, and scaled based on real ROAS — not vanity metrics.",
        approachPoints: [
            "Conversion-focused campaign architecture from day one",
            "Daily bid optimization and audience refinement",
            "Creative A/B testing frameworks that eliminate guesswork",
            "Transparent reporting with real revenue attribution",
        ],

        oldWay: [
            "$3,000–$5,000/mo retainer regardless of results",
            "Set it and forget it campaign management",
            "Vague monthly reports with impressions and clicks",
            "6-month contracts with no performance guarantees",
        ],
        mybWay: [
            "Pay only for campaign setup + management you actually use",
            "Daily optimization with real-time bid adjustments",
            "Revenue-attributed reporting — see exactly what each dollar earns",
            "Cancel anytime — we earn our keep every month",
        ],

        roiCalculator: {
            inputLabel: "Monthly Ad Spend",
            inputUnit: "$",
            inputMin: 500,
            inputMax: 50000,
            inputStep: 500,
            inputDefault: 3000,
            calculate: (spend: number) => [
                {
                    label: "Projected Monthly Clicks",
                    value: Math.round(spend / 5.26).toLocaleString(),
                },
                {
                    label: "Estimated Conversions",
                    value: Math.round((spend / 5.26) * 0.0752).toLocaleString(),
                },
                {
                    label: "Projected ROAS",
                    value: "3.5:1",
                },
                {
                    label: "Estimated Monthly Revenue",
                    value: "$" + Math.round(spend * 3.52).toLocaleString(),
                },
            ],
        },

        benchmarks: [
            {
                label: "7.52%",
                value: "Avg Conversion Rate",
                description: "Google Ads average across industries (2025)",
            },
            {
                label: "3.52:1",
                value: "Median ROAS",
                description: "Return on ad spend for search campaigns",
            },
            {
                label: "6.66%",
                value: "Avg Click-Through Rate",
                description: "Google Search Ads CTR benchmark",
            },
            {
                label: "$5.26",
                value: "Avg Cost Per Click",
                description: "Cross-industry Google Ads CPC",
            },
        ],

        features: [
            "Google Search & Shopping Ads",
            "Meta Ads (Facebook & Instagram)",
            "TikTok & YouTube advertising",
            "Display & remarketing campaigns",
            "Audience research & lookalike targeting",
            "Creative testing & ad copy optimization",
            "Landing page alignment & CRO",
            "Daily performance monitoring & bid management",
            "Conversion tracking & revenue attribution",
            "Monthly strategy calls & transparent reporting",
        ],

        faqs: [
            {
                question: "How much should I spend on ads?",
                answer:
                    "It depends on your industry and goals, but most clients start with $1,500–$5,000/month in ad spend. We'll analyze your market and recommend a budget that maximizes ROI without overspending.",
            },
            {
                question: "How quickly will I see results?",
                answer:
                    "Most campaigns start generating leads within 48-72 hours of launch. Optimization takes 2-4 weeks to dial in peak performance as we gather conversion data.",
            },
            {
                question: "Do you charge a percentage of ad spend?",
                answer:
                    "No. We charge a flat management fee — not a percentage of your spend. That way our incentives are aligned with your results, not with inflating your budget.",
            },
            {
                question: "What platforms do you advertise on?",
                answer:
                    "We run campaigns across Google (Search, Display, Shopping, YouTube), Meta (Facebook & Instagram), TikTok, LinkedIn, and Bing — whatever channels your customers use most.",
            },
            {
                question: "How is this different from a traditional agency retainer?",
                answer:
                    "Traditional agencies charge $3-5K/month whether you get results or not. We charge for the actual work — campaign setup, optimization, creative — and you can scale up or down based on performance.",
            },
        ],
    },

    /* ─── SEO & Organic Marketing ─── */
    {
        slug: "seo",
        title: "SEO & Organic Marketing",
        metaTitle: "SEO Services | Organic Search Marketing | MYB Media",
        metaDescription:
            "Dominate search results with fully-managed SEO. Position #1 gets 27-39% of all clicks. No retainers — pay for what you need.",
        metaKeywords:
            "SEO services, organic marketing, search engine optimization, local SEO, content strategy, keyword optimization, link building",
        heroSubtitle: "Organic Search",
        heroDescription:
            "Dominate search results with fully-managed SEO, content strategy, on-page optimization, and authority building. Organic traffic that compounds month over month.",
        accentColor: "#3b82f6",
        iconName: "Search",

        painPointStat: "68%",
        painPointStatLabel: "of online experiences begin with a search engine",
        painPointHeadline: "If you're not on page one, you don't exist.",
        painPointDescription:
            "Your competitors are appearing for the exact keywords your customers are searching. With 27-39% of all clicks going to position #1 and barely 2% to position #10, every ranking position you lose is money left on the table.",

        approachHeadline: "Compound growth. Not rented traffic.",
        approachDescription:
            "Unlike paid ads that stop the moment you stop paying, SEO builds an asset. We create content, build authority, and optimize your site so you own your traffic — permanently.",
        approachPoints: [
            "Technical SEO audits that fix what's holding you back",
            "Content strategy built around high-intent keywords",
            "Local SEO & map-pack domination for service-area businesses",
            "Authority building through strategic link acquisition",
        ],

        oldWay: [
            "$2,000–$4,000/mo retainer with vague deliverables",
            "Generic blog posts that nobody reads",
            "Monthly keyword reports with no actionable insights",
            "12-month contracts before you see any results",
        ],
        mybWay: [
            "Project-based SEO sprints focused on highest-impact actions",
            "Content strategy tied to revenue-generating keywords",
            "Transparent task tracking — see exactly what we're working on",
            "Flexible engagement — scale up when it's working, pause when you need to",
        ],

        roiCalculator: {
            inputLabel: "Current Monthly Organic Visitors",
            inputUnit: "",
            inputMin: 100,
            inputMax: 50000,
            inputStep: 100,
            inputDefault: 1000,
            calculate: (traffic: number) => {
                const improved = Math.round(traffic * 2.5);
                const leads = Math.round(improved * 0.024);
                const revenue = leads * 250;
                return [
                    {
                        label: "Projected Traffic (6-12 mo)",
                        value: improved.toLocaleString() + " visitors/mo",
                    },
                    {
                        label: "Estimated Monthly Leads",
                        value: leads.toLocaleString(),
                    },
                    {
                        label: "Avg SEO ROI",
                        value: "748%",
                    },
                    {
                        label: "Projected Monthly Value",
                        value: "$" + revenue.toLocaleString(),
                    },
                ];
            },
        },

        benchmarks: [
            {
                label: "27-39%",
                value: "Position #1 CTR",
                description: "The top organic result captures most clicks",
            },
            {
                label: "748%",
                value: "Avg SEO ROI",
                description: "Average return on investment across industries",
            },
            {
                label: "5.8",
                value: "Pages Per Session",
                description: "Organic visitors are more engaged than paid",
            },
            {
                label: "70%",
                value: "Marketers Say SEO > PPC",
                description: "For generating sales long-term",
            },
        ],

        features: [
            "Comprehensive technical SEO audit & fixes",
            "On-page optimization (titles, metas, headers, schema)",
            "Content strategy & blog management",
            "Local SEO & Google Business Profile optimization",
            "Map-pack & local citation building",
            "Link building & authority development",
            "Keyword research & competitive analysis",
            "Core Web Vitals & page speed optimization",
            "Monthly ranking & traffic reporting",
            "Quarterly strategy reviews",
        ],

        faqs: [
            {
                question: "How long does SEO take to work?",
                answer:
                    "Most businesses see measurable improvements within 3-6 months, with significant results in 6-12 months. SEO compounds over time — the longer you invest, the stronger the returns.",
            },
            {
                question: "Is SEO better than paid ads?",
                answer:
                    "They serve different purposes. Paid ads generate immediate traffic; SEO builds a long-term, compounding asset. We recommend both — ads for quick wins, SEO for sustained growth. 70% of marketers say SEO generates more sales long-term.",
            },
            {
                question: "Do you guarantee rankings?",
                answer:
                    "No ethical SEO provider can guarantee specific rankings. What we guarantee is transparent work, proven methodology, and a track record of moving the needle. We focus on revenue impact, not vanity rankings.",
            },
            {
                question: "What's included in your SEO service?",
                answer:
                    "Everything: technical audits, on-page optimization, content creation, local SEO, link building, Google Business Profile management, and monthly reporting. You choose which components you need.",
            },
        ],
    },

    /* ─── Social Media Marketing ─── */
    {
        slug: "social-media",
        title: "Social Media Marketing",
        metaTitle: "Social Media Marketing | Meta, TikTok & LinkedIn | MYB Media",
        metaDescription:
            "Strategic social media marketing across Facebook, Instagram, TikTok & LinkedIn. Build brand awareness and drive conversions. No retainers.",
        metaKeywords:
            "social media marketing, facebook marketing, instagram marketing, tiktok marketing, linkedin marketing, social media agency, social media management",
        heroSubtitle: "Social Media",
        heroDescription:
            "Build brand awareness and drive real engagement across Facebook, Instagram, TikTok, and LinkedIn. Strategic content that converts followers into customers.",
        accentColor: "#10b981",
        iconName: "Share2",

        painPointStat: "4.9B",
        painPointStatLabel: "people use social media worldwide",
        painPointHeadline: "Your audience is scrolling. Are they seeing you?",
        painPointDescription:
            "Social media isn't optional anymore — it's where your customers spend 2+ hours every day. But random posting isn't a strategy. Without data-driven content and targeted campaigns, you're shouting into the void.",

        approachHeadline: "Strategic content. Measurable results.",
        approachDescription:
            "We don't just post — we build social engines. Every piece of content is designed to move your audience from awareness to conversion, with paid amplification where it matters most.",
        approachPoints: [
            "Platform-specific strategies (not one-size-fits-all)",
            "Content calendars aligned with business objectives",
            "Paid social campaigns with ROAS tracking",
            "Community management that builds real relationships",
        ],

        oldWay: [
            "$2,500–$4,000/mo for generic social posting",
            "Cookie-cutter content calendars across all platforms",
            "Vanity metrics — likes and followers that don't convert",
            "No connection between social activity and revenue",
        ],
        mybWay: [
            "Pay for the content and campaigns you actually need",
            "Platform-native content tailored to each audience",
            "Revenue-focused metrics — leads, sales, ROAS",
            "Integrated with your ads and SEO for full-funnel impact",
        ],

        roiCalculator: {
            inputLabel: "Monthly Social Ad Budget",
            inputUnit: "$",
            inputMin: 500,
            inputMax: 25000,
            inputStep: 250,
            inputDefault: 2000,
            calculate: (budget: number) => {
                const reach = Math.round((budget / 8) * 1000);
                const clicks = Math.round(reach * 0.012);
                const conversions = Math.round(clicks * 0.025);
                const revenue = Math.round(budget * 2.21);
                return [
                    {
                        label: "Estimated Reach",
                        value: reach.toLocaleString() + " people",
                    },
                    {
                        label: "Projected Link Clicks",
                        value: clicks.toLocaleString(),
                    },
                    {
                        label: "Estimated Conversions",
                        value: conversions.toLocaleString(),
                    },
                    {
                        label: "Projected Revenue (2.21:1 ROAS)",
                        value: "$" + revenue.toLocaleString(),
                    },
                ];
            },
        },

        benchmarks: [
            {
                label: "2.21:1",
                value: "Avg Meta ROAS",
                description: "Return on ad spend for Facebook & Instagram",
            },
            {
                label: "$1.72",
                value: "Avg Meta CPC",
                description: "Cost per click on Facebook Ads",
            },
            {
                label: "2.5hrs",
                value: "Daily Social Time",
                description: "Average time adults spend on social media",
            },
            {
                label: "78%",
                value: "Discover Products",
                description: "of consumers discover products via social",
            },
        ],

        features: [
            "Platform strategy (Facebook, Instagram, TikTok, LinkedIn)",
            "Content calendar development & scheduling",
            "Graphic design & video content creation",
            "Paid social campaign management",
            "Community management & engagement",
            "Influencer partnership guidance",
            "Brand voice development & guidelines",
            "Performance benchmarking & analytics",
            "Audience growth strategies",
            "Monthly performance reporting",
        ],

        faqs: [
            {
                question: "Which social platforms should my business be on?",
                answer:
                    "It depends on where your audience spends time. B2B typically thrives on LinkedIn, local services on Facebook, e-commerce on Instagram and TikTok. We'll analyze your market and recommend the 2-3 platforms that will drive the most ROI.",
            },
            {
                question: "How often should we post?",
                answer:
                    "Quality over quantity. For most businesses, 3-5 posts per week on primary platforms is the sweet spot. We focus on high-impact content that drives engagement rather than flooding feeds with filler.",
            },
            {
                question: "Do you create the content?",
                answer:
                    "Yes — we handle strategy, graphic design, copywriting, and short-form video. We develop a brand voice guide so everything feels authentic to your business.",
            },
            {
                question: "Can you run social ads alongside organic?",
                answer:
                    "Absolutely. In fact, we recommend it. Organic builds brand equity; paid amplifies your best content to targeted audiences. Together, they create a full-funnel social engine.",
            },
        ],
    },

    /* ─── Listings Management ─── */
    {
        slug: "listings",
        title: "Listings Management",
        metaTitle: "Business Listings Management | Local SEO | MYB Media",
        metaDescription:
            "Keep your business information accurate across 60+ directories. 46% of Google searches have local intent. Dominate local search.",
        metaKeywords:
            "business listings management, local listings, directory management, NAP consistency, local SEO, Google Business Profile, citation management",
        heroSubtitle: "Local Presence",
        heroDescription:
            "Keep your business information accurate and consistent across 60+ directories. When customers search locally, make sure they find the right info — every time.",
        accentColor: "#f97316",
        iconName: "MapPin",

        painPointStat: "46%",
        painPointStatLabel: "of all Google searches have local intent",
        painPointHeadline: "Wrong address? Wrong phone? You just lost a customer.",
        painPointDescription:
            "Inconsistent business information across directories (Google, Yelp, Apple Maps, etc.) confuses search engines and customers alike. Incorrect NAP data (name, address, phone) tanks your local rankings and sends customers to competitors.",

        approachHeadline: "One dashboard. Every directory. Always accurate.",
        approachDescription:
            "We sync your business information across 60+ directories from a single platform, monitor for inaccuracies, and ensure your presence is optimized for local discovery.",
        approachPoints: [
            "Automated sync across 60+ directories",
            "Real-time monitoring for data inconsistencies",
            "Google Business Profile optimization & management",
            "Duplicate listing suppression",
        ],

        oldWay: [
            "$500–$1,000/mo just for listings maintenance",
            "Manual updates across dozens of directories",
            "No monitoring — errors go unnoticed for months",
            "Bundled into an expensive package you don't need",
        ],
        mybWay: [
            "Affordable standalone listings management",
            "Automated sync with real-time accuracy monitoring",
            "Alerts when listings change or duplicates appear",
            "Add only the services you actually need",
        ],

        roiCalculator: {
            inputLabel: "Number of Business Locations",
            inputUnit: "",
            inputMin: 1,
            inputMax: 50,
            inputStep: 1,
            inputDefault: 1,
            calculate: (locations: number) => {
                const directories = 60;
                const listings = locations * directories;
                const searchVisibility = Math.round(35 + locations * 5);
                const monthlyDiscoveries = locations * 420;
                return [
                    {
                        label: "Total Listings Managed",
                        value: listings.toLocaleString(),
                    },
                    {
                        label: "Directories Synced",
                        value: directories.toString() + "+",
                    },
                    {
                        label: "Search Visibility Lift",
                        value: Math.min(searchVisibility, 85) + "%",
                    },
                    {
                        label: "Est. Monthly Discoveries",
                        value: monthlyDiscoveries.toLocaleString(),
                    },
                ];
            },
        },

        benchmarks: [
            {
                label: "46%",
                value: "Local Intent Searches",
                description: "Nearly half of all Google searches are local",
            },
            {
                label: "3X",
                value: "Local SEO ROI",
                description: "Returns vs other channels for SMEs",
            },
            {
                label: "76%",
                value: "Visit Within 24hrs",
                description: "of people who search nearby visit that day",
            },
            {
                label: "60+",
                value: "Directories Managed",
                description: "Complete coverage across the web",
            },
        ],

        features: [
            "Listing sync across 60+ directories",
            "Google Business Profile setup & optimization",
            "Apple Maps, Bing Places, Yelp & more",
            "NAP consistency monitoring & corrections",
            "Duplicate listing detection & suppression",
            "Photo & category optimization",
            "Review monitoring across platforms",
            "Monthly performance reporting",
            "Local citation building",
            "Competitor listing analysis",
        ],

        faqs: [
            {
                question: "Why do my listings need to be consistent?",
                answer:
                    "Search engines like Google use NAP consistency (Name, Address, Phone) as a trust signal. Inconsistent information confuses search algorithms and can significantly hurt your local rankings.",
            },
            {
                question: "How many directories matter?",
                answer:
                    "We manage 60+ directories including Google, Yelp, Apple Maps, Bing, Facebook, Yellow Pages, and dozens of industry-specific directories. The more consistent your presence, the stronger your local authority.",
            },
            {
                question: "Can I manage listings myself?",
                answer:
                    "You can, but it's extremely time-consuming. Updating 60+ directories manually, monitoring for errors, and suppressing duplicates takes hours every month. We automate the entire process.",
            },
            {
                question: "How quickly will I see results?",
                answer:
                    "Listings sync typically completes within 1-4 weeks depending on the directory. Local ranking improvements from consistent NAP data usually appear within 4-8 weeks.",
            },
        ],
    },

    /* ─── Reviews Management ─── */
    {
        slug: "reviews",
        title: "Reviews Management",
        metaTitle: "Online Reviews Management | Reputation Building | MYB Media",
        metaDescription:
            "93% of consumers read reviews before buying. Build trust with automated review requests, monitoring, and response management. No retainers.",
        metaKeywords:
            "reviews management, online reputation management, review generation, review response, Google reviews, reputation monitoring",
        heroSubtitle: "Reputation",
        heroDescription:
            "Monitor, respond to, and grow your online reviews. In a world where 93% of consumers read reviews before buying, your reputation is your revenue.",
        accentColor: "#eab308",
        iconName: "Star",

        painPointStat: "93%",
        painPointStatLabel: "of consumers read online reviews before purchasing",
        painPointHeadline: "One bad review costs you 30 customers.",
        painPointDescription:
            "Studies show that a single negative review can drive away 30 potential customers. Yet most businesses don't actively ask for reviews or respond to the ones they have. Your competitors with 4.5+ stars are winning the trust battle.",

        approachHeadline: "Turn happy customers into your sales team.",
        approachDescription:
            "We build automated review request systems that capture feedback at the right moment, monitor your reputation across platforms, and craft responses that build trust — turning your reviews into a competitive advantage.",
        approachPoints: [
            "Automated review request campaigns via SMS & email",
            "Review monitoring across Google, Yelp, Facebook & more",
            "Professional response management for all reviews",
            "Reputation score tracking with competitive benchmarks",
        ],

        oldWay: [
            "$800–$1,500/mo for basic monitoring only",
            "No proactive review generation strategy",
            "Delayed responses to negative reviews (or no response at all)",
            "No way to measure impact on revenue",
        ],
        mybWay: [
            "Automated systems that generate reviews 24/7",
            "Real-time alerts for new reviews across all platforms",
            "Templated + custom responses within 24 hours",
            "Track review velocity, sentiment, and revenue correlation",
        ],

        roiCalculator: {
            inputLabel: "Current Monthly Customers",
            inputUnit: "",
            inputMin: 10,
            inputMax: 500,
            inputStep: 10,
            inputDefault: 50,
            calculate: (customers: number) => {
                const reviewRate = 0.15;
                const newReviews = Math.round(customers * reviewRate);
                const yearlyReviews = newReviews * 12;
                const conversionLift = Math.round(newReviews * 0.82 * 10);
                return [
                    {
                        label: "New Reviews / Month",
                        value: newReviews.toLocaleString(),
                    },
                    {
                        label: "Reviews in 12 Months",
                        value: yearlyReviews.toLocaleString(),
                    },
                    {
                        label: "Trust Score Impact",
                        value: "+15-25%",
                    },
                    {
                        label: "Est. Monthly Revenue Lift",
                        value: "$" + conversionLift.toLocaleString(),
                    },
                ];
            },
        },

        benchmarks: [
            {
                label: "93%",
                value: "Read Reviews First",
                description: "Consumers who research reviews before buying",
            },
            {
                label: "3.3★",
                value: "Minimum Threshold",
                description: "Below this, most consumers won't engage",
            },
            {
                label: "10",
                value: "Reviews Needed",
                description: "Minimum reviews before consumers trust a business",
            },
            {
                label: "+18%",
                value: "Revenue Lift",
                description: "From moving from 3.5 to 4.5 star rating",
            },
        ],

        features: [
            "Automated review request campaigns (SMS & email)",
            "Multi-platform review monitoring",
            "Professional response management",
            "Review widget for your website",
            "Sentiment analysis & trending topics",
            "Reputation score dashboard",
            "Competitor review benchmarking",
            "Negative review alert system",
            "Review generation best practices training",
            "Monthly reputation reports",
        ],

        faqs: [
            {
                question: "Is it okay to ask customers for reviews?",
                answer:
                    "Absolutely — and you should. Google explicitly encourages businesses to ask for reviews. The key is asking at the right time (after a positive experience) and making it easy with a direct link.",
            },
            {
                question: "Can you remove negative reviews?",
                answer:
                    "We can flag reviews that violate platform policies for removal. But the most effective strategy is generating enough positive reviews that negatives become the exception, not the rule. We also craft thoughtful responses to negative reviews that build trust.",
            },
            {
                question: "How many reviews do I need?",
                answer:
                    "Research shows consumers want to see at least 10 reviews before trusting a business. But more is better — businesses with 50+ reviews see significantly higher conversion rates. Our automation makes getting there easy.",
            },
            {
                question: "Which platforms matter most?",
                answer:
                    "Google is #1 for most businesses. But depending on your industry, Yelp, Facebook, Healthgrades, Avvo, or industry-specific platforms may also be critical. We monitor and optimize across all relevant platforms.",
            },
        ],
    },

    /* ─── AI Solutions & Automations ─── */
    {
        slug: "ai-solutions",
        title: "AI Solutions & Automations",
        metaTitle: "AI Marketing Automation | Chatbots & Workflows | MYB Media",
        metaDescription:
            "Automate lead follow-up, appointment booking, and marketing workflows with AI. 93% of CMOs report clear ROI from AI. No retainers.",
        metaKeywords:
            "AI marketing automation, chatbot for business, lead automation, marketing workflows, AI chatbot, appointment booking bot, CRM automation",
        heroSubtitle: "AI & Automation",
        heroDescription:
            "Automate lead follow-up, appointment booking, and marketing workflows with AI-powered systems that work 24/7 — so you never miss another opportunity.",
        accentColor: "#8b5cf6",
        iconName: "Bot",

        painPointStat: "78%",
        painPointStatLabel: "of leads go to the first responder",
        painPointHeadline: "Your leads are dying in your inbox.",
        painPointDescription:
            "The average business takes 47 hours to respond to a web lead. By then, your prospect has already called your competitor. Harvard research shows that responding within 5 minutes makes you 100x more likely to connect.",

        approachHeadline: "Never miss a lead. Never sleep on an opportunity.",
        approachDescription:
            "We build AI-powered systems that respond to leads in seconds, qualify prospects automatically, book appointments, and nurture cold leads — all while you focus on running your business.",
        approachPoints: [
            "AI chatbots that qualify leads and book appointments 24/7",
            "Automated follow-up sequences (SMS, email, voicemail drops)",
            "CRM workflow automation that eliminates manual data entry",
            "Lead scoring systems that prioritize your hottest prospects",
        ],

        oldWay: [
            "$2,000–$5,000/mo for basic CRM + automation setup",
            "Weeks of implementation before anything works",
            "Complex platforms you need a team to manage",
            "One-size-fits-all templates that don't match your business",
        ],
        mybWay: [
            "Custom-built automations tailored to your workflow",
            "Live within days, not months",
            "Simple enough for one person to manage",
            "Pay for what you build — no ongoing platform fees you don't need",
        ],

        roiCalculator: {
            inputLabel: "Monthly Inbound Leads",
            inputUnit: "",
            inputMin: 10,
            inputMax: 500,
            inputStep: 10,
            inputDefault: 50,
            calculate: (leads: number) => {
                const contacted = Math.round(leads * 0.95);
                const qualified = Math.round(contacted * 0.35);
                const booked = Math.round(qualified * 0.6);
                const timeSaved = Math.round(leads * 12);
                return [
                    {
                        label: "Leads Contacted (< 2 min)",
                        value: contacted.toLocaleString(),
                    },
                    {
                        label: "Auto-Qualified Prospects",
                        value: qualified.toLocaleString(),
                    },
                    {
                        label: "Appointments Booked",
                        value: booked.toLocaleString(),
                    },
                    {
                        label: "Minutes Saved / Month",
                        value: timeSaved.toLocaleString(),
                    },
                ];
            },
        },

        benchmarks: [
            {
                label: "100x",
                value: "More Likely to Connect",
                description: "When you respond within 5 minutes",
            },
            {
                label: "93%",
                value: "CMOs See ROI from AI",
                description: "Marketing leaders reporting clear returns",
            },
            {
                label: "47hrs",
                value: "Avg Response Time",
                description: "How long most businesses take to reply",
            },
            {
                label: "39%",
                value: "Lower Cost Per Lead",
                description: "Inbound leads via automation vs outbound",
            },
        ],

        features: [
            "AI chatbot for website lead qualification",
            "Automated SMS & email follow-up sequences",
            "Appointment booking automation",
            "CRM workflow automation",
            "Lead scoring & priority routing",
            "Voicemail drop campaigns",
            "Smart review request automation",
            "Pipeline stage automation",
            "Missed call text-back system",
            "Custom workflow development",
        ],

        faqs: [
            {
                question: "Will the chatbot sound robotic?",
                answer:
                    "No — we train the AI on your brand voice, services, and FAQs. The conversations feel natural and helpful. Most customers can't tell they're chatting with a bot until we tell them.",
            },
            {
                question: "What platforms do you automate?",
                answer:
                    "We build on platforms like GoHighLevel, HubSpot, and custom solutions. We can integrate with your existing CRM or build a new system from scratch — whatever fits your workflow.",
            },
            {
                question: "How long does setup take?",
                answer:
                    "Most automation systems are live within 5-10 business days. Simple chatbots can be deployed in as little as 48 hours. Complex multi-step workflows may take 2-3 weeks.",
            },
            {
                question: "Can I customize the automation?",
                answer:
                    "Everything is custom-built for your business. From the chatbot's responses to the follow-up sequences to the qualification criteria — it all matches how you actually operate.",
            },
        ],
    },

    /* ─── Website Design ─── */
    {
        slug: "website-design",
        title: "Website Design",
        metaTitle: "Website Design & Development | Conversion-Optimized | MYB Media",
        metaDescription:
            "Custom-coded, conversion-optimized websites. A 0.1s speed improvement lifts conversions 8.4%. Fast, mobile-first, built to convert. No retainers.",
        metaKeywords:
            "website design, web development, landing page design, conversion rate optimization, mobile-first design, custom website, fast website",
        heroSubtitle: "Web Design",
        heroDescription:
            "Custom-coded, blazing-fast websites built to convert visitors into customers. Mobile-first, SEO-ready, and optimized for performance from day one.",
        accentColor: "#06b6d4",
        iconName: "Globe",

        painPointStat: "53%",
        painPointStatLabel:
            "of mobile users leave a site that takes over 3 seconds to load",
        painPointHeadline: "Your website is costing you customers.",
        painPointDescription:
            "A slow, outdated website isn't just embarrassing — it's expensive. Every extra second of load time increases bounce rates by 32%. With 60% of traffic coming from mobile, if your site isn't fast and responsive, you're bleeding revenue.",

        approachHeadline: "Speed. Conversion. Revenue.",
        approachDescription:
            "We build websites as revenue machines — engineered for speed, designed for conversion, and optimized for every device. No bloated page builders. No template limitations. Just clean, custom code that performs.",
        approachPoints: [
            "Custom-coded sites — no bloated WordPress themes",
            "Core Web Vitals optimized from day one",
            "Conversion-focused layouts with clear user journeys",
            "Mobile-first responsive design for 60%+ of your traffic",
        ],

        oldWay: [
            "$5,000–$15,000 upfront for a WordPress site",
            "Months of revisions and scope creep",
            "Bloated code that loads slowly",
            "You're stuck with whatever they build — no flexibility",
        ],
        mybWay: [
            "Transparent project pricing with clear milestones",
            "Launch in weeks, not months",
            "Clean, custom code that scores 90+ on PageSpeed",
            "Ongoing optimization and CRO as needed — not mandatory",
        ],

        roiCalculator: {
            inputLabel: "Current Page Load Time (seconds)",
            inputUnit: "s",
            inputMin: 1,
            inputMax: 12,
            inputStep: 0.5,
            inputDefault: 5,
            calculate: (loadTime: number) => {
                const optimized = 1.5;
                const speedup = loadTime - optimized;
                const bounceReduction = Math.round(speedup * 7);
                const conversionLift = Math.round(speedup * 8.4);
                const revenueLift = Math.round(speedup * 53.4 / (loadTime));
                return [
                    {
                        label: "Optimized Load Time",
                        value: optimized + "s",
                    },
                    {
                        label: "Bounce Rate Reduction",
                        value: "-" + bounceReduction + "%",
                    },
                    {
                        label: "Conversion Rate Lift",
                        value: "+" + conversionLift + "%",
                    },
                    {
                        label: "Revenue Per Visitor Lift",
                        value: "+" + revenueLift + "%",
                    },
                ];
            },
        },

        benchmarks: [
            {
                label: "8.4%",
                value: "CVR Lift per 0.1s",
                description: "Conversion improvement from faster load times",
            },
            {
                label: "53.4%",
                value: "Revenue/Visitor Lift",
                description: "From optimizing Core Web Vitals",
            },
            {
                label: "60%",
                value: "Mobile Traffic",
                description: "Global web visits from mobile devices",
            },
            {
                label: "32%",
                value: "Bounce Increase",
                description: "For each additional second of load time",
            },
        ],

        features: [
            "Custom website design & development",
            "Mobile-first responsive layouts",
            "Core Web Vitals & speed optimization",
            "Conversion rate optimization (CRO)",
            "Landing page & funnel design",
            "SEO-ready architecture & schema markup",
            "Contact forms & lead capture integration",
            "CMS setup for easy content management",
            "SSL, security & uptime monitoring",
            "Ongoing maintenance & updates (optional)",
        ],

        faqs: [
            {
                question: "How long does a website build take?",
                answer:
                    "Most projects launch in 3-6 weeks. Simple landing pages can be live in under a week. Complex multi-page sites with custom functionality may take 6-8 weeks.",
            },
            {
                question: "Do you use WordPress?",
                answer:
                    "We offer both custom-coded solutions and WordPress builds depending on your needs. For maximum speed and performance, we recommend custom builds. For ease of content management, WordPress with optimized themes works great.",
            },
            {
                question: "Will my site be mobile-friendly?",
                answer:
                    "Absolutely — mobile-first is our default. With 60% of web traffic coming from mobile devices, every site we build is designed for phones first, then scaled up for tablets and desktops.",
            },
            {
                question: "What about hosting and maintenance?",
                answer:
                    "We can host your site on high-performance infrastructure (Vercel, Netlify, or dedicated hosting) and offer optional monthly maintenance packages. You're never locked in.",
            },
        ],
    },

    /* ─── Social Media Account Growth ─── */
    {
        slug: "social-media-growth",
        title: "Social Media Account Growth",
        metaTitle: "Social Media Account Growth | LinkedIn, YouTube, TikTok & More | MYB Media",
        metaDescription:
            "Grow your brand across LinkedIn, YouTube, Facebook, Instagram, and TikTok. Build authority, warm up audiences, and reduce your CPL. Pay per usage — no retainers.",
        metaKeywords:
            "social media growth, LinkedIn growth, YouTube growth, TikTok growth, Instagram growth, Facebook growth, account growth service, social media management",
        heroSubtitle: "Account Growth",
        heroDescription:
            "Grow your social media presence across LinkedIn, YouTube, Facebook, Instagram, and TikTok — building brand authority, trust, and a warm audience that makes every ad dollar work harder.",
        accentColor: "#8b5cf6",
        iconName: "Globe",

        painPointStat: "81%",
        painPointStatLabel: "of buyers do social research before purchasing",
        painPointHeadline: "Your audience checks your socials before they buy.",
        painPointDescription:
            "If your profiles are empty, inconsistent, or inactive, prospects lose trust before you ever get a chance to pitch. 81% of buyers research brands on social media before making a purchase decision — and if you're not there, your competitors are.",

        approachHeadline: "Give first. Ask second. Convert always.",
        approachDescription:
            "Our give-to-ask ratio model builds genuine trust through value-first content. By the time you promote, your audience is already warm — resulting in higher-converting ads and a lower cost per lead across every channel.",
        approachPoints: [
            "Platform-specific growth strategies (not copy-paste)",
            "Content calendars that build authority over time",
            "Engagement and community management",
            "Cross-platform content repurposing for maximum reach",
        ],

        oldWay: [
            "$2,000–$5,000/mo for a social media retainer",
            "Same content recycled across every platform",
            "Vanity metrics — follower counts that don't convert",
            "No strategy connecting organic and paid efforts",
        ],
        mybWay: [
            "Pay per platform, per usage — no retainers",
            "Platform-native strategies for each channel",
            "Build warm audiences that reduce your ad costs",
            "Content designed to drive trust, not just impressions",
        ],

        roiCalculator: {
            inputLabel: "Number of Platforms",
            inputUnit: "",
            inputMin: 1,
            inputMax: 5,
            inputStep: 1,
            inputDefault: 2,
            calculate: (platforms: number) => {
                const contentPieces = platforms * 12;
                const audienceGrowth = platforms * 850;
                const cplReduction = Math.min(platforms * 8, 35);
                return [
                    {
                        label: "Monthly Content Pieces",
                        value: contentPieces.toLocaleString(),
                    },
                    {
                        label: "Est. Monthly Audience Growth",
                        value: "+" + audienceGrowth.toLocaleString(),
                    },
                    {
                        label: "Projected CPL Reduction",
                        value: cplReduction + "%",
                    },
                    {
                        label: "Trust Building Timeline",
                        value: "60-90 days",
                    },
                ];
            },
        },

        benchmarks: [
            {
                label: "81%",
                value: "Social Research",
                description: "Buyers who research brands on social media first",
            },
            {
                label: "5.5X",
                value: "Warm Audience ROAS",
                description: "Retargeting warm audiences vs cold audiences",
            },
            {
                label: "-30%",
                value: "Lower CPL",
                description: "From organic brand authority + paid campaigns",
            },
            {
                label: "2.6X",
                value: "Engagement Lift",
                description: "Content from authoritative brands vs unknown brands",
            },
        ],

        features: [
            "LinkedIn profile & page growth",
            "YouTube channel optimization & content strategy",
            "Facebook page management & community building",
            "Instagram feed, Reels, & Stories strategy",
            "TikTok content creation & trend-riding",
            "Cross-platform content repurposing",
            "Hashtag research & SEO for social",
            "Engagement & DM management",
            "Monthly growth analytics & reporting",
            "Ad account warm audience integration",
        ],

        faqs: [
            {
                question: "Why does organic social growth matter if I'm running ads?",
                answer:
                    "Organic growth builds the trust layer that makes ads work better. Audiences who already follow you, consume your content, and trust your brand convert at 5X higher rates than cold prospects. Your ad dollars go further when you have a warm audience to retarget.",
            },
            {
                question: "How long until I see results from social growth?",
                answer:
                    "Content-driven growth is a 60-90 day play for initial momentum. You'll see engagement and follower growth within weeks, but the real ROI — reduced CPL, higher ad conversion rates — compounds over 3-6 months.",
            },
            {
                question: "Do I need to be on every platform?",
                answer:
                    "No. We recommend starting with 1-2 platforms where your audience is most active, then expanding. Depth beats breadth — it's better to dominate one platform than be mediocre on five.",
            },
            {
                question: "What's the give-to-ask ratio?",
                answer:
                    "We follow a content model where 80% of posts provide value (tips, education, entertainment) and 20% promote your services. This builds trust and authority so that when you do ask for the sale, your audience is already primed to convert.",
            },
        ],
    },
];

/* ── Helpers ── */
export function getServiceBySlug(slug: string): ServicePageData | undefined {
    return servicePages.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return servicePages.map((s) => s.slug);
}
