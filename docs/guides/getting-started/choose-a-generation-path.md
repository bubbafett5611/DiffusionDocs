# Choose A Generation Path

Before choosing settings, choose the kind of generation path you want. Diffusion tools range from simple hosted websites to local interfaces with custom models and advanced workflow control.

::: tip Quick Take
Use hosted generation to learn prompting quickly. Use local generation when you need custom models, LoRAs, privacy, repeatability, or advanced control.
:::

## The Main Paths

| Path | Best For | Tradeoff |
| --- | --- | --- |
| Hosted website | Fast start, low setup, conversational editing | Less control over models, settings, privacy, and reproducibility |
| Local UI | Custom checkpoints, LoRAs, inpainting, repeatable workflows | Requires hardware, installation, updates, and troubleshooting |
| Manager or launcher | Trying several local UIs and sharing model folders | Adds another layer to understand |
| Developer library | Automation, apps, experiments, reproducible pipelines | Requires coding and more technical setup |

For a broader comparison, see [Generation Tools](../../tools/generation-tools.md).

## Start Simple

If you are learning, start with one path and one workflow. Switching tools too early can make it hard to tell whether a result changed because of the model, prompt, sampler, scheduler, UI defaults, or hidden backend behavior.

::: warning Do Not Compare Tools By One Image
A single seed and prompt can make one tool look better by chance. Compare tools by workflow control, model support, output consistency, maintenance, and how easy it is to diagnose failures.
:::

## A Practical Decision

Choose hosted generation if you want to:

- learn prompt iteration
- make quick drafts
- avoid installing dependencies
- work from low-power hardware

Choose local generation if you want to:

- use custom checkpoints, VAEs, LoRAs, or embeddings
- keep prompts and outputs on your machine
- save exact settings and seeds
- use inpainting, ControlNet-style inputs, regional prompting, or custom nodes

