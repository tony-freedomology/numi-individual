import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tony-freedomology.github.io/numi-individual"),
  title: {
    default: "Numi for Individuals | A closer walk with God by text",
    template: "%s | Numi for Individuals",
  },
  description:
    "Numi is a daily SMS discipleship companion that helps you build rhythms, remember your commitments, and stay close to God all week.",
  openGraph: {
    title: "Numi for Individuals | A closer walk with God by text",
    description:
      "Numi is a daily SMS discipleship companion that helps you build rhythms, remember your commitments, and stay close to God all week.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/hero-monday.png",
        width: 1200,
        height: 630,
        alt: "Numi for Individuals discipleship companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Numi for Individuals | A closer walk with God by text",
    description:
      "Numi is a daily SMS discipleship companion that helps you build rhythms, remember your commitments, and stay close to God all week.",
    images: ["/images/hero-monday.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "font-sans")}>{children}</body>
    </html>
  );
}
