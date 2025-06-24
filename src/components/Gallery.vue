<template>
  <div class="board-card p-6 relative text-center">
    <h2 class="text-2xl font-bold mb-4">🍙 我的圖片集</h2>

    <!-- 圖片展示區 -->
    <div class="relative flex items-center justify-center">
      <!-- 左側預覽圖 -->
      <div
        class="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 opacity-40 cursor-pointer w-1/4 z-10"
        @click="handlePrev"
      >
        <img :src="prevImage" class="rounded shadow" />
      </div>

      <!-- 主圖 -->
      <div class="z-20 w-full md:w-2/3">
        <img
          :src="images[currentIndex]"
          class="mx-auto rounded shadow"
          style="max-height: 400px; object-fit: contain;"
        />
      </div>

      <!-- 右側預覽圖 -->
      <div
        class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 opacity-40 cursor-pointer w-1/4 z-10"
        @click="handleNext"
      >
        <img :src="nextImage" class="rounded shadow" />
      </div>

      <!-- 左右箭頭按鈕 -->
      <button
        @click="handlePrev"
        class="nav-arrow left-4"
      >‹</button>
      <button
        @click="handleNext"
        class="nav-arrow right-4"
      >›</button>
    </div>

    <!-- 小圓點導覽 -->
    <div class="flex justify-center mt-4 gap-2">
      <button
        v-for="(img, index) in images"
        :key="index"
        @click="goTo(index)"
        :class="[
          'w-3 h-3 rounded-full border-2',
          index === currentIndex ? 'bg-yellow-800 border-yellow-900' : 'bg-white border-gray-500'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,gif}', { eager: true })
const images = Object.values(imageModules).map(mod => mod.default)

const currentIndex = ref(0)
let timer = null

const resetTimer = () => {
  clearInterval(timer)
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 5000)
}

const handleNext = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
  resetTimer()
}

const handlePrev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  resetTimer()
}

const goTo = (index) => {
  currentIndex.value = index
  resetTimer()
}

const prevImage = computed(() => {
  return images[(currentIndex.value - 1 + images.length) % images.length]
})

const nextImage = computed(() => {
  return images[(currentIndex.value + 1) % images.length]
})

onMounted(() => {
  resetTimer()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.board-card {
  background-color: #f5deb3;
  border: 4px solid #8b5e3c;
  border-radius: 12px;
  box-shadow: inset 0 0 5px #5c3b1f;
}
.nav-arrow {
  @apply absolute top-1/2 -translate-y-1/2 bg-yellow-700 text-white text-2xl rounded-full w-8 h-8 flex items-center justify-center shadow z-30;
}
</style>
