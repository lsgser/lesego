<script setup lang="ts">
import type { AboutHighlight } from '@/types/portfolio'

defineProps<{
  about: string[]
  highlights: AboutHighlight[]
}>()
</script>

<template>
  <section id="about" class="about">
    <div class="section-container">
      <span class="section-label" data-reveal><em>//</em> about</span>
      <h2 class="section-title" data-reveal>
        A bit <span class="section-title--stroke">about me</span>
      </h2>

      <div class="about__layout">
        <div class="about__text">
          <p
            v-for="(paragraph, index) in about"
            :key="index"
            class="about__paragraph"
            :class="{ 'about__paragraph--lead': index === 0 }"
            data-reveal
          >
            {{ paragraph }}
          </p>
        </div>

        <aside class="about__aside" data-reveal>
          <ul class="about__list">
            <li v-for="item in highlights" :key="item.label" class="about__list-item">
              <span class="about__list-label">{{ item.label }}</span>
              <a
                v-if="item.href"
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                class="about__list-value about__list-value--link"
              >
                {{ item.value }}
              </a>
              <span v-else class="about__list-value">{{ item.value }}</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: var(--section-y) 0;
}

.about__layout {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.about__paragraph {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  max-width: 40rem;
}

.about__paragraph + .about__paragraph {
  margin-top: 1.25rem;
}

.about__paragraph--lead {
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 4vw, 1.375rem);
  color: var(--color-text);
  line-height: 1.55;
  letter-spacing: -0.02em;
}

.about__aside {
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
}

.about__list {
  list-style: none;
  display: grid;
  gap: 1.25rem;
}

.about__list-label {
  display: block;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 0.375rem;
}

.about__list-value {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 600;
}

.about__list-value--link:hover {
  color: var(--color-accent);
}

@media (min-width: 900px) {
  .about__layout {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 4rem;
    align-items: start;
  }

  .about__aside {
    border-top: none;
    border-left: 1px solid var(--color-border);
    padding-top: 0;
    padding-left: 2rem;
  }
}
</style>
