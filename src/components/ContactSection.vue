<script setup lang="ts">
import { ref } from 'vue'
import type { SocialLink } from '@/types/portfolio'

const props = defineProps<{
  email: string
  socialLinks: SocialLink[]
}>()

const copied = ref(false)
let copyTimeout: ReturnType<typeof setTimeout> | null = null

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(props.email)
    copied.value = true
    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    window.location.href = `mailto:${props.email}`
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="section-container">
      <span class="section-label" data-reveal><em>//</em> contact</span>
      <h2 class="section-title contact__title" data-reveal>
        Let's build<br /><span class="section-title--stroke">something.</span>
      </h2>

      <button class="contact__email" data-reveal @click="copyEmail">
        {{ email }}
        <span class="contact__hint">{{ copied ? 'Copied to clipboard' : 'Tap to copy' }}</span>
      </button>

      <div class="contact__social" data-reveal>
        <a
          v-for="link in socialLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__social-link link-arrow"
        >
          {{ link.label }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: var(--section-y) 0 calc(var(--section-y) + var(--safe-bottom));
  border-top: 1px solid var(--color-border);
}

.contact__title {
  margin-bottom: 2.5rem;
}

.contact__email {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  text-align: left;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 5vw, 2.25rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  word-break: break-all;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition);
}

.contact__email:hover {
  color: var(--color-accent);
}

.contact__hint {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.contact__social {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 640px) {
  .contact__social {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>
