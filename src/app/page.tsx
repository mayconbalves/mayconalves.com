import Link from "next/link";
import { JSX } from "react";
import { getAllPosts } from "../../lib/posts";
import Card from "../components/card";
import styles from "./page.module.css";

export default async function Home(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  // Display more posts on the homepage if we removed the tabs
  const featuredPosts = posts.slice(0, 6);

  return (
    <div className={styles.main}>
      <section className={styles.hero_wrapper}>
        <div className={styles.container}>
          <div className={styles.hero_section}>
            <div className={styles.hero_badge}>
              <span className={styles.status_dot}></span>
              Engenheiro de Software Sênior
            </div>
            
            <h1 className={styles.hero_title}>
              Criando experiências digitais com <span>React</span>
            </h1>
            
            <p className={styles.hero_subtitle}>
              Olá, eu sou o Maycon Alves. Desenvolvedor front-end focado no ecossistema moderno. Escrevo sobre interfaces escaláveis, performance, usabilidade e tudo o que permeia o desenvolvimento web profissional.
            </p>
            
            <div className={styles.hero_links}>
              <Link href="/blog" className={styles.primary_button}>
                Ler Artigos <span aria-hidden="true">→</span>
              </Link>
              <a href="https://github.com/mayconbalves" target="_blank" rel="noopener noreferrer" className={styles.secondary_button}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blog_wrapper}>
        <div className={styles.container}>
          <div className={styles.container_blog}>
            <div className={styles.blog_header}>
              <h2 className={styles.section_heading}>Últimos Artigos</h2>
              <Link href="/blog" className={styles.view_all_link} aria-label="Ver todos os artigos do blog">
                Ver todos
              </Link>
            </div>

            <Card posts={featuredPosts} />
          </div>

          <div className={styles.container_copyright}>
            <p>
              © {new Date().getFullYear()} Maycon Alves - Construído com Next.js.{" "}
              <Link href="/polices">Políticas de Privacidade</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
