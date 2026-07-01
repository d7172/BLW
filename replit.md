# BWCL — BW Container Lines

A premium marketing website for BWCL (BW Container Lines), an Indian rail-first multimodal logistics company, with a real contact/quote-request backend.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (contact backend)
- `pnpm --filter @workspace/bwcl run dev` — run the BWCL website (Vite)
- `pnpm --filter @workspace/bwcl run typecheck` — typecheck the website (use this to verify, not `build`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string
- Prefer restarting workflows over `pnpm dev` at the root (see pnpm-workspace skill).

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7 + Tailwind, react-router-dom, framer-motion, lenis, embla-carousel, react-helmet-async, react-hook-form + zod, shadcn/ui
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)

## Where things live

- Website: `artifacts/bwcl/` — pages in `src/pages/` (Home, About, Services, Contact, PrivacyPolicy, TermsAndConditions, NotFound); layout in `src/components/layout/`
- Contact backend route: `artifacts/api-server/src/routes/contacts.ts` (POST /api/contacts)
- DB schema (source of truth): `lib/db/src/schema/` — `contacts.ts` holds the contact-submissions table
- API contract (source of truth): `lib/api-spec/openapi.yaml` — edit this first, then run codegen
- Generated client hooks (e.g. `useCreateContact`): `@workspace/api-client-react`

## Architecture decisions

- Contract-first: the contact API is defined in `openapi.yaml`, then Orval generates the React Query hook (`useCreateContact`) and the server-side Zod validator (`CreateContactBody`). The Express route validates with that generated schema and returns 201/400/500.
- The frontend Contact form posts via the generated hook to a relative `/api/contacts`, which the shared reverse proxy routes to the API server (no base-URL config needed in dev or prod).
- The `privacy` consent checkbox is validated client-side only and intentionally NOT persisted to the DB.
- Fully original design (not copied from bwcl.in). Light, eco-modern "Nanoplazz"-inspired aesthetic: mint background (#F3FAF6), deep fresh-green primary (hsl 146 64% 37%), coral secondary (hsl 14 88% 60%), charcoal text (#272B30), very rounded corners, floating pill nav, bento cards, circular-progress stat rings, italic green accent words. Fonts: Outfit (sans) + Bricolage Grotesque (serif/display).
- Color contrast is intentionally tuned to large-text AA (~3:1) for the big bold CTAs, NOT full normal-text AA, to preserve the reference aesthetic (the reference itself is not strict-AA). Do not "fix" the green/coral to 4.5:1 without checking this tradeoff first.

## Product

Marketing site for a rail-first multimodal logistics company: Home (hero, stats, strategy pillars, services overview, why-partner, industries), About (vision/mission, core values, strategic pillars, leadership, ROI metrics), Services, and a Contact page whose quote-request form persists submissions to Postgres.

## User preferences

- No emojis in the website UI or content.

## Gotchas

- For toasts in `artifacts/bwcl`, use `useToast()` from `@/hooks/use-toast` with the `<Toaster />` from `@/components/ui/toaster`. Do NOT use the `@/components/ui/sonner` wrapper — it depends on a `next-themes` provider that isn't mounted and will crash at runtime (typecheck won't catch it).
- Edit `lib/api-spec/openapi.yaml` then run codegen before wiring new endpoints; don't hand-write client calls.
- Never use `console.log` in server code — use `req.log` in handlers.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
