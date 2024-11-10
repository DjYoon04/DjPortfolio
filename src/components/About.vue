<template>
  <section id="about"
   class="py-16 sm:py-24 bg-gradient-to-br from-[#190019] to-[#2B124C] text-[#FBE4D8]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#DFB6B2] to-[#FBE4D8]">
        About Me
      </h2>
      <div class="">
        <!-- About Text and Image Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          <!-- Text Section -->
          <div class="space-y-8 mt-8">
            <div class="flex items-start space-x-4 transition-all duration-300 ease-in-out hover:text-[#cffaf2] hover:translate-x-2">
              <UserCircle class="w-8 h-8 mt-1 flex-shrink-0 hover:text-[#cffaf2]" />
              <p class="text-lg">
                I'm a web designer and digital artist with a passion for building creative and user-friendly websites.
                I specialize in creating visually stunning designs that are both functional and effective. With over 5 years 
                of experience working with clients from various industries, I deliver high-quality projects that meet their needs.
              </p>
            </div>
            <div class="flex items-start space-x-4 transition-all duration-300 ease-in-out hover:text-[#cffaf2] hover:translate-x-2">
              <Palette class="w-8 h-8 mt-1 flex-shrink-0 hover:text-[#cffaf2]" />
              <p class="text-lg">
                Whether you're looking for a sleek portfolio, a business website, or an artistic web project, 
                I'm here to help you turn your vision into reality. My approach combines technical expertise with 
                artistic flair to create unique digital experiences.
              </p>
            </div>
          </div>

          <!-- Image Section -->
          <div class="flex justify-center max-w-xl">
            <img src="../assets/img/djeah.png" 
       alt="meme"
       class="w-96 h-96 rounded-full object-cover border-4 border-[#d699f7] shadow-lg shadow-[#cffaf2]/50 transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>
        </div>

        <!-- Skills Section -->
        <div>
          <h3 class="text-2xl font-semibold mb-8 flex items-center transition-all duration-300 ease-in-out hover:text-[#cffaf2] hover:translate-x-2">
            <Zap class="w-8 h-8 mr-3 text-[#FFFFFF]" />
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#DFB6B2] to-[#FBE4D8]">Skills</span>
          </h3>
          <ul class="grid grid-cols-2 gap-6">
            <li v-for="skill in skills" :key="skill.name" 
                class="bg-[#522B5B] p-6 rounded-lg flex flex-col items-center justify-center space-y-3 hover:text-gray-800
                hover:bg-[#7ef4de] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#cffaf2]/30">
              <component :is="skill.icon" class="w-10 h-10 text-[#FFFFF] hover:stroke-gray-800" />
              <span class="text-lg font-medium">{{ skill.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import { UserCircle, Palette, Zap, Monitor, Figma, PenTool, Code, PaintBucket, Database } from 'lucide-vue-next'

const VueIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
      <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
    </svg>
  `
}

const skills = ref([
  { name: 'Web Design', icon: Monitor },
  { name: 'UI/UX', icon: Figma },
  { name: 'Digital Art', icon: PenTool },
  { name: 'Database', icon: Database },
  { name: 'Tailwind CSS', icon: Code },
  { name: 'Graphic Design', icon: PaintBucket },
])
</script>

<style scoped>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style>
