export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'twitter' | 'email'
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'other'

export interface Skill {
  name: string
  categories: SkillCategory[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}

export interface PortfolioData {
  name: string
  title: string
  tagline: string
  email: string
  location: string
  about: string[]
  navLinks: NavLink[]
  socialLinks: SocialLink[]
  skills: Skill[]
  projects: Project[]
  experience: Experience[]
}
