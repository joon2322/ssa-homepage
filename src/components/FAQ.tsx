"use client";

import { useState } from "react";

const faqs = [
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
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-white"
      >
        <span className="pr-4 text-base font-medium text-[var(--text-primary)]">
          {q}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-[var(--text-muted)] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">자주 묻는 질문</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-white/5 bg-[var(--surface)] px-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
