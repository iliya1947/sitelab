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
      { slug: 'high-performance-websites', icon: '⚡', title: 'High-performance websites', shortDescription: 'Ultra-fast websites optimized for performance and user experience.', longDescription: 'We develop websites focused on speed, performance, and scalability. Optimized for fast loading, smooth interactions, and high Google rankings. Perfect for businesses that want a technical advantage over competitors. Speed is not just a feature — it is a conversion factor.', features: ['Ultra-fast loading', 'Optimized performance', 'Modern architecture', 'Core Web Vitals ready', 'Scalable structure'], offer: 'Get a website built for top-tier performance.', audience: ['Growth-stage companies', 'B2B brands', 'SaaS teams'], includes: ['Core Web Vitals optimization', 'Performance-first architecture', 'Advanced caching strategy'], technologies: ['Next.js', 'TypeScript', 'Vercel Edge'], steps: ['Audit', 'Architecture', 'Implementation', 'Testing', 'Monitoring', 'Launch'], priceFrom: '$2,200' },
      { slug: 'business-websites', icon: '💼', title: 'Business websites', shortDescription: 'Professional business websites that build trust and generate leads.', longDescription: 'We build modern business websites that clearly present your company, services, and value to potential clients. Designed to create trust, improve your online presence, and generate consistent inquiries from your target audience. Ideal for small and medium businesses in Israel.', features: ['Professional design', 'Service presentation', 'Lead generation structure', 'SEO-ready', 'Multi-page architecture'], offer: 'Build a business website that supports growth.', audience: ['Service providers', 'Consultancies', 'Small-to-mid businesses'], includes: ['Business-focused page structure', 'Lead generation flows', 'Conversion-focused copy layout'], technologies: ['Next.js', 'Tailwind CSS', 'CMS Integration'], steps: ['Discovery', 'Content planning', 'Design', 'Development', 'QA', 'Go-live'], priceFrom: '$1,500' },
      { slug: 'landing-pages', icon: '🎯', title: 'Landing pages', shortDescription: 'High-converting landing pages designed to turn visitors into real customers.', longDescription: 'We create high-performance landing pages focused on one goal — conversion. Perfect for advertising campaigns, product launches, and lead generation. Every page is designed with clear structure, fast loading speed, and a strong focus on turning visitors into clients. Built for businesses that need results, not just design.', features: ['Conversion-focused structure', 'Fast loading speed', 'Mobile optimization', 'SEO-ready setup', 'Analytics integration'], offer: 'Launch conversion-first landing pages faster.', audience: ['Marketing teams', 'Startups', 'Product launches'], includes: ['Offer-focused messaging hierarchy', 'A/B test ready sections', 'Fast deployment workflow'], technologies: ['Next.js', 'Analytics', 'A/B testing tools'], steps: ['Brief', 'Messaging', 'Design', 'Build', 'Tracking setup', 'Publish'], priceFrom: '$900' },
      { slug: 'web-applications', icon: '🧩', title: 'Web applications', shortDescription: 'Custom web applications tailored to your business needs.', longDescription: 'We build custom web applications for businesses that need more than a standard website. From dashboards to complex platforms — everything is designed for performance, usability, and scalability. Built to support real business operations.', features: ['Custom functionality', 'Dashboard systems', 'API integrations', 'Scalable architecture', 'Secure backend'], offer: 'Ship custom web applications with confidence.', audience: ['SaaS founders', 'Operations teams', 'Digital product teams'], includes: ['Role-based authentication', 'Custom business logic modules', 'Scalable data architecture'], technologies: ['Next.js', 'TypeScript', 'PostgreSQL'], steps: ['Product discovery', 'Technical planning', 'MVP build', 'QA', 'Iteration', 'Scale'], priceFrom: '$4,800' },
      { slug: 'website-automation', icon: '🤖', title: 'Website automation', shortDescription: 'Automate workflows and save time with smart website solutions.', longDescription: 'We create automated systems that connect your website with business processes. From lead collection to integrations with external services — everything works automatically, saving time and reducing manual work. Perfect for scaling businesses.', features: ['Workflow automation', 'API integrations', 'Lead automation', 'CRM connections', 'Process optimization'], offer: 'Automate website operations and save team time.', audience: ['Sales teams', 'Marketing teams', 'Operations managers'], includes: ['Automated lead routing', 'Content sync workflows', 'Notification and reporting automation'], technologies: ['Node.js', 'API integrations', 'Webhooks'], steps: ['Workflow mapping', 'Integration setup', 'Automation build', 'Testing', 'Deployment', 'Optimization'], priceFrom: '$1,900' },
      { slug: 'seo-optimized-websites', icon: '🔎', title: 'SEO-optimized websites', shortDescription: 'Websites built to rank on Google and attract organic traffic.', longDescription: 'We build websites with SEO in mind from the ground up. Clean structure, fast performance, and proper indexing ensure your site is visible on search engines. Designed to bring long-term organic traffic and clients.', features: ['SEO-friendly structure', 'Fast loading speed', 'Meta optimization', 'Clean URLs', 'Indexing ready'], offer: 'Get an SEO-ready website that ranks better.', audience: ['Content-driven brands', 'Local businesses', 'B2B websites'], includes: ['Technical SEO setup', 'Structured content architecture', 'Metadata and schema implementation'], technologies: ['Next.js', 'Schema.org', 'Search Console'], steps: ['SEO audit', 'Site structure', 'Implementation', 'Validation', 'Indexing setup', 'Post-launch review'], priceFrom: '$1,700' },
      { slug: 'website-optimization', icon: '📈', title: 'Website optimization', shortDescription: 'Improve speed, performance, and conversion of your existing website.', longDescription: 'We analyze and improve existing websites to increase performance and conversion rates. From speed optimization to UX improvements — we help turn your current website into a more effective business tool.', features: ['Speed optimization', 'UX improvements', 'Performance audit', 'Conversion improvements', 'Technical fixes'], offer: 'Upgrade your existing website for better results.', audience: ['Established websites', 'Growth teams', 'E-commerce operators'], includes: ['Performance diagnostics', 'UX and funnel improvements', 'Conversion rate optimization'], technologies: ['Lighthouse', 'Analytics', 'A/B testing'], steps: ['Audit', 'Prioritization', 'Implementation', 'Measurement', 'Iteration', 'Reporting'], priceFrom: '$1,200' }
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
