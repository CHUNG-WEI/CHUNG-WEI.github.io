<template>
  <section class="container py-5">
    <h2 class="text-center mb-4 text-primary">🍙 我的圖片集</h2>

    <div class="position-relative mx-auto" style="max-width: 75%;">
      <!-- 主圖 + 預覽 -->
      <div class="d-flex justify-content-center align-items-center position-relative overflow-hidden" style="min-height: 400px;">
        <!-- 左預覽圖 -->
        <div
          class="position-absolute start-0 top-50 translate-middle-y d-none d-md-block"
          style="width: 25%; opacity: 0.4; z-index: 2; cursor: pointer;"
          @click="handlePrev"
        >
          <img :src="prevImage" class="img-fluid rounded shadow-sm" style="max-height: 300px; object-fit: cover;" />
        </div>

        <!-- 主圖 -->
        <div class="z-3 d-flex justify-content-center">
          <img
            :src="images[currentIndex]"
            class="img-fluid rounded shadow"
            :style="{ maxHeight: '400px', height: 'auto', width: 'auto', maxWidth: '100%' }"
          />
        </div>

        <!-- 右預覽圖 -->
        <div
          class="position-absolute end-0 top-50 translate-middle-y d-none d-md-block"
          style="width: 25%; opacity: 0.4; z-index: 2; cursor: pointer;"
          @click="handleNext"
        >
          <img :src="nextImage" class="img-fluid rounded shadow-sm" style="max-height: 300px; object-fit: cover;" />
        </div>
      </div>

      <!-- 左右箭頭 -->
      <button
        @click="handlePrev"
        class="btn btn-outline-primary position-absolute top-50 start-0 translate-middle-y"
        style="z-index: 10;"
      >
        ‹
      </button>
      <button
        @click="handleNext"
        class="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y"
        style="z-index: 10;"
      >
        ›
      </button>
    </div>

    <!-- 小圓點 -->
    <div class="text-center mt-3">
      <button
        v-for="(img, index) in images"
        :key="index"
        @click="goTo(index)"
        class="btn btn-sm mx-1"
        :class="index === currentIndex ? 'btn-primary' : 'btn-outline-secondary'"
        style="border-radius: 50%; width: 12px; height: 12px; padding: 0;"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// 自動載入 images 資料夾底下的所有圖片
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