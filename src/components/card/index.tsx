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
  cardType: string;
};

const Card = ({ cardType = "", posts }: CardProps) => {
  return (
    <>
      {cardType === "vertical" ? (
        <>
          {posts.map(
            ({
              slug,
              title,
              date,
              description,
              readingTime,
            }: Posts): JSX.Element => (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className={styles.cardLink}
              >
                <div className={`${styles["vintage-card"]} ${styles.ornate}`}>

                  <div className={styles["card-border"]}>

                    <div className={styles["card-title"]}>{title}</div>

                    <div className={styles["card-divider"]}></div>

                    <div className={styles["card-content"]}>{description}</div>
                    <div className={styles["card-subtitle"]}>
                      {date}
                    </div>
                    <div className={styles["card-subtitle"]}>
                      tempo de leitura {readingTime}
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </>
      ) : (
        <div className={styles.horizontalWrapper}>
          {posts
            .sort(
              (a, b) =>
                new Date(b.slug.slice(0, 10)).getTime() -
                new Date(a.slug.slice(0, 10)).getTime()
            )
            .slice(0, 3)
            .map(
              ({ slug, title, date, description }: Posts): JSX.Element => (
                <Link
                  href={`/blog/${slug}`}
                  key={slug}
                  className={styles.cardLink}
                >
                  <div className={`${styles["vintage-card"]} ${styles.rustic}`}>
                    <div className={styles["right-side"]}>
                      <div className={styles["title-group"]}>
                        <div className={styles["card-label"]}>
                          <div className={styles.badge}>{date}</div>
                        </div>
                        <div className={styles["card-title"]}>{title}</div>
                      </div>

                      <div className={styles["card-description"]}>
                        {description}
                      </div>

                      <div className={styles["bottom-info"]}>
                        <div className={styles.year}>Autor:</div>
                        <div className={styles.signature}>{"Maycon Alves"}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
        </div>
      )}
    </>
  );
};

export default Card;
