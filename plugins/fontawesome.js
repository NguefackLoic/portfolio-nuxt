import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faDiscord, faVuejs, faAngular, faInstagram, faWhatsapp, faGitlab } from '@fortawesome/free-brands-svg-icons';

// Ajouter les icônes à la bibliothèque
library.add(faLinkedin, faGithub, faXTwitter, faGitlab, faDiscord, faVuejs, faAngular, faInstagram, faWhatsapp);

// Exporter le composant FontAwesomeIcon
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
