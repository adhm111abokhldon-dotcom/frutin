import type { Metadata } from "next";
import { Lobster, DM_Sans, Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend-src",
  subsets: ["latin"],
});

const lobster = Lobster({
  variable: "--font-lobster-src",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-src",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "frutin",
  description: "A simple fruit store",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lobster.variable} ${lexend.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
