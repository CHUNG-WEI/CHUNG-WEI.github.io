<template>
  <div class="board-card p-4">
    <h2 class="text-2xl font-bold text-center mb-4">🛠 我的技能</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="category in skillCategories" :key="category.title" class="skill-category p-3 border-b-2 border-dashed border-yellow-700">
        <h3 class="text-lg font-semibold mb-2">{{ category.title }}</h3>
        <ul class="list-disc list-inside space-y-1">
          <li v-for="skill in category.items" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const skillCategories = [
  {
    title: '熟練使用',
    items: [
      'Vue.js', 'HTML5', 'CSS3', 'Bootstrap',
      'Node.js', 'Fastify', 'Git', 'Unity'
    ]
  },
  {
    title: '常用工具 / 技術',
    items: [
      'MariaDB', 'Sequelize ORM', 'Docker',
      'NAS', 'Shell Script'
    ]
  },
  {
    title: '略懂 / 曾接觸',
    items: [
      'Express.js', 'C++', 'Java', 'Python', 'SQL'
    ]
  }
]
</script>

<style scoped>
.board-card {
  background-color: #f5deb3; /* 淺木色背景 */
  border: 4px solid #8b5e3c;
  border-radius: 12px;
  box-shadow: inset 0 0 5px #5c3b1f;
}
.skill-category {
  background-color: #fdf5e6;
  border-radius: 8px;
}
</style>
