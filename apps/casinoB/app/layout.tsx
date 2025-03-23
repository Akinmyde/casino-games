import Menu from "@repo/ui/menu";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers/provider";
// import Providers from '@repo//providers/src/provider'

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
      <body className={inter.className}>
        <Providers>
          <Menu locale="en" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
