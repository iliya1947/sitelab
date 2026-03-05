export const languages = ['ru', 'en', 'es'] as const;

export type Lang = (typeof languages)[number];

export const isLang = (value: string): value is Lang =>
  languages.includes(value as Lang);

type ServiceInfo = {
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

type Dictionary = {
  localeLabel: string;
  siteName: string;
  nav: {
    home: string;
    services: string;
    process: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  audiences: { title: string; items: string[] };
  servicesSection: {
    title: string;
    cta: string;
    learnMore: string;
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
  };
  whyUs: { title: string; points: string[] };
  stack: { title: string; items: string[] };
  processSection: {
    title: string;
    stepLabel: string;
    steps: string[];
  };
  faq: { title: string; items: { q: string; a: string }[] };
  contact: {
    title: string;
    subtitle: string;
    submit: string;
    name: string;
    email: string;
    message: string;
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
    stepsTitle: string;
    cta: string;
    priceFromLabel: string;
  };
};

const sharedServices = [
  {
    slug: 'landing-page',
    icon: '🚀'
  },
  {
    slug: 'corporate-website',
    icon: '🏢'
  },
  {
    slug: 'ecommerce',
    icon: '🛍️'
  },
  {
    slug: 'web-app',
    icon: '⚙️'
  }
] as const;

const dictionaries: Record<Lang, Dictionary & { services: ServiceInfo[] }> = {
  ru: {
    localeLabel: 'Русский',
    siteName: 'SiteLab',
    nav: { home: 'Главная', services: 'Услуги', process: 'Процесс', contact: 'Контакты' },
    hero: {
      badge: 'Премиальная веб-разработка',
      title: 'Создаём сайты и веб-продукты, которые приводят клиентов',
      subtitle: 'Проектируем и запускаем быстрые, современные и масштабируемые решения для бизнеса.',
      cta: 'Начать проект',
      secondaryCta: 'Наши услуги'
    },
    audiences: { title: 'Для кого мы работаем', items: ['Стартапы', 'Малый бизнес', 'Эксперты и консультанты', 'Растущие команды'] },
    servicesSection: { title: 'Наши услуги', cta: 'Все услуги', learnMore: 'Подробнее' },
    calculator: {
      title: 'Калькулятор стоимости сайта',
      submit: 'Отправить заявку',
      estimateLabel: 'Ориентировочный бюджет',
      fields: {
        siteType: 'Тип сайта',
        pages: 'Количество страниц',
        multilingual: 'Мультиязычность',
        ecommerce: 'Интернет-магазин',
        seo: 'SEO пакет',
        urgency: 'Срочность'
      }
    },
    whyUs: { title: 'Почему выбирают SiteLab', points: ['Прозрачные цены', 'Быстрые итерации', 'Доступные интерфейсы', 'Код готов к развитию'] },
    stack: { title: 'Технологический стек', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'] },
    processSection: {
      title: 'Этапы работы',
      stepLabel: 'Этап',
      steps: ['Бриф', 'Планирование', 'UX/UI', 'Разработка', 'Тестирование', 'Запуск и поддержка']
    },
    faq: {
      title: 'FAQ',
      items: [
        { q: 'Сколько длится проект?', a: 'Обычно от 3 до 8 недель в зависимости от объёма.' },
        { q: 'Есть ли поддержка после запуска?', a: 'Да, сопровождаем и развиваем продукт после релиза.' },
        { q: 'Делаете мультиязычные сайты?', a: 'Да, поддерживаем русский, английский, испанский и другие языки.' }
      ]
    },
    contact: { title: 'Обсудим ваш проект', subtitle: 'Опишите задачу — предложим понятный план и оценку.', submit: 'Отправить', name: 'Имя', email: 'Email', message: 'Описание проекта' },
    accessibility: { title: 'Доступность', contrast: 'Высокий контраст', largerText: 'Увеличить шрифт', reduceMotion: 'Уменьшить анимации', skipToMain: 'Перейти к контенту' },
    servicePage: { audienceTitle: 'Кому подходит', includesTitle: 'Что входит', technologiesTitle: 'Технологии', demoTitle: 'Демо интерфейса', stepsTitle: 'Этапы разработки', cta: 'Записаться на звонок', priceFromLabel: 'Цена от' },
    services: [
      { ...sharedServices[0], title: 'Лендинг', shortDescription: 'Одностраничный сайт для запуска продукта и рекламы.', offer: 'Запустим эффективный лендинг за несколько дней.', audience: ['MVP запуск', 'Рекламные кампании', 'Новые продукты'], includes: ['Структура контента', 'Адаптивный интерфейс', 'Форма захвата лидов'], technologies: ['Next.js', 'Tailwind CSS', 'Аналитика'], steps: ['Бриф', 'Прототип', 'Дизайн', 'Разработка', 'QA', 'Публикация'], priceFrom: '$700' },
      { ...sharedServices[1], title: 'Корпоративный сайт', shortDescription: 'Многостраничный сайт компании с услугами и воронкой заявок.', offer: 'Сформируйте сильное онлайн-присутствие.', audience: ['Сервисные компании', 'Агентства', 'B2B команды'], includes: ['Ключевые страницы', 'Структура под CMS', 'Контактные сценарии'], technologies: ['Next.js App Router', 'TypeScript', 'Vercel'], steps: ['Исследование', 'Карта сайта', 'Дизайн', 'Разработка', 'SEO настройка', 'Релиз'], priceFrom: '$1,600' },
      { ...sharedServices[2], title: 'Интернет-магазин', shortDescription: 'Каталог, логика покупки и оптимизация производительности.', offer: 'Запускайте продажи в быстром и удобном магазине.', audience: ['Ритейл бренды', 'Нишевые магазины', 'D2C проекты'], includes: ['Каталог', 'Интеграция оплаты', 'Базовая админка'], technologies: ['Next.js', 'Payment API', 'PostgreSQL'], steps: ['План', 'Каталог', 'Checkout', 'Тесты', 'Трекинг', 'Запуск'], priceFrom: '$2,800' },
      { ...sharedServices[3], title: 'Веб-приложение', shortDescription: 'Индивидуальная система с авторизацией и бизнес-логикой.', offer: 'Автоматизируйте процессы с кастомным веб-продуктом.', audience: ['Операционные команды', 'SaaS стартапы', 'Внутренние системы'], includes: ['Архитектура', 'Безопасная авторизация', 'Бизнес-модули'], technologies: ['Next.js', 'TypeScript', 'PostgreSQL'], steps: ['Discovery', 'Архитектура', 'MVP', 'Валидация', 'Оптимизация', 'Масштабирование'], priceFrom: '$4,500' }
    ]
  },
  en: {
    localeLabel: 'English',
    siteName: 'SiteLab',
    nav: { home: 'Home', services: 'Services', process: 'Process', contact: 'Contact' },
    hero: {
      badge: 'Premium web engineering',
      title: 'Build websites and web products that convert',
      subtitle: 'We design and launch fast, modern, and scalable digital solutions for growing businesses.',
      cta: 'Start your project',
      secondaryCta: 'Our services'
    },
    audiences: { title: 'Who we work with', items: ['Startups', 'Local businesses', 'Consultants', 'Growing teams'] },
    servicesSection: { title: 'Our services', cta: 'See all services', learnMore: 'Learn more' },
    calculator: {
      title: 'Website cost calculator',
      submit: 'Send request',
      estimateLabel: 'Estimated budget',
      fields: {
        siteType: 'Website type',
        pages: 'Number of pages',
        multilingual: 'Multilingual',
        ecommerce: 'Online store',
        seo: 'SEO package',
        urgency: 'Urgency'
      }
    },
    whyUs: { title: 'Why teams choose SiteLab', points: ['Transparent pricing', 'Fast iterations', 'Accessible interfaces', 'Production-ready codebase'] },
    stack: { title: 'Technology stack', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'] },
    processSection: {
      title: 'Our process',
      stepLabel: 'Step',
      steps: ['Discovery', 'Scope', 'UX/UI', 'Development', 'QA', 'Launch & support']
    },
    faq: {
      title: 'FAQ',
      items: [
        { q: 'How long does a project take?', a: 'Most projects are delivered in 3-8 weeks depending on complexity.' },
        { q: 'Can you maintain the project?', a: 'Yes, we offer post-launch support and feature development.' },
        { q: 'Do you support multilingual websites?', a: 'Yes, we can build and manage Russian, English, Spanish and more.' }
      ]
    },
    contact: {
      title: 'Let’s discuss your website',
      subtitle: 'Share your goals and get a roadmap with a clear estimate.',
      submit: 'Submit',
      name: 'Name',
      email: 'Email',
      message: 'Project details'
    },
    accessibility: {
      title: 'Accessibility',
      contrast: 'High contrast',
      largerText: 'Larger text',
      reduceMotion: 'Reduce motion',
      skipToMain: 'Skip to main content'
    },
    servicePage: {
      audienceTitle: 'Best for',
      includesTitle: 'What is included',
      technologiesTitle: 'Technologies',
      demoTitle: 'UI concept demo',
      stepsTitle: 'Delivery stages',
      cta: 'Book a discovery call',
      priceFromLabel: 'Price from'
    },
    services: [
      { ...sharedServices[0], title: 'Landing Page', shortDescription: 'Conversion-focused one-page website for campaigns or product launches.', offer: 'Launch a polished landing page in days.', audience: ['MVP launches', 'Ad campaigns', 'New products'], includes: ['Copy structure', 'Responsive UI', 'Lead capture form'], technologies: ['Next.js', 'Tailwind CSS', 'Analytics'], steps: ['Brief', 'Wireframe', 'Visual design', 'Build', 'QA', 'Launch'], priceFrom: '$700' },
      { ...sharedServices[1], title: 'Corporate Website', shortDescription: 'Multi-page website for companies with services, process and lead funnels.', offer: 'Build trust with a solid digital presence.', audience: ['Service companies', 'Agencies', 'B2B teams'], includes: ['Core pages', 'CMS-ready structure', 'Contact flows'], technologies: ['Next.js App Router', 'TypeScript', 'Vercel'], steps: ['Research', 'Sitemap', 'Design', 'Development', 'SEO setup', 'Release'], priceFrom: '$1,600' },
      { ...sharedServices[2], title: 'E-commerce Store', shortDescription: 'Storefront with product catalog, checkout logic and performance optimization.', offer: 'Sell online with a fast and scalable storefront.', audience: ['Retail brands', 'Niche stores', 'D2C founders'], includes: ['Catalog UI', 'Checkout integration', 'Admin basics'], technologies: ['Next.js', 'Payment API', 'PostgreSQL'], steps: ['Planning', 'Catalog setup', 'Checkout', 'Testing', 'Tracking', 'Go live'], priceFrom: '$2,800' },
      { ...sharedServices[3], title: 'Custom Web App', shortDescription: 'Tailor-made dashboard or internal system with authentication and business logic.', offer: 'Automate your workflow with a custom web product.', audience: ['Operations teams', 'SaaS startups', 'Internal tools'], includes: ['Product architecture', 'Secure auth', 'Business modules'], technologies: ['Next.js', 'TypeScript', 'PostgreSQL'], steps: ['Discovery', 'Architecture', 'MVP build', 'Validation', 'Optimization', 'Scale'], priceFrom: '$4,500' }
    ]
  },
  es: {
    localeLabel: 'Español',
    siteName: 'SiteLab',
    nav: { home: 'Inicio', services: 'Servicios', process: 'Proceso', contact: 'Contacto' },
    hero: {
      badge: 'Ingeniería web premium',
      title: 'Creamos sitios y productos web que convierten',
      subtitle: 'Diseñamos y lanzamos soluciones digitales rápidas, modernas y escalables para negocios en crecimiento.',
      cta: 'Iniciar proyecto',
      secondaryCta: 'Nuestros servicios'
    },
    audiences: { title: 'Con quién trabajamos', items: ['Startups', 'Negocios locales', 'Consultores', 'Equipos en crecimiento'] },
    servicesSection: { title: 'Nuestros servicios', cta: 'Ver todos los servicios', learnMore: 'Más información' },
    calculator: {
      title: 'Calculadora de costo del sitio web',
      submit: 'Enviar solicitud',
      estimateLabel: 'Presupuesto estimado',
      fields: {
        siteType: 'Tipo de sitio web',
        pages: 'Número de páginas',
        multilingual: 'Multilingüe',
        ecommerce: 'Tienda online',
        seo: 'Paquete SEO',
        urgency: 'Urgencia'
      }
    },
    whyUs: { title: 'Por qué los equipos eligen SiteLab', points: ['Precios transparentes', 'Iteraciones rápidas', 'Interfaces accesibles', 'Código listo para producción'] },
    stack: { title: 'Stack tecnológico', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'] },
    processSection: {
      title: 'Etapas de trabajo',
      stepLabel: 'Paso',
      steps: ['Descubrimiento', 'Alcance', 'UX/UI', 'Desarrollo', 'QA', 'Lanzamiento y soporte']
    },
    faq: {
      title: 'FAQ',
      items: [
        { q: '¿Cuánto dura un proyecto?', a: 'La mayoría de los proyectos se entregan en 3-8 semanas según su complejidad.' },
        { q: '¿Dan soporte después del lanzamiento?', a: 'Sí, ofrecemos soporte post-lanzamiento y desarrollo de nuevas funciones.' },
        { q: '¿Desarrollan sitios multilingües?', a: 'Sí, trabajamos con ruso, inglés, español y otros idiomas.' }
      ]
    },
    contact: {
      title: 'Hablemos de tu sitio web',
      subtitle: 'Comparte tus objetivos y recibe una hoja de ruta con una estimación clara.',
      submit: 'Enviar',
      name: 'Nombre',
      email: 'Email',
      message: 'Detalles del proyecto'
    },
    accessibility: {
      title: 'Accesibilidad',
      contrast: 'Alto contraste',
      largerText: 'Texto más grande',
      reduceMotion: 'Reducir movimiento',
      skipToMain: 'Saltar al contenido principal'
    },
    servicePage: {
      audienceTitle: 'Ideal para',
      includesTitle: 'Qué incluye',
      technologiesTitle: 'Tecnologías',
      demoTitle: 'Demo de interfaz',
      stepsTitle: 'Etapas de entrega',
      cta: 'Reservar una llamada',
      priceFromLabel: 'Precio desde'
    },
    services: [
      { ...sharedServices[0], title: 'Landing Page', shortDescription: 'Sitio de una página enfocado en conversión para campañas o lanzamientos.', offer: 'Lanza una landing profesional en pocos días.', audience: ['Lanzamientos MVP', 'Campañas publicitarias', 'Nuevos productos'], includes: ['Estructura de contenido', 'UI responsive', 'Formulario de leads'], technologies: ['Next.js', 'Tailwind CSS', 'Analítica'], steps: ['Brief', 'Wireframe', 'Diseño visual', 'Desarrollo', 'QA', 'Lanzamiento'], priceFrom: '$700' },
      { ...sharedServices[1], title: 'Sitio corporativo', shortDescription: 'Sitio multipágina con servicios, proceso y embudos de contacto.', offer: 'Construye confianza con una presencia digital sólida.', audience: ['Empresas de servicios', 'Agencias', 'Equipos B2B'], includes: ['Páginas principales', 'Estructura lista para CMS', 'Flujos de contacto'], technologies: ['Next.js App Router', 'TypeScript', 'Vercel'], steps: ['Investigación', 'Mapa del sitio', 'Diseño', 'Desarrollo', 'Configuración SEO', 'Publicación'], priceFrom: '$1,600' },
      { ...sharedServices[2], title: 'Tienda online', shortDescription: 'Catálogo, checkout y optimización de rendimiento para e-commerce.', offer: 'Vende online con una tienda rápida y escalable.', audience: ['Marcas retail', 'Tiendas de nicho', 'Fundadores D2C'], includes: ['UI de catálogo', 'Integración de pagos', 'Base de administración'], technologies: ['Next.js', 'Payment API', 'PostgreSQL'], steps: ['Planificación', 'Catálogo', 'Checkout', 'Pruebas', 'Tracking', 'Go live'], priceFrom: '$2,800' },
      { ...sharedServices[3], title: 'Aplicación web a medida', shortDescription: 'Dashboard o sistema interno con autenticación y lógica de negocio.', offer: 'Automatiza tu operación con un producto web personalizado.', audience: ['Equipos operativos', 'Startups SaaS', 'Herramientas internas'], includes: ['Arquitectura de producto', 'Auth segura', 'Módulos de negocio'], technologies: ['Next.js', 'TypeScript', 'PostgreSQL'], steps: ['Discovery', 'Arquitectura', 'MVP', 'Validación', 'Optimización', 'Escalado'], priceFrom: '$4,500' }
    ]
  }
};

export const getDictionary = (lang: Lang) => dictionaries[lang];

export const getServiceBySlug = (lang: Lang, slug: string) =>
  dictionaries[lang].services.find((service) => service.slug === slug);
