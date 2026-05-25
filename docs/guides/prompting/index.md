# Prompting

Prompting is the text-conditioning part of a generation workflow. It describes what the model should move toward, but it does not act like a strict command language.

::: info Prompting Is Conditioning
Avoid treating prompts as magic commands. A prompt is one form of conditioning, and its behavior depends on the model, text encoder, sampler, settings, and surrounding workflow.
:::

## Prompting Guides

- [Prompt Structure](./prompt-structure.md)
- [Negative Prompts](./negative-prompts.md)
- [Prompt Weighting](./prompt-weighting.md)
- [Model-Specific Behavior](./model-specific-behavior.md)

## Useful Starting Pattern

```text
subject, context, composition, lighting, medium or style, important constraints
```

Start simple, generate variations, then add detail only when it helps.

## What Prompting Can And Cannot Do

Prompting is powerful because text can steer subject, scene, style, mood, lighting, and composition. It is limited because the model is not executing instructions literally. It is sampling from learned associations under the influence of your conditioning.

Good prompting means making the important signal clear:

- name the main subject early
- describe the scene in concrete terms
- avoid contradictory styles unless contrast is intentional
- add constraints only when they solve a problem
- revise from generated results, not from prompt theory alone

## Prompting In A Workflow

The prompt is only one control. If a prompt cannot solve a problem, the right answer may be a different seed, a better model, a LoRA, image-to-image, inpainting, a control input, or post-editing.

::: warning Do Not Hide Everything In The Prompt
Long prompts can become brittle. If the task needs exact layout, exact text, identity preservation, or a specific pose, use workflow controls instead of trying to force everything through words.
:::
