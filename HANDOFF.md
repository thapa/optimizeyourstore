# HANDOFF.md — Living Project State

> This file tracks current build status, section inventory, and recent changes.
> Claude Code must update this file whenever a section, component, or page-level
> structure is added, removed, reordered, or meaningfully changed.

---

## Routes

| Route | Renders | Canonical |
|-------|---------|-----------|
| `/` | The 12 `sales-page/` components (see table at the bottom) | `/` — self |
| `/sales` | Same 12 components | → `/` |
| `/sales-page` | Same 12 components | → `/` |
| `/privacy` | Privacy Policy | — |

**As of 2026-08-04 the sales page IS the homepage.** `src/app/page.tsx` renders the
same composition as `/sales`; verified byte-for-byte identical rendered text, differing
only by the `og:url` meta tag. All three routes emit
`<link rel="canonical" href="https://convertiqx.com"/>` so the duplicates don't compete
in search.

### Orphaned homepage components (on disk, rendered by nothing)

The previous bespoke homepage composition is no longer referenced by any route. These
files still exist under `src/components/` and are **not** imported anywhere:

`Hero.tsx` · `LogoMarquee.tsx` · `Services.tsx` · `Capabilities.tsx` · `Method.tsx` ·
`Stats.tsx` · `Reviews.tsx` · `Pricing.tsx` · `CTA.tsx` · `Footer.tsx`

They were left in place rather than deleted. The old `page.tsx` that composed them is
recoverable from commit `783bd2d`. `SalesLogoMarquee.tsx` is likewise unreferenced.
`Header.tsx` and `SmoothScroll.tsx` are still live.

---

## Current Focus

Real copy, numbers, testimonials, and client identity population. Use `[AGENCY NAME]`, `[N]`, `[CLIENT LOGO]`, `[Client Name]` as placeholders and flag them until the user confirms real values.

---

## Abandoned: Hallmark Redesign

The Hallmark redesign of the sales page was reverted on 2026-08-04 and **is not
wanted**. It was never committed. The current `sales-page/` components are the
pre-redesign versions, and that is intentional — do not "restore" them.

A local-only `git stash` entry (`stash@{0}`) still holds that work. It exists on one
machine, is not on the remote, and can be discarded at any time with
`git stash drop stash@{0}`.

---

## Recent Changes

- **2026-08-04 — Sales page promoted to homepage.** `src/app/page.tsx` now renders the 12 `sales-page/` components with the CRO metadata; `alternates.canonical` added to all three routes pointing at `/`. The 10 old homepage components are orphaned on disk, not deleted. `npm run build` passes, 5 static routes.
- **2026-08-04 — Hallmark redesign reverted to `stash@{0}`, not committed.** Working tree returned to `783bd2d` (== `origin/master`). See *Stashed Work* above for recovery commands. Tables below are the pre-redesign state.
- Configured OpenGraph and Twitter card metadata for `/`, `/sales`, and `/sales-page` routes (including social share screenshot preview under `/public/og-image.png`).
- Set `metadataBase: new URL('https://convertiqx.com')` to support absolute URL resolution for social sharing.
- Created a fully styled, compliant Privacy Policy page route at `/privacy` and linked it in both homepage and sales page footers.
- Updated contact email from `arun@convertiqx.com` / `arun@optimizeyourstore.com` to `hello@convertiqx.com` across all CTA sections, footers, and reference HTML files.
- Updated `sales-page.html` and `src/components/Hero.tsx` with the new copy (headline "Your Ads Are Fine. Your Store Is the Leak.", subheadline "We find every conversion leak...", and primary CTA button "Find My Revenue Leaks") to align with Next.js CRO sales route.
- Added the Guarantee Callout badge and the Price Anchor line under the pricing section of `sales-page.html`.
- Updated final CTA copy and testimonials' brand/ad spend details in `sales-page.html`.
- Verified compilation and visual alignment of `/sales` page with the updated copy.
- Created duplicate sales route (/sales-page and /sales) with isolated CRO components under src/components/sales-page/ matching layout, spacings, and typography colors.

---

## Sales Page Sections (rendered by `/`, `/sales`, and `/sales-page`)

| # | Component file | Section name | Theme | Status |
|---|---------------|--------------|-------|--------|
| 1 | `SalesHero.tsx` | Hero | dark | Built — isolated copy of Hero.tsx |
| 2 | `SalesLogoMarquee.tsx` | Trust Marquee | dark | Built — DTC scrolling categories |
| 3 | `SalesProblem.tsx` | Problem | light | Built — 2x2 grid of conversion blockers |
| 4 | `SalesServices.tsx` | Services | light | Built — consultation + CRO programme details |
| 5 | `SalesPricing.tsx` | Pricing | light | Built — tabbed Strategy Audit vs CRO Retainer pricing cards |
| 6 | `SalesMethod.tsx` | Process | light | Built — 4-step workflow cards grid |
| 7 | `SalesProof.tsx` | Results Proof | dark | Built — 6 results metrics, screenshots gallery, and lightbox modal |
| 8 | `SalesStats.tsx` | Proven Stats | dark | Built — 4 big counter stats |
| 9 | `SalesReviews.tsx` | Testimonials | light | Built — 3 real client feedback quotes |
| 10 | `SalesFAQ.tsx` | FAQs | light | Built — 7 interactive FAQ accordions |
| 11 | `SalesCTA.tsx` | Final CTA | dark-surface | Built — "Ready to Stop Leaving Revenue on the Table?" banner |
| 12 | `SalesFooter.tsx` | Footer | dark | Built — branding, contact links, and legal |

