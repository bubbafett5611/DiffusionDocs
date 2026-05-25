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

::: warning Debug One Adapter At A Time
When a stacked setup fails, disable every LoRA except the one you are testing. Add the others back only after the base behavior is understood.
:::

