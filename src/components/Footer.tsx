export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4A6CF7] to-[#3454D1] text-sm font-bold text-white">
            합
          </div>
          <span className="text-base font-semibold text-[var(--text-primary)]">합격노트</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="/privacy"
            className="text-[var(--text-secondary)] transition-colors hover:text-white"
          >
            개인정보처리방침
          </a>
          <a
            href="/support"
            className="text-[var(--text-secondary)] transition-colors hover:text-white"
          >
            고객지원
          </a>
          <a
            href="https://github.com/joon2322/SSA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:joon2322@gmail.com"
            className="text-[var(--text-secondary)] transition-colors hover:text-white"
          >
            joon2322@gmail.com
          </a>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          &copy; 2026 합격노트. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
