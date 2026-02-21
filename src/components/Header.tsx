"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#features", label: "학습 흐름" },
  { href: "#screenshots", label: "미리보기" },
  { href: "#program", label: "자료 제공" },
  { href: "#feedback", label: "피드백" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="h-9 w-9 rounded-xl overflow-hidden shadow-lg shadow-[#4A6CF7]/20 transition-transform duration-300 group-hover:scale-110">
            <Image src="/images/app-icon.png" alt="합격노트" width={36} height={36} className="h-9 w-9" />
          </div>
          <span className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
            합격노트
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#feedback"
            onClick={(e) => handleNavClick(e, "#feedback")}
            className="ml-3 rounded-full bg-[var(--accent-blue)] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-blue-light)] hover:shadow-lg hover:shadow-[#4A6CF7]/25"
          >
            피드백
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/5 md:hidden"
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-80 border-t border-white/5" : "max-h-0"
        }`}
      >
        <div className="glass mx-4 mb-4 mt-2 flex flex-col gap-1 rounded-2xl p-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#feedback"
            onClick={(e) => handleNavClick(e, "#feedback")}
            className="mt-1 rounded-xl bg-[var(--accent-blue)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-blue-light)]"
          >
            피드백
          </a>
        </div>
      </div>
    </header>
  );
}
