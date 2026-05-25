# Text-To-Image

Text-to-image starts from noise and uses a text prompt, model, and sampling settings to produce an image.

::: tip Quick Take
Use text-to-image to learn how a model responds before adding image references, LoRAs, inpainting, or complex workflow nodes.
:::

## Basic Flow

```mermaid
flowchart LR
  A["Prompt"] --> B["Text conditioning"]
  B --> C["Model denoising"]
  C --> D["Decoded image"]
  D --> E["Review and iterate"]
```
<!-- diagram id="text-to-image-flow" caption="Basic text-to-image workflow" -->

## Practical Steps

1. Choose one model.
2. Write a clear subject and scene prompt.
3. Use conservative default settings.
4. Generate several seeds.
5. Keep the best seed and revise only one major variable.
6. Save the prompt, seed, model, size, sampler, scheduler, and guidance value.

## What To Adjust First

- prompt wording when the subject or composition is wrong
- seed when the idea is right but the composition is weak
- image size when framing or aspect ratio is wrong
- sampler or scheduler only after you understand the baseline

## Baseline Recipe

For a new model, start with a conservative baseline:

1. Use the model's recommended resolution range.
2. Use the tool's default sampler, scheduler, and guidance.
3. Write one clear subject and scene.
4. Generate several seeds.
5. Pick the best composition before adding LoRAs or complex prompt syntax.

This baseline teaches you how the model behaves before other workflow pieces obscure the signal.

## Reading Results

If the subject is wrong, revise the prompt or model choice. If the subject is right but the layout is weak, try seeds or aspect ratio. If the image is close but one region is broken, use inpainting. If it is good but too small, upscale and refine.

Text-to-image is strongest for exploration. It is usually weaker for exact edits, exact typography, exact object counts, or strict identity preservation.

::: info Related Concepts
See [Conditioning](../../reference/concepts/conditioning.md), [Denoising](../../reference/concepts/denoising.md), and [Seeds And Reproducibility](../../reference/concepts/seeds-and-reproducibility.md).
:::
