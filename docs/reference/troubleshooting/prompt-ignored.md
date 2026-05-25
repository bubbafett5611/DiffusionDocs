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

