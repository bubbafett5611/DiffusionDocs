# Checkpoint Formats

Checkpoints are files containing saved model weights. Different ecosystems may use different file formats and loading expectations.

::: tip Quick Take
File extension alone does not guarantee compatibility. Check the model family, architecture, and loader support.
:::

## Practical Notes

- Some checkpoints bundle components; others require separate files.
- Some workflows expect safetensors files.
- Some model families use multiple files rather than one monolithic checkpoint.
- Tools may support a format but not every architecture that can be stored in it.

## Format Concerns

Diffusion ecosystems use several storage conventions. Some files are general tensor containers. Others are packaged for a particular runtime or UI. The important question is not only "can this file be opened?" but "does this tool understand the architecture and metadata inside it?"

| Format Concern | Why It Matters |
| --- | --- |
| Tensor storage | Determines how weights are serialized |
| Metadata | Helps identify architecture, base model, VAE, and training notes |
| Precision | Affects file size, memory, and sometimes output differences |
| Quantization | Can reduce memory needs but may constrain tools or quality |
| Conversion | May be needed to move between ecosystems |

## Safe Loading And Trust

Prefer safer tensor formats when available and download models from sources with clear provenance. Avoid executing unknown code from model repositories unless you understand what the tool is doing. Model files are often shared informally, and metadata can be incomplete, misleading, or stripped.

## Conversion Caveats

Converting a model can change how it is loaded, but it does not change the underlying training family. A converted checkpoint still needs a compatible architecture, text encoder setup, VAE assumptions, and backend implementation.

If a converted model loads but produces bad output, check:

- whether all required components were included
- whether the VAE or text encoders were converted separately
- whether precision or quantization changed behavior
- whether the target tool supports the architecture completely
- whether the original license permits conversion and redistribution

::: warning Safety And Provenance
Prefer trusted sources and safer formats where possible. Do not download unknown model files casually, especially executable installers or archives from untrusted sources.
:::

