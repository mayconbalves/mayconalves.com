import { JSX } from "react";
import type { Metadata } from "next";
import { getAllPosts } from "../../../lib/posts";
import Card from "../../components/card";
import { BreadcrumbStructuredData } from "../../components/structured-data";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre desenvolvimento web, JavaScript, React, Next.js, TypeScript e outras tecnologias front-end. Tutoriais, dicas e experiências sobre programação.",
  keywords: [
    "blog de programação",
    "artigos javascript",
    "tutoriais react",
    "nextjs blog",
    "desenvolvimento web",
    "front-end",
    "typescript",
  ],
  openGraph: {
    title: "Blog | Maycon Alves",
    description:
      "Artigos sobre desenvolvimento web, JavaScript, React, Next.js e tecnologias front-end.",
    url: "https://mayconalves.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Maycon Alves",
    description: "Artigos sobre desenvolvimento web e tecnologias front-end.",
  },
  alternates: {
    canonical: "https://mayconalves.com/blog",
  },
};

export default async function Blog(): Promise<JSX.Element> {
  const posts = await getAllPosts();

  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "Início", url: "https://mayconalves.com" },
          { name: "Blog", url: "https://mayconalves.com/blog" },
        ]}
      />
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1>Meu Blog</h1>
            <p>Artigos sobre engenharia de software, front-end e tecnologias web.</p>
          </div>
        </header>
        <div className={styles.slider}>
          <div className={styles.container}>
            <Card posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}
