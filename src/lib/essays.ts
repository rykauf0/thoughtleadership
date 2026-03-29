import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content/essays");

export interface EssayMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
}

export interface Essay extends EssayMeta {
  content: string;
}

export function getAllEssays(): EssayMeta[] {
  const files = fs.readdirSync(contentDirectory);
  const essays = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        summary: data.summary,
        date: data.date,
        readTime: data.readTime,
        category: data.category,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return essays;
}

export function getEssayBySlug(slug: string): Essay | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    summary: data.summary,
    date: data.date,
    readTime: data.readTime,
    category: data.category,
    content,
  };
}
