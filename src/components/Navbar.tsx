'use client';

import { withLang } from '@/lib/routes';
import type { Dictionary, Locale } from '@/src/i18n/types';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type NavbarProps = {
  lang: Locale;
  dictionary: Dictionary;
  localeLabels: Record<Locale, string>;
};

const LOCALES: Locale[] = ['en', 'ru', 'he'];

const CALCULATOR_LABELS: Record<Locale, string> = {
  en: 'Calculator',
  ru: 'Калькулятор',
  he: 'מחשבון'
};

const CTA_LABELS: Record<Locale, string> = {
  en: 'Start project',
  ru: 'Начать проект',
  he: 'התחל פרויקט'
};

const SECTION_IDS = ['services', 'process', 'calculator', 'contact'] as const;

export default function Navbar({ lang, dictionary, localeLabels }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHomePath = pathname === `/${lang}`;

  const sectionLinks = useMemo(
    () =>
      [
        { id: 'services', label: dictionary.nav.services },
        { id: 'process', label: dictionary.nav.process },
        { id: 'calculator', label: CALCULATOR_LABELS[lang] },
        { id: 'contact', label: dictionary.nav.contact }
      ] as Array<{ id: (typeof SECTION_IDS)[number]; label: string }>,
    [dictionary.nav.contact, dictionary.nav.process, dictionary.nav.services, lang]
  );

  const getSectionHref = (id: (typeof SECTION_IDS)[number]) => (isHomePath ? `#${id}` : `${withLang(lang)}#${id}`);
  const ctaHref = getSectionHref('contact');

  const switchLanguage = (nextLocale: Locale) => {
    if (typeof window === 'undefined') return;

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const normalizedPath = currentPath.replace(/^\/(en|ru|he)(?=\/|$)/, `/${nextLocale}`);
    router.push(`${normalizedPath}${currentHash}`);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-40px)] max-w-[1100px] -translate-x-1/2">
      <div
        className={`relative mx-auto flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-2xl transition-all duration-300 [transition-timing-function:cubic-bezier(.16,1,.3,1)] md:px-6 ${
          scrolled
            ? 'border-white/20 bg-slate-900/75 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_28px_rgba(59,130,246,0.16)]'
            : 'border-white/10 bg-slate-900/55 shadow-[0_20px_60px_rgba(0,0,0,0.48),0_0_18px_rgba(59,130,246,0.08)] md:py-4'
        }`}
      >
        <Link
          href={withLang(lang)}
          className="inline-flex items-center text-base font-semibold tracking-wide text-white transition-colors hover:text-white/90"
        >
          {dictionary.siteName}
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 px-6 text-sm text-white/80 md:flex">
          {sectionLinks.map((link) => (
            <Link
              key={link.id}
              href={getSectionHref(link.id)}
              className="transition-all duration-300 [transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:text-white hover:[text-shadow:0_0_10px_rgba(59,130,246,.6)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={ctaHref}
            className="rounded-[10px] bg-gradient-to-r from-blue-500 to-violet-500 px-[18px] py-[10px] text-sm font-semibold text-white transition-all duration-300 [transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,.5)]"
          >
            {CTA_LABELS[lang]}
          </Link>
          {LOCALES.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => switchLanguage(locale)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                locale === lang
                  ? 'border-cyan-300/70 bg-cyan-400/15 text-cyan-100'
                  : 'border-white/20 text-slate-200 hover:border-cyan-300/60 hover:text-cyan-100'
              }`}
            >
              {localeLabels[locale]}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-slate-100 transition-colors md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div
        className={`mt-2 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/85 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-300 [transition-timing-function:cubic-bezier(.16,1,.3,1)] md:hidden ${
          mobileMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        <nav className="space-y-1">
          {sectionLinks.map((link) => (
            <Link
              key={link.id}
              href={getSectionHref(link.id)}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={ctaHref}
          onClick={() => setMobileMenuOpen(false)}
          className="mt-3 inline-flex w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-blue-500 to-violet-500 px-[18px] py-[10px] text-sm font-semibold text-white transition-all duration-300 [transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:shadow-[0_10px_30px_rgba(59,130,246,.45)]"
        >
          {CTA_LABELS[lang]}
        </Link>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-3">
          {LOCALES.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => switchLanguage(locale)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                locale === lang ? 'border-cyan-300/70 text-cyan-100' : 'border-white/20 text-slate-200'
              }`}
            >
              {localeLabels[locale]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
