"use client";

import { withLang } from "@/lib/routes";
import type { Dictionary, Locale } from "@/src/i18n/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavbarProps = {
  lang: Locale;
  dictionary: Dictionary;
  localeLabels: Record<Locale, string>;
};

const CALCULATOR_LABELS: Record<Locale, string> = {
  en: "Calculator",
  ru: "Калькулятор",
  he: "מחשבון"
};

const LOCALES: Locale[] = ["en", "ru", "he"];

export default function Navbar({ lang, dictionary, localeLabels }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const syncViewportState = () => {
      setIsScrolled(window.scrollY > 80);
      setIsDesktop(window.innerWidth >= 768);
    };

    syncViewportState();
    window.addEventListener("scroll", syncViewportState, { passive: true });
    window.addEventListener("resize", syncViewportState);

    return () => {
      window.removeEventListener("scroll", syncViewportState);
      window.removeEventListener("resize", syncViewportState);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = useMemo(
    () => [
      { key: "services", label: dictionary.nav.services, href: `${withLang(lang)}#services` },
      { key: "process", label: dictionary.nav.process, href: `${withLang(lang)}#process` },
      { key: "calculator", label: CALCULATOR_LABELS[lang], href: `${withLang(lang)}#calculator` },
      { key: "contact", label: dictionary.nav.contact, href: `${withLang(lang)}#contact` }
    ],
    [dictionary.nav.contact, dictionary.nav.process, dictionary.nav.services, lang]
  );

  const showDesktopNav = isDesktop && !isScrolled;

  const switchLanguage = (nextLocale: Locale) => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const nextPath = pathname.replace(/^\/(en|ru|he)(?=\/|$)/, `/${nextLocale}`);
    router.push(`${nextPath}${hash}`);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${
        isScrolled ? "border-b border-white/10 bg-black/80 py-3 backdrop-blur" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href={withLang(lang)} className="text-lg font-semibold text-white transition hover:text-cyan-300">
          {dictionary.siteName}
        </Link>

        {showDesktopNav ? (
          <>
            <nav className="flex items-center gap-8 text-sm text-slate-200">
              {navLinks.map((link) => (
                <Link key={link.key} href={link.href} className="transition hover:text-cyan-300">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {LOCALES.map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={() => switchLanguage(locale)}
                  className={`rounded-full border px-3 py-1 text-xs uppercase transition ${
                    locale === lang
                      ? "border-cyan-400 text-cyan-200"
                      : "border-white/20 text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
                  }`}
                >
                  {localeLabels[locale] ?? locale.toUpperCase()}
                </button>
              ))}
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/20 bg-white/5 p-2 text-white transition hover:border-cyan-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        )}
      </div>

      <div
        className={`absolute left-1/2 top-full mt-4 w-[min(22rem,calc(100%-3rem))] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/80 p-5 shadow-xl backdrop-blur-lg transition-all duration-200 ${
          menuOpen && !showDesktopNav
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-center text-sm text-slate-100 transition hover:bg-white/10 hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-4 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
          {LOCALES.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => switchLanguage(locale)}
              className={`rounded-full border px-3 py-1 text-xs uppercase transition ${
                locale === lang
                  ? "border-cyan-400 text-cyan-200"
                  : "border-white/20 text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
              }`}
            >
              {localeLabels[locale] ?? locale.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
