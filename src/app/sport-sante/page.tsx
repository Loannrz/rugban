import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { SportSanteSection } from "@/components/sections/SportSanteSection";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Sport santé",
  description:
    "Découvrez l'action Sport Santé d'Impact Sport Academy : projet, publics concernés, activités proposées et modalités de contact en Île-de-France.",
  path: "/sport-sante",
});

export default function SportSantePage() {
  return (
    <>
      <PageHero
        title="Sport santé"
        eyebrow="Impact Sport Academy"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Sport santé" },
        ]}
      />
      <SportSanteSection />
    </>
  );
}
