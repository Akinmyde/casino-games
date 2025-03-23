import Menu from "@repo/ui/menu";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casino Portal",
  description: "Choose your market to enter the casino portal",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Menu locale="en" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
