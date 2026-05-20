import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { InsertionPasserelles } from "@/components/sections/InsertionPasserelles";
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

      <InsertionPasserelles />
    </>
  );
}
