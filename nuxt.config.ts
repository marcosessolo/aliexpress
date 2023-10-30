// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ['~/plugins/fontawesome.js'],
  pages: true,
  modules:[
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  app: {
    head: {
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true },
      ]
    }
  },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/',
      exclude: [],
    },
  },
  devtools: { enabled: true }
})
