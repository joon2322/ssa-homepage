# AGENTS.md -- SSA 합격노트 홈페이지

> **하네스 기반**: `~/Projects/ai-workstation/templates/claude-harness/` **(version pin: v1.1.0 · 프로파일 `frontend-web`, grandfathered — 기존 본문 유지, 핀+등재만)**
> 업그레이드 시 해당 경로 `CHANGELOG.md` 의 핀버전→최신 diff 확인 + 본 줄 갱신 + `docs/INSTANCE_REGISTRY.md` 갱신(컨트롤타워 세션). 권한·분류: ai-workstation `docs/control-tower/FLEET_CLASSIFICATION.md`.

## 🧰 공용 Fleet Skills (범용 skill — 단일 정본)

> **정본·카탈로그**: `~/Projects/ai-workstation/plugins/fleet-skills/README.md` (컨트롤타워 관리 — **copy 금지**, 설계: `ai-workstation/docs/control-tower/FLEET_SKILLS_DESIGN.md`)
> 실행 레이어: Claude = plugin `fleet-skills@joon-fleet`(user-scope) · Codex = `~/.agents/skills` symlink(`ai-workstation/scripts/fleet-skills-sync.sh`) · 기타 에이전트 = 카탈로그에서 SKILL.md 직접 읽고 수동 적용.

- **이 프로젝트의 채택/fork 상태**: fleet 기본값 사용 (fleet-skills v0.4.1 — skill 목록은 카탈로그 README 기준)
- 로컬 튜닝 필요 시: `.claude/skills/` 로 fork → 이 블록 + 채택 원장(FLEET_SKILLS_DESIGN.md) 동시 갱신
- **다른 fleet 프로젝트 참고 시**: repo 를 직접 열기 전에 기술 지도 `~/Projects/ai-workstation/docs/control-tower/FLEET_MAP.generated.md` 먼저 (스택·구조·진입점·신선도)

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

---

## 🤝 Universal Agent Collaboration (`v1.2.0-rc.1` opt-in)

이 repo는 ai-workstation의 tool-neutral 공통 협업 계약을 명시적으로 채택한다. 아래 규칙은 Claude·Codex·OpenCode·외부 agent 모두에 동일하게 적용하며, 이 프로젝트의 기존 배포·credential 규칙이 더 구체적이면 그 규칙이 우선한다.

- 어떤 agent든 `main driver`, `independent reviewer`, `specialist`가 될 수 있다. 제품명은 역할이나 권위를 정하지 않는다.
- 같은 checkout에는 writer 1명만 둔다. 병렬 writer는 각각 별도 branch+worktree와 파일·공유자원 ownership을 가진다.
- 리뷰 강도는 R0/R1(main 검증)·R2(fresh read-only reviewer 1명)·R3(독립 경로 2개 이상 고려)로 실패 비용에 비례시킨다.
- reviewer는 fresh read-only advisory다. finding은 맥락을 가진 main이 `accept/reject/defer`하고, 고위험·범위 확장·미해결 이견만 Joon과 결정한다.
- global skill discovery는 채택이 아니다. 이 절이 `independent-review` 자동 적용의 project opt-in 근거다.
- 공통 계약 정본: `~/Projects/ai-workstation/templates/claude-harness/docs/AGENT_COLLABORATION.md`
