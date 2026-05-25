# LoRA Troubleshooting

LoRA problems usually come from compatibility, weight, trigger words, or conflicts with other conditioning.

::: tip Quick Take
Use the smallest reproducible test: one compatible model, one LoRA, one trigger word, one simple prompt, and no extra adapters.
:::

## Common Symptoms

| Symptom | Likely Cause |
| --- | --- |
| No visible effect | Missing trigger word, low weight, wrong model family |
| Strong artifacts | Weight too high, incompatible LoRA, poor training |
| Style overwhelms subject | Weight too high or prompt too vague |
| Other LoRA stops working | Adapter conflict or competing trigger words |

## Debug Steps

1. Confirm the LoRA loads without errors.
2. Confirm model-family compatibility.
3. Use the creator's example prompt if available.
4. Test a moderate weight.
5. Disable other LoRAs and embeddings.
6. Change one variable at a time.

## Minimal Reproduction

Create a tiny test case before debugging the full workflow:

```text
trigger_word, one clear subject, simple background
```

Use one model, one LoRA, one seed, and no other adapters. If the LoRA works there, the problem is probably a conflict in the full workflow. If it fails there, check compatibility, trigger words, file loading, or training quality.

## If The LoRA Is Too Strong

Symptoms:

- face or anatomy collapses
- texture becomes crunchy
- style overwhelms the subject
- colors shift unexpectedly
- every object starts resembling the LoRA concept

Fixes:

- lower the weight
- reduce repeated trigger words
- remove competing style terms
- test a different seed
- use inpainting for local application

## If The LoRA Does Nothing

Check whether it is actually loaded, whether the model family matches, whether the trigger word is needed, and whether the UI supports that LoRA type for the selected model.

::: info Keep Notes
Useful LoRA settings are workflow-specific. Record the model, trigger, weight, prompt, and any conflicting adapters when you find a stable setup.
:::
