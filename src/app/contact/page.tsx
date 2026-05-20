import type { Metadata } from "next";

import { ContactProfilesForm } from "@/components/contact/ContactProfilesForm";
import { PageHero } from "@/components/layout/PageHero";

import { siteConfig } from "@/data/navigation";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Tu es une structure territoriale francilienne, un sponsor privé ou un jeune ? Contactez Rugby Urban Attitude depuis ce formulaire multi-profils.",
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

      <section className="section-y bg-black text-white border-t border-muted/35">
        <div className="container-site grid gap-16 lg:grid-cols-[1.15fr_minmax(0,0.85fr)]">
          <ContactProfilesForm />

          <aside className="space-y-8 border border-white/15 bg-black/60 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.36em] text-accent">Courrier</p>
              <address className="mt-10 not-italic text-lg leading-relaxed text-muted">
                {siteConfig.fullName}
                <br />
                {adresse}
              </address>
              <p className="mt-12 text-accent">
                Téléphone:&nbsp;
                <a href={siteConfig.phoneHref} className="text-white underline">
                  {siteConfig.phone}
                </a>
              </p>
            </div>

            <div className="relative h-[360px] w-full overflow-hidden border border-muted/65">
              <iframe
                title="Carte de localisation associative à Courbevoie"
                src={mapSrc}
                loading="lazy"
                className="absolute inset-0 h-full w-full grayscale"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
