"use client";

import { withLang } from '@/lib/routes';
import type { Dictionary, Locale } from '@/src/i18n/types';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, useMemo } from 'react';

type NavbarProps = {
  lang: Locale;
  dictionary: Dictionary;
  localeLabels: Record<Locale, string>;
};

const CALCULATOR_LABELS: Record<Locale, string> = {
  en: 'Calculator',
  ru: 'Калькулятор',
  he: 'מחשבון'
};

export default function Navbar({ lang, dictionary, localeLabels }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  // Scroll & resize listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    const handleResize = () => setIsMobileViewport(window.innerWidth < 768);

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!(isMobileViewport || isScrolled)) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileViewport, isScrolled]);

  // Close menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const isHomePage = useMemo(() => pathname === withLang(lang) || pathname === `${withLang(lang)}/`, [lang, pathname]);
  const isCompact = isMobileViewport || isScrolled;

  const navLinks = useMemo(
    () => [
      { key: 'services', label: dictionary.nav.services },
      { key: 'process', label: dictionary.nav.process },
      { key: 'calculator', label: CALCULATOR_LABELS[lang] },
      { key: 'contact', label: dictionary.nav.contact }
    ],
    [dictionary.nav, lang]
  );

  const getSectionHref = useCallback(
    (sectionId: string) => (isHomePage ? `#${sectionId}` : `${withLang(lang)}#${sectionId}`),
    [isHomePage, lang]
  );

  const handleLocaleSwitch = useCallback(
    (nextLocale: Locale) => {
      const basePath = pathname.replace(/^\/(en|ru|he)(?=\/|$)/, `/${nextLocale}`);
      const hash = window.location.hash;
      const nextPath = `${basePath}${hash}`;

      router.push(nextPath);
      setIsMobileMenuOpen(false);
    },
    [pathname, router]
  );

  const showCompact = isMobileViewport || isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-all duration-300 ${
          isScrolled ? 'border-b border-white/10 bg-black/60 backdrop-blur-md' : 'bg-transparent'
        }`}
      />

      <div className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href={withLang(lang)}
          className="text-xl font-bold tracking-tight text-cyan-100 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
          aria-label={dictionary.siteName}
        >
          {dictionary.siteName}
        </Link>

        {!isCompact ? (
          <>
            <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-medium tracking-wide text-slate-200 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={getSectionHref(link.key)}
                  className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              {Object.entries(localeLabels).map(([locale, label]) => {
                const typedLocale = locale as Locale;
                const isActive = typedLocale === lang;

                return (
                  <button
                    key={locale}
                    type="button"
                    onClick={() => handleLocaleSwitch(typedLocale)}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${
                      isActive
                        ? 'border-cyan-300/70 bg-cyan-300/20 text-cyan-100'
                        : 'border-white/20 bg-white/5 text-slate-200 hover:border-cyan-300/40 hover:text-cyan-100'
                    }`}
                    aria-label={`Switch language to ${label}`}
                  >
                    {typedLocale}
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        {isCompact ? (
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/20 bg-white/10 p-2.5 text-slate-100 transition hover:border-cyan-300/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
          >
            <span className="sr-only">Open navigation menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>

      <div className="pointer-events-none relative mx-auto w-full max-w-7xl px-6">
        <div
          id="navbar-menu-panel"
          className={`pointer-events-auto absolute left-1/2 top-2 w-[min(92vw,460px)] -translate-x-1/2 transform rounded-2xl border border-white/10 bg-black/80 p-6 shadow-xl backdrop-blur-lg transition-all duration-200 ${
            isMobileMenuOpen && isCompact ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 invisible'
          }`}
        >
          <nav aria-label="Compact navigation" className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.key}`}
                href={getSectionHref(link.key)}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2 text-start text-sm font-medium text-slate-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
            {Object.entries(localeLabels).map(([locale, label]) => {
              const typedLocale = locale as Locale;
              const isActive = typedLocale === lang;
              return (
                <button
                  key={locale}
                  type="button"
                  onClick={() => handleLocaleSwitch(typedLocale)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${
                    isActive
                      ? 'border-cyan-300/70 bg-cyan-300/20 text-cyan-100'
                      : 'border-white/20 bg-white/5 text-slate-200 hover:border-cyan-300/40 hover:text-cyan-100'
                  }`}
                  aria-label={`Switch language to ${label}`}
                >
                  {typedLocale}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
