import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { MentionsLegalesSection } from "@/components/sections/MentionsLegalesSection";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description:
    "Informations éditoriales, hébergement, propriété intellectuelle, cookies et traitement des données du site officiel Rugby Urban Attitude.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />
      <MentionsLegalesSection />
    </>
  );
}
