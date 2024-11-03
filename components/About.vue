<template>
  <section ref="about" id="about" class="transition-all duration-500 ease-in-out py-20 bg-gray-100 dark:bg-gray-800 text-center">
    <div class="container mx-auto flex flex-col items-center">
      <div class="flex flex-col-reverse md:flex-row justify-center items-center mt-7 mx-0 md:mx-4 lg:mx-6">
        <div class="w-full md:w-1/2 md:order-2 hidden md:flex">
          <img ref="photo" class="max-w-xs w-full h-auto rounded-full mx-auto mb-6" :src="currentPhoto" alt="Ma photo" />
        </div>
        <div class="w-full md:w-1/2 md:order-1 flex flex-col justify-between items-center">
          <h2 ref="title" class="text-4xl font-bold text-gray-900 dark:text-white mb-2 items-center" >
            <span class="text-2xl text-gray-700 dark:text-gray-300">Hi! I Am </span><span class="dark:text-shadow-dark text-shadow">{{ name }}</span> <br />
            <span class="diple flex text-center my-3 justify-center">
              
                  <h2 class="text-xl line-1 anim-typewriter text-shadow dark:text-shadow-dark"> Frontend Developer - Designer </h2>
              </span>
            <p class="text-lg text-gray-700 dark:text-gray-300" style="line-height: 1.5;">
              Passionate, with 3 years of experience in creating engaging and intuitive web interfaces.
              I specialize in building responsive applications that improve the user experience and promote interaction.
            </p>
          </h2>
          <div class="mt-6">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="blank" class="mx-2 text-gray-900 dark:text-white hover:underline">
              <font-awesome-icon :icon="['fab', link.icon]" class="mr-1 text-2xl" /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { icon } from '@fortawesome/fontawesome-svg-core';
import { computed, defineProps } from 'vue';

const props = defineProps({
  isDarkMode: Boolean,
});

const name = 'LOIC Nguefack';
const lightPhoto = 'profile-pic.png';
const darkPhoto = 'profile-pic (1).png';

const presentation = `Je suis un développeur frontend passionné, spécialisé en Nuxt.js, Tailwind CSS et GSAP.`;
const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/loic', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/loic', icon: 'github' },
  { name: 'GitLab', url: 'https://gitlab.com/loic', icon: 'gitlab'},
  { name: 'X', url: 'https://x.com/loic', icon: 'x-twitter' },
  { name: 'Discord', url: 'https://discord.com/', icon: 'discord' },
  { name: 'Instagram', url: 'https://instagram.com/loic', icon: 'instagram'},
  { name: 'WhatsApp', url: 'https://whatsApp.com/loic', icon: 'whatsapp'}
];

const currentPhoto = computed(() => {
  return props.isDarkMode ? darkPhoto : lightPhoto;
});
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); 
}
.text-shadow-dark {
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5); 
}

.line-1 {
    width: fit-content;
    border-right: 3px solid rgba(255,255,255,.75);
    white-space: nowrap;
    overflow: hidden;
    padding-right: 2px;
}

.anim-typewriter{
    animation: typewriter 3.5s steps(40) 1s 1 normal both,
    blinkTextCursor 800ms steps(40) infinite normal;
}

.loader {
  border-color: #f3f3f3; 
  border-top-color: #581845; 
}
</style>

