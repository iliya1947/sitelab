export default function ProcessSteps({ title, steps }: { title: string; steps: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step} className="card p-5 shadow-card">
            <p className="text-sm text-cyan-300">Step {index + 1}</p>
            <p className="mt-2 font-semibold text-slate-100">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
