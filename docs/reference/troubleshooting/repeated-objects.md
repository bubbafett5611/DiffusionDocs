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

