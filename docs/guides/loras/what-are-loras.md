# What Are LoRAs?

LoRA stands for low-rank adaptation. In diffusion workflows, a LoRA is usually a small file that adjusts how a base model responds.

::: tip Quick Take
Use a LoRA when the base model does not reliably know a style, subject, character, or concept you need.
:::

## LoRA Compared To Other Files

| File Type | Role |
| --- | --- |
| Checkpoint | Main model weights |
| VAE | Converts between latents and pixels in latent workflows |
| Embedding | Learned text-conditioning token |
| LoRA | Adapter that modifies model behavior |

## Typical Uses

- specific visual styles
- characters or subjects
- clothing, objects, or poses
- rendering habits
- domain-specific concepts

::: warning Compatibility Comes First
A LoRA trained for one model family may not work correctly with another. Check architecture, base model, and text encoder assumptions before troubleshooting the prompt.
:::

