import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subo 网络学习笔记",
  description: "Linux、网络工程、家庭实验室和排障记录。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="site-header">
          <Link className="brand" href="/">
            Subo 网络学习笔记
          </Link>
          <nav aria-label="主导航">
            <Link href="/">文章</Link>
            <a href="https://blog.subo123.com">blog.subo123.com</a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>记录真实实验、命令结果和排障过程。</span>
        </footer>
      </body>
    </html>
  );
}
