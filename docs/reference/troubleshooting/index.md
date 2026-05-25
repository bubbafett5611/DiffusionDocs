# Troubleshooting

Troubleshooting starts with the visible symptom, then narrows likely causes.

::: info Start With The Symptom
Good troubleshooting starts with what changed and what failed: model, prompt, seed, resolution, sampler, scheduler, LoRAs, extensions, tool version, and hardware/backend.
:::

## Troubleshooting Pages

- [Prompt Ignored](./prompt-ignored.md)
- [Bad Anatomy Or Text](./bad-anatomy-or-text.md)
- [Muddy Detail](./muddy-detail.md)
- [Repeated Objects](./repeated-objects.md)
- [Color Problems](./color-problems.md)
- [Out Of Memory](./out-of-memory.md)

## General Method

The fastest troubleshooting path is controlled reduction:

1. Save the failing prompt, seed, model, and settings.
2. Remove LoRAs, embeddings, control inputs, extensions, and post-processing.
3. Test a short prompt with one clear subject.
4. Change one variable at a time.
5. Reintroduce complexity only after the simple baseline works.

This separates model behavior from workflow behavior. If the simple baseline fails, investigate model compatibility, backend support, or installation. If the simple baseline works but the full workflow fails, the problem is likely in conditioning, adapters, resolution, or post-processing.

## What To Record

When asking for help or comparing results, include:

- tool name and version
- model/checkpoint and VAE
- prompt and negative prompt, if used
- seed, resolution, steps, sampler, scheduler, and guidance
- LoRAs, embeddings, adapters, control maps, and weights
- exact error text for crashes or loading problems

::: warning Avoid Random Setting Churn
Changing ten settings can accidentally improve one image while making the workflow harder to understand. Reliable workflows are explainable, repeatable, and diagnosable.
:::

