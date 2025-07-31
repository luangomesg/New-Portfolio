import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Luan portfolio",
  description: "Luan Gomes Galvão web portfolio",
  keywords: [
    "Development",
    "Portfolio",
    "web portfolio",
    "web developer",
    "Developer",
    "Javascript",
    "Typescript",
    "Font-end",
    "Luan Gomes Galvão",
    "Luan Gomes",
    "Luan web portfolio",
    "Luan Gomes web portfolio",
    "Luan Gomes Galvão web portfolio",
    "Portfolio web developer",
    "front-end developer",
    "Next.js",
    "React",
    "front-end portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
