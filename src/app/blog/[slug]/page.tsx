import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../../lib/posts";
import styles from "./slug.module.css";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <article>
          <div className={styles.container_date}>
            <p>
              <time>{post.date}</time> -{" "}
              <span>{post.readingTime} minutos de leitura</span>
            </p>
          </div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </div>
    </div>
  );
}
