export default function FAQ({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="mt-2 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
