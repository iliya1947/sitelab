import Link from 'next/link';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
      <div className="text-3xl" aria-hidden>
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <Link href={href} className="mt-4 inline-block font-medium text-brand-700 hover:text-brand-900">
        Learn more →
      </Link>
    </article>
  );
}
