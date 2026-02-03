import Link from "next/link";
import { JSX } from "react";
import { getAllPosts } from "../../lib/posts";
import Card from "../components/card";
import ExperienceTabs from "./ExperienceTabs";
import TechnologiesTabs from "./TechnologiesTabs";
import styles from "./page.module.css";

export default async function Home(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, 3);
  return (
    <div className={styles.main}>
      <section>
        <div className={styles.slider}>
          <div className={styles.container}>
            <div className={styles.container_title}>
              <div>
                <h1>Olá,</h1>
                <p>
                  Seja bem-vindo ao meu blog. Eu sou <span>Maycon Alves.</span>{" "}
                  Trabalho como desenvolvedor web há 10 anos de experiência.
                </p>
                <p>
                  Estudante de analise e desenvolvimento de sistemas, ciências da
                  computação e atualmente cursando uma pós em engenharia de IA.
                  Com experiência em desenvolvimento de aplicações web, apps usando React Native, automação
                  de processos de deploy (CI/CD). Tenho estudado bastante mais sobre backend (nodejs e php) e também
                  sobre cybersecurity (team blue e team red). Tenho habilidades sólidas em
                  diversas tecnologias modernas, incluindo JavaScript com React e
                  Next.js, TypeScript, Redux, GraphQL, Node.js, entre outras.
                </p>
              </div>

              <h2>Tecnologias</h2>
              <TechnologiesTabs />

              <h2>Experiência Profissional</h2>
              <ExperienceTabs />
            </div>

            <div className={styles.container_blog}>
              <h2 className={styles.container_blog_title}>Últimos posts</h2>

              <Card posts={featuredPosts} />
            </div>

            <div className={styles.container_copyright}>
              <p>
                © 2025 Maycon Alves -{" "}
                <Link href="/polices">Políticas de Privacidade</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
