import AccessibilityMenu from '@/components/AccessibilityMenu';
import { AccessibilityProvider } from '@/components/accessibility/AccessibilityProvider';
import HtmlLanguageSync from '@/components/accessibility/HtmlLanguageSync';
import Navbar from '@/src/components/Navbar';
import { DictionaryProvider } from '@/src/i18n/DictionaryProvider';
import { getDictionary, isLang, locales, Locale } from '@/src/i18n';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!isLang(params.lang)) redirect('/');

  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);
  const localeLabels = Object.fromEntries(
    await Promise.all(locales.map(async (locale) => [locale, (await getDictionary(locale)).localeLabel]))
  ) as Record<Locale, string>;

  return (
    <AccessibilityProvider>
      <DictionaryProvider locale={lang} dictionary={dictionary}>
        <HtmlLanguageSync lang={lang} />
        <div dir={lang === 'he' ? 'rtl' : 'ltr'} className="relative min-h-screen">
          <Navbar lang={lang} dictionary={dictionary} localeLabels={localeLabels} />
          <main id="main-content" className="mx-auto max-w-6xl space-y-8 px-4 pb-14 pt-24 md:pt-28">
            {children}
          </main>
          <AccessibilityMenu />
        </div>
      </DictionaryProvider>
    </AccessibilityProvider>
  );
}
