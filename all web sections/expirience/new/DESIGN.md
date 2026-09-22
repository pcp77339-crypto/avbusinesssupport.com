---
name: Pastel Confection
colors:
  surface: '#fff8f8'
  surface-dim: '#ffcdd9'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f2'
  surface-container: '#ffe8ec'
  surface-container-high: '#ffe1e7'
  surface-container-highest: '#ffd9e1'
  on-surface: '#3f001b'
  on-surface-variant: '#574145'
  inverse-surface: '#5f1030'
  inverse-on-surface: '#ffecef'
  outline: '#8a7175'
  outline-variant: '#ddbfc3'
  surface-tint: '#a93054'
  primary: '#a93054'
  on-primary: '#ffffff'
  primary-container: '#fb6f92'
  on-primary-container: '#6f002c'
  inverse-primary: '#ffb1c0'
  secondary: '#9b3f5a'
  on-secondary: '#ffffff'
  secondary-container: '#ff8fab'
  on-secondary-container: '#79243f'
  tertiary: '#884c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#d08a9c'
  on-tertiary-container: '#572434'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c0'
  on-primary-fixed: '#3f0016'
  on-primary-fixed-variant: '#89153d'
  secondary-fixed: '#ffd9e0'
  secondary-fixed-dim: '#ffb1c2'
  on-secondary-fixed: '#3f0018'
  on-secondary-fixed-variant: '#7d2742'
  tertiary-fixed: '#ffd9e1'
  tertiary-fixed-dim: '#fdb2c5'
  on-tertiary-fixed: '#370a1b'
  on-tertiary-fixed-variant: '#6c3546'
  background: '#fff8f8'
  on-background: '#3f001b'
  surface-variant: '#ffd9e1'
  surface-blush: '#ffe5ec'
  surface-cream: '#fff9fa'
  accent-carnation: '#ffc2d1'
  text-plum: '#5c0d2e'
  text-berry: '#831843'
  text-muted: '#9d4b68'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a fresh, buoyant, and unapologetically playful digital experience. Rooted in tactile warmth and confectionery tones, it balances whimsical charm with crisp, structured usability. The visual tone is welcoming, optimistic, and radiant without slipping into childishness—pairing soft blush atmospheres with grounded berry-plum contrasts.

The design movement combines **Soft Tactile Neomorphism** with **Editorial Playfulness**: pillowy border radii, smooth pastel fills, pill-shaped interactions, and soft rose-tinted ambient drop shadows. Surfaces feel touchable, friendly, and elevated, creating an environment well-suited for lifestyle, creator economy, social, wellness, or modern confectionery e-commerce applications.

## Colors

The palette establishes an upbeat visual harmony dominated by chromatic pinks and anchored by rich plum typography to secure strict WCAG AAA legibility.

- **Primary (`#fb6f92`)**: Vibrant warm rose pink used for primary call-to-action buttons, active switches, key focus indicators, and focal interactive elements.
- **Secondary (`#ff8fab`)**: Radiant candy pink applied to secondary chips, hover states, badges, and progress tracks.
- **Tertiary (`#ffb3c6`)**: Supporting pastel tone used for soft highlighted zones, decorative card accents, and secondary button fills.
- **Neutral / Text Plum (`#5c0d2e` & `#831843`)**: Deep blackcurrant plum tones serving as the dominant text and structural border anchor, completely avoiding cold gray or pure black in favor of harmonious warmth.
- **Surface Blush (`#ffe5ec`) & Surface Cream (`#fff9fa`)**: Clean, luminous base layers providing an airy, inviting canvas.

Always maintain high contrast by laying `text-plum` directly over `surface-blush` or white surfaces. For text placed over `primary` buttons, utilize pure white (`#ffffff`) at bold weights.

## Typography

**Plus Jakarta Sans** is the single typographic voice across all tiers. Its rounded geometric construction, wide apertures, and friendly terminals echo the soft, bubbly personality while maintaining pristine readability across screen scales.

- **Headlines & Display**: Set with tighter tracking (`-0.02em` to `-0.03em`) and heavy weights (700 and 800) to feel plump, grounded, and expressive.
- **Body**: Uses regular weight (`400`) at comfortable line heights (1.5x) to maintain effortless flow without overwhelming the pastel surroundings.
- **Labels & Overlines**: Rendered in medium to bold weights (`600` and `700`) with subtle positive tracking for elevated micro-copy and button text.

## Layout & Spacing

The layout philosophy emphasizes breathable, buoyant structures using a 12-column responsive grid system on desktop that gracefully collapses to 8 columns on tablet and 4 columns on mobile.

