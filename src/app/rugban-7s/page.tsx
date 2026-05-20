import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  hintonArticle,
  palmarès,
  rugbanSevensParagraph,
} from "@/data/sevens";
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

      <section className="section-y bg-black text-white">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1fr]">
          <aside className="border border-accent/65 p-8">
            <SectionLabel label="Palmarès" />
            <ol className="mt-12 space-y-6 text-muted leading-relaxed">
              {palmarès.map((ligne) => (
                <li key={ligne.year}>
                  <span className="font-display text-4xl text-white">{ligne.year}</span>
                  <span className="mt-6 block">{ligne.line}</span>
                </li>
              ))}
            </ol>
          </aside>
          <article className="space-y-6">
            <h2 className="font-display text-4xl uppercase">Identité de l&apos;équipe</h2>
            <p>{rugbanSevensParagraph}</p>
            <ul className="space-y-3 text-accent">
              <li>Joueur·euses agrégées depuis AC Bobigny &amp; Stade Français Paris</li>
              <li>Jeu direct, jeu couvert défensif, culture retour spectacle</li>
              <li>Coaching dirigé depuis le staff associative + club partenaires</li>
            </ul>
          </article>
        </div>
      </section>

      <article className="section-y bg-white text-black">
        <div className="container-site grid gap-8">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Portrait Howard Hinton</p>
          <h2 className="font-display text-clamp-h2 uppercase">{hintonArticle.title}</h2>
          <p className="text-lg text-black/65">{hintonArticle.subtitle}</p>
          {hintonArticle.paragraphs.map((paragraphe, index) => (
            <p key={`hinton-p-${index}`} className="text-lg leading-relaxed">
              {paragraphe}
            </p>
          ))}
          <blockquote className="border border-black/35 p-12 text-xl font-semibold italic">
            {hintonArticle.pullQuote}
          </blockquote>
        </div>
      </article>
    </>
  );
}
