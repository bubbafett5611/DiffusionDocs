# Image-To-Image

Image-to-image starts from an existing image instead of pure noise. It uses the input image as conditioning while still allowing the model to redraw or transform it.

::: tip Quick Take
Use image-to-image when you like the layout, pose, or rough idea of an image but want the model to reinterpret it.
:::

## Key Setting: Denoising Strength

Most image-to-image workflows expose a strength value or similar control.

| Strength | Typical Behavior |
| --- | --- |
| Low | Preserves the input closely |
| Medium | Changes style and details while keeping broad structure |
| High | Allows major changes and may ignore much of the input |

## Practical Uses

- restyling an existing composition
- making variations of a sketch or render
- refining a rough source image
- preserving pose or framing while changing details

## How To Choose Strength

Use low strength when the input image is valuable and you only want polish or style changes. Use medium strength when you want the model to reinterpret details while keeping layout. Use high strength when the input is only a loose guide.

If the output ignores the image, lower strength or simplify the prompt. If the output barely changes, raise strength or make the prompt more specific.

## Prompting Image-To-Image

Describe the desired result, not every detail already present in the source. The input image already carries layout, color, and composition information. Repeating every visible detail can make the prompt noisy.

Useful prompt structure:

```text
desired subject or scene, intended style, important changes, lighting or mood
```

## Common Failure Modes

| Symptom | Likely Fix |
| --- | --- |
| Input disappears | Lower denoising strength |
| Too little changes | Raise strength or simplify input |
| Prompt ignored | Remove conflicting visual details or controls |
| Texture becomes muddy | Use fewer refinement passes or a better base |
| Identity/pose drifts | Use lower strength or structural conditioning |

::: warning Input Images Are Not Guarantees
High denoising strength, strong prompts, incompatible models, or extra conditioning can override the input image. Use lower strength when preservation matters.
:::
