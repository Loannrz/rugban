"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, GraduationCap, Sparkles } from "lucide-react";

import { siteImages } from "@/data/siteImages";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ViewportReveal } from "@/components/ui/ViewportReveal";
import {
  formationModules,
  formationOverview,
  formationTimeline,
} from "@/data/formation";
import { siteConfig } from "@/data/navigation";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

export function FormationSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();
  const motionPrefs = { reducedMotion, narrowMotion };

  return (
    <section className="section-y relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-lime/8 blur-[90px]"
      />
      <div className="container-site relative space-y-14 lg:space-y-16">
        <ViewportReveal variants={fadeUp(motionPrefs)}>
          <div className="relative min-h-[280px] overflow-hidden border border-white/12 lg:min-h-[360px]">
            <Image
              src={siteImages.actionsColleges.src}
              alt={siteImages.actionsColleges.alt}
              fill
              sizes="100vw"
              className="object-cover"
              quality={82}
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>
        </ViewportReveal>

        <ViewportReveal staggerChildren>
          <div className="max-w-3xl space-y-6">
            <motion.div variants={fadeUp(motionPrefs)}>
              <span className="inline-flex border border-lime/40 bg-lime/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-lime">
                {formationOverview.status}
              </span>
            </motion.div>
            <motion.div variants={fadeUp(motionPrefs)}>
              <SectionLabel label="Axe formation" />
            </motion.div>
            <motion.h2
              variants={fadeUp(motionPrefs)}
              className="font-display text-[clamp(2rem,5vw,3.25rem)] uppercase leading-[0.92]"
            >
              {formationOverview.title}
            </motion.h2>
            <motion.p
              variants={fadeUp(motionPrefs)}
              className="text-base leading-relaxed text-muted lg:text-lg"
            >
              {formationOverview.intro}
            </motion.p>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.1)}>
          <div className="grid gap-6 md:grid-cols-3">
            {formationModules.map((module, index) => (
              <motion.article
                key={module.id}
                variants={fadeUp(motionPrefs)}
                className="relative overflow-hidden border border-white/12 bg-gradient-to-br from-[#161616] via-[#101010] to-black p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-accent/35 bg-black/40 text-accent">
                  <GraduationCap aria-hidden className="h-5 w-5" />
                </span>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Module {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl uppercase text-white">
                  {module.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {module.text}
                </p>
              </motion.article>
            ))}
          </div>
        </ViewportReveal>

        <ViewportReveal variants={fadeUp(motionPrefs)}>
          <article className="relative overflow-hidden border border-accent/45 bg-gradient-to-br from-blue-dark via-[#0f2848] to-black p-8 lg:p-10">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,255,0,0.1),transparent_55%)]"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-lime">
                  <Sparkles aria-hidden className="h-5 w-5" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                    Prochaines étapes
                  </p>
                </div>
                <ol className="space-y-4">
                  {formationTimeline.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-4 text-sm leading-relaxed text-white/75"
                    >
                      <span className="font-display text-2xl leading-none text-lime/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <Link
                prefetch={false}
                href={`mailto:${siteConfig.email}?subject=Formation%20Spor%20Formation%20-%20Structure%20int%C3%A9ress%C3%A9e`}
                className="group inline-flex items-center gap-2 border border-white/25 bg-black/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-lime hover:text-lime"
              >
                Manifester votre intérêt
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </article>
        </ViewportReveal>
      </div>
    </section>
  );
}
