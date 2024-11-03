<template>
  <section id="contact" class="transition-all duration-500 ease-in-out py-20 bg-gray-100 dark:bg-gray-800 text-center">
    <div class="mx-2 md:mx-4 lg:mx-6">
      <h2 class="text-4xl font-bold text-gray-900 text-shadow dark:text-white mb-6">Contacte me</h2>

      <div v-if="showThankYouMessage" class="mb-4 text-green-600 dark:text-green-400">
        Thank you for your message! We will reply as soon as possible.
      </div>
      
      <form @submit="sendEmail" ref="contactForm" class="w-5/5 mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform">
        <input 
          v-model="name" 
          type="text" 
          placeholder="Name" 
          class="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#581845] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
        <input 
          v-model="email" 
          type="email" 
          required
          placeholder="E-mail" 
          class="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#581845] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
        <textarea 
          v-model="message" 
          placeholder="Message" 
          class="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#581845] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        ></textarea>
        <div class="flex justify-center">
          <button 
            type="submit" 
            class="bg-[#581845] text-white py-2 px-4 rounded hover:bg-[#3f1131] transition duration-200 ease-in-out shadow-md hover:shadow-lg flex items-center justify-center"
            :disabled="isLoading"
          >
            <span>Leave your message</span>
            <span v-if="isLoading" class="loader w-4 h-4 border-2 ml-3 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emailjs from 'emailjs-com';

const name = ref('');
const email = ref('');
const message = ref('');
const contactForm = ref(null);
const isLoading = ref(false);
const showThankYouMessage = ref(false);

const sendEmail = (e) => {
  e.preventDefault(); 
  isLoading.value = true;
  const templateParams = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  emailjs.send('service_k9bocri', 'template_96dlywn', templateParams, 'uyXg9psUP1sprSukT')
    .then((response) => {
      console.log('SUCCESS!');
      name.value = '';
      email.value = '';
      message.value = '';
      isLoading.value = false;
      showThankYouMessage.value = true;
    })
    .catch((err) => {
      console.error('FAILED...', err);
      isLoading.value = false;
    });
};

onMounted(() => {
  // $gsap.from(contactForm.value, {
  //   opacity: 0,
  //   y: 100,
  //   duration: 1,
  //   ease: 'power3.out'
  // })
})
</script>

<style scoped>
.loader {
  border-color: #f3f3f3; 
  border-top-color: #581845; 
}
</style>

