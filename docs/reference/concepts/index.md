# Concepts

Concept pages explain the pieces that appear across many diffusion tools and workflows.

::: tip Quick Take
Start here when a setting name feels familiar but not meaningful. These pages explain the shared machinery behind prompts, denoising, seeds, samplers, schedulers, checkpoints, VAEs, and adapters.
:::

## How To Use This Section

Most diffusion tools expose the same underlying ideas through different interfaces. A node graph, a web form, a hosted generator, and a Python script may use different words or hide different controls, but they are usually arranging the same ingredients:

- a model that predicts how to remove noise
- conditioning that steers the prediction
- a sampler and scheduler that decide the denoising path
- a latent or pixel representation being updated
- optional adapters such as LoRAs, embeddings, VAEs, or control models

Understanding those pieces makes tool-specific tutorials easier to translate. It also makes troubleshooting less random: instead of changing every setting at once, you can ask which part of the system is probably responsible.

## Core Concepts

- [Conditioning](./conditioning.md)
- [Denoising](./denoising.md)
- [Latent Space](./latent-space.md)
- [Samplers And Schedulers](./samplers-and-schedulers.md)
- [Seeds And Reproducibility](./seeds-and-reproducibility.md)
- [Checkpoints, VAEs, And Adapters](./checkpoints-vaes-adapters.md)

## A Practical Mental Model

Diffusion generation is controlled iteration. The system starts from noise, repeatedly predicts how to move that noisy sample toward something more image-like, and uses conditioning to bias the path toward the requested result.

| Question | Concept To Read |
| --- | --- |
| What is steering the image? | [Conditioning](./conditioning.md) |
| How is noise gradually removed? | [Denoising](./denoising.md) |
| Why does the model work in compressed space? | [Latent Space](./latent-space.md) |
| Why do sampling settings change style and stability? | [Samplers And Schedulers](./samplers-and-schedulers.md) |
| Why can the same prompt produce different images? | [Seeds And Reproducibility](./seeds-and-reproducibility.md) |
| Why do model files and adapters need to match? | [Checkpoints, VAEs, And Adapters](./checkpoints-vaes-adapters.md) |

::: warning Interfaces Hide Different Details
Some tools expose every component. Others bundle them into presets or rewrite prompts behind the scenes. When comparing results between tools, compare the actual model, conditioning, resolution, seed behavior, sampler, scheduler, guidance, and post-processing path.
:::

