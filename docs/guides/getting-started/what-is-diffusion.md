# What Is Diffusion?

Diffusion image models are systems that learn how to remove noise from images. During training, images are repeatedly corrupted with noise. The model learns to predict how to move from a noisy version back toward a cleaner image.

When generating an image, the process is run in reverse: the system starts with random noise and repeatedly denoises it until an image appears.

::: tip Quick Take
Generation starts from noise and repeatedly refines it toward an image that matches the conditioning. The model is not looking up a stored picture; it is using learned patterns to guide denoising.
:::

## The Short Version

A diffusion workflow usually starts with:

- random noise
- a prompt or other conditioning
- a trained model
- a sampler that decides how denoising steps are taken

The model does not retrieve a stored image. It uses patterns learned during training to guide the denoising process toward something that matches the conditioning.

## Conditioning

Conditioning is the information used to steer generation.

Common forms include:

- text prompts
- negative prompts, when supported by the model or tool
- input images
- masks for inpainting
- pose, depth, edge, or segmentation maps
- LoRAs and other adapters

Text prompting is only one form of conditioning. Image-to-image, inpainting, ControlNet-style guidance, and regional prompting all add more constraints to the denoising process.

::: info Prompting Is One Kind Of Conditioning
Many beginner explanations focus on text prompts because they are easy to start with. More controlled workflows often add image, mask, pose, depth, edge, or regional conditioning.
:::

## Noise, Steps, and Seeds

Generation begins from noise. A seed is a number used to initialize that noise. Reusing the same seed with the same model, settings, and workflow can help reproduce similar results.

Steps are denoising iterations. More steps can give the sampler more opportunities to refine the image, but more is not always better. The useful range depends on the model family, sampler, scheduler, tool, and workflow.

## Latent Diffusion

Many modern image models work in a compressed representation called latent space instead of directly editing full-resolution pixels at every step. A variational autoencoder, often shortened to VAE, converts between image pixels and latents.

This is why some workflows distinguish between:

- the checkpoint or base model that predicts denoising
- the VAE that encodes and decodes images
- the final image shown to the user

Not every tool exposes these parts in the same way.

## What Diffusion Is Not

Diffusion is not magic, a search engine, or a collage machine. It is also not perfectly predictable. Small changes to prompts, seeds, model versions, sampler settings, or conditioning strength can produce large changes in the final image.

That instability is part of why repeatable workflows matter.

::: warning Reproducibility Has Limits
Using the same seed helps, but it is not enough by itself. Model version, VAE, sampler, scheduler, image size, tool version, extensions, and hardware/backend differences can all affect the final image.
:::
