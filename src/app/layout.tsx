import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";

import "@/styles/sections.css";
import "./globals.css";

import { AppProviders } from "@/components/layout/AppProviders";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransitionBridge } from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rugban.fr",
  ),
  title: {
    template: "%s | Rugby Urban Attitude",
    default: "Rugby Urban Attitude",
  },
  description:
    "Depuis 2006, Rugby Urban Attitude utilise le rugby comme levier d'insertion sociale pour la jeunesse francilienne : actions gratuites, Prépa Sport et équipes élite féminines.",
  openGraph: {
    locale: "fr_FR",
    type: "website",
    siteName: "Rugby Urban Attitude",
    title: "Rugby Urban Attitude - insertion par le sport",
    description:
      "Insertion sociale et professionnelle pour les jeunes d'Île-de-France : programmes urbains gratuits et parcours certifiants.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rugban.fr/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rugby Urban Attitude",
    description:
      "Association loi 1901 : actions citoyennes, insertion professionnelle, Sport Santé et Rugban 7s en Île-de-France.",
  },
  alternates: {
    canonical: "/",
    languages: { fr: "/" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${bebas.variable} bg-black antialiased`}>
        <AppProviders>
          <Navbar />
          <PageTransitionBridge>
            <main className="min-h-screen min-w-0 overflow-x-clip">{children}</main>
          </PageTransitionBridge>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
