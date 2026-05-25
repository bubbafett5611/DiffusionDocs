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

## When Weighting Helps

Weighting can help when a concept is present but too weak. For example, a color, material, or small accessory may need emphasis if the model keeps dropping it.

Before weighting, test clearer language:

```text
a red wool coat
```

instead of:

```text
coat, red, wool
```

If clearer wording works, weighting may not be needed.

## When Weighting Hurts

High weights can distort the image because they increase pressure on one part of the conditioning. This can make the model over-repeat textures, exaggerate anatomy, or sacrifice composition for the emphasized term.

Use weighting like seasoning: small changes, tested against a fixed seed.

## Debugging Weighting

1. Remove all weights and generate a baseline.
2. Add one weighted phrase.
3. Compare several seeds, not just one.
4. Reduce the weight if artifacts increase.
5. Prefer workflow controls when the issue is layout, pose, or exact object count.

::: warning Syntax Depends On The Tool
Exact weighting syntax only applies when the UI or backend supports that syntax. Check the tool's prompt parser before copying examples between workflows.
:::
