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
    ] as any
  },
  audiences: { title: 'Who we work with', items: ['Startups', 'Local businesses', 'Consultants', 'Growing teams'] },
  servicesSection: { title: 'Our services', cta: 'See all services' },
  servicesPage: {
    title: 'Our Web Development Services',
    description: 'We design and build high-performance websites focused on speed, SEO visibility and conversion.'
  },
  techStack: { title: 'Built With Modern Technologies', subtitle: 'We build websites using modern tools focused on speed, scalability and performance.' },
  services: {
    title: 'Our Services',
    learnMore: 'Learn more →',
    items: [
      { slug: 'landing-pages', title: 'Landing pages', shortDescription: 'High-converting landing pages designed to turn visitors into real customers.', longDescription: 'We create high-performance landing pages focused on one goal — conversion. Perfect for advertising campaigns, product launches, and lead generation.', features: ['Conversion-focused structure', 'Fast loading speed', 'Mobile optimization', 'SEO-ready setup', 'Analytics integration'], priceFrom: '$900' },
      { slug: 'business-websites', title: 'Business websites', shortDescription: 'Professional business websites that build trust and generate leads.', longDescription: 'We build modern business websites that clearly present your company, services, and value to potential clients.', features: ['Professional design', 'Service presentation', 'Lead generation structure', 'SEO-ready', 'Multi-page architecture'], priceFrom: '$1,500' },
      { slug: 'ecommerce-websites', title: 'E-commerce websites', shortDescription: 'High-performance online stores focused on discovery, checkout, and growth.', longDescription: 'We build modern e-commerce websites optimized for product discovery, seamless checkout, and scalable growth.', features: ['Product catalog', 'Payment integration', 'Checkout optimization', 'Mobile shopping UX', 'Performance-first architecture'], priceFrom: '$2,800' },
      { slug: 'web-applications', title: 'Web applications', shortDescription: 'Custom web applications tailored to your business needs.', longDescription: 'We build custom web applications for businesses that need more than a standard website, from internal dashboards to full digital platforms.', features: ['Custom functionality', 'Dashboard systems', 'API integrations', 'Scalable architecture', 'Secure backend'], priceFrom: '$4,800' },
      { slug: 'website-automation', title: 'Website automation', shortDescription: 'Automate workflows and save time with smart website solutions.', longDescription: 'We create automated systems that connect your website with business processes, reducing manual work and improving operational speed.', features: ['Workflow automation', 'API integrations', 'Lead automation', 'CRM connections', 'Process optimization'], priceFrom: '$1,900' },
      { slug: 'website-optimization', title: 'Website optimization', shortDescription: 'Improve speed, performance, and conversion of your existing website.', longDescription: 'We analyze and improve existing websites to increase speed, UX quality, and conversion rates through practical optimization work.', features: ['Speed optimization', 'UX improvements', 'Performance audit', 'Conversion improvements', 'Technical fixes'], priceFrom: '$1,200' }
    ]
  },
  calculator: {
    title: 'Website cost calculator',
    submit: 'Send request',
    estimateLabel: 'Estimated budget',
    estimateRangeLabel: 'Estimated price range',
    summaryTitle: 'Project summary',
    summaryEmpty: 'No additional features selected yet.',
    selectedTypeLabel: 'Website type',
    selectedFeaturesLabel: 'Selected features',
    finalPriceLabel: 'Final estimated price',
    currencySymbol: '₪',
    fields: { siteType: 'Website type', pages: 'Number of pages', features: 'Feature options' },
    siteTypes: { landingPage: 'Landing Page', businessWebsite: 'Business Website', webApplication: 'Web Application' },
    features: {
      seoOptimization: 'SEO Optimization',
      multiLanguageSupport: 'Multi-language support',
      advancedAnimations: 'Advanced animations',
      cmsIntegration: 'CMS integration',
      customIntegrations: 'Custom integrations'
    }
  },
  whyUs: { title: 'Why teams choose SiteLab', points: ['Transparent pricing', 'Fast iterations', 'Accessible interfaces', 'Production-ready codebase'] },
  stack: { title: 'Technology stack', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'] },
  process: { title: 'How we work', steps: ['Discovery', 'Planning', 'Design', 'Development', 'Launch', 'Growth'] },
  trust: {
    title: 'Why Businesses Choose Us',
    items: {
      performance: 'High-performance architecture',
      technology: 'Modern web technologies',
      custom: 'Custom development approach',
      delivery: 'Fast project delivery'
    }
  },
  faq: {
    title: 'FAQ',
    items: [
      { q: 'How long does a project take?', a: 'Most projects are delivered within 3–8 weeks depending on scope.' },
      { q: 'Do you provide post-launch support?', a: 'Yes, we support optimization, iterations and maintenance after launch.' },
      { q: 'Can you build multilingual websites?', a: 'Yes, we support Hebrew, English, Russian, and additional locales.' }
    ]
  },
  consultation: {
    title: 'Free Website Consultation',
    subtitle: 'Get expert advice and a clear plan for your website project.',
    benefits: ['Project strategy advice', 'Technology recommendations', 'Cost estimation', 'Timeline planning'],
    cta: 'Book Free Consultation'
  },
  contact: { title: 'Start your project', subtitle: 'Tell us what you need and we will send a clear plan with estimate.', submit: 'Send', name: 'Name', email: 'Email', message: 'Project details', success: 'Thanks! We will contact you soon.' },
  accessibility: { title: 'Accessibility', contrast: 'High contrast', largerText: 'Larger text', reduceMotion: 'Reduce motion', skipToMain: 'Skip to content' },
  servicePage: { audienceTitle: 'Best for', includesTitle: 'What is included', technologiesTitle: 'Technologies', demoTitle: 'Interface demo', demoPlaceholder: 'Demo block placeholder for', stepsTitle: 'Development process', cta: 'Book a call', priceFromLabel: 'Starting from', detailsTitle: 'Service details', featuresTitle: 'Features', quoteCta: 'Get a Quote' }
};
