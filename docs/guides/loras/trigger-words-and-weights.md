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

## Finding A Good Weight

Start near the creator's recommendation. If none is provided, use a moderate weight and test several seeds. Judge the result against the LoRA's purpose:

- subject LoRA: does the subject appear without damaging anatomy?
- style LoRA: does the style appear without overpowering composition?
- clothing/object LoRA: does the concept appear without spreading everywhere?
- character LoRA: does identity improve without collapsing pose variety?

## Trigger Words Are Not Magic Words

A trigger word is useful because it appears in training captions or learned associations. It does not force the model to generate the concept perfectly. The prompt, base model, weight, seed, and other conditioning still matter.

## Example Test Prompt

Use a simple test prompt before building a complex scene:

```text
trigger_word, portrait photo of one person, simple background, soft natural light
```

Then test a second prompt that matches your real use case. Some LoRAs look good in creator examples but fail in different compositions.

::: warning Stronger Is Not Always Better
High LoRA weights can overpower the base model or other conditioning. If details become harsh or distorted, reduce the weight before rewriting the whole prompt.
:::
