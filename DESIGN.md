# Design System: High-End Editorial AI

## 1. Overview & Creative North Star: "The Digital Concierge"
The Creative North Star for this design system is **"The Digital Concierge."** Unlike generic chatbots that feel like rigid terminal interfaces, this system treats the AI interaction as an editorial conversation. It moves away from the "bubble-on-bubble" chat trope in favor of a sophisticated, layered environment that feels like high-end stationery or a premium digital publication.

We break the "template" look through **intentional white space** and **tonal depth**. By prioritizing organic flow over structural boxes, we create an interface that breathes. The goal is to make the user feel like they are interacting with a thoughtful assistant, not a robotic script.

---

## 2. Colors: Tonal Atmosphere
The palette is built on a foundation of professional blues (`primary`) and soft, atmospheric neutrals (`surface` tiers). 

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning. 
Structure must be defined through background color shifts. Use `surface-container-low` for the main chat area and `surface-container-lowest` (pure white) for the message blocks to create "implicit" boundaries. 

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials:
- **Base Layer:** `surface` (#f7f9fb) – The desk.
- **Content Area:** `surface-container` (#eaeff2) – The folder.
- **Actionable Elements:** `surface-container-lowest` (#ffffff) – The paper.

### The "Glass & Gradient" Rule
To add "soul" to the professional blue:
- **Primary CTAs:** Use a subtle vertical gradient from `primary` (#005ac7) to `primary-container` (#0e76fd).
- **Floating Overlays:** For mobile navigation or settings, use `surface-container-lowest` at 80% opacity with a `backdrop-blur` of 12px.

---

## 3. Typography: The Editorial Voice
We use two distinct typefaces to separate "Action/Input" from "Knowledge/Output."

*   **Display & Headlines (Manrope):** High-waisted and modern. Use `headline-sm` for AI section headers to establish an authoritative yet approachable tone.
*   **Body & Labels (Plus Jakarta Sans):** Highly legible with a geometric touch. 
    *   **User Input:** `body-lg` for clarity during drafting.
    *   **AI Responses:** `body-md` for high-density information.
    *   **Metadata:** `label-sm` for timestamps and "Seen" states.

The hierarchy is intentionally steep. A `display-sm` heading should feel significantly more impactful than `body-lg` to guide the eye through long-form AI explanations.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-heavy." We use **Ambient Shadows** and **Tonal Stacking**.

*   **The Layering Principle:** Place a `surface-container-lowest` message bubble on top of a `surface-container-low` background. The subtle 2% shift in brightness provides all the separation the eye needs.
*   **Ambient Shadows:** For floating input bars, use a shadow color derived from `on-surface` (#2c3437) at 4% opacity with a blur of 32px and a Y-offset of 8px. It should look like a soft glow, not a hard shadow.
*   **The "Ghost Border" Fallback:** If a container sits on an identical color (e.g., for accessibility), use the `outline-variant` (#acb3b7) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Fluid Interaction

### The Chat Bubbles (Cards)
*   **User Messages:** `secondary-container` (#cfe6f2) with `on-secondary-container` text. Roundedness: `xl` (1.5rem) on three corners, `sm` (0.25rem) on the bottom-right to indicate direction.
*   **AI Responses:** `surface-container-lowest` (#ffffff). No borders. Use `md` spacing (0.75rem) for internal padding.
*   **Markdown Support:** Code blocks should use `inverse_surface` (#0b0f10) with `on_primary_fixed_variant` text for a high-contrast, professional "developer" feel.

### Persistent Input Area
*   **Container:** A `surface-container-highest` bar that spans the bottom.
*   **Input Field:** `surface-container-lowest` with a `full` (9999px) roundedness scale.
*   **Interaction:** On focus, the input should transition from `outline-variant` to a `primary` "Ghost Border" (20% opacity).

### Specialized Components
*   **Action Chips:** For suggested prompts. Use `secondary-fixed-dim` background with `on-secondary-fixed` text. Roundedness: `full`. No border.
*   **Typing Indicator:** Three dots using the `primary-dim` color, utilizing a soft breathing animation (opacity 0.3 to 1.0).
*   **Lists within AI Responses:** Forbid 1px dividers. Use `spacing.4` (1rem) of vertical white space to separate list items.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use `spacing.6` (1.5rem) as your default gutter for mobile screens to create an "expensive" airy feel.
*   **Do** use `primary-fixed` for links and high-importance interactive tokens.
*   **Do** ensure Markdown headers inside AI responses use the `manrope` font to maintain editorial consistency.

### Don't:
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#2c3437) to reduce eye strain and maintain the "Soft Minimalist" vibe.
*   **Don't** use standard "Speech Bubble" tails. Use the `Roundedness Scale` to imply directionality instead; it feels more modern and less like a comic book.
*   **Don't** use high-contrast dividers. If you need to separate sections, use a 12px height block of `surface-dim`.