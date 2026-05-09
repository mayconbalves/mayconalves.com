import { JSX } from "react";
import styles from "./about.module.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Sobre | Maycon Alves",
  description:
    "Conheça mais sobre Maycon Alves, Desenvolvedor Front-end Sênior desde 2017, especialista em React, Microfrontends e Ecossistema Web.",
};

export default function About(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Sobre Mim</h1>
            <p className={styles.subtitle}>Desenvolvedor Front-end Sênior</p>
            <p className={styles.intro}>
              Sou desenvolvedor front-end desde <strong>2017</strong>. Tenho um foco constante em arquitetura, performance web e práticas de desenvolvimento escaláveis. Especialista no ecossistema <strong>React</strong>, com vivência na criação de <strong>micro-frontends</strong>, Design Systems e aplicações de alta complexidade.
            </p>
          </div>
        </section>

        <section className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Arsenal Técnico</h2>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Ecossistema React</h3>
              <p>React, Next.js, Redux, Zustand, Apollo Client, React Query, React Native</p>
            </div>
            
            <div className={styles.skillCard}>
              <h3>Linguagens</h3>
              <p>JavaScript (ES6+), TypeScript, HTML5, CSS3, GraphQL</p>
            </div>
            
            <div className={styles.skillCard}>
              <h3>Estilização & UI</h3>
              <p>Styled Components, Sass, CSS Modules, Tailwind CSS, Atomic CSS</p>
            </div>
            
            <div className={styles.skillCard}>
              <h3>Ferramentas & Arquitetura</h3>
              <p>Micro-frontends (Module Federation), Jest, RTL, Webpack, Vite, Git, CI/CD</p>
            </div>
          </div>
        </section>

        <section className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>Trajetória Profissional</h2>

          <div className={styles.timeline}>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>Frota 162</h3>
                  <span className={styles.date}>Out 2025 — Presente</span>
                </div>
                <p className={styles.role}>Senior Frontend Developer</p>
                <p className={styles.description}>
                  Liderando a modernização de um sistema legado para uma nova arquitetura de micro-frontends. Integração via GraphQL e consumo/manutenção de um Design System interno focado em escalabilidade e performance.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>B3 Digitas</h3>
                  <span className={styles.date}>Jan 2025 — Out 2025</span>
                </div>
                <p className={styles.role}>Senior Frontend Developer</p>
                <p className={styles.description}>
                  Desenvolvimento em sistemas de câmbio e administrativos. Orquestração de Front-ends usando Webpack Module Federation (Micro-frontends). Utilização de Apollo Client, Design System próprio e rigorosa cobertura de testes com RTL e Jest.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>Invillia</h3>
                  <span className={styles.date}>Jun 2022 — Dez 2024</span>
                </div>
                <p className={styles.role}>Senior Frontend Developer</p>
                <p className={styles.description}>
                  Consultoria técnica atuando em múltiplos projetos de alta escala. Forte utilização de React, Redux, Styled-components, Next.js, Strapi e testes automatizados (Jest/RTL) para entregas de alta qualidade em diferentes contextos de negócios.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>Avanade</h3>
                  <span className={styles.date}>Abr 2021 — Jun 2022</span>
                </div>
                <p className={styles.role}>Senior Frontend Developer</p>
                <p className={styles.description}>
                  Atuação em consultoria desenvolvendo arquiteturas robustas em múltiplos projetos corporativos com React, Redux e Styled-components, sempre com foco em testes (Jest/RTL) e qualidade de código.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>Gympass</h3>
                  <span className={styles.date}>Dez 2019 — Fev 2021</span>
                </div>
                <p className={styles.role}>Mid Frontend Developer</p>
                <p className={styles.description}>
                  Participação no desenvolvimento da nova plataforma web em React + Redux + Styled-components. Sustentação do sistema legado em Ruby on Rails durante a migração. Contribuições pontuais no app mobile (React Native) com consumo de dados via GraphQL.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>Acesso Soluções de Pagamentos</h3>
                  <span className={styles.date}>Mai 2019 — Dez 2019</span>
                </div>
                <p className={styles.role}>Mid Frontend Developer</p>
                <p className={styles.description}>
                  Criação de um sistema de backoffice para clientes finais utilizando React, Apollo Client para dados, Styled-components para UI, além de testes unitários rígidos com Jest e Enzyme.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>Printi</h3>
                  <span className={styles.date}>Nov 2018 — Mai 2019</span>
                </div>
                <p className={styles.role}>Mid Frontend Developer</p>
                <p className={styles.description}>
                  Construção da nova versão do e-commerce da Printi com React e Redux. Utilização de Emotion-js para estilização dinâmica e participação na criação de um BFF (Backend For Frontend) em Node.js.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>Leroy Merlin Brasil</h3>
                  <span className={styles.date}>Jan 2017 — Nov 2018</span>
                </div>
                <p className={styles.role}>Junior Frontend Developer</p>
                <p className={styles.description}>
                  Início da trajetória Front-end trabalhando na construção do sistema de agendamento e faturas de clientes, utilizando React, Redux e Atomic CSS.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.contactCard}>
            <h2 className={styles.contactTitle}>Vamos conversar?</h2>
            <p>Seja para discutir arquitetura front-end, novos desafios profissionais ou apenas fazer networking.</p>
            
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/mayconbalves/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/mayconbalves" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                <FaGithub /> GitHub
              </a>
              <a href="mailto:mayconbalves@gmail.com" className={styles.linkButton}>
                <FaEnvelope /> Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
