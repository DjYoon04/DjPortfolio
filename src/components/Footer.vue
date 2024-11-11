<template>
  <footer class="bg-gradient-to-r from-[#190019] to-[#1d0b36] text-[#FBE4D8] py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-center space-y-4">
        <p class="text-lg font-semibold">Connect with me</p>
        <div class="flex space-x-6">
          <a href="https://www.instagram.com/djeahyoon/" target="_blank" rel="noopener noreferrer"
             class="transform transition-transform duration-300 hover:scale-110">
            <Instagram class="w-8 h-8 text-[#DFB6B2] hover:text-[#FBE4D8]" />
            <span class="sr-only">Instagram</span>
          </a>
          <a href="https://www.facebook.com/djeah.tabada.5" target="_blank" rel="noopener noreferrer"
             class="transform transition-transform duration-300 hover:scale-110">
            <Facebook class="w-8 h-8 text-[#DFB6B2] hover:text-[#FBE4D8]" />
            <span class="sr-only">Facebook</span>
          </a>
          <a href="https://github.com/DjYoon04" target="_blank" rel="noopener noreferrer"
             class="transform transition-transform duration-300 hover:scale-110">
            <Github class="w-8 h-8 text-[#DFB6B2] hover:text-[#FBE4D8]" />
            <span class="sr-only">GitHub</span>
          </a>
        </div>
        <p class="text-sm mt-4">&copy; {{ currentYear }} Djeah Tabada. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Instagram, Facebook, Github } from 'lucide-vue-next'

const currentYear = ref(new Date().getFullYear())

onMounted(() => {
  // You can add any additional initialization logic here if needed
})
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>