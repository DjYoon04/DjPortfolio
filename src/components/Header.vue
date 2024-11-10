<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#522B5B] bg-opacity-90 backdrop-blur-sm">
    <nav class="container mx-auto px-4 sm:px-6 py-4">
      <ul class="flex justify-center space-x-6">
        <li v-for="section in sections" :key="section">
          <a
            :href="`#${section.toLowerCase()}`"
            class="text-lg text-[#FBE4D8] font-semibold transition duration-300 ease-in-out hover:text-[#DFB6B2]"
            @click.prevent="scrollToSection(section.toLowerCase())"
          >
            {{ section }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  sections: Array,
  scrollToSection: Function,
});
</script>

<style scoped>
/* Custom Styles for Header */
header {
  backdrop-filter: blur(10px); /* Adds a nice background blur effect */
}

a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: #DFB6B2; /* Underline color */
  left: 50%;
  bottom: -4px;
  transition: width 0.3s ease, left 0.3s ease;
}

a:hover::after {
  width: 100%;
  left: 0;
}
</style>
