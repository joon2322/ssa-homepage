# AGENTS.md -- SSA 합격노트 홈페이지

## 프로젝트
합격노트(SSA) iOS 앱 제품 홈페이지. ssa.jinkojoon.com에서 서비스 중.

## 기술 스택
Next.js 16 + TypeScript + Tailwind CSS v4 + Vercel

## 디렉토리 구조
```
ssa-homepage/
├── src/
│   ├── app/           # 페이지 (/, /privacy, /support)
│   ├── components/    # UI 컴포넌트 (8개)
│   └── data/
│       ├── config.ts  # 사이트 설정 (App Store URL 등)
│       └── content.ts # 모든 텍스트 콘텐츠 (README 동기화 대상)
├── public/images/     # 앱 아이콘 + 스크린샷
├── scripts/           # 콘텐츠 동기화 스크립트
└── screenshots-input/ # 새 스크린샷 드롭 폴더
```

## 콘텐츠 관리
- 텍스트 콘텐츠: src/data/content.ts (중앙 관리)
- 스크린샷: public/images/screen_*.png
- 동기화: `npm run sync` (GitHub README 확인 + 스크린샷 처리)

## 배포
```bash
vercel --yes --prod --token TOKEN
```

## 주요 파일
| 파일 | 역할 |
|------|------|
| src/data/config.ts | App Store URL, GitHub URL, 이메일 등 |
| src/data/content.ts | Hero 텍스트, Features, FAQ 등 모든 콘텐츠 |
| scripts/sync-content.sh | README 확인 + 스크린샷 처리 스크립트 |

## App Store 연결
심사 통과 후 src/data/config.ts의 appStoreUrl 수정하면 자동 반영.

## 주의사항
- 외부 라이브러리 추가 금지 (CSS only 애니메이션)
- 스크린샷은 반드시 리사이즈 후 사용 (750px 이하)
- Vercel 토큰 문서 포함 금지
