import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiba-trading.com"),
  title: {
    default: "Hiba Trading",
    template: "%s | Hiba Trading",
  },
  description:
    "Futuristic commerce infrastructure with immersive shopping, AI discovery, and responsive design.",
  keywords: [
    "hiba trading",
    "futuristic ecommerce",
    "immersive shopping",
    "ai commerce",
    "nextjs storefront",
  ],
  authors: [{ name: "Hiba Trading Futuristic Commerce" }],
  creator: "Hiba Trading Futuristic Commerce",
  openGraph: {
    type: "website",
    siteName: "Hiba Trading",
    url: "https://hiba-trading.com",
    title: "Hiba Trading | Futuristic Commerce Platform",
    description:
      "Discover immersive digital retail experiences, adaptive AI discovery, and seamless checkout flows with Hiba Trading.",
    images: [
      {
        url: "/hiba-trading-logo.png",
        width: 1200,
        height: 1200,
        alt: "Hiba Trading Futuristic Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@hiba_trading",
    title: "Hiba Trading | Futuristic Commerce Platform",
    description:
      "Discover immersive digital retail experiences, adaptive AI discovery, and seamless checkout flows with Hiba Trading.",
    images: ["/hiba-trading-logo.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background font-sans text-foreground antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
