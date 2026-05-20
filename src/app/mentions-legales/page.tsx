import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/data/navigation";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description:
    "Informations éditoriales, hébergement, propriété intellectuelle et traitement des données du site officiel Rugby Urban Attitude.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
      />

      <section className="section-y bg-black text-white border-t border-muted/35">
        <div className="container-site max-w-3xl space-y-8">
          <article className="space-y-8 text-muted">
            <section>
              <h2 className="text-lg font-semibold uppercase tracking-[0.15em] text-primary">
                Éditeur
              </h2>
              <p>
                Site édité par l&apos;association {siteConfig.fullName}, association loi 1901, dont le
                siège est situé {siteConfig.addressLine}, {siteConfig.postcode} {siteConfig.city}.
              </p>
              <p>Contact téléphonique : {siteConfig.phone}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold uppercase tracking-[0.15em] text-primary">
                Directeur·rice de publication
              </h2>
              <p>La direction de Rugby Urban Attitude, représentée légalement par son bureau associatif.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold uppercase tracking-[0.15em] text-primary">
                Hébergement
              </h2>
              <p>
                Le site peut être déployé sur une infrastructure française ou européenne adaptée aux
                chargeurs CDN choisis par votre hébergeur (mention à compléter selon votre contrat d&apos;hébergement définitif).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold uppercase tracking-[0.15em] text-primary">
                Propriété intellectuelle et visuels
              </h2>
              <p>
                Les contenus rédactionnels comme les photographies de démonstration (Unsplash/Openverse)
                restent protégés par leurs licences respectives. Réutilisation interdite sans accord
                écrit de Rugby Urban Attitude ou du titulaire des droits.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold uppercase tracking-[0.15em] text-primary">
                Données personnelles et cookies
              </h2>
              <p>
                Les données transmises via le formulaire de contact servent uniquement à répondre à votre demande ;
                aucune vente ou cession commerciale n&apos;est réalisée. Vous disposez des droits d&apos;accès et de suppression
                auprès du bureau associative via les coordonnées ci-dessus.
              </p>
              <p>
                Hors module statistiques avancées, seuls des cookies strictement nécessaires au bon fonctionnement
                technique du site peuvent être déposés (session, sécurité).
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
