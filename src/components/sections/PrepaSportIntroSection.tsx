"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { fadeLeft, fadeRight } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

export function PrepaSportIntroSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-lime/8 blur-[80px]"
      />

      <div className="container-site relative grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
        <ViewportReveal
          variants={fadeLeft(motionPrefs)}
          className="flex flex-col justify-center lg:col-span-7"
        >
          <SectionLabel label="Prépa sport" />
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] uppercase leading-[0.92]">
            Passerelles vers l&apos;emploi public et privé
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
            Depuis plusieurs cycles, nous accompagnons un public jeune très mobile
            entre les différents dispositifs urbains franciliens. La Prépa Sport
            reste gratuit intégralement et décline nos valeurs territoriales
            jusqu&apos;au diplôme.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Une promo type compte jusqu&apos;à vingt-cinq volontaires, alternant
            cours magistraux ludiques et mises en situation professionnelles
            encadrées.
          </p>

          <ul className="mt-10 flex flex-wrap gap-3">
            {["100 % gratuit", "16–25 ans", "2 sessions / an"].map((tag) => (
              <li
                key={tag}
                className="border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75"
              >
                {tag}
              </li>
            ))}
          </ul>
        </ViewportReveal>

        <ViewportReveal variants={fadeRight(motionPrefs)} className="lg:col-span-5">
          <aside className="relative h-full overflow-hidden border border-accent/40 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 lg:p-10">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,255,0,0.12),transparent_60%)]"
            />
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-lime/25"
            />

            <p className="relative text-[11px] font-semibold uppercase tracking-[0.32em] text-lime">
              Synthèse programme
            </p>

            <div className="relative mt-8 flex items-end gap-2">
              <span className="font-display text-[clamp(4rem,10vw,6rem)] leading-none text-white">
                384
              </span>
              <span className="mb-2 font-display text-2xl uppercase text-lime">h</span>
            </div>
            <p className="relative mt-3 text-sm uppercase tracking-[0.18em] text-white/70">
              Heures suivies sous contrat projet associatif
            </p>

            <div
              aria-hidden
              className="relative mt-8 h-[3px] w-full overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-lime"
                initial={{ width: reducedMotion ? "100%" : "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reducedMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <p className="relative mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/65">
              Trois blocs interconnectés — sport, pro, socio-éducation — jusqu&apos;à
              la remise officielle diplômante.
            </p>

            <div className="relative mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 border border-white/10 bg-black/30 p-4">
                <Users aria-hidden className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                  Jusqu&apos;à 25 volontaires / promo
                </p>
              </div>
              <div className="flex items-center gap-3 border border-white/10 bg-black/30 p-4">
                <GraduationCap aria-hidden className="h-5 w-5 shrink-0 text-lime" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                  BAFA · PSC1 · BP JEPS
                </p>
              </div>
            </div>
          </aside>
        </ViewportReveal>
      </div>
    </section>
  );
}
