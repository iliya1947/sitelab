'use client';

import { withLang } from '@/lib/routes';
import { useTranslations } from '@/src/hooks/useTranslations';
import type { Locale } from '@/src/i18n';
import Link from 'next/link';

const featureItems = [
  '⚡ Ultra-fast websites',
  '🌍 Global performance',
  '🔒 Secure architecture',
  '📈 Conversion-focused',
];

export default function Hero({ lang }: { lang: Locale }) {
  const t = useTranslations();

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060a1f] via-[#0a1235] to-[#040712]" aria-hidden="true" />
      <div
        className="absolute inset-0 animate-[pulseGlow_12s_ease-in-out_infinite] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.2),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.16),transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:48px_48px] opacity-15"
        aria-hidden="true"
      />
      <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/25 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/70">
            {t.hero.badge}
          </p>

          <h1 className="mt-6 bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            {t.hero.title.line1}
            <br />
            {t.hero.title.line2}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 lg:mx-0">{t.hero.subtitle}</p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href={withLang(lang, '/contact')}
              className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500 px-8 py-3 font-semibold text-[#061028] shadow-[0_10px_40px_rgba(56,189,248,0.35)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1736]"
              aria-label={t.hero.ctaPrimary}
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href={withLang(lang, '/services')}
              className="rounded-full border border-white/20 bg-white/[0.03] px-8 py-3 text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1736]"
              aria-label={t.hero.ctaSecondary}
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-gradient-to-tr from-cyan-400/15 via-indigo-500/10 to-transparent blur-3xl" />
          <article className="relative animate-[floatCard_6s_ease-in-out_infinite] rounded-3xl border border-white/15 bg-white/[0.06] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/80">Technology stack benefits</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Built for speed and trust</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/85 sm:text-base">
              {featureItems.map((feature) => (
                <li key={feature} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.65;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
