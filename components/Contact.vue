<template>
  <section id="contact" class="transition-all duration-500 ease-in-out py-20 bg-gray-100 dark:bg-gray-800 text-center">
    <div class="mx-2 md:mx-4 lg:mx-6">
      <h2 class="text-4xl font-bold text-gray-900 text-shadow dark:text-white mb-6">Contacte me</h2>
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
        <button 
          type="submit" 
          class="bg-[#581845] text-white py-2 px-4 rounded hover:bg-[#3f1131] transition duration-200 ease-in-out shadow-md hover:shadow-lg"
        >
        Leave your message
        </button>
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

const sendEmail = (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  const templateParams = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  emailjs.send('service_k9bocri', 'template_96dlywn', templateParams, 'uyXg9psUP1sprSukT')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      name.value = '';
      email.value = '';
      message.value = '';
    })
    .catch((err) => {
      console.error('FAILED...', err);
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

