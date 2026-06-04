"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Route } from "lucide-react";

import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { CountUpNumber } from "../ui/CountUp";
import { CTAButton } from "../ui/CTAButton";
import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

const prepaModules = [
  { label: "Sports", hours: 126 },
  { label: "Professions", hours: 82 },
  { label: "Socio-éducation", hours: 176 },
] as const;

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

        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <ViewportReveal
            variants={fadeLeft({ reducedMotion, narrowMotion })}
            className="lg:col-span-5"
          >
            <div className="relative h-full overflow-hidden border border-white/15 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-8 lg:p-10">
              <div
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent via-lime/80 to-transparent"
              />
              <div
                aria-hidden
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-lime/25"
              />

              <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-accent">
                Taux médian projet
              </p>

              <div className="mt-6 flex items-end gap-2">
                <CountUpNumber
                  end={85}
                  suffix="%"
                  ariaLabel="85 pourcent pour la réussite en sortie projet"
                  className="font-display text-[clamp(4rem,10vw,7.5rem)] leading-none text-white"
                />
              </div>

              <div className="mt-8">
                <div
                  aria-hidden
                  className="h-[3px] w-full overflow-hidden rounded-full bg-white/10"
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-lime"
                    initial={{ width: reducedMotion ? "85%" : "0%" }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: reducedMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted">
                  Objectif de réussite en sortie
                </p>
              </div>

              <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-muted">
                Chiffres issus du suivi sur les derniers entrants en Prépa Sport : hausse
                nette du retour formation et des démarches régulières hors structure.
              </p>
            </div>
          </ViewportReveal>

          <ViewportReveal
            variants={fadeRight({ reducedMotion, narrowMotion })}
            className="flex flex-col justify-center lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-10"
          >
            <p className="text-lg leading-relaxed text-white lg:text-xl">
              Deux dispositifs structurés pour accompagner chaque jeune vers un projet
              durable.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                "Passe D pour les plus jeunes : immersion en club pro et sur les chantiers du sport événementiel.",
                "Prépa Sport pour les 16-25 ans : parcours certifiant jusqu'au BAFA ou au socle BP JEPS.",
                "Trois blocs métiers - sportifs, socio-éducatifs, professionnels - avec clubs pros et événements terrain.",
              ].map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="font-display text-2xl leading-none text-accent/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-muted">{item}</p>
                </li>
              ))}
            </ul>
          </ViewportReveal>
        </div>

        <ViewportReveal
          variants={staggerContainer(reducedMotion, 0.1)}
          className="grid gap-6 lg:grid-cols-2"
        >
          <motion.article
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="group relative flex flex-col gap-8 overflow-hidden border border-white/15 bg-[#141414] p-8 transition-colors hover:border-white/25"
          >
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
              Collégiens / lycéens • deux journées complètes
            </p>

            <ol className="relative space-y-0 border-l border-dashed border-white/20 pl-6">
              {[
                {
                  day: "Jour 1",
                  text: "Visite guidée dans un club professionnel francilien avec échanges.",
                },
                {
                  day: "Jour 2",
                  text: "Visite chantier et rencontres avec techniciens du sport événementiel.",
                },
              ].map((step) => (
                <li key={step.day} className="relative pb-6 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-black"
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                    {step.day}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </motion.article>

          <motion.article
            variants={fadeUp({ reducedMotion, narrowMotion })}
            className="relative flex flex-col gap-8 overflow-hidden border border-accent/60 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,255,0,0.12),transparent_60%)]"
            />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-lime">
                <span className="flex h-12 w-12 items-center justify-center border border-lime/40 bg-black/40">
                  <Route aria-hidden className="h-6 w-6" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white">
                  Prépa sport
                </p>
              </div>
              <span className="font-display text-4xl leading-none text-lime/25">02</span>
            </div>

            <p className="relative text-sm uppercase tracking-[0.22em] text-white/90">
              16-25 ans, situation NEET • une session gratuite / an
            </p>

            <div className="relative grid grid-cols-3 gap-3">
              {prepaModules.map((mod) => (
                <div
                  key={mod.label}
                  className="border border-white/15 bg-black/30 px-3 py-4 text-center"
                >
                  <p className="font-display text-2xl leading-none text-lime">
                    {mod.hours}
                    <span className="text-sm">h</span>
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-muted">
                    {mod.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="relative text-sm text-muted">
              Certifications : BAFA, PSC1, socle BP JEPS.
            </p>

            <CTAButton href="/prepa-sport" className="relative w-full sm:w-auto">
              Candidater à la Prépa Sport
            </CTAButton>
          </motion.article>
        </ViewportReveal>
      </div>
    </section>
  );
}
