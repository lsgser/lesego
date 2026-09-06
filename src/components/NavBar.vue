<script setup lang="ts">
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
</script>

<template>
  <header class="nav">
    <div class="nav__inner section-container">
      <a href="#" class="nav__logo" @click="closeMenu">
        <span class="nav__logo-accent">{{ name.charAt(0) }}</span>
        <span class="nav__logo-text">{{ name.split(' ')[0] ?? name }}</span>
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
          {{ link.label }}
        </a>
      </nav>

      <button
        class="nav__toggle"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="nav__toggle-bar" :class="{ 'nav__toggle-bar--open': isMenuOpen }" />
        <span class="nav__toggle-bar" :class="{ 'nav__toggle-bar--open': isMenuOpen }" />
        <span class="nav__toggle-bar" :class="{ 'nav__toggle-bar--open': isMenuOpen }" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 3px;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  background: rgba(10, 10, 15, 0.82);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.125rem;
  transition: var(--transition);
}

.nav__logo:hover {
  opacity: 0.85;
}

.nav__logo-accent {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-accent);
  color: #fff;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  transition: var(--transition);
}

.nav__logo:hover .nav__logo-accent {
  transform: rotate(-6deg) scale(1.05);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav__link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: var(--transition);
  position: relative;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: var(--transition);
}

.nav__link:hover,
.nav__link--active {
  color: var(--color-text);
}

.nav__link:hover::after,
.nav__link--active::after {
  width: 100%;
}

.nav__link--active {
  color: var(--color-accent);
}

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.nav__toggle-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: var(--transition);
}

.nav__toggle-bar--open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav__toggle-bar--open:nth-child(2) {
  opacity: 0;
}

.nav__toggle-bar--open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav__toggle {
    display: flex;
  }

  .nav__links {
    position: fixed;
    top: calc(var(--nav-height) + 3px);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--color-bg-elevated);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 0;
    transform: translateY(-110%);
    opacity: 0;
    pointer-events: none;
    transition: var(--transition);
  }

  .nav__links--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav__link {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }

  .nav__link::after {
    display: none;
  }

  .nav__link--active {
    background: var(--color-accent-soft);
  }
}
</style>
