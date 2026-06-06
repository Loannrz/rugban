"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { siteImages } from "@/data/siteImages";

import { fadeUp } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { IdfInteractiveMap } from "./IdfInteractiveMap";
import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

export function NosActionsIntro() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-accent/8 blur-[100px]"
      />

      <div className="container-site relative flex flex-col gap-10 lg:gap-14">
        <ViewportReveal staggerChildren className="w-full">
          <div className="w-full space-y-6 lg:space-y-8">
            <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
              <SectionLabel label="Résumé projet" />
            </motion.div>

            <motion.h2
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="font-display text-[clamp(1.75rem,4vw,3rem)] uppercase leading-[0.95] text-white"
            >
              Un maillage francilien depuis 2006
            </motion.h2>

            <div className="space-y-6">
              <motion.p
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className="text-base leading-relaxed text-muted lg:text-lg lg:leading-relaxed"
              >
                Depuis 2008, Rugby Urban Attitude utilise le rugby comme un
                levier d&apos;éducation, d&apos;inclusion et d&apos;émancipation
                auprès des jeunes issus des Quartiers Prioritaires de la Ville
                en Île-de-France, mais également auprès de l&apos;ensemble des
                publics que nous accompagnons.
              </motion.p>
              <motion.p
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className="text-base leading-relaxed text-muted lg:text-lg lg:leading-relaxed"
              >
                À travers des animations gratuites, des événements sportifs,
                des actions citoyennes et des parcours d&apos;insertion, nous
                accompagnons chaque année plusieurs milliers de jeunes dans leur
                développement personnel et leur ouverture vers de nouvelles
                perspectives.
              </motion.p>
              <motion.p
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className="text-base leading-relaxed text-muted lg:text-lg lg:leading-relaxed"
              >
                Notre ambition est simple : transmettre les valeurs du rugby
                pour favoriser le vivre-ensemble, démocratiser la pratique
                sportive, renforcer la confiance en soi et contribuer à la
                construction de parcours d&apos;avenir.
              </motion.p>
              <motion.p
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className="text-base leading-relaxed text-muted lg:text-lg lg:leading-relaxed"
              >
                Notre public principal est constitué de collégiens, mais nous
                intervenons également de manière importante auprès des écoles
                primaires.
              </motion.p>
              <motion.p
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className="text-base leading-relaxed text-muted lg:text-lg lg:leading-relaxed"
              >
                Nous souhaitons développer davantage les actions à destination des
                plus de 16 ans afin de créer davantage de passerelles entre nos
                actions sportives, citoyennes et le dispositif Prépa Sport.
              </motion.p>
            </div>
          </div>
        </ViewportReveal>

        <ViewportReveal className="w-full">
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {[
              siteImages.actionsJeunes,
              siteImages.actionsQuartiers,
              siteImages.actionsMandela,
            ].map((image) => (
              <div
                key={image.src}
                className="relative min-h-[220px] overflow-hidden border border-white/12 sm:min-h-[260px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                  quality={80}
                />
              </div>
            ))}
          </div>
          <IdfInteractiveMap />
        </ViewportReveal>
      </div>
    </section>
  );
}
