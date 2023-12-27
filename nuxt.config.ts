// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      // заголовок сайта
      title: 'Nuxt 3',
      meta: [
        {
          name: 'description',
          content: 'Everything you need to know about Learn Nuxt 3'
        }
      ],
      link: [
        {
          // Подключение иконок в проекте. (используется в компоненте ProductDetails)
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
