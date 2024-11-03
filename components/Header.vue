<template>
  <header
    ref="header"
    :class="[
      'fixed w-full top-0 z-10 transition-all duration-500 ease-in-out shadow-lg',
      isScrolled ? 'bg-opacity-90 py-2' : 'bg-opacity-100 py-4',
      'bg-white dark:bg-gray-900'
    ]"
  >
    <nav class="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
      <h1 class="text-2xl font-bold text-[#581845] dark:text-[#631f4d] text-shadow">LOIC Nguefack</h1>
      <button @click="toggleDarkMode" class="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
        <span v-if="isDarkMode" class="text-yellow-400">🌙</span>
        <span v-else class="text-gray-800">☀️</span>
      </button>

      <!-- Bouton Hamburger pour le mobile -->
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden p-2 text-gray-900 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg 
          v-if="!isMenuOpen" 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg 
          v-else 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>


      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-4 items-center">
        <li><a href="#about" @click.prevent="scrollTo('about')" class="text-gray-900 dark:text-white hover:text-[#581845] hover:underline">About</a></li>
        <li><a href="#stack" @click.prevent="scrollTo('stack')" class="text-gray-900 dark:text-white hover:text-[#581845] hover:underline">Ma Stack</a></li>
        <li><a href="#projects" @click.prevent="scrollTo('projects')" class="text-gray-900 dark:text-white hover:text-[#581845] hover:underline">Projets</a></li>
        <li><a href="#contact" @click.prevent="scrollTo('contact')" class="text-gray-900 dark:text-white hover:underline hover:text-[#581845]">Contact</a></li>
        <button @click="openModal" class="bg-[#581845] text-white py-2 px-4 rounded hover:bg-[#3f1131] transition duration-200 ease-in-out shadow-md hover:shadow-lg">Obtenir un devis</button>   
      </ul>

      <!-- Menu Mobile -->
      <ul v-if="isMenuOpen" class="flex flex-col md:hidden absolute bg-white dark:bg-gray-900 w-full left-0 top-16 z-20 shadow-lg">
        <li><a href="#about" @click.prevent="scrollTo('about')" class="block px-4 py-2 text-gray-900 dark:text-white hover:text-[#581845] hover:underline">About</a></li>
        <li><a href="#stack" @click.prevent="scrollTo('stack')" class="block px-4 py-2 text-gray-900 dark:text-white hover:text-[#581845] hover:underline">Ma Stack</a></li>
        <li><a href="#projects" @click.prevent="scrollTo('projects')" class="block px-4 py-2 text-gray-900 dark:text-white hover:text-[#581845] hover:underline">Projets</a></li>
        <li><a href="#contact" @click.prevent="scrollTo('contact')" class="block px-4 py-2 text-gray-900 dark:text-white hover:text-[#581845] hover:underline">Contact</a></li>
        <button @click="openModal" class="bg-[#581845] text-white py-2 px-4 rounded hover:bg-[#3f1131] transition duration-200 ease-in-out shadow-md hover:shadow-lg">Obtenir un devis</button>   
      </ul>
    </nav>

    <!-- Modal -->
    <transition name="modal">
      <div v-if="isModalOpen" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30" @click="closeModal">
        <div class="bg-white dark:bg-gray-800 w-3/4 max-w-2xl p-6 rounded-lg shadow-lg transition-transform transform" @click.stop>
          <h2 class="text-lg font-bold mb-4 dark:text-white">Demande de devis</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom</label>
              <input type="text" v-model="form.name" id="name" class="mt-1 block w-full border border-gray-300 rounded-md p-2" required>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" v-model="form.email" id="email" class="mt-1 block w-full border border-gray-300 rounded-md p-2" required>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea v-model="form.message" id="message" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md p-2" required></textarea>
            </div>
            <div class="flex justify-end">
              <button type="button" @click="closeModal" class="mr-2 text-gray-600">Annuler</button>
              <button type="submit" class="bg-[#581845] text-white py-2 px-4 rounded hover:bg-[#3f1131] transition duration-200 ease-in-out">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, defineProps, ref } from 'vue';

const props = defineProps({
  isDarkMode: Boolean,
  toggleDarkMode: Function,
});

const isScrolled = ref(false);
const isModalOpen = ref(false);
const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const submitForm = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    console.error("Tous les champs doivent être remplis");
    return;
  }
  console.log('Form Submitted:', form.value);
  closeModal();
};



onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isMenuOpen = ref(false);
</script>

<style scoped>
html {
  scroll-behavior: smooth; 
}
</style>
