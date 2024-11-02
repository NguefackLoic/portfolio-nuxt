<template>
  <header ref="header" class="transition-all duration-500 ease-in-out bg-white dark:bg-gray-900 py-4 shadow-lg fixed w-full top-0 z-10">
    <nav class="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
      <h1 class="text-2xl font-bold text-[#581845] dark:text-[#631f4d] text-shadow">LOIC Nguefack</h1>
      <button @click="toggleDarkMode" class="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
        <span v-if="isDarkMode" class="text-yellow-400">🌙</span>
        <span v-else class="text-gray-800">☀️</span>
      </button>

      <!-- Bouton Hamburger pour le mobile -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-gray-900 dark:text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-4 items-center">
        <li><a href="#about" class="text-gray-900 dark:text-white hover:text-[#581845] hover:underline">About</a></li>
        <li><a href="#stack" class="text-gray-900 dark:text-white hover:text-[#581845] hover:underline">Ma Stack</a></li>
        <li><a href="#projects" class="text-gray-900 dark:text-white hover:text-[#581845] hover:underline">Projets</a></li>
        <li><a href="#contact" class="text-gray-900 dark:text-white hover:underline hover:text-[#581845]">Contact</a></li>
        <button class="bg-[#581845] text-white py-2 px-4 rounded hover:bg-[#3f1131] transition duration-200 ease-in-out shadow-md hover:shadow-lg">Obtenir un devis</button>   
      </ul>

      <!-- Menu Mobile -->
      <ul v-if="isMenuOpen" class="flex flex-col md:hidden absolute bg-white dark:bg-gray-900 w-full left-0 top-16 z-20 shadow-lg">
        <li><a href="#about" class="block px-4 py-2 text-gray-900 dark:text-white hover:text-[#581845] hover:underline">About</a></li>
        <li><a href="#stack" class="block px-4 py-2 text-gray-900 dark:text-white hover:text-[#581845] hover:underline">My Stack</a></li>
        <li><a href="#projects" class="block px-4 py-2 text-gray-900 dark:text-white hover:text-[#581845] hover:underline">Projects</a></li>
        <li><a href="#contact" class="block px-4 py-2 text-gray-900 dark:text-white hover:text-[#581845] hover:underline">Contact</a></li>
        <button class="bg-[#581845] text-white py-2 px-4 rounded hover:bg-[#3f1131] transition duration-200 ease-in-out shadow-md hover:shadow-lg">Obtenir un devis</button>   
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  isDarkMode: Boolean,
  toggleDarkMode: Function,
});


const isMenuOpen = ref(false);
</script>

<style scoped>
</style>
