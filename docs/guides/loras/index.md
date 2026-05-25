# LoRAs

LoRAs are small adapters that modify a base model's behavior. They are commonly used to add a style, subject, character, clothing type, or visual concept without replacing the whole checkpoint.

::: warning Compatibility Matters
LoRAs are usually tied to model families, architectures, text encoders, and training assumptions. Do not assume a LoRA made for one ecosystem will behave correctly everywhere.
:::

## LoRA Guides

- [What Are LoRAs?](./what-are-loras.md)
- [Trigger Words And Weights](./trigger-words-and-weights.md)
- [Compatibility](./compatibility.md)
- [Stacking LoRAs](./stacking-loras.md)
- [LoRA Troubleshooting](./troubleshooting.md)

::: info LoRAs Are Not Magic
A LoRA can steer a model, but it still depends on the base model, prompt, weight, training quality, and workflow.
:::

## Where LoRAs Fit

A LoRA modifies how a base model behaves during generation. It is usually much smaller than a checkpoint because it stores targeted changes rather than a full replacement model.

Use LoRAs when you need:

- a subject the base model does not reliably know
- a repeatable character or clothing style
- a visual style or rendering habit
- a domain concept that is hard to prompt consistently
- a small adapter instead of a full fine-tuned checkpoint

Do not use LoRAs as a substitute for every control problem. Exact poses, layouts, masks, object counts, and edits often need workflow controls.

## Learning Path

1. Learn what LoRAs are.
2. Verify compatibility before loading one.
3. Use the creator's trigger words and a moderate weight.
4. Test one LoRA at a time.
5. Stack only after individual behavior is understood.
