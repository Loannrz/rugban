"use client";

import { motion, useReducedMotion } from "framer-motion";

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

      <div className="container-site relative space-y-10 lg:space-y-12">
        <ViewportReveal staggerChildren>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <motion.div
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="space-y-5 lg:col-span-5"
            >
              <SectionLabel label="Résumé projet" />
              <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] uppercase leading-[0.95] text-white">
                Un maillage francilien depuis 2006
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="max-w-2xl text-sm leading-relaxed text-muted lg:col-span-7 lg:text-[15px]"
            >
              Nous combinons actions de quartier, tournois inter-territoires,
              événements scolaires et dispositifs d&apos;insertion. Une boucle
              reliant le sport citoyen, les classes collégiennes et les
              passerelles professionnelles portées par Rugby Urban Attitude
              depuis 2006.
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal>
          <IdfInteractiveMap />
        </ViewportReveal>
      </div>
    </section>
  );
}
