import { featuresContent } from "@/data/content";

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text-blue">{featuresContent.title}</span>
          </h2>
          <p className="mx-auto max-w-lg text-[var(--text-secondary)]">
            {featuresContent.subtitle}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {featuresContent.items.map((feature) => (
            <div
              key={feature.title}
              className="card-gradient-border group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {featuresContent.note ? (
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-[var(--text-muted)]">
            {featuresContent.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
