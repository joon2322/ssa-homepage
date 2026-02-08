import Image from "next/image";
import { screenshotsContent } from "@/data/content";

export default function Screenshots() {
  return (
    <section id="screenshots" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text-blue">{screenshotsContent.title}</span>
          </h2>
          <p className="mx-auto max-w-lg text-[var(--text-secondary)]">
            {screenshotsContent.subtitle}
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
          {screenshotsContent.items.map((shot) => (
            <div key={shot.src} className="flex flex-col items-center gap-4 snap-center shrink-0">
              <div className="phone-frame">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  width={220}
                  height={476}
                  className="block w-[220px] h-auto"
                />
              </div>
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                {shot.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
