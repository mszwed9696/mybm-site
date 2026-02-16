// =============================================================
// Sitemap Generator
// =============================================================
// Generates a sitemap XML string from Supabase content items.
// Can be used at build time or served via an API route.

import { getSitemapEntries } from "@/lib/api/contentItems";

const SITE_URL = "https://mindyourbusiness.media";

// Static pages that are always in the sitemap
const STATIC_PAGES = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    { path: "/who-we-work-with", priority: "0.8", changefreq: "monthly" },
    { path: "/how-it-works", priority: "0.8", changefreq: "monthly" },
    { path: "/free-audit", priority: "0.9", changefreq: "monthly" },
    { path: "/contact", priority: "0.7", changefreq: "monthly" },
    { path: "/quiz", priority: "0.9", changefreq: "monthly" },
];

// Priority by page type
const PAGE_TYPE_PRIORITY: Record<string, string> = {
    pillar: "0.9",
    seo_landing: "0.7",
    glossary: "0.5",
    blog: "0.6",
};

/**
 * Generate a sitemap XML string with all static and dynamic pages.
 */
export async function generateSitemapXML(): Promise<string> {
    const dynamicEntries = await getSitemapEntries();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Static pages
    for (const page of STATIC_PAGES) {
        xml += `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    }

    // Dynamic content items
    for (const entry of dynamicEntries) {
        const priority = PAGE_TYPE_PRIORITY[entry.page_type] || "0.6";
        const lastmod = entry.updated_at
            ? new Date(entry.updated_at).toISOString().split("T")[0]
            : new Date().toISOString().split("T")[0];

        xml += `  <url>
    <loc>${SITE_URL}/${entry.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
    }

    // Problem pages
    const problemSlugs = [
        "low-roas",
        "low-conversion-rate",
        "low-ltv-retention",
        "attribution-tracking",
        "scaling-breaks",
        "overreliance-on-paid",
    ];
    for (const slug of problemSlugs) {
        xml += `  <url>
    <loc>${SITE_URL}/problems/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    }

    xml += `</urlset>`;
    return xml;
}
