<template>
  <section id="projects" class="py-20 transition-all duration-500 ease-in-out bg-white dark:bg-gray-900 text-center">
    <div class="mx-2 md:mx-4 lg:mx-6">
      <h2 class="text-4xl font-bold text-gray-900 text-shadow dark:text-white mb-6">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.name" class="project-card p-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg">
          <img :src="project.image" alt="Project image" class="h-48 w-full object-cover rounded-md mb-4">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ project.name }}</h3>
          <p class="text-gray-700 dark:text-gray-300">{{ project.description }}</p>
          <a :href="project.url" target="_blank" class="text-[#581845] dark:text-[#a53e86] hover:underline mt-2 inline-block">Voir plus</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
// const { $gsap } = useNuxtApp()  

const projects = [
  { name: 'Projet 1', image: 'project/Capture d’écran du 2024-10-29 13-25-12.png', description: 'Description du projet 1', url: 'https://project1.com' },
  { name: 'Projet 2', image: 'project/Capture d’écran du 2024-10-29 13-25-12.png', description: 'Description du projet 2', url: 'https://project2.com' },
  { name: 'Projet 3', image: 'project/Capture d’écran du 2024-10-29 13-25-12.png', description: 'Description du projet 3', url: 'https://project3.com' },
]

onMounted(() => {
  // $gsap.from('.project-card', {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1,
  //   stagger: 0.2,
  //   ease: 'power3.out'
  // })
})
</script>

