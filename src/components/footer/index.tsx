import { JSX } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.container_title}>
        <Link href="/" aria-label="Ir para página inicial">
          <h1>Maycon Alves</h1>
        </Link>
      </div>
      <nav className={styles.container_list} aria-label="Redes sociais">
        <ul>
          <li>
            <Link
              href="https://github.com/mayconbalves"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil no GitHub (abre em nova aba)"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={40}
                height={40}
                priority
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/in/mayconbalves"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil no LinkedIn (abre em nova aba)"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={40}
                priority
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/mayconbalves"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil no Twitter (abre em nova aba)"
            >
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={40}
                height={40}
                priority
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
