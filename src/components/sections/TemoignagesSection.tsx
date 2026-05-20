"use client";

import { motion, useReducedMotion } from "framer-motion";

import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useIsNarrowMotion } from "@/lib/useMediaQuery";

import { SectionLabel } from "../ui/SectionLabel";
import { TestimonialCard } from "../ui/TestimonialCard";
import { ViewportReveal } from "../ui/ViewportReveal";

export function TemoignagesSection() {
  const reducedMotion = useReducedMotion() === true;
  const narrowMotion = useIsNarrowMotion();

  return (
    <section className="section-y relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_0%,rgba(255,107,53,0.12),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_90%_100%,rgba(255,107,53,0.08),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="container-site relative space-y-14">
        <ViewportReveal staggerChildren>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-6">
              <motion.div variants={fadeUp({ reducedMotion, narrowMotion })}>
                <SectionLabel label="ils en parlent" />
              </motion.div>
              <motion.h2
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className="max-w-3xl font-display text-clamp-h2 uppercase"
              >
                Parcours vécus après la Prépa Sport
              </motion.h2>
              <motion.p
                variants={fadeUp({ reducedMotion, narrowMotion })}
                className="max-w-2xl text-base leading-relaxed text-muted"
              >
                Des jeunes franciliens racontent comment le dispositif leur a redonné
                structure, confiance et une trajectoire professionnelle concrète.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp({ reducedMotion, narrowMotion })}
              className="hidden border border-white/12 bg-white/[0.03] px-6 py-5 lg:block"
            >
              <p className="font-display text-5xl leading-none text-accent">
                {String(testimonials.length).padStart(2, "0")}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted">
                Parcours partagés
              </p>
            </motion.div>
          </div>
        </ViewportReveal>

        <ViewportReveal variants={staggerContainer(reducedMotion, 0.08)}>
          <div className="grid gap-8">
            {testimonials.map((item, idx) => (
              <TestimonialCard
                key={item.id}
                testimonial={item}
                index={idx}
              />
            ))}
          </div>
        </ViewportReveal>
      </div>
    </section>
  );
}
