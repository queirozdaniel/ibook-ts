export default {
  head: {
    title: 'iBook',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Uma nova maneira de ler livros online!',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  plugins: [{ src: '@/plugins/hello', mode: 'client' }, '@/plugins/accessor'],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: ['@nuxt/typescript-build'],

  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  build: {
    extractCSS: true,
  },

  styleResources: {
    scss: ['@/components/bosons/*.scss'],
  },

  axios: {
    baseURL: 'https://ibook-api.herokuapp.com',
  },
}
