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

## Identify The Kind Of Color Problem

Different color symptoms point to different causes:

| Symptom | Likely Direction |
| --- | --- |
| Washed-out image | VAE, decoding, low contrast style, or post-processing |
| Strong tint | model bias, LoRA style, color-management issue |
| Prompted color ignored | conditioning weakness or conflicting visual input |
| Harsh saturation | guidance too high, overprocessing, style terms |
| Colors change after upscale | upscaler or refinement pass altering palette |

## VAE And Decoding

If a latent diffusion workflow uses the wrong VAE or decoding setup, the image can look wrong even when the composition is good. This is especially suspicious when many prompts suddenly have the same color cast or washed-out look.

Test with:

1. the model's recommended VAE
2. no LoRAs or style adapters
3. default guidance and sampler
4. no high-resolution or post-processing pass

## Prompted Colors

If a color word is ignored, make it structurally important. "A red dress" is often stronger than "red aesthetic." Avoid asking for many competing palette terms in the same prompt.

::: warning Post-Processing Can Hide The Cause
Upscalers, face restoration, color correction, and hosted-tool filters can change palette after generation. Compare the raw output before diagnosing the prompt or model.
:::

