'use client';

import Reveal from '@/components/Reveal';
import { useTranslations } from '@/src/hooks/useTranslations';

const technologies = [
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Vercel', icon: 'V' },
  { name: 'Tailwind CSS', icon: 'TW' },
  { name: 'Node.js', icon: '⬢' },
  { name: 'Edge Infrastructure', icon: '◈' },
];

export default function TechStackSection() {
  const t = useTranslations();

  return (
    <section id="tech-stack">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.techStack.title}</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          {t.techStack.subtitle}
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology, index) => (
          <Reveal key={technology.name} delayMs={index * 60}>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/20 text-sm font-semibold text-cyan-200">
                {technology.icon}
              </span>
              <span className="text-base font-medium text-slate-100">{technology.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
