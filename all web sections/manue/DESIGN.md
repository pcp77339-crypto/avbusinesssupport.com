---
name: Atelier Sphérique
colors:
  surface: '#fff8f4'
  surface-dim: '#e7d8c7'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e4'
  surface-container: '#fbebda'
  surface-container-high: '#f5e6d5'
  surface-container-highest: '#efe0cf'
  on-surface: '#221a10'
  on-surface-variant: '#43474a'
  inverse-surface: '#382f24'
  inverse-on-surface: '#feeedd'
  outline: '#73787b'
  outline-variant: '#c3c7ca'
  surface-tint: '#536068'
  primary: '#505e66'
  on-primary: '#ffffff'
  primary-container: '#69777f'
  on-primary-container: '#fbfdff'
  inverse-primary: '#bac9d1'
  secondary: '#6b5c45'
  on-secondary: '#ffffff'
  secondary-container: '#f1ddbf'
  on-secondary-container: '#6f6149'
  tertiary: '#735732'
  on-tertiary: '#ffffff'
  tertiary-container: '#8e6f48'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e5ee'
  primary-fixed-dim: '#bac9d1'
  on-primary-fixed: '#101d24'
  on-primary-fixed-variant: '#3b4950'
  secondary-fixed: '#f4e0c2'
  secondary-fixed-dim: '#d7c4a7'
  on-secondary-fixed: '#241a08'
  on-secondary-fixed-variant: '#52452f'
  tertiary-fixed: '#ffddb6'
  tertiary-fixed-dim: '#e6c093'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#5c421f'
  background: '#fff8f4'
  on-background: '#221a10'
  surface-variant: '#efe0cf'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: '0'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.01em
  title-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-md:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-sm:
    fontFamily: DM Sans
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.14em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-3xs: 0.25rem
  space-2xs: 0.5rem
  space-xs: 0.75rem
  space-sm: 1rem
  space-md: 1.5rem
  space-lg: 2rem
  space-xl: 3rem
  space-2xl: 4rem
  space-3xl: 6rem
  container-padding-mobile: 1.25rem
  container-padding-desktop: 3.5rem
  gutter: 1.5rem
---

## Brand & Style

This design system embodies serene architectural luxury, quiet confidence, and tactile restraint. Drawing direct inspiration from 3D matte sphere compositions, gallery plinths, and high-end atelier interior design, the aesthetic synthesizes pure minimalism with tactile glassmorphism.

The core visual experience balances:
- **Atmospheric Calm:** Warm neutral tones grounded in taupe, limestone, and muted mineral slate give the eye space to breathe without stark clinical coldness.
- **Architectural Depth:** Layered translucent glass panels, diffused directional soft shadows, and rounded geometric silhouettes evoke tangible objects resting in balanced suspension.
- **Understated Opulence:** Champagne and warm ivory accents avoid brash commercialism, favoring satin reflections, ultra-fine 1px metallic borders, and generous spatial cadence.

## Colors

The color palette is derived directly from matte architectural renders featuring neutral clay, porcelain spheres, and deep slate globes under diffused studio lighting:

- **Primary (`#6C7A82` - Muted Slate):** A calm, mineral slate blue-gray that commands focal hierarchy without visual tension. Used for primary CTAs, active indicators, and high-emphasis focal items.
- **Secondary (`#D8C5A8` - Champagne Cream):** A soft, buttery sphere tone used for secondary accents, pill highlights, and subtle warm glow states.
- **Tertiary (`#8C6D46` - Polished Bronze / Warm Gold):** Reserved for delicate borders, micro-badges, active radio/checkbox pips, and luxury typographic callouts.
- **Neutral (`#A89B8C` - Warm Taupe):** The foundational ambient hue that sets the mid-tone canvas. Accompanied by surface tints:
  - Base Canvas: `#F4EFEA` (Porcelain Alabaster)
  - Surface Glass: `rgba(255, 255, 255, 0.45)` with `rgba(235, 226, 215, 0.35)` undertones
  - Foreground / Text: `#2A2623` (Charcoal Umber) for deep legibility, and `#726960` for secondary metadata

## Typography

The typographical pairing pairs the literary, sculptural grace of **EB Garamond** with the clean, modernist geometric neutrality of **DM Sans**.

