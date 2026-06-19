# blog.subo123.com

Next.js + Markdown 技术博客，部署到 Cloudflare Pages。

## 三个栏目

新文章的 `category` 请使用以下三个固定值之一：

- `网络工程`：网络实验、路由交换、DNS、代理和排障
- `Linux 系统`：Linux、Shell、服务配置和服务器运维
- `站点建设`：Next.js、Markdown、Cloudflare 和博客迭代

## 新建文章

在 `content/posts/` 新建一个英文小写文件名，例如 `dns-troubleshooting.md`：

```md
---
title: "文章标题"
date: "2026-06-19"
category: "网络工程"
summary: "用一句话说明这篇文章解决什么问题。"
---

这里开始写正文。
```

提交到 GitHub 的 `main` 分支后，Cloudflare Pages 会自动构建并发布。

## 本地预览

```bash
npm install
npm run dev
```

## Cloudflare Pages 构建

```bash
npm run build
```

Deploy the generated `out/` directory.
