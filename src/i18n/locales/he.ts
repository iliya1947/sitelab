import type { Dictionary } from '@/src/i18n/types';

export const he: Dictionary = {
  localeLabel: 'עברית',
  siteName: 'SiteLab',
  footer: { copyright: 'נבנה עם Next.js + TypeScript.' },
  nav: { home: 'בית', services: 'שירותים', process: 'תהליך', contact: 'יצירת קשר' },
  hero: {
    badge: 'הנדסת ווב פרימיום',
    title: {
      line1: 'אתרי אינטרנט בעלי ביצועים גבוהים',
      line2: 'שהופכים מבקרים ללקוחות'
    },
    title1: 'בונים אתרים',
    title2: 'ומוצרים דיגיטליים',
    title3: 'שמקדמים עסקים',
    subtitle: 'אתרים מותאמים אישית עם ביצועים גבוהים, SEO מובנה ומהירות טעינה מעולה.',
    ctaPrimary: 'התחל פרויקט',
    ctaSecondary: 'חשב מחיר לאתר',
    primaryCTA: 'מתחילים פרויקט',
    secondaryCTA: 'צפייה בשירותים',
    trustedByTitle: 'סטארטאפים וצוותים בצמיחה עובדים איתנו לאורך זמן.',
    trustedByItems: ['Seed-stage SaaS', 'צוותי מוצר בגיבוי VC', 'מותגי B2B בצמיחה', 'eCommerce פרימיום'],
    statCards: [
      { title: 'ביצועים', value: '98 Lighthouse', detail: 'חוויית משתמש מהירה, יציבה וממוקדת המרות' },
      { title: 'מהירות אספקה', value: 'השקה תוך 3 שבועות', detail: 'מאסטרטגיה ועד עלייה לאוויר בקצב גבוה' },
      { title: 'SEO', value: 'מותאם למנועי חיפוש', detail: 'מבנה נכון לגילוי אורגני ותנועה איכותית' },
      { title: 'סטאק', value: 'Next.js / TypeScript', detail: 'ארכיטקטורה מודרנית לצמיחה מהירה' }
    ] as any
  },
  audiences: { title: 'למי אנחנו מתאימים', items: ['סטארטאפים', 'עסקים מקומיים', 'יועצים', 'צוותים בצמיחה'] },
  servicesSection: { title: 'השירותים שלנו', cta: 'לכל השירותים' },
  servicesPage: {
    title: 'שירותי פיתוח האתרים שלנו',
    description: 'אנחנו מעצבים ובונים אתרים מהירים וביצועיסטיים עם דגש על מהירות, נראות ב-SEO והמרות.'
  },
  techStack: { title: 'נבנה עם טכנולוגיות מודרניות', subtitle: 'אנחנו בונים אתרים עם כלים מודרניים המתמקדים במהירות, מדרגיות וביצועים.' },
  services: {
    title: 'השירותים שלנו',
    learnMore: 'לפרטים נוספים ←',
    items: [
      { slug: 'landing-pages', title: 'דפי נחיתה', shortDescription: 'דפי נחיתה ממירים שנועדו להפוך מבקרים ללקוחות.', longDescription: 'אנחנו בונים דפי נחיתה מהירים עם מיקוד חד בהמרות — לקמפיינים, השקות מוצרים ולכידת לידים.', features: ['מבנה ממוקד המרה', 'מהירות טעינה גבוהה', 'התאמה מלאה למובייל', 'הטמעת SEO בסיסית', 'חיבור לאנליטיקה'], priceFrom: '$900' },
      { slug: 'business-websites', title: 'אתרי תדמית לעסקים', shortDescription: 'אתרים מקצועיים לעסקים שמחזקים אמון ומייצרים פניות.', longDescription: 'אנחנו בונים אתרי עסקים מודרניים שמציגים בבירור את החברה, השירותים והערך ללקוחות פוטנציאליים.', features: ['עיצוב מקצועי', 'הצגת שירותים ברורה', 'מבנה ליצירת לידים', 'מותאם SEO', 'ארכיטקטורת רב-עמודים'], priceFrom: '$1,500' },
      { slug: 'ecommerce-websites', title: 'אתרי איקומרס', shortDescription: 'חנויות אונליין מהירות עם דגש על חוויית קנייה והמרה.', longDescription: 'אנחנו מפתחים אתרי איקומרס מודרניים שמקדמים גילוי מוצרים, תהליך רכישה חלק וצמיחה עקבית.', features: ['קטלוג מוצרים', 'אינטגרציית תשלומים', 'שיפור תהליך Checkout', 'חוויית מובייל לקנייה', 'ארכיטקטורה מהירה וסקיילבילית'], priceFrom: '$2,800' },
      { slug: 'web-applications', title: 'ווב אפליקציות', shortDescription: 'אפליקציות ווב מותאמות אישית לצרכים העסקיים שלכם.', longDescription: 'אנחנו בונים אפליקציות ווב מותאמות לעסקים שצריכים מעבר לאתר רגיל — מדשבורדים ועד פלטפורמות מורכבות.', features: ['פונקציונליות מותאמת אישית', 'מערכות דשבורד', 'אינטגרציות API', 'ארכיטקטורה סקיילבילית', 'Backend מאובטח'], priceFrom: '$4,800' },
      { slug: 'website-automation', title: 'אוטומציה לאתר', shortDescription: 'אוטומציה לתהליכים שחוסכת זמן ומייעלת עבודה שוטפת.', longDescription: 'אנחנו מחברים בין האתר לתהליכים העסקיים שלכם באמצעות אוטומציות שמקטינות עבודה ידנית ומשפרות יעילות.', features: ['אוטומציית תהליכים', 'אינטגרציות API', 'אוטומציית לידים', 'חיבורי CRM', 'אופטימיזציית תהליכים'], priceFrom: '$1,900' },
      { slug: 'website-optimization', title: 'אופטימיזציית אתרים', shortDescription: 'שיפור מהירות, ביצועים והמרות באתר קיים.', longDescription: 'אנחנו מנתחים ומשפרים אתרים קיימים כדי להעלות ביצועים, לשדרג UX ולהגדיל שיעורי המרה בפועל.', features: ['שיפור מהירות', 'שדרוגי UX', 'אודיט ביצועים', 'שיפור המרות', 'תיקונים טכניים'], priceFrom: '$1,200' }
    ]
  },
  calculator: {
    title: 'מחשבון עלות אתר',
    submit: 'שליחת פנייה',
    estimateLabel: 'תקציב משוער',
    estimateRangeLabel: 'טווח מחיר משוער',
    summaryTitle: 'סיכום הפרויקט',
    summaryEmpty: 'עדיין לא נבחרו פיצ׳רים נוספים.',
    selectedTypeLabel: 'סוג האתר',
    selectedFeaturesLabel: 'פיצ׳רים שנבחרו',
    finalPriceLabel: 'מחיר סופי משוער',
    currencySymbol: '₪',
    fields: { siteType: 'סוג אתר', pages: 'מספר עמודים', features: 'אפשרויות פיצ׳רים' },
    siteTypes: { landingPage: 'דף נחיתה', businessWebsite: 'אתר עסקי', webApplication: 'אפליקציית ווב' },
    features: {
      seoOptimization: 'אופטימיזציית SEO',
      multiLanguageSupport: 'תמיכה בריבוי שפות',
      advancedAnimations: 'אנימציות מתקדמות',
      cmsIntegration: 'אינטגרציית CMS',
      customIntegrations: 'אינטגרציות מותאמות'
    }
  },
  whyUs: { title: 'למה בוחרים ב-SiteLab', points: ['תמחור שקוף', 'איטרציות מהירות', 'ממשקים נגישים', 'קוד מוכן לצמיחה'] },
  stack: { title: 'הטכנולוגיות שלנו', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'] },
  process: { title: 'איך אנחנו עובדים', steps: ['היכרות', 'תכנון', 'עיצוב', 'פיתוח', 'השקה', 'צמיחה'] },
  trust: {
    title: 'למה עסקים בוחרים בנו',
    items: {
      performance: 'ארכיטקטורה עם ביצועים גבוהים',
      technology: 'טכנולוגיות ווב מודרניות',
      custom: 'גישה מותאמת אישית לפיתוח',
      delivery: 'אספקת פרויקטים מהירה'
    }
  },
  faq: { title: 'שאלות נפוצות', items: [{ q: 'כמה זמן נמשך פרויקט?', a: 'ברוב המקרים בין 3 ל-8 שבועות, בהתאם להיקף.' }, { q: 'יש תמיכה גם אחרי ההשקה?', a: 'כן, אנחנו ממשיכים עם שיפורים, תחזוקה והתפתחות המוצר.' }, { q: 'אפשר אתר בכמה שפות?', a: 'בהחלט. אנחנו בונים פתרונות רב-לשוניים כולל עברית, אנגלית ורוסית.' }] },
  consultation: {
    title: 'ייעוץ אתרים חינם',
    subtitle: 'קבלו ייעוץ מקצועי ותוכנית ברורה לפרויקט האתר שלכם.',
    benefits: ['ייעוץ אסטרטגיית פרויקט', 'המלצות טכנולוגיות', 'הערכת עלויות', 'תכנון לוחות זמנים'],
    cta: 'קבעו ייעוץ חינם'
  },
  contact: { title: 'בואו נתחיל את הפרויקט שלכם', subtitle: 'ספרו לנו מה אתם צריכים ונחזור עם תוכנית ברורה והערכת מחיר.', submit: 'שליחה', name: 'שם', email: 'אימייל', message: 'פרטי הפרויקט', success: 'תודה! נחזור אליכם בקרוב.' },
  accessibility: { title: 'נגישות', contrast: 'ניגודיות גבוהה', largerText: 'הגדלת טקסט', reduceMotion: 'הפחתת אנימציות', skipToMain: 'דילוג לתוכן הראשי' },
  servicePage: { audienceTitle: 'למי זה מתאים', includesTitle: 'מה כלול', technologiesTitle: 'טכנולוגיות', demoTitle: 'הדגמת ממשק', demoPlaceholder: 'בלוק הדגמה עבור ממשק', stepsTitle: 'שלבי העבודה', cta: 'לתיאום שיחה', priceFromLabel: 'החל מ-', detailsTitle: 'פירוט השירות', featuresTitle: 'פיצ׳רים', quoteCta: 'קבלו הצעת מחיר' }
};
