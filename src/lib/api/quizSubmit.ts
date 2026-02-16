import { supabase } from "@/lib/supabaseClient";

export interface QuizAnswers {
    sub_niche: string;
    monthly_revenue: string;
    monthly_ad_spend: string;
    primary_platform: string;
    primary_pain: string;
    lifecycle_maturity: string;
    commerce_channel: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    website: string;
}

export interface QuizSubmitPayload {
    answers: QuizAnswers;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    referrer?: string;
}

export interface QuizSubmitResult {
    leadId: string;
    sessionId: string;
    routeTo: string;
    recommendedOffer: Record<string, unknown>;
    redirectToken: string;
}

/**
 * Submit quiz answers: creates a lead, then a quiz session with computed routing.
 * Routing computation happens via the computeRoute utility.
 */
export async function quizSubmit(
    payload: QuizSubmitPayload,
    computedRoute: {
        route_to: string;
        recommended_offer: Record<string, unknown>;
        redirect_token: string;
    }
): Promise<QuizSubmitResult> {
    // 1. Insert lead
    const { data: lead, error: leadError } = await supabase
        .from("leads")
        .insert({
            name: payload.answers.name,
            email: payload.answers.email,
            phone: payload.answers.phone,
            company: payload.answers.company,
            website: payload.answers.website,
            sub_niche: payload.answers.sub_niche,
            monthly_revenue: payload.answers.monthly_revenue,
            monthly_ad_spend: payload.answers.monthly_ad_spend,
            primary_platform: payload.answers.primary_platform,
            primary_pain: payload.answers.primary_pain,
            lifecycle_maturity: payload.answers.lifecycle_maturity,
            commerce_channel: payload.answers.commerce_channel,
            utm_source: payload.utm_source,
            utm_medium: payload.utm_medium,
            utm_campaign: payload.utm_campaign,
            utm_content: payload.utm_content,
            utm_term: payload.utm_term,
            referrer: payload.referrer,
            tags: ["source:quiz", "funnel:quiz-lead"],
        })
        .select("id")
        .single();

    if (leadError) {
        console.error("Quiz lead creation error:", leadError);
        throw new Error(leadError.message);
    }

    // 2. Insert quiz session with routing data
    const { data: session, error: sessionError } = await supabase
        .from("quiz_sessions")
        .insert({
            lead_id: lead.id,
            answers: payload.answers,
            computed_pain: payload.answers.primary_pain,
            route_to: computedRoute.route_to,
            recommended_offer: computedRoute.recommended_offer,
            redirect_token: computedRoute.redirect_token,
            completed_at: new Date().toISOString(),
        })
        .select("id")
        .single();

    if (sessionError) {
        console.error("Quiz session creation error:", sessionError);
        throw new Error(sessionError.message);
    }

    return {
        leadId: lead.id,
        sessionId: session.id,
        routeTo: computedRoute.route_to,
        recommendedOffer: computedRoute.recommended_offer,
        redirectToken: computedRoute.redirect_token,
    };
}
