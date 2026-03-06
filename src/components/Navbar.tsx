"use client";

import { withLang } from "@/lib/routes";
import type { Dictionary, Locale } from "@/src/i18n/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

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

export default function Navbar({ lang, dictionary, localeLabels }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { key: "home", label: dictionary.nav.home, href: withLang(lang) },
      { key: "services", label: dictionary.nav.services, href: `${withLang(lang)}#services` },
      { key: "process", label: dictionary.nav.process, href: `${withLang(lang)}#process` },
      { key: "calculator", label: CALCULATOR_LABELS[lang], href: `${withLang(lang)}#calculator` },
      { key: "contact", label: dictionary.nav.contact, href: `${withLang(lang)}#contact` }
    ],
    [dictionary.nav.contact, dictionary.nav.home, dictionary.nav.process, dictionary.nav.services, lang]
  );

  const handleLocaleSwitch = useCallback(
    (nextLocale: Locale) => {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      const nextPath = /^\/(en|ru|he)(\/|$)/.test(pathname)
        ? pathname.replace(/^\/(en|ru|he)(?=\/|$)/, `/${nextLocale}`)
        : `/${nextLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;

      router.push(`${nextPath}${hash}`);
      setMenuOpen(false);
    },
    [pathname, router]
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href={withLang(lang)} className="text-lg font-semibold text-cyan-100 hover:text-cyan-200">
          {dictionary.siteName}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.key} href={link.href} className="transition hover:text-cyan-300">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden gap-2 lg:flex">
          {Object.entries(localeLabels).map(([locale]) => {
            const localeCode = locale as Locale;

            return (
              <button
                key={locale}
                onClick={() => handleLocaleSwitch(localeCode)}
                className={`rounded-full border px-3 py-1 text-xs uppercase ${
                  localeCode === lang
                    ? "border-cyan-400 text-cyan-200"
                    : "border-white/20 text-slate-200 hover:border-cyan-400"
                }`}
              >
                {localeCode}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-white/20 bg-white/5 p-2 hover:border-cyan-400 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-1/2 mt-4 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="space-y-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-md px-3 py-2 text-center text-sm text-slate-100 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2 border-t border-white/10 p-4">
            {Object.entries(localeLabels).map(([locale]) => {
              const localeCode = locale as Locale;

              return (
                <button
                  key={locale}
                  onClick={() => handleLocaleSwitch(localeCode)}
                  className={`rounded-full border px-3 py-1 text-xs uppercase ${
                    localeCode === lang ? "border-cyan-400 text-cyan-200" : "border-white/20 text-slate-200"
                  }`}
                >
                  {localeCode}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
