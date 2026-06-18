import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function ensureString(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getAllPosts(): PostMeta[] {
  return getPostFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: ensureString(data.title, slug),
        date: ensureString(data.date, "1970-01-01"),
        category: ensureString(data.category, "Notes"),
        summary: ensureString(data.summary, "")
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: ensureString(data.title, slug),
    date: ensureString(data.date, "1970-01-01"),
    category: ensureString(data.category, "Notes"),
    summary: ensureString(data.summary, ""),
    contentHtml: processedContent.toString()
  };
}
