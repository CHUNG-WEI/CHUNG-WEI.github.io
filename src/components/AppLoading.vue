<template>
  <div v-if="show" class="loading-screen">
    <div class="typing-text">
      {{ visibleText }}<span class="cursor">|</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(true)
const fullText = 'No Game No Life'
const visibleText = ref('')
let index = 0

onMounted(() => {
  const interval = setInterval(() => {
    if (index < fullText.length) {
      visibleText.value += fullText[index++]
    } else {
      clearInterval(interval)
        setTimeout(() => {
          show.value = false
        }, 3000) // 結束後延遲淡出
    }
  }, 150)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #f3e5ab, #fdf6ee);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 1.5s ease-in 2.5s forwards;
}

.typing-text {
  font-size: 2rem;
  color: #6f4e37;
  font-family: 'Courier New', monospace;
  white-space: nowrap;
  overflow: hidden;
}

.cursor {
  display: inline-block;
  animation: blink 1s step-start infinite;
  color: #6f4e37;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>