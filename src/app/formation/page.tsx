import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { FormationSection } from "@/components/sections/FormationSection";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Formation",
  description:
    "Axe formation RUGBAN en développement : modules dispensés par l'association et formalisés via Spor Formation pour structures certifiables.",
  path: "/formation",
});

export default function FormationPage() {
  return (
    <>
      <PageHero
        title="Formation"
        eyebrow="En développement"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Formation" }]}
      />
      <FormationSection />
    </>
  );
}
