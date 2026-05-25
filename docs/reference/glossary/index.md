# Glossary

Concise definitions of common diffusion terms.

::: info How To Use This Glossary
Use this page for quick lookups, then follow links to deeper pages when a term affects workflow decisions or troubleshooting.
:::

## Terms

### Adapter

A small add-on that modifies or steers a model without replacing the whole checkpoint. LoRAs are a common adapter type.

### Attention

A mechanism that lets parts of the model relate different pieces of information, such as image features and text-conditioning features. Attention behavior is one reason prompts can affect both global composition and local details.

### CFG

Classifier-free guidance. A setting that controls how strongly some workflows follow prompt conditioning. See [Classifier-Free Guidance](../theory/classifier-free-guidance.md).

### Checkpoint

A saved set of model weights, often used to refer to the main model file in image generation tools. See [Checkpoints, VAEs, And Adapters](../concepts/checkpoints-vaes-adapters.md).

### Conditioning

Information used to steer generation, such as text, images, masks, pose maps, LoRAs, or embeddings. See [Conditioning](../concepts/conditioning.md).

### Denoising

The repeated process of moving from noise toward a cleaner sample. See [Denoising](../concepts/denoising.md).

### Embedding

A learned token or set of tokens used through text conditioning, often tied to a specific model family or text encoder.

### Guidance

The process of pushing denoising toward conditioning. Classifier-free guidance is one common form. See [Classifier-Free Guidance](../theory/classifier-free-guidance.md).

### Image-To-Image

A workflow that starts from an existing image instead of pure noise. See [Image-To-Image](../../guides/workflows/image-to-image.md).

### Inpainting

A workflow that edits a masked region of an image. See [Inpainting](../../guides/workflows/inpainting.md).

### Latent Space

A compressed representation used by many diffusion workflows. See [Latent Space](../concepts/latent-space.md).

### LoRA

Low-rank adaptation. A small adapter that modifies a base model's behavior. See [What Are LoRAs?](../../guides/loras/what-are-loras.md).

### Negative Prompt

Conditioning that tells some workflows what to avoid. See [Negative Prompts](../../guides/prompting/negative-prompts.md).

### Text Encoder

A model component that converts prompt text into conditioning representations. See [Text Encoders](../theory/text-encoders.md).

### Sampler

The algorithm that decides how to move through denoising steps. See [Samplers And Schedulers](../concepts/samplers-and-schedulers.md).

### Scheduler

The noise schedule used across denoising steps. See [Samplers And Schedulers](../concepts/samplers-and-schedulers.md).

### Seed

A number used to initialize random noise for generation. See [Seeds And Reproducibility](../concepts/seeds-and-reproducibility.md).

### VAE

Variational autoencoder. In latent diffusion, it converts between pixels and latents. See [Checkpoints, VAEs, And Adapters](../concepts/checkpoints-vaes-adapters.md).
