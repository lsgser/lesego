<script setup lang="ts">
import { watch } from 'vue'
import type { NavLink } from '@/types/portfolio'

const props = defineProps<{
  name: string
  navLinks: NavLink[]
  activeSection: string
}>()

const isMenuOpen = defineModel<boolean>('menuOpen', { default: false })

function closeMenu() {
  isMenuOpen.value = false
}

function sectionId(href: string) {
  return href.replace('#', '')
}

function isActive(href: string) {
  return sectionId(href) === props.activeSection
}

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <header class="nav" :class="{ 'nav--open': isMenuOpen }">
    <div class="nav__inner section-container">
      <a href="#top" class="nav__logo" @click="closeMenu">
        {{ name.split(' ')[0] ?? name }}
      </a>

      <nav class="nav__links" :class="{ 'nav__links--open': isMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav__link"
          :class="{ 'nav__link--active': isActive(link.href) }"
          @click="closeMenu"
        >
          <span class="nav__link-text">{{ link.label }}</span>
        </a>
      </nav>

      <button
        class="nav__toggle"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span>{{ isMenuOpen ? 'Close' : 'Menu' }}</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  background: rgba(8, 7, 11, 0.72);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition);
}

.nav--open {
  border-bottom-color: var(--color-border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav__logo {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.nav__links {
  display: none;
}

.nav__toggle {
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: 999px;
}

.nav__link {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 8vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--color-text-muted);
  transition: color var(--transition);
}

.nav__link--active,
.nav__link:hover {
  color: var(--color-text);
}

.nav__link--active .nav__link-text {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .nav__links {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: fixed;
    inset: var(--nav-height) 0 0 0;
    padding: 2rem 1.125rem;
    background: rgba(8, 7, 11, 0.96);
    transform: translateX(100%);
    transition: transform var(--transition);
  }

  .nav__links--open {
    transform: translateX(0);
  }
}

@media (min-width: 769px) {
  .nav__toggle {
    display: none;
  }

  .nav__links {
    display: flex;
    align-items: center;
    gap: 2rem;
    position: static;
    padding: 0;
    background: transparent;
    transform: none;
    flex-direction: row;
  }

  .nav__link {
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .nav__link--active .nav__link-text {
    color: var(--color-accent);
  }
}
</style>
