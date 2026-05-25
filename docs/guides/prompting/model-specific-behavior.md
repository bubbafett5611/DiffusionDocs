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

::: info Separate Prompting From Compatibility
If a model ignores a LoRA, produces strange colors, or fails at a size, the problem may be compatibility rather than prompt wording.
:::

