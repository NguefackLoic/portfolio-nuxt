<template>
  <div class="dark:bg-gray-900 transition-colors duration-300">
    <!-- Loader -->
    <Loader v-if="isLoading" />

    <template v-else>
      <div>
        <Header :isDarkMode="isDarkMode" :toggleDarkMode="toggleDarkMode" />
        <main class="pt-16">
          <About :isDarkMode="isDarkMode" />
          <Stack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </template>
  </div>
</template>

<script setup>
import Header from '/components/Header.vue'
import About from '/components/About.vue'
import Stack from '/components/Stack.vue'
import Projects from '/components/Projects.vue'
import Contact from '/components/Contact.vue'
import Footer from '/components/Footer.vue'
import Loader from '/components/Loader.vue'
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  isDarkMode.value = savedTheme === 'dark';
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  }

  setTimeout(() => {
    isLoading.value = false;
  }, 200);
});
</script>

<style>
/* Styles globaux si nécessaire */
</style>
