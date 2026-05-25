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
          { text: 'Concepts', link: '/concepts/' },
          { text: 'Models', link: '/models/' },
          { text: 'Tools', link: '/tools/' },
          { text: 'Troubleshooting', link: '/troubleshooting/' },
          { text: 'Theory', link: '/theory/' },
          { text: 'Glossary', link: '/glossary/' }
        ]
      }
    ],

    sidebar: {
      '/guides/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guides/getting-started/introduction' },
            { text: 'What Is Diffusion?', link: '/guides/getting-started/what-is-diffusion' },
            { text: 'Your First Workflow', link: '/guides/getting-started/first-workflow' },
            { text: 'Common Terms', link: '/guides/getting-started/common-terms' },
            { text: 'Where To Go Next', link: '/guides/getting-started/where-to-go-next' }
          ],
          collapsed: true
        },
        {
          text: 'Workflows',
          items: [
            { text: 'Overview', link: '/guides/workflows/' }
          ],
          collapsed: true
        },
        {
          text: 'Prompting',
          items: [
            { text: 'Overview', link: '/guides/prompting/' }
          ],
          collapsed: true
        },
        {
          text: 'LoRAs',
          items: [
            { text: 'Overview', link: '/guides/loras/' }
          ],
          collapsed: true
        }
      ],
      '/concepts/': [
        {
          text: 'Concepts',
          items: [
            { text: 'Overview', link: '/concepts/' }
          ],
          collapsed: true
        }
      ],
      '/models/': [
        {
          text: 'Models',
          items: [
            { text: 'Overview', link: '/models/' }
          ],
          collapsed: true
        }
      ],
      '/tools/': [
        {
          text: 'Tools',
          items: [
            { text: 'Overview', link: '/tools/' },
            { text: 'Generation Tools', link: '/tools/generation-tools' }
          ],
          collapsed: true
        }
      ],
      '/troubleshooting/': [
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Overview', link: '/troubleshooting/' }
          ],
          collapsed: true
        }
      ],
      '/theory/': [
        {
          text: 'Theory',
          items: [
            { text: 'Overview', link: '/theory/' }
          ],
          collapsed: true
        }
      ],
      '/glossary/': [
        {
          text: 'Glossary',
          items: [
            { text: 'Overview', link: '/glossary/' }
          ],
          collapsed: true
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bubbafett5611/DiffusionDocs' }
    ]
  }
})
