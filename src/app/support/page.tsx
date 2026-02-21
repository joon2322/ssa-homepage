import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "고객지원 - 합격노트",
  description: "합격노트 고객지원 및 문의",
};

const supportItems = [
  {
    icon: "📧",
    title: "이메일 문의",
    description: "기능 요청, 버그 신고, 일반 문의",
    action: "joonstudio@jinkojoon.com",
    href: "mailto:joonstudio@jinkojoon.com",
  },
  {
    icon: "💻",
    title: "GitHub Issues",
    description: "버그 리포트 및 기능 제안",
    action: "GitHub에서 이슈 등록",
    href: "https://github.com/joon2322/SSA/issues",
  },
];

const tips = [
  {
    q: "앱이 갑자기 종료돼요",
    a: "앱을 완전히 종료 후 다시 실행해 보세요. 문제가 지속되면 앱을 삭제 후 재설치하세요. (데이터는 기기에 저장되므로 삭제 시 학습 데이터가 사라집니다.)",
  },
  {
    q: "사진이 흐리게 보여요",
    a: "촬영 시 카메라를 안정적으로 잡고, 충분한 조명에서 촬영하세요. 사진첩에서 고해상도 이미지를 선택하는 것도 좋습니다.",
  },
  {
    q: "가림막이 정확한 위치에 안 놓여요",
    a: "핀치 줌으로 이미지를 확대한 뒤 가림막을 배치하면 더 정확하게 위치를 지정할 수 있습니다.",
  },
  {
    q: "PDF 가져오기가 안 돼요",
    a: "PDF 파일이 암호로 보호되어 있지 않은지 확인하세요. 일부 특수한 형식의 PDF는 지원되지 않을 수 있습니다.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          홈으로 돌아가기
        </Link>

        <h1 className="mb-2 text-3xl font-bold gradient-text">고객지원</h1>
        <p className="mb-10 text-[var(--text-secondary)]">
          도움이 필요하시면 언제든 연락주세요.
        </p>

        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {supportItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-white/5 bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[#4A6CF7]/20 hover:-translate-y-0.5"
            >
              <div className="mb-3 text-3xl">{item.icon}</div>
              <h3 className="mb-1 text-base font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mb-3 text-sm text-[var(--text-secondary)]">{item.description}</p>
              <span className="text-sm font-medium text-[#4A6CF7] group-hover:underline">
                {item.action} &rarr;
              </span>
            </a>
          ))}
        </div>

        <h2 className="mb-6 text-xl font-bold text-[var(--text-primary)]">자주 발생하는 문제</h2>
        <div className="space-y-4">
          {tips.map((tip) => (
            <div
              key={tip.q}
              className="rounded-xl border border-white/5 bg-[var(--surface)] p-5"
            >
              <h3 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">{tip.q}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{tip.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-[var(--text-muted)]">
          &copy; 2026 합격노트. All rights reserved.
        </div>
      </div>
    </div>
  );
}
