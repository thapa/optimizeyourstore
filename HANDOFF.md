# HANDOFF.md — Living Project State

> This file tracks current build status, section inventory, and recent changes.
> Claude Code must update this file whenever a section, component, or page-level
> structure is added, removed, reordered, or meaningfully changed.

---

## Sections (page order)

| # | Component file | Section name | Theme | Status |
|---|---------------|--------------|-------|--------|
| 1 | `Hero.tsx` | Hero | dark | Built — split layout and headlines updated from sales-page |
| 2 | `LogoMarquee.tsx` | Trusted By | dark | Built — scrolling category names trust bar matching sales-page.html layout |
| 3 | `Services.tsx` | Revenue Problem | light | Built — 2x2 grid of conversion leakage cards matching sales-page.html |
| 4 | `Capabilities.tsx` | What we build | dark-surface `#1A0E10` | Built — horizontal accordion, 4 panels |
| 5 | `Method.tsx` | Our method | light | Built — sticky left column + 4 numbered timeline steps |
| 6 | `Stats.tsx` | By the numbers | dark | Built — 3 stat cards, `[N]` placeholders |
| 7 | `Reviews.tsx` | Client feedback | light | Built — Swiper carousel, 3 visible |
| 8 | `CTA.tsx` | Let's talk | dark-surface | Built — text-only, radial bleed |
| 9 | `Footer.tsx` | Footer | dark | Built |

Section eyebrow labels (`01 — TRUSTED BY`, `02 — HOW WE WORK`, …) appear on every section except the Hero.

---

## Current Focus

Real copy, numbers, testimonials, and client identity population. Use `[AGENCY NAME]`, `[N]`, `[CLIENT LOGO]`, `[Client Name]` as placeholders and flag them until the user confirms real values.

---

## Recent Changes

- Configured OpenGraph and Twitter card metadata for `/`, `/sales`, and `/sales-page` routes (including social share screenshot preview under `/public/og-image.png`).
- Set `metadataBase: new URL('https://convertiqx.com')` to support absolute URL resolution for social sharing.
- Created a fully styled, compliant Privacy Policy page route at `/privacy` and linked it in both homepage and sales page footers.
- Updated contact email from `arun@convertiqx.com` / `arun@optimizeyourstore.com` to `hello@convertiqx.com` across all CTA sections, footers, and reference HTML files.
- Updated `sales-page.html` and `src/components/Hero.tsx` with the new copy (headline "Your Ads Are Fine. Your Store Is the Leak.", subheadline "We find every conversion leak...", and primary CTA button "Find My Revenue Leaks") to align with Next.js CRO sales route.
- Added the Guarantee Callout badge and the Price Anchor line under the pricing section of `sales-page.html`.
- Updated final CTA copy and testimonials' brand/ad spend details in `sales-page.html`.
- Verified compilation and visual alignment of `/sales` page with the updated copy.
- Created duplicate sales route (/sales-page and /sales) with isolated CRO components under src/components/sales-page/ matching layout, spacings, and typography colors.
- Replaced the Services component with a dark-themed 'The Revenue Problem' section displaying a 2x2 grid of cards describing conversion blockers.
- Updated `LogoMarquee.tsx` to display horizontal infinite text categories marquee with a static "Brands we've grown" side label and a vertical divider.
- H1 responsive font size clamp adjusted for mobile devices to match salespage line wrapping.
- Mobile navigation links hidden and padding/widths aligned to prevent layout breakage.
- Hero H1 text-gradient styling and container width adjusted to fix premature text wraps.
- Navigation Header background transitions and Hero heading format updated.
- `Header.tsx` and `Hero.tsx` updated with the new `OptimizeYourStore.` logo, headlines, and split layout from sales-page.html.
- `Hero.tsx` and `LogoMarquee.tsx` extracted from `page.tsx` into standalone components.
- Page component order updated: Services → Capabilities → Method → Stats → Reviews → CTA → Footer.

---

## Sales Page Route (/sales-page & /sales) Sections

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

