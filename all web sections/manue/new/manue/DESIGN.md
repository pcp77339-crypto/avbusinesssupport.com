---
name: Nocturne Gastronomie
colors:
  surface: '#161310'
  surface-dim: '#161310'
  surface-bright: '#3d3835'
  surface-container-lowest: '#110e0b'
  surface-container-low: '#1e1b18'
  surface-container: '#231f1c'
  surface-container-high: '#2d2927'
  surface-container-highest: '#383431'
  on-surface: '#e9e1dc'
  on-surface-variant: '#d1c4b6'
  inverse-surface: '#e9e1dc'
  inverse-on-surface: '#34302d'
  outline: '#9a8f82'
  outline-variant: '#4e453a'
  surface-tint: '#e7c08a'
  primary: '#f1ca93'
  on-primary: '#432c03'
  primary-container: '#d4af7a'
  on-primary-container: '#5c4217'
  inverse-primary: '#76592c'
  secondary: '#eabf8c'
  on-secondary: '#442b04'
  secondary-container: '#61431b'
  on-secondary-container: '#dab17f'
  tertiary: '#dccec5'
  on-tertiary: '#372f29'
  tertiary-container: '#bfb2aa'
  on-tertiary-container: '#4e453e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb0'
  primary-fixed-dim: '#e7c08a'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#5c4217'
  secondary-fixed: '#ffddb6'
  secondary-fixed-dim: '#eabf8c'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#5e4119'
  tertiary-fixed: '#eee0d7'
  tertiary-fixed-dim: '#d2c4bc'
  on-tertiary-fixed: '#211a15'
  on-tertiary-fixed-variant: '#4e453f'
  background: '#161310'
  on-background: '#e9e1dc'
  surface-variant: '#383431'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0.01em
  price-display:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.015em
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2.25rem
  space-xl: 3.5rem
---

## Brand & Style

This design system embodies the world of Michelin-starred dining, private salon tasting menus, and rare vintage curation. It is an ultra-premium, dark luxury editorial style characterized by restrained drama, deliberate pacing, and sensorial elegance. 

The aesthetic marries modern editorial minimalism with subtle tactile glassmorphism. It uses deep, light-absorbing atmospheric canvases, warm amber-tinted chiaroscuro spotlighting, and exacting typographic hierarchy. Every interaction evokes reverence, exclusivity, and bespoke craftsmanship—treating dishes, bottles, and culinary experiences not merely as items, but as private acquisitions.

## Colors

The palette is strictly low-key and nocturnal. Light modes are explicitly disallowed across all user flows.

- **Base Canvas (`#0D0A08`):** Deep espresso-black, infused with faint warm umber tones. Never pure neutral black (`#000000`).
- **Primary Accent (`#D4AF7A`):** Champagne-gold with subtle metallic radiance, reserved for signatures, active indicators, rare tier markings, and key calls-to-action.
- **Secondary Accent (`#8C6A3E`):** Aged bronze, used for hover depth, subtle ornamental divider rules, and low-priority metadata.
- **Surface Elevation (`#1E1712`):** Smoked translucent umber, serving as the chromatic foundation for raised cards, navigation drawers, and floating panels.
- **Text Layers:** 
  - Primary text: Ivory (`#F5EEE2`), providing high legibility against the dark ground without the clinical harshness of pure white.
  - Secondary text: Muted warm-grey (`#A89F91`), used for tasting notes, provenance, and table structural details.
- **Gradients & Glows:** Spotlights must be implemented as soft radial fills using `rgba(212, 175, 122, 0.08)` drifting into total transparency over 400–600px radii.

## Typography

Typography establishes an aristocratic tempo. High-contrast editorial serif headings counterbalance technical, razor-sharp modern sans body copy.

- **Headings & Prices:** Set in `Playfair Display`. Titles and course designations should lean into their natural italic variants for culinary provenance or wine vintages. Prices are integrated with the same serif grace as headline text, eschewing heavy sans-serif checkout treatment.
- **Body & Controls:** Set in `Manrope`. Kept light to regular in weight to ensure crisp optical clarity against dark glass substrates.
- **Caps & Micro-copy:** All category indicators, course markers (e.g., "PRELUDE", "HARVEST", "CELLAR SELECTION"), and utility labels are set in uppercase with tracked spacing (`0.15em`).

## Layout & Spacing

The layout philosophy mirrors archival print journals and haute-cuisine menu cards: generous margins, calculated empty voids, and asymmetric tension.

