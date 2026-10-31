<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee__track marquee__track--forward">
      <span v-for="n in 2" :key="`a-${n}`" class="marquee__group">
        <span v-for="item in items" :key="`${n}-${item}`" class="marquee__item">{{ item }}</span>
      </span>
    </div>
    <div class="marquee__track marquee__track--reverse">
      <span v-for="n in 2" :key="`b-${n}`" class="marquee__group">
        <span v-for="item in items" :key="`${n}-r-${item}`" class="marquee__item marquee__item--muted">{{ item }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  border-block: 1px solid var(--color-border);
  background: rgba(8, 7, 11, 0.6);
  overflow: hidden;
  padding: 0.875rem 0;
}

.marquee__track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.marquee__track--forward {
  animation: marquee 38s linear infinite;
}

.marquee__track--reverse {
  animation: marquee 44s linear infinite reverse;
  margin-top: 0.5rem;
}

.marquee__group {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-right: 2rem;
}

.marquee__item {
  font-family: var(--font-display);
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--color-text);
}

.marquee__item--muted {
  color: var(--color-text-muted);
  font-weight: 500;
}

.marquee__item::before {
  content: '◆';
  margin-right: 0.75rem;
  font-size: 0.5rem;
  color: var(--color-accent);
  vertical-align: middle;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
  }
}
</style>
