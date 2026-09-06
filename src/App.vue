<script setup lang="ts">
import { ref } from 'vue'
import { portfolio } from '@/data/portfolio'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useActiveSection } from '@/composables/useActiveSection'
import NavBar from '@/components/NavBar.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
import BackToTop from '@/components/BackToTop.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'

const isMenuOpen = ref(false)

const sectionIds = portfolio.navLinks.map((link) => link.href.replace('#', ''))
const { activeSection } = useActiveSection(sectionIds)

useScrollReveal()
</script>

<template>
  <ScrollProgress />

  <NavBar
    v-model:menu-open="isMenuOpen"
    :name="portfolio.name"
    :nav-links="portfolio.navLinks"
    :active-section="activeSection"
  />

  <main>
    <HeroSection
      :name="portfolio.name"
      :title="portfolio.title"
      :tagline="portfolio.tagline"
    />
    <AboutSection :about="portfolio.about" :location="portfolio.location" />
    <SkillsSection :skills="portfolio.skills" />
    <ProjectsSection :projects="portfolio.projects" />
    <ExperienceSection :experience="portfolio.experience" />
    <ContactSection :email="portfolio.email" :social-links="portfolio.socialLinks" />
  </main>

  <FooterSection :name="portfolio.name" />
  <BackToTop />
</template>

<style scoped>
main {
  overflow-x: hidden;
}
</style>
