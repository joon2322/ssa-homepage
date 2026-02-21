import { siteConfig } from "@/data/config";
import { feedbackContent } from "@/data/content";

export default function Feedback() {
  return (
    <section id="feedback" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#4A6CF7]/10 via-[var(--surface)] to-[#FF4D6A]/5 p-10 text-center md:p-14">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-[#4A6CF7]/10 blur-[90px]" />

          <div className="relative z-10">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="gradient-text">{feedbackContent.title}</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[var(--text-secondary)]">
              {feedbackContent.subtitle}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.feedbackUrl ?? `mailto:${siteConfig.contactEmail}?subject=%ED%95%A9%EA%B2%A9%EB%85%B8%ED%8A%B8%20%ED%94%BC%EB%93%9C%EB%B0%B1`}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5"
              >
                {feedbackContent.ctaLabel}
              </a>
              <a
                href={siteConfig.contributeUrl ?? "#program"}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-[var(--text-secondary)] transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
              >
                {feedbackContent.contributeLabel}
              </a>
            </div>

            <p className="mt-6 text-xs text-[var(--text-muted)]">
              메일: <a className="hover:underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
