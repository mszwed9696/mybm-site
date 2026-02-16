import { supabase } from "@/lib/supabaseClient";
import type { SEOPageData } from "@/data/seoPages1";

/**
 * Fetch a single content item by slug.
 * Returns null if not found or not published.
 */
export async function getContentBySlug(
    slug: string
): Promise<SEOPageData | null> {
    const { data, error } = await supabase
        .from("content_items")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

    if (error || !data) return null;

    return {
        slug: data.slug,
        meta: {
            title: data.title,
            description: data.meta_description || "",
            keywords: data.meta_keywords || "",
            canonicalPath: data.canonical_path || `/${data.slug}`,
        },
        hero: data.hero || {},
        intro: data.intro || {},
        sections: data.sections || [],
        faqs: data.faqs || [],
        relatedPages: data.related_pages || [],
        ctaTitle: data.cta_title,
        ctaSubtitle: data.cta_subtitle,
    } as SEOPageData;
}

/**
 * Fetch all published content slugs (for dynamic routing / sitemap).
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
): Promise<SEOPageData[]> {
    const { data, error } = await supabase
        .from("content_items")
        .select("*")
        .eq("page_type", pageType)
        .eq("status", "published")
        .order("created_at", { ascending: true });

    if (error || !data) return [];

    return data.map((item) => ({
        slug: item.slug,
        meta: {
            title: item.title,
            description: item.meta_description || "",
            keywords: item.meta_keywords || "",
            canonicalPath: item.canonical_path || `/${item.slug}`,
        },
        hero: item.hero || {},
        intro: item.intro || {},
        sections: item.sections || [],
        faqs: item.faqs || [],
        relatedPages: item.related_pages || [],
        ctaTitle: item.cta_title,
        ctaSubtitle: item.cta_subtitle,
    })) as SEOPageData[];
}
