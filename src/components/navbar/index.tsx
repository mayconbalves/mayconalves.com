import { JSX } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/book">Livros</Link>
          </li>

          <li className={styles.logo_image}>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={150}
              height={150}
              priority
            />
          </li>

          <li>
            <Link href="/video">Vídeos</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
