<template>
    <button
      v-show="visible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-[#581845] text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <!-- Icône propre sans fond coloré autour -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const visible = ref(false)
  
  const toggleVisible = () => {
    visible.value = window.scrollY > 300
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', toggleVisible)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', toggleVisible)
  })
  </script>
  