import type { Metadata } from "next";

import { JSX } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
    icon: "/logo.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
