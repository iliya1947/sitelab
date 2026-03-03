import AccessibilityMenu from '@/components/AccessibilityMenu';
import { Lang, getDictionary, isLang, languages } from '@/lib/i18n';
import { withLang } from '@/lib/routes';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!isLang(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);

  return (
    <div dir={lang === 'he' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <Link href={withLang(lang)} className="text-xl font-bold text-brand-900">
            {dictionary.siteName}
          </Link>
          <nav aria-label="Main navigation" className="flex items-center gap-4 text-sm font-medium">
            <Link href={withLang(lang)}>{dictionary.nav.home}</Link>
            <Link href={withLang(lang, '/services')}>{dictionary.nav.services}</Link>
            <Link href={withLang(lang, '/process')}>{dictionary.nav.process}</Link>
            <Link href={withLang(lang, '/contact')}>{dictionary.nav.contact}</Link>
          </nav>
          <div className="flex gap-2 text-sm">
            {languages.map((locale) => (
              <Link key={locale} href={withLang(locale)} className="rounded-full border border-slate-300 px-3 py-1">
                {getDictionary(locale).localeLabel}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl space-y-16 px-4 py-8">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600">
          © {new Date().getFullYear()} SiteLab. Built with Next.js + TypeScript.
        </div>
      </footer>

      <AccessibilityMenu labels={dictionary.accessibility} />
    </div>
  );
}
