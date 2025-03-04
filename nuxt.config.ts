// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'scroll-x-reverse-transition',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'scroll-y-reverse-transition',
      mode: 'out-in',
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/app.scss'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vueuse/nuxt'],
})