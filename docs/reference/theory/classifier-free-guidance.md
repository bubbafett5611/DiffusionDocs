# Classifier-Free Guidance

Classifier-free guidance, often shown as CFG or guidance scale, controls how strongly some diffusion workflows follow conditioning.

::: tip Quick Take
Low guidance may ignore the prompt. Very high guidance can create harsh, distorted, or overemphasized results.
:::

## Practical Meaning

Guidance changes the balance between model prior and conditioning pressure. It is not a universal quality knob.

## Common Symptoms

| Guidance | Possible Result |
| --- | --- |
| Too low | prompt weakly followed |
| Moderate | balanced prompt adherence |
| Too high | artifacts, harsh contrast, overcooked detail |

::: warning Model-Dependent
Useful guidance ranges vary by model family, sampler, scheduler, and tool. Do not copy a value across workflows without testing.
:::

## How Guidance Works Conceptually

In classifier-free guidance, the workflow compares two predictions: one that uses the conditioning and one that is less conditioned or unconditioned. The guidance scale controls how strongly the sampler pushes toward the difference between those predictions.

In simplified terms:

- low guidance lets the model prior have more freedom
- moderate guidance pushes toward the prompt while preserving naturalness
- high guidance can over-amplify prompt features and artifacts

This is why guidance can make a prompt feel stronger but also make images harsh, brittle, oversaturated, repetitive, or distorted.

## Negative Conditioning

Negative prompts in many older Stable Diffusion-style workflows are related to the less-desired conditioning path. They do not erase concepts like a photo editor. They shift the denoising direction away from patterns associated with the negative conditioning.

Newer model families and hosted systems may not use negative prompts in the same way, or may hide the mechanism entirely. Always treat negative prompt behavior as workflow-specific.

## Interaction With Samplers And Steps

Guidance interacts with the sampler, scheduler, step count, model family, and prompt. A high guidance value with too many steps can overcook details. A low-step distilled model may expect very different guidance behavior from an older model.

Practical test:

1. Pick a fixed seed and prompt.
2. Try a small guidance range around the tool default.
3. Watch for prompt adherence, artifacts, color harshness, and repeated details.
4. Change guidance only after the model and sampler baseline are reasonable.

::: info Guidance Is Pressure
Think of guidance as pressure toward conditioning, not intelligence. More pressure can help when the model is drifting, but too much pressure can damage the image.
:::

