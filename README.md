# Diffusion Docs

Diffusion Docs is a VitePress documentation site for modern diffusion-based image generation systems.

The goal is to become a practical, technically grounded, beginner-accessible reference for concepts, workflows, troubleshooting, model ecosystems, prompting, LoRAs, embeddings, samplers, schedulers, hardware, and generation tooling.

This is not a prompt marketplace, hype site, or tool-specific wiki.

Site: https://bubbafett5611.github.io/DiffusionDocs/

## Local Development

Install dependencies:

```bash
npm ci
```

Start the local docs server:

```bash
npm run docs:dev
```

Build the site:

```bash
npm run docs:build
```

Preview the built site:

```bash
npm run docs:preview
```

## Site Structure

- `docs/guides/`: reader-facing guides and workflows
- `docs/reference/concepts/`: core diffusion concepts
- `docs/reference/models/`: model families, formats, and compatibility notes
- `docs/reference/tools/`: generation tools and tool-specific notes
- `docs/reference/troubleshooting/`: symptoms, likely causes, and fixes
- `docs/reference/theory/`: deeper technical explanations
- `docs/reference/glossary/`: concise definitions

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening substantial documentation changes.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
