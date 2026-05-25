# AGENTS.md

Guidance for AI coding and documentation agents working in this repository.

## Project Purpose

Diffusion Docs is a VitePress documentation site for modern diffusion-based image generation systems. The goal is to become a technically grounded, beginner-accessible, open-source reference for concepts, workflows, troubleshooting, model ecosystems, prompting, LoRAs, embeddings, samplers, schedulers, hardware, and generation tooling.

This is not a hype site, prompt marketplace, SEO content farm, or tool-specific wiki. Keep the material practical, accurate, concise, and useful across tools where practical.

## Repository Shape

- Documentation content lives under `docs/`.
- VitePress configuration lives in `docs/.vitepress/config.mts`.
- Theme customizations live in `docs/.vitepress/theme/`.
- Planned guide areas live under `docs/guides/`, including:
  - `guides/getting-started/`
  - `guides/workflows/`
  - `guides/prompting/`
  - `guides/loras/`
- Planned reference areas live under their own top-level folders, including:
  - `concepts/`
  - `models/`
  - `troubleshooting/`
  - `tools/`
  - `theory/`
  - `glossary/`

Do not commit generated VitePress cache/build output unless the repository explicitly starts tracking it.

## Common Commands

Use the project scripts from the repository root:

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

Run `npm run docs:build` after structural, configuration, navigation, or Markdown syntax changes when feasible.

## Documentation Standards

Write documentation that is:

- technically accurate
- beginner accessible without being vague
- concise where possible
- heavily structured and easy to scan
- markdown-native
- future-proof and tool-agnostic where practical

Prefer:

- short sections with clear headings
- concrete examples when they clarify behavior
- explanations of why something works, not only what to click
- practical troubleshooting guidance
- careful distinctions between concepts, implementations, and tool-specific UI

Avoid:

- mystical or anthropomorphic explanations of diffusion behavior
- unsupported claims, fake benchmarks, or invented statistics
- hype, marketing language, or exaggerated model/tool claims
- generic filler text
- unnecessary jargon without explanation
- presenting one tool's behavior as universal unless it is actually general

## Technical Accuracy

Be conservative with claims. If a topic depends on a specific model family, sampler, scheduler, UI, checkpoint format, or training method, say so.

When uncertain:

- qualify the statement
- narrow the scope
- cite or link to a primary source where appropriate
- prefer explaining the uncertainty over pretending the ecosystem is simpler than it is

Do not invent model capabilities, licensing terms, benchmark numbers, recommended settings, or compatibility details.

## Visuals and Diagrams

Prefer diagrams, comparison images, and visual explanations when they improve understanding of:

- conditioning flow
- denoising
- latent workflows
- sampler behavior
- model architecture differences
- image generation pipelines
- common failure cases

Visuals should clarify concepts, not act as decorative filler.

## Terminology Consistency

Use terminology consistently across the project.

Examples:

- distinguish checkpoints from VAEs
- distinguish LoRAs from embeddings
- distinguish samplers from schedulers
- distinguish prompting from conditioning
- distinguish model architecture from model training

Avoid mixing technically distinct terms casually.

## Markdown and VitePress Conventions

- Use one `#` heading per page.
- Keep heading levels in order; do not jump from `##` to `####`.
- Use relative links for internal docs when practical.
- Prefer tables only when comparison or scanning benefits from them.
- Use fenced code blocks with language identifiers.
- Keep frontmatter minimal and purposeful.
- Update VitePress navigation/sidebar configuration when adding pages that should be discoverable.

## Navigation and Sidebar Structure

The VitePress site uses top-level navbar dropdowns and path-specific sidebars rather than one global sidebar.

Navbar groups:

- `Guides`: reader-facing tutorials, walkthroughs, orientation pages, and workflow guides
- `Reference`: lookup-oriented material such as tools, model notes, compatibility pages, glossary entries, and other structured references

Sidebar rules:

- Use a `sidebar` object keyed by path prefixes in `docs/.vitepress/config.mts`.
- Add guide sections under `/guides/`, such as `/guides/getting-started/`, `/guides/workflows/`, `/guides/prompting/`, or `/guides/loras/`.
- Add reference sections under their own path, such as `/tools/`, `/models/`, `/glossary/`, or `/troubleshooting/`.
- Keep sidebar section titles specific to the section, for example `Getting Started` rather than repeating the navbar group name `Guides`.
- Prefer `collapsed: true` for sidebar groups unless the section is very small or should always be expanded.
- When adding a discoverable page, update both the relevant navbar dropdown, if it introduces a new section, and the matching path-specific sidebar.

Do not return to a single global sidebar as the site grows. Separate sidebars keep guide pages and reference pages from crowding each other.

## Page Presentation Conventions

Use VitePress features to make documentation easier to scan from the first draft.

Prefer:

- a short opening explanation followed by a `::: tip Quick Take` callout when a page benefits from immediate orientation
- `::: info` blocks for scope notes, tool-specific caveats, or conceptual distinctions
- `::: warning` blocks for compatibility, maintenance, licensing, reproducibility, or safety caveats
- `::: details Title` blocks for secondary explanations that are useful but would interrupt the main reading path
- compact tables with no more than 3-4 columns where practical
- VitePress `<Badge />` components for short status labels such as active, limited support, experimental, tool-specific, or version-dependent

Avoid:

- wide tables with long prose in cells
- using tables as a substitute for paragraphs
- stacking too many callouts in a row
- hiding essential beginner information inside collapsed details blocks
- decorative callouts that do not change how the reader understands or uses the page

When a comparison needs detail, use a compact table first, then add short subsections or `details` blocks below it. This keeps pages readable on narrow screens and avoids horizontal scrolling in VitePress.

## Content Organization

Choose the section by reader intent:

- `guides/getting-started/`: first concepts, setup paths, and orientation
- `guides/workflows/`: practical generation pipelines and repeatable processes
- `guides/prompting/`: prompting principles, conditioning, and prompt structure
- `guides/loras/`: LoRAs, embeddings, adapters, usage, and troubleshooting
- `concepts/`: core diffusion concepts explained clearly
- `models/`: model families, formats, compatibility, and ecosystem notes
- `troubleshooting/`: symptoms, likely causes, and fixes
- `tools/`: tool-specific notes when tool behavior matters
- `theory/`: deeper technical explanations
- `glossary/`: concise definitions with links to fuller explanations

If a topic fits multiple areas, put the main explanation where the reader would most likely look first, then link from related pages.

## Style Guide

- Prioritize clarity over cleverness.
- Use direct language.
- Define terms before relying on them.
- Explain acronyms on first use.
- Keep paragraphs short.
- Use examples that reflect real diffusion workflows.
- Separate general principles from tool-specific instructions.
- Avoid "best prompt" framing. Prefer "effective prompt structure", "tradeoffs", or "common failure modes".

## Editing Guidance

- Keep changes focused on the user's request.
- Preserve the existing project structure unless improving it is part of the task.
- Do not remove or rewrite user-created content unnecessarily.
- Avoid broad refactors while adding docs.
- When adding a new category or page, consider whether navigation needs to change.
- Prefer factual placeholders such as `TODO: verify tool-specific behavior` only when unavoidable; do not add lorem ipsum.

## Review Checklist

Before finishing a documentation change, check:

- Does the page make clear what is general and what is tool-specific?
- Are claims scoped, accurate, and free of invented numbers?
- Can a beginner follow the page without losing the technical meaning?
- Are headings ordered and scannable?
- Are links, navigation, and filenames consistent?
- Does `npm run docs:build` pass, if run?
