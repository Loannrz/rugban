"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  palmarès,
  rugbanSevensParagraph,
} from "@/data/sevens";
import { fadeUp } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";
import Link from "next/link";

import { ViewportReveal } from "../ui/ViewportReveal";

const sevensImagery =
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=2100&q=82";

export function RugbanSevenSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y bg-bg-cream text-ink">
      <div className="container-site grid gap-16 lg:grid-cols-[1.05fr_minmax(0,0.95fr)]">
        <div className="space-y-14">
          <ViewportReveal staggerChildren>
            <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
              <span className="inline-flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.38em] text-ink">
                <span aria-hidden className="h-[2px] w-14 bg-accent" />
                équipe élite
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="font-display text-clamp-h2 uppercase text-ink leading-none"
            >
              Championnes de France 2025
            </motion.h2>
            <motion.p
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="text-sm font-semibold uppercase tracking-[0.32em] text-accent"
            >
              Pour la 1<sup>ère</sup> fois en quatre saisons
            </motion.p>
          </ViewportReveal>

          <ViewportReveal staggerChildren delayChildren={0.05}>
            <div className="flex flex-wrap gap-4">
              {palmarès.map((item) => (
                <motion.div
                  variants={fadeUp({ reducedMotion, narrowMotion })}
                  key={item.year}
                  className="min-w-[220px] flex-1 border border-black/10 bg-black/10 p-4"
                >
                  <p className="font-display text-4xl">{item.year}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-ink">
                    {item.line}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp({ reducedMotion, narrowMotion })} className="text-lg text-ink">
              {rugbanSevensParagraph}
            </motion.p>

            <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
              <Link
                prefetch={false}
                href="/rugban-7s"
                className="inline-flex items-center gap-4 text-accent"
              >
                Voir la saison
                <ArrowRight className="h-6 w-6" aria-hidden />
              </Link>
            </motion.div>
          </ViewportReveal>
        </div>

        <ViewportReveal variants={fadeUp({ reducedMotion, narrowMotion })}>
          <div className="relative min-h-[480px] w-full overflow-hidden border border-black/14">
            <Image
              src={sevensImagery}
              alt="Joueuse de rugby féminine en noir et blanc concentrée avant-match"
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover grayscale-[0.1]"
              quality={85}
            />
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
