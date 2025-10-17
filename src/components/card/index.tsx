import Link from "next/link";
import { getAllPosts } from "../../../lib/posts";

export default async function PostCard() {
  const posts = await getAllPosts();
  return (
    <ul>
      {posts
        .sort(
          (a, b) =>
            new Date(b.slug.slice(0, 10)).getTime() -
            new Date(a.slug.slice(0, 10)).getTime()
        )
        .slice(0, 3)
        .map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link> - <time>{date}</time>
          </li>
        ))}
    </ul>
  );
}
