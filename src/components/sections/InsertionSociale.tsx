"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Route } from "lucide-react";

import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { CountUpNumber } from "../ui/CountUp";
import { CTAButton } from "../ui/CTAButton";
import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

export function InsertionSocialeSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y bg-black text-white">
      <div className="container-site space-y-16">
        <ViewportReveal staggerChildren>
          <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
            <SectionLabel label="insertion" />
          </motion.div>
          <motion.h2
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="font-display text-clamp-h2 uppercase"
          >
            Du sport à l&apos;emploi
          </motion.h2>
        </ViewportReveal>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ViewportReveal variants={fadeLeft({ reducedMotion, narrowMotion })}>
            <div className="rounded-none border border-white/14 bg-black/70 p-10">
              <p className="text-sm uppercase tracking-[0.42em] text-accent">
                Taux médian projet
              </p>
              <div className="mt-8 flex items-end gap-3">
                <CountUpNumber
                  end={85}
                  suffix="%"
                  ariaLabel="85 pourcent pour la réussite en sortie projet"
                  className="font-display text-[clamp(64px,9vw,120px)] leading-none text-white"
                />
              </div>
              <p className="mt-6 text-muted">
                Chiffres issus du suivi sur les derniers entrants en Prépa Sport : hausse
                nette du retour formation et des démarches régulières hors structure.
              </p>
            </div>
          </ViewportReveal>

          <ViewportReveal variants={fadeRight({ reducedMotion, narrowMotion })}>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                Deux dispositifs structurés : la Passe D pour les plus jeunes, la Prépa Sport pour le
                public 16-25 ans en décrochage. Un passage progressif entre la découverte des métiers
                du spectacle sportif et l&apos;accompagnement certifiant jusqu&apos;au BAFA ou au socle BP
                JEPS.
              </p>
              <p>
                L&apos;équipe pédagogique pilote trois blocs métiers (sportifs, socio-éducatifs,
                professionnels) avec des immersion clubs pros et chantiers événementiels.
              </p>
            </div>
          </ViewportReveal>
        </div>

        <ViewportReveal
          variants={staggerContainer(reducedMotion, 0.1)}
          className="grid gap-6 lg:grid-cols-2"
        >
          <motion.article
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="relative flex flex-col gap-10 border-[0.5px] border-white/15 bg-black/75 p-8"
          >
            <div className="flex items-center gap-4 text-accent">
              <MapPin aria-hidden className="h-7 w-7" />
              <p className="text-xs uppercase tracking-[0.32em]">Passe D</p>
            </div>
            <div className="space-y-6 text-muted">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">
                Public : collégiens / lycéens • format : deux journées complètes
              </p>
              <div className="space-y-3 text-lg text-primary">
                <p>Jour 1 : visite guidée dans un club professionnel francilien avec échanges.</p>
                <p>
                  Jour 2 : visite chantier et rencontres avec techniciens pour comprendre la chaîne du
                  sport événementiel.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="relative flex flex-col gap-10 border-2 border-accent bg-blue-dark p-8"
          >
            <div className="flex items-center gap-4 text-accent">
              <Route aria-hidden className="h-7 w-7" />
              <p className="text-xs uppercase tracking-[0.32em]">Prépa sport</p>
            </div>
            <div className="space-y-4 text-lg text-muted">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">
                Public : 16-25 ans, situation NEET • deux sessions gratuites par an
              </p>
              <p>
                Modules : sports (126 heures), professions (82 heures), socio-éducation (176 heures).
                Certifications suivies : BAFA, PSC1, socle BP JEPS.
              </p>
              <CTAButton href="/prepa-sport">
                Candidater à la Prépa Sport
              </CTAButton>
            </div>
          </motion.article>
        </ViewportReveal>
      </div>
    </section>
  );
}
