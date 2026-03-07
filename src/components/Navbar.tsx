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

const SECTION_IDS = ['services', 'process', 'calculator', 'contact'] as const;

export default function Navbar({ lang, dictionary, localeLabels }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleViewportState = () => {
      const mobile = window.innerWidth < 768;
      const scrolled = window.scrollY > 20;
      setIsCompact(mobile || scrolled);
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    handleViewportState();
    window.addEventListener('scroll', handleViewportState, { passive: true });
    window.addEventListener('resize', handleViewportState);

    return () => {
      window.removeEventListener('scroll', handleViewportState);
      window.removeEventListener('resize', handleViewportState);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
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

  const switchLanguage = (nextLocale: Locale) => {
    if (typeof window === 'undefined') return;

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const normalizedPath = currentPath.replace(/^\/(en|ru|he)(?=\/|$)/, `/${nextLocale}`);
    router.push(`${normalizedPath}${currentHash}`);
  };

  const showDrawer = isCompact && menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border px-4 transition-[background-color,border-color,box-shadow,transform,opacity] duration-300 md:h-[72px] md:px-6 ${
          isCompact
            ? 'border-white/15 bg-slate-950/70 shadow-[0_20px_60px_rgba(2,6,23,0.55)] backdrop-blur-xl'
            : 'border-white/10 bg-slate-950/45'
        }`}
      >
        <Link href={withLang(lang)} className="inline-flex items-center gap-2 text-base font-semibold tracking-wide text-white transition-colors hover:text-cyan-200">
          {isCompact ? (
            <>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-300/15 text-xs font-bold text-cyan-100">
                SL
              </span>
              <span className="sr-only">{dictionary.siteName}</span>
            </>
          ) : (
            dictionary.siteName
          )}
        </Link>

        {!isCompact ? (
          <>
            <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
              {sectionLinks.map((link) => (
                <Link key={link.id} href={getSectionHref(link.id)} className="transition-colors hover:text-cyan-200">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
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
          </>
        ) : (
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-slate-100 transition-colors md:inline-flex"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950/85 p-4 shadow-2xl backdrop-blur-xl transition-[opacity,transform] duration-300 md:hidden ${
          showDrawer ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <nav className="space-y-1">
          {sectionLinks.map((link) => (
            <Link
              key={link.id}
              href={getSectionHref(link.id)}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-slate-100 transition-colors hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>
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
