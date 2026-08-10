---
name: De Mads
description: A local music center landing page with warm dark tonal surfaces and amber accent.
colors:
  primary: "#ffb703"
  accent-cool: "#8ecae6"
  surface-dark: "#0f1718"
  surface-panel: "#152224"
  surface-card: "#1b2c2f"
  border: "rgba(243,246,244,0.14)"
  text: "#f3f6f4"
  text-muted: "rgba(243,246,244,0.72)"
  strong: "#0d1415"
typography:
  display:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(3.3rem, 11vw, 8.5rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(2.2rem, 6vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "0.03em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.82rem"
    fontWeight: 500
    letterSpacing: "0.12em"
rounded:
  md: "14px"
  sm: "10px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.strong}"
    rounded: "{rounded.md}"
    padding: "0.86rem 1.3rem"
  button-outline:
    backgroundColor: "rgba(27,44,47,0.45)"
    textColor: "{colors.text}"
    rounded: "999px"
    padding: "0.86rem 1.3rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.accent-cool}"
    rounded: "999px"
    padding: "0.86rem 1.3rem"
---

# Design System: De Mads

## Overview

**Creative North Star: "A local music hub with warm, practical energy"**

The current De Mads landing page is a dark, stage-like brochure system built to showcase rehearsal, studio, café, rental, and event services with clarity and reliability. The design balances polished band-facing confidence with a grounded, accessible tone: warm amber highlights on deep charcoal surfaces, subtle glassy tonal layers, and strong typographic hierarchy.

Key Characteristics:
- dark, modern music venue atmosphere with a local community focus
- amber accent and soft blue support for energy and clarity
- bold display typography paired with approachable body copy
- grounded surface layering with restrained shadow and subtle glow

## Colors

The palette is anchored in deep midnight surfaces with a bright amber accent and a cooler blue secondary pulse. Neutral tones support legibility and afford a premium yet approachable stage-like aesthetic.

### Primary
- **Amber Highlight** (#ffb703): used for CTA buttons, emphasis text, badges, interactive hover state, and brand accents.

### Secondary
- **Cool Accent** (#8ecae6): used for supportive microcopy, labels, subtle highlights, and secondary interactive signals.

### Neutral
- **Surface Dark** (#0f1718): the page background and deepest tonal field.
- **Surface Panel** (#152224): section backgrounds, nav backdrop, and large content zones.
- **Surface Card** (#1b2c2f): cards, panels, embedded wrappers, and elevated blocks.
- **Border** (rgba(243,246,244,0.14)): light tonal separators, card outlines, and subtle edge definition.
- **Text** (#f3f6f4): main body text and headings.
- **Text Muted** (rgba(243,246,244,0.72)): secondary copy and supporting labels.
- **Strong** (#0d1415): text used on bright accent buttons and for high-contrast on light accents.

## Typography

**Display Font:** Bebas Neue
**Body Font:** Barlow
**Label Font:** IBM Plex Mono

**Character:** The type system pairs strong headline display energy with readable, friendly body copy and terse technical labels. It supports a music-industry voice that feels modern without being flashy.

### Hierarchy
- **Display** (700, clamp(3.3rem, 11vw, 8.5rem), 0.92): hero headline and major hero statements.
- **Headline** (700, clamp(2.2rem, 6vw, 4.2rem), 0.98): section headings and prominent section titles.
- **Body** (400, 16px, 1.6): paragraphs, descriptions, and longer explanatory text.
- **Label** (500, 0.82rem, 1.4): navigation labels, microcopy, button captions, and auxiliary tag text.

### Named Rules
**The Contrast Rule.** Headlines and CTA copy use bright text or amber accent for instant readability on the dark surface palette.

## Layout

The page uses a full-width responsive system with generous horizontal padding that scales using `clamp()` around the central content. Sections are framed in wide bands with layered background shifts between transparent and deep surface fills.

- Container padding is `clamp(1.25rem, 7vw, 7rem)` horizontally and up to `5.5rem` vertically in main sections.
- A 2-column grid is used for studio, café, contact, and social panels; it collapses to a single column below 960px.
- The hero spans the full viewport height with content aligned to the left and anchored by large vertical spacing.
- Cards and rhythm units use repeated 1rem–2.4rem gaps to create a clear visual hierarchy.

## Elevation & Depth

The system is mostly flat with tonal layering and selective hover lift. Depth is conveyed by dark surface contrast, soft border outlines, and restrained shadow on interactive elements.

### Shadow Vocabulary
- **Hover lift** (`0 12px 24px rgba(0,0,0,0.18)`): used on buttons and interactive cards to signal elevation during hover/focus.

### Named Rules
**The Layered Surface Rule.** Most panels remain flat; hover and focus states provide the only active elevation.

## Shapes

Rounded corners are consistent and moderate, with most surfaces using a smooth 14px radius and smaller interactive forms using 10px. Buttons use pill-shaped rounding for a polished, approachable touch.

- **Panel radius:** 14px
- **Small panel radius:** 10px
- **Button radius:** 999px for capsule CTAs

## Components

### Buttons
- **Shape:** capsule or rounded rectangle with soft curve.
- **Primary:** amber background (#ffb703), dark text (#0d1415), 14px radius, `0.86rem 1.3rem` padding.
- **Hover / Focus:** subtle upward transform and soft ambient shadow.
- **Secondary / Outline:** translucent deep surface fill, white text, light border, 999px radius, same padding.
- **Ghost:** transparent background, cool blue text, accent border on hover.

### Cards / Containers
- **Corner Style:** 14px radius (10px on smaller grouped cards).
- **Background:** surface-card (#1b2c2f) with subtle border.
- **Shadow Strategy:** flat by default, hover lift only on interactive cards.
- **Border:** `1px solid rgba(243,246,244,0.14)`.
- **Internal Padding:** 1.4rem to 1.7rem.

### Navigation
- **Style:** fixed top nav with blurred transparent dark surface and amber brand mark.
- **Typography:** uppercase mono labels and bright accent CTA.
- **Mobile treatment:** collapsed hamburger toggled menu with hidden overflow.
- **Hover / Focus:** color shifts to white and border accents appear under links.

## Do's and Don'ts

### Do:
- **Do** keep the hero copy and CTAs strong, simple, and action-oriented.
- **Do** preserve the dark stage-like palette with amber accents for energy.
- **Do** use 14px radius cards and 999px capsule buttons consistently.
- **Do** maintain the `clamp()`-based responsive scaling for hero and section headings.

### Don't:
- **Don't** introduce bright secondary backgrounds outside the embed or card areas.
- **Don't** use heavy, colorful shadows; keep depth restrained and text-first.
- **Don't** dilute the brand accent by using amber on more than one or two key actions per section.
