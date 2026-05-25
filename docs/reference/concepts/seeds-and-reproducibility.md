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

