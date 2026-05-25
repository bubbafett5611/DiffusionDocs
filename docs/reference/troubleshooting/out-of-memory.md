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

::: warning Hardware Advice Is Tool-Specific
Exact memory options depend on the UI, backend, GPU, driver, and operating system. Follow tool-specific docs for flags and launch options.
:::

