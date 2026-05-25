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

::: warning Safety And Provenance
Prefer trusted sources and safer formats where possible. Do not download unknown model files casually, especially executable installers or archives from untrusted sources.
:::

