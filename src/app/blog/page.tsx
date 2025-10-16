import Link from "next/link";
import { getAllPosts } from "../../../lib/posts";

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link> - <time>{date}</time>
          </li>
        ))}
      </ul>
    </>
  );
}
