import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getAllPosts().find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "文章不存在"
    };
  }

  return {
    title: `${post.title} | Subo 网络学习笔记`,
    description: post.summary
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const exists = getAllPosts().some((post) => post.slug === slug);

  if (!exists) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  return (
    <main className="article-shell">
      <Link className="back-link" href="/">
        返回文章列表
      </Link>
      <article className="article">
        <div className="article-meta">
          <time dateTime={post.date}>{post.date}</time>
          <span>{post.category}</span>
        </div>
        <h1>{post.title}</h1>
        <p className="article-summary">{post.summary}</p>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
