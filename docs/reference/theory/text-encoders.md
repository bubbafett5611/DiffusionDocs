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

## Tokenization

Before a prompt becomes conditioning, it is split into tokens. Tokens are not always whole words. A rare word, name, typo, or invented term may split into pieces that the model does not associate with the intended concept.

This is one reason prompt behavior can feel inconsistent. A short familiar phrase may encode cleanly, while a very specific phrase may become a weaker or stranger signal.

## Embeddings And Prompt Syntax

Textual inversion embeddings and similar learned tokens are tied to a text encoder. If the workflow uses a different encoder, the embedding may fail, be ignored, or represent something unintended.

Prompt syntax also sits partly outside the text encoder. Parentheses, weights, emphasis syntax, and prompt chunking are often implemented by the UI or backend before text reaches the encoder. Copying syntax between tools is risky unless they share the same parser behavior.

## Multiple Encoders

Some model families use more than one text encoder. This can improve expressiveness, but it also makes compatibility more complex. A model may expect specific encoder outputs, token limits, pooled embeddings, or conditioning formats.

Advanced pipelines may expose encoder choices, clip-skip-like settings, pooled conditioning, or prompt fields that feed different encoders. Hosted tools often hide these details.

## Practical Consequences

- Use model-specific prompting notes when available.
- Avoid assuming negative prompts or weighting syntax are universal.
- Check whether an embedding was trained for your model family.
- Keep prompts concise when a tool has strict token limits.
- If a prompt is ignored, test simpler wording before changing the model.

::: warning Text Is Encoded, Not Understood Like A Person
The encoder maps text to learned representations. It can capture useful relationships, but it does not guarantee literal instruction following, exact counting, or reliable handling of every rare phrase.
:::

