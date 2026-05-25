# Samplers And Schedulers

Samplers and schedulers shape how denoising steps happen.

::: tip Quick Take
A sampler decides how to step through denoising. A scheduler controls how noise levels change across those steps.
:::

## Why The Distinction Matters

Some tools expose sampler and scheduler separately. Others combine them or hide one behind presets. Two workflows with the same sampler name may differ if the scheduler or implementation is different.

## Practical Effects

- speed
- stability
- sharpness or softness
- detail handling
- prompt responsiveness
- how many steps are useful

::: warning Names Are Not Always Portable
Sampler names, scheduler names, and defaults can differ between tools. Compare actual settings before assuming two UIs are doing the same thing.
:::

