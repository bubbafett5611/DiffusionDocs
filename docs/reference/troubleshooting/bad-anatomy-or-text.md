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

## Anatomy

Bad anatomy often appears when the model has to solve too many spatial constraints at once: overlapping hands, unusual camera angles, cropped limbs, multiple people interacting, or small faces in a wide shot.

Useful interventions:

- make the subject larger in frame
- reduce the number of people or limbs visible
- use a clearer pose reference or control input
- generate several seeds and choose the strongest base
- inpaint only the broken region instead of regenerating the whole image

Inpainting works best when the surrounding image gives enough context. Mask too little and the model cannot change the broken structure. Mask too much and it may redraw unrelated areas.

## Text And Typography

Readable text is hard because many diffusion workflows model text as visual texture rather than symbolic language. A model may know that a sign should contain letters without reliably placing exact characters in order.

Better options:

- use a model or hosted system with stronger text rendering
- keep text short and large
- generate the image without text and add typography in a design tool
- inpaint text areas with a dedicated workflow
- use vector or raster editing for final production text

## When LoRAs Make It Worse

LoRAs can improve a subject or style while harming anatomy if the weight is too high or the training examples were narrow. If anatomy breaks after adding a LoRA, test the same prompt and seed without it, then reintroduce it at lower weights.

::: warning Text Is Model-Dependent
Some newer systems handle text better than older diffusion workflows, but readable typography is still not universal.
:::

