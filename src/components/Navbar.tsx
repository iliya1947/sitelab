"use client";

import { withLang } from '@/lib/routes';
import type { Dictionary, Locale } from '@/src/i18n/types';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

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
  const [isScrolled, setIsScrolled] = useState(() => (typeof window !== 'undefined' ? window.scrollY > 80 : false));
  const [isMobileViewport, setIsMobileViewport] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    const handleResize = () => {
      setIsMobileViewport(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const isCompact = isMobileViewport || isScrolled;
    if (!isCompact && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen, isMobileViewport, isScrolled]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const isHomePage = useMemo(() => pathname === withLang(lang) || pathname === `${withLang(lang)}/`, [lang, pathname]);
  const showCompactLayout = isMobileViewport || isScrolled;
  const shouldShowHamburger = isMobileViewport || isScrolled;

  const navLinks = useMemo(
    () => [
      { key: 'services', label: dictionary.nav.services },
      { key: 'process', label: dictionary.nav.process },
      { key: 'calculator', label: CALCULATOR_LABELS[lang] },
      { key: 'contact', label: dictionary.nav.contact }
    ],
    [dictionary.nav.contact, dictionary.nav.process, dictionary.nav.services, lang]
  );

  const getSectionHref = useCallback(
    (sectionId: string) => {
      if (isHomePage) return `#${sectionId}`;
      return `${withLang(lang)}#${sectionId}`;
    },
    [isHomePage, lang]
  );

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleLocaleSwitch = useCallback(
    (nextLocale: Locale) => {
      const hash = window.location.hash;
      const nextPath = pathname.replace(/^\/(en|ru|he)/, `/${nextLocale}`);
      router.push(`${nextPath}${hash}`);
      setIsMobileMenuOpen(false);
    },
    [pathname, router]
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        showCompactLayout
          ? 'border-b border-white/10 bg-[rgba(10,10,15,0.85)] py-3 backdrop-blur-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href={withLang(lang)}
          className="text-xl font-bold tracking-tight text-cyan-100 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
        >
          {dictionary.siteName}
        </Link>

        {!showCompactLayout ? (
          <>
            <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium tracking-wide text-slate-200 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={getSectionHref(link.key)}
                  onClick={closeMobileMenu}
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

        {shouldShowHamburger ? (
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="navbar-menu-panel"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`rounded-lg border border-white/20 bg-white/5 p-2 text-slate-100 transition hover:border-cyan-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 ${
              isScrolled ? 'md:block' : 'md:hidden'
            }`}
          >
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        ) : null}
      </div>

      <div
        id="navbar-menu-panel"
        className={`mx-auto max-w-6xl overflow-hidden px-4 transition-all duration-200 ${
          isMobileMenuOpen && showCompactLayout ? 'max-h-[28rem] pb-4 opacity-100 translate-y-0' : 'max-h-0 pb-0 opacity-0 -translate-y-2'
        }`}
      >
        <nav aria-label="Mobile navigation" className="card space-y-3 rounded-2xl p-4">
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.key}`}
              href={getSectionHref(link.key)}
              onClick={closeMobileMenu}
              className="block rounded-lg px-2 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 flex flex-wrap gap-2 border-t border-white/10 pt-3">
            {Object.entries(localeLabels).map(([locale, label]) => {
              const typedLocale = locale as Locale;
              const isActive = typedLocale === lang;

              return (
                <button
                  key={`mobile-${locale}`}
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
        </nav>
      </div>
    </header>
  );
}
