import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: "知行 Agent · 智能体工作台",
  applicationName: "知行 Agent",
  authors: [{ name: "nowtime", url: "https://github.com/nowtime306" }],
  description: "nowtime 研发的中文 AI Agent 平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
