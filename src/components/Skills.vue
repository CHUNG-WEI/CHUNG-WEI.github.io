<template>
  <section class="container py-5">
    <h2 class="text-center mb-4 text-primary">🛠 我的技能</h2>
    <div class="row">
      <div class="col-md-6 mb-4" v-for="category in skillCategories" :key="category.title">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-primary">{{ category.title }}</h5>
            <ul class="list-unstyled mb-0">
              <li v-for="skill in category.items" :key="skill">• {{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
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