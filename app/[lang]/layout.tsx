import AccessibilityMenu from '@/components/AccessibilityMenu';
import { AccessibilityProvider } from '@/components/accessibility/AccessibilityProvider';
import HtmlLanguageSync from '@/components/accessibility/HtmlLanguageSync';
import { withLang } from '@/lib/routes';
import { DictionaryProvider } from '@/src/i18n/DictionaryProvider';
import { getDictionary, isLocale, locales, Locale } from '@/src/i18n';
import Link from 'next/link';
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
  const localeLabels = Object.fromEntries(await Promise.all(locales.map(async (locale) => [locale, (await getDictionary(locale)).localeLabel])));

  return (
    <AccessibilityProvider>
      <DictionaryProvider locale={lang} dictionary={dictionary}>
        <HtmlLanguageSync lang={lang} />
        <div dir={lang === 'he' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#05070f] text-slate-100">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
              <Link href={withLang(lang)} className="text-xl font-bold tracking-tight text-cyan-100">
                {dictionary.siteName}
              </Link>
              <nav aria-label="Main navigation" className="flex items-center gap-4 text-sm font-medium tracking-wide text-slate-200">
                <Link href={withLang(lang)} className="transition hover:text-cyan-200">{dictionary.nav.home}</Link>
                <Link href={withLang(lang, '/services')} className="transition hover:text-cyan-200">{dictionary.nav.services}</Link>
                <Link href={withLang(lang, '/process')} className="transition hover:text-cyan-200">{dictionary.nav.process}</Link>
                <Link href={withLang(lang, '/contact')} className="transition hover:text-cyan-200">{dictionary.nav.contact}</Link>
              </nav>
              <div className="flex gap-2 text-sm">
                {locales.map((locale) => (
                  <Link key={locale} href={withLang(locale)} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-slate-200">
                    {localeLabels[locale]}
                  </Link>
                ))}
              </div>
            </div>
          </header>

          <main id="main-content" className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:py-12">
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
