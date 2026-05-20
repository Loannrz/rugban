import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/layout/PageHero";

import { siteConfig } from "@/data/navigation";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez Rugby Urban Attitude par téléphone ou par mail : jeunes, structures territoriales et entreprises partenaires en Île-de-France.",
  path: "/contact",
});

const mapSrc =
  "https://maps.google.com/maps?q=159+Rue+Armand+Silvestre,+92400+Courbevoie&hl=fr&z=17&output=embed";

export default function ContactPage() {
  const adresse = `${siteConfig.addressLine}, ${siteConfig.postcode} ${siteConfig.city}`;

  return (
    <>
      <PageHero
        title="Contact"
        eyebrow="Une question structurée"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />

      <ContactSection mapSrc={mapSrc} adresse={adresse} />
    </>
  );
}
