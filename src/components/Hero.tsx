import Image from "next/image";
import { siteConfig } from "@/data/config";
import { heroContent, feedbackContent } from "@/data/content";

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
        <div className="animate-fade-in-up animation-delay-500 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={siteConfig.feedbackUrl ?? `mailto:${siteConfig.contactEmail}?subject=%ED%95%A9%EA%B2%A9%EB%85%B8%ED%8A%B8%20%ED%94%BC%EB%93%9C%EB%B0%B1`}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent-blue)] px-10 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-blue-light)] hover:shadow-xl hover:shadow-[#4A6CF7]/25 hover:-translate-y-0.5"
          >
            {feedbackContent.ctaLabel}
          </a>
          <a
            href={siteConfig.contributeUrl ?? "#program"}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-4 text-base font-semibold text-[var(--text-secondary)] transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
          >
            {feedbackContent.contributeLabel}
          </a>
        </div>

        <div className="animate-fade-in-up animation-delay-600 mt-6 text-sm text-[var(--text-muted)]">
          <a
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline-offset-4 hover:underline"
          >
            App Store 열기
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
