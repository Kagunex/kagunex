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
  title: "Kagunex — Building digital experiences",
  description:
    "Personal developer portfolio of Kagunex. Web Developer, Software Developer, Bot & Automation Developer.",
  keywords: [
    "Kagunex",
    "Web Developer",
    "Software Developer",
    "Bot Developer",
    "Automation",
    "Next.js",
  ],
  authors: [{ name: "Kagunex" }],
  openGraph: {
    title: "Kagunex — Building digital experiences",
    description:
      "Web applications, AI-powered tools, automation systems, and developer utilities.",
    type: "website",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
