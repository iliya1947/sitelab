import Link from 'next/link';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <article className="card p-6 shadow-card">
      <div className="text-3xl" aria-hidden>
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-300">{description}</p>
      <Link href={href} className="mt-4 inline-block font-medium text-cyan-300 hover:text-cyan-200">
        Learn more →
      </Link>
    </article>
  );
}
