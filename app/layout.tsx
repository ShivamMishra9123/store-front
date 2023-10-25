"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import AppBar from "@/components/Login/Appbar";
import Providers from "@/components/Login/Providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
