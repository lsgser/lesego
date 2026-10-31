<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types/portfolio'

defineProps<{
  projects: Project[]
}>()

const activeIndex = ref<number | null>(null)

function toggle(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index
}

function padIndex(index: number) {
  return String(index + 1).padStart(2, '0')
}
</script>

<template>
  <section id="projects" class="projects">
    <div class="section-container">
      <span class="section-label" data-reveal><em>//</em> selected work</span>
      <h2 class="section-title" data-reveal>
        Projects<span class="section-title--stroke">.</span>
      </h2>

      <ul class="projects__list">
        <li
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-row"
          :class="{ 'project-row--open': activeIndex === index }"
          data-reveal
          :style="{ transitionDelay: `${index * 0.06}s` }"
        >
          <button class="project-row__trigger" @click="toggle(index)">
            <span class="project-row__index">{{ padIndex(index) }}</span>
            <span class="project-row__title">{{ project.title }}</span>
            <span class="project-row__toggle" aria-hidden="true">
              {{ activeIndex === index ? '−' : '+' }}
            </span>
          </button>

          <div class="project-row__panel">
            <div class="project-row__panel-inner">
              <p class="project-row__description">{{ project.description }}</p>
              <div class="project-row__tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="project-row__links">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="link-arrow"
              >
                Live site
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              <a
                v-if="project.repoUrl"
                :href="project.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="link-arrow"
              >
                Repository
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: var(--section-y) 0;
  border-top: 1px solid var(--color-border);
}

.projects__list {
  list-style: none;
}

.project-row {
  border-bottom: 1px solid var(--color-border);
}

.project-row__trigger {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  text-align: left;
  color: inherit;
  transition: color var(--transition);
}

.project-row__trigger:hover {
  color: var(--color-accent);
}

.project-row__index {
  font-family: var(--font-display);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
}

.project-row__title {
  font-family: var(--font-display);
  font-size: clamp(1.375rem, 5vw, 2.75rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

.project-row__toggle {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-text-muted);
  width: 2rem;
  text-align: center;
}

.project-row__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--transition);
}

.project-row--open .project-row__panel {
  grid-template-rows: 1fr;
}

.project-row__panel > .project-row__panel-inner {
  overflow: hidden;
}

.project-row__description {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  max-width: 42rem;
  padding-bottom: 1rem;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.project-row--open .project-row__description {
  opacity: 1;
}

.project-row__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-bottom: 1.25rem;
  opacity: 0;
  transition: opacity 0.35s ease 0.05s;
}

.project-row--open .project-row__tags {
  opacity: 1;
}

.project-row__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  opacity: 0;
  transition: opacity 0.35s ease 0.08s;
}

.project-row--open .project-row__links {
  opacity: 1;
}

@media (min-width: 768px) {
  .project-row__trigger {
    padding: 1.75rem 0;
    gap: 2rem;
  }
}
</style>
