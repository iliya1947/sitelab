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
    ]
  },
  audiences: { title: 'למי אנחנו מתאימים', items: ['סטארטאפים', 'עסקים מקומיים', 'יועצים', 'צוותים בצמיחה'] },
  servicesSection: { title: 'השירותים שלנו', cta: 'לכל השירותים' },
  services: {
    title: 'השירותים שלנו',
    learnMore: 'לפרטים נוספים ←',
    items: [
      { slug: 'landing-page', icon: '🚀', title: 'דף נחיתה', shortDescription: 'אתר חד-עמודי להשקת מוצר וקמפיינים ממומנים.', offer: 'משיקים דף נחיתה ממיר בתוך ימים בודדים.', audience: ['השקות MVP', 'קמפיינים ממומנים', 'מוצרים חדשים'], includes: ['מבנה תוכן', 'ממשק רספונסיבי', 'טופס לידים'], technologies: ['Next.js', 'Tailwind CSS', 'Analytics'], steps: ['בריף', 'אפיון', 'עיצוב', 'פיתוח', 'QA', 'השקה'], priceFrom: '$700' },
      { slug: 'corporate-website', icon: '🏢', title: 'אתר תדמית', shortDescription: 'אתר רב-עמודי לחברה עם שירותים והנעה לפניות.', offer: 'בונים נוכחות דיגיטלית חזקה שמייצרת פניות איכותיות.', audience: ['חברות שירותים', 'סוכנויות', 'צוותי B2B'], includes: ['עמודי ליבה', 'מבנה תומך CMS', 'תהליכי יצירת קשר'], technologies: ['Next.js App Router', 'TypeScript', 'Vercel'], steps: ['מחקר', 'מפת אתר', 'עיצוב', 'פיתוח', 'הטמעת SEO', 'עלייה לאוויר'], priceFrom: '$1,600' },
      { slug: 'ecommerce', icon: '🛍️', title: 'חנות אונליין', shortDescription: 'קטלוג, סליקה ותהליך רכישה עם ביצועים גבוהים.', offer: 'פותחים ערוץ מכירות דיגיטלי מהיר ונוח ללקוחות.', audience: ['מותגי ריטייל', 'חנויות נישה', 'מותגי D2C'], includes: ['קטלוג מוצרים', 'אינטגרציית תשלום', 'ניהול בסיסי'], technologies: ['Next.js', 'Payment API', 'PostgreSQL'], steps: ['תכנון', 'קטלוג', 'Checkout', 'בדיקות', 'מדידה', 'השקה'], priceFrom: '$2,800' },
      { slug: 'web-app', icon: '⚙️', title: 'אפליקציית ווב', shortDescription: 'מערכת מותאמת עם הרשאות, נתונים ולוגיקה עסקית.', offer: 'מייעלים תהליכים עסקיים עם מוצר ווב מותאם אישית.', audience: ['צוותי תפעול', 'סטארטאפי SaaS', 'מערכות פנים ארגוניות'], includes: ['ארכיטקטורה', 'התחברות מאובטחת', 'מודולים עסקיים'], technologies: ['Next.js', 'TypeScript', 'PostgreSQL'], steps: ['Discovery', 'ארכיטקטורה', 'MVP', 'ולידציה', 'אופטימיזציה', 'סקייל'], priceFrom: '$4,500' }
    ]
  },
  calculator: {
    title: 'מחשבון עלות אתר', submit: 'שליחת פנייה', estimateLabel: 'תקציב משוער',
    fields: { siteType: 'סוג אתר', pages: 'מספר עמודים', multilingual: 'רב-לשוני', ecommerce: 'חנות אונליין', seo: 'חבילת SEO', urgency: 'דחיפות' },
    siteTypes: { landing: 'דף נחיתה', corporate: 'אתר תדמית', ecommerce: 'חנות אונליין', webapp: 'אפליקציית ווב' }
  },
  whyUs: { title: 'למה בוחרים ב-SiteLab', points: ['תמחור שקוף', 'איטרציות מהירות', 'ממשקים נגישים', 'קוד מוכן לצמיחה'] },
  stack: { title: 'הטכנולוגיות שלנו', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'] },
  process: { title: 'איך אנחנו עובדים', steps: ['היכרות', 'תכנון', 'עיצוב', 'פיתוח', 'השקה', 'צמיחה'] },
  faq: { title: 'שאלות נפוצות', items: [{ q: 'כמה זמן נמשך פרויקט?', a: 'ברוב המקרים בין 3 ל-8 שבועות, בהתאם להיקף.' }, { q: 'יש תמיכה גם אחרי ההשקה?', a: 'כן, אנחנו ממשיכים עם שיפורים, תחזוקה והתפתחות המוצר.' }, { q: 'אפשר אתר בכמה שפות?', a: 'בהחלט. אנחנו בונים פתרונות רב-לשוניים כולל עברית, אנגלית ורוסית.' }] },
  consultation: {
    title: 'ייעוץ אתרים חינם',
    subtitle: 'קבלו ייעוץ מקצועי ותוכנית ברורה לפרויקט האתר שלכם.',
    benefits: ['ייעוץ אסטרטגיית פרויקט', 'המלצות טכנולוגיות', 'הערכת עלויות', 'תכנון לוחות זמנים'],
    cta: 'קבעו ייעוץ חינם'
  },
  contact: { title: 'בואו נתחיל את הפרויקט שלכם', subtitle: 'ספרו לנו מה אתם צריכים ונחזור עם תוכנית ברורה והערכת מחיר.', submit: 'שליחה', name: 'שם', email: 'אימייל', message: 'פרטי הפרויקט', success: 'תודה! נחזור אליכם בקרוב.' },
  accessibility: { title: 'נגישות', contrast: 'ניגודיות גבוהה', largerText: 'הגדלת טקסט', reduceMotion: 'הפחתת אנימציות', skipToMain: 'דילוג לתוכן הראשי' },
  servicePage: { audienceTitle: 'למי זה מתאים', includesTitle: 'מה כלול', technologiesTitle: 'טכנולוגיות', demoTitle: 'הדגמת ממשק', demoPlaceholder: 'בלוק הדגמה עבור ממשק', stepsTitle: 'שלבי העבודה', cta: 'לתיאום שיחה', priceFromLabel: 'החל מ-' }
};
