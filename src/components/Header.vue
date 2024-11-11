<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#190019] bg-opacity-90 backdrop-blur-sm">
    <div class="container mx-auto px-4 sm:px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="text-[#FFFFFF] font-bold text-xl flex items-center">
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button @click="toggleMenu" type="button" class="text-[#FFFFFF] hover:text-[#DFB6B2] focus:outline-none">
            <MenuIcon v-if="!isMenuOpen" class="h-6 w-6" />
            <XIcon v-else class="h-6 w-6" />
          </button>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex flex-grow justify-center">
          <ul class="flex space-x-6">
            <li v-for="section in sections" :key="section">
              <a
                :href="`#${section.toLowerCase()}`"
                class="text-lg text-[#FFFFFF] font-semibold transition duration-300 ease-in-out hover:text-[#DFB6B2]"
                @click.prevent="scrollToSection(section.toLowerCase())"
              >
                {{ section }}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Mobile Navigation -->
      <nav v-show="isMenuOpen" class="md:hidden mt-4">
        <ul class="flex flex-col space-y-4">
          <li v-for="section in sections" :key="section">
            <a
              :href="`#${section.toLowerCase()}`"
              class="text-lg text-[#FFFFFF] font-semibold transition duration-300 ease-in-out hover:text-[#DFB6B2] block"
              @click.prevent="scrollToSection(section.toLowerCase()); toggleMenu();"
            >
              {{ section }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { MenuIcon, XIcon } from 'lucide-vue-next';

const props = defineProps({
  sections: {
    type: Array,
    required: true
  },
  scrollToSection: {
    type: Function,
    required: true
  }
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
header {
  backdrop-filter: blur(10px);
}

a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: #DFB6B2;
  left: 50%;
  bottom: -4px;
  transition: width 0.3s ease, left 0.3s ease;
}

a:hover::after {
  width: 100%;
  left: 0;
}

@media (max-width: 768px) {
  a::after {
    display: none;
  }
}
</style>