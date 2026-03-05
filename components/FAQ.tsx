export default function FAQ({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <details key={item.q} className="card p-6">
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="mt-3 text-slate-300">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
