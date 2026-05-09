import Link from "next/link";
import { JSX } from "react";
import styles from "./card.module.css";

type Posts = {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: number;
};

type CardProps = {
  posts: Posts[];
};

const Card = ({ posts }: CardProps) => {
  return (
    <div className={styles.postsGrid}>
      {posts.map(
        ({ slug, title, date, description, readingTime }: Posts): JSX.Element => {
          return (
            <Link href={`/blog/${slug}`} key={slug} className={styles.cardLink} aria-label={`Ler artigo: ${title}`}>
              <article className={styles.postCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <time dateTime={date} className={styles.date}>{date}</time>
                    <span className={styles.readingTime}>{readingTime} min</span>
                  </div>
                  
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardDescription}>{description}</p>
                  
                  <div className={styles.cardFooter}>
                    <span className={styles.readMore}>Ler artigo →</span>
                  </div>
                </div>
              </article>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Card;
