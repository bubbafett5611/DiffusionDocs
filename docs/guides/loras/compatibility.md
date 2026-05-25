# LoRA Compatibility

LoRA compatibility depends on more than the filename. It depends on the model family, architecture, text encoder, training target, and sometimes the UI/backend.

::: tip Quick Take
If a LoRA fails, first verify compatibility with the base model. Prompt changes cannot fix a fundamentally mismatched adapter.
:::

## Compatibility Checklist

- model family or architecture matches
- expected base model is known
- trigger words are documented
- UI/backend supports the LoRA type
- weight is in a reasonable range
- no conflicting adapters are loaded

## Symptoms Of A Mismatch

- no visible effect
- severe artifacts at normal weights
- strange colors or textures
- prompt ignored when the LoRA is enabled
- errors when loading the file

::: info Model Family Matters
Compatibility names are ecosystem-specific. Do not assume a LoRA made for one generation family will work with another simply because the UI lets you select it.
:::

