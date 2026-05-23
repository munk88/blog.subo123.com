# Subo NetLab

这是 `blog.subo123.com` 的静态博客起始版本，用来记录网络工程师学习笔记、实验拓扑、排障过程和备考复盘。

## 本地预览

直接打开 `index.html` 即可预览。

## 部署建议

- GitHub Pages：把仓库发布为 Pages，`CNAME` 已经写好 `blog.subo123.com`。
- Cloudflare Pages：连接仓库后设置自定义域名 `blog.subo123.com`。
- 自己的服务器：把整个目录上传到网站根目录，并把域名解析到服务器 IP。

## DNS 提醒

部署到具体平台后，再根据平台给出的记录添加 DNS：

- GitHub Pages 通常使用 `CNAME` 指向你的 GitHub Pages 域名。
- Cloudflare Pages 通常添加平台提示的 `CNAME`。
- 自己的服务器通常添加 `A` 记录指向服务器公网 IP。
