import Image from "next/image";
import { siteConfig } from "@/data/config";
import { heroContent } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#4A6CF7]/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#FF4D6A]/5 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* App Icon */}
        <div className="animate-fade-in-up mb-8 animate-pulse-glow rounded-[28px] shadow-2xl shadow-[#4A6CF7]/30 overflow-hidden">
          <Image
            src="/images/app-icon.png"
            alt="합격노트 앱 아이콘"
            width={96}
            height={96}
            className="h-24 w-24"
            priority
          />
        </div>

        {/* Badge */}
        <div className="animate-fade-in-up animation-delay-100 mb-6 inline-flex items-center gap-2 rounded-full border border-[#4A6CF7]/20 bg-[#4A6CF7]/10 px-4 py-1.5 text-sm font-medium text-[#6B8AFF]">
          <span className="h-2 w-2 rounded-full bg-[#4A6CF7]" />
          {heroContent.badge}
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up animation-delay-200 mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="gradient-text">{heroContent.title}</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animation-delay-300 mb-3 text-xl font-medium text-[var(--text-secondary)] sm:text-2xl">
          {heroContent.subtitle}
        </p>

        {/* Tagline */}
        <p className="animate-fade-in-up animation-delay-400 mb-12 max-w-lg text-base text-[var(--text-secondary)] leading-relaxed">
          {heroContent.description}
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animation-delay-500 flex flex-col gap-4 sm:flex-row">
          <a
            href={siteConfig.appStoreUrl ?? "#download"}
            target={siteConfig.appStoreUrl ? "_blank" : undefined}
            rel={siteConfig.appStoreUrl ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-3 rounded-full bg-[var(--accent-blue)] px-10 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-blue-light)] hover:shadow-xl hover:shadow-[#4A6CF7]/25 hover:-translate-y-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.49C5.56 7.99 7.13 7.01 8.82 6.99C10.1 6.97 11.32 7.85 12.11 7.85C12.89 7.85 14.37 6.78 15.92 6.95C16.57 6.98 18.39 7.21 19.56 8.91C19.47 8.97 17.39 10.15 17.41 12.68C17.44 15.73 20.06 16.73 20.09 16.74C20.06 16.82 19.67 18.18 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            {siteConfig.appStoreUrl ? "App Store에서 다운로드" : "출시 준비 중"}
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-4 text-base font-semibold text-[var(--text-secondary)] transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub에서 보기
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-700">
        <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
          <span className="text-xs">스크롤하여 더 보기</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
