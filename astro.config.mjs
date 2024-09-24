import { defineConfig } from 'astro/config'
import htmx from 'astro-htmx'
import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  devToolbar: {
    enabled: false
  },

  output: 'server',

  adapter: node({
    mode: 'standalone' 
  }),

  integrations: [
    htmx(),
    tailwind({
      nesting: true
    })
  ],
  vite: {
    plugins: []
  },

  experimental: {
    env: {
      schema: {}
    }
  }
})
