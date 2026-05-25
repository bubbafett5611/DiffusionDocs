# Inpainting

Inpainting edits a selected region of an image, usually defined by a mask. The model redraws the masked area while trying to fit the surrounding context.

::: tip Quick Take
Use inpainting for local fixes: hands, faces, objects, clothing, backgrounds, text-like shapes, or small composition changes.
:::

## Basic Flow

```text
image
  -> mask problem area
  -> prompt the desired replacement
  -> generate candidates
  -> adjust mask or strength
```

## Good Masks

Good masks usually include the full problem area plus a little surrounding context. A mask that is too tight can create seams. A mask that is too broad can change more than intended.

## Common Fixes

- replace an unwanted object
- redraw a hand or face
- change clothing or hair
- clean up background artifacts
- extend or repair details near an edge

::: warning Keep Expectations Local
Inpainting is best for localized changes. If the whole composition is wrong, text-to-image or image-to-image is often a better starting point.
:::

