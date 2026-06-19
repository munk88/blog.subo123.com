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
            <Link href="/#network">网络工程</Link>
            <Link href="/#linux">Linux 系统</Link>
            <Link href="/#building">站点建设</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>SUBO TECH LOG</span>
          <span>记录真实实验、命令结果和排障过程。</span>
        </footer>
      </body>
    </html>
  );
}
