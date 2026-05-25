# Trigger Words And Weights

Many LoRAs are trained with trigger words. A trigger word is a prompt token that helps activate the learned concept.

::: tip Quick Take
Use the LoRA's recommended trigger word and start with a moderate weight. Increase or decrease only after you see how the base output behaves.
:::

## Trigger Words

Trigger words are usually documented by the LoRA creator. Some LoRAs need them strongly; others activate from weight alone or respond to natural language.

If a LoRA seems inactive:

- confirm it is loaded
- confirm the model family is compatible
- use the recommended trigger word
- test without other LoRAs
- try a simple prompt

## Weights

LoRA weight controls influence. Too low may do little. Too high can distort anatomy, texture, color, or composition.

::: warning Stronger Is Not Always Better
High LoRA weights can overpower the base model or other conditioning. If details become harsh or distorted, reduce the weight before rewriting the whole prompt.
:::

