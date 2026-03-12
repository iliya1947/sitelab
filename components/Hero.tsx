'use client';

import { withLang } from '@/lib/routes';
import { useTranslations } from '@/src/hooks/useTranslations';
import type { Locale } from '@/src/i18n';
import Link from 'next/link';

export default function Hero({ lang }: { lang: Locale }) {
  const t = useTranslations();
  const previewCard = t.hero.statCards[0];

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2c] via-[#0b1736] to-[#050914]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.15),transparent_60%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/80">
          {t.hero.badge}
        </p>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          {t.hero.title1} {t.hero.title2} {t.hero.title3}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">{t.hero.subtitle}</p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={withLang(lang, '/contact')}
            className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-7 py-3 font-semibold text-black transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1736]"
          >
            {t.hero.primaryCTA}
          </Link>
          <Link
            href={withLang(lang, '/services')}
            className="rounded-full border border-white/20 px-7 py-3 text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1736]"
          >
            {t.hero.secondaryCTA}
          </Link>
        </div>
      </div>

      {previewCard ? (
        <article className="pointer-events-none absolute bottom-0 left-1/2 w-[320px] -translate-x-1/2 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm animate-[float_6s_ease-in-out_infinite]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-cyan-100/80">{previewCard.title}</p>
          <p className="mt-2 text-xl font-bold text-white">{previewCard.value}</p>
          <p className="mt-1 text-sm text-white/70">{previewCard.detail}</p>
        </article>
      ) : null}

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
