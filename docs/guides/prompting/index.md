# Prompting

Prompting is the text-conditioning part of a generation workflow. It describes what the model should move toward, but it does not act like a strict command language.

::: info Prompting Is Conditioning
Avoid treating prompts as magic commands. A prompt is one form of conditioning, and its behavior depends on the model, text encoder, sampler, settings, and surrounding workflow.
:::

## Current Guides

- [Prompt Structure](./prompt-structure.md)
- [Negative Prompts](./negative-prompts.md)
- [Prompt Weighting](./prompt-weighting.md)
- [Model-Specific Behavior](./model-specific-behavior.md)

## Useful Starting Pattern

```text
subject, context, composition, lighting, medium or style, important constraints
```

Start simple, generate variations, then add detail only when it helps.

