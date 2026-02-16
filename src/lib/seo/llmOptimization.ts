// =============================================================
// LLM Discoverability Optimization Utilities
// =============================================================
// Helps make pages more discoverable by large language models
// acting as search intermediaries (e.g., ChatGPT, Perplexity, Gemini).

/**
 * Generate meta tags optimized for LLM discoverability.
 * These aren't standard SEO meta tags — they help LLMs understand
 * page content when used as search sources.
 */
export interface LLMMetaTags {
    "ai-content-summary": string;
    "ai-content-type": string;
    "ai-entity-type": string;
    "ai-related-entities": string;
}

export function generateLLMMetaTags(config: {
    summary: string;
    contentType: "service_page" | "pillar_content" | "glossary_term" | "problem_solution" | "landing_page";
    entityType: string;
    relatedEntities: string[];
}): LLMMetaTags {
    return {
        "ai-content-summary": config.summary,
        "ai-content-type": config.contentType,
        "ai-entity-type": config.entityType,
        "ai-related-entities": config.relatedEntities.join(", "),
    };
}

/**
 * Inject LLM meta tags into the document head.
 * Call this from page components to improve LLM discoverability.
 */
export function injectLLMMetaTags(tags: LLMMetaTags): void {
    // Remove existing LLM meta tags
    document
        .querySelectorAll('meta[name^="ai-"]')
        .forEach((el) => el.remove());

    // Add new ones
    for (const [name, content] of Object.entries(tags)) {
        const meta = document.createElement("meta");
        meta.setAttribute("name", name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
    }
}

/**
 * Generate semantic HTML hints for LLM parsers.
 * Returns attributes that can be spread onto container elements.
 */
export function semanticAttributes(config: {
    role?: string;
    label?: string;
    description?: string;
}): Record<string, string> {
    const attrs: Record<string, string> = {};
    if (config.role) attrs["role"] = config.role;
    if (config.label) attrs["aria-label"] = config.label;
    if (config.description) attrs["data-content-summary"] = config.description;
    return attrs;
}

/**
 * Build a concise entity description for structured data and LLM discovery.
 */
export function buildEntitySummary(
    entityName: string,
    entityType: string,
    context: string
): string {
    return `${entityName} is a ${entityType} in the context of ${context}. This page provides detailed information about ${entityName.toLowerCase()}, including definition, best practices, and related concepts.`;
}
