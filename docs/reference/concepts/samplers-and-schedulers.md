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

## Sampler vs Scheduler

A sampler is the numerical method used to update the current sample from one step to the next. A scheduler controls the sequence of noise levels used across those steps. Some tools expose these separately; others combine them into one dropdown or hide the scheduler behind presets.

The difference matters because two workflows can share a sampler name but use different noise schedules. They may both be "Euler" or "DPM++" in the UI while still taking different paths through noise levels.

## What Changes When You Switch Them?

Changing the sampler or scheduler can affect:

- composition stability
- sharpness and texture
- color contrast
- how quickly the image converges
- how guidance behaves
- whether low-step generation works well
- how much small prompt changes alter the output

This does not mean one sampler is universally best. A sampler that is excellent for one model family, step count, or guidance range may be mediocre in another.

## Practical Selection

Use the tool or model default as a baseline. Then test sampler and scheduler changes with the same prompt, seed, resolution, model, guidance, and step count. If everything changes at once, you cannot tell whether the sampler helped.

Good comparison habits:

1. Pick one prompt that shows the kind of image you actually make.
2. Fix the seed and resolution.
3. Compare two or three sampler/scheduler combinations.
4. Repeat with several seeds before choosing a default.
5. Save the full settings, not just the sampler name.

## Advanced Detail: Determinism And Ancestral Noise

Some samplers are deterministic for a fixed seed and settings. Others add extra noise during sampling, often described as ancestral behavior. Ancestral samplers can produce lively variation, but they may be harder to reproduce exactly across tools.

Even deterministic workflows may differ between backends because of floating-point precision, hardware kernels, scheduler implementation, library versions, or hidden preprocessing.

::: info Related Reading
See [Seeds And Reproducibility](./seeds-and-reproducibility.md) for why matching a seed alone is not enough.
:::

