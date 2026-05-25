# Model Families

A model family is a group of related models that share important assumptions, such as architecture, text encoders, training style, or expected workflow behavior.

::: tip Quick Take
Choose models by compatibility and intended use, not only by popularity or example images.
:::

## Why Families Matter

Model family can affect:

- prompt style
- supported image sizes
- LoRA compatibility
- negative prompt behavior
- sampler and scheduler expectations
- tool support

## Common Evaluation Questions

- What architecture or family is this model based on?
- What tool or backend supports it well?
- What resolution range is expected?
- Does it need a specific VAE or text encoder?
- Are LoRAs or embeddings available for it?
- What license or usage terms apply?

## Base Models, Fine-Tunes, And Derivatives

A base model is a broad foundation trained to support many prompts. A fine-tune continues training from a base model to shift behavior toward a domain, style, subject type, or workflow. A derivative may include merges, distillation, quantization, or other transformations.

These distinctions matter because a fine-tune usually inherits many assumptions from its base:

- compatible LoRA family
- expected prompt syntax
- text encoder behavior
- resolution habits
- VAE or latent-space assumptions
- scheduler and guidance ranges

When a model page says "based on SDXL" or "Flux-derived," that is not trivia. It is a compatibility clue.

## Architecture And Training Lineage

Model families can differ in architecture, not only in training data. Some use UNet-style diffusion backbones; others use transformer-based designs or different text encoder stacks. Some are trained for broad text-to-image use, some are optimized for editing, some are distilled for low-step inference, and some are packaged for specific hosted systems.

This is why settings cannot be copied blindly between families. A guidance value, negative prompt style, or sampler that works well for one family may be ineffective or harmful for another.

## How To Evaluate A New Model

Before using a model seriously, test it with a small baseline:

1. Read the model card or repository notes.
2. Confirm the intended base family and license.
3. Use the recommended resolution and sampler defaults first.
4. Generate several simple prompts without LoRAs.
5. Add one adapter or workflow feature at a time.
6. Save metadata for any result you want to reproduce.

::: info Good Examples Are Not Enough
Example images show what is possible. They do not prove that the model works for your prompts, license needs, hardware, or UI. Evaluate the workflow you actually intend to run.
:::

