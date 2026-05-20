"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Dumbbell, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { CountUpNumber } from "@/components/ui/CountUp";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const TOTAL_HOURS = 384;
const MAX_MODULE_HOURS = 176;

const modules = [
  {
    id: "sports",
    label: "Sports",
    shortLabel: "Bloc sportif",
    heures: 126,
    icon: Dumbbell,
  },
  {
    id: "pro",
    label: "Professions du spectacle sportif",
    shortLabel: "Bloc professionnel",
    heures: 82,
    icon: Briefcase,
  },
  {
    id: "socio",
    label: "Socio-éducation",
    shortLabel: "Bloc socio-éducatif",
    heures: 176,
    icon: HeartHandshake,
  },
] as const;

function ModuleCard({
  module,
  index,
  reducedMotion,
  narrowMotion,
}: {
  module: (typeof modules)[number];
  index: number;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  const Icon = module.icon as LucideIcon;
  const share = Math.round((module.heures / TOTAL_HOURS) * 100);
  const barWidth = (module.heures / MAX_MODULE_HOURS) * 100;

  return (
    <motion.article
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="group relative flex min-h-[300px] flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-8 lg:min-h-[320px] lg:p-9"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.08),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent via-lime/60 to-transparent"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center border border-accent/35 bg-black/40 text-accent">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <span className="font-display text-4xl leading-none text-white/10 transition-colors group-hover:text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="relative mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
        {module.shortLabel}
      </p>

      <div className="relative mt-4 flex items-end gap-1">
        <CountUpNumber
          end={module.heures}
          suffix="h"
          ariaLabel={`${module.heures} heures ${module.label}`}
          className="font-display text-[clamp(3rem,8vw,4.5rem)] leading-none text-white"
        />
      </div>

      <p className="relative mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/85">
        {module.label}
      </p>

      <div className="relative mt-auto space-y-3 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>Part du parcours</span>
          <span className="text-lime">{share}%</span>
        </div>
        <div
          aria-hidden
          className="h-[3px] w-full overflow-hidden rounded-full bg-white/10"
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent to-lime"
            initial={{ width: reducedMotion ? `${barWidth}%` : "0%" }}
            whileInView={{ width: `${barWidth}%` }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: reducedMotion ? 0 : 1,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.12,
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}

export function PrepaSportModulesSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/8 blur-[100px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-14">
        <ViewportReveal staggerChildren>
          <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <motion.div variants={fadeUp(motionPrefs)}>
                <SectionLabel label="Parcours certifiant" />
              </motion.div>
              <motion.h2
                variants={fadeUp(motionPrefs)}
                className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.92]"
              >
                Les trois blocs du programme
              </motion.h2>
              <motion.p
                variants={fadeUp(motionPrefs)}
                className="text-base leading-relaxed text-muted lg:text-lg"
              >
                384 heures réparties sur cinq mois : une progression visible
                entre pratique sportive, immersion professionnelle et
                accompagnement socio-éducatif.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp(motionPrefs)}
              className="shrink-0 border border-white/12 bg-white/[0.03] px-6 py-4 text-center lg:text-right"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                Volume total
              </p>
              <p className="mt-2 font-display text-4xl uppercase leading-none text-white">
                384<span className="text-lime">h</span>
              </p>
            </motion.div>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.1)}>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.id}
                module={module}
                index={index}
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
