import Link from "next/link";
import { JSX } from "react";
import styles from "./card.module.css";

type Posts = {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: number;
  image: string;
};

type CardProps = {
  posts: Posts[];
};

const Card = ({ posts }: CardProps) => {
  return (
    <div className={styles.horizontalWrapper}>
      {posts.map(
        ({ slug, title, date, description, readingTime }: Posts): JSX.Element => (
          <Link href={`/blog/${slug}`} key={slug} className={styles.cardLink}>
            <div className={`${styles["vintage-card"]} ${styles.ornate}`}>
              <div className={styles["card-border"]}>
                <div className={styles["card-title"]}>{title}</div>

                <div className={styles["card-divider"]}></div>

                <div className={styles["card-content"]}>{description}</div>
                <div className={styles["card-subtitle"]}>{date}</div>
                <div className={styles["card-subtitle"]}>
                  tempo de leitura {readingTime}
                </div>
              </div>
            </div>
          </Link>
        ),
      )}
    </div>
  );
};

export default Card;
