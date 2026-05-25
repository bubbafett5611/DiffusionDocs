# Your First Workflow

A first workflow should be simple enough to understand and controlled enough to troubleshoot. Start with text-to-image before adding image references, LoRAs, inpainting, upscaling, or complex node graphs.

::: tip Quick Take
Start with one model, one prompt, and mostly default settings. Generate a few variations, then change one thing at a time so you can tell what actually helped.
:::

## Basic Text-To-Image Flow

A typical text-to-image workflow looks like this:

1. Choose a model.
2. Write a prompt.
3. Choose image size and batch count.
4. Choose sampling settings.
5. Generate several images.
6. Adjust one thing at a time.
7. Save useful settings and seeds.

The exact buttons vary by tool, but the structure is similar across many modern diffusion interfaces.

::: details Why Start With Text-To-Image?
Text-to-image is the smallest useful workflow because it removes extra variables. Image references, LoRAs, ControlNet-style inputs, inpainting masks, and upscalers are powerful, but each one adds another place where results can change or fail.
:::

## Choose A Model

The model determines much of the image style, subject knowledge, compatibility, and expected prompting behavior.

For a first test, choose one general-purpose model that your tool supports well. Avoid stacking LoRAs, embeddings, custom VAEs, and many extensions before you know what the base model does on its own.

::: warning Avoid Stacking Unknowns
If you start with several LoRAs, custom VAEs, unusual samplers, and many extensions, it becomes difficult to know whether a problem comes from the prompt, the model, the settings, or an add-on.
:::

## Write A Prompt

Start with a clear description of the subject and scene:

```text
a small ceramic teapot on a wooden table, morning window light, simple background
```

Then add details that matter:

```text
a small blue ceramic teapot on a wooden table, morning window light, simple kitchen background, shallow depth of field
```

Prompting is conditioning, not a command language. The model may ignore, reinterpret, or overemphasize parts of the prompt depending on training, settings, and workflow.

## Use Conservative Settings

For a first pass, use settings close to your tool's defaults. Defaults are not always optimal, but they are often chosen to produce usable results for the model family the tool expects.

Avoid changing many settings at once. If the image fails, you want to know whether the cause was the prompt, model, image size, sampler, seed, or another setting.

::: info Defaults Are A Baseline, Not A Rule
Defaults are useful because they give you a known starting point. Once you understand what the baseline does, changing settings becomes an experiment instead of a guess.
:::

## Generate Variations

Generate more than one image before judging the prompt. A single result can be misleading because the seed may produce an unusually good or bad composition.

Useful early experiments:

- keep the same prompt and change the seed
- keep the same seed and revise the prompt
- compare a small number of sampler or scheduler options
- test the model without LoRAs or other adapters

## Save What Works

When a result is useful, save enough information to reproduce it:

- model name and version
- prompt and negative prompt, if used
- seed
- image size
- sampler and scheduler
- step count
- guidance or CFG value, if exposed
- LoRAs, embeddings, or other adapters

Some tools store this metadata automatically. Others require you to save it separately.

## Add Complexity Slowly

Once basic text-to-image works, add one workflow feature at a time:

- image-to-image for controlled variation
- inpainting for localized fixes
- LoRAs for specific styles, subjects, or concepts
- upscaling for larger final images
- ControlNet-style inputs for pose, depth, edges, or layout

If a complex workflow breaks, simplify it until the failure disappears. Then add pieces back one at a time.

::: tip Troubleshooting Habit
When a workflow fails, reduce it until the problem disappears. Then add pieces back one by one. This is slower than guessing once, but much faster than guessing forever.
:::
