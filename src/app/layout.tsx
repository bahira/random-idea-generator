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
  title: "AIdea Generator - Unlock Your Creative Potential",
  description: "Generate innovative ideas instantly with our AI-powered tool. Perfect for creators, entrepreneurs, and anyone looking to spark creativity. Free to start!",
  keywords: "idea generator, creativity, AI, innovation, brainstorming, creative ideas",
  openGraph: {
    title: "AIdea Generator - Unlock Your Creative Potential",
    description: "Generate innovative ideas instantly with our AI-powered tool.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
