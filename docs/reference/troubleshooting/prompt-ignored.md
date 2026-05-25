# Prompt Ignored

When a model ignores the prompt, the cause may be wording, conditioning conflicts, model mismatch, or settings.

::: tip Quick Take
Shorten the prompt, remove extra conditioning, and test the model with a simple subject before changing many settings.
:::

## Likely Causes

- prompt is too long or contradictory
- LoRA or control input is overpowering text conditioning
- guidance value is too low or too high
- model family expects different prompt style
- hosted tool hides or rewrites prompt handling

## Fixes

1. Test a short prompt with one subject.
2. Disable LoRAs, embeddings, and extra controls.
3. Try several seeds.
4. Check model-specific prompting notes.
5. Reintroduce details slowly.

## Diagnostic Prompts

Use prompts that make failure obvious:

- `a red cube on a white table`
- `a blue car in a snowy street`
- `portrait photo of one person wearing a yellow raincoat`

If the model cannot follow a simple color, subject, and scene prompt, the issue is probably not your long prompt. Check model compatibility, hidden hosted-tool behavior, prompt parser syntax, or whether the model is designed for the task.

## Conditioning Conflicts

Prompt text may be competing with other signals:

- an image-to-image input preserving the old subject
- an inpainting mask that covers too little area
- a pose/depth/control map forcing a different layout
- a LoRA strongly biasing style or subject
- a negative prompt suppressing something needed

When this happens, the prompt is not truly being ignored. It is being outvoted.

## Advanced Detail: Prompt Strength Is Not Literal

Diffusion models follow learned associations, not symbolic commands. "One red apple" can fail if the seed, composition, model prior, or other conditioning makes repeated objects likely. Increasing guidance may help, but it can also amplify artifacts or make the model cling to the wrong details.

::: info Related Pages
See [Conditioning](../concepts/conditioning.md), [Text Encoders](../theory/text-encoders.md), and [Model-Specific Behavior](../../guides/prompting/model-specific-behavior.md).
:::

