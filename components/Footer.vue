<template>
    <footer class="transition-all duration-500 ease-in-out bg-white dark:bg-gray-900 py-4 shadow-lg w-full z-10">
        <div class="container mx-auto px-4 md:px-8 lg:px-16">
            <!-- Section principale -->
            <div class="flex flex-col md:flex-row justify-between items-center">
            
            <!-- Nom et lien de retour au haut de la page -->
            <div class="mb-6 md:mb-0 dark:text-gray-300">
                <h2 class="text-2xl font-bold">LOIC Nguefack</h2>
                <p class="text-sm">Frontend Developer - Designer</p>
            </div>
            
            <!-- Liens de navigation rapide -->
            <ul class="flex space-x-6 mb-6 md:mb-0 text-xl dark:text-gray-300">
                <li><a href="#about" class="hover:underline">About</a></li>
                <li><a href="#stack" class="hover:underline">My Stack</a></li>
                <li><a href="#projects" class="hover:underline">Projects</a></li>
                <li><a href="#contact" class="hover:underline">Contact</a></li>
            </ul>
            
            <!-- Icônes de réseaux sociaux -->
            <div class="flex space-x-4">
                <a href="https://www.linkedin.com/in/nguefack-loic" target="_blank" class=" hover:text-gray-300 transition duration-200 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.286c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.286h-3v-5.396c0-1.285-.025-2.941-1.794-2.941-1.794 0-2.07 1.402-2.07 2.85v5.487h-3v-10h2.881v1.366h.041c.401-.762 1.38-1.56 2.84-1.56 3.039 0 3.601 2.004 3.601 4.606v5.588z"/></svg>
                </a>
                <a href="https://github.com/loicnguefack" target="_blank" class="hover:text-gray-300 transition duration-200 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.306 3.492.998.108-.776.418-1.306.76-1.606-2.665-.3-5.467-1.333-5.467-5.93 0-1.311.469-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.292-1.553 3.299-1.23 3.299-1.23.653 1.653.241 2.873.118 3.176.769.84 1.234 1.91 1.234 3.221 0 4.61-2.807 5.625-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.577 4.765-1.588 8.202-6.084 8.202-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>

            </div>
            </div>

            <!-- Copyright -->
            <div class="mt-6 text-center text-md dark:text-gray-300">
            &copy; {{ new Date().getFullYear() }} @loic-nguefack
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>