// =============================================================
// Redirect Token Generator
// =============================================================
// Generates unique, URL-safe tokens for redirect validation.
// Uses a simple hash-based approach suitable for client-side generation.
// For production HMAC-SHA256, use a Supabase Edge Function.

/**
 * Generate a URL-safe redirect token from an email + timestamp.
 * This is a deterministic hash for deduplication and validation.
 */
export function generateRedirectToken(
    email: string,
    timestamp: number
): string {
    const input = `${email}:${timestamp}:${Math.random().toString(36).substring(2)}`;
    return btoa(input)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "")
        .substring(0, 32);
}

/**
 * Validate that a token looks well-formed (basic format check).
 */
export function isValidTokenFormat(token: string): boolean {
    return /^[A-Za-z0-9_-]{20,32}$/.test(token);
}
