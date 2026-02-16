import { supabase } from "@/lib/supabaseClient";

// ─── Types ──────────────────────────────────────────────────

export interface ContentItem {
    id: string;
    slug: string;
    page_type: string;
    title: string;
    meta_description: string | null;
    meta_keywords: string | null;
    canonical_path: string | null;
    hero: Record<string, unknown> | null;
    intro: Record<string, unknown> | null;
    sections: unknown[];
    faqs: unknown[];
    related_pages: unknown[];
    cta_title: string | null;
    cta_subtitle: string | null;
    structured_data: Record<string, unknown> | null;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface ContentPageData {
    slug: string;
    meta: {
        title: string;
        description: string;
        keywords: string;
        canonicalPath: string;
    };
    hero: Record<string, unknown>;
    intro: Record<string, unknown>;
    sections: unknown[];
    faqs: unknown[];
    relatedPages: unknown[];
    ctaTitle: string | null;
    ctaSubtitle: string | null;
    structuredData: Record<string, unknown> | null;
}

// ─── Transform ──────────────────────────────────────────────

function transformContentItem(item: ContentItem): ContentPageData {
    return {
        slug: item.slug,
        meta: {
            title: item.title,
            description: item.meta_description || "",
            keywords: item.meta_keywords || "",
            canonicalPath: item.canonical_path || `/${item.slug}`,
        },
        hero: (item.hero as Record<string, unknown>) || {},
        intro: (item.intro as Record<string, unknown>) || {},
        sections: item.sections || [],
        faqs: item.faqs || [],
        relatedPages: item.related_pages || [],
        ctaTitle: item.cta_title,
        ctaSubtitle: item.cta_subtitle,
        structuredData: item.structured_data as Record<string, unknown> | null,
    };
}

// ─── Queries ────────────────────────────────────────────────

/**
 * Fetch a single published content item by slug.
 */
export async function getContentBySlug(
    slug: string
): Promise<ContentPageData | null> {
    const { data, error } = await supabase
        .from("content_items")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

    if (error || !data) return null;
    return transformContentItem(data as ContentItem);
}

/**
 * Fetch all published content slugs.
 */
export async function getAllContentSlugs(): Promise<string[]> {
    const { data, error } = await supabase
        .from("content_items")
        .select("slug")
        .eq("status", "published")
        .order("created_at", { ascending: true });

    if (error || !data) return [];
    return data.map((item) => item.slug);
}

/**
 * Fetch all published content items of a specific page type.
 */
export async function getContentByType(
    pageType: string
): Promise<ContentPageData[]> {
    const { data, error } = await supabase
        .from("content_items")
        .select("*")
        .eq("page_type", pageType)
        .eq("status", "published")
        .order("title", { ascending: true });

    if (error || !data) return [];
    return (data as ContentItem[]).map(transformContentItem);
}

/**
 * Fetch all glossary entries (page_type = 'glossary').
 */
export async function getGlossaryEntries(): Promise<ContentPageData[]> {
    return getContentByType("glossary");
}

/**
 * Fetch all sitemap-eligible items (all published content).
 */
export async function getSitemapEntries(): Promise<
    { slug: string; updated_at: string; page_type: string }[]
> {
    const { data, error } = await supabase
        .from("content_items")
        .select("slug, updated_at, page_type")
        .eq("status", "published")
        .order("updated_at", { ascending: false });

    if (error || !data) return [];
    return data;
}
