---
name: Obsidian & Ether
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c6c6cb'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#909095'
  outline-variant: '#45474b'
  surface-tint: '#c6c6cc'
  primary: '#c6c6cc'
  on-primary: '#2f3035'
  primary-container: '#0f1115'
  on-primary-container: '#7b7c82'
  inverse-primary: '#5d5e63'
  secondary: '#75d5ff'
  on-secondary: '#003547'
  secondary-container: '#00bcf1'
  on-secondary-container: '#00475e'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#171000'
  on-tertiary-container: '#987900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e8'
  primary-fixed-dim: '#c6c6cc'
  on-primary-fixed: '#1a1c20'
  on-primary-fixed-variant: '#45474b'
  secondary-fixed: '#bee9ff'
  secondary-fixed-dim: '#6bd2ff'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#004d65'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is centered on a "Midnight Premium" aesthetic, targeting high-end creative professionals and executive portfolios. The brand personality is authoritative yet ethereal, blending the weight of dark, industrial materials with the lightness of digital glass.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**. It relies on deep atmospheric depth, where content appears to float in a multi-layered space. High-quality whitespace is used not just as a separator, but as a canvas for subtle radial gradients that guide the eye toward interactive elements. The emotional response should be one of quiet confidence, technical precision, and luxury.

## Colors
The palette is built upon a foundation of "True Deep" tones to ensure maximum contrast for glass effects.

*   **Primary (Background):** `#0F1115` — A deep charcoal that avoids pure black to maintain visible depth.
*   **Secondary (Electric Blue):** `#2CC9FF` — Used for primary actions, progress indicators, and high-energy highlights.
*   **Tertiary (Muted Gold):** `#D4AF37` — Reserved for "Premium" tags, awards, or subtle accents in editorial sections.
*   **Neutral:** `#F8FAFC` — Pure white is avoided; this off-white reduces eye strain and feels more sophisticated against the dark background.

Glass layers should utilize a white stroke at `10%` opacity and a background blur of `16px` to create the signature "floating" effect.

## Typography
The typography strategy pairs the geometric strength of **Montserrat** for impact with the utilitarian clarity of **Inter** for long-form content.

- **Headlines:** Use Montserrat with tight letter-spacing to create a "locked-in" professional look. 
- **Body:** Inter is used for all reading experiences. Maintain generous line heights (1.5x+) to ensure legibility against the dark background.
- **Micro-copy:** Labels and captions should use uppercase Inter with increased tracking (0.1em) to evoke a technical, drafted feel.

## Layout & Spacing
The layout follows a **Fluid Grid** model with strict adherence to an 8px spatial rhythm. 

- **Desktop (1200px+):** 12-column grid, 64px outside margins.
- **Tablet (768px - 1199px):** 8-column grid, 40px outside margins.
- **Mobile (<767px):** 4-column grid, 20px outside margins.

Sections should be separated by large vertical gaps (e.g., 128px or 160px) to give the "glass" components room to breathe and appear truly disconnected from the background.

## Elevation & Depth
Depth is not communicated through shadows, but through **Tonal Opacity** and **Backdrop Blurs**.

- **Level 0 (Floor):** Base primary color (`#0F1115`).
- **Level 1 (Surface):** Secondary background at 4% opacity with a 1px border (`#FFFFFF` at 10%).
- **Level 2 (Floating Card):** Backdrop blur of 20px, background fill of `#FFFFFF` at 5% opacity, and a 1px top-weighted border to simulate a light source from above.
- **Level 3 (Interactive/Active):** An outer glow using the Secondary (Electric Blue) color at 15% opacity, combined with a slightly brighter border.

## Shapes
The shape language is "Soft-Tech." This design system uses **Rounded** (Level 2) corners as the standard.

- **Standard Cards/Sections:** 1rem (16px) corner radius.
- **Buttons/Small Inputs:** 0.5rem (8px) corner radius.
- **Feature/Hero Elements:** 1.5rem (24px) for a more organic, modern feel.

Avoid sharp 0px corners, as they conflict with the "softness" of the glassmorphism effects.

## Components
- **Glass Cards:** The primary container. Must have `backdrop-filter: blur(16px)`, a 1px border (`rgba(255,255,255,0.1)`), and a subtle radial gradient fill.
- **Primary Buttons:** Solid Electric Blue (`#2CC9FF`) with dark text. No shadow; use a subtle outer glow on hover.
- **Secondary Buttons:** Ghost style with the glass border treatment and white text.
- **Chips/Tags:** Small, semi-transparent capsules. For "Premium" features, use a thin border of Gold (`#D4AF37`) with 10% Gold fill.
- **Inputs:** Darker than the background with a 1px border that illuminates to Electric Blue on focus.
- **Project Grid:** Cards should use a "Tilt" interaction on hover, increasing the backdrop-blur intensity to suggest physical movement toward the user.