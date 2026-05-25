# Contributing To Diffusion Docs

Thanks for helping improve Diffusion Docs.

This project aims to be practical, technically careful, beginner-accessible, and useful across tools where possible.

## Writing Standards

Write documentation that is:

- technically accurate
- concise where possible
- easy to scan
- clear about what is general and what is tool-specific
- careful with compatibility, licensing, performance, and model capability claims

Avoid:

- hype or marketing language
- fake benchmarks or invented statistics
- mystical explanations of diffusion behavior
- presenting one tool's UI behavior as universal
- unnecessary jargon without definition

## VitePress Style

Use VitePress features intentionally:

- `::: tip Quick Take` for immediate orientation
- `::: info` for scope notes and conceptual distinctions
- `::: warning` for compatibility, maintenance, licensing, reproducibility, or safety caveats
- `::: details Title` for secondary explanations
- compact tables with no more than 3-4 columns where practical
- `<Badge />` components for short status labels

Do not use wide tables with long prose in cells. Put detail in paragraphs or collapsible sections below the table.

## Structure

Guides live under `docs/guides/`. Reference pages live under `docs/reference/`, grouped by section, such as `docs/reference/tools/`, `docs/reference/models/`, `docs/reference/concepts/`, `docs/reference/troubleshooting/`, `docs/reference/theory/`, and `docs/reference/glossary/`.

When adding a discoverable page, update `docs/.vitepress/config.mts` so the navbar and shared sidebar stay accurate.

## Verification

Run the build before finishing structural, navigation, or Markdown syntax changes:

```bash
npm run docs:build
```
