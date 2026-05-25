# Model Compatibility

Compatibility describes whether a model, VAE, LoRA, embedding, sampler, tool, and workflow can work together correctly.

::: tip Quick Take
Most "my prompt is broken" problems should first rule out compatibility when custom models or adapters are involved.
:::

## Compatibility Checklist

- model architecture supported by the UI/backend
- checkpoint and VAE match expectations
- LoRAs trained for the same family
- embeddings compatible with the text encoder
- sampler and scheduler supported by the workflow
- resolution within a reasonable range for the model

## Symptoms

- loading errors
- washed-out or strange colors
- LoRA has no effect
- prompt syntax ignored
- severe artifacts at normal settings

