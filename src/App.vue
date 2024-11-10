<template>
  <div class="min-h-screen bg-[#190019] text-[#FBE4D8]">
    <Header :sections="sections" :scrollToSection="scrollToSection" />
    <main>
      <Hero />
      <About />
      <Portfolio :projects="projects" />
      <Gallery />
      <Contact :form="form" :submitForm="submitForm" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import 'swiper/swiper-bundle.css';

const sections = ['Home', 'About', 'Portfolio', 'Contact']

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with Vue and Node.js',
    image: '/img/ec.png', // Path relative to public folder
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website using Vue and Tailwind CSS',
    image: '/img/por.png', // Path relative to public folder
  },
  {
    title: 'Task Management App',
    description: 'A Vue.js web app for task management and productivity',
    image: '/img/task.png', // Path relative to public folder
  },
]


const form = ref({
  name: '',
  email: '',
  message: '',
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const submitForm = () => {
  console.log('Form submitted:', form.value)
  form.value = { name: '', email: '', message: '' }
  alert('Thank you for your message! I will get back to you soon.')
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

html {
  scroll-behavior: smooth;
}
</style>
