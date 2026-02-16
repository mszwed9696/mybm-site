// =============================================================
// Route Computation — Pure Function
// =============================================================

import type { QuizAnswers } from "@/config/quizConfig";
import { PAIN_ROUTE_MAP, computeRecommendedOffer } from "@/config/routingRules";
import type { RecommendedOffer } from "@/config/routingRules";
import { generateRedirectToken } from "@/lib/routing/tokenGenerator";

export interface ComputedRoute {
    route_to: string;
    recommended_offer: RecommendedOffer;
    redirect_token: string;
}

/**
 * Pure, deterministic function that computes the route, offer,
 * and redirect token from quiz answers.
 *
 * No side effects. Fully testable.
 */
export function computeRoute(answers: QuizAnswers): ComputedRoute {
    const route_to = PAIN_ROUTE_MAP[answers.primary_pain] || "/problems/low-roas";
    const recommended_offer = computeRecommendedOffer(answers);
    const redirect_token = generateRedirectToken(answers.email, Date.now());

    return {
        route_to,
        recommended_offer,
        redirect_token,
    };
}
