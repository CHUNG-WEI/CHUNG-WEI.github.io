<template>
  <section class="container py-5">
    <h2 class="text-center text-success mb-4">🎨 我的作品</h2>
    <div class="row g-4">
      <div class="col-md-4" v-for="(project, idx) in projects" :key="idx">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" class="btn btn-outline-primary" target="_blank">查看專案</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: '個人履歷網站', description: '使用 Vue + Bootstrap 建置的個人展示網站', link: '#' },
  { title: '圖片展示畫廊', description: '具有動畫效果的圖片集展示', link: '#' },
  { title: '作品集頁面', description: '展示你過往的實作成果', link: '#' }
]
</script>
