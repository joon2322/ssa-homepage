# SSA 합격노트 홈페이지 프로젝트 문서

## 프로젝트 개요

SSA 합격노트 iOS 앱의 제품 홈페이지입니다. Next.js 16으로 구축되었으며 Vercel에 배포됩니다.

**프로젝트명**: SSA 합격노트 홈페이지  
**URL**: https://ssa.jinkojoon.com  
**GitHub**: https://github.com/joon2322/ssa-homepage  
**프로젝트 경로**: `/Users/joonwon/Projects/ssa-homepage/`

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **배포**: Vercel
- **도메인**: ssa.jinkojoon.com (CNAME → cname.vercel-dns.com)

## 프로젝트 구조

```
ssa-homepage/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 메인 페이지
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   ├── privacy/           # 개인정보처리방침
│   │   └── support/           # 고객지원
│   ├── components/            # React 컴포넌트
│   │   ├── Header.tsx         # 헤더 (네비게이션)
│   │   ├── Hero.tsx           # 히어로 섹션
│   │   ├── Features.tsx       # 주요 기능
│   │   ├── TargetUsers.tsx    # 타겟 사용자
│   │   ├── Screenshots.tsx    # 앱 스크린샷
│   │   ├── FAQ.tsx            # 자주 묻는 질문
│   │   ├── CTA.tsx            # Call to Action
│   │   └── Footer.tsx         # 푸터
│   └── data/
│       └── config.ts          # 중앙 설정 파일
├── public/
│   └── images/                # 이미지 리소스
│       ├── app-icon.png       # 앱 아이콘
│       ├── screen_splash.png  # 스플래시 화면
│       ├── screen_notes.png   # 노트 목록
│       ├── screen_mask_edit.png # 마스킹 편집
│       ├── screen_study.png   # 학습 화면
│       ├── screen_grading.png # 채점 화면
│       └── screen_result.png  # 결과 화면
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── CLAUDE.md                  # 이 문서
└── README.md                  # 프로젝트 README
```

## 주요 컴포넌트

### 페이지 구성 (src/app/)
- **page.tsx** - 메인 랜딩 페이지 (모든 섹션 통합)
- **layout.tsx** - 루트 레이아웃 (메타데이터, 폰트)
- **privacy/page.tsx** - 개인정보처리방침
- **support/page.tsx** - 고객지원 페이지

### UI 컴포넌트 (src/components/)
- **Header** - 네비게이션 바 (로고, 메뉴)
- **Hero** - 히어로 섹션 (앱 소개, CTA)
- **Features** - 주요 기능 3가지 (찍기, 가리기, 외우기)
- **TargetUsers** - 타겟 사용자 (자격증 준비생, 학생, 직장인)
- **Screenshots** - 앱 스크린샷 갤러리
- **FAQ** - 자주 묻는 질문 (아코디언)
- **CTA** - Call to Action (App Store 다운로드)
- **Footer** - 푸터 (링크, 저작권)

## 중앙 설정 (src/data/config.ts)

모든 앱 정보는 `config.ts`에서 중앙 관리됩니다.

```typescript
export const siteConfig = {
  appName: "합격노트",
  appSubtitle: "찍고 가리고 외우는 자격증 암기",
  appStoreUrl: null as string | null,  // App Store 승인 후 업데이트
  githubUrl: "https://github.com/joon2322/SSA",
  contactEmail: "joon2322@gmail.com",
  domain: "https://ssa.jinkojoon.com",
};
```

**App Store 연결 시**:
1. App Store 승인 완료
2. `appStoreUrl` 필드에 App Store URL 입력
3. 배포 (자동으로 다운로드 버튼 활성화)

## 디자인 시스템

### 컬러 팔레트
- **Primary**: Indigo (600, 700)
- **Background**: Slate (900, 800)
- **Text**: White, Slate (300, 400)
- **Accent**: Purple, Blue

### 디자인 특징
- **다크 테마**: 전체 다크 모드 디자인
- **글래스모피즘**: 반투명 배경 + 블러 효과
- **그라데이션**: 부드러운 컬러 그라데이션
- **애니메이션**: CSS only (no JavaScript)
- **반응형**: 모바일 우선 디자인

### 타이포그래피
- **제목**: Pretendard Variable (bold, 2xl-6xl)
- **본문**: Pretendard Variable (regular, base-lg)
- **강조**: Gradient text effects

## 배포 방법

### Vercel CLI 배포

```bash
cd /Users/joonwon/Projects/ssa-homepage
vercel --yes --prod --token <VERCEL_TOKEN>
```

