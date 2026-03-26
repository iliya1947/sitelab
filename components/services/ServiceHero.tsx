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

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 z-0 rounded-[2rem] bg-[radial-gradient(circle,rgba(34,211,238,0.34),rgba(14,116,144,0))] blur-2xl" />

            <div className="relative z-[1] mx-auto w-full max-w-xl rotate-[-2.5deg]">
              <div className="rounded-[1.3rem] border border-white/20 bg-slate-900/85 p-2 shadow-xl shadow-black/45 backdrop-blur">
                <div className="mb-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/80 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  <div className="ml-2 h-2.5 flex-1 rounded-full bg-white/10" />
                </div>

                <div className="relative h-56 overflow-hidden rounded-lg border border-white/10 bg-slate-900 md:h-64">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[activeIndex]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-slate-950/35" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-blue-600/15" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-slate-950/35 p-3 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white">Example Project</p>
                    <p className="mt-0.5 text-xs text-blue-100/90">small caption</p>
                  </div>
                </div>
              </div>
            </div>

            {slides.length > 1 && (
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {slides.map((image, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-12 w-16 overflow-hidden rounded-md border transition ${
                      index === activeIndex
                        ? 'border-cyan-300 ring-2 ring-cyan-300/40'
                        : 'border-white/20 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <span
                      className="block h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </button>
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
