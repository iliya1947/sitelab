'use client';

import CodeRainBackground from '@/components/CodeRainBackground';
import { Lang } from '@/lib/i18n';
import { withLang } from '@/lib/routes';
import Link from 'next/link';

type HeroProps = {
  lang: Lang;
};

const floatingCards = [
  {
    title: 'Deployment Velocity',
    value: '+42%',
    detail: 'Release cadence after sprint 2',
    className: 'left-[8%] top-20'
  },
  {
    title: 'Core Web Vitals',
    value: '98/100',
    detail: 'Performance benchmark window',
    className: 'right-[10%] top-28'
  },
  {
    title: 'Lead Capture',
    value: '3.4x',
    detail: 'Conversion increase baseline',
    className: 'right-[18%] bottom-20'
  }
];

export default function Hero({ lang }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#05070f] px-6 py-24 text-center text-white shadow-[0_35px_120px_rgba(8,8,20,0.65)] md:px-12">
      <div className="absolute inset-0 -z-20 bg-[#05070f]" />
      <div className="absolute inset-0 -z-10 hidden md:block">
        <CodeRainBackground />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(10,10,15,0.35)_0%,rgba(10,10,15,0.76)_50%,rgba(8,8,14,0.96)_100%)] backdrop-blur-[2px]" />

      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-7xl md:leading-[1.05]">
          <span className="block">Build <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">Faster.</span></span>
          <span className="block">Launch <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Smarter.</span></span>
          <span className="block">Dominate <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">Online.</span></span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
          AI-accelerated premium web development for businesses that move fast.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={withLang(lang, '/contact')}
            className="primary-btn px-7 py-3 font-semibold text-white"
          >
            Get Your Project Estimate
          </Link>
          <Link
            href={withLang(lang, '/services')}
            className="rounded-full border border-white/25 bg-white/5 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-300/60 hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {floatingCards.map((card, index) => (
        <div
          key={card.title}
          className={`absolute hidden w-56 rounded-2xl border border-cyan-200/20 bg-white/10 p-4 text-start shadow-[0_0_30px_rgba(56,189,248,0.15)] backdrop-blur-xl lg:block ${card.className}`}
          style={{ animation: `floatY ${7 + index}s ease-in-out ${index * 0.3}s infinite` }}
        >
          <p className="text-xs uppercase tracking-[0.15em] text-cyan-100/80">{card.title}</p>
          <p className="mt-2 text-2xl font-bold text-white">{card.value}</p>
          <p className="mt-1 text-xs text-slate-200">{card.detail}</p>
        </div>
      ))}
    </section>
  );
}
