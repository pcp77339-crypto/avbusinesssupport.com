---
name: Aetherial Agency
colors:
  surface: '#101419'
  surface-dim: '#101419'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#e0e2eb'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e0e2eb'
  inverse-on-surface: '#2d3137'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#ecb2ff'
  on-secondary: '#520071'
  secondary-container: '#cf5cff'
  on-secondary-container: '#480063'
  tertiary: '#00dbe9'
  on-tertiary: '#00363a'
  tertiary-container: '#00a0aa'
  on-tertiary-container: '#002f33'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ecb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#101419'
  on-background: '#e0e2eb'
  surface-variant: '#31353c'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 80px
---

## Brand & Style

This design system is built for a high-end creative environment, prioritizing an "Ultra Premium" aesthetic that feels both futuristic and exclusive. The visual language centers on **Floating UI** principles, where elements appear to drift in a deep, multi-dimensional space.

The style is a refined **Glassmorphism**, utilizing sophisticated layering, extreme background blurs, and microscopic "light-leak" borders to simulate physical glass panes. The emotional response should be one of awe, technical precision, and high-status digital craftsmanship. Every interaction should feel like operating a piece of advanced aerospace or luxury timepiece software.

## Colors

The palette is anchored in a **Deep Dark** spectrum to provide maximum contrast for neon-inflected accents.

- **Base (Neutral):** A deep "Midnight" foundation (`#020408`). Backgrounds should utilize subtle radial gradients from the center to provide a sense of depth rather than flat black.
- **Primary (Electric Blue):** The main functional color for primary actions and highlights.
- **Secondary (Vivid Purple):** Used for premium features, hover states, and gradient blends.
- **Tertiary (Cyan):** Used sparingly for data visualization, success states, or "glimmer" effects.
- **Glass Overlays:** Surfaces are defined by a white tint at 4-8% opacity with a heavy (32px+) backdrop blur.

## Typography

The typography strategy balances the bold, geometric impact of **Montserrat** for display roles with the technical clarity of **Inter** for functional text.

- **Display Text:** Should often utilize "text-clipping" with linear gradients (Primary to Secondary) to emphasize the futuristic theme.
- **Letter Spacing:** Headlines use tight tracking for a high-impact, editorial look. Labels use wide tracking to maintain legibility and a "system-ui" feel.
- **Hierarchy:** Use `label-caps` in the Tertiary color to categorize content or introduce sections above main headlines.

## Layout & Spacing

This design system uses a **Fluid-Floating Grid**. Elements are not always bound to rigid containers but are positioned with generous whitespace (negative space) to allow the background depth to breathe.

- **The 9:16 Rule:** Pricing and Service cards must maintain a vertical 9:16 aspect ratio. On desktop, these should be presented in a horizontal scroll or a staggered 3-column layout.
- **Vertical Rhythm:** Large sections are separated by significant vertical padding (160px+) to create a "gallery" feel as the user scrolls.
- **Safe Zones:** Content is centered in a 1440px max-width container, but decorative "Glass" elements may bleed to the edges of the viewport.

## Elevation & Depth

Depth is conveyed through **Light and Blur** rather than traditional shadows.

- **The Glass Stack:**
    1. **Level 0 (Base):** Midnight background with subtle, large-scale ambient glows in Primary/Secondary colors.
    2. **Level 1 (Surfaces):** Background blur (40px), 5% white fill, 1px white border at 15% opacity.
    3. **Level 2 (Hover/Active):** Increase background blur to 60px, increase border opacity to 30%, and add a subtle outer glow using the Primary color (opacity 20%, spread 20px).
- **Z-Axis:** Use parallax effects on background decorative shapes to enhance the "Floating" sensation during scroll.

## Shapes

The shape language is sophisticated and modern, avoiding the "bubbly" look of fully round corners in favor of a precision-engineered **Rounded** aesthetic.

- **Main Elements:** Use a consistent `rounded-lg` (1rem) for cards and modals.
- **Interactive Elements:** Buttons and Inputs should follow the same radius for a cohesive, modular appearance.
- **Specialty Shapes:** Use 9:16 vertical rectangles for featured content to mimic luxury mobile interfaces.

## Components

- **Glass Cards (Pricing):** Vertical 9:16 containers. Feature a "top-light" border (a gradient border that is brighter at the top than the bottom). Content should be bottom-aligned or center-aligned to maintain the tall aesthetic.
- **Floating Action Buttons:** High-vibrancy gradients (Primary to Secondary). Use `box-shadow` with the Primary color at 40% opacity to create a "neon glow" effect.
- **Input Fields:** Completely transparent backgrounds with only a 1px bottom border or a faint glass outline. Labels should float above the field in `label-caps` style.
- **Glimmer Chips:** Small status indicators with a subtle pulse animation and a high-contrast Tertiary color text.
- **Glass Header:** A sticky navigation bar with a heavy backdrop blur (`saturate(180%) blur(20px)`) and a microscopic 1px bottom border.