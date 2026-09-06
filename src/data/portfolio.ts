import type { PortfolioData } from '@/types/portfolio'

export const portfolio: PortfolioData = {
  name: 'Lesego Seritili',
  title: 'Software Engineer',
  tagline: 'Building products that matter — from community safety apps to e-commerce platforms.',
  email: 'lesegoseritili@gmail.com',
  location: 'South Africa',
  about: [
    "I'm a software engineer and freelance developer since 2018 — building products used by communities and businesses across South Africa and beyond.",
    'I work with Vue, React, and React Native on the frontend, Node.js on the backend, and JavaScript and TypeScript across the full stack — plus PHP and Laravel for APIs and services, with PostgreSQL or MySQL on the data layer.',
  ],
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/lsgser', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lesego-seritili-b54b91328/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:lesegoseritili@gmail.com', icon: 'email' },
  ],
  skills: [
    { name: 'Vue.js', categories: ['frontend'] },
    { name: 'React', categories: ['frontend'] },
    { name: 'React Native', categories: ['frontend'] },
    { name: 'JavaScript', categories: ['frontend', 'backend'] },
    { name: 'TypeScript', categories: ['frontend', 'backend'] },
    { name: 'Node.js', categories: ['backend'] },
    { name: 'Go', categories: ['backend'] },
    { name: 'PHP', categories: ['backend'] },
    { name: 'Laravel', categories: ['backend'] },
    { name: 'Laravel Lumen', categories: ['backend'] },
    { name: 'REST APIs', categories: ['backend'] },
    { name: 'GraphQL', categories: ['backend'] },
    { name: 'PostgreSQL', categories: ['backend'] },
    { name: 'MySQL', categories: ['backend'] },
    { name: 'Google Cloud', categories: ['tools'] },
    { name: 'Git', categories: ['tools'] },
    { name: 'Docker', categories: ['tools'] },
  ],
  projects: [
    {
      title: 'Gofreight',
      description:
        'An open-source, batteries-included web framework for Go — routing, ORM, templates, migrations, CLI, job queues, auth, GraphQL, WebSockets, and single-binary deploys. Convention over configuration, idiomatic Go throughout.',
      tags: ['Go', 'GraphQL', 'REST APIs', 'Open Source'],
      liveUrl: 'https://lsgser.github.io/gofreight-web/',
      repoUrl: 'https://github.com/lsgser/gofreight',
      featured: true,
    },
    {
      title: 'Ubuntu Alert',
      description:
        'A community safety platform with real-time incident reporting, interactive maps, neighbourhood groups, and a panic button that shares live location with trusted contacts. Available on iOS and Android.',
      tags: ['React Native', 'Node.js', 'TypeScript', 'MySQL', 'Google Cloud'],
      liveUrl: 'https://ubuntualert.com',
      featured: true,
    },
    {
      title: 'ScanSAfe',
      description:
        'A mobile app that lets users scan product barcodes to view ingredients, nutrition context, allergen alerts, and informational health scores — helping people make smarter food choices.',
      tags: ['Laravel', 'React Native', 'PostgreSQL', 'Google Cloud'],
      liveUrl: 'https://scansafe.online',
      featured: true,
    },
    {
      title: 'YeboStore',
      description:
        'An e-commerce platform enabling South African merchants to launch online storefronts with tiered pricing plans, custom domains, and a full merchant dashboard.',
      tags: ['React', 'MySQL'],
      liveUrl: 'https://yebostore.co.za',
      featured: true,
    },
    {
      title: 'KasiBeat',
      description:
        'A music and beats platform with dedicated web and mobile experiences, built for discovering and sharing audio content.',
      tags: ['Vue 2', 'Laravel Lumen', 'MySQL'],
      liveUrl: 'https://kasibeat.com',
      featured: false,
    },
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Nintex',
      period: '2025 — Present',
      description:
        'Building workflow automation and process management solutions at a global scale, contributing to products used by enterprises worldwide.',
    },
    {
      role: 'Software Engineer',
      company: 'Khula',
      period: '2021 — 2025',
      description:
        'Owned the Khula product ecosystem end to end — including the Khula Buyer app, Khula Money app, Khula Buyer web, and the admin dashboard. Responsible for architecture, development, and delivery across mobile and web, enabling farmers to trade inputs, access funding, and manage growing contracts at scale.',
    },
    {
      role: 'Freelance Developer',
      company: 'Independent',
      period: '2018 — Present',
      description:
        'Delivering web and mobile solutions for clients — from MVPs and e-commerce platforms to production apps — across Vue, React, React Native, Laravel, and Node.js.',
    },
  ],
}
