import { JSX } from "react";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contato | Maycon Alves",
  description:
    "Entre em contato com Maycon Alves. Dúvidas, sugestões ou propostas de trabalho são bem-vindas.",
  openGraph: {
    title: "Contato | Maycon Alves",
    description:
      "Entre em contato com Maycon Alves para dúvidas, sugestões ou propostas.",
    url: "https://mayconalves.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://mayconalves.com/contact",
  },
};

export default function Contact(): JSX.Element {
  return (
    <div className={styles.main}>
      <hr />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Entre em Contato</h1>
          <p className={styles.subtitle}>
            Dúvidas, sugestões ou propostas de trabalho? Fique à vontade para
            entrar em contato!
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h2>Informações de Contato</h2>

          <div className={styles.contactItem}>
            <h3>📧 E-mail</h3>
            <p>
              <a href="mailto:mayconbalves@gmail.com">
                mayconbalves@gmail.com
              </a>
            </p>
            <p className={styles.description}>
              Principal forma de contato. Responderei o mais rápido possível.
            </p>
          </div>

          <div className={styles.contactItem}>
            <h3>💼 LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/mayconbalves/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/mayconbalves
              </a>
            </p>
            <p className={styles.description}>
              Conecte-se comigo para networking profissional.
            </p>
          </div>

          <div className={styles.contactItem}>
            <h3>🧑‍💻 GitHub</h3>
            <p>
              <a
                href="https://github.com/mayconbalves"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/mayconbalves
              </a>
            </p>
            <p className={styles.description}>
              Confira meus projetos e contribuições open source.
            </p>
          </div>
        </div>

        <div className={styles.topics}>
          <h2>Sobre o que posso ajudar?</h2>
          <ul>
            <li>💡 Dúvidas sobre artigos do blog</li>
            <li>🤝 Propostas de colaboração</li>
            <li>💼 Oportunidades de trabalho</li>
            <li>📝 Sugestões de conteúdo</li>
            <li>🐛 Reportar problemas no site</li>
            <li>📚 Palestras e workshops</li>
          </ul>
        </div>

        <div className={styles.note}>
          <p>
            <strong>Nota:</strong> Tento responder todos os e-mails em até 48
            horas úteis. Se for urgente, por favor, mencione no assunto.
          </p>
        </div>
      </section>

      <hr />
    </div>
  );
}
