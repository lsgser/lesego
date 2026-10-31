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
      <span class="section-label" data-reveal><em>//</em> stack</span>
      <h2 class="section-title" data-reveal>
        Skills<span class="section-title--stroke">& tools</span>
      </h2>

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

      <ul class="skills__grid" data-reveal>
        <li v-for="skill in filteredSkills" :key="skill.name" class="skills__item">
          <span class="skills__name">{{ skill.name }}</span>
          <span class="skills__cat">{{ formatCategories(skill.categories) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: var(--section-y) 0;
  border-top: 1px solid var(--color-border);
}

.skills__filters {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  scrollbar-width: none;
}

.skills__filters::-webkit-scrollbar {
  display: none;
}

.skills__filter {
  flex-shrink: 0;
  min-height: 44px;
  padding: 0.5rem 1rem;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  transition: var(--transition);
}

.skills__filter--active {
  color: var(--color-bg);
  background: var(--color-text);
  border-color: var(--color-text);
}

.skills__grid {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--color-border);
}

.skills__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition);
}

.skills__item:hover {
  color: var(--color-accent);
}

.skills__name {
  font-family: var(--font-display);
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.skills__cat {
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  text-align: right;
}

@media (min-width: 640px) {
  .skills__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
}
</style>
