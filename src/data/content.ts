// src/data/content.ts
// 모든 텍스트 콘텐츠를 중앙 관리합니다.
// scripts/sync-content.sh로 GitHub README에서 자동 동기화됩니다.
// 마지막 동기화: 2026-02-08

export const heroContent = {
  badge: "사진+PDF 가림막 암기 앱",
  title: "합격노트",
  subtitle: "이동 중에도 공부가 되게",
  description: "열면 바로 공부. 짜투리 시간에 꺼내서 보고, 바로 닫을 수 있는 가림막 암기 앱입니다. 공무원 · 자격증 · 수능 · 기사 시험 준비에 딱!",
};

export const featuresContent = {
  title: "핵심 기능",
  subtitle: "시험 준비에 필요한 모든 것을 담았습니다",
  items: [
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
      description: "스스로 채점하며 실력을 확인하세요. O / △ / X 세 단계로 채점하고, 틀린 문제만 골라 재학습할 수 있습니다.",
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
  ],
};

export const screenshotsContent = {
  title: "앱 미리보기",
  subtitle: "직관적인 UI로 학습에만 집중하세요",
  items: [
    { src: "/images/screen_splash.png", caption: "앱 시작" },
    { src: "/images/screen_notes.png", caption: "노트 목록" },
    { src: "/images/screen_mask_edit.png", caption: "가림막 편집" },
    { src: "/images/screen_study.png", caption: "학습 모드" },
    { src: "/images/screen_grading.png", caption: "채점하기" },
    { src: "/images/screen_result.png", caption: "평가 결과" },
  ],
};

export const targetUsersContent = {
  title: "이런 분께 추천합니다",
  items: [
    {
      icon: "📝",
      title: "수험생",
      description: "공무원 · 자격증 · 수능 교재 핵심 암기",
      highlight: "합격률 UP",
    },
    {
      icon: "🎓",
      title: "대학생",
      description: "전공 시험 기간 빠른 복습",
      highlight: "효율적 학습",
    },
    {
      icon: "💼",
      title: "직장인",
      description: "이동 중 자투리 시간 암기",
      highlight: "시간 절약",
    },
  ],
};

export const faqContent = {
  title: "자주 묻는 질문",
  items: [
    {
      q: "무료로 사용할 수 있나요?",
      a: "네, 무료로 노트 10개, 노트당 페이지 20장까지 사용 가능합니다. Pro 업그레이드로 더 많은 노트와 페이지를 사용할 수 있습니다. (준비 중)",
    },
    {
      q: "인터넷 연결이 필요한가요?",
      a: "아니요, 합격노트는 100% 오프라인으로 동작합니다. 모든 데이터는 기기에만 저장됩니다.",
    },
    {
      q: "개인정보는 안전한가요?",
      a: "합격노트는 어떠한 개인정보도 수집하지 않습니다. 서버 전송 없음, 계정 시스템 없음, 분석 SDK 없음.",
    },
    {
      q: "어떤 기기에서 사용할 수 있나요?",
      a: "현재 iOS 17.0 이상의 iPhone에서 사용 가능합니다.",
    },
    {
      q: "PDF도 가져올 수 있나요?",
      a: "네, PDF 파일을 가져와서 각 페이지를 학습 자료로 사용할 수 있습니다.",
    },
  ],
};

export const ctaContent = {
  title: "오늘도 한 페이지,",
  titleAccent: "내일의 합격을 위해",
  description: "지금 바로 시작하세요. 무료입니다.",
  footnote: "iOS 17.0 이상 · iPhone 전용 · 무료",
};
