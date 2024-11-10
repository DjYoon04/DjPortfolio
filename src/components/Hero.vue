<template>
  <section id="home"
    class="relative min-h-screen flex items-center justify-center bg-[#190019] text-center text-[#FBE4D8] overflow-hidden transition-opacity duration-300"
    :class="{ 'opacity-0': isFadedOut }"
  >
    <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
      <!-- Left Column -->
      <div class="flex flex-col items-center mt-12 opacity-0 animate-fadeIn animate-delay-200">
        <h1 class="text-5xl md:text-6xl font-bold mt-16 md:items-start mb-6 px-6 sliding-color">
          Hi, I’m Djeah Tabada
        </h1>
        <p class="text-xl mb-6">A Web Designer & Digital Artist passionate about creating illustrations and unique web experiences.</p>
        <a 
          href="#portfolio" 
          class="inline-block px-8 py-4 bg-[#522B5B] hover:bg-[#7ef4de] text-[#FBE4D8] hover:text-[#1e1d1f] rounded-full transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#854F6C]/30 font-bold"
        >
          Check My Work
        </a>
      </div>

      <!-- Right Column with Image -->
      <div class="flex flex-col items-center opacity-0 animate-fadeIn animate-delay-400">
        <img src="../assets/img/hero1.png" alt="Illustration" class="max-w-lg h-auto rounded-lg transition duration-300 ease-in-out hover:scale-105" />
      </div>
    </div>

    <!-- Glowing Animated Moving Shapes -->
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isFadedOut = ref(false);
const heroSection = ref(null);

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      isFadedOut.value = true;
    } else {
      isFadedOut.value = false;
    }
  },
  { threshold: 0.1 } // Trigger when 10% of the hero section is out of view
);

onMounted(() => {
  if (heroSection.value) {
    observer.observe(heroSection.value);
  }
});

onBeforeUnmount(() => {
  if (heroSection.value) {
    observer.unobserve(heroSection.value);
  }
});
</script>

<style scoped>
.sliding-color {
  background: linear-gradient(90deg, #F19ED2, #f1dbf3,   #f1dbf3,  #F19ED2, #7ef4de, #F19ED2, #f1dbf3);
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: slideColor 15s ease-in-out infinite;
}

@keyframes slideColor {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-slide-color-change {
  animation: slideInRight 1s ease-out forwards, colorChange 5s ease-in-out infinite;
  opacity: 1; /* Ensure it becomes fully visible after the slide */
}

/* Fade-in animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px); /* Optional: slide up effect */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add the fade-in animation class */
.animate-fadeIn {
  animation: fadeIn 0.8s forwards; /* Duration of the fade-in */
}

/* Add delay class for staggered effect */
.animate-delay-200 {
  animation-delay: 200ms; /* Delay for text */
}

.animate-delay-400 {
  animation-delay: 400ms; /* Delay for image */
}
/* Styling for glowing, moving shapes */
.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 10;
  animation: dynamicMove 20s ease-in-out infinite;
  will-change: transform; /* Optimize animation performance */
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: rgba(133, 79, 108, 0.7); /* Mauve shape */
  top: 10%;
  left: 15%;
  animation-duration: 20s;
  animation-delay: 2s; /* Start immediately */
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: rgba(37, 8, 87, 0.7); /* Dark purple shape */
  bottom: 15%;
  right: 40%;
  animation-duration: 20s;
  animation-delay: 0s; /* Staggered start */
}

.shape-3 {
  width: 250px;
  height: 250px;
  background: rgba(223, 182, 178, 0.7); /* Muted peach shape */
  top: 50%;
  left: 60%;
  animation-duration: 20s;
  animation-delay: 3s;
}

@keyframes dynamicMove {
  0% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(200px, -10px) scale(1.1); /* Move right and up */
  }
  50% {
    transform: translate(-50px, 300px) scale(0.8); /* Move left and down */
  }
  75% {
    transform: translate(200px, -10px) scale(1.0); /* Move right and slight down */
  }
  100% {
    transform: translate(0, 0) scale(1); /* Return to original position */
  }
}

</style>
