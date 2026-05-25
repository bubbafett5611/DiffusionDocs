# Color Problems

Color problems include washed-out images, strange tints, harsh contrast, or colors that ignore the prompt.

::: tip Quick Take
Check VAE/model compatibility and overstrong guidance before assuming the color words are wrong.
:::

## Likely Causes

- mismatched VAE
- model style bias
- high guidance or prompt weighting
- LoRA affecting palette
- post-processing or upscaler changes

## Fixes

- test the model with its expected VAE
- disable LoRAs and style adapters
- reduce guidance or weights
- use simpler color language
- compare before and after upscaling

