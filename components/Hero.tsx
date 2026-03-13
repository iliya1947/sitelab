'use client';

import { withLang } from '@/lib/routes';
import { useTranslations } from '@/src/hooks/useTranslations';
import type { Locale } from '@/src/i18n';
import Link from 'next/link';

export default function Hero({ lang }: { lang: Locale }) {
  const t = useTranslations();
  const previewCard = t.hero.statCards[0];

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060a1f] via-[#0a1235] to-[#040712]" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/70">
          {t.hero.badge || 'Next-gen Web Engineering'}
        </p>

        <h1 className="mx-auto mt-6 max-w-3xl bg-gradient-to-r from-white via-cyan-300 to-indigo-400 bg-clip-text text-3xl font-bold leading-tight tracking-tight text-transparent md:text-6xl">
          {t.hero.title1} {t.hero.title2} {t.hero.title3}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">{t.hero.subtitle}</p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={withLang(lang, '/contact')}
            className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-3 font-semibold text-black transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1736]"
            aria-label={t.hero.primaryCTA}
          >
            {t.hero.primaryCTA}
          </Link>
          <Link
            href={withLang(lang, '/services')}
            className="rounded-full border border-white/20 px-8 py-3 text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1736]"
            aria-label={t.hero.secondaryCTA}
          >
            {t.hero.secondaryCTA}
          </Link>
        </div>
      </div>

      {previewCard ? (
        <article className="pointer-events-none absolute bottom-[-60px] left-1/2 w-[320px] translate-x-[-50%] animate-[floatCard_6s_ease-in-out_infinite] rounded-xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.14em] text-cyan-100/80">{previewCard.title}</p>
          <p className="mt-2 text-xl font-bold text-white">{previewCard.value}</p>
          <p className="mt-1 text-sm text-white/70">{previewCard.detail}</p>
        </article>
      ) : null}

      <style jsx global>{`
        @keyframes floatCard {
          0%,
          100% {
            transform: translate(-50%, 0px);
          }
          50% {
            transform: translate(-50%, -10px);
          }
        }
      `}</style>
    </section>
  );
}
