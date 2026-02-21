import { programContent } from "@/data/content";

export default function Program() {
  return (
    <section id="program" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text-blue">{programContent.title}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--text-secondary)]">
            {programContent.subtitle}
          </p>
          <p className="mt-3 text-sm text-[var(--text-muted)]">{programContent.status}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programContent.steps.map((step) => (
            <div key={step.title} className="card-gradient-border p-6">
              <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-xs leading-relaxed text-[var(--text-muted)]">
          {programContent.footnote}
        </p>
      </div>
    </section>
  );
}
