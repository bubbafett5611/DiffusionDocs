# Prompt Weighting

Prompt weighting changes how strongly parts of a prompt influence generation.

::: tip Quick Take
Use weighting sparingly. If a concept is missing, first try clearer wording, a better model, or a relevant LoRA before pushing weights high.
:::

## Why Weighting Is Tricky

Weighting syntax is tool-specific. Parentheses, brackets, numeric weights, and emphasis tokens do not behave identically across UIs or model families.

## Common Failure Modes

- overcooked contrast or texture
- distorted anatomy
- ignored secondary subjects
- one concept overpowering the composition
- syntax copied from a different tool doing nothing

::: warning Syntax Depends On The Tool
Before writing a guide that uses exact weighting syntax, scope it to the UI or backend that supports that syntax.
:::

