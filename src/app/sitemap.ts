import { MetadataRoute } from "next";
import { getAllPosts } from "../../lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://mayconalves.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const routes = ["", "/blog", "/about"].map((route) => ({
    url: `https://mayconalves.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  return [...routes, ...blogPosts];
}
