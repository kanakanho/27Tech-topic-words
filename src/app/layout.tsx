import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "話題生成サイト",
  description:
    "会話のとき咄嗟に話題が出ないあなたへ！ランダムでお題を選出し、ピンチのあなたを助けます！Let's コミュニケーション！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={notoSansJP.className}>
        <a href="/" className="title">
          <h1>話題提案サイト</h1>
        </a>
        {children}
      </body>
    </html>
  );
}
