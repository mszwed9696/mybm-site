import { supabase } from "@/lib/supabaseClient";

export interface WidgetSubmitPayload {
    name: string;
    email: string;
    phone: string;
    company: string;
    website: string;
    monthly_revenue?: string;
    monthly_ad_spend?: string;
    primary_platform?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    referrer?: string;
}

/**
 * Submit a widget/audit form to the leads table.
 * Returns the created lead ID on success.
 */
export async function widgetSubmit(
    payload: WidgetSubmitPayload
): Promise<{ leadId: string }> {
    const { data, error } = await supabase
        .from("leads")
        .insert({
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            company: payload.company,
            website: payload.website,
            monthly_revenue: payload.monthly_revenue,
            monthly_ad_spend: payload.monthly_ad_spend,
            primary_platform: payload.primary_platform,
            utm_source: payload.utm_source,
            utm_medium: payload.utm_medium,
            utm_campaign: payload.utm_campaign,
            utm_content: payload.utm_content,
            utm_term: payload.utm_term,
            referrer: payload.referrer,
            tags: ["source:widget", "funnel:audit-request"],
        })
        .select("id")
        .single();

    if (error) {
        console.error("Widget submit error:", error);
        throw new Error(error.message);
    }

    return { leadId: data.id };
}
