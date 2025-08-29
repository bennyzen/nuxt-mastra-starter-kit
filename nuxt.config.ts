// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxt/eslint', 'nuxt-mcp'],
  ignore: ['.mastra/**'],
  // @ts-expect-error - nuxt-mcp module configuration
  mcp: {
    includeNuxtDocsMcp: true
  }
})
