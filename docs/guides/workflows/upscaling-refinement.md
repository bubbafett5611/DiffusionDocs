# Upscaling And Refinement

Upscaling increases image size. Refinement improves or changes detail after an initial generation.

::: tip Quick Take
Generate composition first, then upscale and refine. Upscaling a weak image usually gives you a larger weak image.
:::

## Common Stages

1. Generate a good composition at a manageable size.
2. Fix major issues with seed, prompt, image-to-image, or inpainting.
3. Upscale using a tool or model suited to the image type.
4. Refine details carefully if the upscaled image looks soft or artificial.

## What Can Go Wrong

- oversharpened texture
- plastic skin or harsh edges
- invented detail that changes the subject
- repeated patterns
- visible seams after tiled processing

## Upscaling Types

Upscaling can mean different operations:

| Type | What It Does |
| --- | --- |
| Simple resize | Enlarges pixels without adding semantic detail |
| Dedicated upscaler | Adds texture or sharpness using an upscaling model |
| Latent high-resolution pass | Regenerates or refines at a larger latent size |
| Tiled refinement | Processes large images in overlapping regions |
| Manual post-processing | Uses editing tools after generation |

Each type has different risks. A dedicated upscaler may invent texture. A high-resolution pass may change the subject. Tiled refinement may create seams or inconsistent detail.

## Refinement Order

Use this order for fewer surprises:

1. Solve composition at the base size.
2. Fix major anatomy, objects, or layout with inpainting.
3. Upscale.
4. Inspect the upscaled image before adding another denoising pass.
5. Use local inpainting for final repairs.

## Advanced Detail: Denoising After Upscale

When a high-resolution pass adds denoising, it is not merely sharpening. It gives the model permission to rewrite the image. Low denoising preserves more of the upscaled base. Higher denoising can add detail but may alter identity, text, clothing, or layout.

::: info Save The Pre-Upscale Image
Keep the best pre-upscale output and its settings. If refinement goes wrong, it is easier to return to a clean source than to repair an overprocessed final image.
:::
