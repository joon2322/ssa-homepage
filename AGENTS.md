# AGENTS.md -- SSA 합격노트 홈페이지

> **하네스 기반**: `~/Projects/ai-workstation/templates/claude-harness/` **(version pin: v1.1.0 · 프로파일 `frontend-web`, grandfathered — 기존 본문 유지, 핀+등재만)**
> 업그레이드 시 해당 경로 `CHANGELOG.md` 의 핀버전→최신 diff 확인 + 본 줄 갱신 + `docs/INSTANCE_REGISTRY.md` 갱신(컨트롤타워 세션). 권한·분류: ai-workstation `docs/control-tower/FLEET_CLASSIFICATION.md`.

## 🧰 공용 Fleet Skills (범용 skill — 단일 정본)

> **정본·카탈로그**: `~/Projects/ai-workstation/plugins/fleet-skills/README.md` (컨트롤타워 관리 — **copy 금지**, 설계: `ai-workstation/docs/control-tower/FLEET_SKILLS_DESIGN.md`)
> 실행 레이어: Claude = plugin `fleet-skills@joon-fleet`(user-scope) · Codex = `~/.agents/skills` symlink(`ai-workstation/scripts/fleet-skills-sync.sh`) · 기타 에이전트 = 카탈로그에서 SKILL.md 직접 읽고 수동 적용.

- **이 프로젝트의 채택/fork 상태**: fleet 기본값 사용 (fleet-skills v0.2.0 — skill 목록은 카탈로그 README 기준)
- 로컬 튜닝 필요 시: `.claude/skills/` 로 fork → 이 블록 + 채택 원장(FLEET_SKILLS_DESIGN.md) 동시 갱신

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
