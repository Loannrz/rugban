import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import {
  Rugban7sHintonSection,
  Rugban7sPalmarèsSection,
} from "@/components/sections/Rugban7sSections";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Rugban 7s",
  description:
    "Découvre l'équipe élite nationale à VII féminine : champions de France 2025, palmarès 2022-2025 et vision citoyenne portée hors terrain.",
  path: "/rugban-7s",
});

export default function Rugban7sPage() {
  return (
    <>
      <PageHero
        title="CHAMPIONNES DE FRANCE 2025"
        eyebrow="Équipe élite nationale"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Rugban 7s" },
        ]}
      />

      <Rugban7sPalmarèsSection />
      <Rugban7sHintonSection />
    </>
  );
}
