export const languages = ['he', 'en', 'ru'] as const;

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
  hero: { title: string; subtitle: string; cta: string };
  audiences: { title: string; items: string[] };
  servicesSection: { title: string; cta: string };
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
  processSection: { title: string; steps: string[] };
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
  en: {
    localeLabel: 'English',
    siteName: 'SiteLab',
    nav: { home: 'Home', services: 'Services', process: 'Process', contact: 'Contact' },
    hero: {
      title: 'Web products that launch your business faster',
      subtitle: 'SiteLab builds scalable websites and apps with modern UX and clean architecture.',
      cta: 'Start your project'
    },
    audiences: { title: 'Who we work with', items: ['Startups', 'Local businesses', 'Consultants', 'Growing teams'] },
    servicesSection: { title: 'Our services', cta: 'See all services' },
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
    processSection: { title: 'Our process', steps: ['Discovery', 'Scope', 'UX/UI', 'Development', 'QA', 'Launch & support'] },
    faq: {
      title: 'FAQ',
      items: [
        { q: 'How long does a project take?', a: 'Most projects are delivered in 3-8 weeks depending on complexity.' },
        { q: 'Can you maintain the project?', a: 'Yes, we offer post-launch support and feature development.' },
        { q: 'Do you support multilingual websites?', a: 'Yes, we can build and manage Hebrew, English, Russian and more.' }
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
      title: 'Accessibility', contrast: 'High contrast', largerText: 'Larger text', reduceMotion: 'Reduce motion', skipToMain: 'Skip to main content'
    },
    servicePage: {
      audienceTitle: 'Best for', includesTitle: 'What is included', technologiesTitle: 'Technologies', demoTitle: 'UI concept demo',
      stepsTitle: 'Delivery stages', cta: 'Book a discovery call', priceFromLabel: 'Price from'
    },
    services: [
      {
        ...sharedServices[0],
        title: 'Landing Page',
        shortDescription: 'Conversion-focused one-page website for campaigns or product launches.',
        offer: 'Launch a polished landing page in days.',
        audience: ['MVP launches', 'Ad campaigns', 'New products'],
        includes: ['Copy structure', 'Responsive UI', 'Lead capture form'],
        technologies: ['Next.js', 'Tailwind CSS', 'Analytics'],
        steps: ['Brief', 'Wireframe', 'Visual design', 'Build', 'QA', 'Launch'],
        priceFrom: '$700'
      },
      {
        ...sharedServices[1],
        title: 'Corporate Website',
        shortDescription: 'Multi-page website for companies with services, process and lead funnels.',
        offer: 'Build trust with a solid digital presence.',
        audience: ['Service companies', 'Agencies', 'B2B teams'],
        includes: ['Core pages', 'CMS-ready structure', 'Contact flows'],
        technologies: ['Next.js App Router', 'TypeScript', 'Vercel'],
        steps: ['Research', 'Sitemap', 'Design', 'Development', 'SEO setup', 'Release'],
        priceFrom: '$1,600'
      },
      {
        ...sharedServices[2],
        title: 'E-commerce Store',
        shortDescription: 'Storefront with product catalog, checkout logic and performance optimization.',
        offer: 'Sell online with a fast and scalable storefront.',
        audience: ['Retail brands', 'Niche stores', 'D2C founders'],
        includes: ['Catalog UI', 'Checkout integration', 'Admin basics'],
        technologies: ['Next.js', 'Payment API', 'PostgreSQL'],
        steps: ['Planning', 'Catalog setup', 'Checkout', 'Testing', 'Tracking', 'Go live'],
        priceFrom: '$2,800'
      },
      {
        ...sharedServices[3],
        title: 'Custom Web App',
        shortDescription: 'Tailor-made dashboard or internal system with authentication and business logic.',
        offer: 'Automate your workflow with a custom web product.',
        audience: ['Operations teams', 'SaaS startups', 'Internal tools'],
        includes: ['Product architecture', 'Secure auth', 'Business modules'],
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
        steps: ['Discovery', 'Architecture', 'MVP build', 'Validation', 'Optimization', 'Scale'],
        priceFrom: '$4,500'
      }
    ]
  },
  ru: {
    localeLabel: 'Русский', siteName: 'SiteLab',
    nav: { home: 'Главная', services: 'Услуги', process: 'Процесс', contact: 'Контакты' },
    hero: { title: 'Сайты и веб-продукты для быстрого роста бизнеса', subtitle: 'SiteLab создаёт масштабируемые сайты и приложения с современным UX.', cta: 'Запустить проект' },
    audiences: { title: 'Для кого мы работаем', items: ['Стартапы', 'Малый бизнес', 'Эксперты и консультанты', 'Растущие команды'] },
    servicesSection: { title: 'Наши услуги', cta: 'Все услуги' },
    calculator: { title: 'Калькулятор стоимости сайта', submit: 'Отправить заявку', estimateLabel: 'Ориентировочный бюджет', fields: { siteType: 'Тип сайта', pages: 'Количество страниц', multilingual: 'Мультиязычность', ecommerce: 'Интернет-магазин', seo: 'SEO пакет', urgency: 'Срочность' } },
    whyUs: { title: 'Почему выбирают SiteLab', points: ['Прозрачные цены', 'Быстрые итерации', 'Доступные интерфейсы', 'Код готов к развитию'] },
    stack: { title: 'Технологический стек', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'] },
    processSection: { title: 'Этапы работы', steps: ['Бриф', 'Планирование', 'UX/UI', 'Разработка', 'Тестирование', 'Запуск и поддержка'] },
    faq: { title: 'FAQ', items: [{ q: 'Сколько длится проект?', a: 'Обычно от 3 до 8 недель в зависимости от объёма.' }, { q: 'Есть ли поддержка после запуска?', a: 'Да, сопровождаем и развиваем продукт после релиза.' }, { q: 'Делаете мультиязычные сайты?', a: 'Да, поддерживаем иврит, английский, русский и другие языки.' }] },
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
  he: {
    localeLabel: 'עברית', siteName: 'SiteLab',
    nav: { home: 'בית', services: 'שירותים', process: 'תהליך', contact: 'יצירת קשר' },
    hero: { title: 'אתרים ומוצרי ווב שמקדמים עסקים מהר יותר', subtitle: 'SiteLab בונה אתרים ואפליקציות עם UX מודרני וארכיטקטורה נקייה.', cta: 'מתחילים פרויקט' },
    audiences: { title: 'למי אנחנו עובדים', items: ['סטארטאפים', 'עסקים מקומיים', 'יועצים', 'צוותים בצמיחה'] },
    servicesSection: { title: 'השירותים שלנו', cta: 'לכל השירותים' },
    calculator: { title: 'מחשבון עלות אתר', submit: 'שליחת פנייה', estimateLabel: 'תקציב משוער', fields: { siteType: 'סוג אתר', pages: 'מספר עמודים', multilingual: 'רב-לשוני', ecommerce: 'חנות אונליין', seo: 'חבילת SEO', urgency: 'דחיפות' } },
    whyUs: { title: 'למה בוחרים ב-SiteLab', points: ['תמחור שקוף', 'איטרציות מהירות', 'ממשקים נגישים', 'קוד מוכן להתרחבות'] },
    stack: { title: 'סטאק טכנולוגי', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'] },
    processSection: { title: 'שלבי העבודה', steps: ['אפיון', 'תכנון', 'UX/UI', 'פיתוח', 'QA', 'השקה ותמיכה'] },
    faq: { title: 'שאלות נפוצות', items: [{ q: 'כמה זמן לוקח פרויקט?', a: 'ברוב המקרים בין 3 ל-8 שבועות לפי מורכבות.' }, { q: 'יש תמיכה לאחר השקה?', a: 'כן, כולל תחזוקה ושדרוגים.' }, { q: 'אתם תומכים בריבוי שפות?', a: 'כן, עברית, אנגלית, רוסית ושפות נוספות.' }] },
    contact: { title: 'נדבר על הפרויקט שלך', subtitle: 'תארו את המטרות ותקבלו תוכנית והערכה ברורה.', submit: 'שליחה', name: 'שם', email: 'אימייל', message: 'פרטי הפרויקט' },
    accessibility: { title: 'נגישות', contrast: 'ניגודיות גבוהה', largerText: 'הגדלת טקסט', reduceMotion: 'הפחתת אנימציות', skipToMain: 'דילוג לתוכן הראשי' },
    servicePage: { audienceTitle: 'מתאים עבור', includesTitle: 'מה כלול', technologiesTitle: 'טכנולוגיות', demoTitle: 'דמו ממשק', stepsTitle: 'שלבי פיתוח', cta: 'קביעת שיחת אפיון', priceFromLabel: 'מחיר החל מ-' },
    services: [
      { ...sharedServices[0], title: 'דף נחיתה', shortDescription: 'עמוד ממוקד המרות לקמפיינים והשקות מוצר.', offer: 'דף נחיתה איכותי בזמן קצר.', audience: ['השקת MVP', 'קמפיינים ממומנים', 'מוצרים חדשים'], includes: ['מבנה תוכן', 'UI רספונסיבי', 'טופס לידים'], technologies: ['Next.js', 'Tailwind CSS', 'Analytics'], steps: ['בריף', 'סקיצה', 'עיצוב', 'פיתוח', 'QA', 'השקה'], priceFrom: '$700' },
      { ...sharedServices[1], title: 'אתר תדמית', shortDescription: 'אתר רב-עמודי עם הצעת ערך, שירותים ויצירת לידים.', offer: 'נוכחות דיגיטלית מקצועית לעסק.', audience: ['חברות שירות', 'סוכנויות', 'צוותי B2B'], includes: ['עמודי ליבה', 'מבנה מוכן ל-CMS', 'זרימות יצירת קשר'], technologies: ['Next.js App Router', 'TypeScript', 'Vercel'], steps: ['מחקר', 'מפת אתר', 'עיצוב', 'פיתוח', 'הגדרת SEO', 'עלייה לאוויר'], priceFrom: '$1,600' },
      { ...sharedServices[2], title: 'חנות אונליין', shortDescription: 'קטלוג מוצרים ותהליך רכישה עם ביצועים גבוהים.', offer: 'מוכרים אונליין עם חוויית קנייה מהירה.', audience: ['מותגי ריטייל', 'חנויות נישה', 'יזמי D2C'], includes: ['קטלוג', 'סליקה', 'בסיס ניהול'], technologies: ['Next.js', 'Payment API', 'PostgreSQL'], steps: ['תכנון', 'קטלוג', 'Checkout', 'בדיקות', 'מדידה', 'השקה'], priceFrom: '$2,800' },
      { ...sharedServices[3], title: 'אפליקציית ווב', shortDescription: 'מערכת מותאמת עם הרשאות ולוגיקה עסקית.', offer: 'אוטומציה לתהליכים עם מוצר מותאם.', audience: ['צוותי תפעול', 'סטארטאפי SaaS', 'כלים פנימיים'], includes: ['ארכיטקטורה', 'אימות משתמשים', 'מודולים עסקיים'], technologies: ['Next.js', 'TypeScript', 'PostgreSQL'], steps: ['אפיון', 'ארכיטקטורה', 'MVP', 'ולידציה', 'אופטימיזציה', 'סקייל'], priceFrom: '$4,500' }
    ]
  }
};

export const getDictionary = (lang: Lang) => dictionaries[lang];

export const getServiceBySlug = (lang: Lang, slug: string) =>
  dictionaries[lang].services.find((service) => service.slug === slug);
