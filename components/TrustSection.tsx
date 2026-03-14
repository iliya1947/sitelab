import Reveal from '@/components/Reveal';

const trustItems = [
  {
    icon: '⚡',
    title: 'High-performance architecture',
    description: 'Scalable foundations built for speed, reliability, and long-term growth.',
  },
  {
    icon: '⚡',
    title: 'Modern modern web technologies',
    description: 'Up-to-date frameworks and tooling that keep your product competitive.',
  },
  {
    icon: '⚡',
    title: 'Custom development approach',
    description: 'Solutions tailored to your workflows, goals, and business model.',
  },
  {
    icon: '⚡',
    title: 'Fast project delivery',
    description: 'Lean execution and clear milestones to ship value quickly.',
  },
];

export default function TrustSection() {
  return (
    <section id="trust">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why Businesses Choose Us</h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {trustItems.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 70}>
            <article className="h-full rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-black/20 text-xl text-cyan-200">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
