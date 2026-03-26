'use client';

import { useEffect, useState } from 'react';

type ServiceHeroProps = {
  title: string;
  shortDescription: string;
  images: string[];
};

export default function ServiceHero({ title, shortDescription, images }: ServiceHeroProps) {
  const slides = images.length > 0 ? images : ['/images/service-fallback.svg'];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex >= slides.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <header className="section-glow card premium-hero relative overflow-hidden p-8 text-white md:p-12">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-24 top-[-7rem] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.28),rgba(14,116,144,0))] blur-2xl" />
        <div className="absolute right-[-4.5rem] top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.3),rgba(37,99,235,0))] blur-3xl" />
        <div className="absolute bottom-[-7rem] left-[20%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.2),rgba(14,116,144,0))] blur-3xl" />
        <div className="noise-layer absolute inset-0 opacity-[0.16]" />
      </div>

      <div className="relative z-[1] rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl md:p-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="relative z-[2]">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Service</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">{shortDescription}</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl shadow-black/40">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.45),rgba(14,116,144,0))] blur-2xl" />

            <div className="relative h-56 md:h-64">
              {slides.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-1000 ease-in-out will-change-transform ${
                    index === activeIndex ? 'scale-[1.06] opacity-100' : 'scale-100 opacity-0'
                  }`}
                  style={{ backgroundImage: `url(${image})` }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-slate-950/35" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-blue-600/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 z-[2] rounded-xl border border-white/10 bg-slate-950/35 p-3 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">Example Project</p>
                <p className="mt-0.5 text-xs text-blue-100/90">small caption</p>
              </div>
            </div>

            {slides.length > 1 && (
              <div className="absolute bottom-4 left-1/2 z-[3] flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === activeIndex ? 'bg-cyan-300' : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 18%, rgba(34, 211, 238, 0.16), transparent 42%),
            radial-gradient(circle at 78% 30%, rgba(59, 130, 246, 0.18), transparent 46%);
          pointer-events: none;
          z-index: 0;
        }

        .noise-layer {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          mix-blend-mode: soft-light;
        }
      `}</style>
    </header>
  );
}
