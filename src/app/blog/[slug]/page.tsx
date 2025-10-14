// src/app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../../lib/posts";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article className="prose mx-auto p-4">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
