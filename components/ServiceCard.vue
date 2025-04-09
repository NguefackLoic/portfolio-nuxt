<template>
    <div  class="flex flex-col justify-center text-center items-center bg-white dark:bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300">
      <div class="text-4xl mb-4">{{ icon }}</div>
      <h3 class="text-xl line-1 anim-typewriter text-shadow font-semibold text-gray-800 dark:text-gray-300 mb-2">{{ title }}</h3>
      <p class="text-gray-700 dark:text-gray-300">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({   
    icon: String,
    title: String,
    description: String,
  })
  </script>
  