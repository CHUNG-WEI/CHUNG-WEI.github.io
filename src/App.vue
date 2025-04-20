<!-- src/App.vue -->
<template>
  <div class="outer-wrapper">
    <AppLoading />
    <BackgroundEffect />
    <div class="inner-app mx-auto px-4">
      <!-- 可選導覽列 -->
      <!-- <Navbar /> -->
      <section v-fade-slide>
        <Gallery />
      </section>
      <section v-fade-slide>
        <About />
      </section>     
      <section v-fade-slide>
        <Skills />
      </section>
      <section v-fade-slide>
        <Projects />
      </section>
      <section v-fade-slide>
        <Contact />
      </section>
    </div>
  </div>
</template>

<script setup>
// 匯入所有元件
import AppLoading from './components/AppLoading.vue'
import Gallery from './components/Gallery.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import BackgroundEffect from './components/BackgroundEffect.vue'

// 可以額外做個 Navbar.vue 加入
// import Navbar from './components/Navbar.vue'
</script>

<style>
/* 可選全域動畫樣式，這邊留白之後加 Animate.css 或其他動畫庫 */
.outer-wrapper {
  position: relative;
  z-index: 0;
}

.inner-app {
  background-color: #f2e5d7;
  /* 比外層稍深 */
  z-index: 1;
  position: relative;
}
</style>
