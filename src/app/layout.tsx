import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import { JSX } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import {
  WebsiteStructuredData,
  PersonStructuredData,
} from "../components/structured-data";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mayconalves.com"),
  title: {
    default: "Maycon Alves - Engenheiro de Software",
    template: "%s | Maycon Alves",
  },
  description:
    "Blog sobre engenharia de software, React, Next.js, segurança e tecnologias web.",
  keywords: [
    "desenvolvimento web",
    "front-end",
    "engenharia de software",
    "react",
    "nextjs",
    "typescript",
    "blog tech",
    "Maycon Alves",
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
    title: "Maycon Alves - Engenheiro de Software",
    description:
      "Blog sobre engenharia de software, React, Next.js e ecossistema web.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maycon Alves - Engenheiro de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maycon Alves - Engenheiro de Software",
    description: "Blog sobre engenharia de software, React, Next.js e ecossistema web.",
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
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${firaCode.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="hbk7VP_BKrBH9u1JzhN5tCbycPHSSr1yutuXkNyJZ7A"
        />
        <meta name="google-adsense-account" content="ca-pub-4370754805788508" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4370754805788508"
          crossOrigin="anonymous"
        />
        <WebsiteStructuredData
          url="https://mayconalves.com"
          name="Maycon Alves - Engenheiro de Software"
          description="Blog sobre engenharia de software, React, Next.js e ecossistema web."
          author={{
            name: "Maycon Alves",
            url: "https://mayconalves.com",
          }}
        />
        <PersonStructuredData
          name="Maycon Alves"
          url="https://mayconalves.com"
          jobTitle="Engenheiro de Software"
          description="Engenheiro de Software especializado no ecossistema Web."
          sameAs={[
            "https://github.com/mayconbalves",
            "https://www.linkedin.com/in/mayconbalves/",
            "https://twitter.com/Mayconbalves",
          ]}
        />
      </head>
      <body>
        <ThemeProvider>
          {/* Link de pulo para conteúdo principal (acessibilidade) */}
          <a href="#main-content" className="skip-to-content">
            Pular para o conteúdo principal
          </a>
          <header>
            <Navbar />
          </header>
          <main id="main-content">{children}</main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
