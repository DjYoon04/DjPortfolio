<template>
  <section id="portfolio" class="py-20 bg-[#190019]">
    <div class="container mx-auto px-6">
      <h2 class="text-5xl font-bold mb-12 text-center text-[#FFFFFF]">My Works</h2>
      <div class="relative">
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)` }"
          >
            <div
              v-for="(slide, slideIndex) in slides"
              :key="slideIndex"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  v-for="(project, projectIndex) in slide"
                  :key="projectIndex"
                  class="bg-[#2B124C] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
                >
                  <img :src="project.image" :alt="project.title" class="w-full h-80 object-cover">
                  <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-[#DFB6B2]">{{ project.title }}</h3>
                    <p class="text-[#DFB6B2] mb-4">{{ project.description }}</p>
                    <a
                      href="#"
                      class="text-[#854F6C] hover:text-[#DFB6B2] font-semibold transition duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button
          @click="prevSlide"
          class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#2B124C] text-[#DFB6B2] p-2 rounded-full shadow-lg hover:bg-[#854F6C] transition duration-300"
        >
          <ChevronLeftIcon class="w-6 h-6" />
        </button>
        <button
          @click="nextSlide"
          class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#2B124C] text-[#DFB6B2] p-2 rounded-full shadow-lg hover:bg-[#854F6C] transition duration-300"
        >
          <ChevronRightIcon class="w-6 h-6" />
        </button>
      </div>
      
      <div class="flex justify-center mt-8">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full mx-2 focus:outline-none transition-all duration-300 ease-in-out"
          :class="currentSlide === index ? 'bg-[#DFB6B2] scale-125' : 'bg-[#854F6C] hover:bg-[#DFB6B2] hover:scale-110'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const currentSlide = ref(0)

// Determine how many items to show based on screen size
const itemsPerSlide = ref(1) // Default to show 1 item on mobile

const updateItemsPerSlide = () => {
  const width = window.innerWidth
  itemsPerSlide.value = width < 768 ? 1 : 2 // Show 1 item on mobile, 2 on larger screens
}

window.addEventListener('resize', updateItemsPerSlide)
updateItemsPerSlide() // Initial check

const slides = computed(() => {
  const result = []
  for (let i = 0; i < props.projects.length; i += itemsPerSlide.value) {
    result.push(props.projects.slice(i, i + itemsPerSlide.value))
  }
  return result
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.container {
  animation: fadeIn 1s ease-in-out;
}

/* Responsive styles */
@media (max-width: 768px) {
  .carousel-item {
    flex-direction: column; /* Stack items vertically on small screens */
  }
  
  .carousel-item img {
    height: 200px; /* Adjust height for images on smaller screens */
  }
}
</style>
