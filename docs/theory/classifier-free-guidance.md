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

