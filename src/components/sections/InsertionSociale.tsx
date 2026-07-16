"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

import { fadeUp } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

export function InsertionSocialeSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="relative overflow-hidden bg-black pb-12 pt-8 text-white md:pt-10 md:pb-14 lg:pt-12 lg:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-32 h-56 w-56 rounded-full bg-lime/8 blur-[80px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-16">
        <ViewportReveal staggerChildren>
          <div className="space-y-6 border-b border-white/10 pb-10">
            <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
              <SectionLabel label="insertion" />
            </motion.div>
            <motion.h2
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="whitespace-nowrap font-display text-[clamp(1.35rem,4.5vw,3.5rem)] uppercase leading-[0.92]"
            >
              Du sport à l&apos;emploi
            </motion.h2>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={fadeUp({ reducedMotion, narrowMotion })}>
          <article className="group relative flex w-full flex-col gap-8 overflow-hidden border border-white/15 bg-[#141414] p-8 transition-colors hover:border-white/25 lg:p-10">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.08),transparent_55%)]"
            />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-accent">
                <span className="flex h-12 w-12 items-center justify-center border border-accent/40 bg-black/60">
                  <MapPin aria-hidden className="h-6 w-6" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.32em]">
                  Passe D
                </p>
              </div>
              <span className="font-display text-4xl leading-none text-white/10 transition-colors group-hover:text-white/20">
                01
              </span>
            </div>

            <p className="relative text-sm uppercase tracking-[0.22em] text-primary">
              Collégiens / lycéens • trois mi-temps
            </p>

            <ol className="relative grid gap-8 border-l border-dashed border-white/20 pl-6 sm:grid-cols-3 sm:gap-6 sm:border-l-0 sm:pl-0 lg:gap-10">
              {[
                {
                  period: "1er mi-temps",
                  text: "Présentation d'un métier des partenaires.",
                },
                {
                  period: "2e mi-temps",
                  text: "Initiation du rugby et ses valeurs.",
                },
                {
                  period: "3e mi-temps",
                  text: "Rencontre du Racing 92 ou match Stade Français Paris Top 14.",
                },
              ].map((step) => (
                <li key={step.period} className="relative sm:border-l sm:border-dashed sm:border-white/20 sm:pl-6">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-black sm:-left-6"
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                    {step.period}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </article>
        </ViewportReveal>
      </div>
    </section>
  );
}
