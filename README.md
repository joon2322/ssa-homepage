# SSA 합격노트 홈페이지

SSA 합격노트 iOS 앱의 제품 홈페이지입니다.

## 프로젝트 소개

찍고 가리고 외우는 자격증 암기 앱 "합격노트"의 공식 웹사이트입니다.  
Next.js 16으로 구축되었으며 Vercel에 배포됩니다.

**URL**: https://ssa.jinkojoon.com

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **배포**: Vercel
- **도메인**: ssa.jinkojoon.com

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

## 배포

### Vercel CLI

```bash
vercel --yes --prod --token <VERCEL_TOKEN>
```

### 자동 배포

GitHub 연동 시 `main` 브랜치에 푸시하면 자동 배포됩니다.

## 디렉토리 구조

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 메인 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── privacy/           # 개인정보처리방침
│   └── support/           # 고객지원
├── components/            # React 컴포넌트
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── TargetUsers.tsx
│   ├── Screenshots.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── data/
    └── config.ts          # 중앙 설정 파일
```

## 주요 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 다크 테마 + 글래스모피즘
- 앱 스크린샷 갤러리
- FAQ 아코디언
- App Store 다운로드 링크 (승인 후 활성화)

## 설정 관리

모든 앱 정보는 `src/data/config.ts`에서 중앙 관리됩니다.

```typescript
export const siteConfig = {
  appName: "합격노트",
  appSubtitle: "찍고 가리고 외우는 자격증 암기",
  appStoreUrl: null,  // App Store 승인 후 업데이트
  githubUrl: "https://github.com/joon2322/SSA",
  contactEmail: "joon2322@gmail.com",
  domain: "https://ssa.jinkojoon.com",
};
```

## 관련 프로젝트

- [SSA iOS 앱](https://github.com/joon2322/SSA) - SwiftUI 자격증 암기 앱
- [jinkojoon.com](https://github.com/joon2322/jinkojoon.com) - 도메인 마스터 프로젝트

## 문서

자세한 내용은 [CLAUDE.md](./CLAUDE.md)를 참조하세요.

## 라이선스

Copyright © 2026 joon2322. All rights reserved.
