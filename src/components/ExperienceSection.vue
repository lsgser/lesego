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
      <span class="section-label" data-reveal>Experience</span>
      <h2 class="section-title" data-reveal>Where I've worked</h2>

      <div class="experience__list" data-reveal>
        <article
          v-for="(job, index) in experience"
          :key="`${job.company}-${job.role}`"
          class="experience__item"
          :class="{ 'experience__item--expanded': isExpanded(index) }"
        >
          <button
            class="experience__trigger"
            :aria-expanded="isExpanded(index)"
            @click="toggle(index)"
          >
            <div class="experience__trigger-main">
              <time class="experience__period">{{ job.period }}</time>
              <h3 class="experience__role">{{ job.role }}</h3>
              <p class="experience__company">{{ job.company }}</p>
            </div>
            <span class="experience__chevron" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>

          <div class="experience__panel">
            <p class="experience__description">{{ job.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 6rem 0;
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.experience__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.experience__item {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
}

.experience__item:hover {
  border-color: var(--color-border-hover);
}

.experience__item--expanded {
  border-color: rgba(224, 122, 95, 0.35);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.experience__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  text-align: left;
  color: inherit;
  transition: background 0.25s ease;
}

.experience__trigger:hover {
  background: rgba(255, 255, 255, 0.02);
}

.experience__trigger-main {
  flex: 1;
}

.experience__period {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.375rem;
}

.experience__role {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.experience__company {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-muted);
}

.experience__chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  color: var(--color-text-muted);
  background: var(--color-bg-elevated);
  border-radius: 50%;
  transition: var(--transition);
}

.experience__item--expanded .experience__chevron {
  transform: rotate(180deg);
  color: var(--color-accent);
  background: var(--color-accent-soft);
}

.experience__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}

.experience__item--expanded .experience__panel {
  grid-template-rows: 1fr;
}

.experience__panel > .experience__description {
  min-height: 0;
  overflow: hidden;
}

.experience__description {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  padding: 0 1.75rem 1.5rem;
  margin: 0;
  opacity: 0;
  transition: opacity 0.3s ease 0.05s;
}

.experience__item--expanded .experience__description {
  opacity: 1;
}
</style>
