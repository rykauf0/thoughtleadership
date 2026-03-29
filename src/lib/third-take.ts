import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content/third-take");

export interface ThirdTakeMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  storyCount: number;
}

export interface ThirdTake extends ThirdTakeMeta {
  content: string;
}

export function getAllThirdTakes(): ThirdTakeMeta[] {
  const files = fs.readdirSync(contentDirectory);
  const takes = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        summary: data.summary,
        storyCount: data.storyCount || 3,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return takes;
}

export function getThirdTakeBySlug(slug: string): ThirdTake | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    storyCount: data.storyCount || 3,
    content,
  };
}
