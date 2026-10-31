import type { PortfolioData } from '@/types/portfolio'

export const portfolio: PortfolioData = {
  name: 'Lesego Seritili',
  title: 'Software Engineer',
  tagline:
    'Full-stack engineer shipping mobile apps, e-commerce platforms, and open-source Go frameworks.',
  email: 'seritililesego@gmail.com',
  location: 'Gauteng, South Africa',
  about: [
    "I'm a software engineer and freelance developer since 2018, currently at Nintex, with experience across agri-tech, community safety, e-commerce, and enterprise workflow products.",
    'I build with Vue, React, React Native, Node.js, TypeScript, PHP, Laravel, and Go, from production apps like Ubuntu Alert and YeboStore to open-source tooling including Gofreight and Gogql.',
    'Alongside client and product work, I ship software with Quechua Group and co-founded ORYX Tech, focused on clean architecture, strong developer experience, and products people actually use.',
  ],
  aboutHighlights: [
    { label: 'Location', value: 'Gauteng, South Africa' },
    { label: 'Freelancing', value: 'Since 2018' },
    { label: 'Open source', value: 'Gofreight & Gogql' },
    {
      label: 'Studio',
      value: 'Quechua Group',
      href: 'https://quechuagroup.co.za',
    },
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
    { label: 'Email', href: 'mailto:seritililesego@gmail.com', icon: 'email' },
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
        'An open-source, batteries-included web framework for Go with routing, ORM, templates, migrations, CLI, job queues, auth, GraphQL, WebSockets, and single-binary deploys. Convention over configuration, idiomatic Go throughout.',
      tags: ['Go', 'GraphQL', 'REST APIs', 'Open Source'],
      liveUrl: 'https://lsgser.github.io/gofreight-web/',
      repoUrl: 'https://github.com/lsgser/gofreight',
      featured: true,
    },
    {
      title: 'Gogql',
      description:
        'An open-source, modular GraphQL server library for Go with SDL-first schemas, composable modules, GraphiQL playground, WebSocket subscriptions, DataLoaders, and depth limits. Inspired by GraphQL Yoga and GraphQL Modules.',
      tags: ['Go', 'GraphQL', 'Open Source'],
      repoUrl: 'https://github.com/lsgser/gogql',
      featured: true,
    },
    {
      title: 'Ubuntu Alert',
      description:
        'A community safety platform with real-time incident reporting, interactive maps, neighbourhood groups, and a panic button that shares live location with trusted contacts. Available on iOS and Android.',
      tags: ['React Native', 'Node.js', 'TypeScript', 'MySQL'],
      liveUrl: 'https://ubuntualert.com',
      featured: true,
    },
    {
      title: 'ScanSAfe',
      description:
        'A mobile app that lets users scan product barcodes to view ingredients, nutrition context, allergen alerts, and informational health scores, helping people make smarter food choices.',
      tags: ['Laravel', 'React Native', 'PostgreSQL'],
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
      title: 'Mamietings',
      description:
        'A couture hair collections storefront for resellers: premium wigs and bundles with product listings, pricing, and a polished shopping experience built for the Mamietings brand.',
      tags: ['E-commerce', 'Web'],
      liveUrl: 'https://mamietings.co.za/',
      featured: true,
    },
    {
      title: 'Quechua Group',
      description:
        'A software studio offering consulting, UI/UX, web development, and native mobile, helping teams move from idea to software that ships with clear strategy and solid execution.',
      tags: ['Consulting', 'Web', 'Mobile'],
      liveUrl: 'https://quechuagroup.co.za',
      featured: false,
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
      period: '2025 to Present',
      companyUrl: 'https://www.nintex.com',
      description:
        'Building workflow automation and process management solutions at global scale, contributing to products used by enterprises worldwide.',
    },
    {
      role: 'Senior Software Engineer',
      company: 'Khula',
      period: '2021 to 2025',
      companyUrl: 'https://khula.co.za',
      description:
        'Owned the Khula product ecosystem end to end, including the Khula Buyer app, Khula Money app, Khula Buyer web, and the admin dashboard. Responsible for architecture, development, and delivery across mobile and web, enabling farmers to trade inputs, access funding, and manage growing contracts at scale.',
    },
    {
      role: 'Freelance Developer',
      company: 'Independent',
      period: '2018 to Present',
      description:
        'Delivering web and mobile solutions for clients, from MVPs and e-commerce platforms to production apps, across Vue, React, React Native, Laravel, Node.js, and Go.',
    },
  ],
}
