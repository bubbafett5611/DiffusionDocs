# Negative Prompts

A negative prompt is conditioning that tells some workflows what to avoid.

::: warning Not Universal
Negative prompts are common in Stable Diffusion-style interfaces, but not every model family or hosted tool uses them the same way. Some workflows do not expose them at all.
:::

## Useful Cases

Negative prompts can help reduce recurring unwanted traits, such as:

- low-quality artifacts
- unwanted styles
- repeated objects
- extra limbs or distorted features
- text or watermarks, when the model tends to produce them

## Limits

Negative prompts are not filters. They cannot guarantee that a subject, style, or artifact will disappear. They also can damage the image if they fight the positive prompt too strongly.

::: tip Start Small
Use a short negative prompt first. If it improves the output, add terms one at a time instead of copying a huge universal negative prompt.
:::

