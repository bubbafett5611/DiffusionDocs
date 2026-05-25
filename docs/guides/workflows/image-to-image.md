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
- refining a rough draft
- preserving pose or framing while changing details

::: warning Input Images Are Not Guarantees
High denoising strength, strong prompts, incompatible models, or extra conditioning can override the input image. Use lower strength when preservation matters.
:::

