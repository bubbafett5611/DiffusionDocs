# Common Terms

Diffusion tools often use technical terms in compact user interfaces. This page defines the terms you are most likely to meet early.

::: tip How To Use This Page
Skim this once, then come back when a setting or tutorial uses a term you do not recognize. The goal is recognition first, precision later.
:::

## Model

A model is the trained system used to generate or transform images. In many tools, users choose a model checkpoint before generating.

Model behavior depends on architecture, training data, fine-tuning, and the tool's workflow. A prompt that works well in one model may not behave the same way in another.

::: details Closely Related: Checkpoint, Architecture, And Training
A checkpoint is a saved set of weights. An architecture is the model design those weights fit into. Training and fine-tuning describe how the model learned its behavior. These are related, but they are not interchangeable.
:::

## Checkpoint

A checkpoint is a saved set of model weights. In image generation communities, checkpoint often refers to the main file loaded as the base model.

Do not assume every checkpoint is compatible with every tool, VAE, LoRA, image size, or workflow.

## VAE

VAE stands for variational autoencoder. In latent diffusion workflows, it converts images into latents and decodes latents back into images.

Some checkpoints include or expect a particular VAE. A mismatched VAE can affect color, contrast, detail, or artifacts.

## Prompt

A prompt is text conditioning used to steer generation. It usually describes the subject, style, composition, lighting, medium, or other desired traits.

Prompt syntax varies by tool and model family. Weighting, emphasis, negative prompts, and special tokens are not universal.

## Negative Prompt

A negative prompt is conditioning that tells some workflows what to avoid. It is common in Stable Diffusion interfaces, but not every model family uses negative prompting in the same way.

Negative prompts are best treated as a steering tool, not a guaranteed filter.

::: warning Prompt Syntax Is Not Universal
Parentheses, weights, special tokens, negative prompts, and trigger words can behave differently depending on the UI, model family, and text encoder. Be careful when copying syntax between tools.
:::

## Sampler

A sampler is the algorithm that decides how to move through denoising steps. It affects speed, stability, detail, and how a model responds to settings.

Sampler behavior can depend on the scheduler and model family.

## Scheduler

A scheduler controls how noise levels change over the denoising process. Some tools combine sampler and scheduler choices; others expose them separately.

This is why two workflows with the same sampler name may not produce the same result.

## Seed

A seed initializes the random noise used for generation. Reusing a seed can help reproduce or vary an image, but reproducibility also depends on the model, settings, resolution, tool version, and workflow.

## Steps

Steps are the number of denoising iterations. More steps can improve an image up to a point, but excessive steps can waste time or change the image in unwanted ways.

## CFG Or Guidance Scale

Classifier-free guidance, often shown as CFG or guidance scale, controls how strongly the generation follows prompt conditioning in many diffusion workflows.

Very low values may ignore the prompt. Very high values can create harsh contrast, artifacts, or overcooked details. Useful ranges depend on the model and sampler.

## LoRA

LoRA stands for low-rank adaptation. A LoRA is a small adapter that modifies a base model's behavior, often to add a style, character, subject, clothing type, or visual concept.

LoRAs are not the same as embeddings, checkpoints, or VAEs.

## Embedding

An embedding, sometimes called a textual inversion embedding, is a learned token or set of tokens used in a prompt. It changes conditioning through the text encoder rather than modifying the model weights directly.

Embeddings are usually tied to specific model families or text encoders.

::: details LoRA Or Embedding?
A LoRA modifies model behavior through an adapter. An embedding changes conditioning through learned text tokens. Both can steer output, but they plug into the workflow differently and have different compatibility limits.
:::

## Inpainting

Inpainting edits a selected region of an image, usually using a mask. It is useful for replacing objects, fixing hands or faces, extending details, or changing part of a scene while preserving the rest.

## Image-To-Image

Image-to-image starts from an existing image instead of pure noise. A denoising strength or similar setting controls how much the result can change.

Low strength preserves more of the input. High strength allows larger changes.
