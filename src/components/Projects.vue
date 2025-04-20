<!-- src/components/Projects.vue -->
<template>
    <section class="py-12 px-4 bg-pink-100 text-center">
      <h2 class="text-3xl font-bold mb-6 text-pink-700">🎨 我的作品</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(project, idx) in projects"
          :key="idx"
          class="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
        >
          <h3 class="text-xl font-semibold mb-2 text-gray-700">{{ project.title }}</h3>
          <p class="text-sm text-gray-500 mb-2">{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="text-blue-500 hover:underline">查看專案</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const projects = [
    { title: '個人履歷網站', description: '使用 Vue + Vite 建置的個人展示網站', link: '#' },
    { title: '圖片展示畫廊', description: '具有動畫效果的圖片集展示', link: '#' },
    { title: '作品集頁面', description: '展示你過往的實作成果', link: '#' }
  ]
  </script>
  