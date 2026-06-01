# CLAUDE.md — Dev Agency Landing Page

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> This file is read automatically by Claude Code at the start of every session.
> It is the standing context for this project. When I paste a short instruction or
> a screenshot, apply everything below without asking me to re-explain it.

@AGENTS.md
@DESIGN.md
@HANDOFF.md

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

Add shadcn components: `npx shadcn@latest add <component-name>`

---

## Source of Truth

`DESIGN.md` (legacy filename `Frovia-Berry-Landing-DESIGN.md`) is the **source of truth**.
Where this file and `DESIGN.md` ever disagree, **`DESIGN.md` wins**.

**Before editing anything**, read `DESIGN.md` and report the file paths you found
(the design file, the section components, the nav header, the button component).
Locate and modify existing code — never rebuild from scratch. The project already exists.

---

## What This Is

The marketing site for a web **development agency**. NOT a food/beverage, juice,
wellness, lifestyle, or consumer-goods brand. The codebase was forked from a
"berry/juice" template (`Frovia` / `ECHO` wordmarks may linger) — purge any residue.

Design language: warm-dark and light sections alternating, Plus Jakarta Sans
typography, pink-accented pill buttons, glass surfaces, GSAP scroll choreography,
WebGL line-lattice hero background.

---

## Design Tokens (from DESIGN.md)

**Colors**
- `colors.primary` `#FF707C` — brand pink: dark-bg buttons, eyebrow labels, highlights, active states.
- `colors.primary-contrast` `#ff5c6a` — deeper pink, WCAG-safe, for light-bg buttons.
- `colors.dark-bg` `#0E0B0D` — hero, logo marquee, stats, capabilities, borders.
- `colors.dark-surface` `#1A0E10` — closing CTA base (with `stacked-waves-haikei.svg`, `backgroundBlendMode: multiply`).
- `colors.light-bg` `#F7F5F2` — services, method, testimonials.
- Text dark-on-light: `#11100F` primary, `rgba(17,16,15,0.65)` muted.
- Text light-on-dark: `#FFFFFF` primary, `rgba(255,255,255,0.65)` muted.
- Borders: `rgba(255,255,255,0.12)` dark / `rgba(17,16,15,0.08)` light.
- **Never use green anywhere. Never use the pink/cream/peach gradients from the original template.**

**Typography — Plus Jakarta Sans only**
- Hero H1: `70px` (fluid to mobile `text-4xl`), weight 600, line-height `1.08`, `tracking-tight`.
- Section H2: `clamp(2rem, 4vw, 3.5rem)`, weight 600, `leading-[1.2]`, `tracking-[-0.025em]`.
- Supporting copy: `14px`/`16px`, weight 500, line-height `24px`/`28px`.
- Eyebrow labels: `text-sm`, font-medium, `tracking-[0.08em]`, uppercase, color `#FF707C`.

**Spacing** — strict 4px scale: `{4, 8, 12, 16, 20, 24, 28, 32, 48, 64, 96, 128}` px.
**Radii** — `{1 (dot), 2 (tag badge), 24 (card/accordion), 9999 (pill/button)}` px.
**Section padding** — `py-24` (96px) mobile → `py-32` (128px) desktop.
**Grid container** — `max-w-[1340px]` with `px-6`.

---

## Button System (overrides any earlier white-button system in the code)

**Primary (pink-filled, mode-sensitive shade):**
- Dark sections: bg `#FF707C`, text `#FFFFFF`.
- Light sections: bg `#ff5c6a`, text `#FFFFFF`.
- Padding: `px-6 py-3` (standard) or `px-7 py-3.5` (large). Shape: `rounded-full`.
- Hover: `scale-[1.04]`, `transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`. No color change on hover.
- Active: `scale-[0.98]`.
- **Signature offset dot — always include:** `w-1 h-1` (4px) absolute dot, bottom-right corner. Color `bg-white/70` on dark, `bg-black/30` on light.

**Secondary (transparent, hairline border):**
- Transparent bg. Border `border-white/25` (dark) / `border-black/25` (light); hover → `/50`.
- Text white on dark, dark on light.
- Hover: `scale-[1.02]`. Active: `scale-[0.98]`. **No offset dot.**

---

## Section Theming — `data-nav-theme` (mandatory)

Every section root element must expose `data-nav-theme="dark"` or `data-nav-theme="light"`.
The scrolled nav header tracks the active section's theme via this attribute. Any new or
modified section without it will break the dynamic nav. Apply subtle grain overlay to dark sections.

---

## Copy Voice (dev agency, not berry)

- Specific over evocative. Outcome-focused over feature-focused. Plural, defensible social proof.
- Replace any `ECHO` / `Frovia` wordmark with `[AGENCY NAME]` until I provide the real one.
- Prefer concrete tech stack (Next.js, Shopify Plus, etc.) over abstract claims.
- Outcome-focused CTAs (`Book an intro call`, `See case studies`) over `Learn more` / `Get started`.
- Defensible numbers ("47 production launches") over inflated claims ("100k+ happy users").
- **Never invent** specific numbers, company names, testimonial quotes, or client identities.
  Use marked placeholders and flag them: `[AGENCY NAME]`, `[N]`, `[CLIENT LOGO]`, `[Client Name]`.

---

## Audit Lens — when I share a screenshot

Default audit format, direct and prioritized (don't pad with caveats):

1. **Top 3 brand-fit issues** — anything still reading as berry/lifestyle/wellness/consumer:
   residual berry/juice copy, photography, color, or vocabulary ("blend," "nourish," "fresh,"
   "organic," "wellness"). Highest priority.
2. **Top 3 conversion issues** — what's missing for a dev agency to convert: vague agency-speak,
   weak CTAs, inflated/unverifiable numbers, missing trust signals (real logos, named testimonials
   with LinkedIn links, stat citations), no distinct sync (book a call) vs async (send a brief) CTAs.
3. **Top 3 design-system violations** — broken `DESIGN.md` tokens: off-scale spacing, wrong radii,
   non-Plus-Jakarta type, wrong button spec, missing offset dot, missing `data-nav-theme`, wrong
   section padding/container width.
4. **Quick-win priority list** — what to fix first.
5. Offer to mock up the corrected version or generate a coding-agent prompt.

If something works, say so briefly and move on.

---

## Keeping HANDOFF.md current

`HANDOFF.md` is the living record of build status, section inventory, and recent changes.
**Update it after every meaningful action** — no exceptions:

- Section or component added, removed, or reordered → update the table and log the change.
- Component file renamed or split → update the file name column.
- Section status changes (placeholder → real copy, built → revised) → update the Status column.
- Any other structural change to `page.tsx` → reflect it in the table.

Append a one-line entry to the **Recent Changes** list each time. Keep the list to the last ~10 entries (drop older ones).
