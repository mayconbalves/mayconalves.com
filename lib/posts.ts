import { format } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "./posts");

export type Post = {
  slug: string;
  title: string;
  date: string; // formatada para exibição (dd/MM/yyyy)
  dateISO: string; // ISO format para SEO
  contentHtml: string;
  description: string;
  readingTime: number;
  image: string;
  coverImage?: string; // para Open Graph
  tags?: string[]; // para keywords SEO
};

export async function getPostSlugs(): Promise<string[]> {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const realSlug = decodeURIComponent(slug).replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Garante que temos uma data válida
    const dateObj =
      typeof data.date === "string" ? new Date(data.date) : data.date;

    // Formata a data para exibição
    const formattedDate = format(dateObj, "dd/MM/yyyy");

    // Data em formato ISO para SEO
    const dateISO = dateObj.toISOString();

    // Calcula tempo de leitura (média de 200 palavras por minuto)
    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);

    return {
      slug: realSlug,
      title: data.title || "Sem título",
      date: formattedDate,
      dateISO: dateISO,
      description: data.description || "",
      contentHtml,
      readingTime,
      image: data.image || "",
      coverImage: data.coverImage || data.image || "/og-image.png",
      tags: data.tags || [],
    };
  } catch (error) {
    console.error(`Erro ao carregar post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug.replace(/\.md$/, ""));
      return post;
    })
  );

  // Remove posts nulos (caso algum tenha falhado) e ordena por data mais recente
  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => {
      // Usa dateISO para ordenação correta
      return new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime();
    });
}

// Função auxiliar para pegar posts recentes (útil para homepage)
export async function getRecentPosts(limit: number = 3): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, limit);
}

// Função auxiliar para pegar posts por tag
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags && post.tags.includes(tag));
}

// Função auxiliar para pegar todas as tags únicas
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}
