import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const channels = [
  {
    id: "network",
    index: "01",
    title: "网络工程",
    description: "拓扑设计、路由交换、DNS、代理与真实故障排查。",
    categories: ["网络工程", "网络实验"]
  },
  {
    id: "linux",
    index: "02",
    title: "Linux 系统",
    description: "服务器管理、Shell、服务配置与系统运维记录。",
    categories: ["Linux 系统", "Linux"]
  },
  {
    id: "building",
    index: "03",
    title: "站点建设",
    description: "Next.js、Markdown、Cloudflare 与个人技术站迭代。",
    categories: ["站点建设"]
  }
] as const;

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy-block">
            <p className="eyebrow">SUBO / TECH LOG</p>
            <h1>记录系统，<br />拆解网络。</h1>
            <p className="hero-copy">
              Linux、网络工程与个人技术站的实验日志。保留环境、判断链路和最终验证，让每一次排障都能再次运行。
            </p>
          </div>
          <dl className="system-panel" aria-label="站点信息">
            <div>
              <dt>Status</dt>
              <dd><span className="status-dot" />Online</dd>
            </div>
            <div>
              <dt>Articles</dt>
              <dd>{String(posts.length).padStart(2, "0")}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Next.js / MD</dd>
            </div>
            <div>
              <dt>Deploy</dt>
              <dd>Cloudflare</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="channel-section" aria-labelledby="channels-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">KNOWLEDGE CHANNELS</p>
            <h2 id="channels-title">三个栏目</h2>
          </div>
          <p className="section-note">从实验现场到可复用知识</p>
        </div>

        <div className="channel-grid">
          {channels.map((channel) => {
            const channelPosts = posts.filter((post) =>
              channel.categories.includes(post.category as never)
            );

            return (
              <section className="channel" id={channel.id} key={channel.id}>
                <div className="channel-topline">
                  <span>{channel.index}</span>
                  <span>{String(channelPosts.length).padStart(2, "0")} POSTS</span>
                </div>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                <div className="channel-links">
                  {channelPosts.length > 0 ? (
                    channelPosts.slice(0, 3).map((post) => (
                      <Link href={`/posts/${post.slug}`} key={post.slug}>
                        <span>{post.title}</span>
                        <span aria-hidden="true">↗</span>
                      </Link>
                    ))
                  ) : (
                    <span className="channel-empty">等待第一篇记录</span>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="content-section" aria-labelledby="latest-posts">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LATEST LOGS</p>
            <h2 id="latest-posts">最新记录</h2>
          </div>
          <p className="section-note">按发布时间排序</p>
        </div>

        <div className="post-list">
          {posts.map((post, index) => (
            <article className="post-row" key={post.slug}>
              <span className="post-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="post-meta">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>{post.category}</span>
                </div>
                <h3><Link href={`/posts/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.summary}</p>
              </div>
              <Link className="post-arrow" href={`/posts/${post.slug}`} aria-label={`阅读：${post.title}`}>
                ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
