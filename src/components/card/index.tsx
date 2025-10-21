import Link from "next/link";
import { JSX } from "react";
import styles from "./card.module.css";
import Image from "next/image";

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
          {posts
            .sort(
              (a, b) =>
                new Date(b.slug.slice(0, 10)).getTime() -
                new Date(a.slug.slice(0, 10)).getTime(),
            )
            .slice(0, 3)
            .map(
              ({
                slug,
                title,
                date,
                description,
                readingTime,
                image,
              }: Posts): JSX.Element => (
                <Link href={`/blog/${slug}`} key={slug}>
                  <div className={`${styles["vintage-card"]} ${styles.ornate}`}>
                    <div
                      className={`${styles["corner-ornament"]} ${styles["top-left"]}`}
                    ></div>
                    <div
                      className={`${styles["corner-ornament"]} ${styles["top-right"]}`}
                    ></div>
                    <div
                      className={`${styles["corner-ornament"]} ${styles["bottom-left"]}`}
                    ></div>
                    <div
                      className={`${styles["corner-ornament"]} ${styles["bottom-right"]}`}
                    ></div>

                    <div className={styles["card-border"]}>
                      <div className={styles.ornament}>❦</div>

                      <div className={styles["card-image"]}>
                        <Image
                          src={image}
                          alt={title}
                          width={300}
                          height={300}
                        />
                      </div>

                      <div className={styles["card-title"]}>{title}</div>
                      <div className={styles["card-subtitle"]}>
                        {date} - tempo de leitura {readingTime}
                      </div>

                      <div className={styles["card-divider"]}></div>

                      <div className={styles["card-content"]}>
                        {description}
                      </div>

                      <div className={styles["card-footer"]}>
                        • Handcrafted with care •
                      </div>
                    </div>
                  </div>
                </Link>
              ),
            )}
        </>
      ) : (
        <>
          {posts
            .sort(
              (a, b) =>
                new Date(b.slug.slice(0, 10)).getTime() -
                new Date(a.slug.slice(0, 10)).getTime(),
            )
            .slice(0, 3)
            .map(
              ({
                slug,
                title,
                date,
                description,
                image,
              }: Posts): JSX.Element => (
                <Link href={`/blog/${slug}`} key={slug}>
                  <div className={`${styles["vintage-card"]} ${styles.rustic}`}>
                    <div className={styles["left-side"]}>
                      <div className={styles["rustic-image"]}>
                        <Image
                          src={image}
                          alt={title}
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className={styles.badge}>{date}</div>
                    </div>

                    <div className={styles["right-side"]}>
                      <div className={styles["title-group"]}>
                        <div className={styles["card-label"]}>Tags</div>
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
              ),
            )}
        </>
      )}
    </>
  );
};

export default Card;
