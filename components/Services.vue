<template>
    <section  class="py-20 transition-all duration-500 ease-in-out  bg-gray-100 dark:bg-gray-800" id="services">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-gray-900 text-shadow text-center dark:text-white mb-6">Services</h2>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard 
            v-for="(service, index) in services"
            :key="index"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      icon: '💻',
      title: 'Développement Web',
      description: 'Création de sites web modernes, performants et responsives adaptés à vos besoins.',
    },
    {
      icon: '📱',
      title: 'Applications Mobiles',
      description: 'Conception d\'applications mobiles intuitives pour Android et iOS.',
    },
    {
      icon: '🧩',
      title: 'Intégration Odoo',
      description: 'Personnalisation et déploiement de modules Odoo pour votre entreprise.',
    },
    {
      icon: '🛠️',
      title: 'Consulting IT',
      description: 'Accompagnement stratégique pour vos projets technologiques.',
    },
    {
      icon: '🎯',
      title: 'SEO & Performance',
      description: 'Optimisation de votre site pour un meilleur référencement et une meilleure vitesse.',
    },
    {
      icon: '🎨',
      title: 'Design UI/UX',
      description: 'Création de maquettes ergonomiques et esthétiques pour améliorer l’expérience utilisateur.',
    },
  ]
  </script>
  