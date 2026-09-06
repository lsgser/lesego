<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Skill, SkillCategory } from '@/types/portfolio'

const props = defineProps<{
  skills: Skill[]
}>()

const categories = [
  { key: 'all' as const, label: 'All' },
  { key: 'frontend' as const, label: 'Frontend' },
  { key: 'backend' as const, label: 'Backend' },
  { key: 'tools' as const, label: 'Tools' },
  { key: 'other' as const, label: 'Other' },
]

const activeFilter = ref<'all' | SkillCategory>('all')
const hoveredSkill = ref<string | null>(null)

const filteredSkills = computed(() => {
  const filter = activeFilter.value
  if (filter === 'all') return props.skills
  return props.skills.filter((s) => s.categories.includes(filter))
})

const availableCategories = computed(() =>
  categories.filter(
    (cat) => cat.key === 'all' || props.skills.some((s) => s.categories.includes(cat.key)),
  ),
)

function formatCategories(categories: SkillCategory[]) {
  return categories.join(' · ')
}
</script>

<template>
  <section id="skills" class="skills">
    <div class="section-container">
      <span class="section-label" data-reveal>Skills</span>
      <h2 class="section-title" data-reveal>Technologies I work with</h2>

      <div class="skills__filters" data-reveal>
        <button
          v-for="cat in availableCategories"
          :key="cat.key"
          class="skills__filter"
          :class="{ 'skills__filter--active': activeFilter === cat.key }"
          @click="activeFilter = cat.key"
        >
          {{ cat.label }}
        </button>
      </div>

      <TransitionGroup name="skill" tag="ul" class="skills__cloud" data-reveal>
        <li
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="skills__pill"
          :class="{ 'skills__pill--hovered': hoveredSkill === skill.name }"
          @mouseenter="hoveredSkill = skill.name"
          @mouseleave="hoveredSkill = null"
        >
          <span class="skills__pill-name">{{ skill.name }}</span>
          <span class="skills__pill-cat">{{ formatCategories(skill.categories) }}</span>
        </li>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 6rem 0;
  background: var(--color-bg-elevated);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.skills__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-bottom: 2rem;
}

.skills__filter {
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-muted);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  transition: var(--transition);
}

.skills__filter:hover {
  color: var(--color-text);
  border-color: var(--color-border-hover);
}

.skills__filter--active {
  color: #fff;
  background: var(--color-accent);
  border-color: var(--color-accent);
}

.skills__cloud {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skills__pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: default;
  transition: var(--transition);
}

.skills__pill:hover,
.skills__pill--hovered {
  border-color: var(--color-accent);
  background: var(--color-accent-soft);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.skills__pill-name {
  font-size: 0.9375rem;
  font-weight: 600;
}

.skills__pill-cat {
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-muted);
  padding: 0.125rem 0.375rem;
  background: var(--color-bg-elevated);
  border-radius: 4px;
}

.skills__pill:hover .skills__pill-cat {
  color: var(--color-accent);
}

.skill-enter-active,
.skill-leave-active {
  transition: all 0.3s ease;
}

.skill-enter-from,
.skill-leave-to {
  opacity: 0;
  transform: scale(0.85);
}

.skill-move {
  transition: transform 0.3s ease;
}
</style>
