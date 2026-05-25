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

