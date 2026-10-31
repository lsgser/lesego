<script setup lang="ts">
import { ref } from 'vue'
import type { Experience } from '@/types/portfolio'

defineProps<{
  experience: Experience[]
}>()

const expandedIndex = ref(0)

function toggle(index: number) {
  expandedIndex.value = expandedIndex.value === index ? -1 : index
}

function isExpanded(index: number) {
  return expandedIndex.value === index
}
</script>

<template>
  <section id="experience" class="experience">
    <div class="section-container">
      <span class="section-label" data-reveal><em>//</em> experience</span>
      <h2 class="section-title" data-reveal>
        Where I've <span class="section-title--stroke">worked</span>
      </h2>

      <div class="experience__list" data-reveal>
        <article
          v-for="(job, index) in experience"
          :key="`${job.company}-${job.role}`"
          class="experience__item"
          :class="{ 'experience__item--open': isExpanded(index) }"
        >
          <button class="experience__head" @click="toggle(index)">
            <div class="experience__meta">
              <time>{{ job.period }}</time>
              <h3>{{ job.role }}</h3>
              <p>
                <a
                  v-if="job.companyUrl"
                  :href="job.companyUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="experience__company-link"
                  @click.stop
                >
                  {{ job.company }}
                </a>
                <span v-else>{{ job.company }}</span>
              </p>
            </div>
            <span class="experience__toggle">{{ isExpanded(index) ? '−' : '+' }}</span>
          </button>
          <div class="experience__body">
            <p>{{ job.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: var(--section-y) 0;
  border-top: 1px solid var(--color-border);
}

.experience__item {
  border-bottom: 1px solid var(--color-border);
}

.experience__head {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 0;
  text-align: left;
  color: inherit;
}

.experience__meta time {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.experience__meta h3 {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  margin-bottom: 0.25rem;
}

.experience__meta p {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
}

.experience__company-link:hover {
  color: var(--color-accent);
}

.experience__toggle {
  font-size: 1.5rem;
  color: var(--color-text-muted);
  line-height: 1;
}

.experience__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--transition);
}

.experience__item--open .experience__body {
  grid-template-rows: 1fr;
}

.experience__body p {
  overflow: hidden;
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  max-width: 42rem;
  padding-bottom: 1.5rem;
}
</style>
