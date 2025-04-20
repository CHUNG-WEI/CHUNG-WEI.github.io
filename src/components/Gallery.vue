<!-- src/components/Gallery.vue -->
<template>
    <section class="py-12 px-4 text-center bg-white/70 shadow-lg backdrop-blur rounded-b-3xl">
      <h2 class="text-3xl font-bold mb-6 text-pink-600">🍙 我的圖片集</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(img, idx) in images"
          :key="idx"
          class="overflow-hidden rounded-xl shadow transition-transform duration-300 hover:scale-105 hover:rotate-1"
        >
          <img :src="img" alt="gallery image" class="w-full h-48 object-cover" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const images = [
    '/images/food1.jpg',
    '/images/nature1.jpg',
    '/images/food2.jpg',
    '/images/nature2.jpg',
    '/images/food3.jpg',
    '/images/nature3.jpg'
  ]
  </script>
  