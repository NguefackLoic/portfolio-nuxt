export default {
  css: ['@/assets/css/tailwind.css'],
  buildModules: ['@nuxt/postcss8'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    // transpile: ['gsap'],
  },
  modules: [
    '@hypernym/nuxt-gsap',  // Seul le bon module est utilisé
  ],
  plugins: [
    '@/plugins/fontawesome.js', // Ajout du plugin Font Awesome
    '~/plugins/iconify.js'
  ],
  gsap: {
    /* options de configuration supplémentaires si nécessaires */
  },

}

