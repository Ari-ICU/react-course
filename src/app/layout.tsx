import type { Metadata } from "next";
import { Geist, Geist_Mono, Kantumruy_Pro } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kantumruyPro = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["khmer", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mastering Modern React.js — Interactive Platform & Slide System",
  description:
    "Comprehensive intermediate to advanced React course featuring 27 modules, 304 topics, 6 real-world project blueprints, interactive code playgrounds, TanStack Query, Zustand, and Shadcn UI.",
  keywords: [
    "React 19",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "TanStack Query",
    "Zustand",
    "React Hook Form",
    "Zod",
    "Shadcn UI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${kantumruyPro.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
