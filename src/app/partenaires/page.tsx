import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { PartenairesDevenirSection } from "@/components/sections/PartenairesDevenirSection";
import { PartenairesEngagementSection } from "@/components/sections/PartenairesEngagement";
import { PartenairesTaxeApprentissageSection } from "@/components/sections/PartenairesTaxeApprentissage";
import { PartnerLogo } from "@/components/ui/PartnerLogo";

import { partners } from "@/data/partners";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Partenaires",
  description:
    "Financements institutionnels franciliens, taxe apprentissage, visibilités sportives urbaines.",
  path: "/partenaires",
});


export default function PartenairesPage() {
  const institutionnels = partners.filter((partner) => partner.category === "institutional");
  const prives = partners.filter((partner) => partner.category === "private");

  return (
    <>
      <PageHero
        title="PARTENAIRES"
        eyebrow="Partenaires collectivités"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Partenaires" }]}
      />

      <section className="section-y bg-black text-white">
        <div className="container-site space-y-16">
          <div className="space-y-12">
            <h2 className="font-display text-clamp-h2 uppercase">Partenaires collectivités</h2>
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

      <PartenairesEngagementSection />

      <PartenairesTaxeApprentissageSection />

      <PartenairesDevenirSection />
    </>
  );
}
