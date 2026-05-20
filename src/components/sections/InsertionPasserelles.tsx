"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Route } from "lucide-react";

import { CTAButton } from "@/components/ui/CTAButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import {
  passeDJour1,
  passeDJour2,
  prepaSportHighlights,
} from "@/data/insertionContent";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

const passeDDays = [
  {
    id: "jour-1",
    label: "Jour 01",
    subtitle: "Club professionnel francilien",
    items: passeDJour1,
    accent: "accent" as const,
  },
  {
    id: "jour-2",
    label: "Jour 02",
    subtitle: "Chantier sport événementiel",
    items: passeDJour2,
    accent: "lime" as const,
  },
];

export function InsertionPasserelles() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-accent/8 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-1/3 h-64 w-64 rounded-full bg-lime/6 blur-[100px]"
      />

      <div className="container-site relative space-y-16 lg:space-y-20">
        <ViewportReveal staggerChildren>
          <div className="max-w-3xl space-y-6">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Passe D" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="font-display text-[clamp(2rem,5vw,3.25rem)] uppercase leading-[0.95] tracking-[0.02em]"
            >
              Journées immersion
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="text-base leading-relaxed text-muted lg:text-lg"
            >
              Deux journées hors les murs : les jeunes rejoignent d&apos;abord une
              structure professionnelle nationale pour comprendre l&apos;exigence de
              la fonction publique associative, puis un chantier vivant où se joue
              la mise en oeuvre événementielle.
            </motion.p>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="inline-flex border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80"
            >
              Collégiens / lycéens · deux journées complètes
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal
          variants={staggerContainer(reducedMotion, 0.12)}
          className="grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {passeDDays.map((day, index) => (
            <motion.article
              key={day.id}
              variants={fadeUp(motionPrefs)}
              className="group relative overflow-hidden border border-white/12 bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-black p-8 lg:p-10"
            >
              <div
                aria-hidden
                className={
                  day.accent === "accent"
                    ? "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.1),transparent_55%)]"
                    : "absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,255,0,0.08),transparent_55%)]"
                }
              />
              <div
                aria-hidden
                className={
                  day.accent === "accent"
                    ? "absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent via-accent/50 to-transparent"
                    : "absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-lime via-lime/50 to-transparent"
                }
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span
                    className={
                      day.accent === "accent"
                        ? "flex h-11 w-11 items-center justify-center border border-accent/40 bg-black/50 text-accent"
                        : "flex h-11 w-11 items-center justify-center border border-lime/40 bg-black/50 text-lime"
                    }
                  >
                    <MapPin aria-hidden className="h-5 w-5" />
                  </span>
                  <div>
                    <p
                      className={
                        day.accent === "accent"
                          ? "text-[11px] font-semibold uppercase tracking-[0.32em] text-accent"
                          : "text-[11px] font-semibold uppercase tracking-[0.32em] text-lime"
                      }
                    >
                      {day.label}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.16em] text-white/70">
                      {day.subtitle}
                    </p>
                  </div>
                </div>
                <span className="font-display text-5xl leading-none text-white/10 transition-colors group-hover:text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <ol className="relative mt-10 space-y-0 border-l border-dashed border-white/15 pl-6">
                {day.items.map((item) => (
                  <li key={item} className="relative pb-6 last:pb-0">
                    <span
                      aria-hidden
                      className={
                        day.accent === "accent"
                          ? "absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-black"
                          : "absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-lime bg-black"
                      }
                    />
                    <p className="text-base leading-relaxed text-muted">{item}</p>
                  </li>
                ))}
              </ol>
            </motion.article>
          ))}
        </ViewportReveal>

        <ViewportReveal variants={fadeUp(motionPrefs)}>
          <article className="relative overflow-hidden border border-accent/50 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 lg:p-12">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,255,0,0.1),transparent_60%)]"
            />
            <div
              aria-hidden
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-lime/20"
            />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl space-y-5">
                <div className="flex items-center gap-4 text-lime">
                  <span className="flex h-12 w-12 items-center justify-center border border-lime/40 bg-black/40">
                    <Route aria-hidden className="h-6 w-6" />
                  </span>
                  <SectionLabel label="Prépa sport" className="text-lime [&>span]:bg-lime" />
                </div>
                <h3 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] uppercase leading-[0.95]">
                  Passerelle suivante
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-white/75">
                  16–25 ans · deux sessions gratuites par an
                </p>
              </div>

              <CTAButton href="/prepa-sport" className="relative shrink-0 lg:mt-2">
                Découvrir la Prépa sport
              </CTAButton>
            </div>

            <div className="relative mt-12 grid gap-6 md:grid-cols-3">
              {prepaSportHighlights.map((bloc, index) => (
                <div
                  key={bloc.title}
                  className="border border-white/10 bg-black/30 p-6 transition-colors hover:border-white/20"
                >
                  <p className="font-display text-3xl leading-none text-lime/30">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    {bloc.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{bloc.text}</p>
                </div>
              ))}
            </div>
          </article>
        </ViewportReveal>

        <ViewportReveal variants={fadeUp(motionPrefs)}>
          <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              Besoin d&apos;un contact terrain rapide&nbsp;? Rendez-vous aussi sur le
              formulaire officiel multi-profils.
            </p>
            <Link
              prefetch={false}
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-accent transition-colors hover:text-white"
            >
              Nous contacter
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
