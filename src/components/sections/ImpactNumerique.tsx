"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, MapPinned, Layers, Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { impactStats } from "@/data/stats";
import type { StatItem } from "@/data/stats";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { CountUpNumber } from "../ui/CountUp";
import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

const statMeta: Record<string, { icon: LucideIcon; index: string }> = {
  "impact-jeunes": { icon: BarChart3, index: "01" },
  "impact-deps": { icon: MapPinned, index: "02" },
  "impact-programmes": { icon: Layers, index: "03" },
  "impact-anciensnete": { icon: Calendar, index: "04" },
};

function ImpactStatBlock({
  stat,
  reducedMotion,
  narrowMotion,
}: {
  stat: StatItem;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  const meta = statMeta[stat.id];
  const Icon = meta?.icon ?? BarChart3;

  return (
    <motion.article
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="group relative flex min-h-[260px] flex-col justify-between gap-6 overflow-hidden border border-white/12 bg-gradient-to-br from-[#171717] to-black p-8 transition-colors duration-300 hover:border-white/25 lg:min-h-[280px] lg:p-9"
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-[3px] bg-white/15 transition-colors group-hover:bg-accent/80"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center border border-white/15 bg-black/50 text-accent">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="font-display text-4xl leading-none text-white/[0.07] transition-colors group-hover:text-white/12">
          {meta?.index ?? ""}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col justify-end space-y-4">
        <CountUpNumber
          end={stat.value}
          suffix={stat.suffix}
          ariaLabel={`${stat.value}${stat.suffix ?? ""} ${stat.label}`}
          className="block font-display text-[clamp(2.75rem,7.5vw,5.5rem)] leading-[0.88] tracking-[0.02em] text-white"
        />
        <div className="space-y-2 border-t border-white/10 pt-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            {stat.label}
          </p>
          {stat.shortHint ? (
            <p className="text-sm leading-relaxed text-muted">{stat.shortHint}</p>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function ImpactNumeriqueSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-lime/6 blur-[100px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-14">
        <ViewportReveal staggerChildren>
          <div className="max-w-3xl space-y-6 border-b border-white/10 pb-10">
            <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
              <SectionLabel label="mesure impact" />
            </motion.div>
            <motion.h2
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="font-display text-clamp-h2 uppercase leading-[0.92]"
            >
              L&apos;impact en chiffres
            </motion.h2>
            <motion.p
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="text-base text-muted lg:text-lg"
            >
              Des résultats concrets sur le terrain, suivis et partagés avec nos
              partenaires institutionnels et associatifs.
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.08)}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:gap-5">
            {impactStats.map((stat) => (
              <ImpactStatBlock
                key={stat.id}
                stat={stat}
                reducedMotion={reducedMotion}
                narrowMotion={narrowMotion}
              />
            ))}
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
