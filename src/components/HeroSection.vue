<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  title: string
  tagline: string
}>()

const nameParts = computed(() => {
  const parts = props.name.split(' ')
  return {
    first: parts[0] ?? props.name,
    last: parts.slice(1).join(' ') || '',
  }
})
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__inner section-container">
      <p class="hero__kicker" data-reveal>
        <em>//</em> portfolio · {{ title }}
      </p>

      <h1 class="hero__title" data-reveal>
        <span class="hero__title-line">{{ nameParts.first }}</span>
        <span v-if="nameParts.last" class="hero__title-line hero__title-line--stroke">{{ nameParts.last }}</span>
      </h1>

      <p class="hero__lead" data-reveal>
        {{ tagline }}
      </p>

      <p class="hero__copy" data-reveal>
        I build software by day: mobile apps, platforms, and open-source Go frameworks. I keep
        pushing ideas into production. You'll find the work, the stack, and the story behind it all
        in this digital space.
      </p>

      <div class="hero__actions" data-reveal>
        <a href="#projects" class="btn btn-text">
          Explore my work
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
        <a href="#contact" class="btn btn-text">
          Get in touch
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div class="hero__meta" data-reveal>
        <img src="/avatar.png" :alt="`${name} avatar`" class="hero__avatar" width="96" height="96" />
        <span class="hero__meta-text">Based in Gauteng, South Africa</span>
      </div>
    </div>

    <a href="#about" class="hero__scroll link-arrow" aria-label="Scroll to about">
      Scroll
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: flex-end;
  padding-top: calc(var(--nav-height) + 2rem);
  padding-bottom: calc(2rem + var(--safe-bottom));
}

.hero__inner {
  width: 100%;
  padding-bottom: 3rem;
}

.hero__kicker {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.hero__kicker em {
  font-style: normal;
  color: var(--color-accent);
  margin-right: 0.375rem;
}

.hero__title {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  margin-bottom: 1.75rem;
}

.hero__title-line {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 14vw, 7.5rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 0.92;
}

.hero__title-line--stroke {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
}

.hero__lead {
  max-width: 34rem;
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 4vw, 1.625rem);
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.hero__copy {
  max-width: 36rem;
  font-size: clamp(0.9375rem, 3.5vw, 1.0625rem);
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 2rem;
}

.hero__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.hero__meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.hero__avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--color-border-hover);
}

.hero__meta-text {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.hero__scroll {
  position: absolute;
  right: 1.125rem;
  bottom: calc(1.5rem + var(--safe-bottom));
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

@media (min-width: 768px) {
  .hero {
    align-items: center;
  }

  .hero__inner {
    padding-bottom: 0;
  }

  .hero__actions {
    flex-direction: row;
    gap: 2.5rem;
  }

  .hero__scroll {
    right: 2rem;
  }
}
</style>
