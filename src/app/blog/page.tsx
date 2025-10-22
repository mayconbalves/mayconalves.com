import { JSX } from "react";
import { getAllPosts } from "../../../lib/posts";
import Card from "../../components/card";
import styles from "./blog.module.css";

export default async function Blog(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  return (
    <>
      <div className={styles.main}>
        <hr />
        <div className={styles.slider}>
          <div className={styles.container}>
            <Card posts={posts} cardType="vertical" />
          </div>
        </div>
      </div>
    </>
  );
}
