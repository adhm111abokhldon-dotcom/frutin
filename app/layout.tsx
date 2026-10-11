import type { Metadata } from "next";
import { Lobster, DM_Sans, Lexend, IBM_Plex_Sans_Arabic, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

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

// Arabic typography: IBM Plex Sans Arabic for headings, Noto Sans Arabic
// for body/interface text. Loaded with the arabic subset only.
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic-src",
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic-src",
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Frutin",
  description: "A simple fruit store",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${lobster.variable} ${lexend.variable} ${dmSans.variable} ${plexArabic.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

