const features = [
  {
    icon: "📸",
    title: "사진 촬영 & 불러오기",
    description: "카메라로 촬영하거나 사진첩에서 선택. PDF 파일도 가져올 수 있습니다.",
  },
  {
    icon: "🔲",
    title: "가림막으로 핵심 가리기",
    description: "외울 부분을 드래그하여 가림막을 만드세요. 탭하면 보이고, 다시 탭하면 숨깁니다.",
  },
  {
    icon: "📖",
    title: "학습 모드",
    description: "가림막을 탭하며 자기 주도 학습. 핀치 줌, 페이지 스와이프를 지원합니다.",
  },
  {
    icon: "✅",
    title: "평가 모드",
    description: "○ △ ✕ 셀프 채점으로 실력 확인. 틀린 문제만 골라 재학습.",
  },
  {
    icon: "🖍️",
    title: "형광펜 하이라이트",
    description: "중요한 부분에 형광펜으로 표시. 색상 선택과 굵기 조절 가능.",
  },
  {
    icon: "🔒",
    title: "100% 로컬 저장",
    description: "인터넷 없이도 언제든 학습. 데이터 수집 없음, 개인정보 안전.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text-blue">핵심 기능</span>
          </h2>
          <p className="mx-auto max-w-lg text-[var(--text-secondary)]">
            시험 준비에 필요한 모든 것을 담았습니다
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
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
      </div>
    </section>
  );
}
