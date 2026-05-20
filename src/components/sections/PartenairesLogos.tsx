"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { partners } from "@/data/partners";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { PartnerLogo } from "../ui/PartnerLogo";
import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

export function PartenairesLogosSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  const instit = partners.filter((p) => p.category === "institutional");
  const privés = partners.filter((p) => p.category === "private");

  return (
    <section className="section-y bg-[#1a1a1a] text-white">
      <div className="container-site space-y-16">
        <ViewportReveal staggerChildren>
          <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
            <SectionLabel label="ils nous font confiance" />
          </motion.div>
          <motion.h2
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="font-display text-clamp-h2 uppercase"
          >
            Institutions & grandes entreprises IDF
          </motion.h2>
        </ViewportReveal>

        <div className="space-y-12">
          {[
            {
              titre: "Institutionnels",
              collection: instit,
            },
            {
              titre: "Privés",
              collection: privés,
            },
          ].map((bloc) => (
            <div key={bloc.titre} className="space-y-8">
              <p className="text-xs uppercase tracking-[0.4em] text-muted">
                {bloc.titre}
              </p>
              <ViewportReveal variants={staggerContainer(reducedMotion, 0.05)}>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {bloc.collection.map((partner) => (
                    <motion.div
                      key={`${bloc.titre}-${partner.id}`}
                      variants={fadeUp({
                        reducedMotion,
                        narrowMotion,
                      })}
                    >
                      <PartnerLogo partner={partner} />
                    </motion.div>
                  ))}
                </div>
              </ViewportReveal>
            </div>
          ))}
        </div>

        <ViewportReveal>
          <Link
            prefetch={false}
            href="/partenaires#engagement"
            className="inline-flex gap-4 text-accent"
          >
            Devenir partenaire<span aria-hidden>→</span>
          </Link>
        </ViewportReveal>
      </div>
    </section>
  );
}
