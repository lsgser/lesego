<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types/portfolio'

defineProps<{
  projects: Project[]
}>()

const activeProject = ref<string | null>(null)

function handleTilt(e: MouseEvent, el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`
}

function resetTilt(el: HTMLElement) {
  el.style.transform = ''
}

function toggleProject(title: string) {
  activeProject.value = activeProject.value === title ? null : title
}
</script>

<template>
  <section id="projects" class="projects">
    <div class="section-container">
      <span class="section-label" data-reveal>Projects</span>
      <h2 class="section-title" data-reveal>Selected work</h2>

      <div class="projects__grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card"
          :class="{
            'project-card--featured': project.featured,
            'project-card--active': activeProject === project.title,
          }"
          data-reveal
          :style="{ transitionDelay: `${index * 0.08}s` }"
          @mousemove="handleTilt($event, $event.currentTarget as HTMLElement)"
          @mouseleave="resetTilt($event.currentTarget as HTMLElement)"
          @click="toggleProject(project.title)"
        >
          <div class="project-card__header">
            <div class="project-card__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div class="project-card__links" @click.stop>
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live site"
                class="project-card__link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          <h3 class="project-card__title">{{ project.title }}</h3>
          <p
            class="project-card__description"
            :class="{ 'project-card__description--expanded': activeProject === project.title }"
          >
            {{ project.description }}
          </p>

          <div class="project-card__tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <span class="project-card__hint">
            {{ activeProject === project.title ? 'Click to collapse' : 'Click to expand' }}
          </span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 6rem 0;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  transform-style: preserve-3d;
  will-change: transform;
}

.project-card:hover,
.project-card--active {
  border-color: var(--color-border-hover);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
}

.project-card--featured {
  border-color: rgba(224, 122, 95, 0.25);
}

.project-card--featured:hover,
.project-card--featured.project-card--active {
  border-color: var(--color-accent);
}

.project-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-card__icon {
  color: var(--color-accent);
}

.project-card__links {
  display: flex;
  gap: 0.75rem;
}

.project-card__link {
  color: var(--color-text-muted);
  transition: var(--transition);
  padding: 0.375rem;
  border-radius: var(--radius-sm);
}

.project-card__link:hover {
  color: var(--color-accent);
  background: var(--color-accent-soft);
}

.project-card__title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
}

.project-card__description {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: var(--transition);
}

.project-card__description--expanded {
  -webkit-line-clamp: unset;
  display: block;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.project-card__hint {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.project-card:hover .project-card__hint,
.project-card--active .project-card__hint {
  opacity: 1;
}
</style>
