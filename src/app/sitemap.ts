import type { MetadataRoute } from "next";

import { siteOrigin } from "@/lib/siteMetadata";

const routes = [
  "",
  "/prepa-sport",
  "/nos-actions",
  "/insertion",
  "/sport-sante",
  "/formation",
  "/rugban-7s",
  "/partenaires",
  "/contact",
  "/mentions-legales",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteOrigin.replace(/\/$/, "");

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
