import Link from "next/link";
import { getAllPosts } from "../../../lib/posts";
import styles from "./blog.module.css";

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <>
      <div className={styles.main}>
        <hr />
        <div className={styles.slider}>
          <div className={styles.container}>
            <ul>
              {posts.map(({ slug, title, date }) => (
                <li key={slug}>
                  <Link href={`/blog/${slug}`}>{title}</Link> -{" "}
                  <time>{date}</time>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
