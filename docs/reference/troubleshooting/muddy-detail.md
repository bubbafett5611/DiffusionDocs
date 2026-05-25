# Muddy Detail

Muddy detail can mean soft textures, low contrast, smeared shapes, or unclear edges.

::: tip Quick Take
Check resolution, model fit, sampler settings, and overprocessing before adding more prompt adjectives.
:::

## Likely Causes

- resolution too low for the subject
- too few useful denoising steps
- weak or mismatched model
- excessive upscaling or denoising
- conflicting style terms

## Fixes

- generate a cleaner base image before upscaling
- reduce prompt clutter
- test a different seed
- compare sampler or scheduler only after the baseline is understood
- avoid repeated refinement passes that smear detail

## Separate Detail From Sharpness

Sharpness is not the same as meaningful detail. An image can have crisp edges but confused texture, or soft edges with coherent structure. Before adding sharpening, ask whether the underlying image contains the forms you want.

If the base image is structurally weak, upscaling will usually magnify the weakness. Generate or inpaint a stronger base before using refinement passes.

## Common Workflow Problems

Muddy results often come from:

- low resolution for a complex scene
- too much image-to-image denoising after upscaling
- a VAE or model mismatch
- excessive style words that fight each other
- overuse of "high detail" language without clear subject structure
- a sampler/scheduler combination that does not suit the model

## Practical Test

Use the same prompt and seed, then compare:

1. baseline model defaults
2. fewer style adjectives
3. a different seed
4. a modest resolution change
5. sampler/scheduler changes only after the base is stable

::: warning Upscaling Is Not Repair
Upscalers and high-resolution passes can add texture, but they do not always fix incorrect structure. For important areas, use inpainting or a better base generation.
:::

