# Theory

Theory pages explain why diffusion workflows behave the way they do. They are useful when practical settings start to feel arbitrary.

::: tip Read When Useful
You do not need to read theory before making images. Return here when practical problems make you curious about why a setting, model, or workflow behaves the way it does.
:::

## Theory Pages

- [Denoising](./denoising.md)
- [Latent Diffusion](./latent-diffusion.md)
- [Classifier-Free Guidance](./classifier-free-guidance.md)
- [Text Encoders](./text-encoders.md)

## What This Section Is For

The guide pages explain how to use diffusion tools. The theory pages explain why those tools behave the way they do. You do not need the math to make useful images, but a little theory helps when defaults stop working.

Read theory when you want to understand:

- why more steps are not always better
- why guidance can improve prompt following and also create artifacts
- why latent diffusion depends on a VAE
- why text encoders shape prompt behavior
- why two tools can produce different images from similar settings

## Useful Reading Order

1. Start with [Denoising](./denoising.md) for the core iterative process.
2. Read [Latent Diffusion](./latent-diffusion.md) to understand why many workflows operate in compressed space.
3. Read [Classifier-Free Guidance](./classifier-free-guidance.md) when guidance values or negative prompts feel mysterious.
4. Read [Text Encoders](./text-encoders.md) to understand why prompt wording is not universal across model families.

::: info Practical Theory
The goal is not to prove equations. The goal is to build enough mental structure that settings, failure modes, and tool differences become easier to reason about.
:::

