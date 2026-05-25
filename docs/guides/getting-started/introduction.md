# Getting Started

Diffusion models generate images by gradually turning noise into an image that matches conditioning. In everyday use, that conditioning is often a text prompt, but it can also include reference images, masks, depth maps, poses, LoRAs, or other guidance.

This section gives you enough vocabulary and workflow structure to understand what your tool is doing, why results change, and where to look when something fails.

::: tip Quick Take
You do not need to learn every model, sampler, or setting before you start. Learn the basic workflow shape first, then add details as you run into real questions.
:::

## Who This Is For

Start here if you are:

- new to diffusion image generation
- moving from one tool to another
- confused by terms like checkpoint, VAE, sampler, scheduler, LoRA, seed, or CFG
- trying to build repeatable workflows instead of guessing settings

You do not need to understand model training or machine learning math before using these pages.

## What You Will Learn

The getting-started path covers:

- what diffusion models are doing at a practical level
- the parts of a basic text-to-image workflow
- common terms used across modern tools
- how to choose a next topic without getting lost in tool-specific details

The goal is not to memorize every setting. It is to build a clear mental model so settings and troubleshooting guides have somewhere to attach.

## A Useful Starting Mental Model

A basic generation has four broad pieces:

1. A model provides the learned image-making capability.
2. Conditioning describes what you want and how strongly the model should follow it.
3. Sampling turns noise into an image over a number of steps.
4. Post-processing or refinement improves, fixes, or changes the result.

Different tools expose these pieces with different interfaces, but the underlying workflow is often similar.

::: info Tool Names Change, Concepts Travel
Interfaces and model families move quickly. Concepts such as conditioning, sampling, seeds, and model compatibility are more portable than the exact location of a button in one UI.
:::

## Recommended Reading Order

Read these pages in order if you are starting from scratch:

1. [What Is Diffusion?](./what-is-diffusion.md)
2. [Your First Workflow](./first-workflow.md)
3. [Common Terms](./common-terms.md)
4. [Where To Go Next](./where-to-go-next.md)

If you already use a diffusion tool, skim the first two pages and focus on the terminology. Many confusing problems come from mixing up related concepts, such as samplers and schedulers, or LoRAs and embeddings.