**주의**: Vercel 토큰은 로컬에 저장되어 있으며 문서에 포함하지 않습니다.

### 자동 배포 (GitHub)

현재 GitHub 자동 배포는 설정되지 않았습니다.  
설정하려면 Vercel 대시보드에서 Login Connection 필요.

### 배포 확인

배포 후 https://ssa.jinkojoon.com 에서 확인합니다.

## 로컬 개발

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인

### 빌드

```bash
npm run build
```

### 프로덕션 미리보기

```bash
npm run start
```

## 스크린샷 관리

모든 앱 스크린샷은 `public/images/` 디렉토리에 저장됩니다.

| 파일명 | 설명 | 사용 위치 |
|--------|------|-----------|
| app-icon.png | 앱 아이콘 | Hero, Header |
| screen_splash.png | 스플래시 화면 | Screenshots |
| screen_notes.png | 노트 목록 | Screenshots |
| screen_mask_edit.png | 마스킹 편집 | Screenshots |
| screen_study.png | 학습 화면 | Screenshots |
| screen_grading.png | 채점 화면 | Screenshots |
| screen_result.png | 결과 화면 | Screenshots |

**스크린샷 추가 시**:
1. `public/images/` 에 이미지 추가
2. `Screenshots.tsx` 컴포넌트 업데이트
3. 최적화된 이미지 사용 (WebP 권장)

## SEO 및 메타데이터

### 메타데이터 (src/app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: "합격노트 - 찍고 가리고 외우는 자격증 암기",
  description: "사진 찍고, 답 가리고, 반복 학습하는 자격증 암기 앱",
  keywords: ["자격증", "암기", "학습", "합격노트", "SSA"],
  openGraph: {
    title: "합격노트",
    description: "찍고 가리고 외우는 자격증 암기",
    url: "https://ssa.jinkojoon.com",
    siteName: "합격노트",
    locale: "ko_KR",
    type: "website",
  },
};
```

### 구조화된 데이터

향후 추가 예정:
- JSON-LD (앱 정보)
- 리뷰 스키마
- FAQ 스키마

## 관련 프로젝트

### SSA iOS 앱
- **GitHub**: https://github.com/joon2322/SSA
- **App Store**: 심사 대기 중
- **기술**: SwiftUI + SwiftData
- **플랫폼**: iOS 17+

### jinkojoon.com 마스터 프로젝트
- **경로**: `/Users/joonwon/Projects/jinkojoon.com/`
- **역할**: 도메인 전체 관리
- **문서**: 해당 프로젝트의 CLAUDE.md 참조

## 향후 계획

### 기능 추가
- [ ] 앱 스토어 리뷰 섹션
- [ ] 사용자 통계 (다운로드 수, 평점)
- [ ] 블로그 섹션 (학습 팁)
- [ ] 다국어 지원 (영어)

### 기술 개선
- [ ] 이미지 최적화 (WebP, AVIF)
- [ ] 성능 최적화 (Lighthouse 100점)
- [ ] 애니메이션 개선 (Framer Motion)
- [ ] A/B 테스팅 (전환율 최적화)

### 마케팅
- [ ] Google Analytics 연동
- [ ] SEO 최적화 (검색 순위)
- [ ] 소셜 미디어 공유 최적화
- [ ] 랜딩 페이지 A/B 테스트

## 주의사항

### MUST DO
- App Store 승인 시 즉시 `config.ts` 업데이트
- 배포 전 빌드 에러 확인 (`npm run build`)
- 이미지 최적화 (용량 최소화)
- 반응형 테스트 (모바일, 태블릿, 데스크톱)

### MUST NOT DO
- Vercel 토큰 문서에 포함 금지
- 개인정보 하드코딩 금지
- 소스 코드에 API 키 포함 금지
- 컴포넌트 파일 직접 수정 시 타입 체크 필수

### 보안
- 환경 변수 사용 (.env.local)
- HTTPS 강제 (Vercel 자동)
- CSP 헤더 설정 (향후)
- 정기 의존성 업데이트

## 업데이트 로그

### 2026.02.08
- 프로젝트 문서 작성 (CLAUDE.md, README.md)
- Vercel 배포 완료
- ssa.jinkojoon.com 도메인 연결

### 2026.02.07
- Next.js 16 프로젝트 초기 설정
- Tailwind CSS v4 적용
- 모든 컴포넌트 구현 완료
- 개인정보처리방침, 고객지원 페이지 작성

---

**마지막 업데이트**: 2026.02.08  
**문서 버전**: 1.0
