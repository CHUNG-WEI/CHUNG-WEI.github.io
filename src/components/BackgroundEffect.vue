<template>
  <div class="background-effect">
    <div
      v-for="n in 30"
      :key="n"
      class="bubble"
      :style="generateBubbleStyle(n)"
    ></div>
    <div class="gradient-bg"></div>
  </div>
</template>

<script setup>
function generateBubbleStyle(n) {
  const delay = (Math.random() * 10).toFixed(2)
  const size = Math.floor(Math.random() * 60) + 30
  const isLeft = n % 2 === 0
  const sideOffset = Math.random() * 20
  const left = isLeft
    ? `${sideOffset}%`
    : `${80 + sideOffset}%` // 控制左右分布，不生成中間

  return {
    left,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
  }
}
</script>

<style>
.background-effect {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

/* 浮動泡泡 */
.bubble {
  position: absolute;
  bottom: -100px;
  background: rgba(111, 78, 55, 0.3);
  border-radius: 50%;
  animation: rise 12s infinite ease-in;
  filter: blur(1px);
}

@keyframes rise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-1200px) scale(1.4);
    opacity: 0;
  }
}

/* 背景漸層光暈 */
.gradient-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #d2b48c 0%, #f5f5dc 100%);
  opacity: 0.5;
  z-index: -1;
}
</style>