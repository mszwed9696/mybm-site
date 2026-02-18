/**
 * Industry-specific tool integrations data.
 * Logos sourced from Clearbit Logo API: https://logo.clearbit.com/{domain}
 */

export interface ToolInfo {
    name: string;
    domain: string;        // used for Clearbit logo URL
    description: string;
}

/** Logo URL helper — returns a Google Favicon API URL */
export function getLogoUrl(domain: string, size = 64): string {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

// ─── Tool Definitions (deduped, canonical) ───────────────────────────────

export const tools: Record<string, ToolInfo> = {
    // ── Field Service / Home Services ──
    servicetitan: { name: "ServiceTitan", domain: "servicetitan.com", description: "Field service management" },
    housecallpro: { name: "Housecall Pro", domain: "housecallpro.com", description: "Job scheduling & invoicing" },
    jobber: { name: "Jobber", domain: "getjobber.com", description: "Quoting & scheduling" },
    fieldedge: { name: "FieldEdge", domain: "fieldedge.com", description: "Dispatch & service" },
    simpro: { name: "Simpro", domain: "simprogroup.com", description: "Job management" },
    acculynx: { name: "AccuLynx", domain: "acculynx.com", description: "Roofing CRM" },
    eagleview: { name: "EagleView", domain: "eagleview.com", description: "Aerial measurement" },
    pestpac: { name: "PestPac", domain: "pestpac.com", description: "Pest control ops" },
    gorilladesk: { name: "GorillaDesk", domain: "gorilladesk.com", description: "Pest & lawn management" },
    fieldroutes: { name: "FieldRoutes", domain: "fieldroutes.com", description: "Route optimization" },
    procore: { name: "Procore", domain: "procore.com", description: "Construction management" },
    buildertrend: { name: "Buildertrend", domain: "buildertrend.com", description: "Project management" },
    coconstruct: { name: "CoConstruct", domain: "coconstruct.com", description: "Builder project mgmt" },
    lmn: { name: "LMN", domain: "golmn.com", description: "Landscape estimating" },
    aspire: { name: "Aspire", domain: "youraspire.com", description: "Landscape business mgmt" },
    zenmaid: { name: "ZenMaid", domain: "zenmaid.com", description: "Maid service scheduling" },
    smartmoving: { name: "SmartMoving", domain: "smartmoving.com", description: "Moving CRM" },
    aurorasolar: { name: "Aurora Solar", domain: "aurorasolar.com", description: "Solar design & sales" },
    enphase: { name: "Enphase", domain: "enphase.com", description: "Solar monitoring" },
    buildops: { name: "BuildOps", domain: "buildops.com", description: "Commercial contractor ops" },
    clockshark: { name: "ClockShark", domain: "clockshark.com", description: "Time tracking" },
    razorsync: { name: "RazorSync", domain: "razorsync.com", description: "Field service" },

    // ── Medical / Wellness ──
    dentrix: { name: "Dentrix", domain: "dentrix.com", description: "Dental practice mgmt" },
    opendental: { name: "OpenDental", domain: "opendental.com", description: "Open-source dental" },
    eaglesoft: { name: "Eaglesoft", domain: "pattersondental.com", description: "Dental workflow" },
    weave: { name: "Weave", domain: "getweave.com", description: "Patient communications" },
    janeapp: { name: "Jane App", domain: "jane.app", description: "Clinic management" },
    chirotouch: { name: "ChiroTouch", domain: "chirotouch.com", description: "Chiropractic EHR" },
    mindbody: { name: "Mindbody", domain: "mindbodyonline.com", description: "Fitness & wellness" },
    vagaro: { name: "Vagaro", domain: "vagaro.com", description: "Salon & spa booking" },
    zenoti: { name: "Zenoti", domain: "zenoti.com", description: "Spa management" },
    phorest: { name: "Phorest", domain: "phorest.com", description: "Salon software" },
    glofox: { name: "Glofox", domain: "glofox.com", description: "Gym management" },
    zenplanner: { name: "Zen Planner", domain: "zenplanner.com", description: "Fitness studio mgmt" },
    trainerize: { name: "Trainerize", domain: "trainerize.com", description: "Online personal training" },
    clinicsense: { name: "ClinicSense", domain: "clinicsense.com", description: "Practice management" },

    // ── Real Estate ──
    followupboss: { name: "Follow Up Boss", domain: "followupboss.com", description: "Real estate CRM" },
    kvcore: { name: "kvCORE", domain: "kvcore.com", description: "Real estate platform" },
    boomtown: { name: "BoomTown", domain: "boomtownroi.com", description: "Lead gen & CRM" },
    realgeeks: { name: "Real Geeks", domain: "realgeeks.com", description: "IDX websites & CRM" },
    zillow: { name: "Zillow", domain: "zillow.com", description: "Premier Agent" },

    // ── Legal / Accounting ──
    clio: { name: "Clio", domain: "clio.com", description: "Legal practice mgmt" },
    practicepanther: { name: "PracticePanther", domain: "practicepanther.com", description: "Law firm mgmt" },
    mycase: { name: "MyCase", domain: "mycase.com", description: "Case management" },
    smokeball: { name: "Smokeball", domain: "smokeball.com", description: "Legal productivity" },
    quickbooks: { name: "QuickBooks", domain: "quickbooks.intuit.com", description: "Accounting" },
    xero: { name: "Xero", domain: "xero.com", description: "Cloud accounting" },
    freshbooks: { name: "FreshBooks", domain: "freshbooks.com", description: "Invoicing & accounting" },
    drake: { name: "Drake Software", domain: "drakesoftware.com", description: "Tax preparation" },

    // ── E-commerce ──
    shopify: { name: "Shopify", domain: "shopify.com", description: "E-commerce platform" },
    klaviyo: { name: "Klaviyo", domain: "klaviyo.com", description: "Email & SMS marketing" },
    gorgias: { name: "Gorgias", domain: "gorgias.com", description: "E-commerce helpdesk" },
    recharge: { name: "Recharge", domain: "rechargepayments.com", description: "Subscription mgmt" },
    attentive: { name: "Attentive", domain: "attentive.com", description: "SMS marketing" },
    bigcommerce: { name: "BigCommerce", domain: "bigcommerce.com", description: "E-commerce platform" },

    // ── Restaurant / Food ──
    toast: { name: "Toast", domain: "toasttab.com", description: "Restaurant POS" },
    square: { name: "Square", domain: "squareup.com", description: "POS & payments" },
    lightspeed: { name: "Lightspeed", domain: "lightspeedhq.com", description: "POS & e-commerce" },
    clover: { name: "Clover", domain: "clover.com", description: "POS system" },
    sevenshifts: { name: "7shifts", domain: "7shifts.com", description: "Team scheduling" },

    // ── Auto ──
    shopware: { name: "Shop-Ware", domain: "shop-ware.com", description: "Auto shop mgmt" },
    tekmetric: { name: "Tekmetric", domain: "tekmetric.com", description: "Shop management" },
    mitchell1: { name: "Mitchell 1", domain: "mitchell1.com", description: "Auto repair info" },
    autoleap: { name: "AutoLeap", domain: "autoleap.com", description: "Auto repair software" },

    // ── Vet ──
    ezyvet: { name: "ezyVet", domain: "ezyvet.com", description: "Veterinary practice" },

    // ── Common / Cross-industry ──
    hubspot: { name: "HubSpot", domain: "hubspot.com", description: "CRM & marketing" },
    salesforce: { name: "Salesforce", domain: "salesforce.com", description: "Enterprise CRM" },
    gohighlevel: { name: "GoHighLevel", domain: "gohighlevel.com", description: "All-in-one marketing" },
    mailchimp: { name: "Mailchimp", domain: "mailchimp.com", description: "Email marketing" },
    acuity: { name: "Acuity", domain: "acuityscheduling.com", description: "Online scheduling" },
    stripe: { name: "Stripe", domain: "stripe.com", description: "Payment processing" },
    googleads: { name: "Google Ads", domain: "ads.google.com", description: "Search advertising" },
    metaads: { name: "Meta Ads", domain: "facebook.com", description: "Social advertising" },
    googleanalytics: { name: "Google Analytics", domain: "analytics.google.com", description: "Web analytics" },
    semrush: { name: "SEMrush", domain: "semrush.com", description: "SEO & competitive" },
    wordpress: { name: "WordPress", domain: "wordpress.com", description: "CMS platform" },
    zapier: { name: "Zapier", domain: "zapier.com", description: "Automation" },
    calendly: { name: "Calendly", domain: "calendly.com", description: "Scheduling" },
};

// ─── Industry → Tools Mapping ────────────────────────────────────────────

export type IndustryCategory =
    | "home-services"
    | "medical-wellness"
    | "professional-financial"
    | "ecommerce-retail"
    | "restaurants"
    | "auto"
    | "fitness";

/** Maps each industry category to its commonly used tools (by key in `tools`) */
export const industryTools: Record<IndustryCategory, string[]> = {
    "home-services": [
        "servicetitan", "housecallpro", "jobber", "fieldedge", "procore",
        "buildertrend", "acculynx", "lmn", "quickbooks", "zapier",
    ],
    "medical-wellness": [
        "dentrix", "opendental", "weave", "janeapp", "chirotouch",
        "mindbody", "vagaro", "zenoti", "phorest", "acuity",
    ],
    "professional-financial": [
        "clio", "practicepanther", "mycase", "smokeball",
        "quickbooks", "xero", "freshbooks", "hubspot", "calendly",
    ],
    "ecommerce-retail": [
        "shopify", "klaviyo", "gorgias", "recharge", "attentive",
        "bigcommerce", "stripe", "mailchimp", "hubspot",
    ],
    "restaurants": [
        "toast", "square", "lightspeed", "clover", "sevenshifts", "stripe",
    ],
    "auto": [
        "shopware", "tekmetric", "mitchell1", "autoleap", "quickbooks",
    ],
    "fitness": [
        "mindbody", "glofox", "zenplanner", "trainerize", "vagaro", "acuity",
    ],
};

/** Maps industry slugs to their category */
export const slugToCategory: Record<string, IndustryCategory> = {
    // Home Services
    hvac: "home-services",
    plumbers: "home-services",
    electricians: "home-services",
    roofing: "home-services",
    "pest-control": "home-services",
    "general-contractors": "home-services",
    landscaping: "home-services",
    "cleaning-services": "home-services",
    "moving-companies": "home-services",
    solar: "home-services",
    "garage-door": "home-services",
    "fencing-decking": "home-services",
    "water-damage-restoration": "home-services",
    "home-inspection": "home-services",
    "handyman-services": "home-services",
    "pool-spa-services": "home-services",
    // Medical / Wellness
    dental: "medical-wellness",
    chiropractic: "medical-wellness",
    "med-spa": "medical-wellness",
    dermatology: "medical-wellness",
    "mental-health": "medical-wellness",
    optometry: "medical-wellness",
    "functional-medicine": "medical-wellness",
    veterinary: "medical-wellness",
    // Professional / Financial
    "law-firms": "professional-financial",
    "accounting-firms": "professional-financial",
    "wealth-management": "professional-financial",
    "insurance-agencies": "professional-financial",
    "real-estate": "professional-financial",
    // E-commerce / Retail
    "fashion-apparel": "ecommerce-retail",
    "food-beverage-brands": "ecommerce-retail",
    "home-goods": "ecommerce-retail",
    "outdoor-recreation": "ecommerce-retail",
    "auto-parts-accessories": "ecommerce-retail",
    "health-supplements": "ecommerce-retail",
    "sustainable-eco-brands": "ecommerce-retail",
    "subscription-boxes": "ecommerce-retail",
};

/** Slug-level overrides — specific tools for specific industries */
export const slugToolOverrides: Record<string, string[]> = {
    hvac: ["servicetitan", "housecallpro", "jobber", "fieldedge", "buildops", "quickbooks"],
    plumbers: ["servicetitan", "housecallpro", "jobber", "simpro", "razorsync", "quickbooks"],
    electricians: ["servicetitan", "housecallpro", "jobber", "fieldedge", "simpro", "quickbooks"],
    roofing: ["acculynx", "eagleview", "jobber", "housecallpro", "servicetitan", "procore"],
    "pest-control": ["pestpac", "gorilladesk", "fieldroutes", "housecallpro", "servicetitan", "jobber"],
    "general-contractors": ["procore", "buildertrend", "coconstruct", "jobber", "quickbooks", "zapier"],
    landscaping: ["lmn", "aspire", "jobber", "housecallpro", "servicetitan", "quickbooks"],
    "cleaning-services": ["zenmaid", "jobber", "housecallpro", "quickbooks", "zapier", "acuity"],
    "moving-companies": ["smartmoving", "jobber", "housecallpro", "quickbooks", "zapier"],
    solar: ["aurorasolar", "enphase", "servicetitan", "salesforce", "hubspot", "quickbooks"],
    dental: ["dentrix", "opendental", "eaglesoft", "weave", "quickbooks"],
    chiropractic: ["janeapp", "chirotouch", "clinicsense", "mindbody", "acuity", "quickbooks"],
    "med-spa": ["vagaro", "zenoti", "mindbody", "phorest", "stripe", "quickbooks"],
    "real-estate": ["followupboss", "kvcore", "boomtown", "realgeeks", "zillow", "hubspot"],
    "law-firms": ["clio", "practicepanther", "mycase", "smokeball", "quickbooks", "calendly"],
    "accounting-firms": ["quickbooks", "xero", "freshbooks", "drake", "hubspot", "calendly"],
    "fashion-apparel": ["shopify", "klaviyo", "gorgias", "recharge", "attentive", "stripe"],
    "health-supplements": ["shopify", "klaviyo", "recharge", "gorgias", "attentive", "stripe"],
    "food-beverage-brands": ["shopify", "klaviyo", "recharge", "toast", "square", "stripe"],
    "auto-parts-accessories": ["shopify", "bigcommerce", "tekmetric", "shopware", "quickbooks", "stripe"],
};

/** Get tools for a given industry slug */
export function getToolsForSlug(slug: string): ToolInfo[] {
    const overrideKeys = slugToolOverrides[slug];
    if (overrideKeys) {
        return overrideKeys.map((k) => tools[k]).filter(Boolean);
    }
    const category = slugToCategory[slug];
    if (category && industryTools[category]) {
        return industryTools[category].map((k) => tools[k]).filter(Boolean);
    }
    // Fallback: common cross-industry tools
    return ["hubspot", "quickbooks", "googleads", "metaads", "zapier", "stripe"]
        .map((k) => tools[k])
        .filter(Boolean);
}