- **Display & Headline Levels (EB Garamond):** Evoke classical editorial curation and gallery monographs. They are set with generous breathing room and natural tracking.
- **Interface & Text (DM Sans):** Selected for exceptional screen legibility at small sizes, pure circular geometry that echoes the sphere motif, and an unpretentious demeanor that supports the display serif without competing.
- **Labels & Micro-data:** Set in uppercase with wide letter-spacing (`0.08em` to `0.14em`) to create subtle architectural stamps and captioning reminiscent of high-end product design manifests.

## Layout & Spacing

This design system uses a generous, breathing 12-column responsive layout system that prioritizes expansive white space and deliberate focal voids.

- **Desktop (1024px+):** Max page container width of 1320px with `3.5rem` (`container-padding-desktop`) outer padding and `1.5rem` gutters. Content blocks celebrate asymmetry, floating cards over neutral backdrops with ample margin steps (`space-xl` and `space-2xl`).
- **Tablet (768px – 1023px):** 8-column layout with `2rem` outer padding. Cards compress into cohesive dual-column glass tiles.
- **Mobile (< 768px):** 4-column layout with `1.25rem` outer padding. Floating glass sheets dock neatly to margins with stacked vertical rhythms.

## Elevation & Depth

Visual depth is achieved through layered frosted glass planes and ambient, multi-stop soft cast shadows derived from softbox studio lighting:

1. **Ambient Ground Shadow:** Tinted with warm umber rather than pure black:
   `box-shadow: 0 24px 48px -12px rgba(60, 48, 38, 0.14), 0 8px 20px -6px rgba(60, 48, 38, 0.08);`
2. **Glassmorphic Substrate:** Translucent floating containers with:
   - `background: linear-gradient(135deg, rgba(255, 255, 255, 0.52) 0%, rgba(244, 239, 234, 0.28) 100%);`
   - `backdrop-filter: blur(24px) saturate(140%);`
   - `border: 1px solid rgba(255, 255, 255, 0.65);`
   - Internal specular rim: `box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 1px 0 rgba(216, 197, 168, 0.2);`
3. **Orbital Depth (Level 3 - Floating Elements / Modals):**
   - High diffuse spread: `box-shadow: 0 32px 64px -16px rgba(42, 38, 35, 0.2), 0 0 0 1px rgba(216, 197, 168, 0.4);`

## Shapes

The shape system derives its identity directly from smooth organic spheres and curved architectural glass. 

- **Level 2 (Rounded):** Standard elements use `0.5rem` (8px), card containers and glass overlays use `1.5rem` (24px) up to `2rem` (32px) for hero panels, echoing the smooth curvature of the frosted glass sheet in the composition.
- **Circular Elements:** Action buttons, floating icon triggers, badges, and avatar frames adopt pure `rounded-full` circular silhouettes to maintain visual kinship with the 3D globe geometry.

## Components

### Buttons
- **Primary Button:** Deep slate background (`#6C7A82`), white text (`#FFFFFF`), `rounded-full`, subtle inner highlight on top edge, with hover transition to `#58646C` and ambient shadow.
- **Glass / Secondary Button:** Translucent cream base (`rgba(255, 255, 255, 0.5)`), charcoal text (`#2A2623`), border in champagne gold (`rgba(216, 197, 168, 0.6)`), blurred backdrop.
- **Icon Floating Buttons:** Circular (`48px x 48px`), frosted alabaster body with soft umber shadow and refined 1.5px stroke icons.

### Cards & Panels
- Constructed using the primary frosted glass token: `backdrop-filter: blur(24px)`, rounded corners (`1.5rem`), fine 1px white/champagne top highlight border, and tinted floor drop shadows. Internal text uses high contrast charcoal umber for primary readability.

### Input Fields
- Subtle, recessed pill or rounded-lg containers (`#F4EFEA`) with `1px solid rgba(168, 155, 140, 0.35)`. Upon focus: transitions to champagne glow `0 0 0 3px rgba(216, 197, 168, 0.35)` and slate border (`#6C7A82`).

### Checkboxes & Radio Buttons
- Custom circular radios echoing spheres, with an inner filled orb in warm bronze (`#8C6D46`). Checkboxes have soft rounded-sm corners (`4px`) with custom champagne tick paths on slate backgrounds.

### Chips & Badges
- Pill-shaped (`rounded-full`), padded `space-2xs` vertical by `space-sm` horizontal. Background is semi-opaque warm alabaster with uppercase `label-sm` tracking.

### Additional Sphere / Curator Elements
- **Stage Pedestals / Dividers:** Ultra-thin hairline horizontal rules colored in `rgba(168, 155, 140, 0.25)` or graduated neutral gradients.