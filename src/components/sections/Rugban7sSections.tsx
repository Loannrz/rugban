"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Shield, Trophy, Users } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import {
  hintonArticle,
  palmarès,
  rugbanSevensParagraph,
  teamIdentityPoints,
} from "@/data/sevens";
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

const identityIcons = [Users, Shield, Trophy] as const;

export function Rugban7sPalmarèsSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-20 h-56 w-56 rounded-full bg-lime/8 blur-[80px]"
      />

      <div className="container-site relative grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
        <ViewportReveal
          variants={fadeLeft(motionPrefs)}
          className="lg:col-span-5"
        >
          <div className="relative h-full overflow-hidden border border-white/12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-black p-8 lg:p-10">
            <div
              aria-hidden
              className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-accent via-lime/70 to-transparent"
            />
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-accent/20"
            />

            <SectionLabel label="Palmarès" />
            <p className="mt-4 font-display text-[clamp(1.5rem,3vw,2rem)] uppercase leading-none text-white/90">
              2022 - 2025
            </p>

            <ol className="relative mt-10 space-y-0 border-l border-dashed border-white/15 pl-7">
              {palmarès.map((entry) => (
                <li
                  key={entry.year}
                  className={cn(
                    "relative pb-8 last:pb-0",
                    "highlight" in entry && entry.highlight && "pb-10",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -left-7 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 bg-black",
                      "highlight" in entry && entry.highlight
                        ? "border-lime bg-lime/20"
                        : "border-accent",
                    )}
                  />
                  <div
                    className={cn(
                      "highlight" in entry &&
                        entry.highlight &&
                        "rounded-sm border border-lime/35 bg-lime/[0.06] p-5 -ml-2",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-[clamp(2rem,4vw,2.75rem)] leading-none",
                        "highlight" in entry && entry.highlight
                          ? "text-lime"
                          : "text-white",
                      )}
                    >
                      {entry.year}
                    </span>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed tracking-wide",
                        "highlight" in entry && entry.highlight
                          ? "font-medium text-white"
                          : "text-muted",
                      )}
                    >
                      {entry.line}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ViewportReveal>

        <ViewportReveal
          variants={fadeRight(motionPrefs)}
          className="flex flex-col justify-center lg:col-span-7 lg:pl-4"
        >
          <SectionLabel label="Identité de l'équipe" />
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] uppercase leading-[0.95]">
            Élite nationale à VII
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
            {rugbanSevensParagraph}
          </p>

          <ul className="mt-10 space-y-5">
            {teamIdentityPoints.map((point, index) => {
              const Icon = identityIcons[index] ?? Trophy;

              return (
                <li key={point} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/[0.03] text-accent">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <p className="pt-2 text-base leading-relaxed text-white/85">
                    {point}
                  </p>
                </li>
              );
            })}
          </ul>
        </ViewportReveal>
      </div>
    </section>
  );
}

export function Rugban7sHintonSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <article className="section-y relative overflow-hidden bg-[#f2f0eb] text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-lime/15 blur-[120px]"
      />

      <div className="container-site relative">
        <ViewportReveal staggerChildren>
          <div className="max-w-3xl border-b border-black/10 pb-10">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Portrait Howard Hinton" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[0.95] tracking-[0.02em]"
            >
              {hintonArticle.title}
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="mt-5 text-base uppercase tracking-[0.14em] text-black/55 lg:text-sm"
            >
              {hintonArticle.subtitle}
            </motion.p>
          </div>
        </ViewportReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <ViewportReveal
            variants={staggerContainer(reducedMotion, 0.1)}
            className="space-y-6 lg:col-span-7"
          >
            {hintonArticle.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                variants={fadeUp(motionPrefs)}
                className={cn(
                  "text-base leading-[1.85] text-black/80 lg:text-lg",
                  index === 0 && "text-lg text-black/90 lg:text-xl",
                )}
              >
                {paragraph}
              </motion.p>
            ))}
          </ViewportReveal>

          <ViewportReveal variants={fadeUp(motionPrefs)} className="lg:col-span-5">
            <blockquote className="relative overflow-hidden border border-black/10 bg-black p-8 text-white lg:sticky lg:top-28 lg:p-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.15),transparent_60%)]"
              />
              <Quote
                aria-hidden
                className="relative h-10 w-10 text-accent"
                strokeWidth={1.5}
              />
              <p className="relative mt-8 font-display text-[clamp(1.35rem,2.5vw,1.75rem)] uppercase leading-snug tracking-[0.02em]">
                {hintonArticle.pullQuote}
              </p>
              <footer className="relative mt-8 border-t border-white/15 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-lime">
                  Howard Hinton
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
                  Circuit national · saison 2025
                </p>
              </footer>
            </blockquote>
          </ViewportReveal>
        </div>
      </div>
    </article>
  );
}
