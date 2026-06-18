---
title: "博客技术栈迁移到 Next.js 和 Markdown"
date: "2026-06-11"
category: "站点建设"
summary: "把原来的手写静态页面改成 Next.js 静态博客，以后每篇文章只需要维护一个 Markdown 文件。"
---

这次把博客从手写 HTML 改成了 Next.js + Markdown 的结构。

新的写作方式很简单：每篇文章都是 `content/posts/` 目录下的一个 `.md` 文件。文件名就是文章地址，例如：

```text
content/posts/nextjs-markdown-blog.md
```

最终会生成这个页面：

```text
/posts/nextjs-markdown-blog/
```

## 文章头部信息

每篇文章开头保留一段 front matter，用来描述标题、日期、分类和摘要：

```md
---
title: "文章标题"
date: "2026-06-11"
category: "Linux"
summary: "一句话摘要"
---
```

首页会自动读取这些信息，不再需要手动修改 `index.html`。

## 适合继续做的事

后面可以继续加这些能力：

- 从 Obsidian 直接复制 Markdown 到 `content/posts/`
- 给文章增加标签
- 增加归档页面
- 增加 RSS
- 接入 Cloudflare Pages 自动部署
