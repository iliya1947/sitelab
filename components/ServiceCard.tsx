import Reveal from '@/components/Reveal';
import Link from 'next/link';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  learnMoreLabel: string;
  index?: number;
};

export default function ServiceCard({ icon, title, description, href, learnMoreLabel, index = 0 }: ServiceCardProps) {
  return (
    <Reveal delayMs={index * 80}>
      <article className="group card p-8 shadow-card">
        <div className="service-icon inline-flex rounded-xl border border-white/10 bg-slate-900/90 p-3 text-3xl transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/50" aria-hidden>
          {icon}
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-slate-300">{description}</p>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 font-medium text-cyan-300 transition hover:text-cyan-200">
          {learnMoreLabel}
        </Link>
      </article>
    </Reveal>
  );
}
