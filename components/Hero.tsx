'use client';

import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';
import { Lang } from '@/lib/i18n';
import { withLang } from '@/lib/routes';
import Link from 'next/link';
import { CSSProperties, MouseEvent } from 'react';

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
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const bounds = target.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    const tiltX = ((y - 50) / 50) * -1;
    const tiltY = (x - 50) / 50;

    target.style.setProperty('--cursor-x', `${x}%`);
    target.style.setProperty('--cursor-y', `${y}%`);
    target.style.setProperty('--tilt-x', tiltX.toFixed(3));
    target.style.setProperty('--tilt-y', tiltY.toFixed(3));
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="hero-premium section-glow relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#05070f] px-6 py-24 text-center text-white shadow-[0_35px_120px_rgba(8,8,20,0.65)] md:px-12"
      style={{ '--cursor-x': '50%', '--cursor-y': '50%', '--tilt-x': '0', '--tilt-y': '0' } as CSSProperties}
    >
      <div className="absolute inset-0 -z-20 bg-[#05070f]" />
      <div className="hero-gradient-glow absolute inset-0 -z-10" />
      <div className="hero-network-layer absolute inset-0 -z-10 hidden md:block">
        <NeuralNetworkBackground />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(10,10,15,0.35)_0%,rgba(10,10,15,0.76)_50%,rgba(8,8,14,0.96)_100%)] backdrop-blur-[2px]" />
      <div className="hero-cursor-light absolute inset-0 -z-10" />

      <div className="mx-auto max-w-4xl motion-reveal is-visible">
        <h1 className="text-5xl font-extrabold leading-[1.08] tracking-[-0.02em] md:text-6xl lg:text-7xl md:leading-[1.06]">
          <span className="block">Build <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">Faster.</span></span>
          <span className="block">Launch <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Smarter.</span></span>
          <span className="block">Dominate <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">Online.</span></span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base tracking-wide text-slate-200 md:text-lg">
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
            className="btn-interactive rounded-full border border-white/25 bg-white/5 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-300/60 hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {floatingCards.map((card, index) => (
        <div
          key={card.title}
          className={`hero-float-card absolute hidden w-56 rounded-2xl border border-cyan-200/20 bg-white/10 p-4 text-start shadow-[0_0_30px_rgba(56,189,248,0.15)] backdrop-blur-xl lg:block ${card.className}`}
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
