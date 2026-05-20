"use client";

import { motion, useReducedMotion } from "framer-motion";

import { impactStats } from "@/data/stats";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { SectionLabel } from "../ui/SectionLabel";
import { StatCard } from "../ui/StatCard";
import { ViewportReveal } from "../ui/ViewportReveal";

export function ImpactNumeriqueSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y bg-black text-white">
      <div className="container-site space-y-16">
        <ViewportReveal staggerChildren>
          <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
            <SectionLabel label="MESURE IMPACT" />
          </motion.div>
          <motion.h2
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="font-display text-clamp-h2 uppercase"
          >
            L&apos;impact en chiffres
          </motion.h2>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.05)}>
          <div className="grid divide-y divide-white/14 border-y border-white/25 lg:grid-cols-2 lg:divide-x lg:divide-y-0 lg:divide-dashed lg:divide-x-[1px]">
            {impactStats.map((stat) => (
              <StatCard
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.shortHint}
              />
            ))}
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
