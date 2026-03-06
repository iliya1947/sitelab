import '@/styles/globals.css';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import { AccessibilityProvider } from '@/components/accessibility/AccessibilityProvider';
import HtmlLanguageSync from '@/components/accessibility/HtmlLanguageSync';
import { DictionaryProvider } from '@/src/i18n/DictionaryProvider';
import { getDictionary, isLocale, locales, Locale } from '@/src/i18n';
import Navbar from '@/src/components/Navbar';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!isLocale(params.lang)) {
    notFound();
  }

  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);
  const localeLabels = Object.fromEntries(await Promise.all(locales.map(async (locale) => [locale, (await getDictionary(locale)).localeLabel]))) as Record<Locale, string>;

  return (
    <AccessibilityProvider>
      <DictionaryProvider locale={lang} dictionary={dictionary}>
        <HtmlLanguageSync lang={lang} />
        <div dir={lang === 'he' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#05070f] text-slate-100">
          <Navbar lang={lang} dictionary={dictionary} localeLabels={localeLabels} />

          <main id="main-content" className="mx-auto max-w-6xl space-y-6 px-4 pt-24 pb-8 md:pt-24 md:pb-12">
            {children}
          </main>

          <footer className="border-t border-white/10 bg-slate-950/70">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-400">
              © {new Date().getFullYear()} {dictionary.siteName}. {dictionary.footer.copyright}
            </div>
          </footer>

          <AccessibilityMenu />
        </div>
      </DictionaryProvider>
    </AccessibilityProvider>
  );
}
