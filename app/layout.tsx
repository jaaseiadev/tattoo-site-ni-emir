import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title: "Emir Soria — Independent Tattoo Artist",
    description:
      "Custom blackwork, fine line, and illustrative tattooing by Emir Soria in Manila and beyond.",
    openGraph: {
      title: "Emir Soria — Marks Made to Live With",
      description: "Custom tattooing and original artwork in Manila and beyond.",
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Emir Soria tattoo portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Emir Soria — Marks Made to Live With",
      description: "Custom tattooing and original artwork in Manila and beyond.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}
