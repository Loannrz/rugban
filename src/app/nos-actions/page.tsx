import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { NosActionsIntro } from "@/components/sections/NosActionsIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

import { programs } from "@/data/programs";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Nos actions",
  description:
    "Découvre les sept programmes urbains franciliens de Rugby Urban Attitude et la carte indicative des mobilisations depuis 2006.",
  path: "/nos-actions",
});

export default function NosActionsPage() {
  return (
    <>
      <PageHero
        title="NOS ACTIONS"
        eyebrow="Réseau urbain francilien"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Nos actions" },
        ]}
      />

      <NosActionsIntro />

      <section className="section-y border-t border-muted/25 bg-black text-white">
        <div className="container-site space-y-12">
          <SectionLabel label="grille projet" />
          <h2 className="font-display text-clamp-h2 uppercase tracking-[0.02em] text-white">
            Les sept programmes développés
          </h2>
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((programme) => (
              <ProgramCard key={programme.id} program={programme} />
            ))}
          </div>

          <CTAButton href="/contact" uppercase={false}>
            Prévenir un projet partenaires
          </CTAButton>
        </div>
      </section>
    </>
  );
}
