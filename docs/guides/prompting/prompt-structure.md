# Prompt Structure

An effective prompt gives the model useful conditioning without burying the important parts.

::: tip Quick Take
Put the subject and scene first. Add style, lighting, camera, medium, or constraints after the core idea is clear.
:::

## A Practical Structure

```text
subject, action or pose, environment, composition, lighting, medium, style details
```

Example:

```text
a blue ceramic teapot on a wooden kitchen table, morning window light, simple background, shallow depth of field
```

## What To Add Carefully

- many competing styles
- long lists of adjectives
- vague quality words
- terms copied from another model family
- prompt syntax from another UI

## Make The Main Idea Easy To Find

The model receives encoded conditioning, not a neatly parsed outline. Still, clear prompt order helps you write and debug. Put the subject and scene before decorative details.

Weak structure:

```text
masterpiece, intricate, cinematic, beautiful, dramatic, award winning, blue ceramic teapot
```

Clearer structure:

```text
a blue ceramic teapot on a wooden kitchen table, morning window light, simple background, soft ceramic glaze
```

## Use Specific Nouns And Relationships

Specific nouns and spatial relationships usually help more than generic quality words:

- "one glass vase on a stone windowsill" is clearer than "beautiful object"
- "three-quarter portrait, looking left" is clearer than "dynamic composition"
- "small cabin beside a frozen lake" is clearer than "epic landscape"

## Revise By Failure Type

If the subject is missing, simplify and move it earlier. If the style is wrong, reduce competing style phrases. If the composition is wrong, use clearer framing or aspect ratio. If details are wrong but the composition is good, consider inpainting instead of rewriting the whole prompt.

::: info Prompts Compete For Attention
Long prompts can work, but every extra phrase adds another direction. If a prompt becomes unreliable, shorten it and reintroduce details one at a time.
:::
