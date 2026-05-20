import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
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

const departementsFranciliens = [
  "Paris",
  "Hauts-de-Seine",
  "Seine-Saint-Denis",
  "Val-de-Marne",
  "Seine-et-Marne",
  "Val-d'Oise",
  "Essonne",
  "Yvelines",
];

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

      <section className="section-y bg-black text-white border-b border-muted/25">
        <div className="container-site space-y-10">
          <SectionLabel label="Résumé projet" />
          <p className="max-w-3xl leading-relaxed text-muted">
            Nous combinons événements de masse couvrant 12 métropoles, tournois scolaires, sessions
            culturelles urbaines et dispositifs d&apos;insertion avancée. Une boucle fermée reliant club
            pro, chantiers associatifs et classes collégiennes.
          </p>
          <div className="rounded-none border border-muted/65 bg-black/70 p-8">
            <h2 className="font-semibold uppercase tracking-[0.24em] text-accent">
              Cartographie indicative IDF — six départements phares suivis hors Paris intra-muros mais
              relais jusqu&apos;à l&apos;ensemble IDF lors des grandes finales régionales
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {departementsFranciliens.slice(1, 7).map((nom) => (
                <article
                  key={nom}
                  className="border border-accent/45 px-6 py-6 text-[11px] uppercase tracking-[0.32em] text-muted"
                >
                  {nom}
                  <span className="block pt-10 text-accent">Référence locale</span>
                </article>
              ))}
              <aside className="border border-accent bg-black/95 p-9 text-accent">
                <span className="text-xs uppercase tracking-[0.52em]">Paris</span>
                <p className="mt-8 text-xl text-muted">
                  Siège associative et lab pédagogiques — passerelles transports banlieues.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-black text-white">
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
