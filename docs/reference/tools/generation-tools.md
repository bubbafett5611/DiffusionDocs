# Generation Tools

Diffusion tools range from local interfaces that run models on your own hardware to hosted websites that hide most of the pipeline. The right choice depends on whether you want control, convenience, privacy, model flexibility, or production workflow features.

This page is a practical map of common options. It is not a ranking.

::: tip Quick Take
Start with a hosted generator if you want convenience. Use a local interface when you need custom models, LoRAs, privacy, repeatable settings, or advanced workflow control. Use a manager such as Stability Matrix when you want to try several local UIs without hand-maintaining every install.
:::

## Local And Open-Source Tools

These tools usually run on your own computer or a rented GPU. They give you more control over models, LoRAs, extensions, and workflow details, but they also require more setup and maintenance.

::: warning Check Maintenance Before Installing
A mature project is not automatically bad, but a slow-moving project may lag behind new model families, Python versions, PyTorch/CUDA changes, or extension ecosystems. Before choosing a local tool, check recent commits, releases, issue activity, and model support notes.
:::

### Local Generation Interfaces

These are the tools most users mean when they say they want to "run Stable Diffusion locally." They provide the interface where you load models, write prompts, configure generation settings, and save outputs.

| Tool | Maintainer | Best For | Status |
| --- | --- | --- | --- |
| [ComfyUI](https://github.com/comfy-org/ComfyUI) | Comfy Org | Advanced node workflows | <Badge type="tip" text="Active ecosystem" /> |
| [SwarmUI](https://github.com/mcmonkeyprojects/SwarmUI) | mcmonkeyprojects | Parameter UI with ComfyUI power | <Badge type="tip" text="Active" /> |
| [SD.Next](https://github.com/vladmandic/sdnext) | vladmandic | Broad hardware and model support | <Badge type="tip" text="Active" /> |
| [reForge](https://github.com/Panchovix/stable-diffusion-webui-reForge) | Panchovix | A1111-style workflows with newer fork support | <Badge type="warning" text="Branch-dependent" /> |
| [Forge Neo](https://github.com/cruelpleasure/sd-webui-forge-NEO) | Forge Neo fork maintainers | Lightweight Forge-style generation | <Badge type="warning" text="Branch-dependent" /> |
| [AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) | AUTOMATIC1111 and community | Older tutorials and extension workflows | <Badge type="warning" text="Slower-moving" /> |
| [Invoke](https://invoke.ai/) | Invoke | Polished creative workflows | <Badge type="tip" text="Active" /> |
| [Fooocus](https://github.com/lllyasviel/Fooocus) | lllyasviel | Simple SDXL-style prompting | <Badge type="warning" text="Limited support" /> |

::: details ComfyUI
ComfyUI is a node-based workflow interface and backend. It is a strong fit when you want maximum control, reusable workflows, custom nodes, and early support for new model pipelines.

The graph interface can be intimidating at first. In return, workflows are portable and are often shared as JSON files or embedded in generated images.
:::

::: details SwarmUI
SwarmUI is a web interface with ComfyUI integration. It is useful when you want a parameter-driven generation interface but still want access to ComfyUI-style workflow power.

It follows the successor path from the older StableSwarmUI project. Check current release notes before assuming a specific model family or feature is supported.
:::

::: details SD.Next
SD.Next is an all-in-one WebUI maintained by Vladimir Mandic. It focuses on broad model support, hardware support, platform-specific tuning, and many built-in generation and processing features.

It is worth evaluating when hardware compatibility, built-in model management, or advanced configuration matters more than following the most common community tutorial path.
:::

::: details reForge
Stable Diffusion WebUI reForge is a fork in the Automatic1111 and Forge family of interfaces. It is a good fit when you like the familiar WebUI layout but want a fork that has adapted toward newer workflows.

Fork status can change quickly. Check the active branch, issues, and release notes before using it as the base for a long-term setup.
:::

::: details Forge Neo
Forge Neo is a Forge-style WebUI fork focused on optimization and usability. It may appeal to users who want a lighter familiar interface instead of a full node graph.

Treat extension compatibility and model support as version-specific. Forks in this family can differ meaningfully even when the interface looks familiar.
:::

::: details AUTOMATIC1111
AUTOMATIC1111 Stable Diffusion WebUI is the classic Gradio-based local interface. It remains historically important and many older tutorials, extensions, and workflows assume it.

The project appears slower-moving than newer interfaces; its latest listed release is `1.10.1` from February 2025. It can still be useful, especially for older SD 1.x and SDXL workflows, but newer model families may be supported elsewhere first.
:::

::: details Invoke
Invoke is a creative web UI and workflow tool aimed at artists and teams. It is a good fit when you want a polished interface, canvas-style workflows, and less manual pipeline wiring.

The project is open-source, but it is also connected to commercial and hosted offerings. Check current licensing and deployment options before adopting it for team or client work.
:::

::: details Fooocus
Fooocus is a simplified local generator built around prompting and SDXL-style generation. It is useful for beginners who want fewer exposed settings and a quick path from prompt to image.

The project describes itself as limited long-term support with bug fixes only. That makes it less suitable as a base for newer model families or rapidly changing workflows.
:::

### Managers And Launchers

These tools help install, update, and organize generation interfaces. They may include generation features, but their main value is managing local packages, model folders, and dependencies.

| Tool | Maintainer | Best For | Status |
| --- | --- | --- | --- |
| [Stability Matrix](https://github.com/LykosAI/StabilityMatrix) | LykosAI | Managing several local UIs and shared models | <Badge type="tip" text="Active ecosystem" /> |

::: info Not Primarily A Generator
Stability Matrix helps install and manage tools such as ComfyUI, SD.Next, reForge, Invoke, and others. Its main value is managing local packages, shared model folders, and dependencies.
:::

### Developer Libraries

These are not beginner-facing generation UIs. They are useful when you want to build, automate, test, or integrate diffusion pipelines in code.

| Tool | Maintainer | Best For | Status |
| --- | --- | --- | --- |
| [Diffusers](https://huggingface.co/docs/diffusers/index) | Hugging Face | Programmatic diffusion pipelines | <Badge type="tip" text="Active library" /> |

::: info Developer Tool
Diffusers is a Python library, not a beginner-facing generation UI. It is best when you want to build scripts, apps, tests, automation, or custom inference pipelines.
:::

## Hosted Generation Websites

Hosted services run the models for you. They are usually easier to start with, but they may limit model choice, LoRA use, raw workflow control, API access, privacy, or commercial terms.

::: warning Hosted Terms Can Change
Hosted tools are convenient, but their limits, model access, privacy terms, and commercial-use rules can change by account, region, and plan. Check the current terms before using hosted outputs for client or production work.
:::

| Website | Provider | Best For |
| --- | --- | --- |
| [ChatGPT](https://chatgpt.com/) | OpenAI | Conversational generation, editing, and ideation |
| [Midjourney](https://www.midjourney.com/) | Midjourney | Polished stylized image generation |
| [Adobe Firefly](https://firefly.adobe.com/) | Adobe | Adobe-centered creative workflows |
| [Leonardo.Ai](https://leonardo.ai/) | Leonardo.Ai / Canva | Web-based image and video generation |
| [Recraft](https://www.recraft.ai/) | Recraft | Design-oriented images, vectors, and mockups |
| [Gemini](https://gemini.google.com/) | Google | Assistant-based image generation and editing |
| [Canva AI Image Generator](https://www.canva.com/ai-image-generator/) | Canva | Quick assets inside a design editor |
| [Perchance AI Image Generator](https://perchance.org/ai-text-to-image-generator) | Perchance | Free browser-based generation without local setup |
| [Hugging Face Spaces](https://huggingface.co/spaces) | Hugging Face and community creators | Demos, experiments, and community tools |

ChatGPT and Gemini are useful when you want natural-language iteration and editing. Midjourney is often chosen for polished creative defaults. Firefly, Canva, Leonardo.Ai, and Recraft are more design-platform oriented. Hugging Face Spaces is best treated as an exploration area because each Space is maintained separately.

::: details Perchance
Perchance is an online-only browser generator with a low-friction start: open the page, enter a prompt, and generate without installing a local UI.

Some Perchance generators and community discussions describe current image generation as Flux-based, and users commonly report that newer Perchance image generation does not use negative prompts in the Stable Diffusion WebUI sense. Treat this as implementation-specific behavior and check the generator page or community notes if negative prompting is important to your workflow.
:::

## How To Choose

Choose a local tool when you need:

- custom checkpoints, LoRAs, embeddings, or VAEs
- privacy around prompts, images, or client work
- repeatable workflows with saved settings
- advanced control such as inpainting, ControlNet-style guidance, regional prompting, or custom nodes
- automation or batch generation

Choose a hosted website when you need:

- fast setup
- simple prompting
- image editing through natural language
- access from low-power hardware
- polished defaults
- collaboration inside an existing design platform

## Practical Starting Paths

::: tip A Sensible Starting Path
1. Try a hosted generator to learn prompting and iteration.
2. Install one local UI when you want model control or LoRAs.
3. Use Stability Matrix if you want to compare several local UIs without manually managing every folder.
4. Move to ComfyUI or Diffusers when you need precise workflow control, automation, or custom pipelines.
:::

Avoid installing every tool at once. Many problems in local generation come from mixed Python environments, duplicated model folders, extension conflicts, or unclear assumptions about which UI is actually running a workflow.
