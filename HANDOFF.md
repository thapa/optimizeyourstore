# HANDOFF.md — Living Project State

> This file tracks current build status, section inventory, and recent changes.
> Claude Code must update this file whenever a section, component, or page-level
> structure is added, removed, reordered, or meaningfully changed.

---

## Sections (page order)

| # | Component file | Section name | Theme | Status |
|---|---------------|--------------|-------|--------|
| 1 | `Hero.tsx` | Hero | dark | Built — content TBD |
| 2 | `LogoMarquee.tsx` | Trusted By | dark | Built — `[N]` placeholder, real logos TBD |
| 3 | `Services.tsx` | How we work | light | Built — 3 cards (Greenfield Build / Platform Migration / Ongoing Engineering) |
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

- `Hero.tsx` and `LogoMarquee.tsx` extracted from `page.tsx` into standalone components.
- Page component order updated: Services → Capabilities → Method → Stats → Reviews → CTA → Footer.
