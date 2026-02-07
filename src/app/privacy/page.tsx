import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 - 합격노트",
  description: "합격노트 개인정보 처리방침",
};

export default function PrivacyPage() {
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

        <h1 className="mb-2 text-3xl font-bold gradient-text">합격노트 개인정보 처리방침</h1>
        <p className="mb-10 text-sm text-[var(--text-muted)]">
          시행일: 2026년 2월 6일 | 최종 수정: 2026년 2월 6일
        </p>

        <div className="mb-10 rounded-2xl border border-[#4A6CF7]/20 bg-[#4A6CF7]/5 p-6">
          <p className="text-sm font-medium leading-relaxed text-[var(--text-primary)]">
            <strong>합격노트는 개인정보를 수집하지 않습니다.</strong>
            <br />
            모든 데이터는 사용자의 기기에만 저장되며, 외부 서버로 전송되지 않습니다.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-[var(--text-secondary)]">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">1. 수집하는 개인정보</h2>
            <p className="mb-3">합격노트는 어떠한 개인정보도 수집, 저장, 전송하지 않습니다.</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>회원가입 및 로그인 기능이 없습니다.</li>
              <li>이름, 이메일, 전화번호 등 개인 식별 정보를 요구하지 않습니다.</li>
              <li>사용자 행동 분석, 추적(트래킹)을 수행하지 않습니다.</li>
              <li>광고 SDK나 분석 SDK를 포함하지 않습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">2. 기기 내 저장 데이터</h2>
            <p className="mb-3">합격노트에서 생성하는 모든 데이터는 사용자의 iPhone에만 로컬 저장됩니다:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li><strong>학습 노트</strong>: 사용자가 촬영하거나 가져온 사진 및 가림막 정보</li>
              <li><strong>프로필 정보</strong>: 사용자가 설정한 표시 이름 및 프로필 사진 (기기 내 저장)</li>
              <li><strong>학습 기록</strong>: 평가 모드 채점 결과 (기기 내 저장)</li>
            </ul>
            <p className="mt-3">이 데이터는 인터넷을 통해 전송되지 않으며, 앱을 삭제하면 함께 삭제됩니다.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">3. 카메라 및 사진 라이브러리 접근</h2>
            <p className="mb-3">합격노트는 다음 기기 기능에 대한 접근 권한을 요청합니다:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li><strong>카메라</strong>: 학습 자료를 직접 촬영하기 위해 사용합니다.</li>
              <li><strong>사진 라이브러리</strong>: 기존 사진을 학습 자료로 가져오기 위해 사용합니다.</li>
            </ul>
            <p className="mt-3">촬영하거나 선택한 사진은 앱 내부 저장소에만 보관되며, 외부로 전송되지 않습니다.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">4. 제3자 제공</h2>
            <p>합격노트는 어떠한 데이터도 제3자에게 제공, 공유, 판매하지 않습니다.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">5. 아동 개인정보 보호</h2>
            <p>합격노트는 개인정보를 수집하지 않으므로, 아동(만 14세 미만)의 개인정보 역시 수집하지 않습니다.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">6. 개인정보 처리방침 변경</h2>
            <p>본 개인정보 처리방침은 변경될 수 있으며, 변경 시 이 페이지를 통해 공지합니다. 중요한 변경 사항이 있을 경우 앱 내 공지를 통해 알려드립니다.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">7. 문의</h2>
            <p>
              개인정보 처리방침에 대한 문의 사항이 있으시면 아래로 연락해 주세요.
            </p>
            <p className="mt-2">
              이메일:{" "}
              <a href="mailto:joon2322@gmail.com" className="text-[#4A6CF7] hover:underline">
                joon2322@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-[var(--text-muted)]">
          &copy; 2026 합격노트. All rights reserved.
        </div>
      </div>
    </div>
  );
}
