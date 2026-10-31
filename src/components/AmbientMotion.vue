<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const scrollY = ref(0)

function onScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="ambient" aria-hidden="true">
    <div
      class="ambient__orb ambient__orb--1"
      :style="{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }"
    />
    <div
      class="ambient__orb ambient__orb--2"
      :style="{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }"
    />
    <div
      class="ambient__orb ambient__orb--3"
      :style="{ transform: `translate3d(0, ${scrollY * 0.03}px, 0)` }"
    />
    <div class="ambient__grain" />
    <div class="ambient__vignette" />
  </div>
</template>

<style scoped>
.ambient {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.ambient__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.55;
  will-change: transform;
}

.ambient__orb--1 {
  top: -8rem;
  left: -4rem;
  width: min(85vw, 22rem);
  height: min(85vw, 22rem);
  background: radial-gradient(circle, rgba(224, 122, 95, 0.45) 0%, transparent 70%);
  animation: drift-a 18s ease-in-out infinite;
}

.ambient__orb--2 {
  top: 35%;
  right: -6rem;
  width: min(90vw, 26rem);
  height: min(90vw, 26rem);
  background: radial-gradient(circle, rgba(120, 90, 255, 0.22) 0%, transparent 70%);
  animation: drift-b 22s ease-in-out infinite;
}

.ambient__orb--3 {
  bottom: -10rem;
  left: 20%;
  width: min(80vw, 20rem);
  height: min(80vw, 20rem);
  background: radial-gradient(circle, rgba(242, 204, 143, 0.18) 0%, transparent 70%);
  animation: drift-c 26s ease-in-out infinite;
}

.ambient__grain {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.ambient__vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(10, 10, 15, 0.65) 100%);
}

@keyframes drift-a {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(24px, 32px) scale(1.08);
  }
}

@keyframes drift-b {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-28px, 20px) scale(1.05);
  }
}

@keyframes drift-c {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(16px, -24px) scale(1.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ambient__orb {
    animation: none;
  }
}
</style>
