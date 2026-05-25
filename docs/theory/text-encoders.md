# Text Encoders

Text encoders convert prompt text into conditioning that the diffusion model can use.

::: tip Quick Take
The text encoder is one reason prompt behavior differs between model families.
:::

## Why Text Encoders Matter

Text encoders affect:

- tokenization
- prompt length handling
- trigger words
- embeddings
- how concepts are represented
- compatibility with adapters

## Practical Consequences

A LoRA or embedding may depend on a specific text encoder. Prompt syntax or trigger words from one model family may not work in another.

::: info Prompting Is Not Just Words
The same visible prompt can become different conditioning when processed by different tokenizers or text encoders.
:::

