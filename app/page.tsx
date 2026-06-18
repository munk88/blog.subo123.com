import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Network / Linux / Home Lab</p>
          <h1>把每一次网络实验写成可复用的笔记。</h1>
          <p className="hero-copy">
            这里整理 Linux、网络工程、旁路由、DNS、代理和家庭实验室排障记录。文章现在使用 Markdown 编写，提交后自动生成静态页面。
          </p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="latest-posts">
        <div className="section-heading">
          <p className="eyebrow">Latest Posts</p>
          <h2 id="latest-posts">最新文章</h2>
        </div>

        <div className="post-list">
          {posts.map((post) => (
            <article className="post-card" key={post.slug}>
              <div className="post-meta">
                <time dateTime={post.date}>{post.date}</time>
                <span>{post.category}</span>
              </div>
              <h3>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
