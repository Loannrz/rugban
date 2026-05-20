import type { Metadata } from "next";

import Link from "next/link";

import { PageHero } from "@/components/layout/PageHero";
import { CTAButton } from "@/components/ui/CTAButton";
import { PartnerLogo } from "@/components/ui/PartnerLogo";

import { partners } from "@/data/partners";
import { taxeApprentissageBlocks } from "@/data/insertionContent";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Partenaires",
  description:
    "Financements institutionnels franciliens, taxe apprentissage, visibilités sportives urbaines.",
  path: "/partenaires",
});

const pourquoiNousAppuyer = [
  {
    titre: "Une marque forte et positive",
    texte:
      "Relier vos engagements RSE avec un mouvement visuel immédiatement reconnaissable : sport de contact, élitisme féminin et inclusion urbaine francilienne.",
  },
  {
    titre: "Données d'impact vérifiables",
    texte:
      "Tableaux suivis tous les quatre mois : jeunes suivis cumulés, départements actifs et diplômes obtenus (BAFA · PSC1 · BP JEPS).",
  },
  {
    titre: "Articulation nationale / locale",
    texte:
      "Un lien direct entre vos Directions territoriales Île-de-France et nos clubs partenaires (Bobigny, Stade français, ville de Courbevoie).",
  },
] as const;

export default function PartenairesPage() {
  const institutionnels = partners.filter((partner) => partner.category === "institutional");
  const prives = partners.filter((partner) => partner.category === "private");

  return (
    <>
      <PageHero
        title="PARTENAIRES"
        eyebrow="Réseau financier Île-de-France"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Partenaires" }]}
      />

      <section className="section-y bg-black text-white">
        <div className="container-site space-y-16">
          <div className="space-y-12">
            <h2 className="font-display text-clamp-h2 uppercase">Réseau financier officiel IDF</h2>
            <div className="grid gap-6 overflow-visible md:grid-cols-3">
              {institutionnels.map((partner) => (
                <PartnerLogo key={`inst-${partner.id}`} partner={partner} />
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-xs uppercase tracking-[0.38em] text-muted">Financements privés</h2>
            <div className="grid gap-6 overflow-visible md:grid-cols-2 lg:grid-cols-4">
              {prives.map((partner) => (
                <PartnerLogo key={`priv-${partner.id}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="engagement" className="section-y bg-navy-deep text-white">
        <div className="container-site grid gap-10 lg:grid-cols-3">
          {pourquoiNousAppuyer.map((motif) => (
            <article key={motif.titre} className="border border-accent/65 p-8">
              <h3 className="text-accent uppercase tracking-[0.22em]">{motif.titre}</h3>
              <p className="mt-8 leading-relaxed text-muted">{motif.texte}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-black text-white border-t border-muted/35">
        <div className="container-site space-y-12">
          <h2 className="font-display text-4xl uppercase">Taxe d&apos;apprentissage</h2>
          <div className="grid gap-10">
            {taxeApprentissageBlocks.map((bloc) => (
              <article key={bloc.title} className="border border-muted/65 p-8">
                <h3 className="text-accent uppercase tracking-[0.24em]">{bloc.title}</h3>
                <p className="mt-6 leading-relaxed text-muted">{bloc.body}</p>
              </article>
            ))}
          </div>
          <Link
            prefetch={false}
            href="https://www.taxe-apprentissage.fr/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent underline underline-offset-4"
          >
            Consulter également la doctrine nationale sur Taxe Apprentissage
          </Link>
          <article className="border border-accent/65 p-8">
            <h3 className="text-accent uppercase tracking-[0.24em]">Calendrier 2025 simplifié</h3>
            <p className="mt-8 text-muted leading-relaxed">
              Janvier-février : mise à jour dossiers financiers RH internes.&nbsp;;
              mars-avril : collecte officielle régionale via SOLTÉA ; avant fin juillet : validations
              bancaires envoyées aux associations lauréates choisies.
            </p>
          </article>
        </div>
      </section>

      <section className="section-y bg-accent text-ink border-t border-white/25">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_minmax(0,0.4fr)] lg:items-center">
          <div>
            <h2 className="font-display text-5xl uppercase">Devenir partenaire</h2>
            <p className="mt-8 leading-relaxed text-ink">
              Envoyez vos documents administratifs (SIRET, lettre patronage ou convention de mécénat) depuis
              l&apos;espace sécurisé associatif communiqué par mail officiel après premier contact téléphonique.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTAButton variant="dark" href="/contact" className="w-full lg:w-auto">
              Contacter équipe développement
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
