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

## Compatibility Layers

Compatibility is layered. A file can be compatible at one level and incompatible at another.

| Layer | Example Failure |
| --- | --- |
| Architecture | Tool cannot load the checkpoint |
| Text encoder | Embedding or prompt syntax has no effect |
| VAE/latent setup | Colors or contrast look wrong |
| Adapter family | LoRA changes nothing or distorts output |
| Scheduler/backend | Same settings behave differently across tools |
| License/source | File works technically but cannot be used for the intended purpose |

## Adapters Are The Usual Trap

LoRAs, embeddings, and control models are often trained against a specific base family. Even when they load, they may not influence the model correctly if the target architecture or text encoder is different.

If an adapter appears broken:

1. Confirm the base model family it was trained for.
2. Confirm the trigger words or usage notes.
3. Test it alone at a moderate weight.
4. Remove other adapters and control inputs.
5. Check whether your UI supports that adapter type for the model family.

## Version And Backend Drift

Compatibility can change as tools add support for new architectures, quantization formats, schedulers, or attention implementations. A tutorial from six months ago may still be useful, but its exact install steps or defaults may be out of date.

::: warning Same Name, Different Stack
Two UIs can expose the same model name while using different VAEs, prompt parsers, schedulers, or precision settings. Compare the full stack before assuming one result proves a model is better or worse.
:::

