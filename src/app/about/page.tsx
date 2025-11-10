import { JSX } from "react";
import styles from "./about.module.css";

export const metadata = {
  title: "Sobre | Maycon Alves",
  description:
    "Conheça mais sobre Maycon Alves, desenvolvedor front-end desde 2017, especialista em React, TypeScript e GraphQL.",
};

export default function About(): JSX.Element {
  return (
    <div className={styles.main}>
      <hr />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Maycon Alves</h1>
          <p className={styles.subtitle}>Desenvolvedor Front-end Sênior</p>
          <p className={styles.intro}>
            Sou desenvolvedor front-end desde <strong>2017</strong>, apaixonado
            por transformar ideias em experiências digitais funcionais,
            elegantes e com um toque retrô. Gosto de unir tecnologias modernas
            com design clássico e interfaces que contam histórias.
          </p>
        </div>
      </section>

      <section className={styles.dashboard}>
        <h2>Stacks que já usei</h2>

        <div className={styles.skillGroup}>
          <div className={styles.skillItem}>
            <span className={styles.skillLabel}>⚛️ React / Next.js</span>
            <div className={styles.skillBar}>
              <div style={{ width: "95%" }} className={styles.barFill}></div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <span className={styles.skillLabel}>
              🧠 TypeScript / JavaScript
            </span>
            <div className={styles.skillBar}>
              <div style={{ width: "90%" }} className={styles.barFill}></div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <span className={styles.skillLabel}>
              🎨 Sass / Styled Components
            </span>
            <div className={styles.skillBar}>
              <div style={{ width: "88%" }} className={styles.barFill}></div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <span className={styles.skillLabel}>🔗 GraphQL / REST</span>
            <div className={styles.skillBar}>
              <div style={{ width: "85%" }} className={styles.barFill}></div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <span className={styles.skillLabel}>🧩 Vite / Jest / Cypress</span>
            <div className={styles.skillBar}>
              <div style={{ width: "80%" }} className={styles.barFill}></div>
            </div>
          </div>

          <div className={styles.skillItem}>
            <span className={styles.skillLabel}>
              ⚙️ Firebase / Git / Vercel
            </span>
            <div className={styles.skillBar}>
              <div style={{ width: "75%" }} className={styles.barFill}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <h2>Experiência Profissional</h2>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <h3>Fronta162</h3>
            <p className={styles.role}>Desenvolvedor Front-end Sênior</p>
            <p>
              Desenvolvimento e manutenção de aplicações modernas com React,
              TypeScript, GraphQL e Sass.
            </p>
            <span className={styles.date}>2022 — Presente</span>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <h3>Freelancer</h3>
            <p className={styles.role}>Desenvolvedor Front-end</p>
            <p>
              Criação de interfaces e experiências digitais personalizadas
              focadas em performance e acessibilidade.
            </p>
            <span className={styles.date}>2017 — 2022</span>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <h2>Conecte-se comigo</h2>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/mayconbalves/"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
          <a href="https://github.com/mayconbalves" target="_blank">
            🧑‍💻 GitHub
          </a>
          <a href="mailto:mayconbalves@gmail.com">✉️ E-mail</a>
        </div>
      </section>

      <hr />
    </div>
  );
}
