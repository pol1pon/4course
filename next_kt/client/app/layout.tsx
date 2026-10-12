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
  title: "Planto — Магазин комнатных и горшечных растений | Минимализм и уют",
  description: "Коллекция здоровых горшечных цветов в авторских керамических кашпо. Бережная доставка по городу и гарантия 30 дней.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-stone-800 selection:bg-[#E8DCC4] selection:text-stone-900 font-sans">
        {children}
      </body>
    </html>
  );
}

