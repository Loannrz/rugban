import type { MetadataRoute } from "next";

import { siteOrigin } from "@/lib/siteMetadata";

export default function robots(): MetadataRoute.Robots {
  const base = siteOrigin.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
