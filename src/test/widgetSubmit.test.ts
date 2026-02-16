import { describe, it, expect, vi, beforeEach } from "vitest";
import type { WidgetSubmitPayload } from "@/lib/api/widgetSubmit";

// ── Mock Supabase ───────────────────────────────────────────
const mockSingle = vi.fn();
const mockSelect = vi.fn(() => ({ single: mockSingle }));
const mockInsert = vi.fn(() => ({ select: mockSelect }));
const mockFrom = vi.fn(() => ({ insert: mockInsert }));

vi.mock("@/lib/supabaseClient", () => ({
    supabase: { from: (...args: unknown[]) => mockFrom(...args) },
}));

// ── Import after mock ───────────────────────────────────────
const { widgetSubmit } = await import("@/lib/api/widgetSubmit");

const BASE_PAYLOAD: WidgetSubmitPayload = {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "555-4321",
    company: "SupCo",
    website: "https://supco.com",
};

describe("widgetSubmit", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("inserts into the leads table", async () => {
        mockSingle.mockResolvedValue({ data: { id: "lead-001" }, error: null });

        await widgetSubmit(BASE_PAYLOAD);
        expect(mockFrom).toHaveBeenCalledWith("leads");
    });

    it("returns the created lead ID", async () => {
        mockSingle.mockResolvedValue({ data: { id: "lead-002" }, error: null });

        const result = await widgetSubmit(BASE_PAYLOAD);
        expect(result.leadId).toBe("lead-002");
    });

    it("includes core fields in the insert payload", async () => {
        mockSingle.mockResolvedValue({ data: { id: "lead-003" }, error: null });

        await widgetSubmit(BASE_PAYLOAD);

        const insertedPayload = mockInsert.mock.calls[0][0];
        expect(insertedPayload.name).toBe("Jane Doe");
        expect(insertedPayload.email).toBe("jane@example.com");
        expect(insertedPayload.company).toBe("SupCo");
    });

    it("includes UTM parameters when provided", async () => {
        mockSingle.mockResolvedValue({ data: { id: "lead-004" }, error: null });

        await widgetSubmit({
            ...BASE_PAYLOAD,
            utm_source: "google",
            utm_medium: "cpc",
            utm_campaign: "spring-sale",
        });

        const insertedPayload = mockInsert.mock.calls[0][0];
        expect(insertedPayload.utm_source).toBe("google");
        expect(insertedPayload.utm_medium).toBe("cpc");
        expect(insertedPayload.utm_campaign).toBe("spring-sale");
    });

    it("tags the lead with source:widget", async () => {
        mockSingle.mockResolvedValue({ data: { id: "lead-005" }, error: null });

        await widgetSubmit(BASE_PAYLOAD);

        const insertedPayload = mockInsert.mock.calls[0][0];
        expect(insertedPayload.tags).toContain("source:widget");
    });

    it("throws on Supabase error", async () => {
        mockSingle.mockResolvedValue({
            data: null,
            error: { message: "Insert failed" },
        });

        await expect(widgetSubmit(BASE_PAYLOAD)).rejects.toThrow("Insert failed");
    });
});
