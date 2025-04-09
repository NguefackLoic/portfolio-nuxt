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
      title: 'Web Development',
      description: 'Creation of modern, high-performance and responsive websites adapted to your needs.',
    },
    {
      icon: '📱',
      title: 'Mobile Applications',
      description: 'Design of intuitive mobile applications for Android and iOS.',
    },
    {
      icon: '🧩',
      title: 'Odoo Integration',
      description: 'Customization and deployment of Odoo modules for your business.',
    },
    {
      icon: '🛠️',
      title: 'IT Consulting',
      description: 'Strategic support for your technology projects.',
    },
    {
      icon: '🎯',
      title: 'SEO & Performance',
      description: 'Optimizing your site for better SEO and speed.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creation of ergonomic and aesthetic models to improve the user experience.',
    },
  ]
  </script>
  