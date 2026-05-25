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

## What To Verify

Check the LoRA page or model card for:

- base model family
- recommended checkpoint, if any
- trigger words
- example prompt
- recommended weight range
- whether it targets style, subject, character, clothing, pose, or another concept
- known incompatibilities

If this information is missing, test cautiously and save notes.

## Architecture Mismatch

Architecture mismatch is more serious than prompt mismatch. A LoRA made for one architecture may fail to load or may produce meaningless changes in another. A UI allowing file selection does not guarantee semantic compatibility.

## Text Encoder Mismatch

Some LoRAs rely on trigger words or learned associations through a specific text encoder. If the target model uses a different encoder, the trigger may not activate the intended concept.

::: info Model Family Matters
Compatibility names are ecosystem-specific. Do not assume a LoRA made for one generation family will work with another simply because the UI lets you select it.
:::
