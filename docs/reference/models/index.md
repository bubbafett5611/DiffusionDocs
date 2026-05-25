# Models

Model pages explain model families, file formats, compatibility, and source or licensing caveats.

::: warning Avoid Unsupported Claims
Model capabilities, licenses, compatibility notes, and recommended settings can change. Prefer primary sources and clearly scope claims to specific model families or versions.
:::

## Model Reference Pages

- [Model Families](./model-families.md)
- [Checkpoint Formats](./checkpoint-formats.md)
- [Compatibility](./compatibility.md)
- [Licensing And Sources](./licensing-and-sources.md)

## What "Model" Means Here

In casual diffusion discussions, "model" can mean several different things:

- a full base model family, such as an SDXL-style family or a Flux-style family
- a checkpoint file loaded into a UI
- a fine-tuned checkpoint based on another model
- a LoRA, embedding, VAE, control model, or other adapter
- a hosted system whose internal model stack is not fully exposed

This section uses "model family" for broad architecture/training-lineage groups and "checkpoint" for saved weights loaded by a workflow.

## Why Model Choice Matters

The model determines much more than visual style. It affects prompt interpretation, expected resolution, LoRA compatibility, negative prompt behavior, memory use, sampler defaults, available tooling, and licensing constraints.

| Need | Model Consideration |
| --- | --- |
| Custom LoRAs | Use a family with available compatible adapters |
| Low VRAM | Check architecture size, precision, quantization, and backend support |
| Text rendering | Use a model or hosted system known to support the task better |
| Commercial work | Verify license and source terms before production use |
| Repeatable local workflows | Prefer models with clear metadata and stable tool support |

::: warning Hosted Models May Be Opaque
Hosted tools may change the model, prompt processing, safety systems, or post-processing without exposing every detail. Treat hosted outputs as system behavior, not just raw checkpoint behavior.
:::

