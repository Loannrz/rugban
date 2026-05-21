import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { InsertionPasserelles } from "@/components/sections/InsertionPasserelles";
import { InsertionRemobilisationSection } from "@/components/sections/InsertionRemobilisationSection";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Insertion",
  description:
    "Prépa Sport, Passe D et actions de remobilisation : les passerelles d'insertion professionnelle de Rugby Urban Attitude en Île-de-France.",
  path: "/insertion",
});

export default function InsertionPage() {
  return (
    <>
      <PageHero
        title="Insertion"
        eyebrow="Passerelles professionnelles"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Insertion" },
        ]}
      />

      <InsertionPasserelles />
      <InsertionRemobilisationSection />
    </>
  );
}
