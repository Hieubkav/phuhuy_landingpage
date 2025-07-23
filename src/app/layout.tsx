import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

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
    <html lang="vi" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark font-sans overflow-x-hidden`}
      >
        <ParticleBackground
          intensity="medium"
          theme="red-white"
          showConnections={true}
        />
        <div className="relative z-10 w-full max-w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
