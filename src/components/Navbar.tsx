"use client";

import { withLang } from "@/lib/routes";
import type { Dictionary, Locale } from "@/src/i18n/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

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

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ---------------- SCROLL + RESIZE ---------------- */

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isCompact = isMobile || isScrolled;

  /* ---------------- NAV LINKS ---------------- */

  const navLinks = useMemo(
    () => [
      { key: "services", label: dictionary.nav.services },
      { key: "process", label: dictionary.nav.process },
      { key: "calculator", label: CALCULATOR_LABELS[lang] },
      { key: "contact", label: dictionary.nav.contact }
    ],
    [dictionary.nav, lang]
  );

  const isHomePage = useMemo(() => {
    return pathname === withLang(lang) || pathname === `${withLang(lang)}/`;
  }, [pathname, lang]);

  const getSectionHref = useCallback(
    (section: string) => {
      if (isHomePage) return `#${section}`;
      return `${withLang(lang)}#${section}`;
    },
    [isHomePage, lang]
  );

  /* ---------------- LANGUAGE SWITCH ---------------- */

  const handleLocaleSwitch = useCallback(
    (nextLocale: Locale) => {
      const hash = window.location.hash;

      const nextPath = pathname.replace(/^\/(en|ru|he)/, `/${nextLocale}`);

      router.push(`${nextPath}${hash}`);
      setMenuOpen(false);
    },
    [pathname, router]
  );

  const closeMenu = () => setMenuOpen(false);

  /* ---------------- RENDER ---------------- */

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* LOGO */}

        <Link
          href={withLang(lang)}
          className="text-lg font-semibold text-cyan-100 hover:text-cyan-200"
        >
          {dictionary.siteName}
        </Link>

        {/* DESKTOP MENU */}

        {!isCompact && (
          <>
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={getSectionHref(link.key)}
                  className="hover:text-cyan-300 transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex gap-2">
              {Object.entries(localeLabels).map(([locale]) => {
                const l = locale as Locale;

                return (
                  <button
                    key={locale}
                    onClick={() => handleLocaleSwitch(l)}
                    className={`px-3 py-1 rounded-full text-xs border ${
                      l === lang
                        ? "border-cyan-400 text-cyan-200"
                        : "border-white/20 text-slate-200 hover:border-cyan-400"
                    }`}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* HAMBURGER */}

        {isCompact && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg border border-white/20 bg-white/5 hover:border-cyan-400"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* DROPDOWN MENU */}

      {menuOpen && isCompact && (
        <div className="absolute left-1/2 mt-3 w-[92%] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-6 shadow-xl">
          <nav className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={getSectionHref(link.key)}
                onClick={closeMenu}
                className="block text-sm text-slate-100 hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2 mt-5 pt-4 border-t border-white/10">
            {Object.entries(localeLabels).map(([locale]) => {
              const l = locale as Locale;

              return (
                <button
                  key={locale}
                  onClick={() => handleLocaleSwitch(l)}
                  className={`px-3 py-1 rounded-full text-xs border ${
                    l === lang
                      ? "border-cyan-400 text-cyan-200"
                      : "border-white/20 text-slate-200"
                  }`}
                >
                  {l}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
