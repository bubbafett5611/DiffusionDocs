import { defineConfig } from 'vitepress'
import { createBuildTimeDiagramsPlugin } from 'vitepress-plugin-diagrams'

// https://vitepress.dev/reference/site-config
const base = '/DiffusionDocs/'

const { configureMarkdown, vitePlugin } = createBuildTimeDiagramsPlugin({
  diagramsDir: 'docs/public/diagrams',
  publicPath: `${base}diagrams`,
  diagramsDistDir: 'diagrams',
  enableFileImports: false
})

const guidesSidebar = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Introduction', link: '/guides/getting-started/introduction' },
      { text: 'What Is Diffusion?', link: '/guides/getting-started/what-is-diffusion' },
      { text: 'Your First Workflow', link: '/guides/getting-started/first-workflow' },
      { text: 'Choose A Generation Path', link: '/guides/getting-started/choose-a-generation-path' },
      { text: 'Hosted Or Local?', link: '/guides/getting-started/hosted-or-local' },
      { text: 'Common Terms', link: '/guides/getting-started/common-terms' },
      { text: 'Where To Go Next', link: '/guides/getting-started/where-to-go-next' }
    ],
    collapsed: true
  },
  {
    text: 'Workflows',
    items: [
      { text: 'Overview', link: '/guides/workflows/' },
      { text: 'Text-To-Image', link: '/guides/workflows/text-to-image' },
      { text: 'Image-To-Image', link: '/guides/workflows/image-to-image' },
      { text: 'Inpainting', link: '/guides/workflows/inpainting' },
      { text: 'Upscaling And Refinement', link: '/guides/workflows/upscaling-refinement' }
    ],
    collapsed: true
  },
  {
    text: 'Prompting',
    items: [
      { text: 'Overview', link: '/guides/prompting/' },
      { text: 'Prompt Structure', link: '/guides/prompting/prompt-structure' },
      { text: 'Negative Prompts', link: '/guides/prompting/negative-prompts' },
      { text: 'Prompt Weighting', link: '/guides/prompting/prompt-weighting' },
      { text: 'Model-Specific Behavior', link: '/guides/prompting/model-specific-behavior' }
    ],
    collapsed: true
  },
  {
    text: 'LoRAs',
    items: [
      { text: 'Overview', link: '/guides/loras/' },
      { text: 'What Are LoRAs?', link: '/guides/loras/what-are-loras' },
      { text: 'Trigger Words And Weights', link: '/guides/loras/trigger-words-and-weights' },
      { text: 'Compatibility', link: '/guides/loras/compatibility' },
      { text: 'Stacking LoRAs', link: '/guides/loras/stacking-loras' },
      { text: 'LoRA Troubleshooting', link: '/guides/loras/troubleshooting' }
    ],
    collapsed: true
  }
]

const referenceSidebar = [
  {
    text: 'Concepts',
    items: [
      { text: 'Overview', link: '/reference/concepts/' },
      { text: 'Conditioning', link: '/reference/concepts/conditioning' },
      { text: 'Denoising', link: '/reference/concepts/denoising' },
      { text: 'Latent Space', link: '/reference/concepts/latent-space' },
      { text: 'Samplers And Schedulers', link: '/reference/concepts/samplers-and-schedulers' },
      { text: 'Seeds And Reproducibility', link: '/reference/concepts/seeds-and-reproducibility' },
      { text: 'Checkpoints, VAEs, And Adapters', link: '/reference/concepts/checkpoints-vaes-adapters' }
    ],
    collapsed: true
  },
  {
    text: 'Models',
    items: [
      { text: 'Overview', link: '/reference/models/' },
      { text: 'Model Families', link: '/reference/models/model-families' },
      { text: 'Checkpoint Formats', link: '/reference/models/checkpoint-formats' },
      { text: 'Compatibility', link: '/reference/models/compatibility' },
      { text: 'Licensing And Sources', link: '/reference/models/licensing-and-sources' }
    ],
    collapsed: true
  },
  {
    text: 'Tools',
    items: [
      { text: 'Overview', link: '/reference/tools/' },
      { text: 'Generation Tools', link: '/reference/tools/generation-tools' }
    ],
    collapsed: true
  },
  {
    text: 'Troubleshooting',
    items: [
      { text: 'Overview', link: '/reference/troubleshooting/' },
      { text: 'Prompt Ignored', link: '/reference/troubleshooting/prompt-ignored' },
      { text: 'Bad Anatomy Or Text', link: '/reference/troubleshooting/bad-anatomy-or-text' },
      { text: 'Muddy Detail', link: '/reference/troubleshooting/muddy-detail' },
      { text: 'Repeated Objects', link: '/reference/troubleshooting/repeated-objects' },
      { text: 'Color Problems', link: '/reference/troubleshooting/color-problems' },
      { text: 'Out Of Memory', link: '/reference/troubleshooting/out-of-memory' }
    ],
    collapsed: true
  },
  {
    text: 'Theory',
    items: [
      { text: 'Overview', link: '/reference/theory/' },
      { text: 'Denoising', link: '/reference/theory/denoising' },
      { text: 'Latent Diffusion', link: '/reference/theory/latent-diffusion' },
      { text: 'Classifier-Free Guidance', link: '/reference/theory/classifier-free-guidance' },
      { text: 'Text Encoders', link: '/reference/theory/text-encoders' }
    ],
    collapsed: true
  },
  {
    text: 'Glossary',
    items: [
      { text: 'Overview', link: '/reference/glossary/' }
    ],
    collapsed: true
  }
]

export default defineConfig({
  title: "Diffusion Docs",
  description: "Technically grounded workflows, troubleshooting, and reference material for modern diffusion tools.",
  base,
  markdown: {
    config: (md) => configureMarkdown(md)
  },
  vite: {
    plugins: [vitePlugin()]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Booru Tags', link: '/booru-tag-browser' },
      {
        text: 'Guides',
        items: [
          { text: 'Getting Started', link: '/guides/getting-started/introduction' },
          { text: 'Workflows', link: '/guides/workflows/' },
          { text: 'Prompting', link: '/guides/prompting/' },
          { text: 'LoRAs', link: '/guides/loras/' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Concepts', link: '/reference/concepts/' },
          { text: 'Models', link: '/reference/models/' },
          { text: 'Tools', link: '/reference/tools/' },
          { text: 'Troubleshooting', link: '/reference/troubleshooting/' },
          { text: 'Theory', link: '/reference/theory/' },
          { text: 'Glossary', link: '/reference/glossary/' }
        ]
      }
    ],

    sidebar: {
      '/guides/': guidesSidebar,
      '/reference/': referenceSidebar
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bubbafett5611/DiffusionDocs' }
    ]
  }
})
