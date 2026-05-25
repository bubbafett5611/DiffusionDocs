# Denoising

Denoising is the repeated process of moving from noise toward an image.

::: tip Quick Take
Diffusion generation does not create the final image in one step. It starts noisy and repeatedly predicts how to make the sample less noisy while following conditioning.
:::

## Denoising Loop

```text
random noise
  -> denoise step
  -> denoise step
  -> denoise step
  -> decoded image
```

The sampler and scheduler decide how this path is taken. The model predicts what changes should move the noisy sample toward the conditioned result.

## Why Steps Matter

Too few steps can leave weak structure or rough detail. Too many steps can waste time or shift the image in unwanted ways. Useful ranges depend on the model family, sampler, scheduler, and workflow.

