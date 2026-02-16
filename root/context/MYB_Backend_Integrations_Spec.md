# BACKEND + INTEGRATIONS SPEC

## Responsibilities

1. Create Supabase schema (`leads`, `quiz_sessions`, `deliverables`, `content_items`).
2. Generate migrations automatically.
3. Build API routes: `/api/quiz/submit` and `/api/widget/submit`.
4. Implement GoHighLevel sync with tagging rules.
5. Implement email delivery provider integration.
6. Set up ISR revalidation for SEO content.

## Autonomy Rules

- If Supabase keys missing → **pause and request.**
- If GHL webhook missing → **pause and request.**
- Do not hardcode secrets.
