import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { NosActionsAudiencesSection } from "@/components/sections/NosActionsAudiencesSection";
import { NosActionsIntro } from "@/components/sections/NosActionsIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

import { programs } from "@/data/programs";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Actions citoyennes",
  description:
    "Rugby quartiers, Coupe des quartiers, Rugby Collège Citoyen, Coupe des collèges et Ovalie Girls : les actions citoyennes de Rugby Urban Attitude en Île-de-France.",
  path: "/nos-actions",
});

export default function NosActionsPage() {
  return (
    <>
      <PageHero
        title="Actions citoyennes"
        eyebrow="Sport citoyen francilien"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Actions citoyennes" },
        ]}
      />

      <NosActionsIntro />

      <section className="section-y border-t border-muted/25 bg-black text-white">
        <div className="container-site space-y-12">
          <SectionLabel label="Programmes" />
          <h2 className="font-display text-clamp-h2 uppercase tracking-[0.02em] text-white">
            Cinq grands axes d&apos;actions citoyennes
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            Des actions de proximité dans les quartiers aux grands événements
            scolaires et fédérateurs, structurées pour gagner en visibilité et
            en cohérence sur l&apos;ensemble du territoire francilien.
          </p>
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((programme) => (
              <ProgramCard key={programme.id} program={programme} />
            ))}
          </div>

          <CTAButton href="/contact" uppercase={false}>
            Proposer un partenariat
          </CTAButton>
        </div>
      </section>

      <NosActionsAudiencesSection />
    </>
  );
}
