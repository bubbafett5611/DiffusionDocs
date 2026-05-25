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

## Useful Negative Prompt Habits

Use negative prompts to address recurring failure patterns, not as a giant superstition list. A focused negative prompt is easier to debug.

Examples:

```text
blurry, low contrast, extra fingers
```

or:

```text
text, watermark, logo
```

Avoid adding terms that contradict the positive prompt. If the positive prompt asks for "sketchy pencil texture," a negative prompt containing "rough lines" may fight the desired look.

## When To Avoid Negative Prompts

Some workflows do not support negative prompts, and some model families respond poorly to older negative-prompt habits. If a tool says negative prompts are unsupported, do not assume an empty field is equivalent to a Stable Diffusion WebUI negative prompt.

## Advanced Detail: Negative Conditioning

In many classifier-free guidance workflows, the negative prompt influences the prediction used as the less-desired conditioning path. It shifts denoising away from patterns associated with the negative text, but it does not erase pixels after generation.

This is why negative prompts can reduce a tendency without guaranteeing removal.
