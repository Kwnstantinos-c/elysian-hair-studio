import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elysian Hair Studio | Πολυτελής Κομμωτική",
  description:
    "Elysian Hair Studio — Ένα boutique ατελιέ κομμωτικής όπου η τέχνη συναντά την ακρίβεια.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${playfair.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#f6f3ee] text-[#26231f]">{children}</body>
    </html>
  );
}
