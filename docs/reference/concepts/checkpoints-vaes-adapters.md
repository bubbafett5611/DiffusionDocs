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

