// =============================================================
// GoHighLevel Integration Layer
// =============================================================
// This module is designed to be called from Supabase Edge Functions,
// NOT from the client side. API keys must never be exposed to the browser.

export interface GHLContactPayload {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    website?: string;
    tags: string[];
    customFields?: Record<string, string>;
}

/**
 * Upsert a contact in GoHighLevel.
 * This should be called from a Supabase Edge Function or server-side context.
 *
 * @param webhookUrl - The GHL webhook URL from environment variable
 * @param payload - Contact data to sync
 */
export async function syncContactToGHL(
    webhookUrl: string,
    payload: GHLContactPayload
): Promise<{ success: boolean; error?: string }> {
    if (!webhookUrl) {
        console.warn("GHL webhook URL not configured — skipping sync.");
        return { success: false, error: "GHL webhook URL not configured" };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contact: {
                    firstName: payload.name.split(" ")[0],
                    lastName: payload.name.split(" ").slice(1).join(" ") || "",
                    email: payload.email,
                    phone: payload.phone || "",
                    companyName: payload.company || "",
                    website: payload.website || "",
                    tags: payload.tags,
                    customField: payload.customFields || {},
                },
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("GHL sync failed:", errorText);
            return { success: false, error: errorText };
        }

        return { success: true };
    } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("GHL sync error:", message);
        return { success: false, error: message };
    }
}

/**
 * Build GHL tags from quiz data.
 * Maps pain points and other quiz fields to GHL-compatible tags.
 */
export function buildGHLTags(
    primaryPain: string,
    tagRules: Record<string, string[]>,
    additionalTags: string[] = []
): string[] {
    const painTags = tagRules[primaryPain] || [];
    return [...painTags, ...additionalTags];
}
