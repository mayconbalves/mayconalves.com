import Link from "next/link";
import { getAllPosts } from "../../../lib/posts";
import styles from "./card.module.css";

export default async function PostCard() {
  const posts = await getAllPosts();
  return (
    <>
      {posts
        .sort(
          (a, b) =>
            new Date(b.slug.slice(0, 10)).getTime() -
            new Date(a.slug.slice(0, 10)).getTime(),
        )
        .slice(0, 3)
        .map(({ slug, title, date, description, readingTime }) => (
          <Link href={`/blog/${slug}`} key={slug}>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <p>
                  <time>{date}</time> -{" "}
                  <span>{readingTime} minutos de leitura</span>
                </p>
              </div>
              <div className={styles.card_body}>
                <h1>{title}</h1>
                <h2>{description}</h2>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}
