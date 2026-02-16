import { describe, it, expect, vi, beforeEach } from "vitest";

// ── Mock Supabase ───────────────────────────────────────────
const mockSingle = vi.fn();
const mockSelect = vi.fn(() => ({ single: mockSingle }));
const mockInsert = vi.fn(() => ({ select: mockSelect }));
const mockFrom = vi.fn(() => ({ insert: mockInsert }));

vi.mock("@/lib/supabaseClient", () => ({
    supabase: { from: (...args: unknown[]) => mockFrom(...args) },
}));

// ── Import after mock ───────────────────────────────────────
const { quizSubmit } = await import("@/lib/api/quizSubmit");

const SAMPLE_ANSWERS = {
    sub_niche: "sports_nutrition",
    monthly_revenue: "100k_250k",
    monthly_ad_spend: "25k_50k",
    primary_platform: "meta",
    primary_pain: "low_roas",
    lifecycle_maturity: "basic_email",
    commerce_channel: "shopify_dtc",
    name: "Test User",
    email: "test@example.com",
    phone: "555-1234",
    company: "TestCo",
    website: "https://testco.com",
};

const COMPUTED_ROUTE = {
    route_to: "/problems/low-roas",
    recommended_offer: { offer_key: "performance_partnership" },
    redirect_token: "abc123token",
};

describe("quizSubmit", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        // Reset chain for each call to from()
        // First call is leads insert, second is quiz_sessions insert
        let callCount = 0;
        mockFrom.mockImplementation(() => {
            callCount++;
            return { insert: mockInsert };
        });
    });

    it("inserts into both leads and quiz_sessions tables", async () => {
        // First call: leads
        mockSingle
            .mockResolvedValueOnce({ data: { id: "lead-100" }, error: null })
            // Second call: quiz_sessions
            .mockResolvedValueOnce({ data: { id: "session-200" }, error: null });

        await quizSubmit({ answers: SAMPLE_ANSWERS }, COMPUTED_ROUTE);

        const fromCalls = mockFrom.mock.calls.map((c) => c[0]);
        expect(fromCalls).toContain("leads");
        expect(fromCalls).toContain("quiz_sessions");
    });

    it("returns leadId and sessionId on success", async () => {
        mockSingle
            .mockResolvedValueOnce({ data: { id: "lead-100" }, error: null })
            .mockResolvedValueOnce({ data: { id: "session-200" }, error: null });

        const result = await quizSubmit(
            { answers: SAMPLE_ANSWERS },
            COMPUTED_ROUTE
        );

        expect(result.leadId).toBe("lead-100");
        expect(result.sessionId).toBe("session-200");
    });

    it("returns routeTo and redirectToken from computed route", async () => {
        mockSingle
            .mockResolvedValueOnce({ data: { id: "lead-100" }, error: null })
            .mockResolvedValueOnce({ data: { id: "session-200" }, error: null });

        const result = await quizSubmit(
            { answers: SAMPLE_ANSWERS },
            COMPUTED_ROUTE
        );

        expect(result.routeTo).toBe("/problems/low-roas");
        expect(result.redirectToken).toBe("abc123token");
    });

    it("includes quiz-specific tags on lead", async () => {
        mockSingle
            .mockResolvedValueOnce({ data: { id: "lead-100" }, error: null })
            .mockResolvedValueOnce({ data: { id: "session-200" }, error: null });

        await quizSubmit({ answers: SAMPLE_ANSWERS }, COMPUTED_ROUTE);

        const leadsInsert = mockInsert.mock.calls[0][0];
        expect(leadsInsert.tags).toContain("source:quiz");
    });

    it("throws on lead creation error", async () => {
        mockSingle.mockResolvedValueOnce({
            data: null,
            error: { message: "Lead insert failed" },
        });

        await expect(
            quizSubmit({ answers: SAMPLE_ANSWERS }, COMPUTED_ROUTE)
        ).rejects.toThrow("Lead insert failed");
    });

    it("throws on session creation error", async () => {
        mockSingle
            .mockResolvedValueOnce({ data: { id: "lead-100" }, error: null })
            .mockResolvedValueOnce({
                data: null,
                error: { message: "Session insert failed" },
            });

        await expect(
            quizSubmit({ answers: SAMPLE_ANSWERS }, COMPUTED_ROUTE)
        ).rejects.toThrow("Session insert failed");
    });

    it("includes UTM parameters when provided", async () => {
        mockSingle
            .mockResolvedValueOnce({ data: { id: "lead-100" }, error: null })
            .mockResolvedValueOnce({ data: { id: "session-200" }, error: null });

        await quizSubmit(
            {
                answers: SAMPLE_ANSWERS,
                utm_source: "facebook",
                utm_campaign: "quiz-promo",
            },
            COMPUTED_ROUTE
        );

        const leadsInsert = mockInsert.mock.calls[0][0];
        expect(leadsInsert.utm_source).toBe("facebook");
        expect(leadsInsert.utm_campaign).toBe("quiz-promo");
    });
});
