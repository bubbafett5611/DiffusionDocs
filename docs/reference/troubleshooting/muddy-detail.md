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

