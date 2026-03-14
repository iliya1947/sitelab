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
      { slug: 'landing-page', icon: '🚀', title: 'Landing page', shortDescription: 'Single-page website for product launch and paid traffic.', longDescription: 'Launch a focused landing page in days with clear messaging, strong visual hierarchy, and conversion-ready structure for campaigns.', features: ['Content structure', 'Responsive UI', 'Lead capture form'], offer: 'Launch a focused landing page in days.', audience: ['MVP launches', 'Paid campaigns', 'New products'], includes: ['Content structure', 'Responsive UI', 'Lead capture form'], technologies: ['Next.js', 'Tailwind CSS', 'Analytics'], steps: ['Brief', 'Wireframe', 'Design', 'Development', 'QA', 'Publish'], priceFrom: '$700' },
      { slug: 'corporate-website', icon: '🏢', title: 'Corporate website', shortDescription: 'Multi-page company website with services and lead funnel.', longDescription: 'Build a scalable multi-page company website that communicates your value, supports lead generation, and grows with your business.', features: ['Core pages', 'CMS-ready structure', 'Contact flows'], offer: 'Build a strong online presence with a scalable website.', audience: ['Service companies', 'Agencies', 'B2B teams'], includes: ['Core pages', 'CMS-ready structure', 'Contact flows'], technologies: ['Next.js App Router', 'TypeScript', 'Vercel'], steps: ['Research', 'Sitemap', 'Design', 'Development', 'SEO setup', 'Release'], priceFrom: '$1,600' },
      { slug: 'ecommerce', icon: '🛍️', title: 'E-commerce store', shortDescription: 'Catalog, checkout logic, and performance optimization.', longDescription: 'Launch online sales with a high-performance storefront built for product discovery, checkout completion, and long-term scale.', features: ['Product catalog', 'Payment integration', 'Basic admin'], offer: 'Launch online sales with a fast, modern storefront.', audience: ['Retail brands', 'Niche shops', 'D2C products'], includes: ['Product catalog', 'Payment integration', 'Basic admin'], technologies: ['Next.js', 'Payment API', 'PostgreSQL'], steps: ['Plan', 'Catalog', 'Checkout', 'Testing', 'Tracking', 'Launch'], priceFrom: '$2,800' },
      { slug: 'web-app', icon: '⚙️', title: 'Web application', shortDescription: 'Custom system with authentication and business logic.', longDescription: 'Automate business workflows with a custom web application featuring secure architecture, integrations, and measurable outcomes.', features: ['Architecture', 'Secure auth', 'Business modules'], offer: 'Automate your workflows with a tailored web product.', audience: ['Ops teams', 'SaaS startups', 'Internal tools'], includes: ['Architecture', 'Secure auth', 'Business modules'], technologies: ['Next.js', 'TypeScript', 'PostgreSQL'], steps: ['Discovery', 'Architecture', 'MVP', 'Validation', 'Optimization', 'Scale'], priceFrom: '$4,500' },
      { slug: 'high-performance-websites', icon: '⚡', title: 'High-performance websites', shortDescription: 'Websites engineered for speed, stability, and conversion.', longDescription: 'We build websites optimized for Core Web Vitals, smooth UX, and stronger conversion performance across devices.', features: ['Core Web Vitals optimization', 'Performance-first architecture', 'Advanced caching strategy'], offer: 'Get a website built for top-tier performance.', audience: ['Growth-stage companies', 'B2B brands', 'SaaS teams'], includes: ['Core Web Vitals optimization', 'Performance-first architecture', 'Advanced caching strategy'], technologies: ['Next.js', 'TypeScript', 'Vercel Edge'], steps: ['Audit', 'Architecture', 'Implementation', 'Testing', 'Monitoring', 'Launch'], priceFrom: '$2,200' },
      { slug: 'business-websites', icon: '💼', title: 'Business websites', shortDescription: 'Professional websites tailored for business growth.', longDescription: 'Create a reliable business website that communicates your value proposition and supports lead generation from day one.', features: ['Business-focused page structure', 'Lead generation flows', 'Conversion-focused copy layout'], offer: 'Build a business website that supports growth.', audience: ['Service providers', 'Consultancies', 'Small-to-mid businesses'], includes: ['Business-focused page structure', 'Lead generation flows', 'Conversion-focused copy layout'], technologies: ['Next.js', 'Tailwind CSS', 'CMS Integration'], steps: ['Discovery', 'Content planning', 'Design', 'Development', 'QA', 'Go-live'], priceFrom: '$1,500' },
      { slug: 'landing-pages', icon: '🎯', title: 'Landing pages', shortDescription: 'High-converting pages for campaigns and launches.', longDescription: 'Design and develop campaign landing pages that align messaging, design, and CTA flow for better acquisition results.', features: ['Offer-focused messaging hierarchy', 'A/B test ready sections', 'Fast deployment workflow'], offer: 'Launch conversion-first landing pages faster.', audience: ['Marketing teams', 'Startups', 'Product launches'], includes: ['Offer-focused messaging hierarchy', 'A/B test ready sections', 'Fast deployment workflow'], technologies: ['Next.js', 'Analytics', 'A/B testing tools'], steps: ['Brief', 'Messaging', 'Design', 'Build', 'Tracking setup', 'Publish'], priceFrom: '$900' },
      { slug: 'web-applications', icon: '🧩', title: 'Web applications', shortDescription: 'Custom web apps for operations and digital products.', longDescription: 'Build scalable web applications tailored to your internal workflows or customer-facing product experience.', features: ['Role-based authentication', 'Custom business logic modules', 'Scalable data architecture'], offer: 'Ship custom web applications with confidence.', audience: ['SaaS founders', 'Operations teams', 'Digital product teams'], includes: ['Role-based authentication', 'Custom business logic modules', 'Scalable data architecture'], technologies: ['Next.js', 'TypeScript', 'PostgreSQL'], steps: ['Product discovery', 'Technical planning', 'MVP build', 'QA', 'Iteration', 'Scale'], priceFrom: '$4,800' },
      { slug: 'website-automation', icon: '🤖', title: 'Website automation', shortDescription: 'Automate repetitive website and lead-handling workflows.', longDescription: 'Automate form handling, content updates, notifications, and reporting to save time and reduce manual work.', features: ['Automated lead routing', 'Content sync workflows', 'Notification and reporting automation'], offer: 'Automate website operations and save team time.', audience: ['Sales teams', 'Marketing teams', 'Operations managers'], includes: ['Automated lead routing', 'Content sync workflows', 'Notification and reporting automation'], technologies: ['Node.js', 'API integrations', 'Webhooks'], steps: ['Workflow mapping', 'Integration setup', 'Automation build', 'Testing', 'Deployment', 'Optimization'], priceFrom: '$1,900' },
      { slug: 'seo-optimized-websites', icon: '🔎', title: 'SEO-optimized websites', shortDescription: 'Websites built for search visibility and intent capture.', longDescription: 'Develop websites with technical SEO foundations, semantic structure, and performance signals that support organic growth.', features: ['Technical SEO setup', 'Structured content architecture', 'Metadata and schema implementation'], offer: 'Get an SEO-ready website that ranks better.', audience: ['Content-driven brands', 'Local businesses', 'B2B websites'], includes: ['Technical SEO setup', 'Structured content architecture', 'Metadata and schema implementation'], technologies: ['Next.js', 'Schema.org', 'Search Console'], steps: ['SEO audit', 'Site structure', 'Implementation', 'Validation', 'Indexing setup', 'Post-launch review'], priceFrom: '$1,700' },
      { slug: 'website-optimization', icon: '📈', title: 'Website optimization', shortDescription: 'Improve speed, UX, and conversion on existing websites.', longDescription: 'Optimize your current website through performance tuning, UX improvements, and conversion-focused refinements.', features: ['Performance diagnostics', 'UX and funnel improvements', 'Conversion rate optimization'], offer: 'Upgrade your existing website for better results.', audience: ['Established websites', 'Growth teams', 'E-commerce operators'], includes: ['Performance diagnostics', 'UX and funnel improvements', 'Conversion rate optimization'], technologies: ['Lighthouse', 'Analytics', 'A/B testing'], steps: ['Audit', 'Prioritization', 'Implementation', 'Measurement', 'Iteration', 'Reporting'], priceFrom: '$1,200' }
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
  servicePage: { audienceTitle: 'Best for', includesTitle: 'What is included', technologiesTitle: 'Technologies', demoTitle: 'Interface demo', demoPlaceholder: 'Demo block placeholder for', stepsTitle: 'Development process', cta: 'Book a call', priceFromLabel: 'Starting from' }
};
