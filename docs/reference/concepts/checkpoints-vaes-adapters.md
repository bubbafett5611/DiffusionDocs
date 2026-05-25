# Checkpoints, VAEs, And Adapters

Diffusion workflows often load several different file types. They are related, but they do different jobs.

::: tip Quick Take
A checkpoint is usually the main model. A VAE encodes and decodes latents. Adapters such as LoRAs modify behavior without replacing the whole model.
:::

| Term | Role |
| --- | --- |
| Checkpoint | Main saved model weights |
| VAE | Converts between pixels and latents |
| LoRA | Small adapter that modifies model behavior |
| Embedding | Learned token used through text conditioning |

## Compatibility

These files are not universally interchangeable. A LoRA, embedding, or VAE may be tied to a model family, architecture, text encoder, training method, or tool implementation.

::: warning Do Not Mix Casually
If colors, anatomy, prompt behavior, or loading errors appear after changing files, check compatibility before assuming the prompt is the problem.
:::

## Checkpoints

A checkpoint is a saved set of model weights. In image generation communities, "checkpoint" often means the main model file selected before generation. It may contain a UNet or diffusion transformer, text encoder components, VAE components, metadata, or only some of those pieces depending on the format and ecosystem.

Checkpoints are not interchangeable just because they share a file extension. A checkpoint trained for one architecture or model family may fail to load, produce artifacts, or ignore adapters in a workflow built for another.

## VAEs

A variational autoencoder converts between pixel images and latent representations. In latent diffusion, the VAE is responsible for encoding input images into latents and decoding final latents back into pixels.

VAE mismatch can show up as:

- washed-out colors
- unexpected contrast
- noisy or mushy detail
- color casts
- artifacts in decoded images

Some checkpoints include a VAE. Others expect one to be selected separately. Some tools hide this choice, while others expose it directly.

## Adapters

Adapters modify or guide a base model without replacing the whole checkpoint. LoRAs, embeddings, ControlNet-style models, IP-Adapter-style references, and other add-ons all fall into this broad category, though they work in different places in the pipeline.

Adapters are powerful because they are smaller and easier to combine than full checkpoints. They are also a common source of compatibility problems. A LoRA trained for an SDXL model is not automatically meaningful for a Flux-style or SD 1.5-style model. An embedding trained for one text encoder may be ignored by another.

::: warning Match The Whole Stack
Compatibility includes architecture, text encoder, VAE assumptions, training family, backend support, and sometimes exact model version. If an adapter does nothing, first verify that it was made for the model family and tool you are using.
:::

