import Image from "next/image";
import { siteConfig } from "@/data/config";
import { ctaContent } from "@/data/content";

export default function CTA() {
  return (
    <section id="download" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#4A6CF7]/10 via-[var(--surface)] to-[#FF4D6A]/5 p-12 text-center md:p-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-[#4A6CF7]/10 blur-[80px]" />

          <div className="relative z-10">
            <div className="mb-6 mx-auto w-16 h-16 rounded-2xl overflow-hidden shadow-xl shadow-[#4A6CF7]/25">
              <Image src="/images/app-icon.png" alt="합격노트" width={64} height={64} className="h-16 w-16" />
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="gradient-text">{ctaContent.title}</span>
              <br />
              <span className="gradient-text-blue">{ctaContent.titleAccent}</span>
            </h2>

            <p className="mb-8 text-[var(--text-secondary)]">
              {ctaContent.description}
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={siteConfig.appStoreUrl ?? "#"}
                target={siteConfig.appStoreUrl ? "_blank" : undefined}
                rel={siteConfig.appStoreUrl ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.49C5.56 7.99 7.13 7.01 8.82 6.99C10.1 6.97 11.32 7.85 12.11 7.85C12.89 7.85 14.37 6.78 15.92 6.95C16.57 6.98 18.39 7.21 19.56 8.91C19.47 8.97 17.39 10.15 17.41 12.68C17.44 15.73 20.06 16.73 20.09 16.74C20.06 16.82 19.67 18.18 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                {siteConfig.appStoreUrl ? "App Store에서 다운로드" : "출시 준비 중"}
              </a>
            </div>

            <p className="mt-6 text-xs text-[var(--text-muted)]">
              {ctaContent.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
