import { JSX } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.container_title}>
        <Link href="/">
          <h1>Maycon Alves</h1>
        </Link>
      </div>
      <div className={styles.container_list}>
        <ul>
          <li>
            <Link href="https://github.com/mayconbalves" target="_blank">
              <Image
                src="/icons/github.svg"
                alt="logo"
                width={40}
                height={40}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/mayconbalves" target="_blank">
              <Image
                src="/icons/linkedin.svg"
                alt="logo"
                width={40}
                height={40}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/mayconbalves" target="_blank">
              <Image
                src="/icons/twitter.svg"
                alt="logo"
                width={40}
                height={40}
                priority
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
