import { describe, it, expect, vi, beforeEach } from "vitest";

// ── Mock Supabase ───────────────────────────────────────────
const mockOrder = vi.fn();
const mockEq = vi.fn();
const mockSelect = vi.fn();
const mockFrom = vi.fn();

vi.mock("@/lib/supabaseClient", () => ({
    supabase: { from: (...args: unknown[]) => mockFrom(...args) },
}));

// ── Import after mock ───────────────────────────────────────
const { generateSitemapXML } = await import("@/lib/seo/sitemapGenerator");

describe("generateSitemapXML", () => {
    beforeEach(() => {
        vi.clearAllMocks();

        // Build the mock chain: from → select → eq → order
        mockOrder.mockResolvedValue({ data: [], error: null });
        mockEq.mockReturnValue({ order: mockOrder });
        mockSelect.mockReturnValue({ eq: mockEq });
        mockFrom.mockReturnValue({ select: mockSelect });
    });

    it("produces valid XML", async () => {
        const xml = await generateSitemapXML();
        expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
        expect(xml).toContain("<urlset");
        expect(xml).toContain("</urlset>");
    });

    it("includes static pages", async () => {
        const xml = await generateSitemapXML();
        expect(xml).toContain("<loc>https://mindyourbusiness.media/</loc>");
        expect(xml).toContain(
            "<loc>https://mindyourbusiness.media/services</loc>"
        );
        expect(xml).toContain(
            "<loc>https://mindyourbusiness.media/contact</loc>"
        );
        expect(xml).toContain("<loc>https://mindyourbusiness.media/quiz</loc>");
    });

    it("includes problem pages", async () => {
        const xml = await generateSitemapXML();
        expect(xml).toContain(
            "<loc>https://mindyourbusiness.media/problems/low-roas</loc>"
        );
        expect(xml).toContain(
            "<loc>https://mindyourbusiness.media/problems/scaling-breaks</loc>"
        );
    });

    it("includes dynamic content items from Supabase", async () => {
        mockOrder.mockResolvedValue({
            data: [
                {
                    slug: "roas-guide",
                    updated_at: "2026-01-15T10:00:00Z",
                    page_type: "pillar",
                },
                {
                    slug: "cpa-definition",
                    updated_at: "2026-01-10T10:00:00Z",
                    page_type: "glossary",
                },
            ],
            error: null,
        });

        const xml = await generateSitemapXML();
        expect(xml).toContain(
            "<loc>https://mindyourbusiness.media/roas-guide</loc>"
        );
        expect(xml).toContain(
            "<loc>https://mindyourbusiness.media/cpa-definition</loc>"
        );
    });

    it("assigns correct priority by page type", async () => {
        mockOrder.mockResolvedValue({
            data: [
                {
                    slug: "pillar-page",
                    updated_at: "2026-01-15T10:00:00Z",
                    page_type: "pillar",
                },
                {
                    slug: "glossary-term",
                    updated_at: "2026-01-15T10:00:00Z",
                    page_type: "glossary",
                },
            ],
            error: null,
        });

        const xml = await generateSitemapXML();

        // Pillar pages get 0.9 priority
        const pillarMatch = xml.match(
            /pillar-page<\/loc>\s*<lastmod>[^<]+<\/lastmod>\s*<changefreq>[^<]+<\/changefreq>\s*<priority>([^<]+)<\/priority>/
        );
        expect(pillarMatch?.[1]).toBe("0.9");

        // Glossary pages get 0.5 priority
        const glossaryMatch = xml.match(
            /glossary-term<\/loc>\s*<lastmod>[^<]+<\/lastmod>\s*<changefreq>[^<]+<\/changefreq>\s*<priority>([^<]+)<\/priority>/
        );
        expect(glossaryMatch?.[1]).toBe("0.5");
    });

    it("includes lastmod from Supabase data", async () => {
        mockOrder.mockResolvedValue({
            data: [
                {
                    slug: "test-page",
                    updated_at: "2026-02-10T15:30:00Z",
                    page_type: "seo_landing",
                },
            ],
            error: null,
        });

        const xml = await generateSitemapXML();
        expect(xml).toContain("<lastmod>2026-02-10</lastmod>");
    });

    it("handles Supabase errors gracefully (still produces static entries)", async () => {
        mockOrder.mockResolvedValue({
            data: null,
            error: { message: "DB error" },
        });

        const xml = await generateSitemapXML();
        // Static pages should still be present
        expect(xml).toContain("<loc>https://mindyourbusiness.media/</loc>");
        expect(xml).toContain("</urlset>");
    });

    it("homepage has priority 1.0", async () => {
        const xml = await generateSitemapXML();
        const homeMatch = xml.match(
            /mindyourbusiness.media\/<\/loc>\s*<changefreq>[^<]+<\/changefreq>\s*<priority>([^<]+)<\/priority>/
        );
        expect(homeMatch?.[1]).toBe("1.0");
    });
});
