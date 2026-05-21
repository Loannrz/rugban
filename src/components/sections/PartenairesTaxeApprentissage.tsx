"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Calculator,
  CalendarDays,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import {
  taxeApprentissageBlocks,
  taxeApprentissageCalendar,
} from "@/data/insertionContent";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const blockIcons: Record<(typeof taxeApprentissageBlocks)[number]["id"], LucideIcon> = {
  siret: Building2,
  soltea: ExternalLink,
  calcul: Calculator,
};

function InfoBlock({
  bloc,
  index,
  reducedMotion,
  narrowMotion,
}: {
  bloc: (typeof taxeApprentissageBlocks)[number];
  index: number;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  const Icon = blockIcons[bloc.id];

  return (
    <motion.article
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="group relative flex h-full flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-8 transition-colors hover:border-white/22 lg:p-9"
    >
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

      <h3 className="relative mt-8 font-display text-[clamp(1.15rem,2.2vw,1.5rem)] uppercase leading-tight tracking-[0.02em]">
        {bloc.title}
      </h3>
      <p className="relative mt-5 flex-1 text-sm leading-relaxed text-muted lg:text-base">
        {bloc.body}
      </p>
    </motion.article>
  );
}

export function PartenairesTaxeApprentissageSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-accent/8 blur-[100px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-14">
        <ViewportReveal staggerChildren>
          <div className="max-w-3xl space-y-6 border-b border-white/10 pb-10">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Financement RH" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="font-display text-[clamp(2rem,5vw,3.25rem)] uppercase leading-[0.92]"
            >
              Taxe d&apos;apprentissage
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="text-base leading-relaxed text-muted lg:text-lg"
            >
              Orientez une partie de votre contribution légale vers un réseau
              associatif certifié, avec un accompagnement administratif clair et
              des références vérifiables.
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.1)}>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {taxeApprentissageBlocks.map((bloc, index) => (
              <InfoBlock
                key={bloc.id}
                bloc={bloc}
                index={index}
                reducedMotion={reducedMotion}
                narrowMotion={narrowMotion}
              />
            ))}
          </div>
        </ViewportReveal>

        <ViewportReveal variants={fadeUp(motionPrefs)}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-stretch lg:gap-10">
            <article className="relative overflow-hidden border border-accent/40 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 lg:p-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,255,0,0.1),transparent_55%)]"
              />

              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center border border-lime/40 bg-black/40 text-lime">
                  <CalendarDays aria-hidden className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-lime">
                    Calendrier 2025
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-white/70">
                    Fenêtres clés pour les services RH
                  </p>
                </div>
              </div>

              <ol className="relative mt-10 space-y-0 border-l border-dashed border-white/20 pl-7">
                {taxeApprentissageCalendar.map((step, index) => (
                  <li key={step.period} className="relative pb-8 last:pb-0">
                    <span
                      aria-hidden
                      className="absolute -left-7 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-lime bg-black"
                    />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                      Étape {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-display text-xl uppercase leading-none text-white">
                      {step.period}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </article>

            <div className="flex flex-col justify-between gap-8 border border-white/12 bg-[#141414] p-8 lg:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Ressource officielle
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Consultez la doctrine nationale pour comprendre le cadre
                  réglementaire, les obligations employeur et les modalités de
                  versement aux associations éligibles.
                </p>
              </div>

              <Link
                prefetch={false}
                href="https://www.taxe-apprentissage.fr/"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center justify-between gap-4 border border-accent/50 bg-black/40 px-6 py-4 transition-colors hover:border-accent hover:bg-accent/10"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  taxe-apprentissage.fr
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="h-5 w-5 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
