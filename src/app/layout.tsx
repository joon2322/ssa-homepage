import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "합격노트 - 찍고 가리고 외우는 자격증 암기",
  description:
    "이동 중에도 공부가 되게 — 사진+PDF 가림막 암기 앱. 열면 바로 공부, 닫으면 바로 끝. 공무원, 자격증, 수능, 기사 시험 대비. 오프라인 지원, 개인정보 수집 없음.",
  keywords: [
    "합격노트",
    "암기앱",
    "자격증",
    "공무원",
    "수능",
    "시험준비",
    "가림막학습",
    "암기",
    "iOS앱",
  ],
  authors: [{ name: "합격노트" }],
  openGraph: {
    title: "합격노트 - 찍고 가리고 외우는 자격증 암기",
    description:
      "이동 중에도 공부가 되게 — 사진+PDF 가림막 암기 앱. 공무원, 자격증, 수능, 기사 시험 대비.",
    type: "website",
    locale: "ko_KR",
    siteName: "합격노트",
  },
  twitter: {
    card: "summary_large_image",
    title: "합격노트 - 찍고 가리고 외우는 자격증 암기",
    description:
      "이동 중에도 공부가 되게 — 사진+PDF 가림막 암기 앱. 공무원, 자격증, 수능, 기사 시험 대비.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
