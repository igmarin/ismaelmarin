---
name: Hardcore Engineering & Product Strategy
colors:
  surface: '#0e141c'
  surface-dim: '#0e141c'
  surface-bright: '#343943'
  surface-container-lowest: '#090e17'
  surface-container-low: '#161c24'
  surface-container: '#1a2029'
  surface-container-high: '#252a33'
  surface-container-highest: '#30353e'
  on-surface: '#dee2ef'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dee2ef'
  inverse-on-surface: '#2b313a'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffb59d'
  on-tertiary: '#5d1900'
  tertiary-container: '#ff8358'
  on-tertiary-container: '#702000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#0e141c'
  on-background: '#dee2ef'
  surface-variant: '#30353e'
  bg-card: rgba(20, 28, 40, 0.4)
  bg-terminal: '#0f172a'
  text-primary: '#ffffff'
  text-secondary: '#cbd5e1'
  text-muted: '#94a3b8'
  border-low: rgba(255, 255, 255, 0.08)
typography:
  display-hero:
    fontFamily: DM Serif Display
    fontSize: 88px
    fontWeight: '400'
    lineHeight: '1.05'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: DM Serif Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-md:
    fontFamily: DM Serif Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: DM Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
  body-md:
    fontFamily: DM Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: DM Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.15em
  code-snippet:
    fontFamily: DM Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1100px
  section-gap: 6rem
  grid-gutter: 1.5rem
  p-card: 2rem
  unit-1: 0.25rem
  unit-4: 1rem
  unit-8: 2rem
---

## Brand & Style

The design system embodies the persona of a high-level technical architect: expert, cutting-edge, and authoritative, yet accessible through premium editorial presentation. It bridges the gap between "hardcore engineering" (Rust, Rails, MCP) and "product strategy" by blending the raw aesthetic of a development environment with the sophisticated layout of a high-end publication.

The chosen style is **Modern Technical Minimalism** with **Glassmorphism** and **Terminal-inspired** accents. 

**Visual Signature:**
- **Atmospheric Depth:** A dark-first interface using deep navy canvases layered with 12px backdrop blurs and subtle 4% opacity digital noise to provide a tactile "matte paper" texture.
- **Dynamic Lighting:** Large, slow-moving radial gradients (Cyber-Cyan and AI Violet) float in the background to provide a sense of living software.
- **Editorial Contrast:** High-contrast pairing of elegant serifs for branding and storytelling against monospace fonts for technical execution.

## Colors

The palette uses high-saturation accents against a "Deep Space Navy" foundation to maintain high contrast and professional focus.

- **Primary (Cyber-Cyan):** Represents modern infrastructure, Cloudflare, and execution. Used for interactive states and primary focus points.
- **Secondary (AI Violet):** Represents machine learning, agentic intelligence, and MCP workflows.
- **Tertiary (Ruby-Rust):** A nod to Rails roots and technical stability; also serves as a semantic "warm/warning" color.
- **Neutral (Deep Space Navy):** The core canvas color.
- **Surfaces:** Floating elements use "Frosted Navy" with high backdrop blur. Code blocks use "Terminal Ink" (#0f172a) for a classic IDE feel.

## Typography

The typographic system is built on a "High/Low" contrast strategy.

- **Serif (DM Serif Display):** Used for big hero statements, section titles, and conversion points. It conveys authority, history, and strategic thinking.
- **Monospace (DM Mono):** Used for all body copy, navigation, and technical details. This intentionally frames all information as "technical documentation," emphasizing the engineering-first mindset.

**Scaling Rules:**
- For mobile, `display-hero` should scale down to `48px` using a `clamp()` function or mobile-specific variant.
- Monospace body copy must maintain a generous `1.8` line-height to ensure readability of long technical explanations.

## Layout & Spacing

The layout philosophy follows a **Fixed-Grid System** within a centered container, ensuring that technical content doesn't become overly wide and difficult to scan.

- **Grid Model:** A standard 12-column grid is used for desktop. 
- **Hero Layout:** Typically a 2-column split: left-aligned pitch and right-aligned interactive terminal widget.
- **Whitespace:** Use extreme vertical padding (6rem+) between major sections to emphasize architectural discipline and provide "breathing room" for dense information.
- **Section Dividers:** Use thin 1px horizontal borders or soft gradients instead of large gaps to maintain a "structured" and "built" feel.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Glassmorphism** rather than traditional shadows.

- **Layer 0 (Canvas):** Solid `#060b13` with a subtle noise texture.
- **Layer 1 (Cards):** Semi-transparent `#141c2866` (Frosted Navy) with a 12px backdrop-blur. 
- **Outlines:** Use "Ghost Borders"—hairline white/slate borders at 8% opacity.
- **Interactive Depth:** On hover, cards do not just shadow; they "glow." Use a 15-20% opacity shadow tinted to the element's accent color (e.g., a cyan glow for tech cards, a ruby glow for Rails projects).
- **Physical Response:** Elements should lift slightly (-4px to -8px) using a springy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` transition.

## Shapes

The system uses a **Soft Geometry** approach to maintain a technical, precise look without feeling aggressive.

- **Base Corner Radius:** 0.25rem (4px) for buttons and inputs to keep them crisp.
- **Container Radius:** 0.75rem (12px) for project cards and terminal widgets to soften the overall layout.
- **Terminal Controls:** Use perfectly circular (pill) shapes for simulated window controls to mimic the classic OS aesthetic.

## Components

### Terminal Widget
The flagship component. A simulated CLI container with:
- A `#090e16` background and 1px border.
- Header with three traffic-light controls (red, yellow, green) and a centered monospace title.
- A blinking block cursor (`_`) and green-cyan prompt text.

### Glass Project Cards
- **Structure:** Backdrop blur, 1px border, and a hidden "top-line" gradient.
- **Interaction:** On hover, the top-line gradient (`Cyber-Cyan` to `AI Violet`) scales to 100% width, and the card emits a themed glow.

### Buttons
- **Primary:** Uppercase monospace text, linear gradient background (`Royal Indigo` to `Cyber-Cyan`).
- **Ghost:** Hairline border, Cyber-Cyan text at 30% opacity, becoming solid with a glow on hover.

### Lead Generation Grid
Conversion points should be styled as high-contrast glass cards featuring:
1. A small icon/emoji in a square outline.
2. A small `label-caps` category indicator.
3. The primary contact handle in `headline-md` (Serif).

### Technical Command Blocks
Styled with a solid `Terminal Ink` background and a thick 4px vertical accent border on the left side to distinguish code from prose.