import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phú Huy - Content Creator & Video Editor",
  description: "Video Editor chuyên nghiệp với 5+ năm kinh nghiệm. Chuyên về YouTube, Facebook, Discord content. Thành thạo AI, Photoshop, Illustrator.",
  keywords: "video editor, content creator, youtube editor, facebook editor, discord bot, valorant, yu-gi-oh, photoshop, illustrator, AI",
  authors: [{ name: "Phú Huy" }],
  openGraph: {
    title: "Phú Huy - Content Creator & Video Editor",
    description: "Video Editor chuyên nghiệp với 5+ năm kinh nghiệm",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
