import { defineConfig } from 'astro/config'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  site: 'https://ddos-spec.github.io',
  base: isProduction ? '/lestari-las/' : '/',
  compressHTML: true,
})
