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

## How A LoRA Changes Behavior

At a high level, a LoRA adds a small learned adjustment to parts of the model. Instead of replacing the whole checkpoint, it nudges the model toward patterns learned during LoRA training.

This is why LoRAs can be powerful and fragile at the same time. They rely on the base model still providing general image knowledge. The LoRA provides a bias, specialization, or concept. If the base model is incompatible, the LoRA's learned adjustments may no longer point at meaningful behavior.

## LoRA vs Fine-Tuned Checkpoint

| Choice | Strength |
| --- | --- |
| LoRA | Small, portable, easy to enable or disable |
| Fine-tuned checkpoint | Stronger global behavior change, but larger and less modular |

Use a LoRA when you want modular control. Use a fine-tuned checkpoint when the whole generation style or domain should change consistently.

## Training Quality Matters

A LoRA trained on narrow, mislabeled, overprocessed, or low-quality data can produce brittle results. It may only work with exact trigger words, overfit to poses, distort anatomy, or drag unwanted backgrounds and colors into generations.

::: warning Compatibility Comes First
A LoRA trained for one model family may not work correctly with another. Check architecture, base model, and text encoder assumptions before troubleshooting the prompt.
:::
