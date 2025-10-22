import { MetadataRoute } from "next";
import { getAllPosts } from "../../lib/posts";

function isValidDate(date: string): boolean {
  const d = new Date(date);
  return d instanceof Date && !isNaN(d.getTime());
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const posts = await getAllPosts();

    const blogPosts = posts.map((post) => {
      const postDate = isValidDate(post.dateISO)
        ? new Date(post.dateISO)
        : new Date();

      return {
        url: `https://mayconalves.com/blog/${post.slug}`,
        lastModified: postDate,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      };
    });

    const routes = ["", "/blog", "/about"].map((route) => ({
      url: `https://mayconalves.com${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.9,
    }));

    return [...routes, ...blogPosts];
  } catch (error) {
    console.error("Erro ao gerar sitemap:", error);

    // Retorna sitemap básico em caso de erro
    return [
      {
        url: "https://mayconalves.com",
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
      },
      {
        url: "https://mayconalves.com/blog",
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
      },
    ];
  }
}
