"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, HeartHandshake } from "lucide-react";

import { siteImages } from "@/data/siteImages";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import { remobilisationBlocks } from "@/data/insertionContent";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

export function InsertionRemobilisationSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-lime/6 blur-[100px]"
      />
      <div className="container-site relative space-y-12">
        <ViewportReveal staggerChildren>
          <div className="max-w-3xl space-y-6">
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Remobilisation" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="font-display text-[clamp(2rem,5vw,3rem)] uppercase leading-[0.92]"
            >
              Rugby &amp; remobilisation
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="text-base leading-relaxed text-muted lg:text-lg"
            >
              Actions de rugby et de remobilisation auprès de structures
              spécifiques : établissements médico-sociaux, centres éducatifs
              et partenaires territoriaux qui accueillent des publics éloignés
              du sport.
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={fadeUp(motionPrefs)}>
          <div className="relative min-h-[280px] overflow-hidden border border-white/12 lg:min-h-[360px]">
            <Image
              src={siteImages.partenaireSuez.src}
              alt={siteImages.partenaireSuez.alt}
              fill
              sizes="100vw"
              className="object-cover"
              quality={82}
            />
            <div aria-hidden className="absolute inset-0 bg-black/25" />
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.1)}>
          <div className="grid gap-6 md:grid-cols-3">
            {remobilisationBlocks.map((block, index) => (
              <motion.article
                key={block.id}
                variants={fadeUp(motionPrefs)}
                className="relative overflow-hidden border border-white/12 bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-black p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-lime/35 bg-black/40 text-lime">
                  <HeartHandshake aria-hidden className="h-5 w-5" />
                </span>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-lime">
                  Volet {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl uppercase text-white">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {block.text}
                </p>
              </motion.article>
            ))}
          </div>
        </ViewportReveal>

        <ViewportReveal variants={fadeUp(motionPrefs)}>
          <div className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Vous représentez une structure intéressée par une action de
              remobilisation ? Contactez l&apos;équipe permanente pour cadrer
              les modalités.
            </p>
            <Link
              prefetch={false}
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:text-white"
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
