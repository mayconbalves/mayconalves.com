import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, Post } from "../../../../lib/posts";
import AdBanner from "../../../components/adsense";
import styles from "./slug.module.css";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Gerar metadata dinâmica para SEO
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  const url = `https://mayconalves.com/blog/${slug}`;

  return {
    title: post.title,
    description: post.description || post.title,
    keywords: post.tags || [],
    authors: [{ name: "Maycon Alves", url: "https://mayconalves.com" }],
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: url,
      title: post.title,
      description: post.description || post.title,
      publishedTime: post.dateISO,
      modifiedTime: post.dateISO,
      authors: ["Maycon Alves"],
      images: [
        {
          url: post.coverImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Maycon Alves",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description || post.title,
      creator: "@seu_twitter",
      images: [post.coverImage || "/og-image.png"],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Gerar paths estáticos para melhor performance
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post: Post): { slug: string } => ({
    slug: post.slug,
  }));
}

// Componente JSON-LD para Rich Snippets
function BlogPostJsonLd({ post, slug }: { post: Post; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || post.title,
    image: post.coverImage || "https://mayconalves.com/og-image.png",
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Person",
      name: "Maycon Alves",
      url: "https://mayconalves.com",
      sameAs: ["https://github.com/mayconbalves"],
    },
    publisher: {
      "@type": "Person",
      name: "Maycon Alves",
      url: "https://mayconalves.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mayconalves.com/blog/${slug}`,
    },
    url: `https://mayconalves.com/blog/${slug}`,
    wordCount: post.contentHtml?.split(" ").length || 0,
    timeRequired: `PT${post.readingTime}M`,
    keywords: post.tags?.join(", ") || "",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Componente BreadcrumbList para navegação
function BreadcrumbJsonLd({ post, slug }: { post: Post; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mayconalves.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://mayconalves.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://mayconalves.com/blog/${slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <>
      <BlogPostJsonLd post={post} slug={slug} />
      <BreadcrumbJsonLd post={post} slug={slug} />

      <div className={styles.main}>
        <hr />
        <div className={styles.layoutWrapper}>
          {/* Ad lateral esquerdo - apenas desktop */}
          <aside className={styles.sidebarLeft}>
            <div className={styles.stickyAd}>
              <AdBanner
                dataAdSlot="1234567890"
                dataAdFormat="vertical"
                dataFullWidthResponsive={false}
                style={{ display: "block", width: "160px", height: "600px" }}
                className={styles.sideAd}
              />
            </div>
          </aside>

          {/* Conteúdo principal do artigo */}
          <div className={styles.container}>
            <article itemScope itemType="https://schema.org/BlogPosting">
              <header>
                <div className={styles.container_date}>
                  <p>
                    <time dateTime={post.dateISO} itemProp="datePublished">
                      {post.date}
                    </time>{" "}
                    -{" "}
                    <span itemProp="timeRequired">
                      {post.readingTime} minutos de leitura
                    </span>
                  </p>
                </div>
                <h1 itemProp="headline">{post.title}</h1>

                {/* Meta informações ocultas para SEO */}
                <meta itemProp="author" content="Maycon Alves" />
                <meta itemProp="dateModified" content={post.dateISO} />
                {post.description && (
                  <meta itemProp="description" content={post.description} />
                )}
                {post.coverImage && (
                  <meta itemProp="image" content={post.coverImage} />
                )}
              </header>

              <div
                itemProp="articleBody"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </article>
          </div>

          {/* Ad lateral direito - apenas desktop */}
          <aside className={styles.sidebarRight}>
            <div className={styles.stickyAd}>
              <AdBanner
                dataAdSlot="0987654321"
                dataAdFormat="vertical"
                dataFullWidthResponsive={false}
                style={{ display: "block", width: "160px", height: "600px" }}
                className={styles.sideAd}
              />
            </div>
          </aside>
        </div>
        <hr />
      </div>
    </>
  );
}
