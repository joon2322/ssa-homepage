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
          시행일: 2026년 7월 18일 | 최종 수정: 2026년 7월 18일
        </p>

        <div className="mb-10 rounded-2xl border border-[#4A6CF7]/20 bg-[#4A6CF7]/5 p-6">
          <p className="text-sm font-medium leading-relaxed text-[var(--text-primary)]">
            합격노트는 회원가입 없이 사용할 수 있습니다. 학습 자료는 기기와 사용자의 iCloud에 저장되며,
            서비스 개선을 위한 사용 통계는 Firebase Analytics로 전송됩니다. 학습 이미지, 노트 제목,
            프로필 이름과 사진은 분석 정보에 포함하지 않습니다.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-[var(--text-secondary)]">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">1. 처리하는 정보</h2>
            <p className="mb-3">합격노트는 앱 기능 제공을 위해 다음 정보를 처리합니다.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>학습 자료와 기록</strong>: 노트 제목, 촬영하거나 가져온 이미지, 가림막, 필기와
                마커, 평가 결과 및 학습 기록
              </li>
              <li>
                <strong>프로필과 설정</strong>: 사용자가 앱에서 설정한 표시 이름, 프로필 사진 및 앱 설정
              </li>
              <li>
                <strong>사용 분석 정보</strong>: 앱 설치를 구분하는 앱 인스턴스 식별자, 앱·기기 정보,
                대략적인 지역, 세션 정보, 노트 생성·학습·평가·기능 사용과 이용 한도 도달 등의 이벤트
              </li>
            </ul>
            <p className="mt-3">
              합격노트는 회원가입, 로그인, 이메일 또는 전화번호 입력을 요구하지 않습니다. 광고 식별자
              IDFA를 수집하는 Firebase 모듈과 광고 SDK도 사용하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">2. 처리 목적</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>학습 노트 생성, 가림막·필기, 평가 및 복습 기능 제공</li>
              <li>사용자의 Apple 기기 간 학습 자료 동기화</li>
              <li>기능 사용 현황과 이용 흐름을 집계하여 오류와 사용성을 개선</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">3. 저장 및 전송</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                학습 자료와 기록은 기기에 저장됩니다. iCloud를 사용할 수 있는 경우 Apple iCloud Drive와
                CloudKit을 통해 사용자의 Apple 기기 사이에서 동기화됩니다.
              </li>
              <li>프로필 이름과 사진은 앱의 기기 내 저장 공간에 저장됩니다.</li>
              <li>
                사용 분석 정보는 Google Firebase Analytics로 전송됩니다. Firebase Analytics에는 학습
                이미지, 노트 제목, 프로필 이름과 사진을 전송하지 않습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">4. 카메라 및 사진 접근</h2>
            <p className="mb-3">학습 자료를 만들 때 다음 기기 기능을 사용합니다.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>카메라</strong>: 학습 자료 촬영</li>
              <li><strong>사진 보관함</strong>: 사용자가 선택한 이미지 가져오기 및 프로필 사진 설정</li>
            </ul>
            <p className="mt-3">
              접근은 사용자가 해당 기능을 실행하고 iOS 권한을 허용한 경우에만 이루어집니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">5. 외부 서비스</h2>
            <p className="mb-3">합격노트는 다음 서비스 제공자를 이용합니다.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Apple iCloud 및 CloudKit</strong>: 학습 자료 저장과 기기 간 동기화
                {" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4A6CF7] hover:underline"
                >
                  Apple 개인정보 처리방침
                </a>
              </li>
              <li>
                <strong>Google Firebase Analytics</strong>: 앱 사용 통계의 수집과 분석
                {" "}
                <a
                  href="https://firebase.google.com/support/privacy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4A6CF7] hover:underline"
                >
                  Firebase 개인정보 및 보안 안내
                </a>
              </li>
            </ul>
            <p className="mt-3">
              합격노트는 개인정보나 학습 자료를 판매하지 않으며 맞춤형 광고를 제공하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">6. 보관 및 삭제</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                삭제한 노트는 앱의 휴지통에 최대 30일간 보관되며, 사용자가 영구 삭제하거나 보관 기간이
                지나면 삭제됩니다.
              </li>
              <li>
                앱을 삭제하면 기기에만 저장된 정보는 삭제됩니다. iCloud에 동기화된 정보는 사용자의
                iCloud 설정과 Apple 정책에 따라 별도로 관리될 수 있습니다.
              </li>
              <li>
                Firebase Analytics 정보는 Google Analytics 속성에 설정된 보관 정책에 따라 처리됩니다.
                분석 정보 처리에 관한 문의는 아래 이메일로 요청할 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">7. 처리방침 변경</h2>
            <p>
              앱의 기능이나 외부 서비스가 변경되면 이 페이지의 시행일과 내용을 갱신합니다. 중요한 변경
              사항은 앱 또는 공식 홈페이지를 통해 안내합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">8. 문의</h2>
            <p>개인정보 처리와 관련한 문의는 아래 이메일로 보내주세요.</p>
            <p className="mt-2">
              이메일:{" "}
              <a href="mailto:joonstudio@jinkojoon.com" className="text-[#4A6CF7] hover:underline">
                joonstudio@jinkojoon.com
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
