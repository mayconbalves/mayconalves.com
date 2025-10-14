// next/pages/blog/index.tsx
import Link from "next/link";
import { getAllPosts, Post } from "../../lib/posts";

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link> - <time>{date}</time>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
}
