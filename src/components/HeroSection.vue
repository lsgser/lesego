<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineProps<{
  name: string
  title: string
  tagline: string
}>()

const glowOffset = ref({ x: 0, y: 0 })
const heroRef = ref<HTMLElement | null>(null)

function onMouseMove(e: MouseEvent) {
  if (!heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 60
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 60
  glowOffset.value = { x, y }
}

onMounted(() => {
  heroRef.value?.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  heroRef.value?.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <section ref="heroRef" class="hero">
    <div
      class="hero__glow"
      aria-hidden="true"
      :style="{ transform: `translate(${glowOffset.x}px, ${glowOffset.y}px)` }"
    />
    <div class="hero__grid" aria-hidden="true" />

    <div class="hero__content section-container">
      <div class="hero__layout">
        <div class="hero__text">
          <p class="hero__greeting">Hello, I'm</p>
          <h1 class="hero__name">{{ name }}</h1>
          <p class="hero__title">{{ title }}</p>
          <p class="hero__tagline">{{ tagline }}</p>

          <div class="hero__actions">
            <a href="#projects" class="btn btn-primary hero__btn">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" class="btn btn-outline">Get In Touch</a>
          </div>
        </div>

        <div class="hero__avatar-wrap">
          <div class="hero__avatar-ring" aria-hidden="true" />
          <img
            src="/avatar.png"
            :alt="`${name} — portfolio avatar`"
            class="hero__avatar"
            width="280"
            height="280"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>

    <a href="#about" class="hero__scroll" aria-label="Scroll to about section">
      <span>Scroll</span>
      <div class="hero__scroll-line" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-height);
  overflow: hidden;
}

.hero__glow {
  position: absolute;
  top: 20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%);
  pointer-events: none;
  transition: transform 0.4s ease-out;
  will-change: transform;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%);
  pointer-events: none;
}

.hero__content {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 6rem;
}

.hero__layout {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 3rem;
}

.hero__text {
  min-width: 0;
}

.hero__avatar-wrap {
  position: relative;
  flex-shrink: 0;
  animation: fadeUp 0.6s 0.25s ease both;
}

.hero__avatar-ring {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  background: conic-gradient(from 180deg, var(--color-accent), transparent, var(--color-accent));
  opacity: 0.45;
  animation: spin 8s linear infinite;
}

.hero__avatar {
  position: relative;
  display: block;
  width: clamp(180px, 22vw, 280px);
  height: clamp(180px, 22vw, 280px);
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-border-hover);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.hero__avatar-wrap:hover .hero__avatar {
  transform: scale(1.03);
  box-shadow: 0 28px 72px var(--color-accent-glow);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.hero__greeting {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  animation: fadeUp 0.6s ease both;
}

.hero__name {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 8vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  animation: fadeUp 0.6s 0.1s ease both;
  background: linear-gradient(135deg, var(--color-text) 0%, var(--color-text-muted) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 600;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
  animation: fadeUp 0.6s 0.2s ease both;
}

.hero__tagline {
  max-width: 520px;
  font-size: 1.0625rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  animation: fadeUp 0.6s 0.3s ease both;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  animation: fadeUp 0.6s 0.4s ease both;
}

.hero__btn svg {
  transition: transform 0.25s ease;
}

.hero__btn:hover svg {
  transform: translateX(4px);
}

.hero__scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  animation: fadeUp 0.6s 0.6s ease both;
  transition: color 0.25s ease;
}

.hero__scroll:hover {
  color: var(--color-accent);
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  animation: scrollPulse 2s ease infinite;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollPulse {
  0%,
  100% {
    opacity: 0.4;
    transform: scaleY(0.6);
    transform-origin: top;
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: top;
  }
}

@media (max-width: 900px) {
  .hero__layout {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__avatar-wrap {
    order: -1;
    justify-self: center;
  }

  .hero__tagline {
    margin-left: auto;
    margin-right: auto;
  }

  .hero__actions {
    justify-content: center;
  }
}

@media (max-width: 900px) {
  .hero__layout {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__avatar-wrap {
    order: -1;
    justify-self: center;
  }

  .hero__tagline {
    margin-left: auto;
    margin-right: auto;
  }

  .hero__actions {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero__scroll {
    display: none;
  }
}
</style>
