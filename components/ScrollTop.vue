<template>
    <button
      v-show="visible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-[#581845] text-white p-3 rounded-full shadow-lg hover:bg-[#3a112e] transition-all z-50"
    >
      ⬆️
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
  