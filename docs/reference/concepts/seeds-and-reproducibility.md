# Seeds And Reproducibility

A seed initializes the random noise used for generation.

::: tip Quick Take
Seeds help reproduce or vary outputs, but exact reproducibility depends on the full workflow, not the seed alone.
:::

## What A Seed Controls

The seed usually controls the starting noise pattern. With the same model and settings, reusing a seed can produce a similar or identical image.

## What Else Matters

- model and version
- VAE
- image size
- sampler and scheduler
- step count
- guidance value
- LoRAs or embeddings
- UI/backend version
- hardware or precision differences

::: warning Save Metadata
If you want reproducibility, save the whole workflow, not only the prompt and seed.
:::

## What A Seed Actually Controls

The seed usually controls a pseudorandom number generator that creates the starting noise. The same seed should produce the same initial noise only when the generator, shape, precision, and backend behavior match.

The seed does not store the model, prompt, sampler, scheduler, VAE, LoRAs, or tool settings. It is one ingredient in a recipe, not the recipe itself.

## Practical Reproducibility Checklist

To reproduce an image, save:

- prompt and negative prompt, if used
- seed and whether the seed was fixed or randomized
- model checkpoint and version/hash when available
- VAE and text encoder choices when exposed
- LoRAs, embeddings, adapters, and weights
- sampler, scheduler, step count, and guidance value
- resolution, batch settings, and image-to-image strength
- tool name, version, backend, extensions, and workflow file

PNG metadata, ComfyUI workflows, or UI history panels can help, but do not assume every hosted or local tool preserves the full recipe.

## Why Images Still Differ

Two tools can use the same seed and prompt but still produce different images because they may tokenize text differently, use a different scheduler implementation, apply different prompt weighting rules, load a different VAE, or use different precision settings. Even small differences early in denoising can grow into visibly different compositions.

::: warning Public Examples Are Often Incomplete
Images shared online may omit important settings. Treat seed recreation as approximate unless the model, workflow, backend, and all generation settings are included.
:::

