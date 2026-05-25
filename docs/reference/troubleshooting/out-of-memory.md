# Out Of Memory

Out-of-memory errors happen when the workflow needs more GPU or system memory than is available.

::: tip Quick Take
Lower resolution, batch size, and heavy extras first. Those are usually the fastest memory wins.
:::

## Common Causes

- image size too large
- batch count too high
- high-resolution fix or upscaling enabled
- large model or multiple models loaded
- memory-heavy extensions or custom nodes

## Fixes

- reduce width and height
- set batch size to 1
- disable upscaling or high-resolution passes
- unload unused models
- use memory-saving options supported by your tool
- restart the UI if memory is fragmented or stuck

## What Uses Memory

Memory pressure comes from several places:

- model weights loaded into GPU memory
- text encoders, VAEs, control models, and adapters
- latent tensors for the current resolution and batch
- attention operations inside the model
- upscaling or high-resolution passes
- previews, caches, extensions, or custom nodes

Large models, high resolutions, and multiple loaded components can combine quickly. A workflow that fits at 768x768 may fail at 1536x1536 because memory does not grow linearly in the way users expect.

## Fastest Reductions

Try these before changing obscure launch flags:

1. Set batch size to 1.
2. Reduce width and height.
3. Disable high-resolution fix, tiled upscale, or second-pass refinement.
4. Remove extra control models and unused LoRAs.
5. Close other GPU-heavy applications.
6. Restart the UI to clear stuck allocations.

## Advanced Options

Depending on the tool and hardware, memory-saving options may include attention slicing, tiled VAE decoding, CPU offload, lower precision, quantized models, or backend-specific optimizations. These can help, but they may slow generation or change compatibility.

::: warning Hardware Advice Is Tool-Specific
Exact memory options depend on the UI, backend, GPU, driver, and operating system. Follow tool-specific docs for flags and launch options.
:::

