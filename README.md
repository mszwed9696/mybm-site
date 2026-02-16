# Performance Partner Portal — Mind Your Business Media

The MYB Performance Partner Portal: a React + TypeScript web application for supplement brand growth services. Built with Antigravity, powered by Supabase.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | Supabase (Postgres, Auth, RLS) |
| Routing | React Router v6 |
| Testing | Vitest |
| Deployment | Vercel (auto-deploy from `main`) |

## Architecture

```
src/
├── components/       # UI components (forms, quiz, layout)
├── config/           # Quiz config, routing rules, constants
├── lib/
│   ├── api/          # Supabase API layer (leads, quiz, content)
│   ├── integrations/ # GoHighLevel, email (server-side scaffolds)
│   ├── routing/      # Route computation, token generation
│   └── seo/          # Sitemap generator, LLM optimization
├── pages/            # Route-level page components
└── test/             # Unit tests (Vitest)
```

## Key Features

- **Interactive Quiz Funnel** — 8-step quiz that routes supplement brands to personalized problem pages and offer recommendations
- **Deterministic Routing Engine** — Pure-function routing based on pain point, revenue tier, and lifecycle maturity
- **SEO Content System** — Dynamic glossary, pillar pages, XML sitemap, and LLM discoverability meta tags
- **Lead Capture** — Widget and quiz submissions stored in Supabase with UTM tracking
- **Integration Scaffolds** — GoHighLevel contact sync and multi-provider email (Resend, SendGrid, Postmark)

## Getting Started

```sh
# Clone the repo
git clone https://github.com/mszwed9696/performance-partner-portal.git
cd performance-partner-portal

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase URL and anon key

# Start dev server
npm run dev
```

## Environment Variables

See [.env.example](.env.example) for all required variables:
- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Supabase publishable anon key

## Testing

```sh
# Run all tests
npx vitest run

# Watch mode
npx vitest
```

**42 tests** across 4 suites: `computeRoute`, `widgetSubmit`, `quizSubmit`, `sitemapGenerator`.

## Deployment

This repo is connected to Vercel. Every push to `main` triggers an auto-deploy.

```sh
# Build for production
npm run build

# Push to deploy
git push origin main
```

## Database (Supabase)

Core tables: `leads`, `quiz_sessions`, `deliverables`, `content_items`. All tables have RLS enabled with appropriate policies.
