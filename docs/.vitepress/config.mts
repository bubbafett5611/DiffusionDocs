import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Diffusion Docs",
  description: "Technically grounded workflows, troubleshooting, and reference material for modern diffusion tools.",
  base: '/DiffusionDocs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/introduction' },
      { text: 'Tools', link: '/tools/generation-tools' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'What Is Diffusion?', link: '/getting-started/what-is-diffusion' },
          { text: 'Your First Workflow', link: '/getting-started/first-workflow' },
          { text: 'Common Terms', link: '/getting-started/common-terms' },
          { text: 'Where To Go Next', link: '/getting-started/where-to-go-next' }
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Generation Tools', link: '/tools/generation-tools' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
