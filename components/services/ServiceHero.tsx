'use client';

import { useEffect, useMemo, useState } from 'react';

type ServiceHeroProps = {
  title: string;
  shortDescription: string;
  images: string[];
};

export default function ServiceHero({ title, shortDescription, images }: ServiceHeroProps) {
  const slides = useMemo(() => (images.length > 0 ? images : ['/images/service-fallback.svg']), [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <header className="section-glow card p-8 text-white md:p-12">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="relative z-[2]">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Service</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-100">{shortDescription}</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="relative h-56 md:h-64">
            {slides.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
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

      <style jsx>{`
        header {
          position: relative;
          overflow: hidden;
        }

        header::before {
          content: '';
          position: absolute;
          width: 280px;
          height: 280px;
          right: -70px;
          top: -70px;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.35), rgba(34, 211, 238, 0));
          animation: pulseGlow 6s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.12);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}
