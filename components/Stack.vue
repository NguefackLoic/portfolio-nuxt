<template>
  <section ref="stackSection" id="stack" class="py-20 transition-all duration-500 ease-in-out bg-white dark:bg-gray-900 text-center">
    <div class="mx-2 md:mx-4 lg:mx-6">
      <h2 class="text-4xl font-bold text-gray-900 text-shadow dark:text-white mb-6">My Stack</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
        <div
          v-for="tech in stack"
          :key="tech.name"
          class="p-4 border border-[#581845] bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-shadow duration-500 ease-in-out"
          :style="{ boxShadow: hovered === tech.name ? `0 0 30px ${tech.color}` :  `0 0 20px ${tech.color}`  }"
          @mouseenter="hovered = tech.name"
          @mouseleave="hovered = null"
        >
          <img :src="tech.logo" alt="logo my stack" class="h-12 mx-auto mb-2" />
          <p class="text-lg text-gray-900 dark:text-white">{{ tech.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const hovered = ref(null)
// const { $gsap } = useNuxtApp() 
const stackSection = ref(null)  

const stack = [
  { name: 'Nuxt.js', logo: 'logos/LogosNuxt.png', color: '#00DC82' }, 
  { name: 'Vue.js', logo: '/logos/LogosVue.png', color: '#42B883' },
  { name: 'Angular', logo: '/logos/LogosAngular.png', color: '#DD0031' },
  { name: 'Express', logo: '/logos/LogosExpress.png', color: '#303030' }, 
  { name: 'Tailwind CSS', logo: '/logos/LogosTailwind.png', color: '#38B2AC' }, 
  { name: 'Figma', logo: '/logos/LogosFigma.png', color: '#F24E1E' },
  { name: 'Odoo', logo: '/logos/LogosOdoo.png', color: '#af619d' },
]

onMounted(() => {
  // if (stackSection.value) {
  //   $gsap.from(stackSection.value.querySelectorAll('div'), {
  //     scale: 0.8,
  //     opacity: 0,
  //     rotate: 15,
  //     duration: 1,
  //     stagger: 0.2,
  //     ease: 'elastic.out(1, 0.75)'
  //   })
  // }
})
</script>

<style scoped>

</style>

