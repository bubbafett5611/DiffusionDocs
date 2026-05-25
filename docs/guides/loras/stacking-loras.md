# Stacking LoRAs

Stacking means using multiple LoRAs in one workflow.

::: tip Quick Take
Test each LoRA alone before stacking. If the combined result breaks, reduce weights and add adapters back one at a time.
:::

## Common Reasons To Stack

- one LoRA for style and one for subject
- one for clothing and one for pose or composition
- several subtle style adapters
- a character LoRA plus an environment or material LoRA

## Risks

- competing visual styles
- overbaked texture
- anatomy problems
- trigger words fighting each other
- one LoRA suppressing another

## Stacking Strategy

Use the weakest stack that solves the problem. If one LoRA handles the subject and another handles the style, keep both weights modest. If two LoRAs both affect style, texture, face shape, or clothing, expect interaction.

Recommended process:

1. Test LoRA A alone.
2. Test LoRA B alone.
3. Combine them at lower weights than the solo tests.
4. Keep the same seed while comparing.
5. Add any third LoRA only after the two-LoRA stack is stable.

## Conflict Types

LoRAs can conflict in different ways:

| Conflict | Example |
| --- | --- |
| Style conflict | painterly LoRA fights photoreal LoRA |
| Subject conflict | two character LoRAs pull face/body features apart |
| Texture conflict | both adapters amplify surface detail |
| Trigger conflict | trigger words activate overlapping concepts |
| Base conflict | one LoRA expects a different model family |

## When To Stop Stacking

If the prompt becomes a long list of adapter triggers and corrective terms, simplify. Use a different checkpoint, inpaint the target area, or make a smaller number of stronger choices.

::: warning Debug One Adapter At A Time
When a stacked setup fails, disable every LoRA except the one you are testing. Add the others back only after the base behavior is understood.
:::
