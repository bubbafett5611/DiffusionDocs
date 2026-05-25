# Repeated Objects

Repeated objects can appear when the model overemphasizes a concept, misunderstands count, or fills empty areas with familiar patterns.

::: tip Quick Take
Simplify the prompt and composition before trying complex negative prompts.
:::

## Likely Causes

- unclear subject count
- prompt repeats the same concept many ways
- image size or aspect ratio encourages extra copies
- LoRA or style adapter overemphasizes a motif
- seed produces an unstable composition

## Fixes

- state the count plainly
- remove duplicate prompt terms
- change seed
- adjust framing or aspect ratio
- reduce LoRA weight
- use inpainting to remove extras

## Why Counting Is Hard

Diffusion models do not count objects the way a layout program does. They learn visual patterns associated with words. If a prompt says "three candles," the model is biased toward candle-like regions, but it is not guaranteed to maintain an exact symbolic count across denoising.

Repeated objects become more likely when the image has empty space, patterned backgrounds, strong style motifs, or multiple prompt phrases that imply similar objects.

## Prompt Cleanup

Avoid stacking synonyms that all point to the same object:

```text
one lantern, glowing lantern, ornate lantern, hanging lantern, lantern light
```

That can unintentionally tell the model that lantern-ness is the most important visual pattern. Prefer a clearer structure:

```text
one ornate hanging lantern above a wooden table, warm light, dark room
```

## Composition Fixes

If the count matters, make the composition support it:

- use a closer crop
- specify a simple background
- avoid large empty regions near the subject
- use inpainting to remove extras
- use control inputs or manual editing for exact layouts

::: info Exact Counts May Need Post-Editing
For production images that require exact object counts, use diffusion for the base image and finish with inpainting, compositing, or manual editing.
:::