- **Grid Architecture:** 12-column fluid grid system on desktop, collapsing to 8 columns on tablet, and 4 columns on mobile. 
- **Breathing Room:** White space (or dark negative space) is treated as a luxury material. Sections must be separated by substantial vertical gaps (`space-xl` scaled dynamically) to prevent visual crowding.
- **Breakpoints:**
  - Mobile: `< 768px` (Fluid single-column flows, edge-to-edge media with interior safe paddings).
  - Tablet: `768px – 1024px` (Balanced two-column degustation and booking splits).
  - Desktop: `> 1024px` (Max container constraint of `1440px` with expansive editorial gutters).

## Elevation & Depth

Depth is cultivated strictly through luminosity, translucency, and atmospheric luminescence—not through sharp drop shadows.

- **Frosted Glass Substrates:** Glass panels use `rgba(18, 14, 11, 0.65)` to `rgba(30, 23, 18, 0.85)` with a backdrop blur of `16px` to `24px`. 
- **Hairline Framing:** Surface boundaries are demarcated with ultra-fine `1px` borders using `rgba(212, 175, 122, 0.20)`. Hover states or active selections brighten this border to `rgba(212, 175, 122, 0.50)`.
- **Golden Glows (Halo Shadows):** Floating cards and modal elements sit over deep ambient glows: `box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 122, 0.05)`.
- **Spotlight Anchors:** Fixed background gradients position warm micro-spotlights behind featured tasting pairings or booking dates to simulate museum pin-spots.

## Shapes

The shape system is tailored, architectural, and restrained.

- **Corner Radii:** UI elements primarily use `0.25rem` (soft) curvature, maintaining crisp geometry reminiscent of heavy card stock and menu folios. 
- **Large Surfaces:** Modal dialogs, sensory cards, and culinary presentation blocks expand to `rounded-lg` (`0.5rem`). Circular shapes are restricted strictly to circular stamp badges, sommelier wax seals, and custom icon buttons.

## Components

### Buttons
- **Primary:** Solid Champagne Gold (`#D4AF7A`) background with deep espresso text (`#0D0A08`). Lettering uses `label-caps`. Hover activates a delicate outer gold aura (`0 0 24px rgba(212, 175, 122, 0.35)`).
- **Secondary / Outline:** Transparent fill, `1px` border of `rgba(212, 175, 122, 0.35)`, ivory text. On hover, background shifts to `rgba(212, 175, 122, 0.08)` and border becomes solid gold.
- **Ghost:** Ivory text, no border. Accompanied by a bespoke hairline underline that expands outward from center on hover.

### Cards (Menu Items, Courses & Cellar)
- Dark frosted glass container (`rgba(22, 17, 13, 0.7)` with `backdrop-filter: blur(20px)`).
- Border: `1px solid rgba(212, 175, 122, 0.15)`.
- Structure: Course sequence indicator in `label-caps` gold, followed by the item title in `Playfair Display`, ingredient sourcing notes in `body-sm` muted warm-grey, and vintage or price anchored cleanly on the right or bottom.

### Inputs & Selectors
- Background: Translucent deep tint (`rgba(255, 255, 255, 0.02)`).
- Border: Bottom-border only or razor hairline `rgba(212, 175, 122, 0.25)`.
- Focus state: Border transitions to `#D4AF7A`, accompanied by a subtle ambient inner glow (`inset 0 0 12px rgba(212, 175, 122, 0.08)`). Placeholder text in warm-grey (`#A89F91`).

### Chips & Badges
- Ultra-compact, low-contrast pills.
- Border: `1px solid rgba(212, 175, 122, 0.25)`.
- Fill: `rgba(212, 175, 122, 0.05)`.
- Text: `label-caps` in `#D4AF7A`. Used for dietary markers ("VINTAGE 2014", "TRUFFLE SUPPLEMENT", "ORGANIC BIODYNAMIC").

### Checkboxes & Radio Controls
- Radio: Custom concentric rings. Outer boundary `1px solid rgba(212, 175, 122, 0.4)`, checked state features an inner diamond or solid circle in `#D4AF7A`.
- Checkbox: Square, `1px solid rgba(212, 175, 122, 0.4)`. Checked state displays a hairline champagne tick against a translucent gold fill.

### Domain-Specific Components
- **Wine Pairing Rail:** Horizontal scroll ribbon with bottle silhouettes illuminated by dynamic radial glows.
- **Tasting Journey Timeline:** Vertical hairline path in `#8C6A3E` linking individual degustation acts, with active courses marked by a miniature glowing gold node.