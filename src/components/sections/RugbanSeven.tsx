"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Trophy } from "lucide-react";

import {
  palmarès,
  rugbanSevensParagraph,
} from "@/data/sevens";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

import { CTAButton } from "../ui/CTAButton";
import { SectionLabel } from "../ui/SectionLabel";
import { ViewportReveal } from "../ui/ViewportReveal";

const sevensImagery =
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2100&q=82";

export function RugbanSevenSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y relative overflow-hidden bg-bg-cream text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[90px]"
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 h-[2px] w-1/3 bg-gradient-to-l from-accent/60 to-transparent"
      />

      <div className="container-site relative grid gap-12 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:gap-16">
        <div className="space-y-10 lg:space-y-12">
          <ViewportReveal staggerChildren>
            <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
              <SectionLabel label="équipe élite" className="text-ink [&_span]:bg-accent" />
            </motion.div>

            <div className="space-y-4">
              <motion.h2
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className="font-display text-clamp-h2 uppercase leading-[0.92] text-ink"
              >
                Championnes
                <span className="relative ml-3 inline-block">
                  de France 2025
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-[0.12em] w-full bg-accent/80"
                  />
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent"
              >
                <Trophy className="h-4 w-4 shrink-0" aria-hidden />
                1<sup>re</sup> fois en quatre saisons
              </motion.p>
            </div>
          </ViewportReveal>

          <ViewportReveal variants={staggerContainer(reducedMotion, 0.06)}>
            <div className="grid gap-3 sm:grid-cols-2">
              {palmarès.map((item) => (
                <motion.article
                  key={item.year}
                  variants={fadeUp({ reducedMotion, narrowMotion })}
                  className={cn(
                    "relative flex flex-col gap-3 border p-5 transition-colors",
                    item.highlight
                      ? "border-accent bg-gradient-to-br from-accent/15 via-white to-white shadow-[0_12px_40px_rgba(255,107,53,0.12)]"
                      : "border-black/12 bg-white/60 hover:border-black/25",
                  )}
                >
                  {item.highlight ? (
                    <span
                      aria-hidden
                      className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center bg-accent text-ink"
                    >
                      <Trophy className="h-4 w-4" />
                    </span>
                  ) : null}
                  <p
                    className={cn(
                      "font-display leading-none",
                      item.highlight ? "text-5xl text-accent" : "text-4xl text-ink/90",
                    )}
                  >
                    {item.year}
                  </p>
                  <p
                    className={cn(
                      "text-xs uppercase leading-relaxed tracking-[0.2em]",
                      item.highlight ? "font-semibold text-ink" : "text-ink/75",
                    )}
                  >
                    {item.line}
                  </p>
                </motion.article>
              ))}
            </div>
          </ViewportReveal>

          <ViewportReveal>
            <motion.div
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="border-l-2 border-accent/50 bg-white/50 py-2 pl-6"
            >
              <p className="text-base leading-relaxed text-ink/85 lg:text-lg">
                {rugbanSevensParagraph}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="pt-6"
            >
              <CTAButton href="/rugban-7s" variant="outline" uppercase={false}>
                Voir la saison Rugban 7s
              </CTAButton>
            </motion.div>
          </ViewportReveal>
        </div>

        <ViewportReveal variants={fadeUp({ reducedMotion, narrowMotion })}>
          <div className="group relative min-h-[420px] w-full overflow-hidden border border-black/15 lg:min-h-[560px]">
            <Image
              src={sevensImagery}
              alt="Joueuse de rugby féminine en noir et blanc concentrée avant-match"
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover grayscale-[0.15] transition duration-700 group-hover:scale-[1.03]"
              quality={85}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 border-t border-white/20 bg-black/40 px-6 py-5 backdrop-blur-sm">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-lime">
                  Rugban 7s
                </p>
                <p className="mt-1 font-display text-2xl uppercase leading-none text-white">
                  Élite féminine
                </p>
              </div>
              <p className="font-display text-5xl leading-none text-accent">2025</p>
            </div>
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
