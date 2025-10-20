import { JSX } from "react";
import PostCard from "../components/card";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div className={styles.main}>
      <section>
        <div className={styles.slider}>
          <hr />
          <div className={styles.container}>
            <div className={styles.container_title}>
              <div>
                <h1>Olá,</h1>
                <p>
                  Seja bem-vindo ao meu blog. Eu sou <span>Maycon Alves.</span>{" "}
                  Trabalho como desenvolvedor front-end desde 2017.
                </p>
                <p>
                  Aqui você pode encontrar artigos sobre programação,
                  desenvolvimento web e desenvolvimento pessoal, espero que
                  achem interessantes.
                </p>

                <p>
                  Atualmente trabalho na <span>fronta162</span> como
                  desenvolvedor front sênior, em projetos usando como principal
                  stack: React, TypeScript, GraphQl, Sass e Php.
                </p>
              </div>
            </div>

            <div className={styles.container_blog}>
              <h2 className={styles.container_blog_title}>Últimos posts</h2>

              <PostCard />
            </div>

            <div className={styles.container_copyright}>
              <p>
                © 2025 Maycon Alves -
                <Link href="/polices"> Políticas de Privacidade</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
