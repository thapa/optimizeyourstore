---
version: "2.0"
name: "Dev Agency Landing Design System"
description: "Typography and motion-driven landing page design system for the development agency. Core attributes include warm-dark background textures, clean branding grids, custom vector marquee tracks, and premium interaction feedback loops."
colors:
  primary: "#FF707C"          # Signature brand pink
  primary-contrast: "#ff5c6a" # Deep pink for high-contrast on light backgrounds
  dark-bg: "#0E0B0D"          # Main warm-dark background
  dark-surface: "#1A0E10"     # Closing CTA background texture base
  light-bg: "#F7F5F2"         # Alternating light background
  text-dark: "#11100F"        # Primary dark text on light backgrounds
  text-light: "#FFFFFF"       # Primary light text on dark backgrounds
  text-muted-dark: "rgba(17, 16, 15, 0.65)"
  text-muted-light: "rgba(255, 255, 255, 0.65)"
  border-dark: "rgba(17, 16, 15, 0.08)"
  border-light: "rgba(255, 255, 255, 0.12)"
typography: 
  display-xl:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "70px"
    fontWeight: 600
    lineHeight: "1.08"
    letterSpacing: "-0.025em"
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.025em"
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "24px"
  label-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "20px"
rounded:
  dot: "1px"
  badge: "2px"
  card: "24px"
  full: "9999px"
spacing:
  base: "4px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  card-padding: "24px"
  section-padding: "96px" # py-24
components:
  button-primary-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-light}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-light:
    backgroundColor: "{colors.primary-contrast}"
    textColor: "{colors.text-light}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  logo-container:
    width: "190px"
    height: "48px"
    backgroundColor: "transparent"
---

## Overview

This design system outlines the visual guidelines, typography rules, color structures, and component designs for the development agency landing page. It focuses on:
- High-contrast warm-dark and light-mode section alternations.
- Strict typography alignment using the custom Google Font family **Plus Jakarta Sans**.
- Accessible, micro-interaction-driven component designs with custom deceleration physics.
- Scrolled dynamic theme switching.

---

## Colors

The palette alternates between deep warm-dark tones for layout moments, and light, tactile tones for informative content sections.

