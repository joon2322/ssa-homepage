const targets = [
  {
    icon: "📝",
    title: "수험생",
    description: "공무원 · 자격증 · 수능 교재 핵심 암기",
    highlight: "합격률 UP",
  },
  {
    icon: "🎓",
    title: "대학생",
    description: "전공 시험 기간 빠른 복습",
    highlight: "효율적 학습",
  },
  {
    icon: "💼",
    title: "직장인",
    description: "이동 중 자투리 시간 암기",
    highlight: "시간 절약",
  },
];

export default function TargetUsers() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">이런 분께 추천합니다</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {targets.map((target) => (
            <div
              key={target.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[var(--surface)] p-8 text-center transition-all duration-300 hover:border-[#4A6CF7]/20 hover:-translate-y-1"
            >
              <div className="mb-4 text-4xl">{target.icon}</div>
              <div className="mb-1 inline-block rounded-full bg-[#4A6CF7]/10 px-3 py-0.5 text-xs font-medium text-[#6B8AFF]">
                {target.highlight}
              </div>
              <h3 className="mb-2 mt-3 text-xl font-bold text-[var(--text-primary)]">
                {target.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
