"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Quote } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import {
  passeDJour1,
  passeDJour2,
  prepaSportHighlights,
} from "@/data/insertionContent";
import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

function TestimonialCard({
  item,
  index,
  reducedMotion,
  narrowMotion,
}: {
  item: (typeof testimonials)[number];
  index: number;
  reducedMotion: boolean;
  narrowMotion: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp({ reducedMotion, narrowMotion })}
      className="relative flex h-full min-h-[280px] flex-col overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-8 lg:min-h-[300px] lg:p-9"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.08),transparent_55%)]"
      />
      <Quote aria-hidden className="relative h-8 w-8 text-accent/80" strokeWidth={1.5} />

      <blockquote className="relative mt-6 flex-1">
        <p className="text-lg leading-relaxed text-white lg:text-xl">
          « {item.quote} »
        </p>
      </blockquote>

      <footer className="relative mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
        <span
          aria-hidden
          className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-black/50 font-display text-lg text-accent"
        >
          {item.initials}
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            {item.author}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-lime">
            {item.role}
          </p>
        </div>
        <span className="ml-auto font-display text-3xl leading-none text-white/10">
          {String(index + 1).padStart(2, "0")}
        </span>
      </footer>
    </motion.article>
  );
}

export function PrepaSportTestimonialsSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-lime/6 blur-[100px]"
      />

      <div className="container-site relative space-y-12 lg:space-y-14">
        <ViewportReveal staggerChildren>
          <div className="max-w-3xl space-y-4">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Parcours & relais" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.92]"
            >
              Ils en parlent
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="text-base leading-relaxed text-muted lg:text-lg"
            >
              Retours de diplômés et passerelle vers la Passe D pour les
              publics plus jeunes - deux entrées complémentaires dans le
              réseau Rugban.
            </motion.p>
          </div>
        </ViewportReveal>

        <div className="flex flex-col gap-10 lg:gap-12">
          <ViewportReveal
            variants={staggerContainer(reducedMotion, 0.12)}
            className="grid items-stretch gap-6 md:grid-cols-2 lg:gap-8"
          >
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={item.id}
                item={item}
                index={index}
                reducedMotion={reducedMotion}
                narrowMotion={narrowMotion}
              />
            ))}
          </ViewportReveal>

          <ViewportReveal variants={fadeUp(motionPrefs)}>
            <aside className="relative overflow-hidden border border-accent/40 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 lg:p-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,255,0,0.1),transparent_60%)]"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center border border-lime/40 bg-black/40 text-lime">
                    <MapPin aria-hidden className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-lime">
                      Passerelle Passe D
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.14em] text-white/70">
                      Collégiens / lycéens
                    </p>
                  </div>
                </div>
                <span className="font-display text-5xl leading-none text-white/10">
                  D
                </span>
              </div>

              <div className="relative mt-10 grid gap-8 lg:grid-cols-2">
                {[
                  { label: "Jour 01", items: passeDJour1 },
                  { label: "Jour 02", items: passeDJour2 },
                ].map((day) => (
                  <div key={day.label}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                      {day.label}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {day.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-white/70"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="relative mt-10 border-t border-white/10 pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Synthèses clés Prépa Sport
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {prepaSportHighlights.map((bloc, index) => (
                    <div
                      key={bloc.title}
                      className="border border-white/10 bg-black/25 p-4"
                    >
                      <p className="font-display text-2xl leading-none text-lime/30">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                        {bloc.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {bloc.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                prefetch={false}
                href="/insertion"
                className="group relative mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent transition-colors hover:text-white"
              >
                Découvrir la Passe D
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </aside>
          </ViewportReveal>
        </div>
      </div>
    </section>
  );
}
