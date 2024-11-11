<template>
  <h2 class="text-4xl font-bold mb-12 text-center">Digital Artworks</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
    <div class="grid gap-4" v-for="(group, index) in imageGroups" :key="index">
      <div 
        class="flex items-center justify-center h-full gap-4" 
        v-for="(image, imgIndex) in group" :key="imgIndex">
        <img
          class="h-auto max-w-full rounded-lg object-contain transition duration-300 ease-in-out hover:scale-105"
          :src="image.src"
          :alt="image.alt"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const imageGroups = [
  [
    { src: 'img/Fushiguro Megumi.png', alt: 'Image 1' },
    { src: 'img/IMG_0715.PNG', alt: 'Image 2' },
    { src: 'img/IMG_1179.PNG', alt: 'Image 3' },
  ],
  [
    { src: 'img/IMG_3620.jpeg', alt: 'Image 4' },
    { src: 'img/IMG_3768.PNG', alt: 'Image 5' },
    { src: 'img/IMG_4151.PNG', alt: 'Image 6' },
  ],
  [
    { src: 'img/IMG_6452.PNG', alt: 'Image 7' },
    { src: 'img/IMG_6456.PNG', alt: 'Image 8' },
    { src: 'img/IMG_4635.PNG', alt: 'Image 9' },
  ],
  [
    { src: 'img/IMG_4611.PNG', alt: 'Image 10' },
    { src: 'img/IMG_6457.PNG', alt: 'Image 11' },
    { src: 'img/IMG_6453.PNG', alt: 'Image 12' },
  ],
];
</script>

<style scoped>
/* Add any additional styles here */
</style>
