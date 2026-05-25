# Model-Specific Behavior

Prompts do not transfer perfectly between model families. A prompt that works well in one model may be weak, excessive, or misleading in another.

::: tip Quick Take
Treat prompts as model-specific recipes, not universal instructions.
:::

## Why Behavior Differs

Models can differ by:

- architecture
- training data
- fine-tuning goals
- text encoder
- tokenizer
- preferred image sizes
- whether negative prompting is expected

## Practical Habit

When trying a new model:

1. Test a short baseline prompt.
2. Generate several seeds.
3. Add style or quality terms slowly.
4. Check whether the model expects trigger words or specific prompt patterns.
5. Save examples that work for that model.

## What Changes Between Models

Model-specific behavior can show up as:

- different response to long prompts
- different preferred image sizes
- different tolerance for high guidance
- different need for negative prompts
- different style vocabulary
- different handling of text, hands, faces, or composition
- different compatibility with LoRAs and embeddings

This is why copying a prompt from a gallery can fail. The visible prompt may be only one part of a larger recipe.

## Build A Model Notebook

For models you use often, keep a small record:

- baseline prompt that works
- recommended resolution
- sampler/scheduler defaults
- useful guidance range
- known weak spots
- compatible LoRAs or embeddings
- licensing/source notes

This turns model learning into documentation instead of guesswork.

## Hosted Tools

Hosted systems may rewrite prompts, route requests to different models, apply safety filters, or post-process images. Their behavior can be useful and polished, but it is less transparent than a local workflow.

::: info Separate Prompting From Compatibility
If a model ignores a LoRA, produces strange colors, or fails at a size, the problem may be compatibility rather than prompt wording.
:::
