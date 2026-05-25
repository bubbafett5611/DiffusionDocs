# Bad Anatomy Or Text

Hands, faces, bodies, and readable text are common failure areas for diffusion models.

::: tip Quick Take
Use better composition, inpainting, model choice, and refinement instead of expecting one prompt to solve every anatomy or typography problem.
:::

## Likely Causes

- subject too small in the frame
- pose is complex or ambiguous
- model is weak for the requested anatomy or text
- too many competing subjects
- LoRA weight or guidance too high

## Fixes

- simplify the pose or composition
- generate at a size suitable for the subject
- use inpainting for local fixes
- reduce overstrong LoRAs or prompt weights
- use a model or workflow designed for text when typography matters

::: warning Text Is Model-Dependent
Some newer systems handle text better than older diffusion workflows, but readable typography is still not universal.
:::

