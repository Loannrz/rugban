import type { Metadata } from "next";

export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rugban.fr";

export function buildMetadata(partial: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonical = `${siteOrigin}${partial.path ?? ""}`;
  return {
    metadataBase: new URL(siteOrigin),
    title: `${partial.title} | Rugby Urban Attitude`,
    description: partial.description.slice(0, 160),
    alternates: { canonical },
    openGraph: {
      title: `${partial.title} | Rugby Urban Attitude`,
      description: partial.description.slice(0, 160),
      locale: "fr_FR",
      type: "website",
      url: canonical,
      siteName: "Rugby Urban Attitude",
    },
    twitter: {
      card: "summary_large_image",
      title: `${partial.title} | Rugby Urban Attitude`,
      description: partial.description.slice(0, 160),
    },
  };
}
