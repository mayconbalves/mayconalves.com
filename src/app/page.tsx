import styles from "./page.module.css";
import { JSX } from "react";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <div className={styles.main}>
      <section>
        <div className={styles.slider}>
          <hr />
          <div className={styles.container}>
            <div className={styles.container_title}>
              <h1>Maycon Alves</h1>
            </div>
            <div className={styles.container_ribbon}>
              <h2>
                <span>Desenvolvedor Front-End</span>
              </h2>
            </div>
            <div className={styles.container_image}>
              <Image
                src="https://picsum.photos/200/300"
                alt="Maycon Alves"
                width={500}
                height={500}
              />
            </div>
            <h2>&quot;Olá eu sou o, Maycon Alves.</h2>
            <h3>Seja bem-vindo ao meu blog.&quot;</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
