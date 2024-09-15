import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Finance App",
  description: "Generated by Lucas Fernandes Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-sky-950 h-screen">
        {children}
        <Navbar />
      </body>
    </html>
  );
}
