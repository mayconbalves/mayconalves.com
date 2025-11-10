import type { Metadata } from "next";
import Script from "next/script";

import { JSX } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayconalves.com"),
  title: {
    default: "Maycon Alves - Desenvolvedor Front-end",
    template: "%s | Maycon Alves",
  },
  description:
    "Blog sobre desenvolvimento web, JavaScript, React, Next.js e tecnologias front-end. Compartilhando conhecimento e experiências.",
  keywords: [
    "desenvolvimento web",
    "front-end",
    "javascript",
    "react",
    "nextjs",
    "typescript",
    "blog tech",
    "Maycon Alves",
    "blog",
    "desenvolvedor front-end",
  ],
  authors: [{ name: "Maycon Alves", url: "https://mayconalves.com" }],
  creator: "Maycon Alves",
  publisher: "Maycon Alves",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mayconalves.com",
    siteName: "Maycon Alves",
    title: "Maycon Alves - Desenvolvedor Front-end",
    description:
      "Blog sobre desenvolvimento web, JavaScript, React, Next.js e tecnologias front-end.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maycon Alves - Desenvolvedor Front-end",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maycon Alves - Desenvolvedor Front-end",
    description: "Blog sobre desenvolvimento web e tecnologias front-end.",
    creator: "@Mayconbalves",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo-192x192.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="hbk7VP_BKrBH9u1JzhN5tCbycPHSSr1yutuXkNyJZ7A"
        />
        <meta name="google-adsense-account" content="ca-pub-4370754805788508" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4370754805788508"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
