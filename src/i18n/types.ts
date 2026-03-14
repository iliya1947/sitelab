export const locales = ['he', 'en', 'ru'] as const;

export type Locale = (typeof locales)[number];

export type ServiceInfo = {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  offer: string;
  audience: string[];
  includes: string[];
  technologies: string[];
  steps: string[];
  priceFrom: string;
};

export type Dictionary = {
  localeLabel: string;
  siteName: string;
  footer: {
    copyright: string;
  };
  nav: {
    home: string;
    services: string;
    process: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: {
      line1: string;
      line2: string;
    };
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    primaryCTA: string;
    secondaryCTA: string;
    trustedByTitle: string;
    trustedByItems: string[];
    statCards: { title: string; value: string; detail: string }[];
  };
  audiences: { title: string; items: string[] };
  servicesSection: { title: string; cta: string };
  servicesPage: {
    title: string;
    description: string;
  };
  techStack: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    learnMore: string;
    items: ServiceInfo[];
  };
  calculator: {
    title: string;
    submit: string;
    estimateLabel: string;
    fields: {
      siteType: string;
      pages: string;
      multilingual: string;
      ecommerce: string;
      seo: string;
      urgency: string;
    };
    siteTypes: {
      landing: string;
      corporate: string;
      ecommerce: string;
      webapp: string;
    };
  };
  whyUs: { title: string; points: string[] };
  stack: { title: string; items: string[] };
  process: { title: string; steps: string[] };
  trust: {
    title: string;
    items: {
      performance: string;
      technology: string;
      custom: string;
      delivery: string;
    };
  };
  faq: { title: string; items: { q: string; a: string }[] };
  consultation: {
    title: string;
    subtitle: string;
    benefits: string[];
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    submit: string;
    name: string;
    email: string;
    message: string;
    success: string;
  };
  accessibility: {
    title: string;
    contrast: string;
    largerText: string;
    reduceMotion: string;
    skipToMain: string;
  };
  servicePage: {
    audienceTitle: string;
    includesTitle: string;
    technologiesTitle: string;
    demoTitle: string;
    demoPlaceholder: string;
    stepsTitle: string;
    cta: string;
    priceFromLabel: string;
  };
};

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const isLang = isLocale;
