import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { FinaleJuunesSection } from "@/components/sections/FinaleJuunes";

import {
  passeDJour1,
  passeDJour2,
  prepaSportHighlights,
} from "@/data/insertionContent";
import { testimonials } from "@/data/testimonials";
import { buildMetadata } from "@/lib/siteMetadata";

const advantagesPrepaSport = [
  {
    titre: "Tuteur projet dédié",
    texte:
      "Une cellule associative suit chaque dossier jusqu'aux validations certifiantes et aux épreuves pratiques.",
  },
  {
    titre: "Immersions terrain",
    texte:
      "Club professionnel, événements majeurs, rencontres techniques : mise en mouvement concrète hebdomadaire.",
  },
  {
    titre: "Relais Mission Locale",
    texte:
      "Chaque candidature passe par vos réseaux officiels franciliens ; nous nous synchronisons lors des panels collectifs.",
  },
  {
    titre: "Gouvernance par les pairs",
    texte:
      "Une promotion accompagne les suivantes tant sur la partie sportive que sur la mise en régularité scolaire / pro.",
  },
] as const;

const modules = [
  { label: "Sports", heures: 126 },
  { label: "Professions du spectacle sportif", heures: 82 },
  { label: "Socio-éducation", heures: 176 },
] as const;

const candidatureSteps = [
  "Construire votre dossier avec votre conseiller Mission Locale / France Travail.",
  "Participer au rendez-vous motivation / mise en mouvement encadrée par deux éducateurs permanents.",
  "Intégrer la cohorte officielle suivie de deux semaines d'accélération commune avec la promotion sortante.",
] as const;

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
        eyebrow="Deux cohortes saisonnières"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Prépa sport" },
        ]}
      />

      <section className="section-y bg-black text-white">
        <div className="container-site grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="space-y-6">
            <h2 className="font-display text-4xl uppercase">Passerelles vers l&apos;emploi public et privé</h2>
            <p className="leading-relaxed text-muted">
              Depuis plusieurs cycles, nous accompagnons un public jeune très mobile entre les différentes
              dispositifs urbains franciliens. La Prépa Sport reste gratuit intégralement et décline nos valeurs territoriales jusqu&apos;au diplôme.
            </p>
            <p className="leading-relaxed text-muted">
              Une promo type compte jusqu&apos;à vingt-cinq volontaires, alternant cours magistraux ludiques et
              mises en situation professionnelles encadrées.
            </p>
          </article>
          <aside className="border border-accent/65 bg-black/85 p-8">
            <h3 className="text-[11px] uppercase tracking-[0.42em] text-accent">Synthèse</h3>
            <p className="mt-8 text-xl leading-relaxed text-primary">
              384 heures suivies sous contrat projet associatif&nbsp;: trois blocs interconnectés jusqu&apos;à la
              remise officielle diplômant.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-y bg-black text-white border-t border-muted/25">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          {advantagesPrepaSport.map((bloc) => (
            <div key={bloc.titre} className="border border-muted/35 p-7">
              <h3 className="text-accent uppercase tracking-[0.26em]">{bloc.titre}</h3>
              <p className="mt-6 leading-relaxed text-muted">{bloc.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-black text-white">
        <div className="container-site space-y-12">
          <h2 className="font-display text-clamp-h2 uppercase tracking-[0.02em]">Modules suivis avec barres de progression décoratives</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {modules.map((module, index) => (
              <div key={module.label} className="flex flex-col border border-accent/65 p-8">
                <p className="text-xs uppercase tracking-[0.32em] text-muted">Bloc {index + 1}</p>
                <p className="mt-12 font-display text-6xl text-white">{module.heures}h</p>
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-accent">{module.label}</p>
                <div className="mt-auto pt-16">
                  <div className="h-3 bg-muted/35">
                    <div
                      className="bg-accent"
                      style={{ width: `${(module.heures / 176) * 100}%`, height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-black text-white border-t border-muted/25">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-12">
            {testimonials.map((item) => (
              <article key={item.id} className="border border-accent/70 p-8">
                <p className="text-lg leading-relaxed text-white">« {item.quote} »</p>
                <p className="mt-12 text-[11px] uppercase tracking-[0.32em] text-muted">{item.role}</p>
              </article>
            ))}
          </div>
          <aside className="border border-muted/45 p-8">
            <h2 className="font-display text-4xl uppercase">Passerelles Passe&nbsp;D</h2>
            <div className="mt-12 space-y-8 text-muted">
              <div>
                <p className="uppercase tracking-[0.24em] text-accent">Première journée</p>
                <ul className="mt-6 space-y-3">
                  {passeDJour1.map((jour) => (
                    <li key={jour}>{jour}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="uppercase tracking-[0.24em] text-accent">Deuxième journée</p>
                <ul className="mt-6 space-y-3">
                  {passeDJour2.map((jour) => (
                    <li key={jour}>{jour}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p className="uppercase tracking-[0.24em] text-accent">Synthèses clés</p>
                {prepaSportHighlights.map((bloc) => (
                  <article key={bloc.title}>
                    <h3 className="text-accent text-sm">{bloc.title}</h3>
                    <p>{bloc.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-black text-white border-t border-muted/35">
        <div className="container-site space-y-12">
          <h2 className="font-display text-4xl uppercase">Comment déposer votre candidature</h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {candidatureSteps.map((etape, index) => (
              <li key={etape} className="border border-muted/45 p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-accent">Étape {index + 1}</p>
                <p className="mt-10 leading-relaxed text-muted">{etape}</p>
              </li>
            ))}
          </ol>

          <div className="grid gap-10 md:grid-cols-2">
            <div id="documents-prepa-affiche" className="border border-muted/65 p-8">
              <h3 className="text-accent uppercase tracking-[0.22em]">Affiche officielle</h3>
              <p className="mt-6 leading-relaxed text-muted">
                Version PDF destinée aux salles d&apos;infos jeunes franciliennes. Contient planning typique semaine + contacts permanence.
              </p>
              <a
                className="mt-12 inline-flex border border-accent px-8 py-3 text-accent uppercase tracking-[0.25em]"
                href="/contact?doc=affiche-prepa-sport"
              >
                Réceptionner fichier
              </a>
            </div>
            <div id="documents-prepa-brochure" className="border border-accent/70 bg-blue-dark p-8">
              <h3 className="text-accent uppercase tracking-[0.22em]">Brochure pédagogique</h3>
              <p className="mt-6 leading-relaxed text-muted">
                Synthèse à transmettre à vos équipes financières : budget porté collectivement avec ANS /
                Région / collectivités hôtes franciliennes.
              </p>
              <a
                className="mt-12 inline-flex border border-white px-8 py-3 text-white uppercase tracking-[0.25em]"
                href="/contact?doc=brochure-prepa"
              >
                Télécharger (demande équipe administrative)
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinaleJuunesSection />
    </>
  );
}
