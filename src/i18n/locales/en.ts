import type { Dictionary } from '@/src/i18n/types';

export const en: Dictionary = {
  localeLabel: 'English',
  siteName: 'SiteLab',
  footer: { copyright: 'Built with Next.js + TypeScript.' },
  nav: { home: 'Home', services: 'Services', process: 'Process', contact: 'Contact' },
  hero: {
    badge: 'Premium web engineering',
    title: {
      line1: 'High-Performance Websites',
      line2: 'That Turn Visitors Into Clients'
    },
    title1: 'Build High-End',
    title2: 'Custom Websites',
    title3: 'That Convert',
    subtitle: 'Custom websites engineered for speed, SEO visibility and real business growth.',
    ctaPrimary: 'Start a Project',
    ctaSecondary: 'Calculate Website Price',
    primaryCTA: 'Start your project',
    secondaryCTA: 'View our work',
    trustedByTitle: 'Trusted by startups and growing tech teams.',
    trustedByItems: ['Seed-stage SaaS', 'VC-backed product teams', 'High-growth B2B brands', 'Premium eCommerce'],
    statCards: [
      { title: 'Performance', value: '98 Lighthouse', detail: 'Fast, stable, conversion-first experiences' },
      { title: 'Delivery', value: '3 Week Launch', detail: 'From strategy to production-ready release' },
      { title: 'Search Engine Visibility', value: 'SEO Optimized', detail: 'Built for discoverability and intent capture' },
      { title: 'Stack', value: 'Next.js / TypeScript', detail: 'Modern architecture for scale and speed' }
    ]
  },
  audiences: { title: 'Who we work with', items: ['Startups', 'Local businesses', 'Consultants', 'Growing teams'] },
  servicesSection: { title: 'Our services', cta: 'See all services' },
  services: {
    title: 'Our Services',
    learnMore: 'Learn more →',
    items: [
      { slug: 'landing-page', icon: '🚀', title: 'Landing page', shortDescription: 'Single-page website for product launch and paid traffic.', offer: 'Launch a focused landing page in days.', audience: ['MVP launches', 'Paid campaigns', 'New products'], includes: ['Content structure', 'Responsive UI', 'Lead capture form'], technologies: ['Next.js', 'Tailwind CSS', 'Analytics'], steps: ['Brief', 'Wireframe', 'Design', 'Development', 'QA', 'Publish'], priceFrom: '$700' },
      { slug: 'corporate-website', icon: '🏢', title: 'Corporate website', shortDescription: 'Multi-page company website with services and lead funnel.', offer: 'Build a strong online presence with a scalable website.', audience: ['Service companies', 'Agencies', 'B2B teams'], includes: ['Core pages', 'CMS-ready structure', 'Contact flows'], technologies: ['Next.js App Router', 'TypeScript', 'Vercel'], steps: ['Research', 'Sitemap', 'Design', 'Development', 'SEO setup', 'Release'], priceFrom: '$1,600' },
      { slug: 'ecommerce', icon: '🛍️', title: 'E-commerce store', shortDescription: 'Catalog, checkout logic, and performance optimization.', offer: 'Launch online sales with a fast, modern storefront.', audience: ['Retail brands', 'Niche shops', 'D2C products'], includes: ['Product catalog', 'Payment integration', 'Basic admin'], technologies: ['Next.js', 'Payment API', 'PostgreSQL'], steps: ['Plan', 'Catalog', 'Checkout', 'Testing', 'Tracking', 'Launch'], priceFrom: '$2,800' },
      { slug: 'web-app', icon: '⚙️', title: 'Web application', shortDescription: 'Custom system with authentication and business logic.', offer: 'Automate your workflows with a tailored web product.', audience: ['Ops teams', 'SaaS startups', 'Internal tools'], includes: ['Architecture', 'Secure auth', 'Business modules'], technologies: ['Next.js', 'TypeScript', 'PostgreSQL'], steps: ['Discovery', 'Architecture', 'MVP', 'Validation', 'Optimization', 'Scale'], priceFrom: '$4,500' }
    ]
  },
  calculator: {
    title: 'Website cost calculator',
    submit: 'Send request',
    estimateLabel: 'Estimated budget',
    fields: { siteType: 'Website type', pages: 'Number of pages', multilingual: 'Multilingual', ecommerce: 'Online store', seo: 'SEO package', urgency: 'Urgency' },
    siteTypes: { landing: 'Landing', corporate: 'Corporate', ecommerce: 'E-commerce', webapp: 'Web app' }
  },
  whyUs: { title: 'Why teams choose SiteLab', points: ['Transparent pricing', 'Fast iterations', 'Accessible interfaces', 'Production-ready codebase'] },
  stack: { title: 'Technology stack', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'] },
  process: { title: 'How we work', steps: ['Discovery', 'Planning', 'Design', 'Development', 'Launch', 'Growth'] },
  faq: {
    title: 'FAQ',
    items: [
      { q: 'How long does a project take?', a: 'Most projects are delivered within 3–8 weeks depending on scope.' },
      { q: 'Do you provide post-launch support?', a: 'Yes, we support optimization, iterations and maintenance after launch.' },
      { q: 'Can you build multilingual websites?', a: 'Yes, we support Hebrew, English, Russian, and additional locales.' }
    ]
  },
  contact: { title: 'Start your project', subtitle: 'Tell us what you need and we will send a clear plan with estimate.', submit: 'Send', name: 'Name', email: 'Email', message: 'Project details', success: 'Thanks! We will contact you soon.' },
  accessibility: { title: 'Accessibility', contrast: 'High contrast', largerText: 'Larger text', reduceMotion: 'Reduce motion', skipToMain: 'Skip to content' },
  servicePage: { audienceTitle: 'Best for', includesTitle: 'What is included', technologiesTitle: 'Technologies', demoTitle: 'Interface demo', demoPlaceholder: 'Demo block placeholder for', stepsTitle: 'Development process', cta: 'Book a call', priceFromLabel: 'Starting from' }
};
