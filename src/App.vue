<!-- src/App.vue -->
<template>
  <div id="app" class="font-sans text-gray-800 bg-gradient-to-br from-pink-100 to-blue-100 min-h-screen">
    <!-- 可選導覽列 -->
    <!-- <Navbar /> -->

    <Gallery />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
// 匯入所有元件
import Gallery from './components/Gallery.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

// 你也可以額外做個 Navbar.vue 加入
// import Navbar from './components/Navbar.vue'
</script>

<style>
/* 可選全域動畫樣式，這邊留白給你之後加 Animate.css 或其他動畫庫 */
</style>
