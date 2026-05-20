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

  return (
    <section className="overflow-x-clip bg-black pb-0 pt-12 md:pt-14 lg:pt-20">
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

      <div className="container-site min-w-0 pb-0">
        <ViewportReveal staggerChildren delayChildren={0.08}>
          <div className={`${gridClasses} auto-rows-fr`}>
            {programs.map((program) => (
              <motion.div
                variants={fadeUp({ reducedMotion, narrowMotion })}
                key={program.id}
                className="h-[360px]"
              >
                <ProgramCard
                  program={program}
                  className="h-full border border-white/20"
                />
              </motion.div>
            ))}
          </div>

          <div className="program-rail-scroll hidden pb-6 lg:block">
            <div className="program-rail items-stretch gap-8">
              {programs.map((program) => (
                <motion.div
                  key={`rail-${program.id}`}
                  variants={fadeUp({ reducedMotion, narrowMotion })}
                  className="h-[360px] shrink-0 basis-[360px] xl:basis-[380px]"
                >
                  <ProgramCard program={program} className="h-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
