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
  date: string; // já formatada
  contentHtml: string;
};

export async function getPostSlugs(): Promise<string[]> {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = decodeURIComponent(slug).replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Arquivo não encontrado: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Formata a data para evitar problemas de hidratação
  const formattedDate =
    typeof data.date === "string"
      ? format(new Date(data.date), "dd/MM/yyyy")
      : format(data.date, "dd/MM/yyyy");

  return {
    slug: realSlug,
    title: data.title || "Sem título",
    date: formattedDate,
    contentHtml,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  // Ordena por data mais recente primeiro
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
