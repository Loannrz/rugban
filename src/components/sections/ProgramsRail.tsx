"use client";

import { motion, useReducedMotion } from "framer-motion";

import { programs } from "@/data/programs";
import { fadeUp } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { ProgramCard } from "../ui/ProgramCard";
import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

export function ProgramsRailSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  const gridClasses = "grid gap-6 md:grid-cols-2 lg:hidden";
  const railClasses =
    "program-rail hidden gap-8 overflow-x-auto pb-6 lg:flex";

  return (
    <section className="section-y bg-black">
      <div className="container-site mb-14 space-y-6">
        <ViewportReveal staggerChildren threshold={0.2}>
          <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
            <SectionLabel label="nos actions" />
          </motion.div>
          <motion.h2
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="font-display text-clamp-h2 uppercase text-white"
          >
            7 programmes, un seul objectif
          </motion.h2>
        </ViewportReveal>
      </div>

      <div className="container-site lg:pb-16">
        <ViewportReveal staggerChildren delayChildren={0.08}>
          <div className={gridClasses}>
            {programs.map((program) => (
              <motion.div
                variants={fadeUp({ reducedMotion, narrowMotion })}
                key={program.id}
              >
                <ProgramCard
                  program={program}
                  className="h-full border border-white/20"
                />
              </motion.div>
            ))}
          </div>

          <div className={railClasses}>
            {programs.map((program) => (
              <motion.div
                key={`rail-${program.id}`}
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className={`shrink-0 basis-[360px] xl:basis-[380px]`}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
