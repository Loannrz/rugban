import type { Metadata } from "next";

import Link from "next/link";

import { PageHero } from "@/components/layout/PageHero";
import { CTAButton } from "@/components/ui/CTAButton";
import {
  passeDJour1,
  passeDJour2,
  prepaSportHighlights,
} from "@/data/insertionContent";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Insertion",
  description:
    "Découvre la Passe D (collège / lycée) puis la Prépa Sport associative pour passer du sport spectacle à une trajectoire pro concrète en Île-de-France.",
  path: "/insertion",
});

export default function InsertionPage() {
  return (
    <>
      <PageHero
        title="Insertion"
        eyebrow="Passerelles du sport spectacle"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Insertion" },
        ]}
      />

      <section className="section-y bg-black text-white">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <article className="space-y-6">
            <h2 className="font-display text-4xl uppercase">Passe D — journées immersion</h2>
            <p className="text-muted leading-relaxed">
              Deux journées hors les murs : les jeunes rejoignent d&apos;abord une structure professionnelle
              nationale pour comprendre l&apos;exigence de la fonction publique associative, puis un chantier vivant où se joue la mise en oeuvre événementielle.
            </p>
          </article>
          <aside className="border border-accent/65 p-8">
            <h3 className="text-accent uppercase tracking-[0.36em]">Jour&nbsp;01</h3>
            <ul className="mt-6 space-y-3 text-muted">
              {passeDJour1.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <aside className="border border-muted/65 p-8">
            <h3 className="text-accent uppercase tracking-[0.36em]">Jour&nbsp;02</h3>
            <ul className="mt-6 space-y-3 text-muted">
              {passeDJour2.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <aside className="border border-accent/35 bg-black/95 p-8 lg:col-span-2">
            <h3 className="font-display text-4xl uppercase">Prépa sport — passerelle suivante</h3>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {prepaSportHighlights.map((bloc) => (
                <article key={bloc.title}>
                  <h4 className="text-accent">{bloc.title}</h4>
                  <p className="mt-4 text-muted">{bloc.text}</p>
                </article>
              ))}
            </div>
            <CTAButton href="/prepa-sport" className="mt-14">
              Découvrir la Prépa sport
            </CTAButton>
          </aside>
          <aside className="border border-muted/45 lg:col-span-2 bg-black/95 p-8">
            <p className="text-lg text-muted leading-relaxed">
              Besoin d&apos;un contact terrain rapide&nbsp;? Rendez-vous aussi sur&nbsp;
              <Link prefetch={false} href="/contact" className="text-accent">
                formulaire officiel multi-profils.
              </Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
