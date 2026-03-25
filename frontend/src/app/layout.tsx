import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import AntdRegistry from "@/lib/AntdRegistry";
import { ConfigProvider, theme } from "antd";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ["latin"], variable: '--font-fira' });

export const metadata: Metadata = {
  title: "Absar Ahmad | Portfolio v2",
  description: "Junior Full-Stack Developer - Obsidian Redesign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} dark`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background-dark text-slate-100 h-screen flex flex-col overflow-hidden">
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              token: {
                colorPrimary: '#0da6f2',
                borderRadius: 4,
                colorBgBase: '#101c22',
                colorBgContainer: '#0b1215',
                colorBorder: '#222222',
                colorTextPlaceholder: 'rgba(255, 255, 255, 0.45)',
                fontFamily: 'inherit',
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
