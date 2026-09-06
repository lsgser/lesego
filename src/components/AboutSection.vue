<script setup lang="ts">
defineProps<{
  about: string[]
  location: string
}>()
</script>

<template>
  <section id="about" class="about">
    <div class="section-container">
      <span class="section-label" data-reveal>About</span>
      <h2 class="section-title" data-reveal>A bit about me</h2>

      <div class="about__grid">
        <div class="about__text">
          <p v-for="(paragraph, index) in about" :key="index" data-reveal :style="{ transitionDelay: `${index * 0.1}s` }">
            {{ paragraph }}
          </p>
        </div>

        <div class="about__card" data-reveal>
          <div class="about__card-item">
            <span class="about__card-label">Location</span>
            <span class="about__card-value">{{ location }}</span>
          </div>
          <div class="about__card-item">
            <span class="about__card-label">Freelancing</span>
            <span class="about__card-value">Since 2018</span>
          </div>
          <div class="about__card-item">
            <span class="about__card-label">Focus</span>
            <span class="about__card-value">Web & mobile development</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 0;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 3rem;
  align-items: start;
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about__text p {
  font-size: 1.0625rem;
  color: var(--color-text-muted);
  line-height: 1.75;
}

.about__card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: var(--transition);
}

.about__card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
}

.about__card-item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 0.75rem;
  margin: -0.75rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.about__card-item:hover {
  background: var(--color-accent-soft);
}

.about__card-item:hover .about__card-value {
  color: var(--color-accent);
}

.about__card-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.about__card-value {
  font-size: 1rem;
  font-weight: 500;
  transition: var(--transition);
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
  }

  .about__card {
    order: -1;
  }
}
</style>
