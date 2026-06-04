import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { FinaleJuunesSection } from "@/components/sections/FinaleJuunes";
import { PrepaSportAdvantagesSection } from "@/components/sections/PrepaSportAdvantagesSection";
import { PrepaSportCandidatureSection } from "@/components/sections/PrepaSportCandidatureSection";
import { PrepaSportIntroSection } from "@/components/sections/PrepaSportIntroSection";
import { PrepaSportModulesSection } from "@/components/sections/PrepaSportModulesSection";
import { PrepaSportTestimonialsSection } from "@/components/sections/PrepaSportTestimonialsSection";

import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Prépa Sport",
  description:
    "Session certifiante de 5 mois : 126 heures sport / 82 heures pro / 176 heures socio-éducation. BAFA · PSC1 · BP JEPS pour les franciliennes et franciliens 16 à 25 ans.",
  path: "/prepa-sport",
});

export default function PrepaSportPage() {
  return (
    <>
      <PageHero
        title="PRÉPA SPORT"
        eyebrow="Une session par an"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Prépa sport" },
        ]}
      />

      <PrepaSportIntroSection />
      <PrepaSportAdvantagesSection />
      <PrepaSportModulesSection />
      <PrepaSportTestimonialsSection />
      <PrepaSportCandidatureSection />
      <FinaleJuunesSection />
    </>
  );
}
