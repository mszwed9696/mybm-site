import { describe, it, expect } from "vitest";
import { computeRoute } from "@/lib/routing/computeRoute";
import type { QuizAnswers } from "@/config/quizConfig";

/** Helper: create a full QuizAnswers object with overrides */
function makeAnswers(overrides: Partial<QuizAnswers> = {}): QuizAnswers {
    return {
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
        ...overrides,
    };
}

describe("computeRoute", () => {
    // ── Route Mapping ──────────────────────────────────────────

    it("routes low_roas pain to /problems/low-roas", () => {
        const result = computeRoute(makeAnswers({ primary_pain: "low_roas" }));
        expect(result.route_to).toBe("/problems/low-roas");
    });

    it("routes low_conversion_rate to /problems/low-conversion-rate", () => {
        const result = computeRoute(
            makeAnswers({ primary_pain: "low_conversion_rate" })
        );
        expect(result.route_to).toBe("/problems/low-conversion-rate");
    });

    it("routes low_ltv_retention to /problems/low-ltv-retention", () => {
        const result = computeRoute(
            makeAnswers({ primary_pain: "low_ltv_retention" })
        );
        expect(result.route_to).toBe("/problems/low-ltv-retention");
    });

    it("routes attribution_tracking to /problems/attribution-tracking", () => {
        const result = computeRoute(
            makeAnswers({ primary_pain: "attribution_tracking" })
        );
        expect(result.route_to).toBe("/problems/attribution-tracking");
    });

    it("routes scaling_breaks to /problems/scaling-breaks", () => {
        const result = computeRoute(
            makeAnswers({ primary_pain: "scaling_breaks" })
        );
        expect(result.route_to).toBe("/problems/scaling-breaks");
    });

    it("routes overreliance_on_paid to /problems/overreliance-on-paid", () => {
        const result = computeRoute(
            makeAnswers({ primary_pain: "overreliance_on_paid" })
        );
        expect(result.route_to).toBe("/problems/overreliance-on-paid");
    });

    it("falls back to /problems/low-roas for unknown pain", () => {
        const result = computeRoute(
            makeAnswers({ primary_pain: "unknown_pain_xyz" })
        );
        expect(result.route_to).toBe("/problems/low-roas");
    });

    // ── Offer Recommendation Logic ────────────────────────────

    it("recommends Growth Audit for starter brands (under_50k)", () => {
        const result = computeRoute(
            makeAnswers({ monthly_revenue: "under_50k", primary_pain: "low_roas" })
        );
        expect(result.recommended_offer.offer_key).toBe("growth_audit");
    });

    it("recommends Growth Audit for starter brands (50k_100k)", () => {
        const result = computeRoute(
            makeAnswers({
                monthly_revenue: "50k_100k",
                primary_pain: "scaling_breaks",
            })
        );
        expect(result.recommended_offer.offer_key).toBe("growth_audit");
    });

    it("recommends Retention Accelerator for retention pain (growth tier)", () => {
        const result = computeRoute(
            makeAnswers({
                monthly_revenue: "100k_250k",
                primary_pain: "low_ltv_retention",
            })
        );
        expect(result.recommended_offer.offer_key).toBe("retention_accelerator");
    });

    it("recommends Retention Accelerator for retention pain (scale tier)", () => {
        const result = computeRoute(
            makeAnswers({
                monthly_revenue: "over_1m",
                primary_pain: "low_ltv_retention",
            })
        );
        expect(result.recommended_offer.offer_key).toBe("retention_accelerator");
    });

    it("recommends Full-Stack Growth for scale brands", () => {
        const result = computeRoute(
            makeAnswers({ monthly_revenue: "500k_1m", primary_pain: "low_roas" })
        );
        expect(result.recommended_offer.offer_key).toBe("full_stack_growth");
    });

    it("recommends Full-Stack Growth for over_1m brands", () => {
        const result = computeRoute(
            makeAnswers({ monthly_revenue: "over_1m", primary_pain: "low_roas" })
        );
        expect(result.recommended_offer.offer_key).toBe("full_stack_growth");
    });

    it("recommends Performance Partnership for growth brands with low_roas", () => {
        const result = computeRoute(
            makeAnswers({ monthly_revenue: "100k_250k", primary_pain: "low_roas" })
        );
        expect(result.recommended_offer.offer_key).toBe("performance_partnership");
    });

    it("recommends Performance Partnership for growth brands with attribution pain", () => {
        const result = computeRoute(
            makeAnswers({
                monthly_revenue: "250k_500k",
                primary_pain: "attribution_tracking",
            })
        );
        expect(result.recommended_offer.offer_key).toBe("performance_partnership");
    });

    it("recommends Full-Stack for growth brands with overreliance_on_paid", () => {
        const result = computeRoute(
            makeAnswers({
                monthly_revenue: "250k_500k",
                primary_pain: "overreliance_on_paid",
            })
        );
        expect(result.recommended_offer.offer_key).toBe("full_stack_growth");
    });

    // ── Token Generation ──────────────────────────────────────

    it("produces a non-empty redirect token", () => {
        const result = computeRoute(makeAnswers());
        expect(result.redirect_token).toBeTruthy();
        expect(result.redirect_token.length).toBeGreaterThan(10);
    });

    it("produces a URL-safe token (no special characters)", () => {
        const result = computeRoute(makeAnswers());
        expect(result.redirect_token).toMatch(/^[A-Za-z0-9_-]+$/);
    });

    // ── Return Shape ──────────────────────────────────────────

    it("returns all required fields", () => {
        const result = computeRoute(makeAnswers());
        expect(result).toHaveProperty("route_to");
        expect(result).toHaveProperty("recommended_offer");
        expect(result).toHaveProperty("redirect_token");
        expect(result.recommended_offer).toHaveProperty("offer_key");
        expect(result.recommended_offer).toHaveProperty("offer_name");
        expect(result.recommended_offer).toHaveProperty("price_display");
        expect(result.recommended_offer).toHaveProperty("cta_type");
        expect(result.recommended_offer).toHaveProperty("rationale_bullets");
        expect(result.recommended_offer).toHaveProperty("next_step_copy");
    });

    it("offer cta_type is always checkout or book_call", () => {
        const pains = [
            "low_roas",
            "low_conversion_rate",
            "low_ltv_retention",
            "attribution_tracking",
            "scaling_breaks",
            "overreliance_on_paid",
        ];
        for (const pain of pains) {
            const result = computeRoute(makeAnswers({ primary_pain: pain }));
            expect(["checkout", "book_call"]).toContain(
                result.recommended_offer.cta_type
            );
        }
    });
});
