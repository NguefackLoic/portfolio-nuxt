import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faDiscord, faVuejs, faAngular, faInstagram, faWhatsapp, faGitlab } from '@fortawesome/free-brands-svg-icons';


library.add(faLinkedin, faGithub, faXTwitter, faGitlab, faDiscord, faVuejs, faAngular, faInstagram, faWhatsapp);


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
