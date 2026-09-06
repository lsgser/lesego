<script setup lang="ts">
import { ref } from 'vue'
import type { SocialLink } from '@/types/portfolio'

const props = defineProps<{
  email: string
  socialLinks: SocialLink[]
}>()

const copied = ref(false)
let copyTimeout: ReturnType<typeof setTimeout> | null = null

const iconPaths: Record<SocialLink['icon'], string> = {
  github:
    'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3 .405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.062 2.062 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  twitter:
    'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  email:
    'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
}

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
      <div class="contact__inner">
        <span class="section-label" data-reveal>Contact</span>
        <h2 class="section-title" data-reveal>Let's work together</h2>
        <p class="contact__text" data-reveal>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          something great.
        </p>

        <button class="contact__email" data-reveal @click="copyEmail">
          <span>{{ email }}</span>
          <span class="contact__copy-badge" :class="{ 'contact__copy-badge--copied': copied }">
            {{ copied ? 'Copied!' : 'Click to copy' }}
          </span>
        </button>

        <div class="contact__social" data-reveal>
          <a
            v-for="link in socialLinks"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="contact__social-link"
            :aria-label="link.label"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path :d="iconPaths[link.icon]" />
            </svg>
            <span class="contact__social-label">{{ link.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 6rem 0 8rem;
}

.contact__inner {
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}

.contact__text {
  font-size: 1.0625rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
}

.contact__email {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 2.5rem;
  padding: 1rem 1.5rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}

.contact__email:hover {
  border-color: var(--color-accent);
  background: var(--color-accent-soft);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.contact__copy-badge {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  transition: color 0.25s ease;
}

.contact__copy-badge--copied {
  color: #6ee7a0;
}

.contact__social {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.contact__social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  color: var(--color-text-muted);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: var(--transition);
  min-width: 100px;
}

.contact__social-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: var(--color-accent-soft);
  transform: translateY(-4px);
}

.contact__social-label {
  font-size: 0.75rem;
  font-weight: 600;
}
</style>
