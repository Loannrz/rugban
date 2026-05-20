"use client";

import { motion, useReducedMotion } from "framer-motion";

import { CTAButton } from "../ui/CTAButton";

export function FinaleJuunesSection() {
  const reducedMotion = useReducedMotion() === true;

  return (
    <section className="section-y bg-lime text-black">
      <div className="container-site mx-auto grid gap-16 text-black lg:grid-cols-[1fr_minmax(0,0.5fr)]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0.9, y: 30 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: reducedMotion ? 0 : 0.4 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
          }
          className="space-y-8"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-black/65">
            Prépa sport — session suivante ouverte aux volontaires franciliens
          </p>
          <h2 className="font-display text-[clamp(48px,7vw,120px)] uppercase leading-none tracking-[0.04em]">
            Tu as entre 16 et 25&nbsp;ans&nbsp;?
          </h2>
          <p className="max-w-xl text-lg text-black/80">
            Rejoins la prochaine session de la Prépa Sport : gratuit,
            structurant, terrain concret. Accompagnement jusqu&apos;aux
            passages de diplômes reconnus.
          </p>
          <div className="flex flex-wrap gap-4 pt-8">
            <CTAButton href="/prepa-sport" variant="dark" className="min-w-[220px] uppercase">
              Candidater maintenant
            </CTAButton>
          </div>
          <p className="max-w-xl text-xs uppercase tracking-[0.42em] text-black/65">
            Tu peux aussi demander conseil à ta Mission Locale ou à France Travail avant de te lancer dans le dossier administratif associatif.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