- **Primary Accent (#FF707C):** Signature brand pink for accents, highlights, active states, and dark-theme buttons.
- **Contrast Accent (#ff5c6a):** A deeper pink accent to ensure WCAG accessibility contrast when rendered on light backgrounds (e.g., Services bottom button and Method timeline button).
- **Base Dark Background (#0E0B0D):** A rich, warm-black base color for the Hero, logo marquee, stats, capabilities, and layout borders.
- **Surface Dark Background (#1A0E10):** A warm, deep-red background used as the base for the final typographic CTA closing.
- **Light Base Background (#F7F5F2):** A warm off-white/light gray base color for the services, method, and testimonials sections.
- **Typography Colors:**
  - Dark on Light: `#11100F` (primary text), `rgba(17, 16, 15, 0.65)` (supporting copy).
  - Light on Dark: `#FFFFFF` (primary text), `rgba(255, 255, 255, 0.65)` (supporting copy).

---

## Typography

All text layers are structured using **Plus Jakarta Sans** with matching line-heights and letter-spacing to prevent fallback discrepancies.

- **Display XL (Hero H1):** Plus Jakarta Sans, `70px` (fluid down to mobile `text-4xl`), weight 600, line-height `1.08`, tracking `tight` (`tracking-tight`).
- **Display LG (Section H2s):** Plus Jakarta Sans, `clamp(2rem, 4vw, 3.5rem)`, weight 600 (semibold), line-height `1.2` (`leading-[1.2]`), tracking `tracking-[-0.025em]`.
- **Supporting Copy:** Plus Jakarta Sans, `14px` or `16px` size, weight 500, line-height `24px` / `28px`.
- **Eyebrow Labels:** Plus Jakarta Sans, `text-sm`, font-medium weight, tracking `tracking-[0.08em]` uppercase, color `#FF707C` (pink).

---

## Layout & Rhythm

Layouts are designed with a grid-centric hierarchy utilizing a 4px base rhythm token.

- **Visual rhythm spacing scale:** Spacing follow a 1:2:4 hierarchy (e.g., 12px grouping gap → 24px description margin → 48px button row margin) to enforce structured rhythm.
- **Base Spacing Token:** 4px.
- **Grid Container Width:** `max-w-[1340px]` max width, with standard `px-6` padding.
- **Section Paddings:** `py-24` (96px) on mobile scaling to `py-32` (128px) on desktop to highlight transition moments.

---

## Elevation, Textures & Depth

Depth is established using border contrast, glowing background gradients, grain textures, and SVG blend-modes.

- **Base Borders:** `1px solid rgba(255, 255, 255, 0.12)` for dark container edges; `1px solid rgba(17, 16, 15, 0.08)` for light container edges.
- **Grain Overlay:** A subtle background noise layer (`GrainOverlay`) is applied on dark surfaces to provide texture.
- **Closing Section Blend-Mode:** The final CTA section applies `stacked-waves-haikei.svg` directly over a `#1A0E10` warm dark-red background using `backgroundBlendMode: 'multiply'` to achieve a textured warm dark background without sacrificing white text legibility.

---

## Shapes & Corner Radii

Shapes utilize a consistent corner radius token family:
- **Decoration Dot:** `1px` (`rounded-[1px]`).
- **Tag Badges:** `2px` (`rounded-[2px]`).
- **Cards & Accordions:** `24px` (`rounded-[24px]`).
- **Buttons & Pills:** `9999px` (`rounded-full`).

---

## Components

### 1. Primary Buttons
- **Default State**:
  - Rendered in brand pink: `#FF707C` (dark background contexts) or `#ff5c6a` (light background contexts for WCAG compliance).
  - Text is `#FFFFFF` (white).
  - Dimensions: `px-6 py-3` / `px-7 py-3.5` with `rounded-full` shape.
- **Hover State (Subtle Scale Out)**:
  - Keeps the pink background color and scales out/up smoothly to `hover:scale-[1.04]`.
  - Built with a premium deceleration easing curve: `transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`.
  - Active state handles tactile depression: `active:scale-[0.98]`.
- **Ornamentation (Signature Offset Dot)**:
  - Each primary button includes a `w-1 h-1` (4px) absolute offset dot in the bottom-right corner.
  - Dot color: `bg-white/70` (dark themes) or `bg-black/30` (light themes).

### 2. Secondary Buttons
- **Styling**: Transparent background (`bg-transparent`), white hairline border (`border border-white/25 hover:border-white/50`), and white text.
- **Interaction**: Scales up on hover (`hover:scale-[1.02]`) and depresses on click (`active:scale-[0.98]`).

### 3. Dynamic Navigation Header
- **Dynamic Theme-Switching**: The scrolled header navbar tracks theme state (`dark` or `light`) dynamically based on section-level `data-nav-theme` attributes.
- **Pill Nav**: Blurs background via `backdrop-blur-xl` and applies thin border outlines that transition dynamically.

### 4. Vector Logo Marquee
- **Vector Brand Paths**: Transparent, borderless marquees featuring vector paths for Shopify, WordPress, Squarespace, Yotpo, and Trustpilot.
- **Optical Height Adjustment**: Shopify, WordPress, Squarespace, and Trustpilot are scaled to `32px` height; Yotpo is scaled to `24px` height to normalize visual weight.
- **Sizing Wrapper**: Each brand logo is centered within a transparent, container wrapper sized at `190px × 48px` to guarantee breathing room.
- **Interactive hover**: Parent colors transition smoothly: `text-white/30 hover:text-white/60 transition-colors duration-200`.

---

## Do's and Don'ts

### Do
- Do align all new section headers to the `clamp(2rem, 4vw, 3.5rem)` font-size and `leading-[1.2]` line-height.
- Do use `#FF707C` on dark backgrounds and `#ff5c6a` on light backgrounds for primary buttons.
- Do keep the 4px rhythm base scale for margins and paddings.
- Do ensure every page section exposes a `data-nav-theme` attribute (either `"dark"` or `"light"`) so the scrolled header navbar transitions themes correctly.

### Don't
- Don't import custom styling sheets or Tailwind config alterations that override the core typography tokens.
- Don't use heavy box-shadow borders on the vector logo marquee.
- Don't exceed the moderate motion timeline speed bounds (`300ms` with custom beziers).

---

## Motion & Transitions

- **Primary Button Transition**: Deceleration curves (`300ms` transition with `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Scroll Choreography**: GSAP ScrollTrigger timeline handles step-by-step progress reveals, timelines, and pinned accordion layouts.
- **Scroll Theme Detection**: Header runs event listener sampling element boundaries with `data-nav-theme` attributes.

---

## WebGL & Shader Background

Reconstructs a technical, meditative, and atmospheric background graphic.

- **Renderer**: WebGL Renderer, alpha, antialias, DPR clamp, custom orthographic perspective projection.
- **Visuals**: Fine line lattice with soft red shader gradients and sparse spacing.
- **Motion**: Slow breathing pulse with subtle mouse parallax and pointer-reactive drift.
- **Fallback**: Automatically defaults to custom orthographic CSS radial-gradient mesh and dom structure if WebGL is disabled or reduced motion is preferred.
