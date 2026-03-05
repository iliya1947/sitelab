export default function ProcessSteps({ title, steps }: { title: string; steps: string[] }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step} className="card p-6 shadow-card">
            <p className="text-sm uppercase tracking-[0.14em] text-cyan-300">Step {index + 1}</p>
            <p className="mt-3 font-semibold text-slate-100">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
