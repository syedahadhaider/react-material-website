import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://material-studies.vercel.app"),
  title: {
    default: "Material Studies — A Quieter Kind of Future",
    template: "%s — Material Studies",
  },
  description:
    "Material research, objects, and field notes at the intersection of nature, technology, and culture.",
  openGraph: {
    type: "website",
    siteName: "Material Studies",
    title: "Material Studies — A Quieter Kind of Future",
    description:
      "Material research, objects, and field notes at the intersection of nature, technology, and culture.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