- **Desktop (>= 1024px)**: 12-column grid with `margin: 2rem` and `gutter: 1.5rem`. Max layout container bound to 1200px centered canvas.
- **Tablet (768px - 1023px)**: 8-column layout with `margin: 1.5rem` and `gutter: 1.25rem`.
- **Mobile (< 768px)**: 4-column layout with `margin-mobile: 1rem` and `gutter-mobile: 1rem`.

Generous negative space is mandatory around soft card containers and hero clusters to amplify the airy pastel aesthetic. Internal component spacing follows the 4px / 8px scale strictly via the `space-*` tokens.

## Elevation & Depth

Visual depth is achieved through **Warm Ambient Shadows** and **Tonal Layering**, creating a soft, tactile cushion effect rather than stark realistic height.

- **Base Layer**: Background utilizes `surface-cream` (`#fff9fa`) or muted blocks of `surface-blush` (`#ffe5ec`).
- **Level 1 (Cards, Modules)**: Flat white (`#ffffff`) or `surface-cream` background with a glowing, tinted ambient shadow: `0 4px 20px -2px rgba(251, 111, 146, 0.12)`.
- **Level 2 (Floating Modals, Flyouts, Sticky Headers)**: Elevated white cards with dual-layer dispersion: `0 10px 30px -4px rgba(251, 111, 146, 0.18), 0 2px 6px 0 rgba(92, 13, 46, 0.04)`.
- **Level 3 (Toasts, Active Tooltips)**: Pronounced warmth: `0 16px 40px -6px rgba(251, 111, 146, 0.28)`.

Borders are soft and low-contrast: 1px to 1.5px solid `rgba(251, 111, 146, 0.20)` or `accent-carnation` (`#ffc2d1`), avoiding harsh dark outlines completely.

## Shapes

The design system embraces a **Pill-shaped (level 3)** form language. Contours mimic smooth, rounded drops and friendly organic capsules.

- **Pills (`rounded-full` / 9999px)**: Applied universally to buttons, badges, chips, search bars, pill toggles, and status tags.
- **Large Cards & Surfaces (`rounded-xl` / 2rem to 3rem)**: Big cards and modals feature generous 32px to 48px corner curvature.
- **Inner Elements & Inputs (`rounded-lg` / 1.25rem to 1.5rem)**: Text fields, segmented controls, and media frames adopt friendly rounded silhouettes that seamlessly echo the outer containers.

## Components

### Buttons
- **Primary**: Full pill radius (`rounded-full`), filled with `primary` (`#fb6f92`), label in white (`#ffffff`) with `label-lg` styling. Subtle elevation shadow `0 4px 14px rgba(251, 111, 146, 0.35)`. Hover transition shifts to `#ff8fab` with slight `translate-y(-1px)`.
- **Secondary**: Full pill radius, filled with `surface-blush` (`#ffe5ec`), text in `text-plum` (`#5c0d2e`). Hover transitions to `#ffb3c6`.
- **Ghost / Tertiary**: Transparent pill with 1.5px border in `#ffb3c6`, text in `text-plum`. Hover fills with `rgba(255, 229, 236, 0.5)`.

### Chips & Badges
- Miniature pills with `space-xs` vertical and `space-md` horizontal padding.
- Light pastel background (`#ffc2d1` at 50% opacity or `#ffe5ec`), with bold text in `#831843` (`label-md`).

### Inputs & Text Areas
- Fully rounded (`rounded-full` for single line, `rounded-xl` for multiline). Background in `#ffffff` with a 1.5px border in `#ffc2d1`.
- Placeholder colored in `#9d4b68` at 60% opacity.
- Active focus state features an outline ring of 3px in `rgba(251, 111, 146, 0.35)` with border color shifting to `primary` (`#fb6f92`).

### Cards & Panels
- Soft tactile surfaces with `32px` corner radii (`rounded-xl`).
- Backgrounds alternate between crisp white (`#ffffff`) and tint blush (`#ffe5ec`).
- Subtly bound by a 1px border of `rgba(255, 179, 198, 0.45)` and ambient rose elevation shadow.

### Checkboxes & Radio Buttons
- Radios are full circles; checkboxes carry an ultra-rounded `8px` squircle shape.
- Unchecked: 2px border in `#ffb3c6` on white ground.
- Checked: Solid fill in `primary` (`#fb6f92`) with a crisp white icon checkmark or centered dot.

### Segmented Controls & Toggles
- Encapsulated pill container in `#ffe5ec` with an active slider thumb in pure white (`#ffffff`) carrying a soft `0 2px 8px rgba(251, 111, 146, 0.2)` shadow. Active label highlighted in `text-plum`.