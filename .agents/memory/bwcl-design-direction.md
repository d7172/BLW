---
name: BWCL design direction & contrast tradeoff
description: The intended visual language for the bwcl artifact and the deliberate accessibility tradeoff behind its brand colors.
---

# BWCL design direction

The bwcl marketing site was redesigned to match the reference https://nanoplazz.tilda.ws/ :
light mint background, deep fresh-green primary + coral secondary, charcoal text, very rounded
corners, floating pill nav, bento cards, circular-progress stat rings, italic green accent words,
Outfit + Bricolage Grotesque fonts. Keep this language when adding new sections/pages.

## Contrast is an intentional tradeoff — do not "fix" it blindly

Primary green and coral, on white text, are tuned to roughly large-text AA (~3:1), not full
normal-text AA (4.5:1).

**Why:** the reference the user explicitly asked to match is itself not strict-AA. Full compliance
(much darker green/coral) breaks the light, fresh aesthetic the user wanted. So the scope was:
large bold CTA buttons/labels reach large-text AA; the vibe is preserved.

**How to apply:** if a future task reports "green/coral fails WCAG AA" and proposes darkening them,
first confirm whether strict normal-text AA is actually required. If only aesthetics matter, leave
as-is or raise text opacity / use charcoal text on the colored surface instead of darkening the brand
hue. Only darken the brand tokens if the user asks for real accessibility compliance.
