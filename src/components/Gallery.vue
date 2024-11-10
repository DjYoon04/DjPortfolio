<template>
   <h2 class="text-4xl font-bold mb-12 text-center">Digital Artworks</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="grid gap-4" v-for="(group, index) in imageGroups" :key="index">
        <div v-for="(image, imgIndex) in group" :key="imgIndex">
          <img
            class="h-auto max-w-full rounded-lg"
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
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
        alt: 'Image 1',
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
        alt: 'Image 2',
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
        alt: 'Image 3',
      },
    ],
    [
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
        alt: 'Image 4',
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
        alt: 'Image 5',
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
        alt: 'Image 6',
      },
    ],
    [
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
        alt: 'Image 7',
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
        alt: 'Image 8',
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
        alt: 'Image 9',
      },
    ],
    [
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
        alt: 'Image 10',
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
        alt: 'Image 11',
      },
      {
        src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
        alt: 'Image 12',
      },
    ],
  ]
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  