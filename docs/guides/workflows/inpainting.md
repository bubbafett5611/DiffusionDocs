# Inpainting

Inpainting edits a selected region of an image, usually defined by a mask. The model redraws the masked area while trying to fit the surrounding context.

::: tip Quick Take
Use inpainting for local fixes: hands, faces, objects, clothing, backgrounds, text-like shapes, or small composition changes.
:::

## Basic Flow

```mermaid
flowchart LR
  A["Image"] --> B["Mask problem area"]
  B --> C["Prompt replacement"]
  C --> D["Generate candidates"]
  D --> E["Adjust mask or strength"]
```
<!-- diagram id="inpainting-flow" caption="Basic inpainting workflow" -->

## Good Masks

Good masks usually include the full problem area plus a little surrounding context. A mask that is too tight can create seams. A mask that is too broad can change more than intended.

## Common Fixes

- replace an unwanted object
- redraw a hand or face
- change clothing or hair
- clean up background artifacts
- extend or repair details near an edge

## Mask Strategy

The mask is part of the prompt. A tight mask says "change only this exact area." A broad mask says "you may rebuild this region." Neither is always better.

Use a slightly padded mask for seams, broken hands, faces, and object removal. Use a broader mask when the replacement needs surrounding context, such as changing a sleeve, hairstyle, or background object.

## Prompt Strategy

Prompt the desired contents of the masked region in context:

```text
the same person with a natural left hand resting on the table, matching warm indoor light
```

Avoid describing the whole image unless the tool expects a full-scene prompt. Too much unrelated prompt text can cause the inpainted area to fight the surrounding image.

## Strength And Context

Low strength can preserve too much of the broken region. High strength can ignore the surrounding image. If the edit creates seams, try more mask padding, lower strength, or a prompt that explicitly matches lighting and material.

::: info Inpaint Iteratively
For difficult repairs, make several small passes instead of one huge mask. Fix structure first, then texture, then small cleanup.
:::

::: warning Keep Expectations Local
Inpainting is best for localized changes. If the whole composition is wrong, text-to-image or image-to-image is often a better starting point.
:::
