import Image from "next/image";

const screenshots = [
  { src: "/images/screen_splash.png", caption: "앱 시작" },
  { src: "/images/screen_notes.png", caption: "노트 목록" },
  { src: "/images/screen_mask_edit.png", caption: "가림막 편집" },
  { src: "/images/screen_study.png", caption: "학습 모드" },
  { src: "/images/screen_grading.png", caption: "채점하기" },
  { src: "/images/screen_result.png", caption: "평가 결과" },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text-blue">앱 미리보기</span>
          </h2>
          <p className="mx-auto max-w-lg text-[var(--text-secondary)]">
            직관적인 UI로 학습에만 집중하세요
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
          {screenshots.map((shot) => (
            <div key={shot.src} className="flex flex-col items-center gap-4 snap-center shrink-0">
              <div className="phone-frame">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  width={220}
                  height={476}
                  className="block w-[220px] h-auto"
                />
              </div>
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                {shot.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
