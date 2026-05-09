import { JSX } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" aria-label="Ir para página inicial">
              <span className={styles.logo}>Maycon<span>.</span></span>
            </Link>
            <p className={styles.description}>
              Engenheiro de Software Especializado em Front-end.
            </p>
          </div>
          
          <nav className={styles.social_nav} aria-label="Redes sociais">
            <ul className={styles.social_list}>
              <li>
                <Link
                  href="https://github.com/mayconbalves"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar perfil no GitHub (abre em nova aba)"
                  className={styles.social_link}
                >
                  <FaGithub size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/mayconbalves"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar perfil no LinkedIn (abre em nova aba)"
                  className={styles.social_link}
                >
                  <FaLinkedin size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/mayconbalves"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar perfil no Twitter (abre em nova aba)"
                  className={styles.social_link}
                >
                  <FaTwitter size={24} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className={styles.bottom_bar}>
          <p>© {new Date().getFullYear()} Maycon Alves. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
